function Car(props) {
    const {make, model, year, speed} = props;
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = speed;
    Object.defineProperty(this, 'age', {
        get() {
            return this.year;
        },
        set(newAge) {
            if (newAge < new Date().getFullYear()) {
                this.year = newAge;
            }
        }
    });
    Object.defineProperty(this, 'currentSpeed', {
        get() {
            return this.speed;
        },
        set(newSpeed) {
            if (newSpeed > 0) {
                this.speed = newSpeed;
            }
        }
    });
    this.accelerate = function (value) {
        if (value > 0) {
            this.speed += value;
        }
    }
    this.brake = function (value) {
        if (value > 0) {
            this.speed -= value;
        }
    }
}

const myCar = new Car({make: 'Toyota', model: 'Camry', year: 2018, speed: 120});
console.log(`Сar is ${myCar.age} years old.`);

myCar.age = 2024;
console.log(`Сar is ${myCar.age} years old.`);

myCar.accelerate(20);
console.log(`${myCar.currentSpeed} km/h.`);
myCar.brake(10);
console.log(`${myCar.currentSpeed} km/h.`);