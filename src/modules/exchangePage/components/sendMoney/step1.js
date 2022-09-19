import { useRef, useState } from "react"
import Button from "src/modules/common/components/Button"
import Input from "src/modules/common/components/input"
import numeral from 'numeral'

const StepOne = ({ setFormData }) => {

    const inputRef = useRef()
    const [userInput, setuserInput] = useState('')

    const handleTextChange = (e) => setuserInput(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData(prev => ({
            ...prev,
            amount: inputRef?.current?.value
        }))
    }
    return (
        <section className="bg-white mt-5 py-8 px-6 rounded-lg shadow-[0_6px_60px_rgba(242,243,247,1)] md:mt-0">
            <h3 className="font-bold text-[#0B0B27] capitalize md:text-2xl">send money</h3>
            <form onSubmit={handleSubmit} className="mt-5 space-y-5">
                <Input
                    ref={inputRef}
                    required
                    type="text"
                    labelText="Enter amount"
                    placeholder="$0.00"
                    value={userInput && numeral(userInput).format('0,0')}
                    handleTextChange={handleTextChange}
                />
                <Input labelText="Country" placeholder="Nigeria" isDisabled />
                <Button primary title="continue" className="w-full h-10" />
            </form>
        </section>
    )
}

export default StepOne