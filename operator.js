




window.addEventListener('load', function () {
    let numberafter =document.getElementById(`numbernow`)
    let calcu =document.getElementById(`calcu`)

    let numberbef = document.getElementById(`numberbef`)
let out = document.getElementById(`out`)
let prices = document.getElementById(`prices`)

cal.addEventListener(`submit`,() =>{
    event.preventDefault();
    let no = event.target.numbernow.value
    let bef =event.target.numberbef.value
let u = Math.abs(no-bef) 


    let y=calculate(no,bef)

    addtopage(y,u)
  
})
})













function calculate(now,before) {
      let totalcons = Math.abs(now - before);
    
      first = 0
      second = 0
      third = 0
      forth = 0
      five = 0
      six = 0
      seven = 0
      final=0
      if(totalcons>=1000){
          first=160
          second=140
          third=200
          forth=100
          five=150
          six=250
          final=totalcons-(first+second+third+forth+five+six)
          totalcons=0
          return (first*33+second*72+third*86+forth*114+five*158+six*188+final*265)/1000
      }
   
      if(totalcons>=750){
          first=160
          second=140
          third=200
          forth=100
          five=150
          six=totalcons-(first+second+third+forth+five)
          totalcons=0
          return (first*33+second*72+third*86+forth*114+five*158+six*188)/1000
  
      }
      if(totalcons>=601){
          first=160
          second=140
          third=200
          forth=100
          five=totalcons-(first+second+third+forth)
          totalcons=0
          return (first*33+second*72+third*86+forth*114+five*158)/1000
  
      }
      if(totalcons>=501){
          first=160
          second=140
          third=200
          forth=totalcons-(first+second+third)
          totalcons=0
          return (first*33+second*72+third*86+forth*114)/1000
  
      }
      if(totalcons>=301){
          first=160
          second=140
          third=totalcons-(first+second)
          totalcons=0
          return (first*33+second*72+third*86)/1000
  
      }
      if(totalcons>=161){
          first=160
          second=totalcons-(first)
          totalcons=0 
          return (first*33+second*72)/1000
  
      }
      if(totalcons<=161){
          first=totalcons 
          totalcons=0
          return (first*33)/1000
  
      }
  return 0
  }



    // if (totalcons >= 1 && totalcons < 160 && first != 0) {
    //     first = totalcons
    //     totalcons -= first
    // } else if (totalcons >= 1 && totalcons >= 160 && first != 0) {
    //     first = 160
    //     totalcons -= first
    // }
    // // -----------------------------------300
    // if (totalcons >= 161 && totalcons < 140 && second != 0) {
    //     second = totalcons
    //     totalcons -= second
    // } else if (totalcons >= 301 && totalcons >= 160 && first != 0) {
    //     first = 160
    //     totalcons -= first
    // }
    // // -----------------------------------------------500
    // if (totalcons >= 1 && totalcons < 160 && first != 0) {
    //     first = totalcons
    //     totalcons -= first
    // } else if (totalcons >= 1 && totalcons >= 160 && first != 0) {
    //     first = 160
    //     totalcons -= first
    // } 
    // // -----------------------------------------------600

    // if (totalcons >= 1 && totalcons < 160 && first != 0) {
    //     first = totalcons
    //     totalcons -= first
    // } else if (totalcons >= 1 && totalcons >= 160 && first != 0) {
    //     first = 160
    //     totalcons -= first
    // }
    // // -----------------------------------------------750
    
    //  if (totalcons >= 1 && totalcons < 160 && first != 0) {
    //     first = totalcons
    //     totalcons -= first
    // } else if (totalcons >= 1 && totalcons >= 160 && first != 0) {
    //     first = 160
    //     totalcons -= first
    // } 
    // // -----------------------------------------------1000

    // if (totalcons >= 1 && totalcons < 160 && first != 0) {
    //     first = totalcons
    //     totalcons -= first
    // } else if (totalcons >= 1 && totalcons >= 160 && first != 0) {
    //     first = 160
    //     totalcons -= first
    // }
    // // ----------------------------------------------->1000
    
    // if (totalcons >= 1 && totalcons < 160 && first != 0) {
    //     first = totalcons
    //     totalcons -= first
    // } else if (totalcons >= 1 && totalcons >= 160 && first != 0) {
    //     first = 160
    //     totalcons -= first
    // }

 function addtopage(price,con){
console.log(price);
out.disabled=false
prices.disabled=false


   out.value = `${con} "KWH"`
   prices.value = `${price} JD`
}