import React from "react";
import { Clock, User, MessageCircle, Zap } from "lucide-react";
const events = [{
  type: "divine",
  player: "Player1",
  action: "Completed divine task",
  timestamp: "5m ago",
  details: "Built a temple in the holy land",
  prayers: 24,
  reputation: 85
}, {
  type: "prayer",
  player: "Player2",
  action: "Prayer received",
  timestamp: "10m ago",
  details: "Asked for divine intervention",
  prayers: 18,
  reputation: 65
}, {
  type: "judgment",
  player: "Player3",
  action: "Divine judgment",
  timestamp: "15m ago",
  details: "Smited for blasphemy",
  prayers: 12,
  reputation: 45
}];
export const EventsFeed = () => {
  return <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-lg">
      <h3 className="text-xl font-medium dark:text-white mb-6">
        Recent Divine Events
      </h3>
      <div className="space-y-6">
        {events.map((event, i) => <div key={i} className="flex items-start gap-4 p-4 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-100/50 dark:border-gray-700/50 transition-all duration-300 hover:transform hover:translate-y-[-2px] hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-lg font-medium dark:text-white">
                    {event.player}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-base dark:text-gray-300">
                    {event.prayers} prayers
                  </span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-base dark:text-gray-300">
                    {event.reputation} reputation
                  </span>
                </div>
              </div>
              <p className="text-lg font-medium dark:text-white mb-1">
                {event.action}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                {event.details}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {event.timestamp}
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};