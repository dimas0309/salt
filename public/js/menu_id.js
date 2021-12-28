
const buttons = document.getElementsByClassName('btn btn-primary');
const quitbtns = document.getElementsByClassName('btn btn-danger');
const foods = document.getElementsByClassName('foods');
const prices = document.getElementsByClassName('prices');
 
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

const qbtnid = () => {
	for (let i = 0; i < quitbtns.length; i++){
		quitbtns[i].setAttribute('id','qbtn'+i);
	}
}

foodid();
priceid();
buttonid();
qbtnid();


 



