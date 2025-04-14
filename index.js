class Person{
    constructor(firstName, lastName){
        this.nama_Depan = firstName;
        this.nama_Belakang = lastName;
        this.umur = 22;
    }

    sayHello(name){
        console.log(`kenalkan nama saya ${name}, dan umur saya ${this.umur}, salam kenal ${this.nama_Depan} ${this.nama_Belakang}`)
    }
}

const budi = new Person("budi", "handoko")
budi.sayHello("yohanes guido bogin")