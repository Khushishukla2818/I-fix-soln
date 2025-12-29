import { Switch, Route } from "wouter";
import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import RepairModal from "@/components/ui/RepairModal";
import { Desktop } from "@/pages/Desktop";

function Router({ openRepair }: { openRepair: () => void }) {
  return (
    <Switch>
      <Route path="/">
        <Desktop openRepair={openRepair} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showRepair, setShowRepair] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        <Router openRepair={() => setShowRepair(true)} />

        <RepairModal
          isOpen={showRepair}
          onClose={() => setShowRepair(false)}
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
