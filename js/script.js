'use strict';


const coffeeBeans = document.querySelectorAll('.couponCard_circle-img'),
      wrapper = document.querySelectorAll('.couponCard_block'),
      present = document.querySelector('.couponCard_circle-present');






    let filledCoupon;

    coffeeBeans.forEach((coffeeBean) =>{
        filledCoupon = coffeeBean.style.display;
    });

    console.log(filledCoupon);
  





  function hideCoffeeBeans(arr){
      arr.forEach((coffeeBean) =>{
          coffeeBean.style.display = 'none';
      });
  }

  hideCoffeeBeans(coffeeBeans);


  function showCoffeeBeans(arr){
    arr.forEach((coffeeLine) =>{
        coffeeLine.addEventListener('click', (event) =>{

            if(event.target){
                let password = '7777';
                let checkingPassword = prompt('Барбариска, введите, пожалуйста, пароль <3', '');
        
                if(checkingPassword === password){
                    event.target.firstChild.style.display = 'block';
                }else{
                    alert('Упс...Пароль не верный и это подозрительно -_-');
                }
            }
        
        });
    });
  }
  showCoffeeBeans(wrapper);
