import {
    type ActionExample,
    type Content,
    type HandlerCallback,
    type IAgentRuntime,
    type Memory,
    type State,
    type Action,
    ModelClass
} from "@elizaos/core";
import { generateObjectDeprecated } from "@elizaos/core";
import { elizaLogger } from "@elizaos/core";
import { composeContext } from "@elizaos/core";
import Web3 from 'web3'
import {BYTECODE_VRC25, ABI_VRC25} from "../abi/vrc25.ts";
const {toHex}=Web3.utils

export interface DeployTokenVRC25Content extends Content {
    name: string;
    symbol: string;
    decimals: number;
    initialSupply: number
}


function isDeployTokenVRC25Content(
    _runtime: IAgentRuntime,
    content: any,
): content is DeployTokenVRC25Content {
    elizaLogger.log("Content for deploy", content);
    return (
        typeof content.name === "string" &&
        typeof content.symbol === "string" &&
        typeof content.decimals === "number" &&
        typeof content.initialSupply === "number"

    );
}

const deployTemplate = `Respond with a JSON markdown block containing only the extracted values. Use null for any values that cannot be determined.

Example response:
\`\`\`json
{
    "name": "Coin98",
    "symbol": "C98",
    "decimals": 18,
    "initialSupply": 1000000000
}
\`\`\`

{{recentMessages}}

Extract the following information about the requested token deploy:
- Token name
- Token symbol
- Token decimals
- Token supply

If no token name, token symbol, token decimals, token supply is mentioned, respond with null.
`;

export default {
    name: "DEPLOY_TOKEN",
    similes: ["DEPLOY_VRC25, CREATE_TOKEN, CREATE_TOKEN_VRC25",
        "DEPLOY_NEW_TOKEN",
        "CREATE_NEW_TOKEN",
        "LAUNCH_TOKEN"],

    description: "Deploy tokens from agent's wallet on Viction chain",

    handler:async(runtime: IAgentRuntime, message: Memory, state: State | undefined, options: {
        [p: string]: unknown
    } | undefined, callback: HandlerCallback | undefined): Promise<unknown> =>{
        elizaLogger.log("Starting DEPLOY_TOKEN handler...");

        if (!state) {
            state = (await runtime.composeState(message)) as State;
        } else {
            state = await runtime.updateRecentMessageState(state);
        }

        const deploymentContext = composeContext({
            state,
            template: deployTemplate,
        });

        const content:DeployTokenVRC25Content = await generateObjectDeprecated({
            runtime,
            context: deploymentContext,
            modelClass: ModelClass.LARGE,
        });
        content.decimals=Number(content.decimals)
        content.initialSupply=Number(content.initialSupply)
        if (!isDeployTokenVRC25Content(runtime, content)) {
            if (callback) {
                callback({
                    text: "Token name, token symbol, token decimals, token supply needed to deploy the token.",
                    content: { error: "Invalid deploy content" },
                });
            }
            return false;
        }

        try{
            const privateKey = runtime.getSetting("VICTION_PRIVATE_KEY")
            const senderAddress = runtime.getSetting("VICTION_ADDRESS")
            const rpcUrl = runtime.getSetting("VICTION_RPC_URL")
            const client = new Web3(new Web3.providers.HttpProvider(rpcUrl))
            const contract=new client.eth.Contract(ABI_VRC25 as any)
            const {name,symbol,decimals, initialSupply}=content
            const encodedData=await contract.deploy({
                data: "0x" + BYTECODE_VRC25,
                arguments: [name,symbol,decimals,initialSupply]
            }).encodeABI()


            const transactionPayload = {
                from : senderAddress,
                data : encodedData,
            }

            const gas = await client.eth.estimateGas(transactionPayload)

            //@ts-ignore
            transactionPayload.gas = toHex(gas)
            //@ts-ignore
            transactionPayload.gasLimit = toHex(gas)

            const { rawTransaction: signedTx } = await client.eth.accounts.signTransaction(transactionPayload as any, privateKey as string)

            const {contractAddress,transactionHash}  = await client.eth.sendSignedTransaction(signedTx as string)

            if (callback) {
                callback({
                    text: `Successfully deployed ${content.name} Token on Viction chain. Token address: ${contractAddress}, and transaction hash: ${transactionHash}`,
                    content: {
                        success: true,
                        signature: signedTx,
                        name: content.name,
                        symbol: content.symbol,
                        decimals: content.decimals,
                        initialSupply: content.initialSupply
                    },
                });
            }
        }catch(e){
            console.error("error",e)
        }
        return true
    },
    validate: async (runtime: IAgentRuntime, message: Memory, state: State | undefined) => {
        elizaLogger.log("Validating token transfer from user:", message.userId);

        return true
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Deploy token with name: Coin98, symbol: C98, decimals: 18, supply: 1000000 on Viction chain",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Sure thing, deploying ...",
                    action: "DEPLOY_TOKEN",
                },
            },
        ],
    ] as ActionExample[][],

} as Action

