const menu = document.querySelector(".menu")

let food = {
    khinkali :{
        saxeli: "xinkali",
        price: "0.50lari",
        decription:"shdshfdbjajhds",

    }
    ,
    xachapuri:{
        saxeli: "xachapuri",
        price: 0.50,
        decription:"shdshfdbjajhdssnfvkdfnsfskjd",
    }


}


menu.innerHTML = ` <div class="leftMenu">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYBgiyx6qF34cLQAkbzZ7neGiCVdtMoqbizOBsLbm&s" alt="">

</div>
<div class="rightMenu">
<div class="rightMenuTop">
    <div class="productName">${food.khinkali.price} </div>
    <div class="productPrice"></div>
</div>
<div class="rightMenuBottom">
    <div class="productDecription">
        jfkdsdbfsdjkjknfdsknsd
        adsjhsfdfdkjanjkds
        adfhjbsfhdjfshj
        ashjdajh
    </div>

</div>


</div>
`