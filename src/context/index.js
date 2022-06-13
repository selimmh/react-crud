import { createContext, useState } from "react";
export const Context = createContext();

const StateProvider = (props) => {
  const [open, setOpen] = useState(false);

  const [notification, setNotification] = useState("");

  if (notification) {
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  }

  return (
    <Context.Provider
      value={{
        open,
        setOpen,
        notification,
        setNotification,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
