

function num1(){

//     let user= prompt("select 1 or 2");
   



// if(user%2==0){ 
    
    
//     const even =prompt("even");


//     for (let i = 0; i <= even; i++) {
      
//         console.log(i%2==0 ,i) ;
//       }

// }



// else{     const odd =prompt("odd");}




let choice = prompt("What do you want to print: even or odd?");




if (choice.toLowerCase() === "even") {
    let evenCount = prompt("How many even numbers do you want to print?");
    
    for (let i = 2; i <= evenCount; i += 2) {
        console.log(i);
    }
    



} else if (choice.toLowerCase() === "odd") {
    let oddCount = prompt("How many odd numbers do you want to print?");
    for (let i = 1; i <= oddCount; i += 2) {
        console.log(i);
    }
    
    



} else {
    alert("Invalid choice! Please choose either even or odd.");

}}








function num2(){


   
        let num1 = prompt("Enter the first number:");
        let num2 = prompt("Enter the second number:");
    
        if (isNaN(num1) || isNaN(num2)) {
            alert("Please enter valid numbers");
        } else {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
    
            if (num2 === 0) {
                alert("Division is not possible due to infinite value");
            } else {
                let result = num1 / num2;
                alert("The result of the division is: " + result);
            }
        }
    }
    


