import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 21,
    paddingHorizontal: 21,
    backgroundColor: theme.light.BCKG,
    flex: 1,
  },
  mainView: {
    flexDirection: "row",
    margin: 15,
    alignItems: "center",
  },
  txt: {
    fontSize: 16,
    paddingHorizontal: 12,
    color: theme.light.COLOR,
  },
  main: {
    margin: 15,
  },
  tel: {
    color: theme.light.COLOR,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    color: theme.light.COLOR,
    marginTop: 14,
    fontSize: 25,
    fontFamily: "PortLligatSans-Regular",
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: theme.light.BCKG,
    // flex: 1,
    justifyContent: "flex-end",
    padding: 15,
  },
});

export default styles;
