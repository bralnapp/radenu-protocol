import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { ethereum, web3 } from 'src/config/coinbase.config';
import { initialState } from 'src/utils/helpers/store.helpers';

import {
    useGetPersistedStore,
    useSetPersistStore
} from "../utils/helpers/store.helpers";

const ContractContext = createContext()


const ContractContextProvider = ({ children }) => {
    const [store, setStore] = useState(useGetPersistedStore());
    useSetPersistStore(store);

    const connectWallet = async () => {
        if (!ethereum) return toast.error("You must install Coinbase wallet in your browser extension.")
        const notification = toast.loading("Connecting wallet")
        try {
            const selectedAccount = await ethereum
                .request({ method: "eth_requestAccounts" })
                .then((accounts) => accounts[0])
                .catch(() => {
                    throw Error("No account selected");
                })

            setStore(prevState => ({
                ...prevState,
                account: selectedAccount,
                isWalletConnected: true,
                status: "",
            }))
            toast.success("Wallet has been connected successfully!.", {
                id: notification
            })
        } catch (error) {
            toast.error(error?.message, {
                id: notification
            })
        }
    }

    const checkIfWalletConnected = async () => {
        if (ethereum) {
            // check if user is connected but the local storage was clear
            if (ethereum.selectedAddress) {
                setStore({
                    ...store,
                    isWalletConnected: true,
                    account: ethereum.selectedAddress,
                    status: "",
                });
            }

            if (ethereum.selectedAddress === undefined) {
                // not connected clear local store
                setStore({
                    ...initialState,
                });
            }
            ethereum.on("accountsChanged", async (accounts) => {
                accounts = await web3.eth.getAccounts();
                if (accounts.length) {
                    setStore({
                        ...store,
                        isWalletConnected: true,
                        account: accounts[0],
                        status: "",
                    });
                } else {
                    setStore({
                        ...initialState,
                    }
                    );
                }
            });
        } else {
            setStore(prevState => ({
                ...prevState,
                status: "",
            }))
        }
    }


    // const initRadenuContract = async () => {
    //     try {
    //         if (!ethereum) return "You must install Coinbase wallet address, a virtual Ethereum wallet, in your browser."
    //         const provider = new ethers.providers.Web3Provider(window.ethereum);
    //         const signer = provider.getSigner();
    //         const _walletAddress = await signer.getAddress();

    //         const _contract = new ethers.Contract(
    //             contractAddress,
    //             contractABI,
    //             signer
    //         );
    //         return {
    //             contract: _contract,
    //             walletAddress: _walletAddress,
    //         };
    //     } catch (error) {
    //         throw Error("Address is Null")
    //     }
    // }

    // const initTokenContract


    useEffect(() => {
        checkIfWalletConnected()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <ContractContext.Provider value={{ connectWallet, setStore, ...store }}>
            {children}
        </ContractContext.Provider >
    )
}

const useContractContext = () => useContext(ContractContext);

export {
    ContractContextProvider,
    useContractContext,
}