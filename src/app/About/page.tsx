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

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

       <div className="relative z-10">
        <Navbar />

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 mb-8">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Our Story</span>
              <BookOpen className="w-4 h-4" />
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent">
                About Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                Digital Library
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-16">
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
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                We believe that every story has the power to transform lives.
                Our mission is to make literature accessible to everyone,
                fostering a love for reading that transcends boundaries and
                connects hearts across cultures.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-teal-600 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Accessibility First
                    </h3>
                    <p className="text-slate-400">
                      Making quality literature available to readers worldwide,
                      regardless of their background.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-teal-600 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Community Building
                    </h3>
                    <p className="text-slate-400">
                      Creating spaces where readers can connect, discuss, and
                      share their literary journeys.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-teal-600 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Cultural Preservation
                    </h3>
                    <p className="text-slate-400">
                      Preserving literary heritage while embracing contemporary
                      voices and perspectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-teal-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                </div>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      Since 2020
                    </div>
                    <div className="text-slate-400">
                      Serving Readers Worldwide
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-2xl">
                      <Clock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-sm text-slate-400">Available</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-2xl">
                      <Award className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="text-sm text-slate-400">Satisfaction</div>
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
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do, ensuring we create
              meaningful experiences for every reader who joins our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Passion</h3>
              <p className="text-slate-400 leading-relaxed">
                Our deep love for literature drives us to curate exceptional
                reading experiences and foster genuine connections through
                storytelling.
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
              <p className="text-slate-400 leading-relaxed">
                We believe in the power of shared stories and meaningful
                discussions that bring readers together from all walks of life.
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-slate-400 leading-relaxed">
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
        {/* max-w-7xl → Maximum width = 80rem (~1280px).

        mx-auto → Centers container horizontally (auto left/right margin).

        px-4 sm:px-6 lg:px-8 → Responsive horizontal padding (1rem on mobile, 1.5rem on small screens, 2rem on large screens). */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
          </div>
          {/* Wraps timeline content.

            relative → Needed because a vertical line inside will be absolutely positioned */}
          <div className="relative">
            {/* Creates the vertical timeline line.

                absolute → Positioned absolutely inside the relative parent.

                left-1/2 → Places it at 50% width (center of container).

                transform -translate-x-px → Shifts slightly left to align properly.

                h-full → Full height of container.

                w-px → Very thin line (1px wide).

                bg-gradient-to-b from-purple-600 to-teal-600 → Vertical gradient from purple to teal.

                hidden lg:block → Hidden on small screens, only visible on large screens. */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-purple-600 to-teal-600 hidden lg:block"></div>

            {/* Wraps each timeline item (year).

                space-y-16 → Adds vertical spacing (4rem) between children on mobile.

                lg:space-y-18 → Adds slightly larger spacing (4.5rem) on large screens. */}
            <div className="space-y-16 lg:space-y-18">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="lg:text-right mb-8 lg:mb-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 mb-4">
                    <span className="text-sm font-medium">2020</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    The Beginning
                  </h3>
                  <p className="text-slate-400">
                    Founded with a simple vision: to make quality literature
                    accessible to everyone, everywhere. Started with 1,000
                    carefully selected books.
                  </p>
                </div>
                <div className="hidden lg:flex lg:justify-center">
                  {/* <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-slate-900"></div> */}
                </div>
                <div></div>
              </div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div></div>
                {/* <div className="hidden lg:flex lg:justify-center"> */}
                <div className="mb-8 lg:mb-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600/20 border border-teal-500/30 text-teal-300 mb-4">
                    <span className="text-sm font-medium">2022</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Community Growth
                  </h3>
                  <p className="text-slate-400">
                    Reached 10,000+ books and 25,000+ active readers. Launched
                    our reading community features and discussion forums.
                  </p>
                </div>
                {/* </div> */}
              </div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="lg:text-right mb-8 lg:mb-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-teal-600/20 border border-purple-500/30 text-purple-300 mb-4">
                    <span className="text-sm font-medium">Today</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Modern Excellence
                  </h3>
                  <p className="text-slate-400">
                    Now serving 50,000+ happy readers with 15,000+ books,
                    AI-powered recommendations, and a thriving global community.
                  </p>
                </div>
                <div className="hidden lg:flex lg:justify-center">
                  {/* <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-teal-600 rounded-full border-4 border-slate-900"></div> */}
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Join Our Story
              </span>
            </h3>
            <p className="text-lg text-slate-300 mb-8">
              Become part of our growing community of book lovers and embark on
              countless literary adventures together.
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="relative flex items-center gap-3">
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
