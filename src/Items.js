import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';

const Items = ({ items = [] }) => {
  console.log('[ITEMS] ', items);
  return (
    <section>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(Items);
