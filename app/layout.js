import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-kumbh-sans",
  display: "swap",
});

export const metadata = {
  title: "Heart — Non-Profit & Charity",
  description: "Give new hope for a better future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kumbhSans.variable}>
      <body className="font-sans antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}