// ### _Tugas 3: Class BankAccount_

// _Tujuan:_ Belajar encapsulation dan validasi data.

// _Instruksi:_

// 1. Buat class BankAccount dengan properti owner dan balance.
// 2. Tambahkan method deposit(amount) untuk menambah saldo.
// 3. Tambahkan method withdraw(amount) untuk mengambil saldo. Jangan izinkan saldo minus.
// 4. Tambahkan method checkBalance() untuk menampilkan saldo saat ini.

// ---

class BankAccount {
  #balance;
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`deposit $${amount}`);
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("insuffiecient balance");
    } else if (amount > 0) {
      this.#balance -= amount;
      console.log(`withdraw: $${amount}`);
    } else {
      console.log("withdraw amount must be positive");
    }
  }

  checkBalance() {
    console.log(`current balance $${this.#balance}`);
  }
}

const account = new BankAccount("andi", 100);
account.deposit(50);
account.withdraw(30);
account.withdraw(200);
account.checkBalance();
