// import Navbar from "../Components/Navbar/Navbar";
// import Header from "../Components/Header/header"
// import BookSection from "./BookSection/page";
// import Footer from "../Components/Footer/footer";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <Header />
//       <BookSection />
//       <Footer />
//     </div>
//   );
// }






































//
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/header";
import BookSection from "../app/BookSection/page";
import Footer from "../Components/Footer/footer";
import BookGrid from "../app/BookSection/page";
import BookCard from "@/Components/BookCard/BookCard";
import BookPage from "./Books/page";
import UserProfilePage from "./UserProfile/page";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* All components with relative z-index to appear above background */}
      <div className="relative z-10">
        <UserProfilePage/>
        {/* <BookPage/> */}
        {/* <Navbar />
        <Header />
        <BookSection />
        <Footer /> */}
      </div>
    </div>
  );
}

