abstract class Person {
    constructor(
        public id :number,
        public name : string
    ){}
}


export class Student extends Person {
    constructor(
        public id :number,
        public name:string,
        public grade : number
    ){
        super(id,name)
    }
}