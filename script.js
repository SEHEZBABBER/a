let arr = [12,45,23,51,19,2];

let res = arr.reduce((acc,ele)=>{
    if(ele>acc)return ele;
    return acc;
})
console.log(res);