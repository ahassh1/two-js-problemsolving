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
console.log(isElevatorSafe([120,200]));
