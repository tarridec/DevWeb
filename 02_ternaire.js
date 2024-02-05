
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    a = 2
    b = 5

    return a == b ? "a et b sont égaux" :
           a > b ? "a est plus grand que b" : "b est plus grand que a"
}

console.log(ternaire(1, 2));

module.exports = ternaire;