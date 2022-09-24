import React, { Component } from 'react';
import NumberItem from './NumberItem';

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
  }

  remove(num) {
    this.setState(st => ({ nums: st.nums.filter(n => n !== num) }));
  }

  render() {
    return (
      <div className='NumberList'>
        <h1>First Number List</h1>
        {this.state.nums.map(n => (
          // Not a good practice
          <NumberItem value={n} remove={() => this.remove(n)} />
        ))}
      </div>
    );
  }
}

export default NumberList;
