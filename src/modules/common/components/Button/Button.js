
const Button = ({ title, href, className, primary, secondary, isDisabled, ...props }) => {
    return href ? (
        <a
            className={`btn ${className} ${primary && 'bg-[#5E44FF] text-white'} ${secondary && 'bg-[#1C144C] text-white'}`}
            href={href}>
            {title}
        </a>
    ) : (
        <button
            type="submit"
            disabled={isDisabled}
            className={`btn bg-[#5E44FF] text-white disabled:bg-gray-700 disabled:cursor-not-allowed ${className}`}
            {...props}
        >
            {title}
        </button>
    )
}

export default Button