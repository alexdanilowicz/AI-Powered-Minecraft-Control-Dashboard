import React, { useState } from "react";
import { X } from "lucide-react";
interface ScriptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (scripture: {
    verse: string;
    text: string;
    tags: string[];
  }) => void;
}
export const ScriptureModal = ({
  isOpen,
  onClose,
  onSave
}: ScriptureModalProps) => {
  const [scripture, setScripture] = useState({
    verse: "",
    text: "",
    tags: ""
  });
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium dark:text-white">Add Scripture</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Verse Reference
            </label>
            <input type="text" value={scripture.verse} onChange={e => setScripture(prev => ({
            ...prev,
            verse: e.target.value
          }))} placeholder="e.g., Genesis 1:1" className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Scripture Text
            </label>
            <textarea value={scripture.text} onChange={e => setScripture(prev => ({
            ...prev,
            text: e.target.value
          }))} rows={5} className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tags (comma separated)
            </label>
            <input type="text" value={scripture.tags} onChange={e => setScripture(prev => ({
            ...prev,
            tags: e.target.value
          }))} placeholder="e.g., creation, genesis, beginning" className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            Cancel
          </button>
          <button onClick={() => {
          onSave({
            verse: scripture.verse,
            text: scripture.text,
            tags: scripture.tags.split(",").map(tag => tag.trim())
          });
          onClose();
        }} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Save Scripture
          </button>
        </div>
      </div>
    </div>;
};