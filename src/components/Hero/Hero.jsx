import React from "react";
import strings from "../../strings/hero.json";

const Hero = () => {
    return (    
    <section className="grid grid-cols-1 grid-rows-1 h-[140dvh] md:h-[120dvh] lg:h-dvh">
    <div id="hero" data-testid="hero" className='w-dvw col-span-1 col-sart-1 row-span-1 row-start-1 grid grid-rows-[60dvh_auto] lg:grid-rows-[100dvh] grid-cols-[100dvw] lg:grid-cols-[55dvw_1fr] bg-neutral-cream-bg absolute'>
        <div id='hero-photo' className="flex flex-col justify-end overflow-hidden bg-fixed bg-[url('../public/images/hero.jpg')] bg-cover bg-no-repeat bg-[center_-5dvh] lg:bg-[-22dvw_top] h-full w-dvw lg:w-[55dvw]">
            <svg className='hidden lg:block fill-neutral-cream-bg' viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100dvh", width: "100%"}}><path d="M417.61,-0.47 C546.84,69.60 405.76,85.51 466.70,150.47 L502.82,150.28 L500.56,0.10 Z" style={{stroke: "none"}}></path></svg>
            <img src='../public/images/mobile-hero-deco.png' alt='Eucaliptus and lavander' className='w-min object-contain h-[15vh] relative right-3 top-[18vh] rotate-[-5deg] lg:hidden' />
            <svg className='lg:hidden fill-neutral-cream-bg' viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "20dvh", width: "100dvw"}}><path d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none"}}></path></svg>

        </div>
        <div className="h-min lg:h-dvh w-dvw lg:w-[45dvw] bg-neutral-cream-bg flex justify-center">
            <div className='flex flex-col justify-items-center items-center lg:relative lg:right-[2.5dvw] w-dvw lg:w-[45dvw] h-full px-6'>
                <img src='../public/images/top-hero-border.png' alt='Eucaliptus and lavander border' className='h-[20dvh] object-contain object-top hidden lg:block' />
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
    </div>
    <div className="hidden lg:flex col-start-1 col-span-1 row-span-1 row-start-1 h-dvh flex-col justify-end z-10 mt-11">
     <svg
        width="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150 lg:h-[150px] xl:h-[200px]"
        preserveAspectRatio="none"
    >
    <defs>
      <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="20%" stopColor="#86779d"></stop>
        <stop offset="80%" stopColor="#f5f0e9"></stop>
      </linearGradient>
    </defs>
    <path
      d="M 0,400 L 0,100 C 127.5,104.89285714285714 255,109.78571428571429 387,118 C 519,126.21428571428571 655.4999999999999,137.74999999999997 770,139 C 884.5000000000001,140.25000000000003 977,131.21428571428572 1085,123 C 1193,114.78571428571428 1316.5,107.39285714285714 1440,100 L 1440,400 L 0,400 Z"
      stroke="none"
      strokeWidth="0"
      fill="url(#gradient)"
      fillOpacity="0.53"
      className="transition-all duration-300 ease-in-out delay-150 path-0"
    ></path>
    <path
      d="M 0,400 L 0,233 C 119.78571428571428,260.25 239.57142857142856,287.5 366,274 C 492.42857142857144,260.5 625.5,206.25000000000003 746,184 C 866.5,161.74999999999997 974.4285714285716,171.49999999999997 1088,185 C 1201.5714285714284,198.50000000000003 1320.7857142857142,215.75 1440,233 L 1440,400 L 0,400 Z"
      stroke="none"
      strokeWidth="0"
      fill="url(#gradient)"
      fillOpacity="1"
      className="transition-all duration-300 ease-in-out delay-150 path-1"
    ></path>
    </svg> 

    </div>


    
    </section>  
    )
}

export default Hero;