class Car {
    constructor(brand, model, year, isAvailable){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }

    rentCar(){
        if(this.isAvailable){
            this.isAvailable = false;
            console.log(`${this.brand}, ${this.model}, berhasil di sewa`)
        }else{
            console.log(`${this.brand} ${this.model} sedang tidak tersedia.`)
        }
    }

    returnCar(){
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`${this.brand} ${this.model} berhasil dikembalikan.`);
        } else {
            console.log(`${this.brand} ${this.model} memang sudah tersedia.`);
        }
    }
}

const cek = new Car("Toyota", "Avanza", 2020, true)
cek.rentCar()
cek.returnCar()