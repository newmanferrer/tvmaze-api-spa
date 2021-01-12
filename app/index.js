import tvmazeApi from "./helpers/tvmaze-api.js";
import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
 App();
});
