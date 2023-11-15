import Nav from '../components/Nav';
import { Header } from "../components/Header";
import {Features } from "../components/Feature";
import {Content} from "../components/Content";
import {Content3} from "../components/Content3";
import {About} from "../components/About";
import Teamm from "../components/Teamm";
import{Footer} from "../components/Footer";
import {Content2} from "../components/Content2";
import {Step}  from '../components/Step';
import Blog from "../components/Blog";
import {Faq} from "../components/Faq";
import '../styles/globals.css';
import useDarkMode from '/useDarkMode';

function MyApp({ Component, pageProps }) {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div style={{overflow:'hidden'}} className="bg-[#EFF6FA] dark:bg-[#0C1732]">
      
      <Nav/>
      
      {/* <Nav /> */}
      <Header />
      <Features/>
      <Content/>
      <Content2/>
      <Step/>
      <About/>
      <Blog/>
      <Teamm/>
      <Faq/>
      <Footer/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
