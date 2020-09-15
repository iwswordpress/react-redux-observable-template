import React from 'react';

const Item = ({ item }) => {
  console.log('[ITEM] ', item);
  return (
    <article className="Item">
      <header>
        <h4>
          {item.id} - {item.city} with latitude: {item.latitude}, longitude:{' '}
          {item.longitude}
        </h4>
      </header>
    </article>
  );
};

export default Item;
