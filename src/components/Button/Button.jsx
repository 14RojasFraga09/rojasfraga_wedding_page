const Button = ({text, url, color = "bg-jacarta-200", hoverColor = "bg-jacarta-100", textColor = "text-neutral-50", classes }) => {
    return (
        <a 
        href={url} 
        target='blank' 
        className={`font-sans block w-fit cursor-pointer ${color} hover:${hoverColor} ${textColor} shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none border rounded-3xl py-2 px-4 ${classes}`}>
            {text}
        </a>
    )
}

export default Button;