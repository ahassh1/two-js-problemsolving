function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
        return "Invalid";
    }
    if(teamAGoals>teamBGoals){
        return "Team A Won" ;
    } 
    else if(teamBGoals>teamAGoals){
        return "Team B Won";
    }
    else{
         return "Draw";
    }
}



function isElevatorSafe(weights) {
    if(!Array.isArray(weights)){
        return  "Invalid";
    }
    let totalWeights = 0;
     for(const weight of weights){
        totalWeights += weight;
    }
               if(totalWeights <= 400){
            return true;
        }
        else{
            return false;
        }
  
}



 function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed !== "number" || tokensUsed < 0){
        return "Invalid";
    }
    const freetoken = 500;
    if(freetoken >= tokensUsed){
        return 0;
    }
    let extratoken = (tokensUsed - freetoken);
    let totalExtraToken = Math.floor(extratoken/100)*5
    return totalExtraToken;
}


function topRatedRestaurant(restaurants) {
     if(!Array.isArray(restaurants) || restaurants.length ===0 ){
          return  "Invalid" 
     }
     let maxRatingRestaurant = restaurants[0];
     for(let i = 1; i< restaurants.length; i++){
         if(restaurants[i].rating> maxRatingRestaurant.rating){
          maxRatingRestaurant= restaurants[i];
         }
     }
     return maxRatingRestaurant.name.toUpperCase();
}



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