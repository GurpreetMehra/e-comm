import { useState } from "react";
import RootContext from "./RootContext";

const RootState = (props) => {
  const userState = useState(null);
  const useError = useState(null);

  return (
    <RootContext.Provider value={{ userState, useError }}>
      {props.children}
    </RootContext.Provider>
  );
};
export default RootState;
