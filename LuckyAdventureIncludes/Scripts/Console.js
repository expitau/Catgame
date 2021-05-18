function checkInput() {
    var event = window.event || event.which;

    if (event.keyCode == 13) {
        event.preventDefault();
        var line = document.getElementById("textinput").value
        output(">>> " + line);
        handle(line);
        document.getElementById("textinput").value = "";
    }

    document.getElementById("textinput").style.height = (document.getElementById("textinput").scrollHeight) + "px";
}

function output(line) {
    console.log("OUTPUT: " + line);

    if (line) {
        for (const part of line.split("<br>")) {
            console.log(part);
            if (part != "") {
                document.getElementById("consoletext").appendChild(document.createTextNode(part));
            }
            document.getElementById("consoletext").appendChild(document.createElement("br"));
        }
    }
    document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
}
function imgout(img) {
    console.log("OUTPUT: IMAGE");
    imageElement = document.createElement("img")
    imageElement.setAttribute("src", img)
    imageElement.setAttribute("width", "42%")
    document.getElementById("consoletext").appendChild(imageElement);
    document.getElementById("consoletext").appendChild(document.createElement("br"));
    document.getElementById("consoletext").appendChild(document.createElement("br"));
    document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
}

var loc = "kitchen";
var inv = {};
var endflag = 0;
var waitingcount = 0;

function has(item, count = 1) {
    for (const [invitem, invdata] of Object.entries(inv)) {
        if (item == invitem && Math.abs(invdata) >= count) {
            return true;
        }
    }
    return false;
}

function follow_cmd(ctxt, cmd) {
    var i = 0;
    out = ctxt;

    while (cmd[i]) {
        while (out.hasOwnProperty("if") && out.hasOwnProperty("else") && out.if.hasOwnProperty("cond")) {
            if (out.if.hasOwnProperty("count") && has(out.if.cond, out.if.count)) {
                out = out.if;
            } else if (!out.if.hasOwnProperty("count") && has(out.if.cond)) {
                out = out.if;
            } else {
                out = out.else;
            }
        }

        if (out.hasOwnProperty("cmd")) {
            found = false;
            for (const [cur_cmd, result] of Object.entries(out.cmd)) {
                if (cmd[i].match(new RegExp("^" + cur_cmd + "$", "i"))) {
                    found = true;
                    out = result;
                    i++;
                    break;
                }
            }
            if (!found) {
                break;
            }
        } else {
            break;
        }
    }

    while (out.hasOwnProperty("if") && out.hasOwnProperty("else") && out.if.hasOwnProperty("cond")) {
        if (out.if.hasOwnProperty("count") && has(out.if.cond, out.if.count)) {
            out = out.if;
        } else if (!out.if.hasOwnProperty("count") && has(out.if.cond)) {
            out = out.if;
        } else {
            out = out.else;
        }

    }
    found = false;
    for (const key of Object.keys(out)) {
        if (key != "cmd") {
            found = true;
        }
    }

    if (!found) {
        out = follow_cmd(WorldData, cmd);
    }
    return out;
}

function handle(line) {
    if (endflag == -2) {
        output("Press enter to continue watching the blinking lights");
        endflag = 2;
    } else if (endflag == 6) {
        output("You have the Goose Cult ending");
    } else if (endflag == 8) {
        window.location.href = "https://www.youtube.com/embed/g_y15ozNchY?autoplay=1";
    } else if (endflag == 2) {
        window.location.href = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    } else if (endflag == 666) {
        window.location.href = "https://www.youtube.com/embed/lDnva_3fcTc?autoplay=1";
    } else if (endflag > 0) {
        location.reload()
    }
    var cmd = line.toLowerCase();
    for (const [word, repl] of Object.entries(Aliases)) {
        cmd = cmd.replace(new RegExp(word, "gi"), repl.toLowerCase());
    }
    cmd = cmd.trim().replace(/  +/gi, " ").split(" ");
    console.log(cmd);

    if (cmd == "") {
        waitingcount++;
        if (waitingcount == 10) {
            output("hello?");
        }
        if (waitingcount == 23) {
            output("are you okay?");
        }
        if (waitingcount == 29) {
            output("you can say something you know...");
        }
        if (waitingcount == 42) {
            output("it's been a while");
        }
        if (waitingcount == 50) {
            output("chichien needs you");
        }
        if (waitingcount == 60) {
            output("ah whatever");
        }
        if (waitingcount == 64) {
            output("Chichien was bored to death<br><br>THE END (ending 0/4)<br><br>Press any key to continue<br>");
            endflag = 5;
        }
        return;
    } else if (WorldData.locations.hasOwnProperty(loc)) {
        waitingcount = 0;
        context = follow_cmd(WorldData.locations[loc], cmd);
        console.log(context);
        var executionOrder = ["clear\d*", "img\d*", "msg\d*", "dest\d*", "inv\d*", "get\d*", "inc\d*", "end\d*"]
        function regexIndexOf(arr, str) {
            for (var i = 0; i < arr.length; i++) {
                if (str.match(new RegExp(arr[i], "gi"))) {
                    return i;
                }
            }
            return -1
        }
        for (const [trigger, action] of Object.entries(context).sort(function (a, b) {
            return regexIndexOf(executionOrder, a[0]) - regexIndexOf(executionOrder, b[0]);
        })) {
            if (trigger.match(new RegExp("img\d*", "gi"))) {
                imgout(action);
            }
            if (trigger.match(new RegExp("clear\d*", "gi"))) {
                document.getElementById("consoletext").innerHTML = "";
            }

            if (trigger.match(new RegExp("msg\d*", "gi"))) {
                output(action);
                output("<br>");
            }

            if (trigger.match(new RegExp("dest\d*", "gi"))) {
                loc = action;
            }

            if (trigger.match(new RegExp("inv\d*", "gi"))) {
                if (action == 1) {
                    output("You have:");
                    found = false;
                    for (const [invitem, invdata] of Object.entries(inv)) {
                        if (invitem && invdata == 1) {
                            output("  - " + invitem);
                            found = true;
                        } else if (invitem && invdata > 1) {
                            output("  - " + invitem + " (" + invdata + ")");
                            found = true;
                        }
                    }
                    if (!found) {
                        output("  - Nothing");
                    }
                    output("<br>");
                }
            }

            if (trigger.match(new RegExp("get\d*", "gi"))) {
                inv[action.item] = action.data;
            }
            if (trigger.match(new RegExp("inc\d*", "gi"))) {
                if (!has(action)) {
                    inv[action] = 1;
                } else {
                    if (inv[context.inc] < 0) {
                        inv[context.inc]--;
                    } else {
                        inv[context.inc]++;
                    }
                }
            }

            if (trigger.match(new RegExp("end\d*", "gi"))) {
                endflag = action;
                output("THE END (ending " + action + "/4)<br><br>Credits to Nathan, Aliyah, Zara and Maia (equally), (illustrations by Zara, content by the four of us)<br><br>Press enter to continue<br>")
            }
        }
    } else {
        waitingcount = 0;
        context = follow_cmd(WorldData, cmd);
        if (context.hasOwnProperty("msg")) {
            output(follow_cmd(WorldData, cmd).msg);
        } else if (context.hasOwnProperty("inv")) {
            if (context.inv == 1) {
                output("AAAA INV");
            }
        } else {
            console.log("ERROR: No msg found in context ");
            console.log(context);
        }
    }
}
