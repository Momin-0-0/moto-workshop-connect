import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "@/pages/Index";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Index />
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;