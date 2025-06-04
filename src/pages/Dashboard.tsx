
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Brain, Users, Award, LogOut, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    
    const name = localStorage.getItem("userName") || "Student";
    setUserName(name);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const subjects = [
    { name: "Mathematics", progress: 75, color: "bg-blue-500" },
    { name: "Physics", progress: 60, color: "bg-green-500" },
    { name: "Chemistry", progress: 85, color: "bg-purple-500" },
    { name: "Biology", progress: 70, color: "bg-red-500" },
  ];

  const recentActivities = [
    { subject: "Mathematics", topic: "Quadratic Equations", time: "2 hours ago" },
    { subject: "Physics", topic: "Wave Motion", time: "1 day ago" },
    { subject: "Chemistry", topic: "Organic Compounds", time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {userName}!</h1>
            <p className="text-gray-600 mt-2">Continue your AI-powered learning journey</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <BookOpen className="h-8 w-8 text-blue-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Lessons</p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Brain className="h-8 w-8 text-green-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">AI Sessions</p>
                      <p className="text-2xl font-bold">156</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-purple-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Study Groups</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Award className="h-8 w-8 text-yellow-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Achievements</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Subject Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Subject Progress</CardTitle>
                <CardDescription>Your learning progress across different subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {subjects.map((subject) => (
                    <div key={subject.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{subject.name}</span>
                        <span className="text-sm text-gray-600">{subject.progress}%</span>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Jump into your learning activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="h-16 flex-col" onClick={() => navigate("/3d-learning")}>
                    <Brain className="h-6 w-6 mb-2" />
                    Start 3D Learning
                  </Button>
                  <Button variant="outline" className="h-16 flex-col">
                    <MessageCircle className="h-6 w-6 mb-2" />
                    Ask AI Tutor
                  </Button>
                  <Button variant="outline" className="h-16 flex-col">
                    <BookOpen className="h-6 w-6 mb-2" />
                    Continue Reading
                  </Button>
                  <Button variant="outline" className="h-16 flex-col">
                    <Users className="h-6 w-6 mb-2" />
                    Join Study Group
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <p className="font-medium">{activity.topic}</p>
                      <p className="text-sm text-gray-600">{activity.subject}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>AI Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900">Focus on Trigonometry</p>
                    <p className="text-sm text-blue-700">Your recent quiz shows room for improvement</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-900">Great Progress in Chemistry!</p>
                    <p className="text-sm text-green-700">Try advanced organic chemistry next</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
