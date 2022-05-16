const screen = document.querySelector(".row");
const menu = [{
    category: 1,
    name: "Pancake",
    img: "img/buttermilk-pancake.jpg",
    price: "15,99",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam nihil laborum, dolores dicta molestiae."

}, {
    category: 1,
    name: "Waffles",
    img: "img/waffle.jpg",
    price: "10,99",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam nihil laborum, dolores dicta molestiae."

}, {
    category: 1,
    name: "Cereal",
    img: "img/Cereal.jpg",
    price: "7,99",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam nihil laborum, dolores dicta molestiae."

}, {
    category: 1,
    name: "Bacon and eggs",
    img: "img/bacon-eggs.jpg",
    price: "16,99",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam nihil laborum, dolores dicta molestiae."

}, {
    category: 2,
    name: "Cheeseburguer",
    img: "img/hamburguer-1.jpg",
    price: "20,99",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam nihil laborum, dolores dicta molestiae."

}, {
    category: 2,
    name: "Chicken Burguer",
    img: "img/hamburguer-2.jpg",
    price: "18,99",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam nihil laborum, dolores dicta molestiae."

}, {
    category: 2,
    name: "Double Cheeseburguer",
    img: "img/hamburguer-3.jpg",
    price: "25,99",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam nihil laborum, dolores dicta molestiae."

}, {
    category: 3,
    name: "Chocolate Shake",
    img: "img/chocolate-milkshake.jpg",
    price: "12,99",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam nihil laborum, dolores dicta molestiae."

}, {
    category: 3,
    name: "Strawberry Shake",
    img: "img/strawberry-milkshake.jpg",
    price: "12,99",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam nihil laborum, dolores dicta molestiae."

}, {
    category: 3,
    name: "Vanilla Shake",
    img: "img/vanilla-milkshake.jpg",
    price: "12,99",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam nihil laborum, dolores dicta molestiae."

}];

const buttons = document.querySelectorAll("button");

window.addEventListener("DOMContentLoaded", () => {
    buttons.forEach(button => {
        button.addEventListener("click", e => {
            const categoryBtn = Number(e.currentTarget.dataset.id);
            const menuCategory = menu.filter(menuItem => {
                if (categoryBtn === 0) {
                    return menuItem;
                };
                if (menuItem.category === categoryBtn) {
                    return menuItem;
                };
            });
            renderScreen(menuCategory);
        })
    });

    const renderScreen = (array) => {
        let displayMenu = array.map(item => {
            return `<div class="card">
            <img src="${item.img}" alt="" class="food-img">
            <div>
                <div class="card-title">
                    <span class="food-name">${item.name}</span>
                    <span class="price"> R$${item.price}</span>
                </div>
                <p class="desc">
                ${item.description}
                </p>
    
            </div>
        </div>`;
        });
        displayMenu = displayMenu.join("");
        console.log(displayMenu);
        screen.innerHTML = displayMenu;
    }

})