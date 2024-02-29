/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 * 
 * exemple: [1, 2, 3] => [1, 2]
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte: 
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
*/

const array1 = [1, 2, 3];

const extractFirstTwo = ([first, second]) => [first, second];
console.log(extractFirstTwo(array1));


/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau
 * 
 * exemple: [1, 2, 3] => [2, 3]
 */

const array2 = [1, 2, 3];

//const extractRest = ([, ...rest]) => rest;
const extractRest = ([first, ...finTableau]) => finTableau;
console.log(extractRest(array2));


/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 * 
 * exemple: {name: "toto", age: 42} => "toto"
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */

const array3 = {name: "toto", age: 42};

const extractName = ({name}) => name;
/**
  const extractName = (obj) => {
     let name = obj;
     return obj;
  }
 */
console.log(extractName(array3));


/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 * 
 * exemple: {name: "toto", password: "1234"}
 * 
 * contrainte: 
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 * 
 */

const array4 = {name: "toto", password: "1234"}

const removePassword = ({password, ...finTableau}) => finTableau;
/**
  const removePassword = (obj) => {
     const {password, ...rest} = obj;
     return obj;
  }
*/
console.log(removePassword(array4));


module.exports = {extractFirstTwo, extractRest, extractName, removePassword}