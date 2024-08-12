import Button from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TipBox = ({icon, title, text, button}) => {
    return (
        <div class="relative flex flex-col hover:scale-105 transition-all items-center mt-6 text-shadows bg-neutral-cream-200 shadow-md bg-clip-border rounded-xl w-full">
            <div class="p-6 flex flex-col items-center text-center">
                <FontAwesomeIcon icon={icon} className="w-12 h-12 mb-4 text-jacarta-300"></FontAwesomeIcon>
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {text}
                </p>
            </div>
            <div className="p-6 pt-0">
                <Button url={button.url} text={button.text}/>
            </div>
        </div> 
    )
}

export default TipBox;