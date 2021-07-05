import React, { useContext } from "react";

const AppContext = React.createContext();

const data = [
     { id: 1, name: "G Rajesh", age: 20 },
     { id: 2, name: "E Sri Jayan", age: 19 },
     { id: 3, name: "B Guhan", age: 20 },
     { id: 4, name: "Surya", age: 19 },
];

// you can provide any kind of data to the value which use can use in any of the component by invoking useGlobalContext();
const AppProvider = ({ children }) => {
     return (
          <AppContext.Provider
               value={{
                    data,
               }}
          >
               {children}
          </AppContext.Provider>
     );
};

const useGlobalContext = () => {
     return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
