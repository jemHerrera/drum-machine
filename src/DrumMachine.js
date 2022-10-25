import React from 'react';
import DrumPad from './DrumPad';
import Display from './Display';
import drumPads from './static/data/drumPads';

class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayed: 'Heater 1'
    }

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.pressDrum = this.pressDrum.bind(this);
  }

  renderDrumPad(i){
    return (
      <DrumPad
        key={drumPads[i].key}
        content={drumPads[i]}
        displayed={this.state.displayed}
        onClick={() => this.pressDrum(drumPads[i])}
      />
    )
  }

  handleKeyUp(event){
    if(!event.key) return

    const key = event.key.toLowerCase();
    const drumPad = drumPads.find(i => i.key.toLowerCase() === key);
    
    if(drumPad){
      this.pressDrum(drumPad)
    }
  }

  pressDrum(drumPad){
    const audio = document.getElementById(drumPad.key);
    audio.play();
    this.setState({
      displayed: drumPad.name
    })
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  render(){
    let drumPadsList = drumPads.map((drumPad, i) => this.renderDrumPad(i))

    return (
      <div id="drum-machine">
        <header>
          <h1>Drum Machine <span>by Jem</span></h1>
          <Display displayed={this.state.displayed}/>
        </header>
        <ul className="drum-pads">
          {drumPadsList}
        </ul>
      </div>
    )
  }
}

export default DrumMachine;
