import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Button from "../components/Button"
import CloseIcon from "src/assests/close.png"
import RiskIcon from "src/assests/risk-icon.png"
import CheckBox from "../components/checkbox"
import { initRadenuContract, initRadenuTokenContract } from "src/utils/helpers/contract.helpers"
import { convertToNumber, formatUnit, parseUnit } from "src/utils/helpers/format.helper"
import { exchangeRate } from "src/utils/constants"
import toast from "react-hot-toast"
import { useContractContext } from "src/context/ContractContext"


const RiskNoticeOne = ({ showRiskNoticeOne, setShowRiskNoticeOne, formData, setFormData, setBalance, setOrderList }) => {

    const { account } = useContractContext()
    const [isCreatingOrder, setIsCreatingOrder] = useState(false)

    const handleCheckbox = () => {
        setFormData(prev => ({
            ...prev,
            isTermsAccepted: !formData.isTermsAccepted,
        }))
    }

    const getOrders = async () => {
        try {
            const response = await initRadenuContract()
            const contract = response.contract
            const totalOrder = await contract.getTotalOrder()
            setOrderList(totalOrder)
        } catch (error) {
            toast.error('Something went wrong')
            console.log({ error })
        }
    }

    const getUserBalance = async () => {
        const response = await initRadenuTokenContract()
        const contract = response.contract
        const accountBalance = await contract.balanceOf(account)
        setBalance(formatUnit(accountBalance))
    }

    const handleCreateOrder = async () => {
        const notification = toast.loading('Please wait...Transaction in process')
        setIsCreatingOrder(true)
        try {
            const response = await initRadenuContract()
            const contract = response.contract
            const txHash = await contract.createOrder(
                parseUnit(convertToNumber(formData?.amount)),
                parseUnit(convertToNumber(formData?.accountNumber)),
                formData?.accountName,
                formData?.bankName,
                "Nigeria",
                parseUnit(exchangeRate)
            )
            const receipt = await txHash.wait()
            if (receipt) {
                getUserBalance()
                getOrders()
                setShowRiskNoticeOne(false)
                setIsCreatingOrder(false)
                setFormData({})
                toast.success("Order has been made", {
                    id: notification
                })
            }
        } catch (error) {
            setIsCreatingOrder(false)
            toast.error("Opps! Something went wrong.", {
                id: notification
            })
        }
    }
    return (
        <Transition
            appear
            show={showRiskNoticeOne}
            as={Fragment}
        >
            <Dialog
                as="div"
                className="fixed inset-0 z-[999999]"
                onClose={() => setShowRiskNoticeOne(false)}
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
                        <Dialog.Title as="div" className="flex justify-between items-center">
                            <img
                                src={CloseIcon}
                                alt=""
                                className="cursor-pointer ml-auto"
                                onClick={() => setShowRiskNoticeOne(false)}
                            />
                        </Dialog.Title>
                        <section className="my-6">
                            <div className="mx-auto w-fit flex flex-col items-center">
                                <img src={RiskIcon} alt="" />
                                <h3 className="capitalize mt-4 text-center text-xl leading-6 text-black font-bold md:text-2xl md:leading-6">risk notice</h3>
                            </div>
                            <div className="my-4">
                                <p className="text-[#737374] text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A venenatis nec curabitur et in. Et purus placerat dui, mauris id sodales aliquet ipsum. Rhoncus tempor eget morbi leo. Nulla egestas enim amet pretium vel amet massa. </p>
                            </div>
                            <div className="flex items-center">
                                <CheckBox
                                    checked={formData.isTermsAccepted}
                                    onChange={handleCheckbox}
                                />
                                <p className="text-[#737374] text-xs md:text-base">I have read and agree to the above terms and condition</p>
                            </div>
                        </section>
                        <div className="flex items-center space-x-[10px] justify-end md:space-x-[22px]">
                            <Button
                                type="button"
                                title="confirm"
                                className="w-full h-9 rounded-[5px] text-sm leading-[18px]"
                                onClick={handleCreateOrder}
                                isDisabled={isCreatingOrder}
                            />
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default RiskNoticeOne