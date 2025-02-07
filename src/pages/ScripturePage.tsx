import React, { useState } from "react";
import { Header } from "../components/Header";
import { Plus, Search, Tag } from "lucide-react";
import { ScriptureModal } from "../components/ScriptureModal";
export const ScripturePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [scriptures, setScriptures] = useState([{
    verse: "Genesis 1:1",
    text: "In the beginning God created the heaven and the earth.",
    tags: ["creation", "genesis", "beginning"]
  }, {
    verse: "John 3:16",
    text: "For God so loved the world...",
    tags: ["love", "salvation"]
  }]);
  return <>
      <Header />
      <div className="grid gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium dark:text-white">
              Scripture Management
            </h3>
            <button onClick={() => setShowModal(true)} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Scripture
            </button>
          </div>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input type="text" placeholder="Search scriptures..." className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
          <div className="space-y-4">
            {scriptures.map(scripture => <div key={scripture.verse} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium dark:text-white">
                    {scripture.verse}
                  </h4>
                  <button className="text-sm text-blue-500 hover:text-blue-600">
                    Edit
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {scripture.text}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {scripture.tags.map(tag => <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>)}
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <ScriptureModal isOpen={showModal} onClose={() => setShowModal(false)} onSave={scripture => {
      setScriptures(prev => [...prev, scripture]);
    }} />
    </>;
};