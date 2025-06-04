
import { useState } from "react";
import { ArrowLeft, Play, Pause, RotateCw, ZoomIn, ZoomOut, Move3D, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";

const ThreeDLearning = () => {
  const [selectedModel, setSelectedModel] = useState("dna");
  const [isRotating, setIsRotating] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState([50]);
  const [zoomLevel, setZoomLevel] = useState([50]);
  const [userQuestion, setUserQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { type: "ai", message: "Welcome! I'm your AI tutor. Ask me anything about this 3D model!" },
  ]);

  const models = {
    dna: { 
      emoji: "🧬", 
      name: "DNA Double Helix", 
      color: "from-blue-800 to-purple-900",
      description: "Explore the structure of DNA and how genetic information is stored."
    },
    molecule: { 
      emoji: "⚛️", 
      name: "Water Molecule", 
      color: "from-green-800 to-blue-900",
      description: "Understand molecular bonds and chemical interactions."
    },
    atom: { 
      emoji: "🔬", 
      name: "Carbon Atom", 
      color: "from-red-800 to-orange-900",
      description: "Discover atomic structure and electron arrangements."
    },
    crystal: { 
      emoji: "💎", 
      name: "Crystal Structure", 
      color: "from-purple-800 to-pink-900",
      description: "Learn about crystal lattices and material properties."
    }
  };

  const currentModel = models[selectedModel as keyof typeof models];

  const handleAskQuestion = () => {
    if (!userQuestion.trim()) return;

    const newChatHistory = [
      ...chatHistory,
      { type: "user", message: userQuestion },
      { 
        type: "ai", 
        message: `Great question about ${currentModel.name}! Let me explain: ${getAIResponse(userQuestion, selectedModel)}` 
      }
    ];

    setChatHistory(newChatHistory);
    setUserQuestion("");
  };

  const getAIResponse = (question: string, model: string) => {
    const responses = {
      dna: "DNA consists of two complementary strands forming a double helix. The base pairs (A-T and G-C) are connected by hydrogen bonds. You can see how the genetic code is stored in this structure!",
      molecule: "Water molecules have a bent structure due to the two lone pairs on oxygen. This creates polarity, making water an excellent solvent for many substances.",
      atom: "Carbon atoms have 6 protons, 6 neutrons, and 6 electrons. The electrons occupy different energy levels or orbitals around the nucleus.",
      crystal: "Crystal structures show how atoms arrange in repeating patterns. This regular arrangement gives crystals their unique properties and geometric shapes."
    };
    return responses[model as keyof typeof responses] || "That's an interesting question! Let me help you understand this better.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/dashboard">
            <Button variant="outline" size="icon" className="text-white border-white/20 hover:bg-white/10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">Interactive 3D Learning</h1>
            <p className="text-blue-100">Explore and interact with 3D models powered by AI</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Model Viewer */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">{currentModel.emoji}</span>
                  {currentModel.name}
                </CardTitle>
                <CardDescription className="text-blue-100">
                  {currentModel.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Model Selection */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                  {Object.entries(models).map(([key, model]) => (
                    <Button
                      key={key}
                      size="sm"
                      variant={selectedModel === key ? "default" : "outline"}
                      onClick={() => setSelectedModel(key)}
                      className="text-xs border-white/20"
                    >
                      {model.emoji} {model.name.split(' ')[0]}
                    </Button>
                  ))}
                </div>

                {/* 3D Model Display */}
                <div className={`aspect-square bg-gradient-to-br ${currentModel.color} rounded-xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                  <div 
                    className={`text-8xl ${isRotating ? 'animate-spin' : ''} cursor-pointer hover:scale-110 transition-transform`}
                    style={{ 
                      animationDuration: `${3 - (rotationSpeed[0] / 50)}s`,
                      transform: `scale(${0.5 + (zoomLevel[0] / 100)})` 
                    }}
                    onClick={() => setIsRotating(!isRotating)}
                  >
                    {currentModel.emoji}
                  </div>
                  
                  {/* Control Overlay */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-10 h-10 p-0 bg-white/20 border-white/40 hover:bg-white/30"
                      onClick={() => setIsRotating(!isRotating)}
                    >
                      {isRotating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-10 h-10 p-0 bg-white/20 border-white/40 hover:bg-white/30"
                    >
                      <Move3D className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Controls */}
                <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-medium mb-4 text-white">Model Controls</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-white">
                        <RotateCw className="h-4 w-4" />
                        Rotation Speed
                      </span>
                      <div className="w-32">
                        <Slider
                          value={rotationSpeed}
                          onValueChange={setRotationSpeed}
                          max={100}
                          step={1}
                        />
                      </div>
                      <span className="text-sm text-white">{rotationSpeed[0]}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-white">
                        <ZoomIn className="h-4 w-4" />
                        Zoom Level
                      </span>
                      <div className="w-32">
                        <Slider
                          value={zoomLevel}
                          onValueChange={setZoomLevel}
                          max={100}
                          step={1}
                        />
                      </div>
                      <span className="text-sm text-white">{zoomLevel[0]}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Chat Interface */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  AI Tutor
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Ask questions about the 3D model
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Chat History */}
                  <div className="h-64 overflow-y-auto space-y-3 p-3 bg-black/20 rounded-lg">
                    {chatHistory.map((chat, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          chat.type === 'user' 
                            ? 'bg-blue-500/20 ml-4' 
                            : 'bg-green-500/20 mr-4'
                        }`}
                      >
                        <p className="text-sm text-white">{chat.message}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Question Input */}
                  <div className="flex gap-2">
                    <Input
                      value={userQuestion}
                      onChange={(e) => setUserQuestion(e.target.value)}
                      placeholder="Ask about this model..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      onKeyPress={(e) => e.key === 'Enter' && handleAskQuestion()}
                    />
                    <Button onClick={handleAskQuestion} size="icon">
                      <Lightbulb className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Tips */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle>Learning Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <p className="font-medium">💡 Interactive Learning</p>
                    <p className="text-blue-100">Click on the model to pause/play rotation</p>
                  </div>
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <p className="font-medium">🎯 Ask Questions</p>
                    <p className="text-green-100">Type specific questions about structure or function</p>
                  </div>
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <p className="font-medium">🔄 Experiment</p>
                    <p className="text-purple-100">Try different models and adjust controls</p>
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

export default ThreeDLearning;
