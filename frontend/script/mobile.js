// ! -------------------------------------------------------------

// ? here is dropdown for login sign up {starts}

let dropUser = document.getElementById("dropUser");
let hover = document.getElementById("userIcon");


hover.addEventListener("mouseover", ()=>{
    dropUser.style.display = "block";
    
});
hover.addEventListener("mouseout", ()=>{
    dropUser.style.display = "none";
});

// ? here is dropdown for login sign up {ends}

// ! ---------------------------------------------------------------

// ? here is dropdown for Category Links {starts}

let women = document.getElementById("Women");
let drop1 = document.getElementById("drop1");
women.addEventListener("mouseover", ()=> {
    drop1.style.display = "block";
})
women.addEventListener("mouseout", ()=> {
    drop1.style.display = "none";
})
drop1.addEventListener("mouseover", ()=> {
    drop1.style.display = "block";
})
drop1.addEventListener("mouseout", ()=> {
    drop1.style.display = "none";
})

let men = document.getElementById("Men");
let drop2 = document.getElementById("drop2");
men.addEventListener("mouseover", ()=> {
    drop2.style.display = "block";
})
men.addEventListener("mouseout", ()=> {
    drop2.style.display = "none";
})
drop2.addEventListener("mouseover", ()=> {
    drop2.style.display = "block";
})
drop2.addEventListener("mouseout", ()=> {
    drop2.style.display = "none";
})

let jeans = document.getElementById("Jeans");
let drop3 = document.getElementById("drop3");
jeans.addEventListener("mouseover", ()=> {
    drop3.style.display = "block";
})
jeans.addEventListener("mouseout", ()=> {
    drop3.style.display = "none";
})
drop3.addEventListener("mouseover", ()=> {
    drop3.style.display = "block";
})
drop3.addEventListener("mouseout", ()=> {
    drop3.style.display = "none";
})

let clearance = document.getElementById("Clearance");
let drop4 = document.getElementById("drop4");
clearance.addEventListener("mouseover", ()=> {
    drop4.style.display = "block";
})
clearance.addEventListener("mouseout", ()=> {
    drop4.style.display = "none";
})
drop4.addEventListener("mouseover", ()=> {
    drop4.style.display = "block";
})
drop4.addEventListener("mouseout", ()=> {
    drop4.style.display = "none";
})

let underline = document.getElementsByClassName("underline");
let anchors = document.querySelectorAll(".underline > a")
underline[0].addEventListener("mouseover", ()=>{
    anchors.style.borderBottom = "2px solid #172749";
})
// ? here is dropdown for Category Links {ends}

// ! --------------------------------------------------------------------

//  signout functionlity

let login = JSON.parse(localStorage.getItem("login"))||null

if(login){
    let dropUser = document.getElementById("dropUser")
    dropUser.innerHTML=""

    dropUser.innerHTML=`  <a href="#">My Account</a>
                                <a href="#" id="sign">Sign Out</a>`
    dropUser.style.height="100px"
    let sign= document.getElementById("sign")
    sign.addEventListener("click",()=>{
            
        window.location.href="./index.html"
        localStorage.removeItem("login")
        setTimeout(()=>{
                dropUser.innerHTML=`
                <button class="margin register"><a href="./register.html">Register</a></button>
                <button class="signin"><a href="./signInPage.html">Sign In </a></button>
                <a href="#">Track an Order</a>
                <a href="#">Get Help</a>
                `

        },1000)
    })
}
let signout= document.getElementById("signout")
if(signout)
{
signout.addEventListener("click", signOutFunction)
}

function signOutFunction(){
    
    // localStorage.removeItem("login")
    let dropUser = document.getElementById("dropUser")
    dropUser.style.display="block"
    let signout= document.getElementById("signout")
    signout.style.display="none"

}

