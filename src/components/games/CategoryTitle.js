import React from 'react';

export default function CategoryTitle({ selectedCategory }) {
  return (
    <div>
      <h2 className="selectedCategoryTitle">{selectedCategory} games</h2>
    </div>
  );
}
