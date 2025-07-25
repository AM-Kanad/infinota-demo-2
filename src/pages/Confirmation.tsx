import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, Eye, Edit, Share2, Download, TrendingUp } from "lucide-react";

const Confirmation = () => {
  const navigate = useNavigate();

  const newProduct = {
    id: 4,
    name: "Barrier Note – ESG",
    underlying: "S&P 500 ESG Index",
    status: "Approved",
    barrier: "75%",
    coupon: "8.5%",
    tenor: "18 months",
    created: new Date().toISOString().split('T')[0],
    isin: "XS2847291034"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Product Created Successfully</h1>
              <p className="text-muted-foreground">Your structured product is now live and ready for distribution</p>
            </div>
            <Button onClick={() => navigate("/dashboard")}>
              <Home className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Success Message */}
        <Card className="border-border/50 mb-8 bg-gradient-to-r from-fintech-success/10 to-primary/10">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-fintech-success mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Product Successfully Published!</h2>
            <p className="text-muted-foreground mb-6">
              Your Barrier Note linked to S&P 500 ESG Index has been created and is now available for investors.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Build Time: 2m 34s</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-fintech-success" />
                <span>Compliance Score: 92%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Details */}
        <Card className="border-border/50 mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl">{newProduct.name}</CardTitle>
                <p className="text-muted-foreground mt-1">{newProduct.underlying}</p>
              </div>
              <Badge className="bg-fintech-success/20 text-fintech-success border-fintech-success/30">
                {newProduct.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">ISIN</p>
                <p className="font-mono font-medium">{newProduct.isin}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Barrier Level</p>
                <p className="font-medium text-fintech-warning">{newProduct.barrier}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Coupon Rate</p>
                <p className="font-medium text-primary">{newProduct.coupon}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tenor</p>
                <p className="font-medium">{newProduct.tenor}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Product
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Link
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Distribution Channels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                <span className="text-sm">Institutional Portal</span>
                <Badge variant="outline" className="text-fintech-success border-fintech-success/30">
                  Active
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                <span className="text-sm">Retail Platform</span>
                <Badge variant="outline" className="text-fintech-success border-fintech-success/30">
                  Active
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                <span className="text-sm">API Endpoint</span>
                <Badge variant="outline" className="text-fintech-success border-fintech-success/30">
                  Live
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Create Similar Product
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Set up Marketing Campaign
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Configure Pricing Rules
              </Button>
              <Button 
                onClick={() => navigate("/builder")}
                className="w-full"
              >
                Build Another Product
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics Preview */}
        <Card className="border-border/50 mt-8">
          <CardHeader>
            <CardTitle className="text-lg">Expected Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8.5%</div>
                <p className="text-sm text-muted-foreground">Annual Coupon</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fintech-warning mb-2">25%</div>
                <p className="text-sm text-muted-foreground">Maximum Downside</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fintech-success mb-2">75%</div>
                <p className="text-sm text-muted-foreground">Capital Protection</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Confirmation;