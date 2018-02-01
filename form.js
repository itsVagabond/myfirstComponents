import React from 'react';
import BreakLines from './break_lines.js';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
      
    this.state = {fruits: ['Nothing', 'Grapefruit', 'Lime', 'Coconut', 'Mango'],  fname:'',favfruit:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeOption=this.changeOption.bind(this);
  }
    changeName(a1) {
        this.setState({fname:a1.target.value});
    }
    
    changeOption(a1) {
        this.setState({favfruit:a1.target.value});
    }

  handleSubmit() {
    alert(this.state.fname + ' loves ' + this.state.favfruit);
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:<input type="text" value={this.state.fname} onChange={this.changeName} />
                </label>
        
                <select onChange={this.changeOption}>
                    <option value={this.state.fruits[0]} >Select</option>
                    <option value={this.state.fruits[1]} >Grapefruit</option>
                    <option value={this.state.fruits[2]} >Lime</option>
                    <option value={this.state.fruits[3]} >Coconut</option>
                    <option value={this.state.fruits[4]} >Mango</option>
                </select>
                    
                <input type="submit" />
            </form>
            <BreakLines />
        </div>
    );
  }
}
    
export default NameForm;