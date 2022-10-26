//call-back function
//buji nai kisu e!
//example-1
function welComeGuest(name){
    console.log(name);
}
const actorName = 'sumona';
welComeGuest(actorName,greetEvening);



//example-2
function greetMorning(name){
    console.log('good morning',name);
}
greetMorning('ispa')

//example-3
function greetEvening(name){
    console.log('good Evening',name)
}
greetEvening('Nahar')
welComeGuest(actorName ,greetEvening);
