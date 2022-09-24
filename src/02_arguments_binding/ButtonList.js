import React, { Component } from 'react';
import './ButtonList.css';

class ButtonList extends Component {
  static defaultProps = {
    colors: ['#e056fd', '#eb4d4b', '#badc58', '#f0932b']
  };
  constructor(props) {
    super(props);
    this.state = { color: 'cyan' };
  }

  changeColor(newColor) {
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div className='ButtonList' style={{ backgroundColor: this.state.color }}>
        {this.props.colors.map(c => {
          const btnStyle = { backgroundColor: c };
          return (
            // Not a good practice to pass arguments
            // because it creates a new function everytime it renders
            <button style={btnStyle} onClick={() => this.changeColor(c)}>
              Click me
            </button>
          );
        })}
      </div>
    );
  }
}

export default ButtonList;
