import React from 'react';
import { connect } from 'react-redux';

import Item2 from './Item2';

const Items2 = ({ items2 = [] }) => {
  console.log('[ITEMS] ', items2);
  return (
    <section>
      {items2.map((item2) => (
        // randomuser does not have id
        <Item2 key={Math.random()} item2={item2} />
      ))}
    </section>
  );
};

const mapStateToProps = (state) => {
  return { items2: state.items2 };
};

export default connect(mapStateToProps)(Items2);
