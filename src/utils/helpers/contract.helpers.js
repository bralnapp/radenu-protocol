import { ethers } from "ethers";
import { RadenuContractAbi, RadenuContractAddress, RadenuTokenContractAbi, RadenuTokenContractAddress } from "../constants";

const { ethereum } = window;
const initRadenuContract = async () => {
    try {
        if (!ethereum) return "You must install Coinbase wallet address, a virtual Ethereum wallet, in your browser."
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const _walletAddress = await signer.getAddress();

        const _contract = new ethers.Contract(
            RadenuContractAddress,
            RadenuContractAbi,
            signer
        );
        return {
            contract: _contract,
            walletAddress: _walletAddress,
        };
    } catch (error) {
        throw Error("Address is Null")
    }
}

const initRadenuTokenContract = async () => {
    try {
        if (!ethereum) return "You must install Coinbase wallet address, a virtual Ethereum wallet, in your browser."
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const _walletAddress = await signer.getAddress();

        const _contract = new ethers.Contract(
            RadenuTokenContractAddress,
            RadenuTokenContractAbi,
            signer
        );
        return {
            contract: _contract,
            walletAddress: _walletAddress,
        };
    } catch (error) {
        throw Error("Address is Null")
    }
}




export {
    initRadenuContract,
    initRadenuTokenContract,
}

