import React, { useState } from "react";
import { data } from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => setPeople([]);
  const resetAll = () => setPeople(data);

  return (
    <main>
      <section className="birthday__details">
        <div className="birthday__details-title">
          <h2>{people.length} birthdays reminder</h2>
          <span></span>
        </div>
        <div className="birthday__details-list">
          <List people={people} setPeople={setPeople} />
        </div>
        {people.length < 1 ? (
          <button className="btn birthday__details-btn" onClick={resetAll}>
            reset
          </button>
        ) : (
          <button className="btn birthday__details-btn" onClick={clearAll}>
            clear all
          </button>
        )}
      </section>
    </main>
  );
};

export default App;
