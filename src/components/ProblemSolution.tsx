
import { AlertTriangle, CheckCircle } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Solving Real Campus Problems
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We understand the challenges university students face every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">The Problem</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              University students in Nigeria struggle with <span className="text-red-400 font-semibold">disconnected, 
              unstructured, and often unsafe methods</span> for buying and selling items, discovering campus 
              opportunities, and promoting their businesses — leading to <span className="text-red-400 font-semibold">missed 
              deals, lack of trust, and inefficiency</span> in campus interactions.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Our Solution</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              ConectUJ is a <span className="text-green-400 font-semibold">student-centered digital platform</span> that 
              fosters trusted connections, simplifies campus interactions, and brings the student community 
              together in <span className="text-green-400 font-semibold">one unified space</span> — creating safety, 
              efficiency, and opportunity for every student.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
