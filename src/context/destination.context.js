import { useState, useContext, createContext } from "react";

const DestinationContext = createContext();
const DestinationProvider = ({ children }) => {
  const [destination, setDestination] = useState([]);

  return (
    <DestinationContext.Provider value={[destination, setDestination]}>
      {children}
    </DestinationContext.Provider>
  );
};

// custome hook
const useDestination = () => useContext(DestinationContext);

export { DestinationProvider, useDestination };
