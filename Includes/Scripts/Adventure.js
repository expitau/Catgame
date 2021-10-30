

var t = Maneki.getTerminal("luckyadventure")

function parseLine(line) {
    for (const [alias, options] of aliases) {
        for (const option of options) {
            line = line.replace(new RegExp(`\\b${option}\\b`, "gi"), alias)
        }
    }
    
    console.log(line)
    for (const [trigger, f] of Object.entries(currentLocation?.commands)) {
        if (line.match(new RegExp("^" + trigger + ".*$"))) {
            f(line.split(new RegExp("\\s+")).slice(1))
            return;
        }
    }
    
    if (currentLocation.connections) {
        for (const [trigger, f] of Object.entries(currentLocation?.connections)) {
            if (line.match(new RegExp("^m " + trigger + ".*$"))) {
                f(line.split(new RegExp("\\s+")).slice(1))
                return;
            }
        }
    }

    for (const [trigger, f] of Object.entries(commands)) {
        if (line.match(new RegExp("^" + trigger + ".*$"))) {
            f(line.split(new RegExp("\\s+")).slice(1))
            return;
        }
    }
}

function handleCommand(line) {
    parseLine(line);
    t.addEventListener("onCommand", (line) => { handleCommand(line) })
}

t.addEventListener("onCommand", (line) => { handleCommand(line) })
