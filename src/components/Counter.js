import React, { Component } from 'react';
import {counterDecrement, counterIncrement} from '../actions/actionIndex';
import '../styles/Counter.css';
import { connect } from 'react-redux';

class Counter extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="Counter">
        <div>
          <h1>{ this.props.number }</h1>
          <button onClick={counterIncrement(this.props.store)}><i className='glyphicon glyphicon-thumbs-up'></i></button>
          <button onClick={counterDecrement(this.props.store)}><i className='glyphicon glyphicon-thumbs-down'></i></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log('this is the state',state)
  return { number : state }
}

export default connect(mapStateToProps)(Counter);
