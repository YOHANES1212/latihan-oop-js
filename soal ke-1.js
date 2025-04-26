// ---

// ### _Tugas 1: Class Person_

// _Tujuan:_ Belajar membuat class dan method dasar.

// _Instruksi:_

// 1. Buat sebuah class bernama Person.
// 2. Class ini harus punya properti name dan age (isi dari constructor).
// 3. Tambahkan method greet() yang mencetak perkenalan dirinya (pakai console.log).
// 4. Buat minimal 2 object dari class Person dan panggil method greet() masing-masing.

// ---

class Person{
    constructor(firstname, age) {
        this.name = firstname;
        this.umur = age;
      }
    
      greet() {
        console.log(`hallo nama saya ${this.name}, dan umur saya ${this.umur}`);
      }
    
}
  

const andi = new Person("andi", 25);
const budi = new Person("budi",23)
andi.greet();
budi.greet();
