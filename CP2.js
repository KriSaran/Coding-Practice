//First Solution

function minMax(arr) {
	let minimum=arr[0];
	let maximum=arr[0];
	let newMinimum=0;
	for(let i=0;i<arr.length;i++){
		
		if(minimum<arr[i]){
          if(maximum<arr[i]){
			maximum=arr[i];
		 }
		 }else{
			   minimum=arr[i];
		 }
		 }
	return([minimum,maximum]);
}

console.log(minMax([13, 72, 98, 43, 24, 65, 31]));


//Second Solution

// function minMax(arr) {
// 	let minimum=arr[0];
// 	let maximum=arr[0];
// 	for(let i=1;i<arr.length;i++){
		
// 		if(arr[i]<minimum){
//               minimum=arr[i];

// 		 }else if(arr[i]>maximum){
// 			   maximum=arr[i];
// 		 }
// 	}
// 	return([minimum,maximum]);
// }