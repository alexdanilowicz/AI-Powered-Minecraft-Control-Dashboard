import React, { useState } from "react";
import { Terminal as TerminalIcon, Send, X } from "lucide-react";
export const TerminalWidget = () => {
  const [commands, setCommands] = useState<{
    input: string;
    output: string;
  }[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;
    setCommands([...commands, {
      input: currentCommand,
      output: `Executing command: ${currentCommand}...`
    }]);
    setCurrentCommand("");
  };
  return <div className={`fixed bottom-4 right-4 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 transition-all duration-300 ${isExpanded ? "w-[600px] h-[400px]" : "w-[300px] h-[50px]"}`}>
      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <span className="font-medium dark:text-white">Server Terminal</span>
        </div>
        <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </div>
      {isExpanded && <>
          <div className="p-4 h-[300px] overflow-y-auto font-mono text-sm">
            {commands.map((cmd, i) => <div key={i} className="mb-2">
                <div className="text-green-600 dark:text-green-400">
                  $ {cmd.input}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {cmd.output}
                </div>
              </div>)}
          </div>
          <form onSubmit={handleCommand} className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <input type="text" value={currentCommand} onChange={e => setCurrentCommand(e.target.value)} placeholder="Enter command..." className="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white" />
              <button type="submit" className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </>}
    </div>;
};