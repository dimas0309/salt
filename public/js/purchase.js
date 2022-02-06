
const invoiceLine = () => {
	const food = document.querySelector('#food');
	const quantity = document.querySelector('#quantity');
	const price = document.querySelector('#price');
	const amount = document.querySelector('#amount');
	const len = tbody.children.length;
	const flist = [];
	const qlist = [];
	const plist = [];
	const alist = [];

	for(let i = 0; i < len; i++){
		const food = tbody.children[i].children[0].innerText;
		const quantity = tbody.children[i].children[1].innerText;
		const price = tbody.children[i].children[2].innerText;
		const amount = tbody.children[i].children[3].innerText;

		flist.push(food);
		qlist.push(quantity);
		plist.push(price);
		alist.push(amount);
	}

	food.value = flist;
	quantity.value = qlist;
	price.value = plist;
	amount.value = alist;
}

const purchase = () => {
	const subtotal = document.querySelector('#subtotal');
	const tax = document.querySelector('#tax');
	const total = document.querySelector('#total');
	const st = tfoot.children[0].children[3].innerText;
	const tx = tfoot.children[1].children[3].innerText;
	const tt = tfoot.children[2].children[3].innerText;

	subtotal.value = st;
	tax.value = tx;
	total.value = tt;
}

 


