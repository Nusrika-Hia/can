// console.log("Hi! I'm From IIT.");
// document.write("Hi From Jahangirnagar.");
// alert("Hi!From Rangpur");
//var age=6;
// let age1 =6;
// var age=100.2345;
// var floatNumber=5.34578
//age1=age1.toString();
//document.write(age1);
// 
// var firstNum=prompt("Enter first Number");
// var secondNum=prompt("Enter second Number");
// document.write(Number(firstNum)+Number(secondNum));
// var studentFirstName = prompt("Enter your first Name");
//  var studentLastName = prompt("Enter your last Name");
//  document.write(studentFirstName +" " + studentLastName);
//  document.write("Slice of Last Name:  " + studentLastName.slice(2,3) + "<br/>");

//  document.writeln(
//    "String Concatenation:   " +
//      studentFirstName.concat(" " + studentLastName) +
//           "<br/>"
 //);
//  let a = 10;
// let b = 20;
// document.write(a+b);
// var firstNumber = 100;
//  var secondNumber = 50;
//  console.log(firstNumber>secondNumber);
// var digit=prompt("Enter number:");
// if(digit<=100)
// {
//     document.write("less than 100.");
// }
// for(var i = 0; i<=10; i++)
// {
//     if(i==7)
//     break;
//     document.write(i+"<br/>");


// }
// var num1=200;
// var num2=300;
// (function add(num1,num2)
// {
//     document.write (Number(num1)+Number(num2));
// })(20,5);
// var names = ["John", "David", "Shaun", "Tom"];
//  document.write(names+"<br>");

//  document.write(names[0] + "<br>");
//  document.write(names[1] + "<br>");
//  document.write(names[2] + "<br>");
//  document.write(names[3] + "<br>");

//  for(var i = 0 ; i<names.length; i++)
//      document.write(names[i] + "<br>");
//  for(var i = 0 ; i<names.length; i++)
//     document.write("<h1 style='color:red'>" + names[i] + "</h1>");

//  for(var i = 0 ; i<names.length; i++)
//     document.write("<h1 style='background:red; color:black'>" + names[i] + "</h1>");
// var myList = new Array(5);
//  for(var i = 0 ; i < myList.length; i++){
//     myList[i] = prompt("Enter" + i +  " index number") }
//     for(var i = 0 ; i<myList.length; i++)
//        document.write(myList[i] + "<br>");
    //    var names;
    //    for(var i = 0; i<3; i++)
    //     document.write(names[i] + "<br/>");
       
       
    //    pop (removes from last)
    //     names.pop();
    //    console.log(names);

    // Math.sqrt(17);
    // Math.abs(-19);
//     var date = new Date();
// console.log("Date:  "+ date);

//     var year =  date.getFullYear();
//     console.log("Year: " + year);
//     var month = date.getMonth();
// console.log("Month: " + month);

// var currentDate = date.getDate();
// console.log("Current Date: " + currentDate);

// var currentDay = date.getDay();
// console.log("Current Day: " + currentDay); // 0 - Sunday,....., 6 - Saturday

// var currentHour = date.getHours();
// console.log(currentHour);
// var mydate = new Date("2015-03-25");
class Customer{
    constructor(customerId, customerName, profession, items){
        this.customerId = customerId;
        this.customerName = customerName;
        this.profession = profession;
        this.items = items;
    }
    show(){   
        document.write("This is Customer Id: " + customerId +"<br>" + "Customer Name: " 
        + customerName +"<br>" + "Profession: " + profession + "<br>" + "and I bought the items: ");
        for(var i = 0; i< items.length; i++){
            document.write(items[i] + " ");
        }
    }
}
let customerId = parseInt(prompt("Enter your Customer Id"));
let customerName = prompt("Enter your Customer Name");
let profession = prompt("Enter your profession");
let items =  new Array(2);
for(let i = 0; i < items.length; i++){
    items[i] = prompt("Enter" + i + " item's name");
}
 let customer1 = new Customer(customerId, customerName, profession, items);
    customer1.show();









