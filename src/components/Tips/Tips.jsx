import React from "react";
import TipBox from "./TipBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faUserTie, faGift, faXmark} from '@fortawesome/free-solid-svg-icons';
import strings from "../../strings/fiesta-tips.json";
import Button from "../Button/Button";


const TipsModal = ({country, handleCloseModal}) => {
    return (
        <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-cream-200 text-pia-blue-900 outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                     <h3 className="text-2xl font-semibold">
                    {`Información para ${country === "uy" ? "Uruguay" : "Argentina"}`}
                    </h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={handleCloseModal}
                    >
                        <FontAwesomeIcon icon={faXmark} className="ml-10" />
                        {/* <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span> */}
                    </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                   { country === "uy" ? (<>
                        <p className=" text-blueGray-500 text-lg font-bold">
                            Tranferencia MiDinero
                        </p>
                        <p><span className="font-bold">Cuenta: </span>3701493414</p>
                        <p><span className="font-bold">Titular: </span>Maria Pia Fraga</p>
                    </>) : (
                        <>
                            <p className=" text-blueGray-500 text-lg font-bold">
                                Tranferencia BBVA
                            </p>
                            <p><span className="font-bold">CBU: </span>017001450000014434079</p>
                            <p><span className="font-bold">Alias: </span>ROJASFRAGA2024</p>
                        </>
                    )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>)
}

const Tips = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [modal, setModal] = React.useState();

    const handleUruguayClick = () => {
        setShowModal(true);
        setModal("uy")
    }
    const handleArgentinaClick = () => {
        setShowModal(true);
        setModal("ar")
    }

    const handleClose = () => {
        setShowModal(false);
        setModal();
    }

    return (
        <section className="xl:w-[70dvw] mx-auto px-6 flex flex-col items-center pt-16 relative pb-[100px] mb-20">
            <p className="text-5xl uppercase text-pia-blue-900 w-full font-serif text-center pb-8 font-bold">{strings.title}</p>
            <img src='/public/images/tips.png' alt='Eucaliptus and lavander' className='w-min object-contain h-[150px] absolute' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative top-[70px]">
                <TipBox title={strings["first-card"].title} icon={faMusic} text={strings["first-card"].text} button={{url: strings["first-card"].button.url, text: strings["first-card"].button.text}} />
                <TipBox title={strings["second-card"].title} icon={faUserTie} text={strings["second-card"].text} button={{url: strings["second-card"].button.url, text: strings["second-card"].button.text}} />
                <div className="relative flex flex-col hover:scale-105 transition-all items-center mt-6 text-shadows bg-neutral-cream-200 shadow-md bg-clip-border rounded-xl w-full">
                    <div className="p-6 flex flex-col items-center text-center">
                        <FontAwesomeIcon icon={faGift} className="w-12 h-12 mb-4 text-jacarta-300"></FontAwesomeIcon>
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {strings["third-card"].title}
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Si querés tener un detalle con nosotros, ¡aún estamos amoblando nuestra casa!</p>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Podés colaborar con nuestro colectivo:</p>
                        <div className="flex gap-4 my-4">
                            <Button borderColor="border-jacarta-100" color="bg-transparent" textColor="text-jacarta-100" text={"Uruguay"} onclick={() => handleUruguayClick()} type="onclick"/>
                            <Button borderColor="border-jacarta-100" color="bg-transparent" textColor="text-jacarta-100"  text={"Argentina"} onclick={handleArgentinaClick} type="onclick"/>
                        </div>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">O si preferís hacer un regalo personal, ¡contactate con los novios!</p>
                    </div>

                </div> 
            </div>
            {showModal && <TipsModal country={modal} handleCloseModal={handleClose}/>}
        </section>
    );
}
export default Tips;