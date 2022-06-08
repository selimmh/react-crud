import { createContext, useState } from "react";
export const Context = createContext();

const StateProvider = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
