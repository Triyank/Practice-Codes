let strArr = ["1,2,3,4,5,6,7,8","1,3,5,7,9,10"];

let [arr1,arr2]= [strArr[0].split(","), strArr[1].split(",")];
let result= String(arr1.filter((ele)=>arr2.includes(ele)));
console.log(result);