
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');
 
const amountFormat = () => {
    const values = ['Sub Total', 'Tax', 'Total'];

    for (let i = 0; i < 3; i++){
        const tr = document.createElement('tr');

        for (let i = 0; i < 4; i++){
            const tdi = document.createElement('td');

            tr.append(tdi);
        }

        tfoot.append(tr);
        tfoot.children[i].children[2].innerText = values[i];
        tfoot.children[i].children[3].innerText = '0';
    } 
}
 
const orderFood = (food, quantity, price, netPrice) => {
	const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
     
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tbody.append(tr);

    td1.innerText = food;
    td2.innerText = quantity;
    td3.innerText = price;
    td4.innerText = netPrice;
}

const order = () => {
	for (let button of buttons){
		button.addEventListener('click', function() {
            const quantity = button.previousElementSibling
                                .value;
			const food = button.parentNode
			                   .parentNode
			                   .children[0]
                               .children[0]
			                   .innerText
            const price = button.parentNode
                                .parentNode
                                .children[0]
                                .children[1]
                                .innerText                   
			const netPrice = quantity * price;

            orderFood(food, quantity, price, netPrice);

            let sum = 0;

            for (let i = 0; i < tbody.children.length; i++){
                const val = tbody.children[i].children[3].innerText;

                sum += parseInt(val);
            } 

            const subtotal = tfoot.children[0].children[3];
            const tax =  tfoot.children[1].children[3];
            const total = tfoot.children[2].children[3];
    
            subtotal.innerText = sum;
            tax.innerText = (0.18*sum).toFixed(2);
            total.innerText = sum + 0.18*sum;

            invoiceLine();
            purchase();
		})
	}
}

amountFormat();
order();

 
 





 