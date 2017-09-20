import React, { Component } from 'react';
import {counterDecrement, counterIncrement} from '../actions/actionIndex';
import '../styles/Counter.css';
import { connect } from 'react-redux';

class Counter extends Component {

  render() {
    return (
      <div className="Counter">
        <div>
          <h1>{ this.props.value }</h1>
          <button onClick={counterIncrement(this.props.store)}>+</button>
          <button onClick={counterDecrement(this.props.store)}>-</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return { value : state }
}

export default connect(mapStateToProps)(Counter);
