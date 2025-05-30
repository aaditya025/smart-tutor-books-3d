
import { Book, Brain, Globe, BarChart3, MessageCircle, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Personal Tutor",
      description: "Every student gets their own AI tutor that understands their learning style and adapts in real-time",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "3D Interactive Learning",
      description: "Complex concepts come alive with immersive 3D visualizations and interactive diagrams",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Book,
      title: "Smart Textbooks",
      description: "Traditional textbooks enhanced with AI that can answer any question about any topic or diagram",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Personalized Pace",
      description: "AI analyzes each student's ability and adjusts teaching speed - slower or faster as needed",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: MessageCircle,
      title: "Instant Q&A",
      description: "Get immediate answers to questions about any topic, formula, or concept in your textbooks",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Adaptive Learning",
      description: "Machine learning algorithms continuously improve the teaching approach for each individual student",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Revolutionary Learning Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining artificial intelligence, 3D visualization, and personalized learning to create 
            the most advanced educational platform for students nationwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
