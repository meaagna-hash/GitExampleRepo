let studentName="Anjana";
console.log(studentName);
//Store and print age
let age=42;
console.log(age);
//store name and age 
let name="Anju";
let age1=34;
console.log(name,age1)
let country="India";
console.log(country);
let employeeName="Abc";
console.log(employeeName);
console.log(typeof(employeeName));
let marks=25;
console.log(typeof(marks))
let age2=56
age2=28
console.log(age2)
//store boolean value
let isStudent=true
console.log(typeof(isStudent))
let collegeName="LMC"
console.log(collegeName)
let price=100
let qty=3
let total=price*qty
console.log(total)
let isActive=true
console.log(isActive)
let price1=99.50
console.log(typeof(price1))
//null
let result=null
console.log(result)
console.log(typeof(result))
let city=undefined
console.log(typeof(city))
let id=Symbol("id")
console.log(typeof(id))
let phoneNumber;
console.log(phoneNumber)
console.log(typeof(phoneNumber))
console.log("___________________")
console.log("Day2")
let employee={
    name:"Alice",
    age:28,
    department:"Testing"
}
console.log(employee.name)
console.log(employee.age)
console.log(employee.department)
console.log("________________")
let today=new Date()
console.log(today)
console.log(today.getFullYear())
console.log(today.getDate())
console.log(today.toLocaleDateString("en-US", { weekday: "long" }));
console.log("________________")
let pattern=/javascript/;
console.log(pattern.test("I am learning javascript"))
console.log("________________")
console.log("________________")
let numbers=new Set([10,20,30,30,40,20,50])
console.log(numbers)
console.log("________________")
console.log("________________")
let student=new Map()
student.set("name","John")
student.set("age","34")
console.log(student.get("name"))
console.log(student.get("age"))
console.log("________________")
let a=10;b=3;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
console.log("________________")
let x=10;
console.log(x+=5)
console.log(x-=5)
console.log(x*=5)
console.log(x/=5)
console.log(x%=5)
console.log("________________")
let y=20,z=10
console.log(y>z)
console.log(y<z)
console.log(y==z)
console.log(y!=z)
console.log("________________")
let age3=25
let hasLicense=true
console.log(age3,hasLicense)
console.log(age3>18&&hasLicense)
console.log(age3<18||age>60)
console.log(!hasLicense)
console.log("________________")
let students=30;
//students++
//console.log(students++)
students--
console.log(students--)
console.log("________________")
let firstName="Anjana"
let secondName="Balan"
console.log(firstName+" "+secondName)