import Head from "next/head";
import useDarkMode from "/useDarkMode";
import { MoonIcon, SunIcon } from '@heroicons/react/outline';



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
      
    </div>
  );
}
