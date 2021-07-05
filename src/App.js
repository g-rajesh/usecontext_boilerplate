import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

const App = () => {
     const { data } = useGlobalContext();

     useEffect(() => {
          console.log(data);
     }, []);

     return <div>App</div>;
};

export default App;
