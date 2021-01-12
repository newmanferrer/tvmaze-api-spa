export function Footer() {
 const $footer = document.createElement('footer');
 $footer.classList.add('footer');

 $footer.innerHTML = `
  <p class="footer-paragraph">
   NEWMAN FERRER - V0.01
  </p>
 `;

 const $styles = document.getElementById('dynamic-styles');
 $styles.innerHTML += `
  .footer {
   width: 100%;
   display: flex;
   justify-content: center;
	  align-items: center;
	  position: fixed;
	  bottom: 0;
	  background-color: teal;
  }

  .footer-paragraph {
   font-size: 1rem;
   font-weight: bold;
   color: #ffffff;
  }
 `;

 return $footer;
}
