import numeral from "numeral"
import { useEffect } from "react"
import { useContractContext } from "src/context/ContractContext"
import { initRadenuTokenContract } from "src/utils/helpers/contract.helpers"
import { formatUnit } from "src/utils/helpers/format.helper"

const UserBalance = ({ balance, setBalance }) => {
    const { account } = useContractContext()
    const getUserBalance = async () => {
        const response = await initRadenuTokenContract()
        const contract = response.contract
        const accountBalance = await contract.balanceOf(account)
        setBalance(formatUnit(accountBalance))
    }

    useEffect(() => {
        getUserBalance()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='bg-white py-4 pl-3 md:py-8 md:pl-6 rounded-lg'>
            <h4 className="capitalize leading-[25px] font-normal text-sm md:text-lg text-[#0B0B27]">balance</h4>
            <h1 className='md:text-4xl md:leading-[50px] font-medium'>${numeral(balance).format(',')}</h1>
        </div>
    )
}

export default UserBalance