let vegetables = ["squash", "broccoli", "carrots", "celery"];
vegetables.push("tomatoes");
vegetables.unshift();
let fruits =["grapes","strawberries","blueberries","plums","bananas"]

let produce= vegetables.concat(fruits);
produce.sort();
produce.reverse();
console.log(produce);

let produceString=[];
console.log(produce.join());
/* DO NOT CHANGE BEYOND THIS LINE */

const body = document.querySelector('body');
const vegetablesString = vegetables.join(", ");
body.insertAdjacentHTML('beforeend', vegetablesString);