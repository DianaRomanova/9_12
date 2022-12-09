function f1( a,b){
console.log(a*b);
}
a=4;
f1(a,3);

function showSum(elem,x,y){
    console.log(arguments);
    document.querySelector(elem).textContent = x+y;
}

// showSum(out-2,5,6);

function showSumAl (...args){
  //  console.log(arguments);
 //   let sum =0;
  //  for (let i = 0; i<arguments.length;i++) {
 //       sum+=arguments[i];
 //   } console.log(sum);
 // let sum =Array.from(arguments).reduce((accum, item) => accum += item);
    let sum = args.reduce((accum,item) => accum+= item);
console.log(sum);
    }
showSumAl(3,6,7,4,9);


