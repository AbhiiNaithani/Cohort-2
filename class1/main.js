// console.log("hello world");  // hello world

// console.log(a);       // ReferenceError: a is not defined

let firstName1 = "Abhishek";
let lastName1 = "Naithani";
let gender1 = "Male";

let firstName2 = "Dream";
let lastName2 = "Girl";
let gender2 = "Female";

// program to greet people based on their first name and last name
console.log(`hello ${firstName1} ${lastName1}`);
console.log(`hello ${firstName2} ${lastName2}`);

// program to greet people based on their gender
gender1 === "Male" ? console.log(`hello sir ${firstName1} ${lastName1}`) : console.log(`hello madam ${firstName1} ${lastName1}`);
gender2 === "Male" ? console.log(`hello sir ${firstName2} ${lastName2}`) : console.log(`hello madam ${firstName2} ${lastName2}`);


// program that counts from 0 to 100
let ans = 0;

for(let i=0;i<=100;i++) ans += i;

console.log("sum :");
console.log(ans);

//program that prints all even numbers from the array

let arr1 = [1,2,3,4,5,6];
console.log("even elements:");
for(let i=0;i<arr1.length;i++){
    if(arr1[i] % 2 === 0){
        console.log(arr1[i]);
    }
}

// program that prints biggest number in the array

let arr2 = [1,2,3,4,5,6];

let max = arr2[0];
console.log("maximum element:");
for(let i=0;i<arr2.length;i++){
    if(arr2[i] > max){
        max = arr2[i];
    }
}
console.log(max);

// program that prints male person's first name from a list of objects

let arr3 = [
    {
        firstName: "Abhishek",
        lastName: "Naithani",
        gender: "Male"
    },
    {
        firstName: "Dream",
        lastName: "Girl",
        gender: "Female"
    }
    ,{
        firstName: "Abhishek2",
        lastName: "Naithani2",
        gender: "Male"
    },
    {
        firstName: "Dream2",
        lastName: "Girl2",
        gender: "Female"
    }
];
console.log("Male persons :");
for(let i=0;i<arr3.length;i++){
    if(arr3[i].gender == "Male") console.log(arr3[i].firstName);
}

// program that reverse all the elements from the array

let arr4 = [1,2,3,4,5,6];
let i = 0;
let j = arr4.length -1;

while(i < j){
    let temp = arr4[i];
    arr4[i] = arr4[j];
    arr4[j] = temp;
    i++;
    j--;
}
console.log("reversed elements:");

arr4.forEach(element => console.log(element));

// console.log("checking setTimeout :");

// setTimeout(() => console.log("under setTimeout"), 3*1000);

console.log("counter 30 to 0 :");
let counter = 30;

    setInterval(() => console.log(counter--), 1000);


