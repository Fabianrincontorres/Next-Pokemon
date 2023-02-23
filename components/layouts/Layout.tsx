import { FC, Fragment, PropsWithChildren } from "react";
import Head from "next/head";

import NavBar from "../ui/NavBar";

interface Props{
    children?: React.ReactNode;
    title?: string;
}

export const Layout: FC<Props> =({children, title})=>{

    
    return(
        <Fragment>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Fabian R"></meta>
                <meta name="keywords" content="pokemon pokedex"></meta>
            </Head>

            <nav>
                <NavBar/>
            </nav>

            <main style={{
                padding: '0 10px'
            }}>
                {children}
            </main>
            

        </Fragment>
    )
};

