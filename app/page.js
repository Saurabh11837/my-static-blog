import Image from "next/image";
import Navbar from "./component/Navbar";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Blog from "./component/Blog";
import Subscribe from "./component/Suscribe";


export default function Home() {
  return (
    <>
    <section id="Home overflow-x-hidden">
        {/* <p>my static blog website</p> */}
      <Navbar/>
      <Body/>
      {/* <Blog/> */}
      {/* <Subscribe/> */}
      <Footer/>
    </section>
     
    </>
  );
}
