import Head from "next/head";
import useDarkMode from "/useDarkMode";
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import Nav from "../components/Nav";
import { Header } from "../components/Header";
import {Features } from "../components/Feature";
import {Content} from "../components/Content";
import {Content3} from "../components/Content3";
import {About} from "../components/About";
import {Teamm} from "../components/Teamm";
import{Footer} from "../components/Footer";
import {Content2} from "../components/Content2";


export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div style={{ height: '100vh', width: '100vw', minWidth:'100vw'}} className=" grid place-items-center" >
      <Head>
        <title>Teckyville</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"  />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      {/* <Nav /> */}
      {/* <Header />
      <Features/>
      <Content/>
      <Content2/>
      {/* <Content3/> */}
      {/* <About/>
      <Teamm/>
      <Footer/> */}
      {/* <div className="cursor-pointer rounded-full bg-gray-200 p-5">
        {colorTheme === "light" ? (
          <SunIcon onClick={() => setTheme("light")} className="h-12 text-yellow-500 text-gray-500" />
        ) : (
          <MoonIcon onClick={() => setTheme("dark")} className="h-12 text-gray-500" />
        )}
      </div> */}
      
    </div>
  );
}
