import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { AIControlPage } from "./pages/AIControlPage";
import { ScripturePage } from "./pages/ScripturePage";
import { PlayersPage } from "./pages/PlayersPage";
import { ServicesPage } from "./pages/ServicesPage";
import { TerminalWidget } from "./components/TerminalWidget";
export function App() {
  return <ThemeProvider>
      <Router>
        <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <Sidebar />
          <main className="ml-64 h-screen overflow-auto">
            <div className="container mx-auto px-6 py-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/ai-control" element={<AIControlPage />} />
                <Route path="/scripture" element={<ScripturePage />} />
                <Route path="/players" element={<PlayersPage />} />
                <Route path="/services" element={<ServicesPage />} />
              </Routes>
            </div>
          </main>
          <TerminalWidget />
        </div>
      </Router>
    </ThemeProvider>;
}