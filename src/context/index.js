import { createContext, useState } from "react";
export const Context = createContext();

const StateProvider = (props) => {
  // modal state
  const [open, setOpen] = useState(false);

  // alert state
  const [alert, setAlert] = useState("");

  // user to update
  const [userToUpdate, setUserToUpdate] = useState(null);

  // user to delete
  const [userToDelete, setUserToDelete] = useState(null);

  if (alert) {
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <Context.Provider
      value={{
        open,
        setOpen,

        alert,
        setAlert,

        userToUpdate,
        setUserToUpdate,

        userToDelete,
        setUserToDelete,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
