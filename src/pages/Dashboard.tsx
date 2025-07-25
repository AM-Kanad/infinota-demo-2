import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Settings, MoreHorizontal, TrendingUp, Shield, Clock } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Barrier Note – ESG",
      underlying: "S&P 500 ESG Index",
      status: "Draft",
      barrier: "75%",
      coupon: "8.5%",
      tenor: "18 months",
      created: "2024-01-15"
    },
    {
      id: 2,
      name: "Digital Note",
      underlying: "Bitcoin",
      status: "Approved",
      barrier: "80%",
      coupon: "12%",
      tenor: "12 months",
      created: "2024-01-10"
    },
    {
      id: 3,
      name: "Autocall Note",
      underlying: "EURO STOXX 50",
      status: "Expired",
      barrier: "65%",
      coupon: "6%",
      tenor: "24 months",
      created: "2023-12-05"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Draft": return "bg-fintech-warning/20 text-fintech-warning border-fintech-warning/30";
      case "Approved": return "bg-fintech-success/20 text-fintech-success border-fintech-success/30";
      case "Expired": return "bg-muted text-muted-foreground border-border";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Your Structured Products</h1>
              <p className="text-muted-foreground">Manage and create financial instruments</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button onClick={() => navigate("/builder")} size="sm" className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                New Product
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Products</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Compliance Checks</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
                <Shield className="w-8 h-8 text-fintech-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Build Time</p>
                  <p className="text-2xl font-bold">2.3m</p>
                </div>
                <Clock className="w-8 h-8 text-fintech-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="border-border/50 hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {product.underlying}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(product.status)}>
                      {product.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Barrier</p>
                    <p className="font-medium">{product.barrier}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Coupon</p>
                    <p className="font-medium">{product.coupon}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Tenor</p>
                    <p className="font-medium">{product.tenor}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    View
                  </Button>
                  <Button size="sm" className="flex-1">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Add New Product Card */}
          <Card 
            className="border-dashed border-2 border-border/50 hover:border-primary/50 transition-colors cursor-pointer group"
            onClick={() => navigate("/builder")}
          >
            <CardContent className="p-6 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <Plus className="w-12 h-12 text-muted-foreground group-hover:text-primary mx-auto mb-4 transition-colors" />
                <h3 className="font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  Create New Product
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Build a structured product in minutes
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;