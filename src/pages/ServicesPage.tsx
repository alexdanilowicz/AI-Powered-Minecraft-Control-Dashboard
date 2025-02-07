import React from "react";
import { Header } from "../components/Header";
import { RefreshCw } from "lucide-react";
export const ServicesPage = () => {
  return <>
      <Header />
      <div className="grid gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-medium dark:text-white mb-6">
            Service Controls
          </h3>
          <div className="space-y-6">
            {[{
            name: "Minecraft Server",
            status: "running",
            logs: "Server running on port 25565..."
          }, {
            name: "Discord Bot",
            status: "running",
            logs: "Connected to Discord API..."
          }, {
            name: "Ollama API",
            status: "running",
            logs: "Model loaded successfully..."
          }].map(service => <div key={service.name} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-medium dark:text-white">
                      {service.name}
                    </h4>
                    <span className="text-sm text-green-500">
                      ● {service.status}
                    </span>
                  </div>
                  <button className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Restart
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg font-mono text-sm text-gray-600 dark:text-gray-300">
                  {service.logs}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </>;
};