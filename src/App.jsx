import { BrowserRouter, Route } from "react-router-dom";

import { About, Contact, InvestmentSteps, Feedbacks, Hero, Navbar, Banks, Trends, StarsCanvas, About1, About2, About3, About4} from "./components";
import AppRouter from "./components/AppRouter";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <InvestmentSteps />
        <Banks />
        <Trends />
        <AppRouter />        
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
