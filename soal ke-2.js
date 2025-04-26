// ### _Tugas 2: Class Student (Pewarisan dari Person)_

// _Tujuan:_ Belajar inheritance (pewarisan class).

// _Instruksi:_

// 1. Buat class Student yang merupakan turunan dari Person.
// 2. Tambahkan properti grade pada class Student.
// 3. Tambahkan method study() yang menampilkan "[nama] is studying".
// 4. Buat object Student, lalu panggil method greet() dan study().

// ---

class Person{
    constructor(firstname, age){
        this.name = firstname;
        this.umur = age;
    }

    greet(){
        console.log(`hallo nama saya ${this.name}, dan umur saya ${this.umur}`)
    }
}
    


class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.lulus = grade;
    }

    study(){
        console.log(`${this.name}, is studying`)
    }
}

const yohan =new Student("yohan", 21)
const guido = new Student("guido", 20)
yohan.study()
yohan.greet()

guido.study()
guido.greet()