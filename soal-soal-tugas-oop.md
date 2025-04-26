## latihan belajar oop javascript

---

### _Tugas 1: Class Person_

_Tujuan:_ Belajar membuat class dan method dasar.

_Instruksi:_

1. Buat sebuah class bernama Person.
2. Class ini harus punya properti name dan age (isi dari constructor).
3. Tambahkan method greet() yang mencetak perkenalan dirinya (pakai console.log).
4. Buat minimal 2 object dari class Person dan panggil method greet() masing-masing.

---

### _Tugas 2: Class Student (Pewarisan dari Person)_

_Tujuan:_ Belajar inheritance (pewarisan class).

_Instruksi:_

1. Buat class Student yang merupakan turunan dari Person.
2. Tambahkan properti grade pada class Student.
3. Tambahkan method study() yang menampilkan "[nama] is studying".
4. Buat object Student, lalu panggil method greet() dan study().

---

### _Tugas 3: Class BankAccount_

_Tujuan:_ Belajar encapsulation dan validasi data.

_Instruksi:_

1. Buat class BankAccount dengan properti owner dan balance.
2. Tambahkan method deposit(amount) untuk menambah saldo.
3. Tambahkan method withdraw(amount) untuk mengambil saldo. Jangan izinkan saldo minus.
4. Tambahkan method checkBalance() untuk menampilkan saldo saat ini.

---

### _Tugas 4: Mini Project - Library System_

_Tujuan:_ Menggabungkan banyak class dan array of objects.

_Instruksi:_

1. Buat class Book dengan properti title, author, dan isAvailable.
2. Buat class Library yang menyimpan daftar buku dalam array.
3. Tambahkan method:
   - addBook(book) untuk menambahkan buku.
   - listBooks() untuk menampilkan semua buku.
   - borrowBook(title) untuk meminjam buku (ubah isAvailable jadi false).
   - returnBook(title) untuk mengembalikan buku (ubah isAvailable jadi true).
4. Buat beberapa objek Book, tambahkan ke dalam objek Library, dan uji semua method-nya.

## tugas 5:

### Buat class Car yang punya properti:

1.brand

model

year

isAvailable (boolean)

Buat method di class Car:

rentCar() ➔ mengubah isAvailable menjadi false.

returnCar() ➔ mengubah isAvailable menjadi true.

Buat beberapa object Car, lalu uji semua method-nya:

Tampilkan informasi mobil.

Sewa mobil, cek statusnya.

Kembalikan mobil, cek lagi statusnya.
