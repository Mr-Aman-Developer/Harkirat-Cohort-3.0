function aray(arr){
for(const users of arr){
if (users.age >= 18 && users.gender=="male"){
console.log(users.name);
}
else{
console.log("no user");
}
}
}
const users= [{
name:"Aman",
age:18,
gender:"male"
}, {
name:"Sadhvi",
age:28,
gender:"female"
}, {
name:"Raghav",
age:19,
gender:"male"}]

aray(users);