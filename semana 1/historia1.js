let name  =  (prompt("Enter your name"));
while (name==null || name.trim ()===""){
  name = prompt("invalid imput, please try again")
}
let age = Number (prompt("Enter your age:"));
while(!Number.isInteger(age)|| age <=0 ){
   age = Number (prompt("invalid imput, please try again"))
}
let status = (age >=18)? alert("hello "+name+ " you are an adult") : alert("hello "+name+ " you are a child")

   

  