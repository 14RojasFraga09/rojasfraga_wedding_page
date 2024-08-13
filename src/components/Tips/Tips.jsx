import TipBox from "./TipBox";
import { faMusic, faUserTie, faGift } from '@fortawesome/free-solid-svg-icons';
import strings from "../../strings/fiesta-tips.json";

const Tips = () => {
    return (
        <section className="xl:w-[70dvw] mx-auto px-6 flex flex-col items-center pt-16 relative pb-[100px] mb-20">
            <p className="text-5xl uppercase text-pia-blue-900 w-full font-serif text-center pb-8 font-bold">{strings.title}</p>
            <img src='/images/tips.png' alt='Eucaliptus and lavander' className='w-min object-contain h-[150px] absolute' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative top-[70px]">
                <TipBox title={strings["first-card"].title} icon={faMusic} text={strings["first-card"].text} button={{url: strings["first-card"].button.url, text: strings["first-card"].button.text}} />
                <TipBox title={strings["second-card"].title} icon={faUserTie} text={strings["second-card"].text} button={{url: strings["second-card"].button.url, text: strings["second-card"].button.text}} />
                <TipBox title={strings["third-card"].title} icon={faGift} text={strings["third-card"].text} button={{url: strings["third-card"].button.url, text: strings["third-card"].button.text}} />
            </div>
        </section>
    );
}
export default Tips;