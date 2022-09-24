// The joys of method binding
import React, { Component } from 'react';
import './WiseSquare.css';

class WiseSquare extends Component {
  static defaultProps = {
    messages: [
      /* wise messages go here */
      'A fool thinks himself to be wise, but a wise man knows himself to be a fool.',
      'Educating the mind without educating the heart is no education at all.',
      'Not everything that is faced can be changed, but nothing can be changed until it is faced.'
    ]
  };
  // best practice for method binding
  constructor(props) {
    super(props);
    this.dispenseWisdom = this.dispenseWisdom.bind(this);
  }
  dispenseWisdom() {
    let { messages } = this.props;
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }

  // dispenseWisdom = () => {
  //   let { messages } = this.props;
  //   let rIndex = Math.floor(Math.random() * messages.length);
  //   console.log(messages[rIndex]);
  // }

  render() {
    return (
      <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
      {/* <div className='WiseSquare' onMouseEnter={this.dispenseWisdom.bind(this)}> */}
      {/* <div className='WiseSquare' onMouseEnter={() => this.dispenseWisdom}> */}
        😎
      </div>
    );
  }
}

export default WiseSquare;
