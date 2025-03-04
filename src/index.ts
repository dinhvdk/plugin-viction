import type { Plugin } from "@elizaos/core";
import transferToken from "./actions/transfer.ts";
import transferVic from "./actions/transfer_vic.ts";
import infoVic from "./actions/vic_infomation.ts";
import deployToken from "./actions/deploy_token_vrc25.ts";
import deployNft from "./actions/deploy_nft_vrc725.ts";

export const victionPlugin: Plugin = {
    name: "viction",
    description: "Viction Plugin for Eliza",
    actions: [transferToken, transferVic, infoVic,deployToken, deployNft],
    evaluators: [],
    providers: [],
};
export default victionPlugin;
