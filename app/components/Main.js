export function Main() {
 const $main = document.createElement('main');
 $main.id = 'main';
 $main.classList.add('main');

 const $styles = document.getElementById('dynamic-styles');
 $styles.innerHTML += `
  .main {
   max-width: 100%;
   margin: 0 auto 3rem;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
 `;

 return $main;
}
