import React from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";

import Loader from "./components/Loader";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Marquee from "./sections/Marquee";
import NewArrival from "./sections/NewArrival";
import Shop from "./sections/Shop";
import { dark } from "./styles/Themes";
import { MoralisProvider } from "react-moralis"
import { createClient, configureChains, } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { infuraProvider } from 'wagmi/providers/infura'
import { mainnet} from 'wagmi/chains'
import { WagmiConfig } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

function App() {
  // useLocoScroll();
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);
  const { provider, webSocketProvider, chains } = configureChains(
    [mainnet],
    [
      // alchemyProvider({ apiKey: 'hu9KmpMxud_8q6Tlskrt42zOpiGy-9xN' }),
      infuraProvider({ apiKey: '4cb849430aaa4b82bb8360011eb397e9' }),
      publicProvider()
    ],
    // { targetQuorum: 2 },
  )

  // Necessary for Wagmi Client Provider /* Do Not Delete or client will not work*/
  const wClient = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      // new CoinbaseWalletConnector({
      //   chains,
      //   options: {
      //     appName: 'TaurosDAO',
      //   },
      // }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }),
    ],
    provider,
    webSocketProvider,
  })



  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      {/* <globalStyles /> */}
      <WagmiConfig client={wClient}>
      <MoralisProvider appId="ny6Iude7WFwg2QaZtvDK7zQC81e9uKRIeaCkFNxM" serverUrl="https://htogiwbd7il5.usemoralis.com:2053/server">
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              breakpoint: 0,
              smooth: true,
              getDirection: true,
              // direction: "horizontal",
          },
          tablet: {
            breakpoint: 0,
            smooth: true,
            getDirection: true,
            // direction: "horizontal",
          }
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {Loaded ? null : <Loader />}

              <Home key="home" />
              <About key="about" />
              <NewArrival key="new arrival" />
              <Marquee key="marquee" />
              <Shop key="Shop" />
              <Footer key="Footer" />
            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
      </MoralisProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
