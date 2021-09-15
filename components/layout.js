import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation/Navigation";
import NavigationWithoutMB from "./Navigation/NavigationWithoutMB";
import ScrollToTop from 'react-scroll-up'
import { AiOutlineArrowUp } from "react-icons/ai";
// import styles from ''

export default function Layout({ children , title , without , color}) {
    
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            {without ? 
                <NavigationWithoutMB color={color} />:
                <Navigation /> 

            
            }

            <ScrollToTop showUnder={160} style={{zIndex:'100000',}}>
                    <AiOutlineArrowUp style={{
                        borderRadius: "50%",
                        backgroundColor: "#00000090",
                        width: "30px",
                        height: "30px",
                        color: "#fff",
                        zIndex:'100000000',
                    }} />
            </ScrollToTop>
            
            {children}
            <Footer />

        </div>
    )
}