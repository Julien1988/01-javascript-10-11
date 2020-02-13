/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons()
            .then((personData) => {
                console.log(personData);
            })
            .catch((personError) => {
                //console.log(personError);
                console.error("raté !")
            })
    });
})();




// La fonction window.lib.getPersons() est disponible dans le script. Elle retourn une Promise qui sera résolue, après un petit délai, avec un tableau de personnes.

// Au clic sur le bouton, appelle la fonction getPersons et affiche le resultat obtenus dans la console. Attention : la Promise retournée par la fonction getPersons a plus ou moins une chance sur deux d'être rejetée avec une erreur. Si c'est le cas, utilise console.error() pour l'afficher.
