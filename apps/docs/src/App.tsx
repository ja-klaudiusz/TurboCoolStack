import React from "react";
import "./App.css";
import { AppInfo, LogoImage } from "ui"

function App(): JSX.Element {
  return (
    <div className="h-screen w-full bg-app-dark-3 flex flex-col items-center justify-center">
      <header className="flex flex-row items-center justify-start text-white gap-4">
        <LogoImage />
        <AppInfo info="Docs (CRA)" />
      </header>
    </div>
  );
}

export default App;
