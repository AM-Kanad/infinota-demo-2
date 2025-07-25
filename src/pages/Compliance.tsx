import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, FileCheck, Shield, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Compliance = () => {
  const navigate = useNavigate();

  const complianceChecks = [
    {
      name: "MiFID II",
      status: "passed",
      description: "Markets in Financial Instruments Directive compliance",
      details: "Product classification and risk disclosures verified",
      icon: CheckCircle,
      color: "text-fintech-success"
    },
    {
      name: "PRIIPs",
      status: "warning",
      description: "Packaged Retail Investment Products regulation",
      details: "Key Information Document (KID) template missing",
      icon: AlertTriangle,
      color: "text-fintech-warning"
    },
    {
      name: "EMIR",
      status: "passed",
      description: "European Market Infrastructure Regulation",
      details: "Derivative reporting requirements satisfied",
      icon: CheckCircle,
      color: "text-fintech-success"
    },
    {
      name: "Basel III",
      status: "passed",
      description: "International banking regulation standards",
      details: "Capital adequacy requirements met",
      icon: CheckCircle,
      color: "text-fintech-success"
    },
    {
      name: "SFDR",
      status: "failed",
      description: "Sustainable Finance Disclosure Regulation",
      details: "ESG disclosure requirements not fulfilled",
      icon: XCircle,
      color: "text-destructive"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "passed":
        return <Badge className="bg-fintech-success/20 text-fintech-success border-fintech-success/30">Passed</Badge>;
      case "warning":
        return <Badge className="bg-fintech-warning/20 text-fintech-warning border-fintech-warning/30">Warning</Badge>;
      case "failed":
        return <Badge className="bg-destructive/20 text-destructive border-destructive/30">Failed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const passedCount = complianceChecks.filter(check => check.status === "passed").length;
  const totalChecks = complianceChecks.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/builder")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Builder
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Compliance Results</h1>
              <p className="text-muted-foreground">Regulatory compliance verification complete</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Summary Card */}
        <Card className="border-border/50 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Compliance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl font-bold">
                    {passedCount}/{totalChecks}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Checks Passed</p>
                    <p className="text-xs text-muted-foreground">Last run: 2 minutes ago</p>
                  </div>
                </div>
                <div className="w-64 bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary rounded-full h-2 transition-all duration-500"
                    style={{ width: `${(passedCount / totalChecks) * 100}%` }}
                  />
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-2">Overall Status</p>
                <Badge className="bg-fintech-warning/20 text-fintech-warning border-fintech-warning/30">
                  Requires Attention
                </Badge>
              </div>
            </div>
            
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-fintech-success" />
                <span>{complianceChecks.filter(c => c.status === "passed").length} Passed</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-fintech-warning" />
                <span>{complianceChecks.filter(c => c.status === "warning").length} Warnings</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-destructive" />
                <span>{complianceChecks.filter(c => c.status === "failed").length} Failed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Checks */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">Detailed Results</h2>
          
          <TooltipProvider>
            {complianceChecks.map((check, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <check.icon className={`w-6 h-6 mt-1 ${check.color}`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{check.name}</h3>
                          {getStatusBadge(check.status)}
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">{check.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {check.description}
                        </p>
                        <p className="text-sm">
                          {check.details}
                        </p>
                      </div>
                    </div>
                    
                    {check.status === "warning" && (
                      <Button variant="outline" size="sm">
                        Fix Issue
                      </Button>
                    )}
                    
                    {check.status === "failed" && (
                      <Button variant="destructive" size="sm">
                        Resolve
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TooltipProvider>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => navigate("/builder")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Modify Product
          </Button>
          
          <Button 
            onClick={() => navigate("/output")}
            className="bg-primary hover:bg-primary/90"
          >
            <FileCheck className="w-4 h-4 mr-2" />
            Approve Product
          </Button>
        </div>

        {complianceChecks.some(check => check.status === "failed") && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            Please resolve all failed compliance checks before approving the product.
          </p>
        )}
      </div>
    </div>
  );
};

export default Compliance;