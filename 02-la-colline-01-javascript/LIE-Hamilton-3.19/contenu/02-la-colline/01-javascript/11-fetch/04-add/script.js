/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  let getHeroName;
  let getAlterEgo;
  let getHeroPowers;
  let getNewId;
  // Récupération de l'API
  const getPost = () => {
    return fetch("http://localhost:3000/heroes")
      .then(res => res.json())
      .then(posts => console.log(posts));
  };

  const newPost = post => {
    const options = {
      method: "POST",
      body: JSON.stringify(post),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    };
    return fetch("http://localhost:3000/heroes", options)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.error(error));
  };

  document.querySelector("#run").addEventListener("click", () => {
    getHeroName = document.querySelector("#hero-name").value;
    getAlterEgo = document.querySelector("#hero-alter-ego").value;
    getHeroPowers = document.querySelector("#hero-powers").value;
    console.log(getHeroName, getAlterEgo, getHeroPowers);
    let post = {
      id: getNewId,
      name: getHeroName,
      alterEgo: getAlterEgo,
      abilities: getHeroPowers
    };

    newPost(post);
    getPost();
  });
})();
