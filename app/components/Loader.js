export function Loader() {
 const $loader = document.createElement('img');
 $loader.src = 'app/assets/loaders/oval-negro.svg';
	$loader.alt = 'Cargando...';
 $loader.id = 'loader';
 $loader.classList.add('loader');

 const $styles = document.getElementById('dynamic-styles');
 $styles.innerHTML += `
  .loader {
   width: 2.5rem;
	  height: 2.5rem;
   margin: 1rem auto;
   display: block;
  }
 `;

 return $loader;
}
