var languages = ["JS", "C++", "C#", 123, undefined, function(){}, null];
var a = 3;
console.log('languages', languages.unshift("vn"))
console.log('languages', languages)

var lastName = "DANG";
var firstName = "SON";
console.log('name: ', `${"Tôi tên: " + firstName}` )
console.log(lastName.indexOf("G"))

var getLength = function(chuoi){
    return chuoi.length;
}

console.log('Độ dài chuỗi là: ', getLength('Hello Word') )

var upper = function(strUpper) {
    return strUpper.toUpperCase();
}

console.log('Chuyển đổi chữ: ', upper('hello') )

var checkNumber = function(num){
    if(typeof num == "number")
        console.log("Đây là số")
    else
    console.log("Đây không phải là số")

}

checkNumber(89/"23")

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false

var chuyenArr = function(arr, kyTu) {
    return arr.join(kyTu)
}

var car = ["xeA", "xeB", "xeC"]

console.log(chuyenArr(car, '===='))

const getLastElement = (f8) => f8.slice(0,1) // Viết hàm tại đây
// const getLastElement = (f8) => f8.pop() // Viết hàm tại đây

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

var User = function (name, age, email, phone){
    this.name = name; 
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.getName = function(){
        return `Tôi là  ${this.name}`
    }
}

var user1 = new User("nguyenA", 12, "nguyenA", "0123123")
var user2 = new User("nguyenB", 13, "nguyenB", "00090909")

user1.address = "21312 str"

console.log('user1', user1.getName())
console.log('user2', user2)



let Student = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

var date = new Date()
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

console.log('hôm nay là ngày: ', `${day}/${month}/${year}` )

var random = Math.floor(Math.random() * 100)
console.log(random)
if(random <= 5){
    console.log("Cường hóa thành công")
}
else{
    console.log("Cường hóa thất bại") 
}

let getRandomItem = function(arr){
    let randomArr = Math.floor(Math.random() * arr.length)
    return arr[randomArr]
}
let schoolName = ["A", "B", "C", "D"]
console.log("Trường ",getRandomItem(schoolName) + " thắng")

let readKey = function(key){
    switch(key){
        case "a":
            console.log("Apple");
            break;
        case "s":
            console.log("Samsung");
            break;
        case "n":
            console.log("Nokia"); 
            break;   
        default:
            console.log("Dont know")
    }
}

readKey("n")

var a = 1, b = 2;
var c = a > b ? console.log(b) : console.log(a)


// let getRandNumbers = function(min, max, length){
//     var arr = [];

//     for(var i = 0; i < length; i++){
//        arr.push(Math.floor(Math.random() * (max - min) + min))
//     }
//     return arr
// }

// console.log(getRandNumbers(1, 10, 6))

// function getTotal(arr) {
//     var total = 0;
//     for(var i = 0; i<arr.length; i++){
//         total += arr[i]
//     }
//     return total;
// }

// console.log(getTotal([4, 5, 3, 5]))

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
let getTotal = function(orders){
    let total = 0;
    let ordersLength = orders.length;
    for(var i = 0; i < ordersLength; i++){
        total += orders[i].price;
    }
    return total;
}


// Expected results:
console.log(getTotal(orders)) // Output: 8700000

var person = {
    name: "Kha",
    age: 23,
    phone: "0900909099"
}

var personArr = ["Kha", 23, "09090909"]

// for(var key in person){
//     console.log(key + ":" + person[key])
// }

// for(var key of personArr){
//     console.log(key)
// }

var x = 0;
while(x < personArr.length){
    console.log(personArr[x]);
    x++;
}

// var i = 0;
// var isSuccess = false;
// do{
//     i++;
//     console.log("Nạp thẻ lần: " + i)

//     if(true){
//         isSuccess = true
//     }
// }while(!isSuccess && i <= 3);

// for(;i < 10; i++){

//     if(i%2 !== 0){
//         continue;
//     }

//     console.log(i)

// }

var arrNumber = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for(var i = 0; i < arrNumber.length; i++){
    for(var j = 0; j < arrNumber[i].length; j++){
        console.log(arrNumber[i][j])
    }
}

var courses = [
    {
        id: 1, 
        name: "HTML, CSS",
        coin: 0
    },
    {
        id: 2, 
        name: "JS",
        coin: 100
    },
    {
        id: 3, 
        name: "React",
        coin: 200
    },
    {
        id: 4, 
        name: "NodeJS",
        coin: 300
    },
    {
        id: 5, 
        name: "Ruby",
        coin: 400
    },
    {
        id: 6, 
        name: "Ruby",
        coin: 600
    },
]

courses.forEach((course, index) => {
    console.log("forEach",index, course)
})

var isFree = courses.every((course, index) => {
    console.log(index)
    return course.coin === 0;
})

console.log(isFree)

var isFind = courses.find((course, index) => {
    return course.name === "React";
})

console.log(isFind)

var isFilter = courses.filter((course, index) => {
    return course.name == "Ruby";
})
console.log(isFilter)

var isMap = courses.map((course, key) => {
    return {
        id: course.id, 
        name: course.name,
        coin: course.coin,
        coinText: `Gía: ${course.coin}`,
        originArray: course
    }
})

console.log(isMap)