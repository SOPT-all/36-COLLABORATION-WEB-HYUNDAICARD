import { globalStyle } from "@vanilla-extract/css";

globalStyle("#root", {
  height: "100%",
});

globalStyle("html, body", {
  width: "100%",
  height: "100%",
  margin: "0",
  padding: "0",
  fontSize: "62.5%",
  scrollbarWidth: "none",
  scrollBehavior: "smooth",
});
