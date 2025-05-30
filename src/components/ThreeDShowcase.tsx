
import { Cube, RotateCcw, ZoomIn, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ThreeDShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            3D Interactive Learning
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
                    <Cube className="h-5 w-5" />
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
            {/* 3D Visualization Mockup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-black rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold">DNA Double Helix Model</h4>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Simulated 3D Model */}
                <div className="aspect-square bg-gradient-to-br from-blue-800 to-purple-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                  <div className="text-6xl animate-spin-slow">🧬</div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white text-xs">
                      <p className="font-medium">Interactive Features:</p>
                      <div className="flex gap-4 mt-2">
                        <span>↻ Rotate</span>
                        <span>⚡ Zoom</span>
                        <span>🔍 Inspect</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDShowcase;
