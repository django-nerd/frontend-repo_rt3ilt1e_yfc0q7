import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-pink-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid md:grid-cols-2 items-center gap-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-pink-700">
            New Flavors Weekly
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Sip the Joy of Bubble Tea
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-prose">
            Playful, colorful, and brewed with love. Discover tasty blends and
            chewy pearls crafted fresh for you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center rounded-full bg-pink-600 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">
              Browse Menu
            </a>
            <a href="#about" className="inline-flex items-center rounded-full bg-white/80 backdrop-blur border border-pink-200 text-pink-700 px-5 py-3 text-sm font-semibold hover:bg-white focus:outline-none">
              Learn More
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 bg-gradient-to-tr from-pink-100/70 via-transparent to-transparent rounded-3xl" />
          <div className="rounded-3xl bg-white/70 backdrop-blur border border-pink-100 p-6 shadow-lg">
            <dl className="grid grid-cols-3 gap-6 text-center">
              <div>
                <dt className="text-3xl font-extrabold text-gray-900">50+</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-gray-500">Flavors</dd>
              </div>
              <div>
                <dt className="text-3xl font-extrabold text-gray-900">4.9★</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-gray-500">Customer Love</dd>
              </div>
              <div>
                <dt className="text-3xl font-extrabold text-gray-900">10m</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-gray-500">Avg Prep</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
