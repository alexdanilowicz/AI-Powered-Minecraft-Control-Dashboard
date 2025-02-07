import React from "react";
import { StatusCard } from "../components/StatusCard";
import { Header } from "../components/Header";
import { EventsFeed } from "../components/EventsFeed";
const services = [{
  title: "Minecraft Server",
  status: "running" as const,
  metrics: {
    memory: "2.4GB / 4GB",
    cpu: "45%",
    uptime: "24d 13h"
  }
}, {
  title: "Discord Bot",
  status: "running" as const,
  metrics: {
    memory: "256MB / 512MB",
    cpu: "15%",
    uptime: "12d 5h"
  }
}, {
  title: "Ollama",
  status: "running" as const,
  metrics: {
    memory: "1.2GB / 2GB",
    cpu: "30%",
    uptime: "5d 8h"
  }
}];
export const Dashboard = () => {
  return <>
      <Header />
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => <StatusCard key={service.title} {...service} />)}
        </div>
        <EventsFeed />
      </div>
    </>;
};