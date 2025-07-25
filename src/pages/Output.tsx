import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Download, Share2, Send, FileText, Briefcase, Code, CheckCircle } from "lucide-react";

const Output = () => {
  const navigate = useNavigate();
  const [exportStatus, setExportStatus] = useState<string | null>(null);

  const handleExport = (type: string) => {
    setExportStatus(type);
    setTimeout(() => {
      if (type === "publish") {
        navigate("/confirmation");
      } else {
        setExportStatus(null);
      }
    }, 2000);
  };

  const legalContent = {
    issuer: "InFiNota Securities Ltd.",
    issuanceDate: "January 25, 2024",
    maturityDate: "July 25, 2025",
    underlying: "S&P 500 ESG Index",
    barrier: "75%",
    coupon: "8.5%",
    jurisdiction: "European Union",
    isin: "XS2847291034"
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
              onClick={() => navigate("/compliance")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Compliance
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Output Generator</h1>
              <p className="text-muted-foreground">Export and share your approved product</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Export Options */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Export Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={() => handleExport("pdf")}
                  variant="outline" 
                  className="w-full justify-start"
                  disabled={exportStatus === "pdf"}
                >
                  {exportStatus === "pdf" ? (
                    <CheckCircle className="w-4 h-4 mr-2 text-fintech-success" />
                  ) : (
                    <Download className="w-4 h-4 mr-2" />
                  )}
                  {exportStatus === "pdf" ? "Downloaded!" : "Publish PDF"}
                </Button>

                <Button 
                  onClick={() => handleExport("api")}
                  variant="outline" 
                  className="w-full justify-start"
                  disabled={exportStatus === "api"}
                >
                  {exportStatus === "api" ? (
                    <CheckCircle className="w-4 h-4 mr-2 text-fintech-success" />
                  ) : (
                    <Code className="w-4 h-4 mr-2" />
                  )}
                  {exportStatus === "api" ? "Pushed!" : "Push to API"}
                </Button>

                <Button 
                  onClick={() => handleExport("share")}
                  variant="outline" 
                  className="w-full justify-start"
                  disabled={exportStatus === "share"}
                >
                  {exportStatus === "share" ? (
                    <CheckCircle className="w-4 h-4 mr-2 text-fintech-success" />
                  ) : (
                    <Share2 className="w-4 h-4 mr-2" />
                  )}
                  {exportStatus === "share" ? "Copied!" : "Copy Share Link"}
                </Button>

                <div className="pt-4 border-t border-border/50">
                  <Button 
                    onClick={() => handleExport("publish")}
                    className="w-full"
                    disabled={exportStatus === "publish"}
                  >
                    {exportStatus === "publish" ? "Publishing..." : "Publish Product"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-fintech-gradient-end/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Product Stats</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Build Time:</span>
                    <span className="font-medium">2m 34s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Compliance Score:</span>
                    <span className="font-medium text-fintech-success">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Risk Rating:</span>
                    <span className="font-medium text-fintech-warning">Moderate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Yield:</span>
                    <span className="font-medium text-primary">8.5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Document Preview */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Document Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="legal" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="legal" className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Legal
                    </TabsTrigger>
                    <TabsTrigger value="sales" className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Sales
                    </TabsTrigger>
                    <TabsTrigger value="technical" className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Technical
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="legal" className="mt-6">
                    <div className="border border-border/30 rounded-lg p-6 bg-card/30">
                      <div className="text-center mb-6">
                        <h2 className="text-xl font-bold">TERM SHEET</h2>
                        <p className="text-sm text-muted-foreground">Barrier Note Linked to S&P 500 ESG Index</p>
                      </div>

                      <div className="space-y-4 text-sm">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="font-semibold text-muted-foreground">ISSUER</p>
                            <p>{legalContent.issuer}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-muted-foreground">ISIN</p>
                            <p className="font-mono">{legalContent.isin}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="font-semibold text-muted-foreground">ISSUANCE DATE</p>
                            <p>{legalContent.issuanceDate}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-muted-foreground">MATURITY DATE</p>
                            <p>{legalContent.maturityDate}</p>
                          </div>
                        </div>

                        <div className="border-t border-border/30 pt-4">
                          <p className="font-semibold text-muted-foreground mb-2">UNDERLYING ASSET</p>
                          <p>{legalContent.underlying}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="font-semibold text-muted-foreground">BARRIER LEVEL</p>
                            <p className="text-fintech-warning font-semibold">{legalContent.barrier}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-muted-foreground">COUPON RATE</p>
                            <p className="text-primary font-semibold">{legalContent.coupon} p.a.</p>
                          </div>
                        </div>

                        <div className="border-t border-border/30 pt-4">
                          <p className="font-semibold text-muted-foreground mb-2">GOVERNING LAW</p>
                          <p>{legalContent.jurisdiction}</p>
                        </div>

                        <div className="border-t border-border/30 pt-4">
                          <p className="font-semibold text-muted-foreground mb-2">IMPORTANT NOTICE</p>
                          <p className="text-xs text-muted-foreground">
                            This document constitutes a preliminary term sheet and is subject to change. 
                            Final terms will be confirmed in the official offering documentation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="sales" className="mt-6">
                    <div className="border border-border/30 rounded-lg p-6 bg-card/30">
                      <h3 className="text-lg font-semibold mb-4">Sales Summary</h3>
                      <div className="space-y-4 text-sm">
                        <div className="bg-primary/10 p-4 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">Key Selling Points</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• 8.5% annual coupon with ESG-compliant underlying</li>
                            <li>• 75% downside protection barrier</li>
                            <li>• 18-month investment horizon</li>
                            <li>• EU regulatory compliance</li>
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="font-semibold">Target Audience</p>
                            <p className="text-muted-foreground">Conservative investors seeking yield with ESG focus</p>
                          </div>
                          <div>
                            <p className="font-semibold">Minimum Investment</p>
                            <p className="text-muted-foreground">€10,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="technical" className="mt-6">
                    <div className="border border-border/30 rounded-lg p-6 bg-card/30">
                      <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
                      <div className="space-y-4 text-sm font-mono">
                        <div className="bg-fintech-navy-light p-4 rounded-lg">
                          <p className="text-muted-foreground mb-2">Product ID:</p>
                          <p>INFINOTA_BN_SP500ESG_20240125</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="font-semibold">Valuation Frequency</p>
                            <p className="text-muted-foreground">Daily</p>
                          </div>
                          <div>
                            <p className="font-semibold">Settlement</p>
                            <p className="text-muted-foreground">T+2</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-semibold mb-2">API Endpoint</p>
                          <div className="bg-fintech-navy-light p-2 rounded text-xs">
                            https://api.infinota.com/v1/products/BN_SP500ESG_20240125
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output;