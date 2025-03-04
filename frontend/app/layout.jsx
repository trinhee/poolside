import "./globals.css";
import Head from "next/head";


export const metadata = {
  title: "Poolside Inc",
  description: "Pool consstruction company based in Toronto, Canada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="web-app-manifest-192x192.png"/>
      <link rel="icon" href="web-app-manifest-512x512.png"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <body>{children}</body>
    </html>
  );
}
