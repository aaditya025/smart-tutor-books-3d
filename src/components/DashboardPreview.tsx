
import { TrendingUp, Clock, BookOpen, Trophy, Target, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Student Dashboard Preview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how AI tracks progress, identifies learning patterns, and provides personalized insights 
            for every student's educational journey.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Welcome back, Sarah!</h3>
                <p className="text-gray-600">Your AI tutor has prepared today's personalized learning plan</p>
              </div>
              <div className="flex items-center gap-3 bg-green-50 px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-700 font-medium">AI Tutor Online</span>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Study Streak</p>
                      <p className="text-2xl font-bold">12 Days</p>
                    </div>
                    <Trophy className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Questions Answered</p>
                      <p className="text-2xl font-bold">847</p>
                    </div>
                    <Target className="h-8 w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">3D Models Viewed</p>
                      <p className="text-2xl font-bold">156</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">Learning Score</p>
                      <p className="text-2xl font-bold">94%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Progress Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    Today's Learning Progress
                  </CardTitle>
                  <CardDescription>AI-recommended study sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Mathematics - Calculus</span>
                      <span className="text-green-600 font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Physics - Quantum Mechanics</span>
                      <span className="text-blue-600 font-medium">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Chemistry - Organic Compounds</span>
                      <span className="text-purple-600 font-medium">91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    AI Tutor Insights
                  </CardTitle>
                  <CardDescription>Personalized recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800 font-medium">💡 Strength Identified</p>
                    <p className="text-sm text-blue-700 mt-1">
                      You excel at visual learning. More 3D models have been added to your physics lessons.
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-sm text-yellow-800 font-medium">⚡ Speed Adjustment</p>
                    <p className="text-sm text-yellow-700 mt-1">
                      Your calculus pace has been increased based on your quick comprehension rate.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <p className="text-sm text-green-800 font-medium">🎯 Focus Area</p>
                    <p className="text-sm text-green-700 mt-1">
                      Extra practice problems added for organic chemistry reaction mechanisms.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
