export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white font-bold">B</span>
              <span className="font-semibold text-lg tracking-tight">Bubbly Tea</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-sm">Playful bubble tea made fresh daily. Visit us for seasonal flavors and limited drops.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Visit</h4>
            <p className="mt-2 text-sm text-gray-600">123 Pink Ave, Sweet City, SC 10010</p>
            <p className="text-sm text-gray-600">Mon–Sun: 10:00–21:00</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <p className="mt-2 text-sm text-gray-600">hello@bubblytea.shop</p>
            <p className="text-sm text-gray-600">(555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-pink-100 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Bubbly Tea. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-600">Privacy</a>
            <a href="#" className="hover:text-pink-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
