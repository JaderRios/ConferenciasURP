import React, { createContext, useState } from 'react';

// Crear el contexto
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataSeleccionada, setDataSeleccionada] = useState([]);

  return <DataContext.Provider value={{ dataSeleccionada, setDataSeleccionada }}>{children}</DataContext.Provider>;
};
