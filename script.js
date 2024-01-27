// RANDOM PASSWORD GENERATOR

function generatePassword(lenght, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
   
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLNNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symboleChar = "é'(-_ç~#{[|`+=])}";

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowercase ? lowercaseChar : "";
    allowedChar += includeUppercase ? uppercaseChar : "";
    allowedChar += includeNumbers ? numberChar : "";
    allowedChar += includeSymbols ? symboleChar : "";

    if(lenght <= 6){
        return `password lenght must be at least 6 character`;
    }
    if(allowedChar.length === 0){
        return `At least one of set of character must be selected`;
    }

    for(let i = 0 ; i <= lenght ; i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }
    return password;
}


const passwordLenght = 14; 
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = false;

const password = generatePassword(passwordLenght,
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbols);

console.log(`the password generated is : ${password} `);


