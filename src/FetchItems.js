import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from './actions';

const FetchItems = ({ fetchItems }) => {
  return (
    <section className="FetchItems">
      <button onClick={fetchItems}>Fetch Items</button>
    </section>
  );
};

export default connect(null, { fetchItems })(FetchItems);
