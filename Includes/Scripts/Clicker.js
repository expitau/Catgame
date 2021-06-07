var clickerResources = {
    none: {
        desc: "none",
        amt: 1,
        prod: 0
    },

    meows: {
        desc: "Meows",
        amt: 0,
        prod: function prod() {
            return clickerResources.cats.amt * 0.1 * (clickerActions.unlockMeowx2.tick == -1 ? 2 : 1) * (1 + clickerResources.catnip.amt);
        }
    },

    treats: {
        desc: "Treats",
        amt: 0,
        prod: function prod() {
            return clickerResources.purrs.amt * 0.1 * (clickerActions.unlockTreatx2.tick == -1 ? 2 : 1);
        }
    },

    cats: {
        desc: "Cats",
        amt: 0,
        prod: function prod() {
            return clickerResources.nyans.amt * 0.1 * (clickerActions.unlockCatx2.tick == -1 ? 2 : 1);
        }
    },

    purrs: {
        desc: "Purrs",
        amt: 0,
        prod: function prod() {
            return clickerResources.quakes.amt * 0.1 * (clickerActions.unlockPurrx2.tick == -1 ? 2 : 1);
        }
    },

    nyans: {
        desc: "Nyan cats",
        amt: 0,
        prod: function prod() {
            return clickerResources.rainbows.amt * 0.1 * (clickerActions.unlockNyanx2.tick == -1 ? 2 : 1);
        }
    },

    quakes: {
        desc: "Floofquakes",
        amt: 0,
        prod: function prod() {
            return clickerResources.chomnks.amt * 0.1 * (clickerActions.unlockQuakex2.tick == -1 ? 2 : 1);
        }
    },

    rainbows: {
        desc: "Rainbows",
        amt: 0,
        prod: function prod() {
            return clickerResources.tears.amt * 0.1 * (clickerActions.unlockRainbowx2.tick == -1 ? 2 : 1);
        }
    },

    chomnks: {
        desc: "Megachomnkers",
        amt: 0,
        prod: function prod() {
            return clickerResources.dreamcats.amt * 0.1 * (clickerActions.unlockChomnkx2.tick == -1 ? 2 : 1);
        }
    },

    tears: {
        desc: "Spacetime Tears",
        amt: 0,
        prod: function prod() {
            return clickerResources.tears.amt * 0.05 * (clickerActions.unlockTear.tick == -1 ? 1 : 0);
        }
    },

    dreamcats: {
        desc: "Technicolour Dreamcats",
        amt: 0,
        prod: function prod() {
            return clickerResources.dreamcats.amt * 0.05 * (clickerActions.unlockDreamcat.tick == -1 ? 1 : 0);
        }
    },

    catnip: {
        desc: "Catnip",
        amt: 0,
        prod: function prod() {
            return clickerResources.catnip.amt * -0.01;
        }
    }

}

var clickerActions = {
    getMeow: {
        tick: 0,
        unlock: {
            item: "none",
            amt: 0
        },
        cost: {
            item: "none",
            price: 0,
            scale: 0
        },
        action: function action() {
            clickerResources.meows.amt += clickerResources.catnip.amt + 1;
        }
    },

    getTreat: {
        tick: 0,
        unlock: {
            item: "meows",
            amt: 6
        },
        cost: {
            item: "meows",
            price: 8,
            scale: 1.1
        },
        action: function action() {
            clickerResources.treats.amt += 1;
        }
    },

    getCat: {
        tick: 0,
        unlock: {
            item: "treats",
            amt: 2
        },
        cost: {
            item: "treats",
            price: 4,
            scale: 1.1
        },
        action: function action() {
            clickerResources.cats.amt += 1;
        }
    },

    getPurr: {
        tick: 0,
        unlock: {
            item: "meows",
            amt: 100
        },
        cost: {
            item: "meows",
            price: 256,
            scale: 1.1
        },
        action: function action() {
            clickerResources.purrs.amt += 1;
        }
    },

    getNyan: {
        tick: 0,
        unlock: {
            item: "purrs",
            amt: 20
        },
        cost: {
            item: "purrs",
            price: 32,
            scale: 1.1
        },
        action: function action() {
            clickerResources.nyans.amt += 1;
        }
    },

    getQuake: {
        tick: 0,
        unlock: {
            item: "cats",
            amt: 10
        },
        cost: {
            item: "cats",
            price: 24,
            scale: 1.1
        },
        action: function action() {
            clickerResources.quakes.amt += 1;
        }
    },

    getRainbow: {
        tick: 0,
        unlock: {
            item: "quakes",
            amt: 8
        },
        cost: {
            item: "quakes",
            price: 16,
            scale: 1.1
        },
        action: function action() {
            clickerResources.rainbows.amt += 1;
        }
    },

    getChomnk: {
        tick: 0,
        unlock: {
            item: "nyans",
            amt: 12
        },
        cost: {
            item: "nyans",
            price: 64,
            scale: 1.1
        },
        action: function action() {
            clickerResources.chomnks.amt += 1;
        }
    },

    getTear: {
        tick: 0,
        unlock: {
            item: "chomnks",
            amt: 12
        },
        cost: {
            item: "chomnks",
            price: 24,
            scale: 1.1
        },
        action: function action() {
            clickerResources.tears.amt += 1;
        }
    },

    getDreamcat: {
        tick: 0,
        unlock: {
            item: "rainbows",
            amt: 16
        },
        cost: {
            item: "rainbows",
            price: 32,
            scale: 1.1
        },
        action: function action() {
            clickerResources.dreamcats.amt += 1;
        }
    },

    getCatnip1: {
        tick: 0,
        unlock: {
            item: "cats",
            amt: 4
        },
        cost: {
            item: "cats",
            price: 8,
            scale: 2
        },
        action: function action() {
            clickerResources.catnip.amt += 8;
        }
    },

    getCatnip2: {
        tick: 0,
        unlock: {
            item: "nyans",
            amt: 1
        },
        cost: {
            item: "nyans",
            price: 2,
            scale: 2
        },
        action: function action() {
            clickerResources.catnip.amt += 16;
        }
    },

    getCatnip3: {
        tick: 0,
        unlock: {
            item: "chomnks",
            amt: 1
        },
        cost: {
            item: "chomnks",
            price: 4,
            scale: 2
        },
        action: function action() {
            clickerResources.catnip.amt += 32;
        }
    },

    //    ------------------------------------------- UNLOCKS ---------------------------------------------------

    unlockMeowx2: {
        tick: 0,
        unlock: {
            item: "cats",
            amt: 10
        },
        cost: {
            item: "meows",
            price: 2000,
            scale: 1
        },
        action: function action() {
            this.tick = -1;
        }
    },

    unlockTreatx2: {
        tick: 0,
        unlock: {
            item: "purrs",
            amt: 10
        },
        cost: {
            item: "treats",
            price: 1000,
            scale: 1
        },
        action: function action() {
            this.tick = -1;
        }
    },

    unlockCatx2: {
        tick: 0,
        unlock: {
            item: "nyans",
            amt: 10
        },
        cost: {
            item: "cats",
            price: 200,
            scale: 1
        },
        action: function action() {
            this.tick = -1;
        }
    },

    unlockPurrx2: {
        tick: 0,
        unlock: {
            item: "quakes",
            amt: 10
        },
        cost: {
            item: "purrs",
            price: 200,
            scale: 1
        },
        action: function action() {
            this.tick = -1;
        }
    },

    unlockNyanx2: {
        tick: 0,
        unlock: {
            item: "rainbows",
            amt: 10
        },
        cost: {
            item: "nyans",
            price: 100,
            scale: 1
        },
        action: function action() {
            this.tick = -1;
        }
    },


    unlockQuakex2: {
        tick: 0,
        unlock: {
            item: "chomnks",
            amt: 10
        },
        cost: {
            item: "quakes",
            price: 100,
            scale: 1
        },
        action: function action() {
            this.tick = -1;
        }
    },

    unlockRainbowx2: {
        tick: 0,
        unlock: {
            item: "tears",
            amt: 10
        },
        cost: {
            item: "rainbows",
            price: 50,
            scale: 1
        },
        action: function action() {
            this.tick = -1;
        }
    },

    unlockChomnkx2: {
        tick: 0,
        unlock: {
            item: "dreamcats",
            amt: 10
        },
        cost: {
            item: "chomnks",
            price: 50,
            scale: 1
        },
        action: function action() {
            this.tick = -1;
        }
    },

    unlockTear: {
        tick: 0,
        unlock: {
            item: "tears",
            amt: 25
        },
        cost: {
            item: "tears",
            price: 50,
            scale: 1
        },
        action: function action() {
            this.tick = -1;
        }
    },

    unlockDreamcat: {
        tick: 0,
        unlock: {
            item: "dreamcats",
            amt: 25
        },
        cost: {
            item: "dreamcats",
            price: 50,
            scale: 1
        },
        action: function action() {
            this.tick = -1;
        }
    },

    unlockAppease: {
        tick: 0,
        unlock: {
            item: "meows",
            amt: 3
        },
        cost: {
            item: "meows",
            price: 1000000000,
            scale: 1
        },
        action: function action() {
            alert("You have appeased the chichien, good work!");
            alert("THE END (ending 5/4)");
            alert("With chichien appeased, there is no purpose in life... goodbye");
            window.location.href = "https://www.youtube.com/embed/itP0zeePN34?autoplay=1";
            this.tick = -1;
        }
    }
}

function triggerAction(action) {
    if (typeof action === 'string') {
        action = getIf(clickerActions, action);
    }
    if (evaluate(action.tick) >= 0 && getIf(clickerResources, action.cost.item).amt >= evaluate(action.cost.price) * evaluate(action.cost.scale) ** evaluate(action.tick)) {
        getIf(clickerResources, action.cost.item).amt -= evaluate(action.cost.price) * evaluate(action.cost.scale) ** evaluate(action.tick);
        action.tick++;
        action.action();
    }
}

function evaluate(x) {
    if (typeof x === 'function') {
        return x();
    } else {
        return x;
    }
}

function getIf(x, property) {
    if (x.hasOwnProperty(property)) {
        return x[property];
    } else {
        console.log(x);
        throw ("Object has no property " + property);
    }
}

function updateClicker() {
    for (const [res, data] of Object.entries(clickerResources)) {
        clickerResources[res].amt += evaluate(data.prod);
        if (clickerResources[res].amt < 0) {
            clickerResources[res].amt = 0;
        }
    }

    updateText();
}
setInterval(updateClicker, 100);

function roundValue(x) {
    return Math.round(x * 10) / 10;
}

function updateText() {
    for (const [res, data] of Object.entries(clickerResources)) {
        document.querySelectorAll("." + res + "_amt").forEach(function updateText(element) {
            element.textContent = roundValue(data.amt);
        });
        document.querySelectorAll("." + res + "_display").forEach(function updateText(element) {
            element.textContent = data.desc + '\n' + Math.floor(data.amt);
        });
        document.querySelectorAll("." + res + "_shown").forEach(function updateHidden(element) {
            if (data.amt > 0) {
                element.hidden = false;
            }
        });
    }

    for (const [act, data] of Object.entries(clickerActions)) {
        document.querySelectorAll("." + act + "_disabled").forEach(function updateAction(element) {
            element.disabled = (getIf(clickerResources, data.cost.item).amt < evaluate(data.cost.price) * evaluate(data.cost.scale) ** evaluate(data.tick));
        });
        document.querySelectorAll("." + act + "_cost").forEach(function updateCost(element) {
            if (data.cost.item == "none") {
                element.textContent = "none"
            } else {
                element.textContent = roundValue(evaluate(data.cost.price) * evaluate(data.cost.scale) ** evaluate(data.tick)) + " " + getIf(clickerResources, data.cost.item).desc;
            }
        });
        document.querySelectorAll("." + act + "_shown").forEach(function updateHidden(element) {
            if (data.unlock.item == "none") {
                element.hidden = false;
            } else if (getIf(clickerResources, data.unlock.item).amt >= data.unlock.amt) {
                element.hidden = false;
            }
            if (data.tick < 0) {
                element.hidden = true;
            }
        });
    }
}

function startClicker() {
    epilepsy = 0;
    document.getElementById("lightmode").hidden = true;
    document.getElementById("clicker-start").hidden = true;
    document.getElementById("console").hidden = true;
    document.getElementById("hiddenmsg").hidden = true;
    document.getElementById("clicker").hidden = false;


    for (const [res, data] of Object.entries(clickerResources)) {
        document.querySelectorAll("." + res + "_shown").forEach(function updateHidden(element) {
            element.hidden = true;
        });
    }
    for (const [act, data] of Object.entries(clickerActions)) {
        document.querySelectorAll("." + act + "_shown").forEach(function hideAll(element) {
            element.hidden = true;
        });
    }

}