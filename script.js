let vegetables = ["squash", "broccoli", "carrots", "celery"];





/* DO NOT CHANGE BEYOND THIS LINE */

const body = document.querySelector('body');
const vegetablesString = vegetables.join(", ");
body.insertAdjacentHTML('beforeend', vegetablesString);