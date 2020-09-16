import React from 'react';

const Item2 = ({ item2 }) => {
  console.log('[ITEM2] ', item2);
  return (
    <article className="Item">
      <header>
        <h4>
          {item2.email}
          {/* {item.city} with latitude: {item.latitude}, longitude:{' '}
          {item.longitude} */}
        </h4>
      </header>
    </article>
  );
};

export default Item2;
