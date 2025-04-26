// ### _Tugas 4: Mini Project - Library System_

// _Tujuan:_ Menggabungkan banyak class dan array of objects.

// _Instruksi:_

// 1. Buat class Book dengan properti title, author, dan isAvailable.
// 2. Buat class Library yang menyimpan daftar buku dalam array.
// 3. Tambahkan method:
//    - addBook(book) untuk menambahkan buku.
//    - listBooks() untuk menampilkan semua buku.
//    - borrowBook(title) untuk meminjam buku (ubah isAvailable jadi false).
//    - returnBook(title) untuk mengembalikan buku (ubah isAvailable jadi true).
// 4. Buat beberapa objek Book, tambahkan ke dalam objek Library, dan uji semua method-nya.

class Book {
  constructor(title, author, isAvailable) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    console.log("daftar buku perpustakaan");
    this.books.forEach((book) => {
      console.log(`${book.title} oleh ${book.author} - ${book.isAvailable}?`);
    });
  }

  borrowBook(title) {
    const book = this.books.find((book) => book.title === title);
    if (book) {
      if (book.isAvailable) {
        book.isAvailable = false;
        console.log(`Buku "${title}" berhasil dipinjam.`);
      } else {
        console.log(`Buku "${title}" sedang tidak tersedia.`);
      }
    } else {
      console.log(`Buku "${title}" tidak ditemukan di perpustakaan.`);
    }
  }

  returnBook(title) {
    const book = this.books.find((book) => book.title === title);
    if (book) {
      if (!book.isAvailable) {
        book.isAvailable = true;
        console.log(`Buku "${title}" berhasil dikembalikan.`);
      } else {
        console.log(`Buku "${title}" belum pernah dipinjam.`);
      }
    } else {
      console.log(`Buku "${title}" tidak ditemukan di perpustakaan.`);
    }
  }
}

const book1 = new Book("Belajar JavaScript", "Yohanes", true);
const book2 = new Book("Algoritma Dasar", "Guido", true);
const book3 = new Book("Pemrograman Web", "Bogin", true);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listBooks();
library.borrowBook("Belajar JavaScript");
library.listBooks();
library.returnBook("Belajar JavaScript");
library.listBooks();
