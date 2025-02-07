import React, { useEffect, useState, useRef } from "react";
import { Terminal as TerminalIcon, Send } from "lucide-react";
interface CommandLog {
  type: "input" | "output";
  content: string;
  timestamp: string;
}
export const Terminal = () => {
  const [command, setCommand] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([{
    type: "output",
    content: 'Welcome to Stultus Divine Terminal. Type "help" for commands.',
    timestamp: new Date().toLocaleTimeString()
  }]);
  const terminalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    setLogs(prev => [...prev, {
      type: "input",
      content: command,
      timestamp: new Date().toLocaleTimeString()
    }, {
      type: "output",
      content: `Executing command: ${command}`,
      timestamp: new Date().toLocaleTimeString()
    }]);
    setCommand("");
  };
  return <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
      <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <TerminalIcon className="w-5 h-5 text-gray-400 mr-2" />
        <h3 className="text-sm font-medium text-gray-200">Divine Terminal</h3>
      </div>
      <div ref={terminalRef} className="h-64 overflow-auto p-4 font-mono text-sm">
        {logs.map((log, i) => <div key={i} className="mb-2">
            <span className="text-gray-500">[{log.timestamp}] </span>
            <span className={log.type === "input" ? "text-blue-400" : "text-green-400"}>
              {log.type === "input" ? ">" : ""} {log.content}
            </span>
          </div>)}
      </div>
      <form onSubmit={handleCommand} className="border-t border-gray-700 p-2">
        <div className="flex items-center bg-gray-800 rounded px-2">
          <span className="text-gray-400 mr-2">&gt;</span>
          <input type="text" value={command} onChange={e => setCommand(e.target.value)} className="flex-1 bg-transparent border-none text-white py-2 focus:outline-none text-sm" placeholder="Type a command..." />
          <button type="submit" className="p-1 hover:text-blue-400 text-gray-400">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>;
};