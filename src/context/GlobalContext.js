import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shipmentsData from 'data/shipments';
import useLocalStorage from '../hooks/useLocalStorage';

const GlobalContext = React.createContext({});

export function GlobalContextProvider({ children }) {
  const [shipments, setShipments] = useState([]);
  const [localStorage, setLocalStorage] = useLocalStorage('shipments', null);

  useEffect(() => {
    setShipments(shipmentsData);

    // expose store when run in Cypress
    if (window.Cypress) {
      const customShipmentsData = Cypress.env('customValues')?.shipments;
      setShipments(customShipmentsData || shipmentsData);
    }

    if (localStorage) {
      setShipments(localStorage);
    }
  }, []);

  const saveShipment = (newShipment) => {
    setShipments([...shipments, newShipment]);
    setLocalStorage([...shipments, newShipment]);
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
