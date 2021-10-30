variables = {};
currentLocation = locations.kitchen

function displayInventory(){
    t.write("Inventory:")
    for(const [item, qty] of Object.entries(variables)){
        if (qty > 0) {
            t.write(`You have ${qty} ${item}`)
        }
    }
}

function goTo(loc){
    currentLocation = locations[loc];
}