import tvmazeApi from '../helpers/tvmaze-api.js';
import { ajax } from '../helpers/ajax.js';
import { ShowCard } from './ShowCard.js';
import { ShowDetailsCard } from './ShowDetailsCard.js';

export async function Router() {
 const { hash } = location;
 const d = document;
 const $main = d.getElementById('main');
 const $loader = document.getElementById('loader');
 const $styles = document.getElementById('dynamic-styles');
 $main.innerHTML = null;

 if ((!hash) || (hash === '#/')) {
  await ajax({
   url: `${tvmazeApi.SHOWS}`,
   cbSuccess: ((shows) => {
    const star = Math.round(Math.random() * 200);
    const end = (star + 10);
    let html = '';

    for (let i = star; i < end; i++) {
     const show = shows[i];
     html += ShowCard(show);
    }

    $main.innerHTML = html;
   })
  })
 } else if (hash.includes('#/search')) {
  const userQuery = localStorage.getItem('tvmazeLastSearch');

  if (!userQuery) {
   $loader.style.display = 'none';
   return false;
  }

  await ajax({
   url: `${tvmazeApi.SEARCH}${userQuery}`,
   cbSuccess: ((search) => {
    let html = '';

    if (search.length <= 0) {
     const message = `Búsqueda: <mark class="error-mark">${userQuery}</mark>, sin resultados...`;

     html = `
			 		<div class='error'>
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

      .error-mark {
       display: inline-block;
       padding: 0.3rem;
       color: #fff;;
       border-radius: 0.5rem;
       background-color: teal;
      }
     `;
    } else {
     search.forEach((show) => html += ShowCard(show));
    }

    $main.innerHTML = html;
   })
  });
 } else {
  const tvmazeShowId = localStorage.getItem('tvmazeShowId');

  await ajax({
   url: `${tvmazeApi.SHOW}${tvmazeShowId}`,
   cbSuccess: ((show) => {
    ShowDetailsCard(show);
   })
  })
 }

 $loader.style.display = 'none';
}
