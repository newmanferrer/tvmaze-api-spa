export function ShowDetailsCard(props) {
 console.log(props);
 const { genres, image, language, name, status, summary, type } = props;
 const urlPoster = image ? image.medium : 'app/assets/img/no-image.jpg';
 const d = document;
 const $main = d.getElementById('main');

 const $card = d.createElement('article');
 $card.classList.add('details-card');

 const $image = d.createElement('img');
 $image.classList.add('details-card-image');
 $image.src = `${urlPoster}`;
 $image.alt = `${name}`;
 $card.appendChild($image);

 const $title = d.createElement('h2')
 $title.classList.add('details-card-title');
 $title.textContent = `${name}`;
 $card.appendChild($title);

 const $type = d.createElement('p');
 $type.classList.add('details-card-type');
 $type.textContent = `${type}`;
 $card.appendChild($type);

 const $gender = d.createElement('p');
 $gender.classList.add('details-card-gender');
 genres.forEach((gender) => {
  const $span = d.createElement('span');
  $span.classList.add('gender-span');
  $span.textContent = gender;
  $gender.appendChild($span);
 });
 $card.appendChild($gender);

 const $language = d.createElement('p');
 $language.classList.add('details-card-language');
 $language.textContent = `${language}`;
 $card.appendChild($language);

 const $status = d.createElement('p');
 $status.classList.add('details-card-status');
 $status.textContent = `${status}`;
 $card.appendChild($status);

 const $summary = d.createElement('p');
 $summary.classList.add('details-card-summary');
 $summary.innerHTML = `${summary}`;
 $card.appendChild($summary);

 $main.innerHTML = '';
 $main.appendChild($card);

 const $styles = document.getElementById('dynamic-styles');
 $styles.innerHTML += `
  .main {
   background-color: #ffffff;
  }
  .details-card {
   max-width: 80%;
   margin: 1rem auto;
   padding: 1rem;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
   align-items: center;
   border: 2px solid #000000;
   border-radius: 5px;
   box-shadow: 3px 3px 3px #000000;
   background-color: teal;
  }

  .details-card > * {
   margin: 0.2rem;
   color: #ffffff;
  }

  .details-card-image {
   border: 2px solid #000000;
   border-radius: 5px;
  }

  .details-card-title {
   font-size: 2rem;
  }

  .details-card-type,
  .details-card-gender,
  .details-card-language,
  .details-card-status {
   font-weight: bold; 
  }

  .details-card-gender {
   width: 100%;
   text-align: center;
  }

  .gender-span {
   margin-left: 0.5rem;
  }

  .details-card-summary {
   text-align: justify;
  }
 `;
}
