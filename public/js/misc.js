
const dish = []; 

const foodObj = (food, price) => {
     dish.push({food, price});
}

foodObj(food, price)

for (let i = 0; i < dish.length; i++){
     alert(dish[i].food);	        
}

for (let quitbtn of quitbtns){
          quitbtn.addEventListener('click', function(){
               if (tbody.children.length === 0){
                    alert("There's not item in order");
               } else {

                    const food = quitbtn.parentNode
                                        .previousElementSibling
                                        .previousElementSibling
                                        .previousElementSibling
                 
                    alert(food);     
                    
               }
          })
     }