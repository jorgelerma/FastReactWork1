import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './myStyle.css';
import './App.css';


class Seconds extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      test: 'mikes',
      name: '',
      secondshareholders: [{ name: '' }],
      shareholders: [{ name: '' }],
      myshareholders: [{ name: 'xxxx' }],
      firstShareholders: [{ name: '' }],
    };
  }

  componentDidMount(){
      console.log(" Second invoked: ");
      this.setState({myshareholders: this.props.location.state.newShareholders})
      console.log(this.state.myshareholders)
  }
  
  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }
  
  handleShareholderNameChange = (idx) => (evt) => {
 
    const newShareholders = this.state.secondshareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });
    
    this.setState({ secondshareholders: newShareholders });
  }
  
  handleSubmit = (evt) => {
    const { name, secondshareholders } = this.state;
    alert(`Incorporated: ${name} with ${secondshareholders.length} secondshareholders`);
  }
  
  handleAddShareholder = () => {
    this.setState({ secondshareholders: this.state.secondshareholders.concat([{ name: '' }]) });
  }
  
  handleRemoveShareholder = (idx) => () => {
    this.setState({ secondshareholders: this.state.secondshareholders.filter((s, sidx) => idx !== sidx) });
  }

  showContents(){
    // console.log(this.state.secondshareholders.forEach((item => (console.log(item.name)))));

    // console.log(this.state.secondshareholders)
    // console.log(this.props.location.state)

    console.log(this.state.myshareholders)

  }
  
  render() {    
    return (
        <div>
            <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="SEGUNDO TIEMPO:"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      
        <h4>Shareholders</h4>
      
        {this.state.secondshareholders.map((secondshareholders, idx) => (
          <div className="shareholder">
          {console.log(" idx: " + idx)}
            <p>{idx}  </p>
        
            <input
              type="text"
            
              value={secondshareholders.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddShareholder} className="small">Agregar Campo</button>
        <button>Incorporate</button>

        <button type="button" onClick={this.showContents.bind(this)}>Show Content</button>

        <Link to="/"><button>Regresar</button></Link>
        
      </form>
      </div>
      <div>{this.state.myshareholders.map((item) => ( <h3>{item.name}</h3>))}</div>
      <div><h3>kk </h3></div>


      <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="SEGUNDO TIEMPO segundo:"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      
        <h4>Shareholdersxxx</h4>
      
        {this.state.shareholders.map((shareholders, idx) => (
          <div className="shareholder">
          {console.log(" idx: " + idx)}
            <p>{idx}  </p>
        
            <input
              type="text"
            
              value={shareholders.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddShareholder} className="small">Agregar Campo</button>
        <button>Incorporate</button>

        <button type="button" onClick={this.showContents.bind(this)}>Show Content</button>

        <Link to="/"><button>Regresar</button></Link>
        
      </form>
      </div>

      

      </div>
      
       
       
 
    )
  }
}



export default Seconds;
