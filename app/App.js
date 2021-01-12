import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Loader } from "./components/Loader.js";
import { Footer } from "./components/Footer.js";
import { Router } from "./components/Router.js";

export async function App() {
 const $root = document.getElementById('root');
 $root.innerHTML = null;

 const $styles = document.getElementById('dynamic-styles');
 $styles.innerHTML += `
  html {
   box-sizing: border-box;
   font-family: sans-serif;
   font-size: 16px;
  }
 
  *,
  *:after,
  *:before {
   box-sizing: inherit;
  }
 
  body {
   margin: 0;
   overflow-x: hidden;
  }
 `;

 $root.appendChild(Header());
 $root.appendChild(Main());
 $root.appendChild(Loader());
 $root.appendChild(Footer());

 Router();
}
