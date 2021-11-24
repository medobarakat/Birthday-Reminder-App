import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [People,setPeople]=useState(data)
  return <main>
    <section className="container">
      <h3>{People.length} birthday today</h3>
      <List People={People}/>
      <button onClick={()=>{setPeople([])}}>Clear All</button>
      <h5>
      Thats A simple App Built With Ahmed Barakat
      </h5>
    </section>
    
  </main>;
}

export default App;
