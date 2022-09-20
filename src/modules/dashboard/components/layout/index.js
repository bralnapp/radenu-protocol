import { useContractContext } from "src/context/ContractContext"
import { Navbar } from "./Navbar"

const DashboadLayout = ({ children }) => {
    const { account } = useContractContext()
    return (
        <div>
            <Navbar />
            <div className="bg-[#F5F5F5] min-h-screen pt-40 pb-[86px] md:pt-[128px]">
                {
                    account ?
                        <>
                            {children}
                        </> :
                        <div className="h-screen flex items-center justify-center">
                            <p className="">Please connect your wallet to get started</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default DashboadLayout
