import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shipmentsData from 'data/shipments';

const GlobalContext = React.createContext({});

export function GlobalContextProvider({ children }) {
  const [shipments, setShipments] = useState([...shipmentsData]);

  const saveShipment = (newShipment) => {
    setShipments([...shipments, newShipment]);
  };

  let value = {
    shipments,
    saveShipment,
  };
  // expose store when run in Cypress
  if (window.Cypress) {
    const customValues = Cypress.env('customValues');
    // const customMeasurementValues = Cypress.env('customMeasurementValues');
    // const customResultValues = Cypress.env('customResultsValues');
    console.log(customValues);
    value = {
      ...value,
      ...customValues,
    };
    console.log('values =>', value);
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
