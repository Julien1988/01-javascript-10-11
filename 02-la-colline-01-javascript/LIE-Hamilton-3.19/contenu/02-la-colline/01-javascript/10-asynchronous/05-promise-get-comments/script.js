/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts()
            .then((postData) => {
                //console.log(postData);
                postData.forEach(element => {
                    // Recuperation de l'id de chaque elements
                    let getId = element.id;
                    //console.log(getId);
                    
                    window.lib.getComments(getId) 
                        .then((commentData) => {
                            //console.log(commentData);
                            // element.comments cré un attributs du nom de comments puis on y injecte commentData
                            element.comments = commentData;
                            console.log(element);
                        })

                        .catch((err) => {
                            console.log(err);
                        })
                    

                });

            })
            .catch((err) => {
                console.log(err);
            })
    });
})();




// Tu as dû remarquer, dans l'exercice précédent, que les articles reçus via la fonction window.lib.getPosts comprennaient une propriété id.

// La fonction window.lib.getComments() est disponible dans le script. Elle doit recevoir un id d'article comme paramètre, et retourne une Promise qui sera résolue, après un petit délai, avec le tableau des commentaires de l'article.

// Au clic sur le bouton, appelle la fonction getPosts. Pour chaque article récupéré, appelle la fonction getComments et ajoute les commentaires obtenus dans une propriété comments de l'article. Affiche les articles dans la console (les fonctions getPosts et getComments seront toujours résolues sans erreur).
