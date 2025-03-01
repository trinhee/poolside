import "./globals.css";

export const metadata = {
  title: "Pool Side",
  description: "Pool consstruction company based in Toronto, Canada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
