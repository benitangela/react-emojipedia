import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function insertEntry(content) {
  return (
    <Entry
      key={content.id}
      emoji={content.emoji}
      name={content.name}
      meaning={content.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(insertEntry)}</dl>
    </div>
  );
}

export default App;
