import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation/Navigation";


export default function Layout({ children , title}) {
    
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Navigation />
            
            {children}
            <Footer />

        </div>
    )
}