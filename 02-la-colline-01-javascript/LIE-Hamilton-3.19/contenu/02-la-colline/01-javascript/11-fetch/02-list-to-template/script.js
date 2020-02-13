/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.querySelector("#run").addEventListener("click", () => {
    fetch("http://localhost:3000/heroes")
      .then(response => response.json())
      .then(heroesList =>
        heroesList.forEach(element => {
          document.querySelector(
            "#target"
          ).innerHTML += `<li> ${element.name} </li>`;
          document.querySelector(
            "#target"
          ).innerHTML += `<li> ${element.alterEgo} </li>`;
          document.querySelector(
            "#target"
          ).innerHTML += `<li> ${element.abilities} </li>`;

          console.log(element);
        })
      );
  });
})();
