var john = {
  bills: [124, 48, 268, 180, 42],
  calcTips: function(){
    this.tips = []
    this.finalBills = []
    for(let i = 0; i < this.bills.length; i++){
      let percentage
      let bill = this.bills[i]
      switch(true) {
        case bill < 50:
          percentage = .2
          break
        case bill >= 50 && bill < 200:
        percentage = .15
          break
        default:
        percentage = .1
      }
      this.tips[i] = bill * percentage
      this.finalBills[i] = bill + bill * percentage
    }
  }
}

var mark = {
  bills: [77, 375, 110, 45],
  calcTips: function(){
    this.tips = []
    this.finalBills = []
    for(let i = 0; i < this.bills.length; i++){
      let percentage
      let bill = this.bills[i]
      switch(true) {
        case this.bills[i] < 100:
          percentage = .2
          break
        case this.bills[i] >= 100 && this.bills[i] < 300:
          percentage = .1
          break
        default:
          percentage = .25
      }
      this.tips[i] = bill * percentage
      this.finalBills[i] = bill + bill * percentage
    }
  }
}

john.calcTips()
mark.calcTips()

function avgTip(arr){
  let tipSum = 0
  for(let i = 0; i < arr.length; i++){
    return tipSum + arr[i]
  }
  return tipsum / arr.length
}

john.average = avgTip(john.tips)
mark.average = avgTip(mark.tips)

if(john.average > mark.average){
  console.log(`John's Family paid the highest average tips.`)
 }else if (mark.average > john.average){
   console.log(`Marks's Family paid the highest average tips.`)
 }else {
  console.log('Both families tipped equally.')
 }