import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rightContent: {
    backgroundColor: "#1DC3C3",
    paddingVertical: 8,
    marginVertical: 7,
    borderTopRightRadius: 11,
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 11,
    paddingHorizontal: 12,
    maxWidth: "80%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 7,
  },
  rightContentText: {
    fontFamily: "Poppins-Light",
    color: "#fff",
  },
  leftContent: {
    backgroundColor: "#DEDCDC",
    paddingVertical: 8,
    marginVertical: 7,
    borderTopRightRadius: 11,
    borderTopLeftRadius: 11,
    borderBottomRightRadius: 11,
    maxWidth: "80%",
    paddingHorizontal: 12,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 7,
  },
  leftContentText: {
    fontFamily: "Poppins-Light",
  },
  mainRight: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  mainLeft: {
    alignItems: "flex-start",
  },
  day: {
    paddingVertical: 12,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Poppins-Light",
  },
});

export default styles;
