import { Navbar } from "@/components/Navbar";
import { DashboardStats } from "@/components/DashboardStats";
import { BookingHistory } from "@/components/BookingHistory";
import { Footer } from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <DashboardStats />
        <BookingHistory />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;