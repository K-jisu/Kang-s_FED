function Item(title, price ) {
    this.title = title;
    this.price = price;
    this.showPrice = function () {
        console.log(`가격은 ${price} 원 입니다.`);

    }
    
}

const item1 = new Item("인형", 3000);
const item2 = new Item("car", 4000);
const item3 = new Item("horse", 5000);

console.log(item1, item2, item3);

item3.showPrice()