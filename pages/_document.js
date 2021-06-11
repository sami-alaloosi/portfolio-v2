/** @format */

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Sami Al Aloosi| Software Enginear </title>
          <link rel="icon" href="/images/Logo.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta name="author" content="Sami Al Aloosi"></meta>
          <meta name="description" content="Sami Al Aloosi Portfolio "></meta>
          <meta property="og:image" content="/images/demo.png"></meta>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
