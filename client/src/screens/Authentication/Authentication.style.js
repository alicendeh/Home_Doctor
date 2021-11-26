import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f5f5f5",
    // paddingHorizontal: 18,
  },
  imgView: {
    position: "absolute",
    right: 0,
  },
  vector: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 55,
  },
  txt: {
    fontFamily: "Poppins-Light",
    fontSize: 35,
    color: "rgba(0,0,0,0.6)",
  },
  welcomeView: {
    marginHorizontal: 30,
    marginVertical: 8,
  },
  txt1: {
    fontSize: 18,
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
    width: "87%",
    borderWidth: 1,
    borderColor: "#cfcfcf",
    height: 55,
    marginHorizontal: 30,
    marginVertical: 8,
    borderRadius: 10,
  },
  inputView: {
    // backgroundColor: "pink",
    width: "100%",
  },
  thediv: {
    flexDirection: "row",
  },
  iconView: {
    alignItems: "center",
    justifyContent: "center",
    // margin: 6,
    marginLeft: 12,
  },
  inputText: {
    flex: 1,
    fontSize: 12,
    flex: 1,
    flexDirection: "row",
  },
  input: {
    marginHorizontal: 15,
    flex: 1,
    fontSize: 17,
  },
  hide: {
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  create: {
    color: "white",
    fontFamily: "Poppins-Light",
    fontSize: 18,
    textAlign: "center",
  },
  acct: {
    color: "rgba(139,137,137,1)",
    fontFamily: "Poppins-Light",
    fontSize: 15,
    textAlign: "center",
    paddingVertical: 8,
  },
  sign: {
    borderColor: "rgba(159,205,205,1)",
    width: "85%",
    borderWidth: 1.5,
    marginHorizontal: 30,
    paddingVertical: 8,
    marginBottom: 50,
    borderRadius: 10,
  },
  signTxt: {
    fontFamily: "Poppins-Light",
    fontSize: 18,
    textAlign: "center",
    color: "rgba(48,171,171,1)",
  },
});

export default styles;
