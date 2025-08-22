import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/header";
import BookSection from "../BookSection/page";
import Footer from "../../Components/Footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
