import React from 'react';

export default function CategoryTitle({ selectedCategory }) {
  return (
    <div>
      <div>
        <h2>{selectedCategory} games</h2>
      </div>
    </div>
  );
}
