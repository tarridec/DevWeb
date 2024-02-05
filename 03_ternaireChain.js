
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
    return a == b ? "a et b sont égaux" :
           a > b ? "a est plus grand que b" : "b est plus grand que a"
}

console.log(ternaryChain(17, 15))

module.exports = ternaryChain;