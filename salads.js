let mainContent = document.querySelector(".main");

class Salads{
    constructor(foodName , price , decription){
        this.foodName = foodName; 
        this.price = price;
        this.decription = decription;
    }
    getFoodName(){
        return this.foodName;
    }
    getPrice(){
        return this.price;
    }
    getDecription(){
        return this.decription;
    }

}




let sandwichesArray = [
    ["სენდვიჩი ლორით და ყველით ", "7 ლარი" , " პური , ლორი , ყველი"], [" კრუასანი ლორით და ყველით" , "6 ლარი ", "პური, ყველი , ლორი"],
    ["სენდვიჩი ლორით და ყველით ", "7 ლარი" , " პური , ლორი , ყველი"], ["სენდვიჩი ლორით და ყველით ", "7 ლარი" , " პური , ლორი , ყველი"],
    ["სენდვიჩი ლორით და ყველით ", "7 ლარი" , " პური , ლორი , ყველი"],
    ["სენდვიჩი ლორით და ყველით ", "7 ლარი" , " პური , ლორი , ყველი"],
    ["სენდვიჩი ლორით და ყველით ", "7 ლარი" , " პური , ლორი , ყველი"],
    ["სენდვიჩი ლორით და ყველით ", "7 ლარი" , " პური , ლორი , ყველი"],
];



for(let i = 0; i <sandwichesArray.length; i++){
    let addingFood = new Salads(sandwichesArray[i][0], sandwichesArray[i][1], sandwichesArray[i][2])
    mainContent.innerHTML += `
    <div class="card mb-3 foodCards" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="sandwich.jpeg" class="img-fluid foodImg" alt="sandwich">
      </div>
      <div class="col-md-8 cardText">
        <div class="textCard">
            <div class="leftSideTextCard">
                <h5 class="card-title">${addingFood.getFoodName()}</h5>
                <p class="card-text"><small class="text-muted"> Price: ${addingFood.getPrice()}</small></p>
            </div>
            <div class="rightSideTextCard">
                <p class="card-text">${addingFood.getDecription()}</p>

            </div>

          
        </div>
      </div>
    </div>
  </div>

`;
}