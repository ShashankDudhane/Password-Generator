let inputBox = document.querySelector("#input-box");
let copyIcon = document.querySelector("#copy-icon");
let slider = document.querySelector("#slider");
let pass_length_val = document.querySelector(".pass-length-val");
let lowercase = document.querySelector("#lowercase-checkbox");
let uppercase = document.querySelector("#uppercase-checkbox");
let numbers = document.querySelector("#number-checkbox");
let symbols = document.querySelector("#symbol-checkbox");
let genPassBtn = document.querySelector(".gen-pass-btn");

pass_length_val.innerHTML = slider.value;
slider.addEventListener('input',()=>{
     pass_length_val.innerHTML = slider.value;
})

let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "@#&_!$";

genPassBtn.addEventListener('click',()=>{
    inputBox.value = genPass();
      
})

function genPass(){
    let password = "";
    let allChars ="";

    allChars += lowercase.checked ? lowerChar : "";
    allChars += uppercase.checked ? upperChar : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars.length==0 )
        {
            return password;
        }

    let i =0;
    while(i<=pass_length_val.innerHTML)
        {
            password += allChars.charAt(Math.floor(Math.random()*allChars.length));
            i++;
        }

    return password;
}

copyIcon.addEventListener("click",()=>{
    if(inputBox.value!=" " || inputBox.value>=1)
        {
            navigator.clipboard.writeText(inputBox.value);
            copyIcon.innerHTML = "check";
            copyIcon.title = "Password Copied";

            setTimeout(()=>{
                copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
            },3000)
        }
})