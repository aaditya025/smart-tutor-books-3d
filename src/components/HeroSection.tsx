
import { BookOpen, Brain, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-purple-400 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                AI-Powered
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Personal Tutors
                </span>
                for Every Student
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Transforming education for 90 million students with intelligent 3D learning, 
                personalized pace adaptation, and instant answers to every question.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
                Start Learning
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800 px-8 py-3 text-lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">90M+</div>
                <div className="text-blue-200">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-blue-200">AI Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">3D</div>
                <div className="text-blue-200">Visualization</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">AI Tutor Active</h3>
                    <p className="text-sm text-gray-600">Physics - Chapter 5</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2">"Can you explain how gravity works in 3D?"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Zap className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs text-gray-500">AI is generating 3D visualization...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
