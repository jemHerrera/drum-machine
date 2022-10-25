import React from 'react';
import DrumPad from './DrumPad';
import Display from './Display';
import drumPads from './static/data/drumPads';

class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayed: ''
    }

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.pressDrum = this.pressDrum.bind(this);
  }

  renderDrumPad(i){
    return (
      <DrumPad
        key={drumPads[i].key}
        id={drumPads[i].key}
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
    const audio = new Audio(drumPad.audio);
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
        <h1>Drum Machine</h1>
        <ul className="drum-pads">
          {drumPadsList}
        </ul>
        <Display displayed={this.state.displayed}/>
      </div>
    )
  }
}

export default DrumMachine;
