
const buttons = document.querySelectorAll('.btn-add');
const foods = document.getElementsByClassName('food');
const prices = document.getElementsByClassName('price');


 
const foodid = () => {
	for (let i = 0; i < foods.length; i++) {
		foods[i].setAttribute('id','food'+i);
	}
}

const priceid = () => {
	for (let i = 0; i < prices.length; i++) {
		prices[i].setAttribute('id','price'+i);
	}
}

const buttonid = () => {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].setAttribute('id','btn'+i);
	}
}

foodid();
priceid();
buttonid();

 



 



