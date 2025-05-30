
import { Box, RotateCcw, ZoomIn, ZoomOut, Play, Pause, RotateCw, Move3D } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const ThreeDShowcase = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState([50]);
  const [zoomLevel, setZoomLevel] = useState([50]);
  const [selectedModel, setSelectedModel] = useState("dna");

  const models = {
    dna: { emoji: "🧬", name: "DNA Double Helix", color: "from-blue-800 to-purple-900" },
    molecule: { emoji: "⚛️", name: "Water Molecule", color: "from-green-800 to-blue-900" },
    atom: { emoji: "🔬", name: "Carbon Atom", color: "from-red-800 to-orange-900" },
    crystal: { emoji: "💎", name: "Crystal Structure", color: "from-purple-800 to-pink-900" }
  };

  const currentModel = models[selectedModel as keyof typeof models];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Interactive 3D Learning
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transform abstract concepts into tangible 3D experiences. Students can explore, 
            rotate, and interact with complex scientific models and mathematical concepts.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Box className="h-5 w-5" />
                  </div>
                  Molecular Structures
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Explore chemical compounds in 3D space
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">
                  Students can manipulate molecular models, understand bond angles, 
                  and visualize electron distributions in real-time.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Rotate
                  </Button>
                  <Button size="sm" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800">
                    <ZoomIn className="h-4 w-4 mr-2" />
                    Zoom
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Play className="h-5 w-5" />
                  </div>
                  Physics Simulations
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Interactive physics experiments and demonstrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">
                  Watch gravity, electromagnetic fields, and wave propagation 
                  in action through immersive 3D simulations.
                </p>
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  <Play className="h-4 w-4 mr-2" />
                  Run Simulation
                </Button>
              </CardContent>
            </Card>
            
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-purple-300/30">
              <h3 className="text-xl font-bold mb-3">AI-Generated 3D Content</h3>
              <p className="text-blue-100 mb-4">
                Our AI can generate custom 3D models and simulations based on any topic 
                or question a student asks, creating unlimited educational content.
              </p>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>✨ Real-time 3D model generation</li>
                <li>🎯 Concept-specific visualizations</li>
                <li>🔄 Interactive manipulation tools</li>
                <li>📱 Cross-platform compatibility</li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            {/* Interactive 3D Visualization */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-black rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold">{currentModel.name}</h4>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Model Selection */}
                <div className="flex gap-2 mb-4">
                  {Object.entries(models).map(([key, model]) => (
                    <Button
                      key={key}
                      size="sm"
                      variant={selectedModel === key ? "default" : "outline"}
                      onClick={() => setSelectedModel(key)}
                      className="text-xs"
                    >
                      {model.emoji} {model.name.split(' ')[0]}
                    </Button>
                  ))}
                </div>
                
                {/* Interactive 3D Model */}
                <div className={`aspect-square bg-gradient-to-br ${currentModel.color} rounded-xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                  <div 
                    className={`text-6xl ${isRotating ? 'animate-spin' : ''}`}
                    style={{ 
                      animationDuration: `${3 - (rotationSpeed[0] / 50)}s`,
                      transform: `scale(${0.5 + (zoomLevel[0] / 100)})` 
                    }}
                  >
                    {currentModel.emoji}
                  </div>
                  
                  {/* Interactive Controls Overlay */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-8 h-8 p-0 bg-white/20 border-white/40 hover:bg-white/30"
                      onClick={() => setIsRotating(!isRotating)}
                    >
                      {isRotating ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-8 h-8 p-0 bg-white/20 border-white/40 hover:bg-white/30"
                    >
                      <Move3D className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  {/* Bottom Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white text-xs space-y-3">
                      <div>
                        <p className="font-medium mb-2">Controls:</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              <RotateCw className="h-3 w-3" />
                              Speed
                            </span>
                            <div className="w-16">
                              <Slider
                                value={rotationSpeed}
                                onValueChange={setRotationSpeed}
                                max={100}
                                step={1}
                                className="w-full"
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              <ZoomIn className="h-3 w-3" />
                              Zoom
                            </span>
                            <div className="w-16">
                              <Slider
                                value={zoomLevel}
                                onValueChange={setZoomLevel}
                                max={100}
                                step={1}
                                className="w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-white text-sm">
                    <strong>Student Question:</strong> "How do the base pairs connect in DNA?"
                  </p>
                </div>
                <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-white text-sm">
                    <strong>AI Response:</strong> "Let me show you the hydrogen bonds between base pairs..."
                    <span className="inline-block ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  </p>
                </div>
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-white text-sm">
                    <strong>Try:</strong> "Rotate the model and zoom in to see the molecular bonds in detail!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDShowcase;
