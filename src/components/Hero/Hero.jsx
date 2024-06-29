import React from "react";
import strings from "../../strings/hero.json";

const Hero = () => {
    return (      
    <section id="hero" data-testid="hero" className='w-dvw grid grid-rows-[60dvh_auto] lg:grid-rows-[100dvh] grid-cols-[100dvw] lg:grid-cols-[55dvw_1fr] bg-neutral-cream'>
        <div id='hero-photo' className="flex flex-col justify-end overflow-hidden bg-fixed bg-[url('../public/images/hero.jpg')] bg-cover bg-no-repeat bg-[center_-5dvh] lg:bg-[-22dvw] h-full w-dvw lg:w-[55dvw]">
            <svg className='hidden lg:block fill-neutral-cream' viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100dvh", width: "100%"}}><path d="M417.61,-0.47 C546.84,69.60 405.76,85.51 466.70,150.47 L502.82,150.28 L500.56,0.10 Z" style={{stroke: "none"}}></path></svg>
            <img src='/images/mobile-hero-deco.png' alt='Eucaliptus and lavander' className='w-min object-contain h-[15vh] relative right-3 top-[18vh] rotate-[-5deg] lg:hidden' />
            <svg className='lg:hidden fill-neutral-cream' viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "20dvh", width: "100dvw"}}><path d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none"}}></path></svg>

        </div>
        <div className="h-min lg:h-dvh w-dvw lg:w-[45dvw] bg-neutral-cream flex justify-center">
            <div className='grid grid-rows-[auto_1fr] justify-items-center items-center lg:relative lg:right-[2.5dvw] w-dvw lg:w-[45dvw] h-full px-6'>
                <img src='/images/top-hero-border.png' alt='Eucaliptus and lavander border' className='h-[25dvh] object-contain object-top hidden lg:block' />
                <div className="flex flex-col justify-center items-center gap-7 text-shadows relative top-[-25dvh] h-dvh">
                    <div className='w-fit font-sans text-2xl font-bold'><p>{strings.date}</p></div>
                    <div className="font-serif font-bold text-7xl text-center text-pia-blue-900">
                        <p>{strings.groom}</p>
                        <p className="text-jacarta-100">&</p>
                        <p>{strings.bride}</p>
                    </div>
                    <div className="quote mt-4">
                        <p className="font-sans text-xl text-center lg:w-[30dvw]">{strings.quote}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero;