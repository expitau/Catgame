variables = {};
currentLocation = locations.kitchen

function displayInventory() {
    t.write("Inventory:")
    for (const [item, qty] of Object.entries(variables)) {
        if (qty > 0) {
            t.write(`You have ${qty} ${item}`)
        }
    }
}

function goTo(loc) {
    currentLocation = locations[loc];
}

function print(line) {
    if (line.includes("[image]")) {
        img = line.split("[image]").pop()
        imageElement = document.createElement("img")
        imageElement.setAttribute("src", img)
        imageElement.setAttribute("width", "42%")
        t.write(imageElement);
    } else {
        t.write(line)
    }
}

function endGame(flag) {
    t.write("The end!")
    t.addEventListener("onCommand", () => {
        if (flag == -2) {
            t.write("Press enter to continue watching the blinking lights");
            t.addEventListener("onCommand", () => {endGame(2)})
        } else if (flag == 6) {
            t.write("You have the Goose Cult ending");
        } else if (flag == 8) {
            window.location.href = "https://www.youtube.com/embed/g_y15ozNchY?autoplay=1";
        } else if (flag == 2) {
            window.location.href = "https://www.youtube.com/embed/dQw4w9WgXcQ";
        } else if (flag == 666) {
            window.location.href = "https://www.youtube.com/embed/lDnva_3fcTc?autoplay=1";
        } else if (flag == 540) {
            window.location.href = "https://www.youtube.com/embed/KPP4Cfupzhs?autoplay=1";
        } else if (flag == 541) {
            window.location.href = "https://www.youtube.com/embed/UyANUnGoGcE?autoplay=1";
        } else if (flag == 799) {
            window.location.href = "https://www.youtube.com/embed/qCMZYEIlztY?autoplay=1";
        } else {
            location.reload()
        }
    })
}