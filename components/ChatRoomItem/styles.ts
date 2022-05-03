import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {},
  container: { flexDirection: "row", padding: 10 },
  rightContainer: { flex: 1, justifyContent: "center" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: { width: 50, height: 50, borderRadius: 30, marginRight: 10 },
  name: { fontWeight: "bold", fontSize: 18, marginBottom: 3 },
  text: {
    color: "grey",
  },
  badgeContainer: {
    backgroundColor: "#3872E9",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 45,
    top: 10,
  },
  badgeText: { color: "white", fontSize: 12 },
});
