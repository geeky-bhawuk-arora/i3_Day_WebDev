// alert("Hello");

// let a = prompt("Enter your Name");
// let b = confirm("Are you atleast 18 years old !");

// if(a==="" && b==true)
// {
//     alert("Invalid Details !");
// }

// let a = prompt("Which container you want to manipulate ?");

// let b = document.getElementsByClassName("card");
// console.log(b.length);

// // let c = prompt("Which colour you want ?")

// // b[a-1].style.backgroundColor=c;
// b[a-1].innerHTML="Hello Bhawuk !"

let a = ["https://1.bp.blogspot.com/-yqFZYwQ3y7g/UUQ3PSvHZWI/AAAAAAAAEdU/jBm22IsslTM/s1600/doremon+doraemon+wallpaper.jpg","https://wallpapercave.com/wp/wp4927829.png"]

// let b = document.getElementsByTagName("img");
let b = document.getElementById("abc");
// console.log(b);
let i = 0;
function change()
{
    
    b.src=a[i];
    i++;
}
