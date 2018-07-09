import React, { Component } from 'react'
import thick from '../img/thick.svg'
import cross from '../img/cross.svg'


class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items : [],
      validatedItems : []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.validateItem = this.validateItem.bind(this);
  }

  handleChange(e) {
    this.setState({term: e.target.value});
  }

  handleSubmit(event) {
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
    event.preventDefault();
  }
    
  removeItem(index) {
    let data = this.state.items
    data.splice(index, 1);
    this.setState({
      items: data
    })
  }

  validateItem(index) {
    let itemOk = this.state.items[index]
    this.setState({
      validatedItems: [...this.state.validatedItems, itemOk]
    })
    this.removeItem(index)
  }

  
  render() {
    let terminated = undefined;

    let success = (index) => ( <img src={ thick } alt="validate"  onClick={ () => this.validateItem(index) } width="15" /> )

    let error = (index) => ( <img src={ cross } alt="remove" onClick={ () => this.removeItem(index) } width="15" /> )
    
    let itemList = this.state.items.map( (item, index) => 
      <li key={index}>
        <div className="item">{item}</div>
        <div className="action">{ success(index) } { error(index) }</div>
      </li> )
    
    let ValidatedItemList = this.state.validatedItems.map( (item, index) => <li key={index}>{item}</li> )
      
    if (this.state.validatedItems.length >0) {
      terminated = (
        <div>
          <h3>Terminés :</h3>
          <ul>
            { ValidatedItemList }
          </ul>
        </div>
      )
    }
    
    
    return (
      <div className="Todo">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.term} onChange={ this.handleChange }/>
          <button id="button" type="submit" disabled={ this.state.disableSubmit }>Ajouter</button>
        </form>

        { itemList }

        {terminated}
        
      </div>
    );
  }
}

export default Todo;