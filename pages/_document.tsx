import { Html, Head, Main, NextScript } from 'next/document'
//NextJS
import { CssBaseline } from '@nextui-org/react';

export default function Document() {
  return (
    <Html lang="es">
      {/* Tipo Normalize en NextUI */}
      <Head>
        {CssBaseline.flush()}
        
      </Head> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
