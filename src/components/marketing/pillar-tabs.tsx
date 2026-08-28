"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConversationInbox } from "@/components/product/conversation-inbox";
import { DashboardPanel } from "@/components/product/dashboard-panel";
import { LeadEngineFlow } from "@/components/product/lead-engine-flow";
import { ProductFrame } from "@/components/product/product-frame";
import { WorkflowCanvas } from "@/components/product/workflow-canvas";

const panels = [
  {
    value: "core",
    label: "Core",
    frame: "Dashboards / Revenue",
    body: <DashboardPanel />,
  },
  {
    value: "ai-staff",
    label: "AI Staff",
    frame: "Conversations / Inbox",
    body: <ConversationInbox />,
  },
  {
    value: "lead-engines",
    label: "Lead Engines",
    frame: "Engines / Public records",
    body: <LeadEngineFlow />,
  },
  {
    value: "custom",
    label: "Custom",
    frame: "Workflows / Offer approval",
    body: <WorkflowCanvas />,
  },
];

export function PillarTabs() {
  return (
    <Tabs defaultValue="core" className="flex flex-col gap-6">
      <TabsList className="self-start">
        {panels.map((panel) => (
          <TabsTrigger key={panel.value} value={panel.value}>
            {panel.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {panels.map((panel) => (
        <TabsContent key={panel.value} value={panel.value}>
          <ProductFrame label={panel.frame}>{panel.body}</ProductFrame>
        </TabsContent>
      ))}
    </Tabs>
  );
}
