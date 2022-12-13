import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import DisaplyEntries from './Components/DisplayEntries/DisplayEntries';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {

  const[entries, setEntries] = useState([{Weight: 176, Date: '11-3-2021'}, {Weight: 140, Date: '11-3-2021'}])

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  };

  return (
    <div>
      <DisaplyEntries parentEntries={entries}/>
      <AddEntryForm entryProperty={addNewEntry}/>
      <EntriesChartTracker parentEntries={entries}/>
    </div>
  );
}

export default App;
