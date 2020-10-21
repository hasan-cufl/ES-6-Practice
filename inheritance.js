
// Inheritance, extends class, super, class method
class Parent{
    constructor(){
        this.fatherName = "Shamsud duha";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +' '+ this.fatherName;
    }
}

const baby1 = new Child("Mahi");
const baby2 = new Child("Talha");
console.log(baby1.getFullName());
console.log(baby2.getFullName());