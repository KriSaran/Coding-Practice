function detectWord(str) {
	let result="";
    let check='';
	for(let i=0;i<str.length;i++){
		 check=str.charCodeAt(i);
		if(!(check>=65 && check<=90)){
			 result+=str[i];
			 }
	}
	return result;
}