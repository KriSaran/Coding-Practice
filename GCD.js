/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {

    let temp = 0;
    let finalResult = "";
    if (str1.length <= str2.length) {
        temp = str1.length;
    } else {
        temp = str2.length;
    }
    

    for (let i = 0; i < temp; i++) {

        if (str1.charAt(i) == str2.charAt(i) ) {

            finalResult += "" + str1.charAt(i);

        }else{
            break;
        }



    }

    if (str1.replace(new RegExp(finalResult, 'g'), '') === '' &&
        str2.replace(new RegExp(finalResult, 'g'), '') === '') {
        return finalResult;
    } else {
        return "";
    }




}

// console.log(gcdOfStrings("ABCDEF","AB"));
console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"));
console.log(gcdOfStrings("ABABABAB", "ABAB"));





