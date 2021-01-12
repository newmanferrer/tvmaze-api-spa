export async function ajax (props) {
 const { url, cbSuccess } = props;
 const d = document;
 const $main = d.getElementById('main');
 const $loader = d.getElementById('loader');
 const $styles = d.getElementById('dynamic-styles');

 await fetch(url)
  .then((response) => response.ok ? response.json() : Promise.reject(response))
  .then((json) => cbSuccess(json))
  .catch((error) => {
   let message = error.statusText || 'Ocurrió un error al acceder a la API';
   $main.innerHTML = '';

   $main.innerHTML = `
				<div class='error'>
					<p>Error ${error.status}: ${message}</p>
				</div>
   `;

   $styles.innerHTML += `
    .error {
     padding: 1rem;
     text-align: center;
     font-size: 120%;
	   	font-weight: bold;
     color: #ffffff;
     background-color: #ff0000;
    }
   `;

   $loader.style.display = 'none';
   console.log(error)
  });
}
