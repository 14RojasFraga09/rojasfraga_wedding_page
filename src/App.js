import './App.css';
import Hero from './components/Hero/Hero.jsx';
import Timer from './components/Timer/Timer.jsx';

function App() {
  return (
    <div className="flex flex-col bg-neutral-cream-bg absolute">
      <Hero />
      <section className='relative lg:top-[-30dvh] xl:top-[-42dvh] h-[390px] lg:h-auto flex items-center'>
        <Timer />
      </section>

      <div className='h-dvh w-dvw'>
        <p>
          random div to test scrolling
        </p>
        <h2>Test fonts:</h2>
        <ul>
          <li><p className='font-sans'>Sans serif</p></li>
          <li><p className='font-serif'>Serif</p></li>
          <li><p className='font-deco'>Deco</p></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
