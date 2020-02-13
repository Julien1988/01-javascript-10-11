/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        //console.log(window.lib.getPosts());
        
        window.lib.getPosts() 
            
            .then((data) => {
                // Do somthing with data 
                console.log(data);
            })
            .catch((err) => {
                // Do something with error
                console.log(err);
            });
        
        
    });
})();



// La fonction window.lib.getPosts() est disponible dans le script. Elle retourne une Promise qui sera résolue, après un petit délai, avec un tableau d'articles.

// Au clic sur le bouton, appelle la fonction getPosts et affiche les articles obtenus dans la console (la fonction getPosts sera toujours résolue sans erreur).
