import { forwardRef } from "react";

const Input = forwardRef(({ labelText, name, type, placeholder, value, handleTextChange, isDisabled, className, ...props }, ref) => {
    return (
        <div>
            <label
                htmlFor={name}
                className="text-[#0A0B0D] font-medium text-sm mb-2 md:text-base md:leading-[22px]"
            >
                {labelText}
            </label>
            <input
                type={type}
                ref={ref}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleTextChange}
                value={value}
                disabled={isDisabled}
                className={`rounded-[5px] bg-white border border-[#A7B7C8] outline-none block text-[#5B616E] placeholder:text-[#5B616E] pl-2 py-2 pr-4 text-sm w-full ${className}`}
                {...props}
            />
        </div>
    );
})

export default Input