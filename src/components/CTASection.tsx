
import { ArrowRight, Users, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Ready to Transform Education for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              {" "}90 Million Students?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join the pilot program and be part of the educational revolution. 
            Give every student access to their personal AI tutor and watch learning outcomes soar.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Nationwide Impact</h3>
                <p className="text-gray-600 text-sm">Reach every student across the country with personalized AI tutoring</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Instant Results</h3>
                <p className="text-gray-600 text-sm">See immediate improvements in student engagement and comprehension</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Global Innovation</h3>
                <p className="text-gray-600 text-sm">Lead the world in AI-powered education technology and methodology</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 text-lg shadow-lg">
                Join Pilot Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg">
                Schedule Demo
              </Button>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Pilot Program Benefits:</strong>
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-700">
                <span>✅ Early Access</span>
                <span>✅ Custom Implementation</span>
                <span>✅ Dedicated Support</span>
                <span>✅ Training Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
