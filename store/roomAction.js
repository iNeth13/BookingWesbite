import React, { useReducer, createContext, useContext } from "react";

const roomContext = createContext();
const initialStates = {};

export default function RoomProvider(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_ALL_ROOMS": {
        return {
          ...state,
          allRooms: action.payload,
        };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialStates);
  const { allRooms } = props;
  console.log(allRooms);
  return (
    <roomContext.Provider value={{ ...state, allRooms }}>
      {props.children}
    </roomContext.Provider>
  );
}

export const useRoomContext = () => {
  return useContext(roomContext);
};
