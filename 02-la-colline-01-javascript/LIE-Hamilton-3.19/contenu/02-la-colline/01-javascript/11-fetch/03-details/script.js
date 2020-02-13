/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  heroId = [];
  document.querySelector("#run").addEventListener("click", () => {
    fetch("http://localhost:3000/heroes")
      .then(response => response.json())
      .then(herosList => {
        herosList.forEach(element => {
          heroId.push(element.id);
        });

        getId = document.querySelector("#hero-id").value;
        if (getId > heroId.length || getId === "") {
          alert("Et non!!!");
        }

        let getHero = herosList[getId];
        console.log(getHero);

        let template = document.querySelector("#tpl-hero");
        let tbody = document.querySelector("#target");
        let clone = document.importNode(template.content, true);
        let title = clone.querySelectorAll("h4");
        let text = clone.querySelector("p");
        title[0].textContent = `${getHero.name} ${getHero.alterEgo}`;
        text.textContent = getHero.abilities;

        tbody.appendChild(clone);
      });
  });

  // récupération du nombre dans le champs hero-id
})();
