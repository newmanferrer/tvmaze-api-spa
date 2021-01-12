export function FormSearch() {
 const d = document;
 const $formSearch = d.createElement('form');
 $formSearch.classList.add('form-search');

 const $input = d.createElement('input');
	$input.classList.add('form-search-input');
	$input.name = 'formSearchInput';
	$input.type = 'search';
	$input.autocomplete = 'off';
	$input.placeholder = 'Buscar...';

 $formSearch.appendChild($input);

 const $styles = d.getElementById('dynamic-styles');
 $styles.innerHTML += `
  .form-search {
   width: 100%;
   margin: auto;
   padding: 0.6rem;
   text-align: center;
   border-top: 2px solid white;
   background-color: teal;
  }

  .form-search-input {
   width: 60%;
   margin: auto;
   padding: 0.25rem;
   font-size: 1rem;
   outline: none;
   border-radius: 0.25rem;
  }
 `;

 if (location.hash.includes('#/search')) {
  $input.value = localStorage.getItem('tvmazeLastSearch');
 }

 d.addEventListener('search', (event) => {
  if (!event.target.matches('input[type="search"]')) return false;
  if (!event.target.value) localStorage.removeItem('tvmazeLastSearch');
 });

 d.addEventListener('submit', (event) => {
  if (!event.target.matches('.form-search')) return false;
  event.preventDefault();
  const userQuery = (event.target.formSearchInput.value).toLowerCase();

  if (userQuery !== '') {
   localStorage.setItem('tvmazeLastSearch', userQuery);
   location.hash = `#/search?search=${userQuery}`;
  } else {
   const $main = d.getElementById('main');
   const message = 'Por favor ingrese una búsqueda';

		 $main.innerHTML = `
			 <div class="error">
				 <p>${message}</p>
			 </div>
   `;

   $styles.innerHTML += `
    .error {
     text-align: center;
	    font-size: 100%;
	    font-weight: bold;
	    color: #ffffff;
	    border-radius: 5px;
	    background-color: #ff0000;
    }
   `;

  }
 });

 return $formSearch;
}
