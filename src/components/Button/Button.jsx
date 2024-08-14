const Button = ({text, url, onclick, borderColor = "border-transparent", color = "bg-jacarta-200", hoverColor = "bg-jacarta-100", textColor = "text-neutral-50", type = "link", classes }) => {
    return type === "link" ? (
        <a 
        href={url} 
        target='blank' 
        className={`text-center font-sans block w-fit cursor-pointer border-solid border-1 ${borderColor} ${color} hover:${hoverColor} ${textColor} shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none border rounded-3xl py-2 px-4 ${classes}`}>
            {text}
        </a>
    ) : (
        <button className={`text-center font-sans block w-fit cursor-pointer border-solid border-1 ${borderColor} ${color} hover:${hoverColor} ${textColor} shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none border rounded-3xl py-2 px-4 ${classes}`} onClick={onclick}>{text}</button>
    )
}

export default Button;