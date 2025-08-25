import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/header";
import BookSection from "../BookSection/page";
import Footer from "../../Components/Footer/footer";

export default function Home() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#F6F1E9" }}
    >
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "#FFD93D20" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", backgroundColor: "#FFD93D15" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s", backgroundColor: "#FFD93D10" }}
        ></div>
      </div> */}

      <div className="relative z-10">
        <>
          <Navbar />
          <Header />
          <BookSection />
          <Footer />
        </>
      </div>
    </div>
  );
}