import React, { Component } from 'react';
import BetterNumberItem from './BetterNumberItem';

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    this.setState(st => ({ nums: st.nums.filter(n => n !== num) }));
  }

  render() {
    return (
      <div className='NumberList'>
        <h1>Better Number List</h1>
        {this.state.nums.map(n => (
          <BetterNumberItem value={n} remove={this.remove} />
        ))}
      </div>
    );
  }
}

export default BetterNumberList;


/**  How data flows  **/
// 1. A parent component defines a function
// 2. The function is passed as a prop to child
// 3. The child component revokes the prop
// 4. The parent function is called, usually setting a new state
// 5. The parent component is re-rendered along with the children
