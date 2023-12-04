function AddItem({clicked} ){
    let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk",`${clicked}`];
     console.log(clicked)
    return foodItems;
}

export default AddItem;