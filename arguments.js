function Name(firstname, lastname){
    console.log(arguments);      //arguments means array lite object!
    let fullName = '';
    for(let i = 0; i<arguments.length;i++){
      const namePart = arguments[i];
      fullName = fullName + " "+namePart;

    }
    return fullName;
}
const name =Name('sumona','akter','nila','mehevien','othoy');
console.log(name);