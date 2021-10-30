

var t = Maneki.getTerminal("luckyadventure")

// let cmdList = {};
// function updateTerminalCommands() {
//     console.log("updated")
//     for (const [trigger, f] of Object.entries(commands)) {
//         cmdList[trigger] = f;
//     }
//     for (const [trigger, f] of Object.entries(currentLocation?.commands)) {
//         cmdList[trigger] = f;
//     }
//     for (const [trigger, f] of Object.entries(cmdList)) {
//         let rx = trigger;
//         rx = rx.replace(/\*/g, "\\b(\\w*)\\b")
//         for (const [alias, options] of Object.entries(aliases)) {
//             rx = rx.replace(new RegExp(`\\b${alias}\\b`, "gi"), `(?:${alias}|${options.join("|")})`)
//         }
//         rx = new RegExp(rx);
//         t.addEventListener("onCommand", (line) => {
//             line.match(rx) && f(line.split(" ").slice(1))
//         })
//     }
//     if (currentLocation.connections) {
//         for (const [dir, destAtn] of Object.entries(currentLocation?.connections)) {
//             t.addEventListener("onCommand", (line) => {
//                 line.match(dir) && destAtn(line.split(" ").slice(1))
//             })
//         }
//     }
//     t.addEventListener("onCommand", updateTerminalCommands)
// }

// updateTerminalCommands();

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
        console.log(line)
        console.log(trigger)
        if (line.match(new RegExp("^" + trigger + ".*$"))) {
            f(line.split(new RegExp("\\s+")).slice(1))
            return;
        }
    }
}

function handleCommand(line) {
    console.log("oncmd")
    parseLine(line);
    t.addEventListener("onCommand", (line) => { handleCommand(line) })
}

t.addEventListener("onCommand", (line) => { handleCommand(line) })

// function has(item, count = null) {
//     for (const [invitem, invdata] of Object.entries(Inventory)) {
//         if (item == invitem && ((count == null && invdata != 0) || (count != null && Math.abs(invdata) >= Math.abs(count)))) {
//             return true;
//         }
//     }
//     return false;
// }


// function evaluateelmt(type, value) {
//     if (type.match(new RegExp("contains\d*", "gi"))) {
//         return has(value);
//     }
//     if (type.match(new RegExp("has\d*", "gi")) && value.hasOwnProperty("amt") && value.hasOwnProperty("item")) {
//         return has(value.item, value.amt);
//     }
//     if (type.match(new RegExp("cond\d*", "gi"))) {
//         return evaluatecond(value);
//     }
//     if (type.match(new RegExp("unseen", "gi"))) {
//         if (has(value)) {
//             return false;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }

// function evaluatecond(condition) {
//     if (!condition.hasOwnProperty("type") || condition.type == "and") {
//         for (const [type, value] of Object.entries(condition)) {
//             if (!type.match(new RegExp("type\d*", "gi")) && !evaluateelmt(type, value)) {
//                 return false;
//             }
//         }
//         return true;
//     } else if (condition.type == "or") {
//         for (const [type, value] of Object.entries(condition)) {
//             if (!type.match(new RegExp("type\d*", "gi")) && evaluateelmt(type, value)) {
//                 return true;
//             }
//         }
//         return false;
//     }
// }


// function follow_cmd(ctxt, cmd) {
//     var i = 0;
//     out = ctxt;

//     while (true) {
//         if (out.hasOwnProperty("if") && out.hasOwnProperty("else") && out.if.hasOwnProperty("cond")) {
//             if (evaluatecond(out.if.cond)) {
//                 if (out.if.cond.hasOwnProperty("unseen")) {
//                     Inventory[out.if.cond.unseen] = -1;
//                 }
//                 out = out.if;
//             } else {
//                 out = out.else;
//             }
//         } else if (out.hasOwnProperty("cmd") && cmd[i]) {
//             found = false;
//             for (const [cur_cmd, result] of Object.entries(out.cmd)) {
//                 if (cmd[i].match(new RegExp("^" + cur_cmd + "$", "i"))) {
//                     found = true;
//                     out = result;
//                     i++;
//                     break;
//                 }
//             }
//             if (!found) {
//                 break;
//             }
//         } else {
//             break;
//         }
//     }

//     for (const key of Object.keys(out)) {
//         if (key != "cmd") {
//             return out;
//         }
//     }

//     return follow_cmd(WorldData, cmd);
// }



// function processcmds(context) {
//     var executionOrder = ["clear\d*", "img\d*", "msg\d*", "dest\d*", "inv\d*", "get\d*", "inc\d*", "end\d*"]

//     function regexIndexOf(arr, str) {
//         for (var i = 0; i < arr.length; i++) {
//             if (str.match(new RegExp(arr[i], "gi"))) {
//                 return i;
//             }
//         }
//         return -1
//     }

//     for (const [trigger, action] of Object.entries(context).sort(function (a, b) {
//         return regexIndexOf(executionOrder, a[0]) - regexIndexOf(executionOrder, b[0]);
//     })) {
//         if (trigger.match(new RegExp("img\d*", "gi"))) {
//             t.write("image/" + action);
//         }

//         if (trigger.match(new RegExp("clear\d*", "gi"))) {
//             t.clear()
//         }

//         if (trigger.match(new RegExp("msg\d*", "gi"))) {
//             t.write(action);
//             t.write();
//         }

//         if (trigger.match(new RegExp("dest\d*", "gi"))) {
//             Location = action;
//         }

//         if (trigger.match(new RegExp("inv\d*", "gi"))) {
//             if (action == 1) {
//                 t.write("You have:");
//                 found = false;
//                 for (const [invitem, invdata] of Object.entries(Inventory)) {
//                     if (invitem && invdata == 1) {
//                         t.write("  - " + invitem);
//                         found = true;
//                     } else if (invitem && invdata > 1) {
//                         t.write("  - " + invitem + " (" + invdata + ")");
//                         found = true;
//                     }
//                 }
//                 if (!found) {
//                     t.write("  - Nothing");
//                 }
//                 t.write();
//             }
//         }

//         if (trigger.match(new RegExp("get\d*", "gi"))) {
//             Inventory[action.item] = action.data;
//         }
//         if (trigger.match(new RegExp("inc\d*", "gi"))) {
//             if (!has(action)) {
//                 Inventory[action] = 1;
//             } else {
//                 if (Inventory[context.inc] < 0) {
//                     Inventory[context.inc]--;
//                 } else {
//                     Inventory[context.inc]++;
//                 }
//             }
//         }

//         if (trigger.match(new RegExp("end\d*", "gi"))) {
//             endflag = action;
//             t.write("THE END (ending " + action + "/4)\n\nPress enter to continue\n")
//         }
//     }
// }

// function handle(line) {
//     if (endflag != 0) {
//         end(flag);
//     }

//     var cmd = line.toLowerCase();
//     for (const [word, repl] of Object.entries(Aliases)) {
//         cmd = cmd.replace(new RegExp(word, "gi"), repl.toLowerCase());
//     }
//     cmd = cmd.trim().replace(/  +/gi, " ").split(" ");

//     if (cmd == "") {
//         waitingcount++;
//         if (waitingcount == 10) {
//             t.write("hello?");
//         }
//         if (waitingcount == 23) {
//             t.write("are you okay?");
//         }
//         if (waitingcount == 29) {
//             t.write("you can say something you know...");
//         }
//         if (waitingcount == 42) {
//             t.write("it's been a while");
//         }
//         if (waitingcount == 50) {
//             t.write("chichien needs you");
//         }
//         if (waitingcount == 60) {
//             t.write("ah whatever");
//         }
//         if (waitingcount == 64) {
//             t.write("Chichien was bored to death\n\nTHE END (ending 0/4)\n\nPress any key to continue\n");
//             endflag = 5;
//         }
//         return;
//     } else {
//         waitingcount = 0;
//         context = follow_cmd((WorldData.locations.hasOwnProperty(Location) ? WorldData.locations[Location] : WorldData), cmd);

//         processcmds(context);

//     }
// }
