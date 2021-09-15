import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shipmentsData from 'data/shipments';

const GlobalContext = React.createContext({});

export function GlobalContextProvider({ children }) {
  const [shipments, setShipments] = useState([]);
  // const [shipments, setShipments] = useState([]);

  useEffect(() => {
    // @todo: falta el local storage que debe ser prioridad en ambos casos si es que existe
    setShipments(shipmentsData);
    // expose store when run in Cypress
    if (window.Cypress) {
      const customShipmentsData = Cypress.env('customValues')?.shipments;
      setShipments(customShipmentsData || shipmentsData);
    }
  }, []);

  const saveShipment = (newShipment) => {
    setShipments([...shipments, newShipment]);
  };

  const value = {
    shipments,
    saveShipment,
  };
  // expose store when run in Cypress
  if (window.Cypress) {
    window.store = {
      ...value,
    };
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.number.isRequired,
};

export default GlobalContext;
