import React, { useReducer } from 'react';
import DataContext from './DataContext';


const DataProvider = ({children, reducer, initialState}) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider