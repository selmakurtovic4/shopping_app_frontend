import React from 'react';
import './ListContainer.css';

const ListContainer = ({ items }) => {
  return (
    <div className="list-container">
      {items.map((item, index) => (
        <div key={index} className="list-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default ListContainer;
