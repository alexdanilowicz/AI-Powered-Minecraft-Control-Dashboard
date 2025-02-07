import React from "react";
import { MoreVertical, Award, Clock, MessageCircle } from "lucide-react";
const players = [{
  name: "Player1",
  status: "online",
  reputation: 85,
  reputationLevel: "Divine Favorite",
  lastEvent: "Completed divine task",
  timestamp: "5m ago",
  divineInteractions: 24,
  tasksCompleted: 12
}, {
  name: "Player2",
  status: "offline",
  reputation: 65,
  reputationLevel: "Faithful",
  lastEvent: "Received blessing",
  timestamp: "2h ago",
  divineInteractions: 18,
  tasksCompleted: 8
}];
export const PlayerTable = () => {
  return <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium dark:text-white">
          Player Management
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Player
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Status
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Reputation
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Divine Stats
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Last Event
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => <tr key={player.name} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                <td className="p-4">
                  <div>
                    <div className="font-medium dark:text-white">
                      {player.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {player.reputationLevel}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${player.status === "online" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"}`}>
                    {player.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium dark:text-white">
                        {player.reputation}/100
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" style={{
                    width: `${player.reputation}%`
                  }} />
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm dark:text-white">
                        {player.divineInteractions} interactions
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm dark:text-white">
                        {player.tasksCompleted} tasks completed
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div>
                    <div className="text-sm font-medium dark:text-white">
                      {player.lastEvent}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {player.timestamp}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};