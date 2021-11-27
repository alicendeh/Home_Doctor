import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    flexDirection: "row",
    borderRadius: 20,
    marginTop: 20,
    height: 45,
    borderColor: "#FFA800",
    borderWidth: 1,
    shadowColor: "#000",
    elevation: 2,
  },
  IconView: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 11,
  },
  inputext: {
    flex: 1,
    marginHorizontal: 15,
  },
});

export default styles;
