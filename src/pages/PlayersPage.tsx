import React from "react";
import { Header } from "../components/Header";
import { PlayerTable } from "../components/PlayerTable";
export const PlayersPage = () => {
  return <>
      <Header />
      <div className="grid gap-8">
        <PlayerTable />
      </div>
    </>;
};