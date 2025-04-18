import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import WhatsAppIcon from './_components/WhatsAppIcon';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
  />
  <meta name="format-detection" content="telephone=no" />
  {/*#region  Icons */}
  <link
    rel="shortcut icon"
    type="image/x-icon"
    href="https://ucarecdn.com/1249b61c-dba5-4f12-8a75-daa1a4f6e1e8/logoy.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="https://ucarecdn.com/1249b61c-dba5-4f12-8a75-daa1a4f6e1e8/logoy.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="https://ucarecdn.com/1249b61c-dba5-4f12-8a75-daa1a4f6e1e8/logoy.png"
  />
  <script src="https://kit.fontawesome.com/870a91dad4.js" crossorigin="anonymous"></script>
  
  {/*#endregion */}
  <title>Govital</title>
  <meta
    name="keywords"
    content="Govital,Michel Daher,Master ,Chips ,Potato ,Bekaa  valley."
  />
  <meta
    name="description"
    content="Govital was founded in 1992 by Michel Daher, initially producing Potato Chips under the Master brand, after the need to help farmers and process an oversupply of potatoes in the Bekaa valley became evident."
  />
  <meta name="author" content="Govital" />
  {/*#region  Schema.org markup for Google+ */}
  <meta itemProp="name" content="Govital" />
  <meta
    itemProp="description"
    content="Govital was founded in 1992 by Michel Daher, initially producing Potato Chips under the Master brand, after the need to help farmers and process an oversupply of potatoes in the Bekaa valley became evident."
  />
  <meta
    itemProp="image"
    content="https://ucarecdn.com/1249b61c-dba5-4f12-8a75-daa1a4f6e1e8/logoy.png"
  />
  {/*#endregion */}
  {/*#region  Facebook */}
  <meta property="og:title" content="Govital" />
  <meta
    property="og:image"
    content="https://ucarecdn.com/1249b61c-dba5-4f12-8a75-daa1a4f6e1e8/logoy.png"
  />
  <meta property="og:image:width" content={500} />
  <meta property="og:image:height" content={500} />
  <meta property="og:url" content="http://daherfoods.com" />
  <meta property="og:site_name" content="Govital" />
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Govital was founded in 1992 by Michel Daher, initially producing Potato Chips under the Master brand, after the need to help farmers and process an oversupply of potatoes in the Bekaa valley became evident."
  />
  {/*#endregion */}
  {/*#region  Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Govital" />
  <meta
    name="twitter:description"
    content="Govital was founded in 1992 by Michel Daher, initially producing Potato Chips under the Master brand, after the need to help farmers and process an oversupply of potatoes in the Bekaa valley became evident."
  />
  <meta
    name="twitter:image"
    content="https://ucarecdn.com/1249b61c-dba5-4f12-8a75-daa1a4f6e1e8/logoy.png"
  />
  {/* Twitter summary card with large image must be at least 280x150px */}
  <meta
    name="twitter:image:src"
    content="https://ucarecdn.com/1249b61c-dba5-4f12-8a75-daa1a4f6e1e8/logoy.png"
  />
  {/*#endregion */}
  <link rel="canonical" href="/" />
  <title>Govital</title>
  <link
    rel="stylesheet"
    href="content/css/daherFoods.css"
    type="text/css"
    charSet="utf-8"
  />
</>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WhatsAppIcon />
        {children}
      </body> 
    </html>
  );
}
