// function triArea(base, height) {
// 	if(base!=null && height!=null){
// 		return ((base*height)/2);
// 	}
// }
// console.log(triArea(10,3));
 function arryPractice(chars) {
    let resultElement=0;
    let resultArray=[];
    // let tempArray=[];
    let str=[];
    let arr=chars.sort()
    let temp=arr[0]

    for(let i=0;i<arr.length;i++){
        
        if(temp==arr[i]){
            resultElement++;
           
        }else{
            
            
            temp=arr[i];
            resultArray.push(arr[i-1]);
            str=resultElement.toString().split('');
            resultArray=resultArray.concat(str);
            resultElement=0;
        }
           
        //    if(arr.lastIndexOf(arr[i])==i)
        //     {
        //     resultArray.push(arr[i])
        //     str=resultElement.toString().split('');
        //     resultArray=resultArray.concat(str);

        //     }
    }
    console.log(resultArray);
    resultArray.push(arr[arr.length-1]);
    
    str=resultElement.toString().split('');
    resultArray =resultArray.concat(str);
    return resultArray;

};

console.log(arryPractice(["a","a","b","b","c","c","c"]));