import React, { useState, createContext } from 'react';

export const SelectedCategory = createContext();

export const SelectedCategoryProvider = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <SelectedCategory.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {props.children}
    </SelectedCategory.Provider>
  );
};
