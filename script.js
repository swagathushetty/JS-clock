const secondHand=document.querySelector('.second-hand')
const minuteHand=document.querySelector('.min-hand')
const hourHand=document.querySelector('.hour-hand')

function setDate(){
    const now=new Date();
    const seconds=now.getSeconds()
    const minutes=now.getMinutes()
    const hours=now.getHours()

    const secondDegrees=((seconds/60)*360)+90
    secondHand.style.transform=`rotate(${secondDegrees}deg)`
   

    const minuteDegree = ((minutes /60 ) * 360) + 90
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`
    
    const hourDegree = ((hours / 60) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegree}deg)`

}

setInterval(setDate,1000)