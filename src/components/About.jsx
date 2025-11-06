export default function About() {
  return (
    <section id="about" className="bg-pink-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Crafted with Heart</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We blend premium teas, fresh milk, and real fruit to create playful, colorful drinks that
          brighten your day. From the bounce of our pearls to the balance of our flavors, every cup is
          designed to delight.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-6 text-left">
          <div className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Quality Ingredients</h3>
            <p className="mt-2 text-sm text-gray-600">We source tea leaves and toppings from trusted partners.</p>
          </div>
          <div className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Brewed Fresh</h3>
            <p className="mt-2 text-sm text-gray-600">Small-batch brewing ensures bold, consistent flavor.</p>
          </div>
          <div className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Customizable</h3>
            <p className="mt-2 text-sm text-gray-600">Choose your sweetness, ice, toppings, and milk options.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
