import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "@/pages/Index";
import FindWorkshop from "@/pages/FindWorkshop";
import Services from "@/pages/Services";
import Shop from "@/pages/Shop";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/find-workshop" element={<FindWorkshop />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;