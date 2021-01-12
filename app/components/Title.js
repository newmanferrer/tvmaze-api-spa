export function Title() {
 const $title = document.createElement('h1');
 $title.classList.add('title');
 $title.innerHTML = 'TVMAZE SPA (Vanilla JavaScript)';

 const $styles = document.getElementById('dynamic-styles');
 $styles.innerHTML += `
  .title {
   margin: 0 auto;
   padding: 0.5rem;
   text-align: center;
   color: white;
   background-color: teal;
  }
 `;
 
 return $title;
}
