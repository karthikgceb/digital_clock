
const clock = () => {

let hour=document.getElementById('hour');
let minute=document.getElementById('minute');
let second=document.getElementById('second');
let ampm=document.getElementById('ampm');

let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();

if(h > 12 ){
    h=h-12;
}

h=(h<10)?("0"+h):h;
m=(m<10)?("0"+m):m;
s=(s<10)?("0"+s):s;
ampm=(h>12)?"PM":"AM"

hour.innerHTML=h;
minute.innerHTML=m;
second.innerHTML=s;
ampm.innerHTML=ampm;


}

var interval = setInterval( clock, 1000);