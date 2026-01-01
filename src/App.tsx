import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MysteriaHeader from "@/components/MysteriaHeader";
import MysteriaFooter from "@/components/MysteriaFooter";
import MysteriaHome from "./pages/MysteriaHome";
import MysteriaMenu from "./pages/MysteriaMenu";
import MysteriaContact from "./pages/MysteriaContact";
import MysteriaLocation from "./pages/MysteriaLocation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <MysteriaHeader />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<MysteriaHome />} />
              <Route path="/menu" element={<MysteriaMenu />} />
              <Route path="/contact" element={<MysteriaContact />} />
              <Route path="/location" element={<MysteriaLocation />} />
              {/* Keep existing routes for backward compatibility */}
              <Route path="/index" element={<MysteriaHome />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <MysteriaFooter />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;