// let john = {
//     name: 'John',
//     birthYear: 1990,
//     job: 'Developer'
// }


// let Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// // Resultado del constructor

// let john = new Person('John', 1990, 'Developer');
// let mark = new Person('Mark', 1980, 'Teacher');
// let jane = new Person('Jane', 1998, 'Designer');
// console.log(john)
// console.log(mark)
// console.log(jane)

// let Vector = function(x, y) {
//     this.x = x;
//     this.y = y;
// }

// let Vec1 = new Vector(1, 1);
// let Vec2 = new Vector(2, 3);

// Vector.prototype.plus = function(other) {
//     return new Vector(this.x + other.x, this.y + other.y)
// }

// console.log(Vec1)
// console.log(Vec2)

// Vector.prototype.minus = function(other) {
//     return new Vector(this.x - other.x, this.y - other.y)
// }

// Vector.prototype.length = function(other) {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
// }

// console.log(Vec1.plus(Vec2))
// console.log(Vec1.minus(Vec2))
// console.log(Vec1.length())

// let Person = function(name) {
//     this.name = name;
// }

// // let john = new Person('john')

// let Developer = function(name, skills, yearsOfExperience) {
//     Person.call(this, name)

//     this.skills = skills;
//     this.yearsOfExperience = yearsOfExperience;
// }

// let john = new Developer('John', 'JAvascript', 5);

// console.log(john)

// let Group = function() {
//     this.members = [];
// }

// Group.prototype.has = function(value) {
//     return this.members.includes(value);
// }

// Group.prototype.add = function(value) {
//     if (!this.has(value)) {
//         this.members.push(value); // members: [10]
//     }
// }

// Group.from = function(lista) {
//     let group = new Group();

//     for(let i = 0; i < lista.length; i++) {
//         group.add(lista[i])
//     }

//     return group;
// }


// // let group = new Group() // =>>> group = {members: []}
// // console.log(group)

// let group = Group.from([1, 2, 3, 4, 5]);
// console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
// console.log('tiene 5', group.has(5)); // false
// console.log('tiene 10 ', group.has(10)); // false

// group.add(10);
// console.log('aagrega 10 ', group.has(10)); // true
// console.log('group', group); // [10]

let Person = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    let today = new Date();
    let year = today.getFullYear();

    return (year - this.birthYear)

}

// let john = new Person('John', 1990, 'Developer')

// console.log(john)

// console.log(john.calculateAge())

// let Triangle = function(a, b, c) {
//     this.a = a
//     this.b = b
//     this.c = c
// }

// Triangle.prototype.getPerimeter = function() {
//     return this.a + this.b + this.c;
// }

// let triangle = new Triangle(1, 2, 3);

// console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
// console.log(triangle.getPerimeter()); // 6
