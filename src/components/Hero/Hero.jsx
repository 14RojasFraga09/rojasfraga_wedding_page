import React from "react";
import strings from "../../strings/hero.json";

const Hero = () => {
    return (    
        <>
    <section id="hero" data-testid="hero" className='w-dvw grid grid-rows-[60dvh_auto] lg:grid-rows-[100dvh] grid-cols-[100dvw] lg:grid-cols-[55dvw_1fr] bg-neutral-cream-bg'>
        <div id='hero-photo' className="flex flex-col justify-end overflow-hidden bg-fixed bg-[url('../public/images/hero.jpg')] bg-cover bg-no-repeat bg-[center_-5dvh] lg:bg-[-22dvw_top] h-full w-dvw lg:w-[55dvw]">
            <svg className='hidden lg:block fill-neutral-cream-bg' viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100dvh", width: "100%"}}><path d="M417.61,-0.47 C546.84,69.60 405.76,85.51 466.70,150.47 L502.82,150.28 L500.56,0.10 Z" style={{stroke: "none"}}></path></svg>
            <img src='/images/mobile-hero-deco.png' alt='Eucaliptus and lavander' className='w-min object-contain h-[15vh] relative right-3 top-[18vh] rotate-[-5deg] lg:hidden' />
            <svg className='lg:hidden fill-neutral-cream-bg' viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "20dvh", width: "100dvw"}}><path d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none"}}></path></svg>

        </div>
        <div className="h-min lg:h-dvh w-dvw lg:w-[45dvw] bg-neutral-cream-bg flex justify-center">
            <div className='grid grid-rows-[auto_1fr] justify-items-center items-center lg:relative lg:right-[2.5dvw] w-dvw lg:w-[45dvw] h-full px-6'>
                <img src='/images/top-hero-border.png' alt='Eucaliptus and lavander border' className='h-[20dvh] object-contain object-top hidden lg:block' />
                <div className="flex flex-col justify-around items-center text-shadows top-[-20vh] h-[80dvh] md:max-h-[60dvh] lg:pb-9 xl:pb-24">
                    <div data-testid="hero-date" className='w-fit font-sans text-2xl font-bold'><p>{strings.date}</p></div>
                    <div className="font-serif font-bold text-7xl text-center text-pia-blue-900">
                        <p data-testid="hero-groom">{strings.groom}</p>
                        <p className="text-jacarta-100">&</p>
                        <p data-testid="hero-bride">{strings.bride}</p>
                    </div>
                    <div className="quote mt-4">
                        <p data-testid="hero-quote" className="font-sans text-xl text-center lg:w-[30dvw]">{strings.quote}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <svg className="hidden lg:block fill-jacarta-300" xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 8192 1490" style={{enableBackground: "new 0 0 8192 1490", transform: "scaleY(0.7) translateY(-17dvh) rotate(188deg)"}} >
        <path class="st0" d="M2472.7,694.6C1195.4,933,406.9,836.6,0,734.8l0,0c476,462.9,1311.6,853.1,2754.3,572  c1965.5-383,5317.6-785.4,5437.8-800.1v-10.8C6966.6-484.9,4384.1,337.7,2472.7,694.6z"/>
    </svg>


    {/* <div className="w-full lg:w-[55dvw] h-[10dvh] absolute top-[90dvh] bg-gradient-to-b from-transparent to-neutral-cream-bg"></div> */}
    </>  
    )
}

export default Hero;