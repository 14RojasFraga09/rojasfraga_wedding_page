import strings from "../../strings/phtos-qr.json";

const PhotosQR = () => {
    
    return strings.show ? (
        <section className="text-center flex flex-col items-center gap-10 w-full bg-jacarta-300 text-neutral-cream-100 py-12  px-6 md:px-32 lg:px-40">
            <p className="text-5xl font-serif font-bold">{strings.title}</p>
            <p className="">{strings.subtitle}</p>
            <a href={strings.link} target="blank" className="w-[50dvw] md:w-[40dvw] lg:w-[20dvw] mx-auto hover:scale-105 transition-all">
                <img src="../..assets/images/QR.jpg" alt="QR to pictures link" className="rounded-3xl" />
            </a>
        </section>
    ) : null;
}

export default PhotosQR;