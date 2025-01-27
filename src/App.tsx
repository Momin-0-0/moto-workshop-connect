import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "@/pages/Index";
import FindWorkshop from "@/pages/FindWorkshop";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/find-workshop" element={<FindWorkshop />} />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;