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
let totalExtra = calculateAiCost(-12);
console.log(totalExtra)
