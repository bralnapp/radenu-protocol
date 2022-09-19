import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

import { useContractContext } from "src/context/ContractContext"
import Button from "../components/Button"

import Coinbase from 'src/assests/coinbase.png'
import ArrowLeft from 'src/assests/arrow-left.png'

const ConnectWalletModal = ({ setShowConnectWalletModal, showConnectWalletModal }) => {

    const { connectWallet } = useContractContext()
    const handleClose = () => setShowConnectWalletModal(false)

    const handleConnectWallet = () => {
        handleClose()
        connectWallet()
    }

    return (
        <Transition
            appear
            show={showConnectWalletModal}
            as={Fragment}
        >
            <Dialog
                as="div"
                className="fixed inset-0 z-[999999]"
                onClose={handleClose}
            >
                <div className="min-h-screen text-center">
                    <Dialog.Overlay className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-75 z-[999999]" />
                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <div className="inline-block w-11/12 text-left align-middle transition-all z-[999999999] relative shadow-xl bg-white max-w-lg px-6 py-6 rounded-[10px]">
                        <Dialog.Title as="div" className="">
                            <img
                                src={ArrowLeft}
                                alt=""
                                className="cursor-pointer md:h-6 md:w-6 mb-[25px]"
                                onClick={handleClose}
                            />
                            <h1 className="capitalize text-xl leading-6 text-[#0B0B27] font-bold md:text-2xl md:leading-6">Connect EVM Wallet</h1>
                        </Dialog.Title>
                        <section className="my-6">
                            <div className="flex space-x-2 mb-5 items-center">
                                <img src={Coinbase} alt="" className="h-8 w-8" />
                                <p className="font-bold text-sm text-[#475467]">Coinbase</p>
                            </div>
                            <p className="mb-5 text-sm text-[#737374]">You'll need to install <strong>Coinbase</strong> wallet to continue. Once you have it installed, go ahead and refresh the page.</p>
                            <div className="flex items-center justify-between">
                                <button onClick={handleClose} className="text-[#1C144C] font-medium text-base leading-[18px] md:text-xl">Back</button>
                                <Button onClick={handleConnectWallet} title="connect" className="w-20 h-8 rounded-2xl md:w-[125px] md:h-12 md:rounded-[32px] md:text-lg" />
                            </div>
                        </section>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default ConnectWalletModal