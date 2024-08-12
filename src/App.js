import './App.css';
import EventInfo from './components/EventInfo/EventInfo.jsx';
import Hero from './components/Hero/Hero.jsx';
import PhotosQR from './components/PhotosQR/PhotosQR.jsx';
import Timer from './components/Timer/Timer.jsx';
import Tips from './components/Tips/Tips.jsx';

function App() {
  return (
    <div className="flex flex-col bg-neutral-cream-bg">
      <Hero />
      <section className='relative lg:absolute w-full top-16 lg:top-[calc(100dvh-120px)] xl:top-[calc(100dvh-170px)] h-[390px] xl:h-auto flex flex-col items-center z-20'>
        <Timer />
      <div className='w-dvw bg-jacarta-100 opacity-50 absolute lg:top-[170px] xl:top-[230px] h-[calc(390px-)]'></div>
      </section>
      <EventInfo />
      <Tips />
      <PhotosQR />
    </div>
  );
}

export default App;
