
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
// import formAuth from "./"

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "We'll notify you as soon as ConectUJ launches at your university.",
      });
    const response = await fetch("https://waitlist-backend-0o2n.onrender.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, university }),
    });

    if (response.ok) {
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "We'll notify you as soon as ConectUJ launches at your university.",
      });
      setEmail("");
      setName("");
      setUniversity("");
    } else {
      const errorData = await response.json();
      toast({
        title: "Error",
        description: errorData.error || "Something went wrong.",
      });
    }
  } catch (error) {
    toast({
      title: "Network Error",
      description: "Could not connect to the server.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be among the first to experience ConectUJ when it launches.
          </p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our exclusive waitlist and get early access.
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-full p-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
            <div>
              <Input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-12 text-lg"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-12 text-lg"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Your university"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                required
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-12 text-lg"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-12 text-lg font-semibold rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Free to join
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Early access
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              No spam, ever
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
