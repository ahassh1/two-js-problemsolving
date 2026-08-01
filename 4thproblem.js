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

 let toprating = topRatedRestaurant([{name:"Chillox",rating:4.9},{name:"Sultan's Dine",rating:4.8}, {name:"Pizza Hut",rating:4.6}])
 console.log(toprating)