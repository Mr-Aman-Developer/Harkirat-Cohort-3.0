function sum(a,b){
return a+b;
}
function min(a,b){
return a-b;
}
function mul(a,b){
return a*b;
}
function div(a,b){
return a/b;
}
function ops(a,b,op){
return op(a,b);
}
const ans= ops(1,2,div);
console.log(ans);