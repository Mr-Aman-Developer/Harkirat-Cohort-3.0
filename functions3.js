/*verifying voting age without loops,or functions*/  

let age= 19;
let canvote=age>18;
console.log(canvote);
age= 17;
canvote=age>18;
console.log(canvote);

/*verifying voting age with functions*/  
function e(number){
let canvote= number>18;
return canvote;
}
let a=e(19);
console.log(a);
/*verifying voting age with functions*/  