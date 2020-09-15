import React from 'react';

const Item = ({ item }) => {
  console.log('[ITEM] ', item);
  return (
    <article className="Tweet">
      <header>
        <h3>
          {item.id} - {item.city}
        </h3>
        <p>
          {item.latitude} : {item.longitude}
        </p>
      </header>
    </article>
  );
};

export default Item;
