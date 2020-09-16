import React from 'react';
import { connect } from 'react-redux';
import { fetchItems2 } from './actions';

const FetchItems2 = ({ fetchItems2 }) => {
  return (
    <section className="FetchItems">
      <button onClick={fetchItems2}>Fetch Items</button>
    </section>
  );
};

export default connect(null, { fetchItems2 })(FetchItems2);
