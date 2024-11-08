
import Header from "./sections/header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
 const App=()=>{
     return (
         <main className="overflow-hidden">
             <Header/>
             <Hero/>
             <Features/>
             <Pricing/>
             <Faq/>
             <Testimonials/>
             <Download/>
         </main>

     )
 }
 export default App;