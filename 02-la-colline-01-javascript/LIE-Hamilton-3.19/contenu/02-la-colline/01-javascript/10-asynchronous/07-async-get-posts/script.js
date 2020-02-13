/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        
        runFunction();
        
    });
    
    async function runFunction() {
        console.log("ici");
        
        const result = await window.lib.getPosts()
        .then((postData) => {
            console.log(postData);
        })
        .catch((postError) => {
            console.log(postError);
        })
    }


})();



// La fonction window.lib.getPosts() est disponible dans le script. Elle retourne une Promise qui sera résolue, après un petit délai, avec un tableau d'articles.

// Au clic sur le bouton, appelle la fonction getPosts et affiche les articles obtenus dans la console (la fonction getPosts sera toujours résolue sans erreur).

// Note : pour cet exercice, utilise la syntaxe async/await.
