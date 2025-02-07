import React from "react";
import { Header } from "../components/Header";
import { AIControlPanel } from "../components/AIControlPanel";
export const AIControlPage = () => {
  return <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <AIControlPanel />
      </div>
    </>;
};