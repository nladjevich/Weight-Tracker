import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import DisaplyEntries from './Components/DisplayEntries/DisplayEntries';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import './App.css'

function App() {

  const[entries, setEntries] = useState([{Weight: 176, Date: '11-3-2021'}, {Weight: 140, Date: '11-3-2021'}])

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{'margin': '1em'}}>Weight Tracker</h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisaplyEntries parentEntries={entries}/>
          </div>
          <div className='border-box'>
            <AddEntryForm entryProperty={addNewEntry}/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <EntriesChartTracker parentEntries={entries}/>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
