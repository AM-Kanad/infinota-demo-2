
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const OutputGenerator: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold text-white mb-6">Output Generator</h1>

      <Tabs defaultValue="legal" className="mb-6">
        <TabsList className="bg-[#2a2d3a] rounded-xl">
          <TabsTrigger value="legal">Legal</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
        </TabsList>

        <TabsContent value="legal">
          <Card className="bg-[#1f2230] text-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Term Sheet: Legal View</h2>
              <p>Underlying: EURO STOXX 50</p>
              <p>Tenor: 36 months</p>
              <p>Barrier: 70%</p>
              <p>Coupon: 6.5%</p>
              <p>Jurisdiction: Germany</p>
              <p className="mt-4 text-muted-foreground">This product is governed under German structured note regulations...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales">
          <Card className="bg-[#1f2230] text-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Sales Narrative</h2>
              <p>This note offers capital protection and a 6.5% annual coupon, appealing to income-focused investors.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical">
          <Card className="bg-[#1f2230] text-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Technical Details</h2>
              <p>Settlement Type: Physical</p>
              <p>ISIN: TBD</p>
              <p>Strike Date: 2025-08-01</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex gap-4 justify-center mt-6">
      <Button
  variant="default"
  className="bg-teal-400 text-black"
  onClick={() => navigate("/confirmation")}
>
  Publish PDF
</Button>

        <Button variant="secondary">Push to API</Button>
        <Button variant="outline">Copy Share Link</Button>
      </div>
    </div>
  );
};

export default OutputGenerator;
