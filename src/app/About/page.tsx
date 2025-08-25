"use client"
import Navbar from "../../Components/Navbar/Navbar";
import {
  Sparkles,
  BookOpen,
  Heart,
  Users,
  Award,
  Target,
  Globe,
  Clock,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#F6F1E9" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
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
      </div>

      <div className="relative z-10">
        <Navbar />

        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border mb-8"
                style={{
                  backgroundColor: "#FFD93D20",
                  borderColor: "#FFD93D40",
                  color: "#4F200D",
                }}
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Our Story</span>
                <BookOpen className="w-4 h-4" />
              </div>

              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8">
                <span style={{ color: "#4F200D" }}>About Our</span>
                <br />
                <span style={{ color: "#FFD93D" }}>Digital Library</span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-16"
                style={{ color: "#4F200D80" }}
              >
                Founded with a passion for literature and learning, our library
                serves as a bridge between timeless stories and modern readers,
                creating a community where knowledge flourishes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span style={{ color: "#FFD93D" }}>Our Mission</span>
                </h2>
                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: "#4F200D80" }}
                >
                  We believe that every story has the power to transform lives.
                  Our mission is to make literature accessible to everyone,
                  fostering a love for reading that transcends boundaries and
                  connects hearts across cultures.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFD93D" }}
                    >
                      <Target
                        className="w-4 h-4"
                        style={{ color: "#4F200D" }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-semibold mb-2"
                        style={{ color: "#4F200D" }}
                      >
                        Accessibility First
                      </h3>
                      <p style={{ color: "#4F200D60" }}>
                        Making quality literature available to readers
                        worldwide, regardless of their background.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFD93D" }}
                    >
                      <Users className="w-4 h-4" style={{ color: "#4F200D" }} />
                    </div>
                    <div>
                      <h3
                        className="font-semibold mb-2"
                        style={{ color: "#4F200D" }}
                      >
                        Community Building
                      </h3>
                      <p style={{ color: "#4F200D60" }}>
                        Creating spaces where readers can connect, discuss, and
                        share their literary journeys.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFD93D" }}
                    >
                      <Globe className="w-4 h-4" style={{ color: "#4F200D" }} />
                    </div>
                    <div>
                      <h3
                        className="font-semibold mb-2"
                        style={{ color: "#4F200D" }}
                      >
                        Cultural Preservation
                      </h3>
                      <p style={{ color: "#4F200D60" }}>
                        Preserving literary heritage while embracing
                        contemporary voices and perspectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div
                  className="backdrop-blur-sm border rounded-3xl p-8 relative overflow-hidden"
                  style={{
                    backgroundColor: "#FFD93D20",
                    borderColor: "#FFD93D40",
                  }}
                >
                  <div className="absolute top-4 right-4">
                    <Sparkles
                      className="w-6 h-6 animate-pulse"
                      style={{ color: "#FFD93D" }}
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div
                        className="text-4xl md:text-5xl font-bold mb-2"
                        style={{ color: "#FFD93D" }}
                      >
                        Since 2020
                      </div>
                      <div style={{ color: "#4F200D60" }}>
                        Serving Readers Worldwide
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className="text-center p-4 rounded-2xl"
                        style={{ backgroundColor: "#FFD93D10" }}
                      >
                        <Clock
                          className="w-6 h-6 mx-auto mb-2"
                          style={{ color: "#FFD93D" }}
                        />
                        <div
                          className="text-2xl font-bold"
                          style={{ color: "#4F200D" }}
                        >
                          24/7
                        </div>
                        <div className="text-sm" style={{ color: "#4F200D60" }}>
                          Available
                        </div>
                      </div>
                      <div
                        className="text-center p-4 rounded-2xl"
                        style={{ backgroundColor: "#FFD93D10" }}
                      >
                        <Award
                          className="w-6 h-6 mx-auto mb-2"
                          style={{ color: "#FFD93D" }}
                        />
                        <div
                          className="text-2xl font-bold"
                          style={{ color: "#4F200D" }}
                        >
                          95%
                        </div>
                        <div className="text-sm" style={{ color: "#4F200D60" }}>
                          Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span style={{ color: "#FFD93D" }}>Our Values</span>
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: "#4F200D80" }}
              >
                The principles that guide everything we do, ensuring we create
                meaningful experiences for every reader who joins our community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="text-center p-8 backdrop-blur-sm border rounded-3xl transition-all duration-300 group hover:scale-105"
                style={{
                  backgroundColor: "#FFD93D20",
                  borderColor: "#FFD93D40",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#FFD93D" }}
                >
                  <Heart className="w-8 h-8" style={{ color: "#4F200D" }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#4F200D" }}
                >
                  Passion
                </h3>
                <p className="leading-relaxed" style={{ color: "#4F200D60" }}>
                  Our deep love for literature drives us to curate exceptional
                  reading experiences and foster genuine connections through
                  storytelling.
                </p>
              </div>

              <div
                className="text-center p-8 backdrop-blur-sm border rounded-3xl transition-all duration-300 group hover:scale-105"
                style={{
                  backgroundColor: "#FFD93D20",
                  borderColor: "#FFD93D40",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#FFD93D" }}
                >
                  <Users className="w-8 h-8" style={{ color: "#4F200D" }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#4F200D" }}
                >
                  Community
                </h3>
                <p className="leading-relaxed" style={{ color: "#4F200D60" }}>
                  We believe in the power of shared stories and meaningful
                  discussions that bring readers together from all walks of
                  life.
                </p>
              </div>

              <div
                className="text-center p-8 backdrop-blur-sm border rounded-3xl transition-all duration-300 group hover:scale-105"
                style={{
                  backgroundColor: "#FFD93D20",
                  borderColor: "#FFD93D40",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#FFD93D" }}
                >
                  <Sparkles className="w-8 h-8" style={{ color: "#4F200D" }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#4F200D" }}
                >
                  Excellence
                </h3>
                <p className="leading-relaxed" style={{ color: "#4F200D60" }}>
                  We strive for excellence in every aspect, from our carefully
                  curated collection to the seamless digital experience we
                  provide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span style={{ color: "#FFD93D" }}>Our Journey</span>
              </h2>
            </div>
            <div className="relative">
              <div
                className="absolute left-1/2 transform -translate-x-px h-full w-px hidden lg:block"
                style={{ backgroundColor: "#FFD93D" }}
              ></div>

              <div className="space-y-16 lg:space-y-18">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                  <div className="lg:text-right mb-8 lg:mb-0">
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
                      style={{
                        backgroundColor: "#FFD93D20",
                        borderColor: "#FFD93D40",
                        color: "#4F200D",
                      }}
                    >
                      <span className="text-sm font-medium">2020</span>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: "#4F200D" }}
                    >
                      The Beginning
                    </h3>
                    <p style={{ color: "#4F200D80" }}>
                      Founded with a simple vision: to make quality literature
                      accessible to everyone, everywhere. Started with 1,000
                      carefully selected books.
                    </p>
                  </div>
                  <div className="hidden lg:flex lg:justify-center"></div>
                  <div></div>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                  <div></div>
                  <div className="mb-8 lg:mb-0">
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
                      style={{
                        backgroundColor: "#FFD93D20",
                        borderColor: "#FFD93D40",
                        color: "#4F200D",
                      }}
                    >
                      <span className="text-sm font-medium">2022</span>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: "#4F200D" }}
                    >
                      Community Growth
                    </h3>
                    <p style={{ color: "#4F200D80" }}>
                      Reached 10,000+ books and 25,000+ active readers. Launched
                      our reading community features and discussion forums.
                    </p>
                  </div>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                  <div className="lg:text-right mb-8 lg:mb-0">
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
                      style={{
                        backgroundColor: "#FFD93D20",
                        borderColor: "#FFD93D40",
                        color: "#4F200D",
                      }}
                    >
                      <span className="text-sm font-medium">Today</span>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: "#4F200D" }}
                    >
                      Modern Excellence
                    </h3>
                    <p style={{ color: "#4F200D80" }}>
                      Now serving 50,000+ happy readers with 15,000+ books,
                      AI-powered recommendations, and a thriving global
                      community.
                    </p>
                  </div>
                  <div className="hidden lg:flex lg:justify-center"></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="backdrop-blur-sm border rounded-3xl p-12"
              style={{ backgroundColor: "#FFD93D20", borderColor: "#FFD93D40" }}
            >
              <Sparkles
                className="w-12 h-12 mx-auto mb-6 animate-pulse"
                style={{ color: "#FFD93D" }}
              />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span style={{ color: "#FFD93D" }}>Join Our Story</span>
              </h3>
              <p className="text-lg mb-8" style={{ color: "#4F200D80" }}>
                Become part of our growing community of book lovers and embark
                on countless literary adventures together.
              </p>
              <button
                className="group relative px-8 py-4 font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundColor: "#FFD93D",
                  color: "#4F200D",
                  boxShadow: "0 25px 50px -12px #FFD93D40",
                }}
              >
                <div
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                  style={{ backgroundColor: "#4F200D20" }}
                ></div>
                <div
                  className="relative flex items-center gap-3"
                  style={{ color: "#4F200D" }}
                  onClick={() => {
                    router.push("/Books");
                  }}
                >
                  <span>Start Reading Today</span>
                  <BookOpen className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}