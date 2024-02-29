
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */
 
const arro = [1, 2, 3, 4, 5];

const multiplyByTwo = (array) => array.map((i) => i * 2);
console.log(multiplyByTwo(arro));


/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

//const filterNameStartByA = array => array.filter(i => i[0] === 'A');
const filterNameStartByA = array => array.filter(i => i.startsWith('A'));
console.log(filterNameStartByA(['Adeline', 'Maëlys', 'Adrien', 'Klara', 'Youenn']));


/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const sum = (array) => { 
  const responce = array.reduce((acc, i) => {
    console.log(acc);
    return acc + i
  }, 0);
  return responce;
}
let array = [1, 2, 3];
console.log(sum(array));

/**let array = ["a", "b", "c", "d"]

let count = 0;
for (let i = 0; i < array.length; i++) {
  count++;
}

let responce = array.reduce((acc, i) => {
  acc = acc + i;
  console.log(acc, i);
  return acc;
}, ""); */


/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const array4 = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Doe'},
  {id: 3, name: 'Foo'},
  {id: 4, name: 'Bar'},
];
const findUserById = (array, id) => array.find(i => i.id === id)?.name ?? null;
console.log(findUserById(array4, 3))
//console.log(findUserById(array4, 5))


module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};