import { useRef, useState } from "react";
import useOnClickOutside from "src/hooks/useOnClickOutside";
import ArrowIcon from "src/assests/arrow-down.png"

const Select = ({ options, title, onChange, defaultValue, headerTitle }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue || "");
    const selectContainerRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const clickOutsideHandler = () => setIsOpen(false); 
    useOnClickOutside(selectContainerRef, clickOutsideHandler);

    const onOptionClicked = (value) => () => {
        setSelectedOption(value.name);
        if (typeof onChange === "function") {
            onChange(value);
        }
        setIsOpen(false);
    };

    const filteredIdOptions = options?.filter((option) => option.name !== selectedOption);
    return (
        <div>
        <div className="text-[#0A0B0D] font-medium text-sm mb-2 md:text-base md:leading-[22px]">{headerTitle}</div>
        <div className="flex justify-between items-center relative pl-2 pr-4 py-[10px] select-none rounded-[5px] bg-white border border-[#A7B7C8]" onClick={handleToggle} ref={selectContainerRef}>
            <p className="text-[#5B616E] capitalize text-sm font-medium">{selectedOption !== "" ? selectedOption : `${title}`}</p>
            <img src={ArrowIcon} alt="" />
            {isOpen && (
                <div className="top-[41px] left-[-1px] absolute w-full select-none z-50" >
                    <ul className="bg-white shadow-md rounded-[5px] h-[100px] overflow-auto text-base">
                        {
                            filteredIdOptions?.map((option, index) => (
                                <li key={index} onClick={onOptionClicked(option)} className="text-black py-[10px] px-5 cursor-pointer hover:text-white hover:bg-[#5E44FF]">
                                    {option.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    </div>
    )
}

export default Select