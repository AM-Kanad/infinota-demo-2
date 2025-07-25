import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, FileText, Shield, Download } from "lucide-react";

const Builder = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    underlying: "",
    tenor: "",
    barrier: "",
    coupon: "",
    jurisdiction: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCompliance = () => {
    navigate("/compliance");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/dashboard")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Product Builder</h1>
              <p className="text-muted-foreground">Configure your structured product</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Form */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Product Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="underlying">Underlying Asset</Label>
                  <Select onValueChange={(value) => handleInputChange("underlying", value)}>
                    <SelectTrigger className="bg-input border-border/50">
                      <SelectValue placeholder="Select underlying asset" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sp500">S&P 500 Index</SelectItem>
                      <SelectItem value="sp500esg">S&P 500 ESG Index</SelectItem>
                      <SelectItem value="eurostoxx50">EURO STOXX 50</SelectItem>
                      <SelectItem value="bitcoin">Bitcoin</SelectItem>
                      <SelectItem value="ethereum">Ethereum</SelectItem>
                      <SelectItem value="gold">Gold Futures</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tenor">Tenor (months)</Label>
                  <Input
                    id="tenor"
                    type="number"
                    placeholder="12"
                    value={formData.tenor}
                    onChange={(e) => handleInputChange("tenor", e.target.value)}
                    className="bg-input border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="barrier">Barrier Level (%)</Label>
                  <Input
                    id="barrier"
                    type="number"
                    placeholder="75"
                    value={formData.barrier}
                    onChange={(e) => handleInputChange("barrier", e.target.value)}
                    className="bg-input border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coupon">Coupon (%)</Label>
                  <Input
                    id="coupon"
                    type="number"
                    step="0.1"
                    placeholder="8.5"
                    value={formData.coupon}
                    onChange={(e) => handleInputChange("coupon", e.target.value)}
                    className="bg-input border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jurisdiction">Jurisdiction</Label>
                  <Select onValueChange={(value) => handleInputChange("jurisdiction", value)}>
                    <SelectTrigger className="bg-input border-border/50">
                      <SelectValue placeholder="Select jurisdiction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="eu">European Union</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ch">Switzerland</SelectItem>
                      <SelectItem value="sg">Singapore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleCompliance}
                  className="w-full" 
                  size="lg"
                  disabled={!formData.underlying || !formData.tenor || !formData.barrier || !formData.coupon || !formData.jurisdiction}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Run Compliance Check
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Preview */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Term Sheet Preview</span>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="border-b border-border/30 pb-4">
                    <h3 className="font-semibold text-base mb-3">Product Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Product Type:</span>
                        <span>Barrier Note</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Underlying:</span>
                        <span>{formData.underlying || "Not selected"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tenor:</span>
                        <span>{formData.tenor ? `${formData.tenor} months` : "Not set"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-border/30 pb-4">
                    <h3 className="font-semibold text-base mb-3">Terms</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Barrier Level:</span>
                        <span className={formData.barrier ? "text-fintech-warning" : "text-muted-foreground"}>
                          {formData.barrier ? `${formData.barrier}%` : "Not set"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Coupon Rate:</span>
                        <span className={formData.coupon ? "text-primary" : "text-muted-foreground"}>
                          {formData.coupon ? `${formData.coupon}%` : "Not set"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Jurisdiction:</span>
                        <span>{formData.jurisdiction || "Not selected"}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-3">Risk Profile</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Capital Protection:</span>
                        <span className="text-fintech-warning">
                          {formData.barrier ? `${formData.barrier}% barrier` : "Conditional"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Complexity:</span>
                        <span>Moderate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-border/50 bg-gradient-to-br from-fintech-gradient-start/10 to-fintech-gradient-end/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Expected Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">
                      {formData.coupon ? `${formData.coupon}%` : "—"}
                    </p>
                    <p className="text-sm text-muted-foreground">Annual Yield</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-fintech-warning">
                      {formData.barrier ? `${100 - parseInt(formData.barrier)}%` : "—"}
                    </p>
                    <p className="text-sm text-muted-foreground">Max Downside</p>
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

export default Builder;