
import { ShoppingCart, MessageSquare, TrendingUp, MapPin, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Student Verification",
      description: "Register with student ID verification for a trusted, secure community of verified students only."
    },
    {
      icon: ShoppingCart,
      title: "Safe Marketplace",
      description: "Buy and sell items directly with verified peers. Books, gadgets, clothing - all in one place."
    },
    {
      icon: MessageSquare,
      title: "In-App Messaging",
      description: "Communicate safely with other students through our built-in messaging system."
    },
    {
      icon: TrendingUp,
      title: "Campus Updates",
      description: "Stay updated with trending campus news, events, and announcements from fellow students."
    },
    {
      icon: MapPin,
      title: "Campus Directory",
      description: "Find important campus locations, hostels, lecture halls, and local businesses easily."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to connect, trade, and thrive in your university community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
