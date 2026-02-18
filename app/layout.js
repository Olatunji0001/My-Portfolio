import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import SmoothScrolling from "@/Components/SmoothScrolling";

export const metadata = {
  title: "Musbau Olatunji | Backend & Fullstack Developer",
  description:
    "I'm Musbau Olatunji, a software developer skilled in backend, frontend, and fullstack development. I enjoy building clean, scalable, and functional web applications that solve real-world problems.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Import Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <SmoothScrolling />
        {children}
        <Footer />
      </body>
    </html>
  );
}
