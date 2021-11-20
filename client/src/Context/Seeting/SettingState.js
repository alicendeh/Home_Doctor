import React, { useContext, useReducer } from "react";
import SettingContext from "./SettingContext";
import SettingReducer from "./SettingReducer";
// import ApiCall from "../ApiCall";

const SettingState = (props) => {
  const initialState = {
    theme: null,
  };

  const [state, dispatch] = useReducer(SettingReducer, initialState);
  const changeTheme = (themeValue) => {
    dispatch({
      type: "CHANGE_THEME",
      payload: themeValue,
    });
  };
  return (
    <SettingContext.Provider
      value={{
        theme: state.theme,
        changeTheme,
      }}
    >
      {props.children}
    </SettingContext.Provider>
  );
};
export default SettingState;
