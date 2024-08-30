import { JetBrains_Mono} from "next/font/google"
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const JetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable:"--font-JetBrainsMono"
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.className}>
        <Header/>
          {children}
          <Analytics />
          <SpeedInsights />
        <Footer/>
      </body>
    </html>
  );
}
