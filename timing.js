let outer=document.querySelector('.current-time')
let hour1=document.createElement('div')
hour1.classList.add('hour')
hour1.innerHTML=`hour: ${(new Date().getHours())-12}`
outer.append(hour1)

let min1=document.createElement('div')
min1.classList.add('min')
min1.innerHTML=`<span>min:</span> ${new Date().getMinutes()}`

outer.append(min1)

let sec1=document.createElement('div')
sec1.classList.add('sec')
sec1.innerHTML=`sec: ${new Date().getSeconds()}`
outer.append(sec1)

// let msec1=document.createElement('div')
// msec1.classList.add('msec')
// msec1.innerHTML=`millisec: ${new Date().getMilliseconds()}`
// outer.append(msec1)

setInterval(()=>{
    sec1.innerHTML=`sec: ${new Date().getSeconds()}`
    min1.innerHTML=`min: ${new Date().getMinutes()}`
    if(new Date().getHours()>12){
    hour1.innerHTML=`hour: ${(new Date().getHours())-12}`}
    else{
        hour1.innerHTML=`hour: ${new Date().getHours()}`
    }
    
},1000)

// setInterval(()=>{
//     msec1.innerHTML=`millisec: ${new Date().getMilliseconds()}`
// },1)