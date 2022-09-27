import React, { useState } from "react";
import data from "./data";
import List from "./list";
const Listele = () => {
  const [people, setPeople] = useState(data);
  const [geriAl, setGeriAl] = useState(false);

  const clearAll = () => {
    setPeople([]);
    setGeriAl(true);
  };
  const bringBack = () => {
    setPeople(data);
    setGeriAl(false);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {!geriAl ? (
          <button onClick={clearAll}>Clear All</button>
        ) : (
          <button onClick={bringBack}>Clear All</button>
        )}
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};

export default Listele;
