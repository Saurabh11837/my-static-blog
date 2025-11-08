import Image from "next/image";
import Navbar from "./component/Navbar";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Blog from "./component/Blog";
import Subscribe from "./component/Suscribe";
import Newnavbar from "./component/Newnavbar";
import ContactPage from "./component/ContactPage";


export default function Home() {
  return (
    <>
    <section id="Home">
        {/* <p>my static blog website</p> */}
      <Navbar/>
      <Newnavbar/>
      <Body/>
      {/* <Blog/> */}
      {/* <Subscribe/> */}
      {/* <ContactPage/> */}
      <Footer/>
    </section>
     <Newnavbar/>
    </>
  );
}

// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import Link from "next/link";

// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return (
//       <div className="flex items-center justify-center h-screen flex-col">
//         <p className="text-xl mb-4">You are not signed in.</p>
//         <Link href="/login" className="text-blue-600 underline">
//           Go to Login
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-2xl font-bold">Welcome, {session.user.name} 👋</h1>
//       <p className="text-gray-500 mt-2">{session.user.email}</p>
//       <img
//         src={session.user.image}
//         alt="Profile"
//         className="rounded-full mt-4 w-20 h-20"
//       />
//     </div>
//   );
// }

