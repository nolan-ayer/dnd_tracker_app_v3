import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//maybe need custom hook
//need context for auto reevaluation of cards/notes pages on successful form submission

const UpdatedListContext = React.createContext({
  refetchCards: () => {},
  refetchNotes: () => {},
});

export const UpdatedListProvider = (props) => {
  let url = `https://dnd-tracker-d4735-default-rtdb.firebaseio.com/${localStorage.getItem(
    "userId"
  )}`;
  const errorMessage =
    "Oops! It looks like something went wrong. Please reload the page and try again.";

  const fetchCardsHandler = async () => {
    const response = await fetch(url + "/cards.json");
    const data = await response.json();

    if (!response.ok) {
      alert(errorMessage);
    }
  };

  const fetchNotesHandler = async () => {
    const response = await fetch(url + "/notes.json");
    const data = await response.json();

    if (!response.ok) {
      alert(errorMessage);
    }
  };

  const contextValue = {
    refetchCards: fetchCardsHandler,
    refetchNotes: fetchNotesHandler,
  };

  return (
    <UpdatedListContext.Provider value={contextValue}>
      {props.children}
    </UpdatedListContext.Provider>
  );
};

export default UpdatedListContext;
