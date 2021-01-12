export function ShowCard(props) {
 let id;
 let image;
 let name;
 let type;

 if (props.show) {
  id = props.show.id;
  image = props.show.image;
  name = props.show.name;
  type = props.show.type;
 } else {
  id = props.id;
  image = props.image;
  name = props.name;
  type = props.type;
 }
 
 
 const urlPoster = image
  ? image.medium 
  : 'app/assets/img/no-image.jpg';

 const slug = `shows/${id}/${name}`;
 let html = '';

 document.addEventListener('click', (event) => {
  if (!event.target.matches('.show-card a')) return false;
  localStorage.setItem('tvmazeShowId', event.target.dataset.id);
 });
 
 html = `
  <article class="show-card">
   <img class="show-card-img" src="${urlPoster}" alt="${name}">
   <h2 class="show-card-title">${name}</h2>
   <p class="show-card-paragraph">
    <span class="show-card-paragraph-span">${type}</span>
    <a href="#/${slug}" data-id="${id}" class="show-card-paragraph-link">Ver más</a>
   </p>
  </article>
 `;

 const $styles = document.getElementById('dynamic-styles');
 $styles.innerHTML += `
  .show-card {
   width: 70%;
   display: flex;
   flex-direction: column;
   margin: 1rem auto;
   padding: 1rem;
   border: 2px solid #000000;
   border-radius: 5px;
   box-shadow: 3px 3px 3px #000000;
   background-color: #003d3d;
  }

  .show-card-img {
   max-width: 100%;
   border: 2px solid #000000;
   border-radius: 5px;
  }

  .show-card-title {
   margin: 0.5rem auto;
   text-align: center;
   color: #ffffff;
  }

  .show-card-paragraph {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }

  .show-card-paragraph-span {
   text-align: center;
   font-size: 1.3rem;
   color: #ffffff;
  }

  .show-card-paragraph-link {
   margin-top: 1rem;
   text-align: center;
   font-size: 1.2rem;
   text-decoration: none;
   color: #ffffff;
  }
 `;

 return html;
}
