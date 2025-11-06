const items = [
  {
    name: "Classic Milk Tea",
    desc: "Black tea, milk, and chewy boba pearls.",
    price: "$4.50",
    color: "from-amber-100 to-pink-100",
  },
  {
    name: "Taro Dream",
    desc: "Creamy taro with a hint of vanilla.",
    price: "$5.00",
    color: "from-violet-100 to-pink-100",
  },
  {
    name: "Strawberry Bliss",
    desc: "Fresh strawberry puree with jasmine tea.",
    price: "$5.25",
    color: "from-rose-100 to-pink-100",
  },
  {
    name: "Matcha Latte",
    desc: "Ceremonial matcha with silky milk.",
    price: "$5.50",
    color: "from-emerald-100 to-pink-100",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Popular Picks</h2>
            <p className="mt-2 text-gray-600">Hand-selected favorites loved by our community.</p>
          </div>
          <a href="#" className="text-pink-600 font-medium hover:text-pink-700">See full menu →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <article key={it.name} className="group rounded-2xl border border-pink-100 overflow-hidden bg-gradient-to-br "
              style={{
                backgroundImage: undefined,
              }}
            >
              <div className={`bg-gradient-to-br ${it.color} p-6 min-h-[180px]`}></div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{it.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-pink-700 font-semibold">{it.price}</span>
                  <button className="rounded-full bg-pink-600 text-white text-xs px-3 py-2 hover:bg-pink-700">Add</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
