Locations = Object.freeze({
    kitchen: "kitchen",
    outside: "outside",
    living_room: "living_room",
    dining_room: "dining_room",
    office: "office",
    entryway: "entryway",
    hallway1: "hallway1",
    hallway2: "hallway2",
    bathroom: "bathroom",
    meow_room: "meow_room",
});

WorldData = {
    msg: "Chichien's brain is too smol to understand :(",
    cmd: {
        clr: {
            clear: 1
        },
        h: {
            msg: "Commands:<br><br>\
            move (north|east|south|west|up|down)<br>\
            look<br>\
            look [item]<br>\
            get [item]<br>\
            use [item]<br>\
            meow at [item]<br>\
            inv<br>\
            help<br>\
            clear"
        },
        kill: {
            msg: "Chichien is too nice to do that, but apparently you aren't"
        },
        i: {
            inv: 1
        },
        l: {
            msg: "You aren't entirely sure where you are",
            cmd: {
                i: {
                    inv: 1
                }
            }
        },
        m: {
            msg: "Where do you want to go?",
            cmd: {
                n: {
                    msg: "You can't go that way"
                },
                e: {
                    msg: "You can't go that way"
                },
                s: {
                    msg: "You can't go that way"
                },
                w: {
                    msg: "You can't go that way"
                },
                u: {
                    msg: "You can't go that way"
                },
                d: {
                    msg: "You can't go that way"
                }
            }
        },
        g: {
            msg: "What do you want to get?",
            cmd: {
                ".*": {
                    msg: "You can't get that. Chichien just has paws, I'm not sure what you expect"
                }
            }
        },
        meow: {
            msg: "What do you want to meow at?",
            cmd: {
                ".*": {
                    msg: "It doesn't respond :("
                }
            }
        },
        u: {
            msg: "What do you want to use?",
            cmd: {
                "bed": {
                    msg: "It's too uncomfortable"
                },
                ".*": {
                    msg: "Chichien is confused and can't do that"
                }
            }
        },
        give: {
            msg: "You can't do that"
        }
    },

    locations: {
        kitchen: {
            cmd: {
                l: {
                    msg2: "You're in the kitchen, it gets pretty loud here sometimes, but the sun is shining through the window and is very warm.<br>\
                    N: The dining room<br>\
                    S: There's a door leading outside<br>\
                    - The sun is shining onto the floor",
                    clear: 1,
                    cmd: {
                        "sun": {
                            msg: "The sun looks very warm and inviting"
                        }
                    }
                },
                m: {
                    cmd: {
                        "(s|outside)": {
                            if: {
                                cond: "You have eaten food",
                                if: {
                                    cond: "You have had a drink",
                                    if: {
                                        cond: "You are well rested",
                                        msg: "You are ready. You wander over and meow at baba until he lets you outside",
                                        dest: Locations.outside
                                    },
                                    else: {
                                        msg: "You're not ready to go outside yet, you need to be well fed, have a drink, and rest first",
                                    }
                                },
                                else: {
                                    msg: "You're not ready to go outside yet, you need to be well fed, have a drink, and rest first",
                                }
                            },
                            else: {
                                msg: "You're not ready to go outside yet, you need to be well fed, have a drink, and rest first",
                            }
                        },
                        "(n|dining)": {
                            msg: "You go into the dining room",
                            dest: Locations.dining_room
                        }
                    }
                },
                u: {
                    cmd: {
                        "sun": {
                            msg: "You sit in the sun. It's very warm and nice. Just as you start to relax, the dishwasher turns on and you freak out and run to the dining room.",
                            dest: Locations.dining_room
                        }
                    }
                }
            }
        },

        outside: {
            cmd: {
                l: {
                    msg: "It's a pretty nice day! Not cold enough to form the terrible wet white fluff, but not too hot that shade is required. You survey the landscape of infinite litterbox, and decide that the garden is an excellent spot.<br>\
                    N: You can go back inside<br>\
                    S: You can go on an adventure into the forest.<br> \
                    W: You can go around front<br>\
                    - There is a catnip plant growing in the garden",
                    clear: 1,
                    cmd: {
                        "forest": {
                            msg: "The forest is fun to play in, you like chasing leaves"
                        },
                        "catnip": {
                            msg: "The plant smells good"
                        }
                    }
                },
                m: {
                    cmd: {
                        "(n|kitchen)": {
                            msg: "After some waiting around, you convince baba to let you back in.",
                            dest: Locations.kitchen
                        },
                        "(s|forest)": {
                            msg: "You journey off into the forest, and after having a good time and chase some squirrels, you realize you actually have zero idea where you are. \
                            You sit down and meow until nighttime... when the wild turkey attacks.",
                            end: 1
                        },
                        "(w|front|path)": {
                            msg: "You are immediately startled by a leaf in the wind, and you bolt the nearest tree.<br>\
                            You climb and you climb until you can't climb anymore. You look down. You're so high! You feel accomplished.<br><br><br>\
                            You can't get down.",
                            end: 3
                        }
                    }
                },
                g: {
                    cmd: {
                        "catnip": {
                            msg: "The catnip is fantastic, it makes you happy. You begin to loose control, and you freak out. You run in circles for 8 minutes straight, attacking leaves and fruitlessly chasing birds. \
                            Eventually you calm down. You survey your surroundings, and find you are exactly where you started"
                        }
                    }
                }
            }
        },

        dining_room: {
            cmd: {
                l: {
                    msg: "You're in the dining room, where the food and water bowls are. You like to sneak up on lulu when she's eating, but she isn't here right now.<br>\
                    N: The entryway<br>\
                    S: The kitchen<br>\
                    W: The office<br>\
                    D: The basement, but you don't need to go down there<br>\
                     - There's food here<br>\
                     - There's water here",
                    clear: 1,
                    cmd: {
                        "water": {
                            msg: "This water is not good enough for chichien"
                        },
                        "food": {
                            msg: "The food looks tasty"
                        }
                    }
                },

                m: {
                    cmd: {
                        "(n|entryway|entry)": {
                            msg: "You go to the entryway",
                            dest: Locations.entryway
                        },
                        "(s|kitchen)": {
                            msg: "You wander into the kitchen",
                            dest: Locations.kitchen
                        },
                        "(w|office)": {
                            msg: "You go to the office",
                            dest: Locations.office
                        },
                        "(d|downstairs)": {
                            msg: "Down there is just the pathetic litter pan, that's not good enough for chichien. You sit at the top of the stairs for a while contemplating cat things"
                        }
                    }
                },

                g: {
                    cmd: {
                        "food": {
                            if: {
                                cond: "You have eaten food",
                                msg: "You've already eaten food, but you force yourself to eat more anyway.",
                                inc: "You have eaten food"
                            },
                            else: {
                                msg: "You eat some of the food, you're not as hungry anymore",
                                get: {
                                    item: "You have eaten food",
                                    data: 1
                                }
                            }
                        },
                        "water": {
                            msg: "The water here is gross, you don't want to drink it. Your water has to be *sophisticated*"
                        }
                    }
                }
            }
        },

        office: {
            cmd: {
                l: {
                    msg: "You're in the office, baba is here working on his laptop. You like baba, baba gives nice pets.<br>\
                    N: Living room<br>\
                    E: Dining room<br>\
                    - Baba is here",
                    clear: 1,
                    cmd: {
                        "baba": {
                            msg: "Baba is watching the blinking lights on the laptop"
                        }
                    }
                },
                meow: {
                    cmd: {
                        "baba": {
                            msg: "You meow at baba, he turns around and makes weird baby noises at you and picks you up. You can see his computer, type 'watch' to look at it."
                        }
                    }
                },
                u: {
                    cmd: {
                        "baba": {
                            msg: "You jump up and sit on babas lap. You can see his computer, type 'watch' to look at it."
                        }
                    }
                },
                watch: {
                    msg: "The more you watch, the more enthralled you become. Pictures are moving around the screen! It's very entertaining for a cat. You lose your mind to this hypnotic state.",
                    end: 2
                },
                m: {
                    cmd: {
                        "(n|living)": {
                            msg: "You go over to the living room",
                            dest: Locations.living_room
                        },
                        "(e|dining)": {
                            msg: "You go to the dining room",
                            dest: Locations.dining_room
                        }
                    }
                },
            }
        },

        living_room: {
            cmd: {
                l: {
                    msg: "You are in the living room, one of your favorites! Mumu is sleeping in her cat bed. There's an empty glass on the table.<br>\
                    N: The window<br>\
                    E: Entryway<br>\
                    S: The office<br>\
                    - Mumu is here<br>\
                    - There's an empty glass on the table.",
                    clear: 1,
                    cmd: {
                        "mumu": {
                            msg: "Mumu looks sad"
                        },
                        "water": {
                            msg: "The glass is empty :("
                        },
                        "window": {
                            msg: "You look out the window and chatter at some birds. You know you can't catch them, but it's fun to watch anyways"
                        }
                    }
                },
                meow: {
                    cmd: {
                        "mumu": {
                            msg: "You meow at mumu, she replies:<br><br>\
                            \"My meow meow's gone awayyy<br>\
                            I'll now be sad throughout the day!<br>\
                            There's just nothing else to say!<br>\
                            Meow meow's goneeee, meow meow's goneeeee!\""
                        }
                    }
                },
                g: {
                    cmd: {
                        "water": {
                            msg: "The glass is empty, so you can't drink from it. You meow at baba, but he's too \"busy\" watching the blinking lights"
                        }
                    }
                },
                v: {
                    cmd: {
                        "mumu": {
                            msg: "What do you want to give mumu?",
                            cmd: {
                                "sock": {
                                    if: {
                                        cond: "A sock",
                                        msg: "You give mumu the sock, and she is instantly comforted. She thanks you by telling you how to finally defeat the wretched lulu<br><br>\
                                    \"Mbpthh mfthh mphh mmm pfhht mbt mbewow...\"<br><br>\
                                    ...prehaps her mouth was too full",
                                        get: {
                                            item: "A sock",
                                            data: 0
                                        }
                                    },
                                    else: {
                                        msg: "You don't have a sock"
                                    }
                                }
                            }
                        }
                    }
                },
                m: {
                    cmd: {
                        "(e|entry)": {
                            msg: "You go to the entryway",
                            dest: Locations.entryway
                        },
                        "(s|office)": {
                            msg: "You gallop as fast as you possibly can to the office. Very fun",
                            dest: Locations.office
                        },
                        "(n|window)": {
                            msg: "You look out the window and chatter at some birds. You know you can't catch them, but it's fun to watch anyways"
                        }
                    }
                },
                break: {
                    msg: "What do you want to break?",
                    cmd: {
                        water: {
                            if: {
                                cond: "broken",
                                msg: "The glass is already on the ground"
                            },
                            else: {
                                msg: "You push the empty glass off the table and it falls onto the carpet, it doesn't break",
                                get: {
                                    item: "broken",
                                    data: -1
                                }
                            }
                        },
                        window: {
                            msg: "Chichien is not stronk enough"
                        }
                    }
                }
            }
        },

        entryway: {
            cmd: {
                l: {
                    if: {
                        cond: "lulu",
                        msg: "You're in the entryway. It's pretty dirty. The door leads outside.<br>\
                        N: Outside<br>\
                        E: Hallway<br>\
                        S: Dining room<br>\
                        W: Living room",
                        clear: 1
                    },
                    else: {
                        msg: "You're in the entryway. It's pretty dirty. The door leads outside. You see the dreaded lulu at the end of the hall, she trots into emily's room<br>\
                        E: Hallway<br>\
                        S: Dining room<br>\
                        W: Living room",
                        clear: 1,
                        get: {
                            item: "lulu",
                            data: -1
                        }
                    },
                },
                m: {
                    cmd: {
                        "(n|outside)": {
                            if: {
                                cond: "You have eaten food",
                                if: {
                                    cond: "You have had a drink",
                                    if: {
                                        cond: "You are well rested",
                                        msg: "You are ready. You are excited. You are so excited. You bound over and meow at baba until he lets you outside. As soon as you're out you bolt for the forest and climb up a tree.<br>\
                                        You climb and you climb until you can't climb anymore. You look down. You're so high! You feel accomplished.<br><br><br>\
                                        You can't get down.",
                                        end: 3
                                    },
                                    else: {
                                        msg: "You're not ready to go outside yet, you need to be well fed, have a drink, and rest first",
                                    }
                                },
                                else: {
                                    msg: "You're not ready to go outside yet, you need to be well fed, have a drink, and rest first",
                                }
                            },
                            else: {
                                msg: "You're not ready to go outside yet, you need to be well fed, have a drink, and rest first",
                            }
                        },
                        "(s|dining)": {
                            msg: "You go into the dining room",
                            dest: Locations.dining_room
                        },
                        "(w|living)": {
                            msg: "You see a yellow ball, and bat it into the living room. You lose it again after 0.01ms",
                            dest: Locations.living_room
                        },
                        "(e|hall|hallway)": {
                            msg: "You go down the hallway a little bit.",
                            dest: Locations.hallway1
                        }
                    }
                },
            }
        },

        hallway1: {
            cmd: {
                l: {
                    msg: "You are in the middle of the hallway, James' door is closed. You suspect he's in there, but doesn't want to be bothered right now.<br>\
                        E: Hallway<br>\
                        S: Bathroom<br>\
                        W: Entryway",
                    clear: 1
                },
                m: {
                    cmd: {
                        "(e|hall|hallway)": {
                            msg: "You continue down the hallway",
                            dest: Locations.hallway2
                        },
                        "(s|bathroom)": {
                            msg: "You journey into the bathroom",
                            dest: Locations.bathroom
                        },
                        "(w|entry|entryway)": {
                            msg: "You go to the entryway",
                            dest: Locations.entryway
                        }
                    }
                },
                meow: {
                    cmd: {
                        "james": {
                            msg: "He doesn't respond, oh well"
                        }
                    }
                }
            }
        },

        hallway2: {
            cmd: {
                l: {
                    msg: "You are at the end of the hallway, Emily's door is next to you, and you see Lulu's ugly face peering at you from on top of the bed<br>\
                        N: Emily's room<br>\
                        S: Meow's room<br>\
                        W: Hallway",
                    clear: 1,
                    cmd: {
                        "lulu": {
                            msg: "You don't like Lulu very much, probably best to keep your distance"
                        },
                        "emily": {
                            msg: "She's snickering at you from her bed"
                        }
                    }
                },
                m: {
                    cmd: {
                        "(n|emilys|emily|lulu)": {
                            msg: "You enter Emily's room... very cautiously... and then out of nowhere Lulu leaps off the bed and attacks you. You're too nice to hurt even a monster like her, so you succumb to your fate...",
                            end: 4
                        },
                        "(s|meow|master|bedroom)": {
                            msg: "You enter the master bedroom",
                            dest: Locations.meow_room
                        },
                        "(w|hall|hallway)": {
                            msg: "You go down the hallway",
                            dest: Locations.hallway1
                        }
                    }
                },
                meow: {
                    cmd: {
                        "lulu": {
                            msg: "She mockingly meows back at you"
                        },
                        "emily": {
                            msg: "She calls you stupid, as usual..."
                        }
                    }
                }
            }
        },

        bathroom: {
            cmd: {
                l: {
                    msg: "You are in the bathroom. You can see the large, white bowl in the corner.<br>\
                    N: The hallway<br>\
                    E: Meow's bedroom<br>\
                    - There's a toilet here",
                    clear: 1,
                    cmd: {
                        "water": {
                            msg: "Mmmm, toilet water"
                        }
                    }
                },
                m: {
                    cmd: {
                        "(n|hall|hallway)": {
                            msg: "You go to the hallway",
                            dest: Locations.hallway1
                        },
                        "(e|meow|master|bedroom)": {
                            msg: "You go into Meow's room",
                            dest: Locations.meow_room
                        }
                    }
                },
                g: {
                    cmd: {
                        "water": {
                            msg: "You jump up on the toilet and have a good long drink. You feel very refreshed! Best water in the house.",
                            get: {
                                item: "You have had a drink",
                                data: 1
                            }
                        }
                    }
                }
            }
        },

        meow_room: {
            cmd: {
                l: {
                    msg: "You are in Meow's room, she has lots of blankets. You see your sleeping bag nest in the corner of the room.<br>\
                    N: Hallway<br>\
                    W: The bathroom<br>\
                    - Your sleeping bag nest is here<br>\
                    - There's a pile of socks on the ground here",
                    clear: 1,
                    cmd: {
                        "bed": {
                            msg: "It's very cozy and warm"
                        }
                    }
                },
                g: {
                    cmd: {
                        "sock": {
                            if: {
                                cond: "A sock",
                                msg: "You already have a sock, you can't carry another"
                            },
                            else: {
                                msg: "You pick up a sock, it smells like meow meow",
                                get: {
                                    item: "A sock",
                                    data: 1
                                }
                            }
                        }
                    }
                },
                m: {
                    cmd: {
                        "(n|hall|hallway)": {
                            msg: "You go to the hallway",
                            dest: Locations.hallway2
                        },
                        "(w|bathroom)": {
                            msg: "You go to the bathroom",
                            dest: Locations.bathroom
                        }
                    }
                },
                u: {
                    cmd: {
                        "bed": {
                            msg: "You curl up in your bed and take a nap. You dream that lulu got trapped outside and you never saw her again. Ah what a good dream, you feel much more rested now!",
                            get: {
                                item: "You are well rested",
                                data: 1
                            }
                        }
                    }
                }
            }
        }
    }
};

Aliases = {
    "(move|go)": "m",
    "north": "n",
    "south": "s",
    "east": "e",
    "west": "w",
    "up": "u",
    "down": "d",
    "^n$": "m n",
    "^s$": "m s",
    "^e$": "m e",
    "^w$": "m w",
    "^u$": "m u",
    "^d$": "m d",
    "look": "l",
    "(halp|help)": "h",
    "(inventory|inv)": "i",
    "^l i$": "i",
    "(glass|toilet)": "water",
    "(give|provide|throw)": "v",
    "(pick up|get|grab|obtain|eat|drink)": "g",
    "^(sleep|rest|slep)$": "u bed",
    "(nest|sleeping bag|floor)": "bed",
    "(use|interact|sleep|slep|rest|sit|climb|nap)": "u",
    "(talk|say)": "meow",
    "(clear|cls)": "clr",
    "(murder|stab|attack)": "kill",
    "(smash|destroy|push)": "break",
    "(jayjay|jaja)": "james",
    "emmy": "emily",
    "lucy": "lulu",
    "moppet": "mumu",
    "lucky": "chichien",
    "\\b(on|in|with|to|for|at|from|the|about|into|near|after|as|like|since|after|off|above|below|and|but)\\b": "",
};
