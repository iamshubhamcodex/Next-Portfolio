import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&family=Nunito+Sans:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-twilight.min.css"
          integrity="sha512-6rkEt5SymQMcnlRz1dHwAMSfMnDaFX28qdr3wyaa+XRCR8dTSWE4U6vjiTVuB6Mq9FgYOLVOTk0lrOeCnodcgA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <Script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-core.min.js"
          integrity="sha512-x0aNx8s5fNTSk7iaTiSuUtz6vbT7gtGjk+Dotp17u4TmUEbJUwNMUFKxMBlnMQ1+N8E5exPHvRcF1yoxJ8b/iA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></Script>
        <Script
          defer="true"
          integrity="sha512-x0aNx8s5fNTSk7iaTiSuUtz6vbT7gtGjk+Dotp17u4TmUEbJUwNMUFKxMBlnMQ1+N8E5exPHvRcF1yoxJ8b/iA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/plugins/autolinker/prism-autolinker.min.js"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
