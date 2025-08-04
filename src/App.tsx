import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loans from "./pages/Loans";
import BusinessLoan from "./pages/MSMELoans";
import Investment from "./pages/Investment";
import MSMELoans from "./pages/MSMELoans";
import Insurence from "./pages/Insurance";
import WhatsAppIcon from "./components/WhatsAppIcon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /> {/* Custom toast component only */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/BusinessLoan" element={<BusinessLoan />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/Insurance" element={<Insurence />} />
          <Route path="/MSMELoans" element={<MSMELoans />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <WhatsAppIcon />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
