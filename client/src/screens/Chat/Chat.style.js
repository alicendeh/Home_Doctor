import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentView: {
    paddingHorizontal: 18,
  },
  convText: {
    fontFamily: "Poppins-Light",
    paddingVertical: 14,
    fontWeight: "bold",
    fontSize: 19,
    color: "#FFA800",
  },
  firstView: {
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
    flex: 1,
  },
  badge: {
    alignItems: "center",
    justifyContent: "center",
    width: 23,
    height: 23,
    borderRadius: 50,
    padding: 5,
  },
  txt: {
    marginHorizontal: 12,
  },
  name: {
    fontFamily: "Poppins-Light",
    fontSize: 18,
    fontWeight: "700",
  },
  title: {
    marginVertical: 5,
  },
  lastContent: {
    alignItems: "center",
  },
  numBadge: {
    color: "white",
    fontSize: 11,
  },
});

export default styles;
