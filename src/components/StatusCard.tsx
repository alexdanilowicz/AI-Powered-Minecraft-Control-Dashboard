import React from "react";
interface StatusCardProps {
  title: string;
  status: "running" | "stopped";
  metrics: {
    memory: string;
    cpu: string;
    uptime: string;
  };
}
export const StatusCard = ({
  title,
  status,
  metrics
}: StatusCardProps) => {
  return <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-gray-800/90">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-medium dark:text-white">{title}</h3>
        <div className={`w-4 h-4 rounded-full ${status === "running" ? "bg-green-500" : "bg-red-500"}`} />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-base text-gray-500 dark:text-gray-400">
            Memory
          </span>
          <span className="text-base font-medium dark:text-white">
            {metrics.memory}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-base text-gray-500 dark:text-gray-400">
            CPU
          </span>
          <span className="text-base font-medium dark:text-white">
            {metrics.cpu}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-base text-gray-500 dark:text-gray-400">
            Uptime
          </span>
          <span className="text-base font-medium dark:text-white">
            {metrics.uptime}
          </span>
        </div>
      </div>
    </div>;
};