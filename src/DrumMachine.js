import React from 'react';
import DrumPad from './DrumPad';
import Display from './Display';


class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <DrumPad />
        <Display />
      </div>
    )
  }
}

export default DrumMachine;
