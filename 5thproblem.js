function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length ===0) {
        return "Invalid";
   }
let total = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i] !=="number"){
            return "Invalid";
        }
        total += times[i];
    }
    let totalAvgNum= Math.floor(total / times.length)
   return totalAvgNum;
}
 let totalAvgNum = averageResponseTime([])
 console.log(totalAvgNum)