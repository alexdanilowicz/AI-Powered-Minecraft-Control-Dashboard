import React, { useState } from "react";
import { MoreVertical, UserX, Award, MessageSquare, Shield } from "lucide-react";
interface PlayerActionsProps {
  playerName: string;
}
export const PlayerActions = ({
  playerName
}: PlayerActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showKickModal, setShowKickModal] = useState(false);
  const [kickReason, setKickReason] = useState("");
  const [showReputationModal, setShowReputationModal] = useState(false);
  const [reputationChange, setReputationChange] = useState({
    amount: 0,
    reason: ""
  });
  return <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </button>
      {isOpen && <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="py-1">
            <button onClick={() => setShowKickModal(true)} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              <UserX className="w-4 h-4 mr-2" />
              Kick Player
            </button>
            <button onClick={() => setShowReputationModal(true)} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Award className="w-4 h-4 mr-2" />
              Adjust Reputation
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Divine Message
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Shield className="w-4 h-4 mr-2" />
              Toggle Protection
            </button>
          </div>
        </div>}
      {showKickModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-medium mb-4 dark:text-white">
              Kick {playerName}
            </h3>
            <textarea value={kickReason} onChange={e => setKickReason(e.target.value)} placeholder="Enter reason for kick..." className="w-full p-2 border rounded-lg mb-4 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white" rows={3} />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowKickModal(false)} className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                Cancel
              </button>
              <button onClick={() => {
            // Handle kick action
            setShowKickModal(false);
          }} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Kick Player
              </button>
            </div>
          </div>
        </div>}
      {showReputationModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-medium mb-4 dark:text-white">
              Adjust Reputation for {playerName}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Reputation Change
                </label>
                <input type="number" value={reputationChange.amount} onChange={e => setReputationChange(prev => ({
              ...prev,
              amount: parseInt(e.target.value)
            }))} className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Reason
                </label>
                <textarea value={reputationChange.reason} onChange={e => setReputationChange(prev => ({
              ...prev,
              reason: e.target.value
            }))} className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white" rows={3} />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button onClick={() => setShowReputationModal(false)} className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                Cancel
              </button>
              <button onClick={() => {
            // Handle reputation change
            setShowReputationModal(false);
          }} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Save Changes
              </button>
            </div>
          </div>
        </div>}
    </div>;
};