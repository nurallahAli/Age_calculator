let age = prompt("Give Me Your Age");
window.onload = function(){
    document.querySelector("body").style.direction = "rtl";
    document.getElementById("container").style.paddingLeft = "15px";
    document.getElementById("container").style.paddingRight = "15px";
    document.getElementById("container").style.marginLeft = "auto";
    document.getElementById("container").style.marginRight = "auto";
    document.getElementById("container").style.textAlign = "center";
    document.querySelector("button").style.backgroundColor = "#0100DA";
    document.querySelector("button").style.color = "#fff";
    document.querySelector("button").style.padding = "15px 143px";
    document.querySelector("button").style.border = "none";
    document.querySelector("button").style.fontSize = "20px";
    document.getElementById("child").style.backgroundColor = "#f46016";
    document.getElementById("child").style.color = "#fff";
    document.getElementById("child").style.width = "fit-content";
    document.getElementById("child").style.margin = "auto";
    document.getElementById("child").style.padding = "15px 108px";
    document.getElementById("child").style.fontSize = "20px";
    document.querySelector("p").style.margin = "0";
    document.getElementsByTagName('table')[0].style.margin = "auto";
    document.getElementsByTagName('table')[0].style.border = "1px solid #ccc";
    for(let i = 0; i < document.getElementsByClassName('row').length; i++){
        document.getElementsByClassName('row')[i].style.width = "200px";
        document.getElementsByClassName('row')[i].style.backgroundColor = "white";
        document.getElementsByClassName('row')[i].style.borderBottom = "1px solid black";
    }
    for(let j = 0; j < document.getElementsByClassName('td').length; j++){
   document.getElementsByClassName('td')[j].style.padding = "22px";
   document.getElementsByClassName('td')[j].style.backgroundColor = "#e5e5e5";
   document.getElementsByClassName('td')[j].style.borderLeft = "1px solid black";
   document.getElementsByClassName('td')[j].style.borderBottom = "1px solid black";
    }
    }
    function Rest(){
        
  let years = +age;
  let months = years * 12;
  let weeks = months * 4;
  let days = weeks * 7;
  let hours = days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;
        document.getElementsByClassName("row")[0].innerHTML = years;
        document.getElementsByClassName("row")[1].innerHTML = months;
        document.getElementsByClassName("row")[2].innerHTML = weeks;
        document.getElementsByClassName("row")[3].innerHTML = hours;
        document.getElementsByClassName("row")[4].innerHTML = minutes;
        document.getElementsByClassName("row")[5].innerHTML = seconds;
      
    }
