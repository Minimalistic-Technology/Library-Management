
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/header";
import BookSection from "../app/BookSection/page";
import Footer from "../Components/Footer/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* All components with relative z-index to appear above background 
          
          relative: Sets the positioning context to relative, allowing z-index to take effect.
      */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <BookSection />
        <Footer />
      </div>
    </div>
  );
}

