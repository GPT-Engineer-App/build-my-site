import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, User } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // updated to use navbar layout
import Index from "./pages/Index.jsx";
import WebDesigner from "./pages/WebDesigner.jsx"; // import the new page

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home", // Feel free to change this to your liking
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
{
    title: "Web Designer",
    to: "/web-designer",
    icon: <User className="h-4 w-4" />, // added new nav item
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="web-designer" element={<WebDesigner />} /> {/* added new route */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
