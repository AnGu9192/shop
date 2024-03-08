
// navbar
let icon = document.querySelector(".icon");


// item page

let card = document.querySelectorAll(".crd");
let pageImg = document.querySelector("#itemImg");
let container = document.querySelector(".container");

let nav = document.querySelector("nav");
let itemPage = document.querySelector(".itemPage");
itemPage.style.display = "none";

console.log(pageImg);
console.log(card);

card.forEach(function (curValue) {
    curValue.addEventListener("click", function () {
        itemPage.style.display = "block";
        itemPage.style.display = "flex";

        container.style.display = "none";
        let imgSrc = curValue.firstElementChild.src;
        pageImg.src = imgSrc;

        let contentPage = document.querySelector(".content");
        let buyPage = document.querySelector(".buyPage");

        document.getElementById("buyBtn").addEventListener("click", function () {
            buyPage.style.padding = "44px";
            buyPage.style.display = "block";

            contentPage.innerHTML = `
         
        <h3>Введите данные:</h3>
            <div class="form">

        <input type="text" placeholder="Введите ваше имя" id="name"> <br>
        <input type="text" placeholder="Введите свой адрес" id="adress"> <br>
        <input type="text" placeholder="Номер моб. телефона" id="num"> <br>
      <div class="card space icon-relative">
        <input type="text"  id="cardnum"  class="input" data-mask="0000 0000 0000 0000" placeholder="Номер карты">
        <i class="far fa-credit-card"></i>
      </div>
      <div class="card-grp space">
        <div class="card-item icon-relative">
          <label class="label">Data:</label>
          <input type="text" name="expiry-data" class="input" data-mask="00 / 00"  placeholder="ММ/ГГ">
          <i class="far fa-calendar-alt"></i>
        </div>
        <div class="card-item icon-relative">
          <label class="label">CVC:</label>
          <input type="text" class="input" data-mask="000" placeholder="Код CVV">
          <i class="fas fa-lock"></i>
        </div>
      </div>    
   </div>
</div>
</div>
            `;

            let submitBtn = document.createElement("button");
            submitBtn.innerText = "купить";

            contentPage.appendChild(submitBtn);
            submitBtn.addEventListener("click", function () {
                let name = document.getElementById("name");
                let address = document.getElementById("adress");
                let num = document.getElementById("num");
                let cardnumber = document.getElementById("cardnum");

                if (name.value == "" && address.value == "" && num.value == "" && cardnumber.value == "") {
                    alert("Пожалуйста, введите данные");
                }
                
                else {
                    alert("Платеж подтверждён");
                    buyPage.style.display = "none";
                }
            });

            document.querySelector(".cross").addEventListener("click", function () {
                buyPage.style.display = "none";
            });
        });
    });
});
// connect


function connect(){
    let name = document.getElementById("name");
    let num = document.getElementById("number");
    let cnum = document.getElementById("cardnum");


    if(name.value == "" && num.value == "" && cnum.value() == ""){
        alert("Fill Detail")
    }else{
        alert("Thanks For Connecting")
    }

}

