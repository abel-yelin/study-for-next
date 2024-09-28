import NavBar from "@/components/NavBar/page";
import "./globals.css";
import Footer from "@/components/Footer/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <div>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
