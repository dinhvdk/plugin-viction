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
import {BYTECODE_VRC725, ABI_VRC725} from "../abi/vrc725.ts";
const {toHex}=Web3.utils

export interface DeployNftVRC725Content extends Content {
    name: string;
    symbol: string;
    issuer: string;
    baseUrl: string;
}

function isDeployNftVRC725Content(
    _runtime: IAgentRuntime,
    content: any,
){
    elizaLogger.log("Content for deploy", content);
    return (
        typeof content.name === "string" &&
        typeof content.symbol === "string" &&
        typeof content.baseUrl === "string" &&
        typeof content.issuer === "string"
    );
}

const deployTemplate = `Respond with a JSON markdown block containing only the extracted values. Use null for any values that cannot be determined.



{{recentMessages}}

Extract the following information about the requested nft deploy:
- name
- symbol
- issuer
- baseUrl

If no nft name, nft symbol, nft issuer, nft base url is mentioned, respond with null.
`;

export default {
    name: "DEPLOY_NFT",
    similes: [],

    description: "Deploy nft from agent's wallet on Viction chain",

    handler:async(runtime: IAgentRuntime, message: Memory, state: State | undefined, options: {
        [p: string]: unknown
    } | undefined, callback: HandlerCallback | undefined): Promise<unknown> =>{
        elizaLogger.log("Starting DEPLOY_NFT handler...");

        if (!state) {
            state = (await runtime.composeState(message)) as State;
        }
        else {
            state = await runtime.updateRecentMessageState(state);
        }

        const deploymentContext = composeContext({
            state,
            template: deployTemplate,
        });

        const content:DeployNftVRC725Content = await generateObjectDeprecated({
            runtime,
            context: deploymentContext,
            modelClass: ModelClass.LARGE,
        });
        console.log("content:",content)

        if (!isDeployNftVRC725Content(runtime, content)) {
            if (callback) {
                callback({
                    text: "NFT name, NFT symbol, NFT issuer, NFT base url needed to deploy the nft.",
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
            const contract=new client.eth.Contract(ABI_VRC725 as any)
            const {name,symbol,issuer,baseUrl}=content
            const encodedData=await contract.deploy({
                data: "0x" + BYTECODE_VRC725,
                arguments: [name,symbol,baseUrl,issuer]
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
                    text: `Successfully deployed NFT name ${content.name} on Viction chain. Contract address: ${contractAddress}, and transaction hash: ${transactionHash}`,
                    content: {
                        success: true,
                        signature: signedTx,
                    },
                });
            }
        }catch(e){
            console.error("error",e)
        }
        return true
    },
    validate: async (runtime: IAgentRuntime, message: Memory, state: State | undefined) => {
        elizaLogger.log("Validating nft transfer from user:", message.userId);

        return true
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Can you deploy nft on Viction chain?",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Sure thing, deploying ...",
                    action: "DEPLOY_NFT",
                },
            },
        ],
    ] as ActionExample[][],

} as Action

