import React, { useState } from 'react';
import DisaplyEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const[entries, setEntries] = useState([{Weight: 176, Date: '11-3-2021'}, {Weight: 140, Date: '11-3-2021'}])

  return (
    <div>
      <DisaplyEntries parentEntries={entries}></DisaplyEntries>
    </div>
  );
}

export default App;
