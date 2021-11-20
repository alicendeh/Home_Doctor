import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  imgView: {
    height: 200,
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    justifyContent: "flex-end",
  },
  vector: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: -170,
  },
  txt: {
    fontFamily: "Poppins-Light",
    fontSize: 40,
    color: "rgba(0,0,0,0.6)",
  },
  welcomeView: {
    marginHorizontal: 30,
    marginVertical: 8,
  },
  txt1: {
    fontSize: 20,
    color: "#797b7d",
  },
  gradient: {
    width: "85%",
    padding: 9,
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 8,
  },
  indView: {
    // flex: 1,
    width: "85%",
    borderWidth: 2,
    borderColor: "#cfcfcf",
    height: 75,
    marginHorizontal: 30,
    marginVertical: 8,
  },
  thediv: {
    flexDirection: "row",
  },
  iconView: {
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
  },
  inputText: {
    flex: 1,
    fontSize: 12,
    flex: 1,
    flexDirection: "row",
  },
  hide: {
    justifyContent: "flex-end",
    padding: 8,
  },
  create: {
    color: "white",
    fontFamily: "Poppins-Light",
    fontSize: 21,
    textAlign: "center",
  },
  acct: {
    color: "rgba(139,137,137,1)",
    fontFamily: "Poppins-Light",
    fontSize: 18,
    textAlign: "center",
    padding: 8,
  },
  sign: {
    borderColor: "rgba(159,205,205,1)",
    padding: 14,
    width: "85%",
    borderWidth: 2,
    marginHorizontal: 30,
    marginVertical: 8,
  },
  signTxt: {
    fontFamily: "Poppins-Light",
    fontSize: 18,
    textAlign: "center",
    color: "rgba(48,171,171,1)",
  },
});

export default styles;
