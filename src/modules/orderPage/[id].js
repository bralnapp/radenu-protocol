import { useParams } from "react-router-dom";
import Button from "../common/components/Button";
import CopyToClipboard from "../common/components/copyToClipboard"
import DashboadLayout from "../dashboard/components/layout"
import Status from "../dashboard/components/status";
import Countdown from 'react-countdown';
import ArrowLeft from "src/assests/arrow-left.png"
import { useEffect, useState } from "react";
import ConfirmTransferModal from "../common/modal/ConfirmTransferModal";
import { formatDate, formatUnit } from "src/utils/helpers/format.helper";
import { orderState } from "src/utils/constants";
import { initRadenuContract } from "src/utils/helpers/contract.helpers";
import ExchangerDetails from "../dashboard/components/exchangerDetails";

const OrderTransactionPage = () => {
    const { id: orderId } = useParams()
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [orderData, setOrderData] = useState([])

    const getOrderById = async () => {
        try {
            const response = await initRadenuContract()
            const contract = response.contract
            const data = await contract.order(Number(orderId))
            setOrderData(data)
        } catch (error) {
            console.log({ error })
        }
    }

    useEffect(() => {
        getOrderById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const accountDetailsText = `Bank name: ${orderData?.bankName} \nAccount name: ${orderData?.accountName} \nAccount number: ${formatUnit(orderData?.accountNumber)}`


    const handleReleasePayment = () => {
        setShowConfirmModal(true)
    }
    return (
        <DashboadLayout>
            <>
                <ConfirmTransferModal
                    orderId={orderId}
                    showConfirmModal={showConfirmModal}
                    setShowConfirmModal={setShowConfirmModal}
                    setOrderData={setOrderData}
                />
                <div className="layout-container md:grid md:grid-cols-2 md:gap-x-8">
                    <div className="bg-white p-6">
                        <a href="/orders" className="mb-[29px] inline-block">
                            <img src={ArrowLeft} alt="" />
                        </a>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className='text-[#192839] capitalize  font-medium text-lg'>recepient details</h3>
                            <CopyToClipboard text={accountDetailsText} />
                        </div>
                        <div className="flex space-x-2 text-[#737374] text-[15px] leading-[21px]">
                            <p className="ml-auto capitalize mb-6">
                                time remaining:
                            </p>
                            <Countdown date={Date.now() + (45 * 60000)} renderer={props => <p className="text-[#9B0C14] text-[15px] leading-[21px]">{props.minutes} : {props.seconds} </p>} />
                        </div>
                        <div className="space-y-4 mb-12">
                            {orderData.length > 0 ? <div className="space-y-4 mb-12">
                                <div className="flex items-center capitalize text-sm justify-between">
                                    <p className="text-[#5B616E]">Transfer To</p>
                                    <p className="text-[#1C144C]">{orderData?.accountName}</p>
                                </div>
                                <div className="flex items-center capitalize text-sm justify-between">
                                    <p className="text-[#5B616E]">Account Details</p>
                                    <p className="text-[#1C144C]">{formatUnit(orderData?.accountNumber)}</p>
                                </div>
                                <div className="flex items-center capitalize text-sm justify-between">
                                    <p className="text-[#5B616E]">Bank</p>
                                    <p className="text-[#1C144C]">{(orderData?.bankName)}</p>
                                </div>
                                <div className="flex items-center capitalize text-sm justify-between">
                                    <p className="text-[#5B616E]">Amount</p>
                                    <p className="text-[#1C144C]">${formatUnit(orderData?.amount)}</p>
                                </div>
                                <div className="flex items-center capitalize text-sm justify-between">
                                    <p className="text-[#5B616E]">Rate</p>
                                    <p className="text-[#1C144C]">${formatUnit(orderData?.exchangeRate)}</p>
                                </div>
                                <div className="flex items-center capitalize text-sm justify-between">
                                    <p className="text-[#5B616E]">Fee</p>
                                    <p className="text-[#1C144C]">$5</p>
                                </div>
                                <div className="flex items-center capitalize text-sm justify-between">
                                    <p className="text-[#5B616E]">Date</p>
                                    <p className="text-[#1C144C]">{formatDate(orderData?.timeInitiated)}</p>
                                </div>
                                <div className="flex items-center capitalize text-sm justify-between">
                                    <p className="text-[#5B616E]">status</p>
                                    <Status status={orderState[orderData?.state]} />
                                </div>
                            </div> : null
                            }

                        </div>
                        <div className="space-y-4">
                            {orderData?.state > 2 ? null :
                                <Button
                                    onClick={handleReleasePayment}
                                    title={orderState[orderData?.state]?.toLowerCase() === "completed" ? "you've confirmed your payment" : "confirm payment completion"}
                                    className="w-full h-10 text-sm md:text-base md:leading-[18px]"
                                    isDisabled={orderState[orderData?.state]?.toLowerCase() === "completed"}
                                />
                            }
                        </div>
                    </div>

                    <ExchangerDetails
                        transactionState={orderData?.state}
                        address={orderData?.sender}
                        sender={orderData?.sender}
                    />
                </div>
            </>
        </DashboadLayout>
    )
}

export default OrderTransactionPage