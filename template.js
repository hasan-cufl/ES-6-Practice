// Template string, multiple line string

const firstName = "Faridul";
const lastName = "Hasan";
// old system
const fullName = firstName + " " + lastName +" is a good boy";
// ES6 template
const fullName2 = `${40+40+20} ${lastName} is a good boy`;
console.log(fullName2)

// old system
const multiLine = "I love you\n"
    + "I miss you\n"
    + "I need you";

    // ES6 template
const multiLine2 = `I love you
I miss you
I don't need you`;

console.log(multiLine2)