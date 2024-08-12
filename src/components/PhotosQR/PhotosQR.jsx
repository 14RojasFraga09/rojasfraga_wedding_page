import strings from "../../strings/phtos-qr.json";

const PhotosQR = () => {
    
    return strings.show ? (
        <section className="text-center flex flex-col items-center gap-10 w-full bg-jacarta-300 text-neutral-cream-100 py-12">
            <p className="text-5xl font-serif font-bold">{strings.title}</p>
            <p className="lg:px-40">{strings.subtitle}</p>
            <a href={strings.link} target="blank" className="w-[90dvw] md:w-[80dvw] lg:w-[20dvw] mx-auto hover:scale-105 transition-all">
                <img src="/images/QR.png" alt="QR to pictures link" className="rounded-md" />
            </a>
        </section>
    ) : null;
}

export default PhotosQR;