
import { Users, Sparkles, Briefcase, GraduationCap, Store } from "lucide-react";

const UserSegments = () => {
  const segments = [
    {
      icon: Users,
      title: "Regular Students",
      need: "Buy/sell items safely, stay informed, and save time navigating campus",
      solution: "ConectUJ helps everyday students buy and sell items directly with verified peers, stay updated on campus trends, and find locations or services quickly, all in one student-only app."
    },
    {
      icon: Sparkles,
      title: "Freshers / New Students",
      need: "Onboarding support, access to essentials, discover campus",
      solution: "ConectUJ makes settling into campus life easier by helping freshers find items they need, discover important locations, and stay in the loop with campus updates, through a safe, student-friendly platform."
    },
    {
      icon: Briefcase,
      title: "Student Entrepreneurs",
      need: "Visibility, marketing, and sales on campus",
      solution: "ConectUJ gives student business owners an exclusive space to promote their products and services directly to fellow students, with tools to boost visibility and grow sales, without the need to spam group chats."
    },
    {
      icon: GraduationCap,
      title: "Final-Year Students",
      need: "Sell used items quickly and easily before leaving",
      solution: "ConectUJ helps final-year students offload books, gadgets, and belongings safely and quickly by connecting them to verified underclassmen buyers in their school."
    },
    {
      icon: Store,
      title: "Local Businesses",
      need: "Reach student customers effectively",
      solution: "ConectUJ offers local businesses targeted access to the student market through paid promotions and listings, making it easier to drive sales and build brand visibility directly within campuses."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800/30 to-purple-900/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for Every Student
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ConectUJ serves the diverse needs of different student segments and campus communities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-3 flex-shrink-0">
                  <segment.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{segment.title}</h3>
                  <p className="text-purple-400 text-sm font-medium">{segment.need}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{segment.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserSegments;
