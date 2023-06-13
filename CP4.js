function LongestWord(sen) { 
    // code goes here
    const sArray=sen.split(" ");
    const regex=/[a-zA-Z]/g;
     let str="";
     let result=[];
     sArray.forEach(resFunction);
     function resFunction(word){
          str=word.match(regex);
          if(str!==null){
          str=str.toString();
          str=(str.replaceAll(",",""));
          result.push(str);
          }
     }
     result.forEach(finalresult);
     function finalresult(finalWord){
        if(finalWord!==null && str!==null) {
        if(finalWord.length===str.length){
           result=result.splice(result.indexOf(finalWord),1);
        }else if(finalWord.length>str.length){
            str=finalWord;
         }
        }
     }

    return result[0];

  }

  // keep this function call hereCP7.js
console.log(LongestWord(readline()));