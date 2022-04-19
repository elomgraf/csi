import Head from "next/head";
import Proposal from "./components/Proposal"
import Hero from "./components/Hero"
import Structure from "./components/Structure"
import Activity from "./components/Activity"
import Areas from "./components/Areas"
import Footer from "./components/Footer"
import styled from 'styled-components';

const StyleButton = styled.button`
display: inline-block;
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
display: block;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Climate Solutions and Investments – Africa (CSI – Africa)</title>
        <meta
         
        name="viewport" 
        content="initial-scale=1.0, width=device-width" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className="font-sans">

        <Hero />
        <Proposal />
        <Structure />
        <Areas />
        <Activity />
        <Footer />
      

      </main>
    </div>
  )
}

