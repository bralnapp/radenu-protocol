import { useEffect, useState } from 'react'
import Button from 'src/modules/common/components/Button'
import Input from 'src/modules/common/components/input'
import ArrowLeft from "src/assests/arrow-left.png"
import Select from 'src/modules/common/components/select'
import { bankList } from 'src/utils/data/data.bankList'
import getBankDetails from 'src/api'
import toast from 'react-hot-toast'
import TradeDetails from 'src/modules/common/modal/TradeDetails'
import RiskNoticeOne from 'src/modules/common/modal/RiskNoticeOne'

const StepTwo = ({ setFormData, formData, initialbankDetails, setBalance, setOrderList }) => {
    const [isValid, setIsValid] = useState(false)
    const [showTradeDetails, setShowTradeDetails] = useState(false)
    const [showRiskNoticeOne, setShowRiskNoticeOne] = useState(false);

    const handleTextChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleClick = () => {
        setFormData(initialbankDetails)
    }

    const handleSelectChange = (value) => {
        setFormData(prev => ({
            ...prev,
            bankName: value.name,
            bankCode: value.code
        }))
    }


    const handleAccountNumber = (e) => {
        setFormData((prev) => ({
            ...prev,
            accountNumber: e.target.value,
        }));
    };

    const fetchAccountDetails = async () => {
        const notification = toast.loading("Fetching account detals")
        try {
            const response = await getBankDetails(
                formData.accountNumber,
                formData.bankCode
            );
            if (response?.status) {
                setFormData(prev => ({
                    ...prev,
                    accountName: response?.data?.data?.account_name,
                    accountNumber: response?.data?.data?.account_number,
                }))
                toast.success("Account details fetched successfully", {
                    id: notification
                })

            } else {
                toast.error("Please check the account details", {
                    id: notification
                });
            }
        } catch (error) {
            toast.error("Something went wrong", {
                id: notification
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowTradeDetails(true)
    }

    useEffect(() => {
        if (formData?.accountNumber?.length === 10 && formData?.bankName) {
            fetchAccountDetails()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData?.accountNumber, formData?.bankCode])

    useEffect(() => {
        if (
            formData.accountNumber &&
            formData.bankName &&
            formData.accountName
        )
            setIsValid(true);
    }, [formData.accountNumber, formData.bankName, formData.accountName]);



    return (
        <div className="bg-white mt-5 py-8 px-6">
            {showTradeDetails && (
                <TradeDetails
                    setShowRiskNoticeOne={setShowRiskNoticeOne}
                    setShowTradeDetails={setShowTradeDetails}
                    showTradeDetails={showTradeDetails}
                    formData={formData}
                />
            )}

            {
                showRiskNoticeOne && (
                    <RiskNoticeOne
                        showRiskNoticeOne={showRiskNoticeOne}
                        setShowRiskNoticeOne={setShowRiskNoticeOne}
                        formData={formData}
                        setFormData={setFormData}
                        setBalance={setBalance}
                        setOrderList={setOrderList}

                    />
                )
            }
            <button className="mb-[13px]" onClick={handleClick}>
                <img src={ArrowLeft} alt="" />
            </button>
            <h3 className="font-bold text-[#0B0B27] text-sm capitalize md:text-2xl">
                enter recepient bank details
            </h3>
            <form onSubmit={handleSubmit} className="mt-5 space-y-5">
                <Select
                    title="Bank Name"
                    options={bankList}
                    headerTitle="Bank Name"
                    onChange={handleSelectChange}
                />
                <Input
                    type="text"
                    labelText="Bank account number"
                    name="accountNumber"
                    placeholder="Account Number"
                    handleTextChange={handleAccountNumber}
                    maxLength="10"
                />
                <Input
                    labelText="Account Name"
                    name="accountName"
                    placeholder="Account Name"
                    isDisabled
                    handleTextChange={handleTextChange}
                    value={formData?.accountName}
                />
                <Button
                    primary
                    isDisabled={!isValid}
                    title="continue"
                    className="w-full h-10"
                />
            </form>
        </div>
    );
}

export default StepTwo