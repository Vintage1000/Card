const pages = document.getElementById('pages');

const loginPage = document.getElementById('login');
const password = document.getElementById('password');
const button = document.getElementById('submit');
const warning = document.getElementById('warning');


const holders = [
  "I said your person", "Think again", "Your FAVORITE person", "Don't act smart you know who it is", "Maybe a best friend will help",
  "I said your person", "Think again", "Your FAVORITE person", "Don't act smart you know who it is", "Maybe a best friend will help",
  "I said your person", "Think again", "Your FAVORITE person", "Don't act smart you know who it is", "Maybe a best friend will help"]

const arrayLength = holders.length;
var i = 0;

function showUp() {
  if (password.value == "abid abdul bari") {
    loginPage.classList.remove('login');
    loginPage.classList.add('disappear');
    
    pages.classList.remove('pages');
    pages.classList.add('showup');
  }
  
  else if (password.value == "") {
    /*password.placeholder = 'There should be someone';*/
    warning.innerHTML = '** There should be someone **';
    
    warning.style.backgroundColor = 'black';
    warning.style.color = 'red';
  }
  
  else{
    password.value = "";
    /*password.placeholder = holders[i];*/
    warning.innerHTML = holders[i];
    
    i = i + 1;
  }
};
