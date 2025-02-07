import React, { useState } from "react";
import { Activity, Terminal, Cpu, Server } from "lucide-react";
export const AIControlPanel = () => {
  const [activeModel, setActiveModel] = useState<"premium" | "local">("premium");
  const modelStats = {
    premium: {
      name: "Premium (Gemini)",
      mood: 85,
      apiUsage: 2450,
      apiLimit: 3000,
      temperature: 0.7,
      maxTokens: 1000,
      responseTime: "~1.2s",
      status: "Operational"
    },
    local: {
      name: "Local (TinyLlama)",
      mood: 75,
      apiUsage: 150,
      apiLimit: "Unlimited",
      temperature: 0.8,
      maxTokens: 512,
      responseTime: "~2.5s",
      status: "Ready"
    }
  };
  const currentModel = modelStats[activeModel];
  return <div className="grid gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium dark:text-white">
            AI Model Control
          </h3>
          <span className={`px-3 py-1 rounded-full text-sm ${currentModel.status === "Operational" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"}`}>
            {currentModel.status}
          </span>
        </div>
        <div className="flex gap-4 mb-8">
          <button onClick={() => setActiveModel("premium")} className={`flex-1 py-3 px-4 rounded-lg transition-all ${activeModel === "premium" ? "bg-blue-500 text-white shadow-lg" : "border border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"}`}>
            Premium (Gemini)
          </button>
          <button onClick={() => setActiveModel("local")} className={`flex-1 py-3 px-4 rounded-lg transition-all ${activeModel === "local" ? "bg-blue-500 text-white shadow-lg" : "border border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"}`}>
            Local (TinyLlama)
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  AI Mood
                </span>
                <span className="text-sm font-medium dark:text-white">
                  {currentModel.mood}%
                </span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" style={{
                width: `${currentModel.mood}%`
              }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  API Usage
                </span>
                <span className="text-sm font-medium dark:text-white">
                  {currentModel.apiUsage} / {currentModel.apiLimit}
                </span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300" style={{
                width: typeof currentModel.apiLimit === "number" ? `${currentModel.apiUsage / currentModel.apiLimit * 100}%` : "15%"
              }} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Temperature
                </span>
              </div>
              <span className="text-lg font-medium dark:text-white">
                {currentModel.temperature}
              </span>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Max Tokens
                </span>
              </div>
              <span className="text-lg font-medium dark:text-white">
                {currentModel.maxTokens}
              </span>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Response Time
                </span>
              </div>
              <span className="text-lg font-medium dark:text-white">
                {currentModel.responseTime}
              </span>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Endpoint
                </span>
              </div>
              <span className="text-sm font-medium dark:text-white truncate">
                {activeModel === "premium" ? "/v1/gemini" : "/v1/local"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>;
};