import React from 'react';
import ReactDOM from 'react-dom';

// test test test
class Magic extends React.Component {
  constructor(props){
    super(props);
    this.state={
      card:{
        Name:'',
        Set:''
      }
      
    };
  }
  changeHandler=e=>{
    const name=e.target.name;
    const value=e.target.value;
    this.setState({card:{
      ...this.state.card,
      [name]:value
    }});
  }

  onEnterCard=()=>{
    console.log(this.state.card);
  }
  render(){
    return (
      <div>
        <h2>Card Search</h2>
        <form>
          <p>
            <label>Card name: <input type="text" name="Name" value={this.state.card.Name} onChange={this.changeHandler}></input></label>
          </p>
          <p>
            <label>Card set: <input type="text" name="Set" value={this.state.card.Set} onChange={this.changeHandler}></input></label>
          </p>
        </form>
        <button onClick={this.onEnterCard}>Search</button>
      </div>
    )
  }
}

const element= <Magic></Magic>
ReactDOM.render(element,document.getElementById("root")); 