/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        window.lib.getPosts((error, posts) => {
            
            posts.forEach(element => {
                
                window.lib.getComments(element, (err, comments) => {
                    
                    element["comments"] = comments
                    
                    
                })
                
                while (element.comments == undefined) {
                    console.log("coucou");
                } 
                console.log(element);
            });
        });

        
        
        
    });
})();

// La fonction window.lib.getComments() est disponible dans le script. Elle doit recevoir un id d'article comme premier paramètre, ainsi qu'un callback en second paramètre. Après un petit délai, le callback sera exécuté avec deux paramètres : le premier contient une erreur (s'il y en a une, sinon null), le second un tableau des commentaires de l'article.

// Au clic sur le bouton, appelle la fonction getPosts. Pour chaque article récupéré, appelle la fonction getComments et ajoute les commentaires obtenus dans une propriété comments de l'article. Affiche les articles dans la console (les fonctions getPosts et getComments ne retournent jamais d'erreur).
