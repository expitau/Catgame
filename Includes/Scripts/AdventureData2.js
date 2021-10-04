locations = {
    "kitchen": {
        objects: {
            "potato": {
                description: "It's a potato",
                count: 1
            }
        },

        description: "The kitchen looks fine"
    }
}

let Location = locations.kitchen

inventory = {
};

commands = {
    "use * *": (arg1) => {
        t.write("hallo " + arg1)
    },
    "look": () => {
        t.write(Location.description)
        for(const [object, data] in Object.entries(Location.objects)){
            t.write(object + ": " + data.description);
        }
    },
    "clear": () => {
        t.clear()
    },
    "get potato": () => {
        if (Location.objects.potato){
            inventory.potato = Location.objects.potato;
            delete Location.objects.potato
        }
    },
    "inventory": () => {
        t.write("Inventory: ")
        for(const [object, data] in Object.entries(inventory)){
            t.write(object + ": " + data.count)
        }
    }
};

aliases = {
    "use": ["u"],
    "look": ["l"],
    "clear": ["cls"]
}

