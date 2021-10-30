require("./AdventureData2.js")

let indents = 0;
let out = "";

function append(line) {
    indents -= (line.match(/[\}]/g)?.length || 0)
    out += '\t'.repeat(Math.max(0, indents)) + line + "\n";
    indents += (line.match(/[\{]/g)?.length || 0)
}

function compileData(data) {
    append("commands = {")
    for (const [key, value] of Object.entries(data.cmd)) {
        append(`"${key}": (args) => {`)
        compileToJS(value)
        append("},")
    }
    append("};")
    append("\n\n")
    
    append("locations = {");
    for (const [key, value] of Object.entries(data.locations)) {
        append(`${key}: {`)
        append(`name: "${key}",`)
        compileLocation(value);
        append("},")
    }
    append(`".*": (args) => {`)
    append(`t.write("Chichien's brain is too smol to understand")`)
    append(`},`)
    append("};")
}

function compileLocation(loc) {
    let additionalCmds = []
    let connections = []
    let cmd = ('cmd' in loc ? loc.cmd : loc)
    for (const [key, data] of Object.entries(cmd)) {
        if (matchKey(key, "m")) {
            for (const [dest, moveAction] of Object.entries(data.cmd)) {
                connections.push({ dir: dest, action: moveAction })
            }
        } else {
            additionalCmds.push({ key: key, data: data })
        }
    }
    if (additionalCmds.length > 0) {
        append("commands: {")
        for (const key of additionalCmds) {
            if (key.key == "get") {
                append(`"g": (args) => {`)
                compileToJS(key.data)
                append("},")
            } else if (key.key == "use") {
                append(`"u": (args) => {`)
                compileToJS(key.data)
                append("},")
            } else if (key.key == "look") {
                append(`"l": (args) => {`)
                compileToJS(key.data)
                append("},")
            } else if (key.key == "move") {
                append(`"m": (args) => {`)
                compileToJS(key.data)
                append("},")
            } else {
                append(`"${key.key}": (args) => {`)
                compileToJS(key.data)
                append("},")
            }
        }
        append("},")
    }
    if (connections.length > 0) {
        append("connections: {")
        for (const key of connections) {
            append(`"${key.dir}": () => {`)
            compileToJS(key.action)
            append(`},`)
        }
        append("},")
    }
}

let cmdDepth = 0;
function compileToJS(obj) {
    let additionalCmds = [];
    if (obj.cmd) {
        for (const [command, action] of Object.entries(obj.cmd)) {
            additionalCmds.push({ cmd: command, action: action });
        }
    }
    if (additionalCmds.length > 0) {
        append(`if (!args || !args[${cmdDepth}]) {`)
    }
    if (obj.clear){
        append(`t.clear();`)
    }

    for (const [key, value] of Object.entries(obj)) {
        if (matchKey(key, "msg")) {
            append(`t.write(\`${value.replace(/(\n|\<br\>) */gi, "\n")}\`);`)
        } else if (matchKey(key, "img")) {
            append(`// t.writeImg("${value}");`)
        } else if (matchKey(key, "clear")) {
            continue;
            // append(`t.clear();`)
        } else if (matchKey(key, "get")) {
            append(`variables["${value.item}"] = ${value.data}`)
        } else if (matchKey(key, "inc")) {
            append(`variables["${value}"] = (variables["${value}"] ? variables["${value}"] + 1 : 1)`)
        } else if (matchKey(key, "inv")) {
            append(`displayInventory();`)
        } else if (matchKey(key, "cmd")) {
            continue;
            // append(`// PLEASE DEFINE CMD;`)
        } else if (matchKey(key, "if")) {
            append(`if (${getCond(value.cond)}) {`)
            compileToJS(Object.fromEntries(Object.entries(value).filter(([filterkey, filterval]) => filterkey != 'cond')))
            append(`}`)
        } else if (matchKey(key, "else")) {
            append(`else {`)
            compileToJS(value)
            append(`}`)
        } else if (key == 'dest') {
            append(`goTo("${value}");`)
        } else if (key == 'end') {
            append(`return -1;`)
        } else {
            append(`// UNDEFINED_KEY '${key}';`)
        }
    }
    if (additionalCmds.length > 0) {
        for (const cmd of additionalCmds) {
            append(`} else if (args[${cmdDepth}] == '${cmd.cmd}') {`)
            cmdDepth++;
            compileToJS(cmd.action);
            cmdDepth--;
        }
        append("}")
    }
}

function getCond(cond) {
    let conditions = [];
    let and = true;
    
    if (cond.type == "or"){
        and = false;
    }
    for (const [type, condition] of Object.entries(cond)){
        if (matchKey(type, "contains")){
            conditions.push(`variables["${condition}"]`)
        } else if (matchKey(type, "unseen")){
            conditions.push(`!variables["${condition}"]++`)
        } else if (matchKey(type, "has")){
            conditions.push(`(variables["${condition.item}"] >= ${condition.amt} || -variables["${condition.item}"] >= ${condition.amt})`)
        } else if (matchKey(type, "type")){
            continue;
        } else {
            conditions.push(`UNDEFINED_CONDITION '${type}'`)
        }
    }
    return conditions.join(and ? " && " : " || ")
}

function matchKey(key, val) {
    return key.match(new RegExp(`^${val}\\d*$`,"gi"));
}


compileData(WorldData)
append('aliases = [')
for (const [aliases, v] of Object.entries(Aliases)){
    alist = aliases.replace(/[\(\)\^\$]/gi,'').split('|')
    append(`["${v}", ["${alist.join("\", \"")}"]],`)
}
append('];')
console.log ("// START OF SCRIPT")
console.log(out);
// console.log(WorldData.locations.GrebelMerged.l.msg)