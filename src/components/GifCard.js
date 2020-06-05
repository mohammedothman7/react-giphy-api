import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class GifCard extends Component {
  render() {
    let display;
    if (this.props.result) {
      display = this.props.result.map((e) => {
        return (
          <div key={uuidv4()}>
            {' '}
            <h3 key={uuidv4()}>{e.title}</h3>
            <img src={e.imageUrl} alt={e.title} />
          </div>
        );
      });
    } else {
      display = <p>Loading...</p>;
    }
    return (
      <>
        <h1>{this.props.filterBy.toString().toUpperCase()}</h1>

        <div>{display}</div>
      </>
    );
  }
}

export default GifCard;
