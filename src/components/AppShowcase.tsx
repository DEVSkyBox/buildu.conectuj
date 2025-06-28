
const AppShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See ConectUJ in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a glimpse of how our platform brings university communities together
          </p>
        </div>

        <div className="relative">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <img 
              src="/lovable-uploads/3075b060-48a8-4103-a41e-0c2a8780ac86.png"
              alt="ConectUJ App Interface"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Live Preview
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Coming Soon
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Mobile First</h3>
            <p className="text-gray-400">Designed specifically for mobile use, perfect for students on the go</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure & Verified</h3>
            <p className="text-gray-400">Student ID verification ensures a safe, trusted community</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Quick interactions and instant messaging keep you connected</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
