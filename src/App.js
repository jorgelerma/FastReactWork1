import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './myStyle.css';
import './App.css';
// testing new function branch

class App extends React.Component {
  constructor() {
    super();


    this.state = {
      test: 'mikes',
      name: '',
      shareholders: [{ name: '' }],
    };
  }

  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }

  handleShareholderNameChange = (idx) => (evt) => {

    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  }

  handleSubmit = (evt) => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  }

  handleAddShareholder = () => {
    this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
  }

  handleRemoveShareholder = (idx) => () => {
    this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
  }

  showContents(){
    // console.log(this.state.shareholders.forEach((item => (console.log(item.name)))));

    console.log(this.state.shareholders)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="PRIMER TIEMPO:"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <h4>Shareholders</h4>

        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
          {console.log(" idx: " + idx)}
            <p>{idx}  </p>

            <input
              type="text"

              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddShareholder} className="small">Agregar un Platilloz</button>
        <button>Incorporate</button>

        <button type="button" onClick={this.showContents.bind(this)}>Show Content</button>

        <Link to={{
        pathname: '/second',
        state: {newShareholders: this.state.shareholders }
        }}><button type="button"> Segundo Tiempo</button></Link>

      </form>
    )
  }
}



export default App;
