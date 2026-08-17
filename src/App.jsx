import Hero from "./components/Hero";
import NaBar from "./components/NaBar";
import ProductViewer from "./components/ProductViewer";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger)

const App = () => {

  return (
  <main>
    <NaBar/>
    <Hero />
    <ProductViewer/>
  </main>
  )
}

export default App;

