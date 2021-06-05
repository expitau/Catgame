Locations = Object.freeze({
    kitchen: "kitchen",
    outside: "outside",
    MrGoose: "MrGoose",
    living_room: "living_room",
    dining_room: "dining_room",
    office: "office",
    entryway: "entryway",
    hallway1: "hallway1",
    hallway2: "hallway2",
    bathroom: "bathroom",
    meow_room: "meow_room",
    hell: "hell",
    heaven: "heaven",
    basement: "basement",
    nathan1: "nathan1",
    nathan2: "nathan2",
    hallway3: "hallway3",
    Emily: "Emily",
    Headquarters: "Headquarters",
    Spain: "Spain",
    Assassin: "Assassin",
    SaveCats: "SaveCats",
    AliyahRoom2: "AliyahRoom2",
    AliyahHallway: "AliyahHallway",
    ZaraRoom: "ZaraRoom",
    HomeHardware: "HomeHardware",
    DecisionRoom: "DecisionRoom",
    WonderPetSchoolhouse: "WonderPetSchoolhouse",
    UnluckyEncounter: "UnluckyEncounter",

});

WorldData = {
    msg: "Chichien's brain is too smol to understand :(",
    cmd: {
        clr: {
            clear: 1
        },
        kill: {
            msg: "What would you like to kill?",
            if: {
                cond: "licence to kill revoked",
                msg: "Since your licence was revoked, you don't feel like you deserve to kill things :(",
                cmd: {
                    ".*": {
                        msg: "Since your licence was revoked, you don't feel like you deserve to kill things :("
                    }
                }
            },
            else: {
                msg: "What would you like to kill?",
                cmd: {
                    ".*": {
                        if: {
                            cond: "keeps trying to kill the unkillable...", count: 7,
                            msg: "I give up, you're too murderous for this game.",
                            end: 273
                        },
                        else: {
                            if: {
                                cond: "keeps trying to kill the unkillable...", count: 5,
                                msg: "gosh darn it! Stop trying to kill things that aren't killable!",
                                inc: "keeps trying to kill the unkillable..."
                            },
                            else: {
                                if: {
                                    cond: "keeps trying to kill the unkillable...",
                                    msg: "You try to kill it, but you can't. It seems that an impenetrable force field has formed around it. Darn it!",
                                    inc: "keeps trying to kill the unkillable..."
                                },
                                else: {
                                    msg: "You try to kill it, but you can't. It seems that an impenetrable force field has formed around it. Darn it!",
                                    get: {
                                        item: "keeps trying to kill the unkillable...",
                                        data: -1
                                    }
                                },
                            },
                        },
                    },
                },
            },
        },
        "Headquarters": {
            if: {
                cond: "licence to kill",
                msg: "You go to headquarters.",
                dest: Locations.Headquarters
            },
            else: {
                msg: "?"
            }
        },
        "(counting|c)": {
            if: {
                cond: "thing", count: 15,
                msg: "yay you can count to 15!",
                inc: "thing",
                end: 15
            },
            else: {
                msg: "count to fifteen!",
                inc: "thing",
            }
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
        clear<br>\
        hint-> hopefully very helpful for if you don't know what to do, the hint is a specific list of possible commands that changes depending on where you are in the game"
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
                d: {
                    msg: "You go to hell",
                    dest: Locations.hell
                },
                u: {
                    msg: "You have ascended to Leprechaun Heaven! There are leprechauns frolicking.",
                    dest: Locations.heaven
                },
            }
        },
        g: {
            msg: "What do you want to get?",
            cmd: {
                ".*": {
                    msg: "You can't get that"
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
                ".*": {
                    msg: "You can't do that"
                }
            }
        },
        "secret": {
            if: {
                cond: "secrety secrets", count: 3,
                msg: "*whispers* My secret is that I've always dreamed of being a seahorse.",
                end: 799
            },
            else: {
                if: {
                    cond: "secrety secrets",
                    msg: "Do you really think something's going to happen?",
                    inc: "secrety secrets"
                },
                else: {
                    msg: "Really?",
                    get: {
                        item: "secrety secrets",
                        data: -1
                    },
                },
            },
        },
        "Chichien's": {
            cmd: {
                "brain": {
                    cmd: {
                        "is": {
                            cmd: {
                                "too": {
                                    cmd: {
                                        "smol": {
                                            cmd: {
                                                "understand": {
                                                    if: {
                                                        cond: "warning 5",
                                                        msg: "That's it! I will not tolerate this anymore! >:(",
                                                        end: 9
                                                    },
                                                    else: {
                                                        if: {
                                                            cond: "warning 4",
                                                            msg: "Don't mock me :(",
                                                            get: {
                                                                item: "warning 5",
                                                                data: -1
                                                            },
                                                            inc: "warning",
                                                        },
                                                        else: {
                                                            if: {
                                                                cond: "warning 3",
                                                                msg: "Don't mock me :(",
                                                                get: {
                                                                    item: "warning 4",
                                                                    data: -1
                                                                },
                                                                inc: "warning"
                                                            },
                                                            else: {
                                                                if: {
                                                                    cond: "warning 2",
                                                                    msg: "Don't mock me :(",
                                                                    get: {
                                                                        item: "warning 3",
                                                                        data: -1
                                                                    },
                                                                    inc: "warning"
                                                                },
                                                                else: {
                                                                    if: {
                                                                        cond: "warning",
                                                                        msg: "Don't mock me :(",
                                                                        get: {
                                                                            item: "warning 2",
                                                                            data: -1
                                                                        },
                                                                        inc: "warning"
                                                                    },
                                                                    else: {
                                                                        msg: "Don't mock me :(",
                                                                        inc: "warning"
                                                                    }
                                                                },
                                                            },
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "(mocks|mock)": {
            if: {
                cond: "warning 5",
                msg: "That's it! I will not tolerate this anymore! >:(",
                end: 9
            },
            else: {
                if: {
                    cond: "warning 4",
                    msg: "Don't mock me :(",
                    get: {
                        item: "warning 5",
                        data: -1
                    },
                    inc: "warning",
                },
                else: {
                    if: {
                        cond: "warning 3",
                        msg: "Don't mock me :(",
                        get: {
                            item: "warning 4",
                            data: -1
                        },
                        inc: "warning"
                    },
                    else: {
                        if: {
                            cond: "warning 2",
                            msg: "Don't mock me :(",
                            get: {
                                item: "warning 3",
                                data: -1
                            },
                            inc: "warning"
                        },
                        else: {
                            if: {
                                cond: "warning",
                                msg: "Don't mock me :(",
                                get: {
                                    item: "warning 2",
                                    data: -1
                                },
                                inc: "warning"
                            },
                            else: {
                                msg: "No!!!",
                                inc: "warning"
                            }
                        },
                    },
                }
            },
            cmd: {
                "you": {
                    if: {
                        cond: "warning 5",
                        msg: "That's it! I will not tolerate this anymore! >:(",
                        end: 9
                    },
                    else: {
                        if: {
                            cond: "warning 4",
                            msg: "Don't mock me :(",
                            get: {
                                item: "warning 5",
                                data: -1
                            },
                            inc: "warning",
                        },
                        else: {
                            if: {
                                cond: "warning 3",
                                msg: "Don't mock me :(",
                                get: {
                                    item: "warning 4",
                                    data: -1
                                },
                                inc: "warning"
                            },
                            else: {
                                if: {
                                    cond: "warning 2",
                                    msg: "Don't mock me :(",
                                    get: {
                                        item: "warning 3",
                                        data: -1
                                    },
                                    inc: "warning"
                                },
                                else: {
                                    if: {
                                        cond: "warning",
                                        msg: "Don't mock me :(",
                                        get: {
                                            item: "warning 2",
                                            data: -1
                                        },
                                        inc: "warning"
                                    },
                                    else: {
                                        msg: "No!!!",
                                        inc: "warning"
                                    }
                                },
                            },
                        }
                    }
                }
            }
        }
    },
    locations: {
        kitchen: {
            cmd: {
                l: {
                    img: "Images/kitchen.jpeg",
                    msg: "You're in the kitchen, it gets pretty loud here sometimes, but the sun is shining through the window and is very warm.<br>\
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
                        s: {
                            if: {
                                cond: "food",
                                if: {
                                    cond: "water",
                                    if: {
                                        cond: "rest",
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
                        n: {
                            msg: "You go into the dining room",
                            dest: Locations.dining_room
                        }
                    }
                },
                u: {
                    cmd: {
                        "sun": {
                            img: "Images/ChichienSun.jpeg",
                            msg: "You sit in the sun. It's very warm and nice. Just as you start to relax, the dishwasher turns on and you freak out and run to the dining room.",
                            dest: Locations.dining_room
                        }
                    }
                },
                "hint": {
                    msg: "This room isn't too complicated. Here are all your possible commands in this room:<br><br>\
                    look<br>\
                    move (north|south|up|down)<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                }
            }
        },
        outside: {
            cmd: {
                "hint": {
                    msg: "Important: available options change based on what you've done here, AKA doing things unlocks other things. If you type hint again after doing something, you may see different commands available. Alright, here they are: <br><br>\
                    look<br>\
                    move (north|south|west|up|down)<br>\
                    catnip<br>\
                    squirrel<br>\
                    climb<br>\
                    kill squirrel<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>"
                },
                "catnip": {
                    msg: "You wander around the forest until you come across a familiar-looking plant. It smells amazing! You roll around in it and eat some of it, thoroughly enjoying yourself. After a while, you realize that in your...inebriated state... you'd accidentally lifted the house off the ground with your telekinetic powers! Oops. You blink, restoring it back to how it was.",
                },
                "squirrel": {
                    msg: "Frolicking about in the forest, you come across a squirrel! This is your chance to contribute to the family. Nathan will love it! You bolt after it, but it climbs a tree quickly. You contemplate following, but you don't really want to get stuck up there...",
                },
                "kill": {
                    cmd: {
                        "squirrel": {
                            if: {
                                cond: "licence to kill revoked",
                                msg: "Killing things doesn't feel so fun anymore..."
                            },
                            else: {
                                msg: "You find a squirrel and kill it! You can put this on Nathan's pillow!",
                                inc: "squirrel"
                            }
                        }
                    },
                },
                "climb": {
                    msg: "You hurtle straight up the tree, giving no thought to the consequences. Once you're up there, you realize that you can't get back down. You wait there until Baba comes looking for you and brings you back inside (you are now in the kitchen).",
                    dest: Locations.kitchen
                },
                l: {
                    msg: "It's a pretty nice day! Not cold enough to form the terrible wet white fluff, but not too hot that shade is required. You survey the landscape of infinite litterbox, and decide that the garden is an excellent spot. Perhaps if you look around a little, you'll find a squirrel to chase, or even better, some catnip!<br>\
                N: You can go back inside<br>\
                S: You can go on an adventure into the forest.<br>\
                W: To the west, there's just the patio. Pretty boring.",
                    clear: 1,
                    cmd: {
                        "forest": {
                            msg: "The forest is fun to play in, you like chasing leaves"
                        }
                    }
                },
                m: {
                    cmd: {
                        n: {
                            msg: "After some waiting around, you convince baba to let you back in.",
                            dest: Locations.kitchen
                        },
                        s: {
                            msg: "You journey off into the forest, and after having a good time chasing some squirrels, you realize you actually have zero idea where you are. \
                        You sit down and meow until nighttime... when the wild turkey attacks.",
                            end: 1
                        },
                        w: {
                            msg: "You look to the west and see the patio. Trotting off in that direction, you realize that there is a goose sitting on the tile! Geese are big birds... what should you do? <br><br>As you are thinking this, the goose seems to notice you. It honks at you. Is that a challenge? You think to yourself. <br><br>Do you want to fight the goose, venture into the forest, or turn tail and run back into the house? <br><br>respond \"fight\", \"south\" (for outdoor adventure time), or \"north\" (run back inside).",
                        },
                    },
                },
                "fight": {
                    msg: "As you approach, you realize that geese are somewhat more intimidating than you remember. Good thing you're not a normal cat! You use your telekinetic powers to lift the goose off the ground. Honking in surprise, the goose seems to be calling for help.<br><br>A few seconds later, you start to notice the ground shaking slightly. This concerns you, since several of your littermates died in an earthquake. Your telekinetic powers were the only reason you and the rest of your littermates didn't die that day...<br><br>To your utter bewilderment, an enormous goose appears, thundering through the forest toward you. You drop the now-miniscule-seeming goose onto the patio (it is offended and honks at you) and gasp at the gigantic bird. It stands about tall enough to reach the top of the roof on the house. You wonder to yourself how it keeps itself hidden, and seemingly in response to your question, it shape-shifts into a catlike figure. <br><br>\"Hello\". The creature says to you.<br><br>\"Um...hello...\" You reply cautiously, very aware that it is not a wise idea to get on the bad side of this creature. You may have nine lives, but you've used up a fair number of those (you have a complicated past set of lives)...<br><br>\"I'm going to have to ask you to not bother my geese.\" The creature states. You nod furiously in response, eager to get out of this without injury. \"You see, the geese are special to me, and the fact that you would try to kill or at least injure one of them...it just breaks my heart\" It continues. <br><br>You are now thoroughly terrified. You should never have tried to leave the house!<br><br>\"I agree, you should have stayed inside. Stay away from my children.\" It replies. What \is\ this creature? You wonder to yourself. \"They call me Mr. Goose\" The creature answers. \"stop calling me an \'it,\' I use he/him pronouns.\" The goose snaps.<br><br>\"Alright\" It concedes. \"I will allow you to leave, since I can read your mind and I am reasonably sure that you will never harm one of my little geese again.\"<br><br>\"Oh, and I almost forgot.\" Mr. Goose adds. \"I can't let you tell everyone that I exist!\" The goose-cat waves a paw and transforms back into his goose form. You wonder what exactly what he means. \"I can't let you tell everyone that I exist\" Perhaps if you try to tell Lulu or Mumu anything you saw, you won't be able to! Or maybe it'll give you amnesia! No, that can't be it, you can still remember what just happened. I suppose next time you interact with one of the other cats, you'll have to make sure that you can talk about Mr. Goose. <br><br> Shaken by the whole experience, you have two choices ahead of you. Choose peace, choose violence, or bow down and worship Mr. Goose? (You could also run off and chase squirrels or find some catnip as well.)",
                    dest: Locations.MrGoose
                },
            },
        },
        MrGoose: {
            cmd: {
                "hint": {
                    msg: "Confused, huh? Alright, here are the available commands: <br><br>\
                    look<br>\
                    move (north|south|up|down)<br>\
                    catnip<br>\
                    squirrel<br>\
                    climb<br>\
                    kill squirrel<br>\
                    worship<br>\
                    violence<br>\
                    peace<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>",
                },
                l: {
                    msg: "Mr. Goose looms above you. Choose peace, choose violence, or do you worship Mr. Goose?",
                    clear: 1
                },
                "catnip": {
                    msg: "You wander around the forest until you come across a familiar-looking plant. It smells amazing! You roll around in it and eat some of it, thoroughly enjoying yourself. After a while, you realize that in your...inebriated state... you'd accidentally lifted the house off the ground with your telekinetic powers! Oops. You blink, restoring it back to how it was.",
                    dest: Locations.outside
                },
                "squirrel": {
                    msg: "Frolicking about in the forest, you come across a squirrel! This is your chance to contribute to the family. Meow and Baba will love it! You bolt after it, but it climbs a tree quickly. You contemplate following, but you don't really want to get stuck up there...",
                    dest: Locations.outside
                },
                "kill": {
                    cmd: {
                        "squirrel": {
                            if: {
                                cond: "licence to kill revoked",
                                msg: "Killing things doesn't feel so fun anymore..."
                            },
                            else: {
                                msg: "You find a squirrel and kill it! You can put this on Nathan's pillow!",
                                inc: "squirrel"
                            }
                        }
                    },
                },
                m: {
                    cmd: {
                        n: {
                            msg: "You run away, back to the kitchen doorway. You meow at the door until Baba lets you back in. He's not sure why you look so shaken...",
                            dest: Locations.kitchen
                        },
                        s: {
                            msg: "You journey off into the forest, and after having a good time chasing some squirrels, you realize you actually have zero idea where you are. \
                        You sit down and meow until nighttime... when the wild turkey attacks.",
                            end: 1
                        },
                    },
                },
                "worship": {
                    msg: "You have been put in your place by Mr. Goose, and you now realize that you should not have tried to fight him in the first place. As you look up at the great bird, you recognize that he is all-powerful and while there is not much you can control in life, it is a certainty that Mr. Goose is great. Perhaps that is all that is truly important. Reading your mind, the all-powerful Mr. Goose seems to smile at you.<br><br>\
                    \"Would you like to join my goose cult?\" Mr. Goose offers.<br><br>\
                    You are taken aback, but it sounds like a pretty good suggestion. There's nothing interesting happening back in your house, time for an adventure.<br><br>\
                    You join a group of geese and walk off into the forest. You look back at the house to find that Baba is looking out the window, shocked to see a house-height goose walking off into the forest with his cat. You laugh to yourself. No one will believe him when he explains how he lost the cat. <br><br>You're very excited about your new goose friends!",
                    end: 6,
                },
                "violence": {
                    msg: "Shaking off everything Mr. Goose has said, you lunge at him. If you're fast enough, maybe you'll get him, you think to yourself.<br><br>It seems you were wrong. Where are you? You see leprechauns frolicking...(respond \"Where am I?\")",
                    dest: Locations.heaven,
                },
                "peace": {
                    msg: "You meekly tread back inside...<br><br>You're shaking slightly as you walk inside. Mumu sees you as she passes by and asks what's wrong. You start to say you just met an enormous goose named Mr. Goose, but the words won't make their way out of your mouth. <br><br>\"Nothing...\" You reply. <br>She shrugs and moves on.",
                    dest: Locations.kitchen,
                },
            },
        },
        dining_room: {
            cmd: {
                "hint": {
                    if: {
                        cond: "lucky hath deleted water",
                        msg: "Alrighty, here are your possible commands: <br><br>\
                        look<br>\
                        look at food<br>\
                        move (north|south|west|up|down)<br>\
                        get food<br>\
                        get water<br>\
                        inv<br>\
                        help<br>\
                        clear<br>\
                        hint"
                    },
                    else: {
                        msg: "Alrighty, here are your possible commands: <br><br>\
                    look<br>\
                    look at water<br>\
                    look at food<br>\
                    move (north|south|west|up|down)<br>\
                    get food<br>\
                    get water<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                    },
                },
                l: {
                    if: {
                        cond: "lucky hath deleted water",
                        img: "Images/DiningRoomNoWater.jpeg",
                        msg: "You're in the dining room, where the food and water bowls are. You like to sneak up on Lulu when she's eating, but she isn't here right now.<br>\
                N: The entryway<br>\
                S: The kitchen<br>\
                W: The office<br>\
                D: The basement<br>\
                 - There's food here<br>\
                 - There's water here",
                        clear: 1,
                        cmd: {
                            "water": {
                                msg: "There is no water"
                            },
                            "food": {
                                msg: "The food looks tasty"
                            }
                        }

                    },
                    else: {
                        img: "Images/DiningRoom.jpeg",
                        msg: "You're in the dining room, where the food and water bowls are. You like to sneak up on Lulu when she's eating, but she isn't here right now.<br>\
                N: The entryway<br>\
                S: The kitchen<br>\
                W: The office<br>\
                D: The basement<br>\
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
                },
                m: {
                    cmd: {
                        s: {
                            msg: "You wander into the kitchen",
                            dest: Locations.kitchen
                        },
                        n: {
                            msg: "You go to the entryway",
                            dest: Locations.entryway
                        },
                        w: {
                            msg: "You go to the office",
                            dest: Locations.office
                        },
                        d: {
                            msg: "You venture down the stairs.",
                            dest: Locations.basement
                        }
                    }
                },
                g: {
                    cmd: {
                        "food": {
                            msg: "You eat some of the food, you're not as hungry anymore",
                            inc: "food",
                        },
                        "water": {
                            if: {
                                cond: "they tried to make me drink gross water", count: 5,
                                msg: "If you're going to be like that, I'll just make it so the water isn't there anymore! (look around)",
                                get: {
                                    item: "lucky hath deleted water",
                                    data: -1
                                }
                            },
                            else: {
                                if: {
                                    cond: "they tried to make me drink gross water",
                                    msg: "Stop trying to make me drink it, it's gross!!!",
                                    inc: "they tried to make me drink gross water"
                                },
                                else: {
                                    msg: "The water here is gross, you don't want to drink it. Your water has to be *sophisticated*",
                                    get: {
                                        item: "they tried to make me drink gross water",
                                        data: -1
                                    }
                                },
                            },
                        }
                    }
                },
                "food": {
                    msg: "You eat some of the food, you're not as hungry anymore",
                    inc: "food",
                },
                "water": {
                    if: {
                        cond: "they tried to make me drink gross water", count: 5,
                        msg: "If you're going to be like that, I'll just make it so the water isn't there anymore! (look around)",
                        get: {
                            item: "lucky hath deleted water",
                            data: -1
                        }
                    },
                    else: {
                        if: {
                            cond: "they tried to make me drink gross water",
                            msg: "Stop trying to make me drink it, it's gross!!!",
                            inc: "they tried to make me drink gross water"
                        },
                        else: {
                            msg: "The water here is gross, you don't want to drink it. Your water has to be *sophisticated*",
                            get: {
                                item: "they tried to make me drink gross water",
                                data: -1
                            }
                        },
                    },
                }
            }
        },
        office: {
            cmd: {
                "hint": {
                    if: {
                        cond: "chose kill Baba",
                        msg: "Here ya go, here are the possible commands: <br><br>\
                    revive<br>\
                    look<br>\
                    look at Baba<br>\
                    meow at Baba<br>\
                    move (north|east|up|down)<br>\
                    kill Baba<br>\
                    watch (unlocked once you meow at Baba)<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                    },
                    else: {
                        msg: "Here ya go, here are the possible commands (IMPORTANT NOTE: some actions in the room unlock others, so they are not shown here if they have not been unlocked): <br><br>\
                    look<br>\
                    look at Baba<br>\
                    meow at Baba<br>\
                    move (north|east|up|down)<br>\
                    kill Baba<br>\
                    watch (unlocked once you meow at Baba)<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                    },
                },
                l: {
                    if: {
                        cond: "chose kill Baba",
                        img: "Images/OfficeBabaDead.jpeg",
                        msg: "You're in the office, baba is dead.<br>\
                N: Living room<br>\
                E: Dining room<br>\
                - Baba is dead",
                        clear: 1,
                        cmd: {
                            "baba": {
                                msg: "Baba lying dead as the blinking lights play on his laptop. Type \"watch\" to look at it.",
                                get: {
                                    item: "want to watch computer??",
                                    data: -1
                                },
                            }
                        }
                    },
                    else: {
                        img: "Images/Office.jpeg",
                        msg: "You're in the office, baba is here working on his laptop. You like baba, baba gives nice pets.<br>\
                N: Living room<br>\
                E: Dining room<br>\
                - Baba is here",
                        clear: 1,
                        cmd: {
                            "baba": {
                                msg: "Baba is watching the blinking lights on the laptop. Type \"watch\" to look at it.",
                                get: {
                                    item: "want to watch computer??",
                                    data: -1
                                },
                            }
                        }
                    },

                },
                meow: {
                    cmd: {
                        "Baba": {
                            if: {
                                cond: "chose kill Baba",
                                msg: "You meow at his dead body. No response. (\"revive\" if you want)"
                            },
                            else: {
                                msg: "You meow at Baba, he turns around and makes weird baby noises at you and picks you up. You can see his computer, type 'watch' to look at it.",
                                get: {
                                    item: "want to watch computer??",
                                    data: -1
                                },
                            }
                        },
                    }
                },
                kill: {
                    cmd: {
                        "Baba": {
                            if: {
                                cond: "licence to kill revoked",
                                msg: "Killing things doesn't feel so fun anymore..."
                            },
                            else: {
                                if: {
                                    cond: "chose kill baba",
                                    msg: "You can't re-kill him, he's still dead! You can revive him if you want, though. (command is \"revive\")"
                                },
                                else: {
                                    msg: "You approach Baba from behind, slowly stalking up. You leap up to scratch the back of his head with the intent to kill. <br><br>As your claws sink into his flesh, he yelps in pain. As he dies, you wonder if you should revive him. (\"yes\" or \"no\")",
                                    get: {
                                        item: "Baba life/death question",
                                        data: -1
                                    },
                                    inc: "kill point B",
                                    dest: Locations.DecisionRoom
                                }
                            },
                        }
                    },
                },
                u: {
                    cmd: {
                        "baba": {
                            if: {
                                cond: "chose kill Baba",
                                msg: "You can't hop up on a dead body, although you do want to watch the blinking lights...(type \"watch\" to watch)",
                                get: {
                                    item: "want to watch computer??",
                                    data: -1
                                },
                            },
                            else: {
                                msg: "You jump up and sit on babas lap. You can see his computer, type 'watch' to look at it.",
                                get: {
                                    item: "want to watch computer??",
                                    data: -1
                                },
                            }
                        },
                    }
                },
                watch: {
                    if: {
                        cond: "want to watch computer??",
                        msg: "The more you watch, the more enthralled you become. Pictures are moving around the screen! It's very entertaining for a cat. You lose your mind to this hypnotic state.",
                        end: 2
                    },
                    else: {
                        msg: "watch...what?"
                    }

                },
                m: {
                    cmd: {
                        n: {
                            msg: "You go over to the living room",
                            dest: Locations.living_room
                        },
                        e: {
                            msg: "You go to the dining room",
                            dest: Locations.dining_room
                        }
                    }
                },
                "revive": {
                    if: {
                        cond: "chose kill Baba",
                        msg: "You casually rewind time. You watch the blood un-pool itself back into Baba as he comes alive again.",
                        get: {
                            item: "chose kill Baba",
                            data: 0
                        }
                    },
                    else: {
                        msg: "Huh? Revive?"
                    }
                }
            }
        },
        living_room: {
            cmd: {
                "hint": {
                    if: {
                        cond: "chose death Mumu",
                        msg: "Command list time! (for now): <br><br>\
                    revive<br>\
                    look<br>\
                    look at Mumu<br>\
                    meow at Mumu<br>\
                    kill Mumu<br>\
                    get water<br>\
                    look at water<br>\
                    break glass<br>\
                    break window< (NOTE: this is a way to get outside without fulfilling your food/water/rest requirements! Shhh!)br>\
                    move (north|east|south|up|down)<br>\
                    play chess<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                    },
                    else: {
                        msg: "Command list time! (for now): <br><br>\
                    look<br>\
                    Mumu<br>\
                    meow at Mumu<br>\
                    kill Mumu<br>\
                    get water<br>\
                    look at water<br>\
                    break glass<br>\
                    break window< (NOTE: this is a way to get outside without fulfilling your food/water/rest requirements! Shhh!)br>\
                    move (north|east|south|up|down)<br>\
                    play chess<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                    },
                },
                l: {
                    if: {
                        cond: "chose death Mumu",
                        img: "Images/LivingRoomMumuDead.jpeg",
                        msg: "You are in the living room, one of your favorites! Mumu is lying dead in her cat bed. There's an empty glass on the table. There's also a chess board!<br>\
                N: The window<br>\
                E: Entryway<br>\
                S: The office<br>\
                - Mumu is dead<br>\
                - There's an empty glass on the table.",
                        clear: 1,
                        cmd: {
                            "mumu": {
                                if: {
                                    cond: "chose death Mumu",
                                    msg: "You walk over to Mumu to admire your handiwork. You nod approvingly to yourself, but you do feel a little guilt. You can revive her by typing \"revive\" if you want."
                                },
                                else: {
                                    msg: "Mumu looks sad"
                                },
                            },
                        },
                    },
                    else: {
                        img: "Images/LivingRoom.jpeg",
                        msg: "You are in the living room, one of your favorites! Mumu is sleeping in her cat bed. There's an empty glass on the table. There's also a chess board!<br>\
                N: The window<br>\
                E: Entryway<br>\
                S: The office<br>\
                - Mumu is here<br>\
                - There's an empty glass on the table.",
                        clear: 1,
                        cmd: {
                            "mumu": {
                                if: {
                                    cond: "chose death Mumu",
                                    msg: "You walk over to Mumu to admire your handiwork. You nod approvingly to yourself, but you do feel a little guilt. You can revive her by typing \"revive\" if you want."
                                },
                                else: {
                                    msg: "Mumu looks sad"
                                },
                            },
                        },
                    },
                },
                "chess": {
                    if: {
                        cond: "won chess game!",
                        img: "Images/ChessProLucky.jpeg",
                        msg: "You play chess against yourself and win again!",
                        inc: "won chess game!"
                    },
                    else: {
                        img: "Images/ChessProLucky.jpeg",
                        msg: "You use your telekinetic powers to play chess against yourself. Shockingly, you won!",
                        inc: "won chess game!"
                    },
                },
                meow: {
                    cmd: {
                        "mumu": {
                            if: {
                                cond: "chose death Mumu",
                                msg: "You meow at her dead body. Shockingly, there is no response. If you feel remorseful, you can \"revive\" her."
                            },
                            else: {
                                msg: "You meow at Mumu, she replies:<br><br>\
                        \"My meow meow's gone awayyy<br>\
                        I'll now be sad throughout the day!<br>\
                        There's just nothing else to say!<br>\
                        Meow meow's goneeee, meow meow's goneeeee!\""
                            },
                        }
                    }
                },
                break: {
                    cmd: {
                        "water": {
                            if: {
                                cond: "broken before",
                                msg: "You decide to break the glass again. As you watch the glass shatter on the ground, you wait for the leprechaun to show up again to rewind time. It doesn't show up. You sigh. You have to do *everything* around here! You rewind time yourself to fix the glass."
                            },
                            else: {
                                msg: "Your paw strikes the glass surface and you watch the glass fall to the ground slowly. You feel a sense of power emerge as it shatters across the ground. You step in the glass shards. Good thing you're invincible to injury. A normal cat would have been cut by the glass! <br><br>Suddenly, a leprechaun pops out of nowhere and rewinds time for you. Good thing it's fixed now - Meow would probably be pretty mad at you. Oh well, it was fun while it lasted. You contemplate doing it again.",
                                get: {
                                    item: "broken before",
                                    data: -1
                                }
                            },
                        },
                        "window": {
                            msg: "You can practically taste the forest air on your tongue. Perhaps you can catch a mouse and bring it back for the family! You \leap\ out that window!",
                            dest: Locations.outside
                        }
                    }
                },
                kill: {
                    cmd: {
                        "Mumu": {
                            if: {
                                cond: "licence to kill revoked",
                                msg: "Killing things doesn't feel so fun anymore..."
                            },
                            else: {
                                if: {
                                    cond: "chose death Mumu",
                                    msg: "You can't kill her again, she's already dead! You can choose to revive her, though...(command is \"revive\")"
                                },
                                else: {
                                    msg: "You approach Mumu in an attempt to try out a quick pick-up line: <br><br>\
\"I'm not high on catnip, I'm just intoxicated by you\"<br>*you raise your eyebrows suggestively*<br><br>She doesn't seem to like the pick-up line. You revert back to your original plan. You put your paw up to her face and suddenly unsheathe your claws into her neck. She bleeds to death.<br><br>Standing over her body, you start to regret killing her. Maybe you shouldn't have done it. Revive her? (\"yes\" or \"no\")",
                                    inc: "kill point M",
                                    get: {
                                        item: "Mumu life/death question",
                                        data: -1
                                    },
                                    dest: Locations.DecisionRoom
                                }
                            }
                        },
                    }
                },
                g: {
                    cmd: {
                        "water": {
                            msg: "The glass is empty, so you can't drink from it. You meow at baba, but he's too \"busy\" watching the blinking lights"
                        }
                    }
                },
                m: {
                    cmd: {
                        e: {
                            msg: "You go to the entryway",
                            dest: Locations.entryway
                        },
                        s: {
                            msg: "You gallop as fast as you possibly can to the office. Very fun",
                            dest: Locations.office
                        },
                        n: {
                            msg: "You look out the window and chatter at some birds. You know you can't catch them, but it's fun to watch anyways. You think about breaking the window to catch them..."
                        }
                    }
                },
                "revive": {
                    if: {
                        cond: "chose death Mumu",
                        msg: "As you look at Mumu's dead body, you start to cry in regret, and as your tears fall onto her, she starts to wake up. Your tears have healed her! They also seem to have had an amnesic effect: she doesn't remember you killing her! It's probably a good idea to leave now...",
                        get: {
                            item: "chose death Mumu",
                            data: 0
                        }
                    },
                    else: {
                        msg: "Revive who? What?"
                    }
                }
            }
        },
        entryway: {
            cmd: {
                "hint": {
                    msg: "This room isn't very complicated at all, but here's the list: <br><br>\
                    look<br>\
                    move (north|east|south|west|up|down)<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                },
                l: {
                    if: {
                        cond: "lulu",
                        img: "Images/Entryway.jpeg",
                        msg: "You're in the entryway. It's pretty dirty. The door leads outside.<br>\
                    N: Outside<br>\
                    E: Hallway<br>\
                    S: Dining room<br>\
                    W: Living room",
                        clear: 1
                    },
                    else: {
                        img: "Images/Entryway.jpeg",
                        msg: "You're in the entryway. It's pretty dirty. The door leads outside. You see the dreaded Lulu at the end of the hall, she trots into emily's room<br>\
                    N: Outside<br>\
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
                        n: {
                            if: {
                                cond: "food",
                                if: {
                                    cond: "water",
                                    if: {
                                        cond: "rest",
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
                        s: {
                            msg: "You go into the dining room",
                            dest: Locations.dining_room
                        },
                        w: {
                            msg: "You see a yellow ball, and bat it into the living room. You lose it again after 0.01ms",
                            dest: Locations.living_room
                        },
                        e: {
                            msg: "You go down the hallway a little bit.",
                            dest: Locations.hallway1
                        }
                    }
                },
            }
        },
        hallway1: {
            cmd: {
                "hint": {
                    msg: "There's not a lot to do here, but here's a little trick: if you go a bit further east down the hall, and you decide to kill Lulu from the hall, you strike her first and it ends in a draw. If you try to enter Emily's room, where she is, she attacks you first and you die.: <br><br>\
                    look<br>\
                    move (east|south|west|up|down)<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                },
                l: {
                    img: "Images/Hallway1.jpeg",
                    msg: "You are in the middle of the hallway, James' door is closed.<br>\
                    E: Hallway<br>\
                    S: Bathroom<br>\
                    W: Entryway",
                    clear: 1
                },
                m: {
                    cmd: {
                        e: {
                            msg: "You continue down the hallway",
                            dest: Locations.hallway2
                        },
                        s: {
                            msg: "You journey into the bathroom",
                            dest: Locations.bathroom
                        },
                        w: {
                            msg: "You go to the entryway",
                            dest: Locations.entryway
                        }
                    }
                }
            }
        },
        hallway2: {
            cmd: {
                "hint": {
                    msg: "Lulu's pretty much the only interesting thing going on here, although you can also enter the master bedroom from here (south): <br><br>\
                    look<br>\
                    look at Lulu<br>\
                    kill Lulu (NOTE: it's better to try to kill Lulu from here than by entering Emily's room)<br>\
                    move (north|south|west|up|down)<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                },
                l: {
                    img: "Images/Hallway2.jpeg",
                    msg: "You are at the end of the hallway, Emily's door is next to you, and you see Lulu's ugly face peering at you from on top of the bed<br>\
                    N: Emily's room<br>\
                    S: Meow's room<br>\
                    W: Hallway",
                    clear: 1,
                    cmd: {
                        "lulu": {
                            msg: "You don't like Lulu very much, probably best to keep your distance",
                        }
                    }
                },
                kill: {
                    cmd: {
                        "Lulu": {
                            if: {
                                cond: "licence to kill revoked",
                                msg: "Killing things doesn't feel so fun anymore...(and you probably can't kill her anyway :( )"
                            },
                            else: {
                                msg: "She seems to be glaring at you in a way that makes you think that she'd kill you first if given the chance. Not this time! <br><br>You charge into the room and leap onto the bed, surprising her. She fights back viciously, and it ends in a draw. <br><br>You walk away with minor wounds and you think to yourself that maybe you made a questionable decision. Oh well. Perhaps you're glad that she didn't die.",
                            }
                        }
                    },
                },
                m: {
                    cmd: {
                        n: {
                            msg: "You enter Emily's room... very cautiously... and then out of nowhere Lulu leaps off the bed and attacks you. You're too nice to hurt even a monster like her, so you succumb to your fate...",
                            end: 4
                        },
                        s: {
                            msg: "You enter the master bedroom",
                            dest: Locations.meow_room
                        },
                        w: {
                            msg: "You go down the hallway",
                            dest: Locations.hallway1
                        }
                    }
                }
            }
        },
        bathroom: {
            cmd: {
                "hint": {
                    msg: "This room isn't very complicated at all, but here's the list: <br><br>\
                    look<br>\
                    look at water<br>\
                    get water<br>\
                    move (north|east|up|down)<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                },
                l: {
                    msg: "You are in the bathroom. You can see the large, white bowl in the corner.<br>\
                N: The hallway<br>\
                E: Meow's bedroom<br>\
                - There's a toilet here",
                    clear: 1,
                    cmd: {
                        "water": {
                            msg: "Mmmm, toilet water. Get some water?"
                        }
                    }
                },
                m: {
                    cmd: {
                        n: {
                            msg: "You go to the hallway",
                            dest: Locations.hallway1
                        },
                        e: {
                            msg: "You go into Meow's room",
                            dest: Locations.meow_room
                        }
                    }
                },
                g: {
                    cmd: {
                        "water": {
                            msg: "You jump up on the toilet and have a good long drink. You feel very refreshed! Best water in the house.",
                            inc: "water",
                        }
                    }
                }
            }
        },
        meow_room: {
            cmd: {
                "hint": {
                    msg: "Not much going on, but here's the list of what you can do here: <br><br>\
                    look<br>\
                    look at bed<br>\
                    use bed<br>\
                    move (north|west|up|down)<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                },
                l: {
                    msg: "You are in Meow's room, she has lots of blankets. You see your sleeping bag nest in the corner of the room.<br>\
                N: Hallway<br>\
                W: The bathroom<br>\
                - Your sleeping bag nest is here",
                    clear: 1,
                    cmd: {
                        "bed": {
                            msg: "It's very cozy and warm"
                        }
                    }
                },
                m: {
                    cmd: {
                        n: {
                            msg: "You go to the hallway",
                            dest: Locations.hallway2
                        },
                        w: {
                            msg: "You go to the bathroom",
                            dest: Locations.bathroom
                        }
                    }
                },
                u: {
                    cmd: {
                        "bed": {
                            msg: "You curl up in your bed and take a nap. You dream that Lulu got trapped outside and you never saw her again. Ah what a good dream, you feel much more rested now!",
                            inc: "rest,"
                        }
                    }
                },
            }
        },
        basement: {
            cmd: {
                "hint": {
                    msg: "Here's what you can do: <br><br>\
                    look<br>\
                    blanket<br>\
                    laundry<br>\
                    Nathan (Nathan's room is where you really should take the hint if you're not finding the thing)<br>\
                    door / leave (NOTE: you'll need water, food, and rest to leave through the door)<br>\
                    upstairs<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                },
                l: {
                    img: "Images/Basement.jpeg",
                    msg: "You are in the basement! There's a blanket that you like to sit on, there's the laundry, and there's Nathan's room.",
                    clear: 1,

                },
                "blanket": {
                    msg: "You pad over to the blanket that you like to sit on. Mmm, comfortable.",
                    get: {
                        item: "rest",
                        data: 1
                    }
                },
                "laundry": {
                    msg: "You curl up in a pile of clothes. Ah...",
                    inc: "rest",

                },
                "Nathan": {
                    msg: "You head over to Nathan's room.",
                    dest: Locations.nathan1
                },
                "(door|leave|escape|e)": {
                    if: {
                        cond: "food",
                        if: {
                            cond: "water",
                            if: {
                                cond: "rest",
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
                "upstairs": {
                    img: "Images/DiningRoom.jpeg",
                    msg: "You go upstairs.",
                    dest: Locations.dining_room
                }
            }
        },
        nathan1: {
            cmd: {
                "hint": {
                    msg: "This room isn't very complicated at all, but here's the list: <br><br>\
                    look<br>\
                    cat bed<br>\
                    chair<br>\
                    break window<br>\
                    bed<br>\
                    offer squirrel (if you have one - otherwise, you can get one by going outside)<br>\
                    under bed (!!!IMPORTANT INTERACTION!!!)<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                },
                l: {
                    if: {
                        cond: "Grebel",
                        img: "Images/NathanRoomPortal.jpeg",
                        msg: "You're back in Nathan's room! Your cat bed is here, there's a chair you like to sit on, and Nathan's bed looks pretty comfortable, too. There's also a window that you can look out of! You can also go back to Nathan's new room by typing \"portal.\"",
                        clear: 1,
                    },
                    else: {
                        img: "Images/NathanRoom1.jpeg",
                        msg: "You are in Nathan's room! Your cat bed is here, there's a chair you like to sit on, and Nathan's bed looks pretty comfortable, too. There's also a window that you can look out of!",
                        clear: 1,
                    },
                },
                "cat": {
                    cmd: {
                        "bed": {
                            msg: "You curl up on the cat bed and fall asleep.",
                            inc: "rest",
                        }
                    }
                },
                "chair": {
                    msg: "You sit on the chair in Nathan's room and look out the window. The birds and squirrels look pretty tasty out there! You could go outside once you have rested and eaten (or you could break the window now!).",
                    inc: "rest",
                },
                "break": {
                    msg: "You leap from the chair into the window, shattering it completely. You're an essentially invincible kitten, so you don't get injured by the glass. Yay, you're outside!",
                    dest: Locations.outside,
                    cmd: {
                        "window": {
                            msg: "You leap from the chair into the window, shattering it completely. You're an essentially invincible kitten, so you don't get injured by the glass. Yay, you're outside!",
                            dest: Locations.outside,
                        },
                    },
                },
                "bed": {
                    msg: "You curl up on Nathan's bed. Mmm, comfortable. You wonder if under the bed is any more comfortable?",
                    get: {
                        item: "rest",
                        data: 1
                    },
                },
                "(offer|give|squirrel)": {
                    if: {
                        cond: "squirrel",
                        if: {
                            cond: "chose kill Nathan",
                            msg: "You lay the squirrel on the pillow proudly. Nathan will love it! Or at least he would have loved it, if you hadn't killed him...You could go to his new room, revive him, and offer the squirrel...",
                        },
                        else: {
                            msg: "You lay the squirrel on the pillow proudly. Nathan will love it! Hmm, he won't see it here...maybe go through the portal first...<br>You pick up the squirrel again"
                        },
                    },
                    else: {
                        msg: "You have to kill a squirrel to give it to him..."
                    }
                },
                "portal": {
                    if: {
                        cond: "Grebel",
                        msg: "You crawl under Nathan's bed and make your way to the portal. You go through and end up in Nathan's new room.",
                        dest: Locations.nathan2
                    },
                    else: {
                        msg: "You crawl under Nathan's bed. You like to be here, it's safe and comfortable, maybe not as comfortable as the actual bed, but -<br><br>You suddenly notice a blue shimmery circle-like shape appear on the ground, no larger than one of your paws. Curious, you creep closer to it. The circle grows rapidly and swallows you! Where are you? (\"look\")",
                        get: {
                            item: "Grebel",
                            data: -1
                        },
                        get2: {
                            item: "recently arrived",
                            data: -1
                        },
                        dest: Locations.nathan2
                    },
                }
            }
        },
        nathan2: {
            cmd: {
                "hint": {
                    if: {
                        cond: "weed",
                        if: {
                            cond: "chose kill Nathan",
                            msg: "Here, list: <br><br>\
                            Revive Nathan<br>\
                            look<br>\
                    Nathan<br>\
                    kill Nathan<br>\
                    offer squirrel (if you have one - if not, you can get one by catching one while outside at home)<br>\
                    home / portal / box / closet <br>\
                    hallway / leave <br>\
                    deliver weed<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                        },
                        else: {
                            msg: "Alright, here's list: <br><br>\
                    look<br>\
                    Nathan<br>\
                    kill Nathan<br>\
                    offer squirrel (if you have one - if not, you can get one by catching one while outside at home)<br>\
                    home / portal / box / closet <br>\
                    hallway / leave <br>\
                    deliver weed<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                        },
                    },
                    else: {
                        if: {
                            cond: "chose kill Nathan",
                            msg: "Here, have a list of all commands:<br><br>\
                            revive Nathan <br>\
                            look<br>\
                    Nathan<br>\
                    offer squirrel (if you have one - if not, you can get one by catching one while outside)<br>\
                    home / portal / box / closet <br>\
                    hallway / leave <br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                        },
                        else: {
                            msg: "Here, have list of all commands: <br><br>\
                    look<br>\
                    Nathan<br>\
                    offer squirrel (if you have one - if not, you can get one by catching one while outside)<br>\
                    home / portal / box / closet <br>\
                    hallway / leave <br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint"
                        },
                    }
                },
                l: {
                    if: {
                        cond: "chose kill Nathan",
                        img: "Images/DeadNathan.jpeg",
                        msg: "You're in Nathan's room as he lies dead on the floor. To go back to your house, type \"home\", or go to the hallway by typing \"leave\".",
                        get: {
                            item: "went into portal 2",
                            data: 0
                        },
                        clear: 1
                    },
                    else: {
                        if: {
                            cond: "went into portal 2",
                            msg: "You look around to see that you're in Nathan's room! You can hop through the closet portal to get home by typing \"home,\" or go to the hallway by typing \"leave.\"",
                            img: "Images/Nathan2.jpeg",
                            get: {
                                item: "recently arrived",
                                data: 0
                            },
                            clear: 1
                        },
                        else: {
                            if: {
                                cond: "recently arrived",
                                img: "Images/Nathan2.jpeg",
                                msg: "You come out of the blue shimmery circle and find yourself inside a wooden box, which you conclude is a closet. The shimmery circle is at the back of the closet, but you decide to explore first. You can always come back here to go back to the house.<br><br>You can smell Nathan's scent in the room, perhaps this is where he's been the past few months. You come out of the closet and you find yourself in a room you've never seen before! Nathan is at a desk working on his computer. You read his screen (you learned to read two lives ago, in Italy) and find that he is not doing work, he is coding a game. \"Lucky's Cat Adventures\" You read. You laugh to yourself. It couldn't possibly be as exciting as your actual life. He hasn't noticed you yet. Type \"portal\" to return home.",
                                clear: 1,
                                get: {
                                    item: "recently arrived",
                                    data: 0
                                },
                                clear: 1
                            },
                            else: {
                                img: "Images/Nathan2.jpeg",
                                msg: "You're in Nathan's room. To go back to your house, you can type \"home\", or you can go to the hallway by typing \"leave\".",
                                clear: 1
                            }
                        },
                    },
                },
                "(Bullet Journal|BJ)": {
                    if: {
                        cond: "chose kill Nathan",
                        msg: "?"
                    },
                    else: {
                        msg: "Nathan opens up a notepad-type file on his computer and starts writing in bullet points. You recognize this as being similar to the BJ he often enjoyed while at home. He did love writing in that Bullet Journal.",
                    },
                },
                "Nathan": {
                    if: {
                        cond: "chose kill Nathan",
                        img: "Images/DeadNathan.jpeg",
                        msg: "You admire Nathan as he lies dead on the floor. You do love a successful kill. (\"revive Nathan\" if you've grown a conscience)"
                    },
                    else: {
                        img: "Images/NathanPhoto.JPG",
                        msg: "\"Hello!\" You mew at Nathan. He jumps. <br><br>\"Lucky?\" he exclaims. He picks you up and hugs you. \"I don't know how you're here...perhaps you're just a figment of my imagination, a sign that I'm up too late...\" You glance at the clock and realize that time has passed since you last looked outside, it's now about 5 AM. You decide that you want to have time to yourself to wander around the building, so you rewind time so that he hasn't noticed you yet. It's now about 11:30 PM. You think about leaving the room.",
                    },
                },
                kill: {
                    msg: "What would you like to kill?",
                    cmd: {
                        Nathan: {
                            if: {
                                cond: "chose kill Nathan",
                                msg: "Really? Trying to kill the same person twice? If you can't keep track of who you've killed, maybe the murder game isn't for you."
                            },
                            else: {
                                if: {
                                    cond: "licence to kill revoked",
                                    msg: "Killing things doesn't feel so fun anymore..."
                                },
                                else: {
                                    img: "Images/DeadNathan.jpeg",
                                    msg: "Padding into Nathan's room from the hall, you lunge at Nathan, plunging your claws into him. As he bleeds out onto the carpet, you start to perhaps regret your actions. Should you revive him? (\"Yes\" or \"no\")",
                                    get: {
                                        item: "Nathan life/death question",
                                        data: -1
                                    },
                                    inc: "kill point N",
                                    dest: Locations.DecisionRoom
                                },
                            },
                        },
                    },
                },
                "(deliver|give)": {
                    cmd: {
                        "weed": {
                            if: {
                                cond: "chose kill Nathan",
                                msg: "Nathan is dead, but you decide to put the weed in his room anyway.",
                                get: {
                                    item: "weed",
                                    data: -1
                                }
                            },
                            else: {
                                msg: "You go to Nathan's room and give him the weed.",
                                get: {
                                    item: "weed",
                                    data: -1
                                },
                            },
                        },
                    },
                },
                "(home|portal|box|closet)": {
                    msg: "You leap back through the portal and appear at home!",
                    get: {
                        item: "Grebel",
                        data: -1
                    },
                    dest: Locations.nathan1,
                },
                "(offer|give|squirrel)": {
                    if: {
                        cond: "squirrel",
                        if: {
                            cond: "chose kill Nathan",
                            msg: "You lay the squirrel on his pillow proudly (the lower bed; he has them in a bunk bed position but you can't get up the ladder). Nathan would love it! He is lying dead on the floor. <br><br>\
                            (You are still in Nathan's room)",
                            get: {
                                item: "squirrel",
                                data: 0
                            }
                        },
                        else: {
                            if: {
                                cond: "kill point N",
                                msg: "You lay the squirrel on his pillow proudly (the lower bed; he has them in a bunk bed position but you can't get up the ladder). Nathan will love it! He is there, but hasn't noticed you yet. You recall killing him before reviving him...Ah, you do enjoy fantasizing about murder.",
                                get: {
                                    item: "squirrel",
                                    data: 0
                                }

                            },
                            else: {
                                msg: "You lay the squirrel on his pillow proudly (the lower bed; he has them in a bunk bed position but you can't get up the ladder). Nathan will love it! He is there, but hasn't noticed you yet.",
                                get: {
                                    item: "squirrel",
                                    data: 0
                                }
                            }
                        },
                    },
                    else: {
                        msg: "You have to kill a squirrel in order to put it on the pillow..."
                    }
                },
                "revive": {
                    cmd: {
                        "Nathan": {
                            if: {
                                cond: "chose kill Nathan",
                                msg: "Fine, fine, you revive Nathan using your magical healing tears. *rolls eyes*",
                                get: {
                                    item: "chose kill Nathan",
                                    data: 0
                                }
                            },
                            else: {
                                msg: "?"
                            }
                        }
                    }
                },
                "(hallway3|hallway|leave)": {
                    msg: "You trot out into the hallway, looking around. It's dark, perhaps because it's past 11 PM.",
                    dest: Locations.hallway3,
                },

            },
        },
        hallway3: {
            cmd: {
                "(hallway|leave)": {
                    msg: "You are in the hallway (look around)."
                },
                "foyer": {
                    msg: "You're downstairs in the foyer. You see a garden outside. Want to check it out? (\"garden\")"
                },
                "andrew": {
                    msg: "The name seems vaguely familiar...try Andy, Dandrewlion, or Werdna",
                },
                h: {
                    msg: "North-east-south-west commands are now useless, but you can still move up/down <br>\
                    Type \"look\" to see the floor plan<br>\
                    Type any name to see that person<br>\
                    move (up|down)<br>\
                    inv<br>\
                    help<br>\
                    hint<br>\
                    clear",
                    clear: 1,
                },
                "hint": {
                    msg: "Take a look at these commands and see if you've gotten to everything<br><br>\
                    Any name you see on the floor plan (ex. \"Reu\", \"Maia\", \"Aliyah\")<br>\
                    \"song\" + \"extended verses\"<br>\
                    \"Cloak Claire\"<br>\
                    \"cage\"<br>\
                    \"bother Andy\" (separate interaction from \"Andy\")<br>\
                    \"trumpet duet\"<br>\
                    \"kill Andy/ kill Maia/ kill Aliyah/ kill Reu/ kill Nathan/ kill Treacys/ kill Jake\"<br>\
                    \"hard hat\"<br>\
                    \"banana\"<br>\
                    \"chocolate milk\"<br>\
                    \"weed\"<br>\
                    \"follow\" (after talking to Aliyah)<br>\
                    \"play basketball\"<br>\
                    \"garden\""
                },
                l: {
                    if: {
                        cond: "chose kill Aliyah",
                        if: {
                            cond: "chose kill Maia",
                            if: {
                                cond: "chose kill Reu",
                                if: {
                                    cond: "chose kill Nathan",
                                    if: {
                                        cond: "chose kill Andrew",
                                        if: {
                                            cond: "has been to Emily's house before",
                                            img: "Images/Hallway3EveryoneDead.jpeg",
                                            msg: "You've killed everyone here who can be killed...There are still possible interactions, but for the most part this is where you'd decide to move on (unless you want to revive people, which you'd do by typing \"revive\" followed by a name).",
                                            clear: 1
                                        },
                                        else: {
                                            img: "Images/Hallway3EveryoneDead.jpeg",
                                            msg: "You've killed everyone here who can be killed...There are still possible interactions, but for the most part this is where you'd decide to move on (unless you want to revive people, which you'd do by typing \"revive\" followed by a name). <br><br>\
                                            Maybe check out the garden! (\"garden\")",
                                            clear: 1
                                        },
                                        else: {
                                            img: "Images/Hallway3.jpeg",
                                            msg: "Hall-wandering time! Who do you want to talk to? (You return to the hallway after every interaction, just type someone's name and you'll go to them and then return to the hallway)",
                                            clear: 1,
                                        },
                                    },
                                    else: {
                                        img: "Images/Hallway3.jpeg",
                                        msg: "Hall-wandering time! Who do you want to talk to? (You return to the hallway after every interaction, just type someone's name and you'll go to them and then return to the hallway)",
                                        clear: 1,
                                    },
                                },
                                else: {
                                    img: "Images/Hallway3.jpeg",
                                    msg: "Hall-wandering time! Who do you want to talk to? (You return to the hallway after every interaction, just type someone's name and you'll go to them and then return to the hallway)",
                                    clear: 1,
                                },
                            },
                            else: {
                                img: "Images/Hallway3.jpeg",
                                msg: "Hall-wandering time! Who do you want to talk to? (You return to the hallway after every interaction, just type someone's name and you'll go to them and then return to the hallway)",
                                clear: 1,
                            },
                        },
                        else: {
                            img: "Images/Hallway3.jpeg",
                            msg: "Hall-wandering time! Who do you want to talk to? (You return to the hallway after every interaction, just type someone's name and you'll go to them and then return to the hallway)",
                            clear: 1,
                        },
                    },
                    else: {
                        img: "Images/Hallway3.jpeg",
                        msg: "Hall-wandering time! Who do you want to talk to? (You return to the hallway after every interaction, just type someone's name and you'll go to them and then return to the hallway)",
                        clear: 1,
                    },
                },
                "song": {
                    cmd: {
                        "Werdna": {
                            cmd: {
                                "Dandrewlion": {
                                    cmd: {
                                        "Andy": {
                                            if: {
                                                cond: "chose kill Nathan",
                                                msg: "A ghost starts running down the hall, and you realize that it's Nathan! He is singing, and you listen to the words:<br><br><br>\
                                                \"My... sweet... Werdna...<br>\
                     My... sweetheart<br>\
                     If you believe in the power of friendship<br>\
                     Nothing can keep us apart...<br><br>\
                     But that's just not good enough for me!<br>\
                     Without Werdna I cannot be<br>\
                     for if you would not have me then I'll... be<br><br>\
                     a robot for my Werdna!<br>\
                     Just for Werdna I will be a robot<br>\
                     But one small issue is that I may overheat<br>\
                     Just because, my Werdna is so hot.<br><br>\
                     My Werdna is too hot for me<br>\
                     But if not a robot, what else can I be?<br><br>\
                     Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                     Whatever name you go by doesn't matter.<br>\
                     I will call you mine.<br><br>\
                     Werdna, you're beautiful.<br><br>\
                     I could be, some chocolate milk<br>\
                     Nothing quite as sweet.<br>\
                     An added bonus would be,<br>\
                     that Werdna's lips, I would meet...<br><br>\
                     But while chocolate milk is finite<br>\
                     My love for Werdna is unending<br>\
                     Because Werdna is my one true love,<br>\
                     no one else is even contending<br><br>\
                     Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                     Whatever name you go by doesn't matter.<br>\
                     I will call you mine.<br><br>\
                     Werdna, Werdna I love you<br><br>\
                     I could be, a chin-up bar<br>\
                     To make my Wernda stronk<br>\
                     The problem is, is Werdna's weight<br>\
                     My Werdna is too chomnk. <br><br>\
                     Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                     Whatever name you go by doesn't matter.<br>\
                     I will call you mine.<br><br>\
                     Werdna, Werdna won't you love me.<br><br>\
                     I could be, a mirror.<br>\
                     diverting Werdna's gaze.<br>\
                     For then I'd spend, my final days<br>\
                     Looking at his wonderful face<br><br>\
                     Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                     Whatever name you go by doesn't matter.<br>\
                     I will call you mine.<br><br>\
                     Werdna, won't you call me yours\"<br><br><br>\
                     Having reached the end of the song, the ghost disappears..<br><br>\
                     Nathan's ghost pops back in to inform you that there are a few extended verses, if you want to hear them.",
                                                get: {
                                                    item: "heard the main part of the song already bc I don't want spoilers >:(",
                                                    data: -1
                                                },
                                            },
                                            else: {
                                                msg: "Suddenly, you see Nathan running down the dark hall, singing. You listen to the words:<br><br>\
                     \"My... sweet... Werdna...<br>\
                     My... sweetheart<br>\
                     If you believe in the power of friendship<br>\
                     Nothing can keep us apart...<br><br>\
                     But that's just not good enough for me!<br>\
                     Without Werdna I cannot be<br>\
                     for if you would not have me then I'll... be<br><br>\
                     a robot for my Werdna!<br>\
                     Just for Werdna I will be a robot<br>\
                     But one small issue is that I may overheat<br>\
                     Just because, my Werdna is so hot.<br><br>\
                     My Werdna is too hot for me<br>\
                     But if not a robot, what else can I be?<br><br>\
                     Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                     Whatever name you go by doesn't matter.<br>\
                     I will call you mine.<br><br>\
                     Werdna, you're beautiful.<br><br>\
                     I could be, some chocolate milk<br>\
                     Nothing quite as sweet.<br>\
                     An added bonus would be,<br>\
                     that Werdna's lips, I would meet...<br><br>\
                     But while chocolate milk is finite<br>\
                     My love for Werdna is unending<br>\
                     Because Werdna is my one true love,<br>\
                     no one else is even contending<br><br>\
                     Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                     Whatever name you go by doesn't matter.<br>\
                     I will call you mine.<br><br>\
                     Werdna, Werdna I love you<br><br>\
                     I could be, a chin-up bar<br>\
                     To make my Wernda stronk<br>\
                     The problem is, is Werdna's weight<br>\
                     My Werdna is too chomnk. <br><br>\
                     Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                     Whatever name you go by doesn't matter.<br>\
                     I will call you mine.<br><br>\
                     Werdna, Werdna won't you love me.<br><br>\
                     I could be, a mirror.<br>\
                     diverting Werdna's gaze.<br>\
                     For then I'd spend, my final days<br>\
                     Looking at his wonderful face<br><br>\
                     Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                     Whatever name you go by doesn't matter.<br>\
                     I will call you mine.<br><br>\
                     Werdna, won't you call me yours\"<br><br><br>\
                     Baffled, you watch as he returns to his room as though nothing happened.<br><br>\
                     Nathan pops back out and informs you that there are a few extended verses, if you want to hear them.",
                                                get: {
                                                    item: "heard the main part of the song already bc I don't want spoilers >:(",
                                                    data: -1
                                                }
                                            },
                                        }
                                    },
                                },
                            },
                        },
                    },
                },
                "(extended|more|hear|listen)": {
                    cmd: {
                        "verses": {
                            if: {
                                cond: "heard the main part of the song already bc I don't want spoilers >:(",
                                if: {
                                    cond: "chose kill Nathan",
                                    msg: "The ghost materializes and begins to sing, a spotlight falling onto him (where the spotlight came from, you have no idea...):<br><br><br>\
                                    \"I could be, a flip flop.<br>\
                       Wherever Werdna goes.<br>\
                       And I would work, for hours<br>\
                       spreading Werdna's toes.<br><br>\
                       I could be, stripper socks,<br>\
                       Fantastic, that's for sure<br>\
                       And I would be transparent<br>\
                       Like I wish the rest of his clothes were.<br><br>\
                       I could be, a towel.<br>\
                       I'd dry him off with power<br>\
                       And for some extra zesty<br>\
                       He'd bring me to his shower.\"<br><br>\
                       Nathan's ghost bows to you and disappears into thin air. You are left standing in the hallway.",
                                },
                                else: {
                                    msg: "Nathan clears his throat and starts to sing:<br><br>\
                       \"I could be, a flip flop.<br>\
                       Wherever Werdna goes.<br>\
                       And I would work, for hours<br>\
                       spreading Werdna's toes.<br><br>\
                       I could be, stripper socks,<br>\
                       Fantastic, that's for sure<br>\
                       And I would be transparent<br>\
                       Like I wish the rest of his clothes were.<br><br>\
                       I could be, a towel.<br>\
                       I'd dry him off with power<br>\
                       And for some extra zesty<br>\
                       He'd bring me to his shower.\"<br><br>Nathan bows to you and returns to his room. You are left standing in the hallway.",
                                },
                                else: {
                                    msg: "Huh?"
                                }
                            },
                        }
                    },
                },
                "Reu": {
                    if: {
                        cond: "chose kill Reu",
                        if: {
                            cond: "Name Phyllis",
                            msg: "You walk into the room of the tall human who you had killed. The human still lies on the couch. You say hello to Phyllis. Phyllis does not respond. You return to the hallway. (\"revive Reu\" if you want)"
                        },
                        else: {
                            msg: "You walk into the room of the tall human who you had killed. The human still lies dead on the couch. You spin for a bit on the spinning chair and then return to the hall (\"revive Reu\" if you want)"
                        }

                    },
                    else: {
                        if: {
                            cond: "Name Phyllis",
                            img: "Images/Phyllis.JPG",
                            msg: "You pad into the room of the tall human that you have seen before. It smiles at you. <br><br>\"Well hello again!\" The human says. <br><br>You meow at Phyllis. It does not respond.<br><br>You take another nap on the human's couch, and return to the hallway a few hours later.",
                            inc: "rest",
                        },
                        else: {
                            msg: "You scratch at one of the doors, which is slightly open. A tall human crosses the room and looks at you in confusion. \"Well hello\" It says to you. You pad into the room and see a stuffed blueish blob seated on the couch. \"That's Phyllis\" The human explains to you. You curl up on the couch next to Phyllis and fall asleep. A few hours later, you awaken and leave the room. The tall human watches you leave, confused and unsure of what to do about this random cat wandering the building. You laugh to yourself.",
                            img: "Images/Phyllis.JPG",
                            inc: "rest",
                            get: {
                                item: "Name Phyllis",
                                data: -1,
                            },
                        },
                    },
                },
                "(Treacys|Treacy|Claire|Jackie|Jackie Claire|Claire Jackie)": {
                    if: {
                        cond: "Name Claire",
                        msg: "You wander down the hall, through a lounge area and down the hall some more. You see one room in particular that has two name signs on either side of the door. \"Jackie\" one reads, and the other \"Claire\". The door is closed, so you rewind time slowly until it's open, it's now probably 10 PM. You pad into their room, surprising them. \"Where did this cat come from?!\" The shorter-haired one (who you recognize as Claire) said to the other. The other human shrugs, mystified \"This cat looks an awful lot like Nathan's cat Lucky, from the pictures I've seen\" Claire remarks. The other nods, looking at you closely. A pair of female humans walk by and plead with Claire to put on a cloak. Claire refuses. <br><br>You decide that you're bored of this, and you skip ahead in time to where you had been before (and erase their memories, of course). You are now standing at their closed door at a time past 11:30 PM",
                    },
                    else: {
                        msg: "You wander down the hall, through a lounge area and down the hall some more. You see one room in particular that has two name signs on either side of the door. \"Jackie\" one reads, and the other \"Claire\". The door is closed, so you rewind time slowly until it's open, it's now probably 10 PM. You pad into their room, surprising them. \"Where did this cat come from?!\" The shorter-haired one said to the other. The other human shrugs, mystified \"This cat looks an awful lot like Nathan's cat Lucky, from the pictures I've seen\" One of them remarks. The other nods, looking at you closely. A pair of female humans come by and plead with the short-haired female to put on a cloak. The human refuses. <br><br>You decide that you're bored of this, and you skip ahead in time to where you were (and erase their memories, of course). You are now standing at their closed door at a time past 11:30 PM",
                    },

                },
                "Cloak": {
                    img: "Images/CloakClaire.JPG",
                    msg: "You wander along to the only room with two people in it. Trotting in, you pad around the room. The short-haired one notices you and watches as you paw open the partially open closet door. The human walks up as you admire the blue cloak hanging in the closet. Taking it out of the closet, the human puts it on. You watch the cloak billow behind the human as it runs around the halls. A human comes out from one of the rooms and exclaims: <br><br>\"Look! It's Cloak Claire!\" <br><br>\"Cloak Clarence\", another human corrects them. The cloaked human, who you now know to be Claire, glares at the two humans. \"Don't call me Clarence!\" Claire shoots back. The humans return to their rooms and Claire puts the cloak back in its place. You are now in the hallway.",
                    get: {
                        item: "Name Claire",
                        data: -1
                    },
                    cmd: {
                        "Claire": {
                            img: "Images/CloakClaire.JPG",
                            msg: "You wander along to the only room with two people in it. Trotting in, you pad around the room. The short-haired one notices you and watches as you paw open the partially open closet door. The human walks up as you admire the blue cloak hanging in the closet. Taking it out of the closet, the human puts it on. You watch the cloak billow behind the human as it runs around the halls. A human comes out from one of the rooms and exclaims: <br><br>\"Look! It's Cloak Claire!\" <br><br>\"Cloak Clarence\", another human corrects them. The cloaked human, who you now know to be Claire, glares at the two humans. \"Don't call me Clarence!\" Claire shoots back. The humans return to their rooms and Claire puts the cloak back in its place. You are now in the hallway.",
                            get: {
                                item: "Name Claire",
                                data: -1,
                            },
                        },
                    },
                },
                "Maia": {
                    if: {
                        cond: "chose kill Maia",
                        if: {
                            cond: "chose kill Nathan",
                            msg: "You go into the room of someone you had killed. You see the body on the floor, still holding the crossbow that it had tried to use to defend itself. You laugh to yourself. Going over to the plants by the window, you sniff them. Why would the human grow a plant that smelled of skunk? You decide to take a sample to bring to Nathan to see what he makes of it, but remember that he is dead. You decide to take it anyway. maybe you'll revive him so he can take it, or you can just keep it...<br><br>\
                            You return to the hallway. (\"revive Nathan\" and then \"deliver weed\" to give to Nathan, or \"revive Maia\" if you suddenly have a conscience)",
                            inc: "weed",
                        },
                        else: {
                            msg: "You go into the room of someone you had killed. You see the body on the floor, still holding the crossbow that it had tried to use to defend itself. You laugh to yourself. Going over to the plants by the window, you sniff them. Why would the human grow a plant that smelled of skunk? You decide to take a sample to bring to Nathan to see what he makes of it. You return to the hallway. (\"deliver weed\" to give to Nathan, \"revive Maia\" if you suddenly have a conscience)",
                            inc: "weed",
                        },
                    },
                    else: {
                        msg: "You wander down the hall, past a lounge-type room, and further down the hall. Near the far end of the hall, you see an open door on the right side. You enter to see a female human working at its desk. You wander in and hop up on its lap. It seems surprised. \"A cat?\" It exclaims at you. \"Why not a dog?\" It sighs. It pets you a few times. You see a few plants near the window, including one that that smells vaguely of skunk. Hmm. You notice some dried plants on the desk, and the human is wrapping them up in sort of cylindrical shapes. Humans mystify you. You leave after a while.",
                    }
                },
                "Aliyah": {
                    if: {
                        cond: "chose kill Aliyah",
                        msg: "You enter the room of a human that you'd killed before. You feel a little guilty, since the human had been so happy to see you. You take note of an open closet door with a portal shimmering from inside. You wonder if you should go in...(\"go\" or just \"leave\")",
                        get: {
                            item: "the gift of knowledge",
                            data: -1
                        }
                    },
                    else: {
                        msg: "You wander down the hall, past a lounge-type room, and further down the hall. Near the far end of the hall, you see an open door on the left side. You enter to see a female human working at its desk. You wander in and hop up on its lap. It seems excited, and starts to pet you. You fall asleep. A while later, you wake up and see that the human is going into a closet. She comes out a bit later. You go back to the hallway. (\"follow\" or just keep hall-wandering)",
                        inc: "rest",
                        get: {
                            item: "the gift of knowledge",
                            data: -1
                        },
                    },
                },
                "(Andy|Dandrewlion|Werdna)": {
                    if: {
                        cond: "chose kill Andrew",
                        if: {
                            cond: "Name Andrew",
                            msg: "You head to Andrew's room. You see him lying on the ground and you admire your handiwork. You can't believe that you'd found the human to be intimidating before. You take a nap on the couch (of course) and then return to the hallway. (\"revive Dandrewlion\" if you want)",
                            inc: "rest"
                        },
                        else: {
                            msg: "You head to the room of one of your victims and admire your handiwork. You can't believe that you'd found the human to be intimidating before. You take a nap on the couch (of course) and then return to the hallway. (\"revive Werdna\" if you want)",
                            inc: "rest"
                        },
                    },
                    else: {
                        if: {
                            cond: "Name Andrew",
                            if: {
                                cond: "banana",
                                img: "Images/AndrewIgnore.JPG",
                                msg: "You wander down a flight of stairs and eventually come across an open door that you decide to enter. Andrew is seated at a desk. <br><br>\
                            You hear the human grumble something about being out of bananas. You smile to yourself as you remember stepping over Andrew's dead body to take it earlier. <br><br>\
                            \
                            In between the desk and the bed is a contraption of metal poles and wood, which you can only assume is a defense-type of machine to prevent intruders from approaching. You can see a mirror on the closet behind Andrew. You note that the desk has a bed suspended above it and that the bottom of the bed has a cage-like appearance.<br><br>\
                            You meow at the human, but it is wearing a contraption over its ears that seems to be obstructing its hearing. You walk in anyway and curl up on its couch for a while. Although Andrew pays no attention to you, you do somewhat enjoy its presence for some reason. A while later, you leave to go back to hall-wandering.",
                                inc: "rest",
                            },
                            else: {
                                img: "Images/AndrewIgnore.JPG",
                                msg: "You wander down a flight of stairs and eventually come across an open door that you decide to enter. Andrew is seated at a desk. In between the desk and the bed is a contraption of metal poles and wood, which you can only assume is a defense-type of machine to prevent intruders from approaching. You can see a mirror on the closet behind Andrew. There is also a banana sitting on a shelf next to the desk. You note that the desk has a bed suspended above it and that the bottom of the bed has a cage-like appearance.<br><br>\
                            You meow at the human, but it is wearing a contraption over its ears that seems to be obstructing its hearing. You walk in anyway and curl up on its couch for a while. Although Andrew pays no attention to you, you do somewhat enjoy its presence for some reason. A while later, you leave to go back to hall-wandering.",
                                inc: "rest",
                            },
                        },
                        else: {
                            if: {
                                cond: "banana",
                                img: "Images/AndrewIgnore.JPG",
                                msg: "You wander down a flight of stairs and eventually come across an open door that you decide to enter. There is a fairly tall-looking and somewhat intimidating-looking male human sitting at a desk. <br><br>\
                                You hear the human grumble something about being out of bananas. You smile to yourself as you remember stepping over Andrew's dead body to take it earlier. <br><br>\
                                You can see a mirror on the closet behind it. You note that the desk has a bed suspended above it and that the bottom of the bed has a cage-like appearance. <br><br>\
                                In between the desk and the bed next to it is a messy contraption of metal poles and wood, which you can only assume is a defense-type of machine to prevent intruders from approaching. You meow at the human, but it is wearing a contraption over its ears that seems to be obstructing its hearing. You walk in anyway and curl up on its couch for a while. Although he pays no attention to you, you do somewhat enjoy his presence for some reason. You notice a yellow hard hat hanging on his bedpost and you think about stealing it. A while later, you leave to go back to hall-wandering.",
                                inc: "rest",
                            },
                            else: {
                                img: "Images/AndrewIgnore.JPG",
                                msg: "You wander down a flight of stairs and eventually come across an open door that you decide to enter. There is a fairly tall-looking and somewhat intimidating-looking male human sitting at a desk. You can see a mirror on the closet behind it. There is also a banana sitting on a shelf next to the desk. You note that the desk has a bed suspended above it and that the bottom of the bed has a cage-like appearance. <br><br>\
                            In between the desk and the bed next to it is a messy contraption of metal poles and wood, which you can only assume is a defense-type of machine to prevent intruders from approaching. You meow at the human, but it is wearing a contraption over its ears that seems to be obstructing its hearing. You walk in anyway and curl up on its couch for a while. Although he pays no attention to you, you do somewhat enjoy his presence for some reason. You notice a yellow hard hat hanging on his bedpost and you think about stealing it. A while later, you leave to go back to hall-wandering.",
                                inc: "rest",
                            },
                        },
                    },
                },
                "cage": {
                    if: {
                        cond: "chose kill Andrew",
                        msg: "Andrew is dead, \"revive Andy\" to see what the \"cage\" command does.",
                    },
                    else: {
                        if: {
                            cond: "Name Andrew",
                            img: "Images/CagedAndrew.JPG",
                            msg: "You see Andrew trapped in a cage!"
                        },
                        else: {
                            img: "Images/CagedAndrew.JPG",
                            msg: "You see a human trapped in a cage!"
                        }
                    },
                },
                "Bother": {
                    cmd: {
                        "(Dandrewlion|Andy|Werdna)": {
                            if: {
                                cond: "chose kill Andrew",
                                msg: "You can't really bother a dead body..."
                            },
                            else: {
                                if: {
                                    cond: "Name Andrew",
                                    msg: "You decide that you want Andrew to pay attention to you. Trotting up to its room, you come up to it and paw at its leg. Andrew looks down and is very surprised to see you. You decide to hop up on its lap and settle in. The human seems unsure of what to do, but ultimately accepts it, and pets you. The metal pole defense contraption will protect you both now. You fall asleep.",
                                },
                                else: {
                                    msg: "You decide that you want the tall and intimidating human to pay attention to you. Trotting up to its room, you come up to him and paw at its leg. The human looks down and is very surprised to see you. <br><br>\"Looks like Nathan's cat..\" It remarks. <br><br>You decide to hop up on its lap and settle in. The human seems unsure of what to do, but ultimately accepts it. The metal pole defense contraption will protect you both now. You fall asleep.",
                                    inc: "rest",
                                },
                            },
                        },
                    },
                },
                "(Trumpet|Emily|Andrew)": {
                    cmd: {
                        "(duet|time|Andrew|Emily)": {
                            if: {
                                cond: "chose kill Emily",
                                if: {
                                    cond: "chose kill Andrew",
                                    msg: "Sadly, trumpet duet time can't happen. You've killed both trumpeters :(<br><br>\
                                        \"revive Emily\" and \"revive Andy\" to fix it."
                                },
                                else: {
                                    msg: "Sadly, trumpet duet time can't happen. You've killed a trumpeter :(<br><br>\
                                    \"revive Emily\" to fix it."
                                },
                            },
                            else: {
                                if: {
                                    cond: "chose kill Andrew",
                                    msg: "Sadly, trumpet duet time cannot happen. You've killed a trumpeter :(<br><br>\
                                    \"revive Werdna\" to fix it..."
                                },
                                else: {
                                    if: {
                                        cond: "chose kill Nathan",
                                        msg: "Sadly, trumpet duet time can't happen. You've killed their lead singer :(<br><br>\
                                \"revive Nathan\" before trying to do the trumpet duet again."
                                    },
                                    else: {
                                        if: {
                                            cond: "Name Andrew",
                                            msg: "As you pad down the hall towards Andrew's room, you decide to fast-forward the time for fun. You stop fast-forwarding when you see Andrew coming out of its room. It is holding a strange brass-coloured object. The human notices your inquiring look. <br><br>\"A trumpet.\" Andrew explains to you. <br><br>Andrew carries the trumpet down the hall and out the door as you follow curiously. It is now mid-afternoon, so it is fairly bright outside. Waiting just outside is an enormous grand piano (which you recognize because your family has a piano at home). The situation seems to be getting stranger by the second. <br><br>As Andrew approaches the piano, you notice a female human approaching from the opposite direction. The human is also carrying a trumpet<br><br>\"Hello, Emily\" Andrew says to the human. <br><br>\"Hello.\" Emily replies.<br><br>Without another word, the two humans raise the trumpets to their mouths and begin to play, each of them playing their trumpets one-handed. With the other hand, they begin to play piano. You look on, mystified, as the two begin a duet.<br><br>As though the whole arrangement couldn't get any stranger, Nathan suddenly steps out of the building and starts to sing:\
                                \"My... sweet... Werdna...<br>\
                                My... sweetheart<br>\
                                If you believe in the power of friendship<br>\
                                Nothing can keep us apart...<br><br>\
                                But that's just not good enough for me!<br>\
                                Without Werdna I cannot be<br>\
                                for if you would not have me then I'll... be<br><br>\
                                a robot for my Werdna!<br>\
                                Just for Werdna I will be a robot<br>\
                                But one small issue is that I may overheat<br>\
                                Just because, my Werdna is so hot.<br><br>\
                                My Werdna is too hot for me<br>\
                                But if not a robot, what else can I be?<br><br>\
                                Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                                Whatever name you go by doesn't matter.<br>\
                                I will call you mine.<br><br>\
                                Werdna, you're beautiful.<br><br>\
                                I could be, some chocolate milk<br>\
                                Nothing quite as sweet.<br>\
                                An added bonus would be,<br>\
                                that Werdna's lips, I would meet...<br><br>\
                                But while chocolate milk is finite<br>\
                                My love for Werdna is unending<br>\
                                Because Werdna is my one true love,<br>\
                                no one else is even contending<br><br>\
                                Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                                Whatever name you go by doesn't matter.<br>\
                                I will call you mine.<br><br>\
                                Werdna, Werdna I love you<br><br>\
                                I could be, a chin-up bar<br>\
                                To make my Wernda stronk<br>\
                                The problem is, is Werdna's weight<br>\
                                My Werdna is too chomnk. <br><br>\
                                Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                                Whatever name you go by doesn't matter.<br>\
                                I will call you mine.<br><br>\
                                Werdna, Werdna won't you love me.<br><br>\
                                I could be, a mirror.<br>\
                                diverting Werdna's gaze.<br>\
                                For then I'd spend, my final days<br>\
                                Looking at his wonderful face<br><br>\
                                Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                                Whatever name you go by doesn't matter.<br>\
                                I will call you mine.<br><br>\
                                Werdna, won't you call me yours\"\
                                <br><br>As Nathan finishes the last note, a single tear falls from his eye. Andrew and Nathan return inside, and Emily heads off, presumably toward its house. You wonder if you can find out where the human lives. You enter the building by following Andrew and Nathan, leaving the piano outside by itself.<br><br>After you re-enter the building, you look back to find that the piano has vanished, and it is now 11:30 PM. You are thoroughly confused.",
                                            get: {
                                                item: "Name Emily",
                                                data: -1
                                            },
                                        },
                                        else: {
                                            msg: "As you pad down the hall towards the tall human's room, you decide to fast-forward the time for fun. You stop fast-forwarding when you see it coming out of its room. The human is holding a strange brass-coloured object. The human notices your inquiring look. <br><br>\"A trumpet.\" The human explains to you. <br><br>It carries the trumpet down the hall and out the door as you follow curiously. It is now mid-afternoon, so it is fairly bright outside. Waiting just outside is an enormous grand piano (which you recognize because your family has a piano at home). The situation seems to be getting stranger by the second. <br><br>As the male human approaches the piano, you notice a female human approaching as well, from another direction. This human is also carrying a trumpet.<br><br>\"Hello, Emily\" The male human says to the female. <br><br>\"Hello.\" Emily replies.<br><br>Without another word, the two humans raise the trumpets to their mouths and begin to play, each of them playing their trumpets one-handed. With the other hand, they begin to play piano. You look on, mystified, as the two begin a duet.<br><br>As though the whole arrangement couldn't get any stranger, Nathan suddenly steps out of the building and starts to sing:\
                                \"My... sweet... Werdna...<br>\
                                My... sweetheart<br>\
                                If you believe in the power of friendship<br>\
                                Nothing can keep us apart...<br><br>\
                                But that's just not good enough for me!<br>\
                                Without Werdna I cannot be<br>\
                                for if you would not have me then I'll... be<br><br>\
                                a robot for my Werdna!<br>\
                                Just for Werdna I will be a robot<br>\
                                But one small issue is that I may overheat<br>\
                                Just because, my Werdna is so hot.<br><br>\
                                My Werdna is too hot for me<br>\
                                But if not a robot, what else can I be?<br><br>\
                                Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                                Whatever name you go by doesn't matter.<br>\
                                I will call you mine.<br><br>\
                                Werdna, you're beautiful.<br><br>\
                                I could be, some chocolate milk<br>\
                                Nothing quite as sweet.<br>\
                                An added bonus would be,<br>\
                                that Werdna's lips, I would meet...<br><br>\
                                But while chocolate milk is finite<br>\
                                My love for Werdna is unending<br>\
                                Because Werdna is my one true love,<br>\
                                no one else is even contending<br><br>\
                                Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                                Whatever name you go by doesn't matter.<br>\
                                I will call you mine.<br><br>\
                                Werdna, Werdna I love you<br><br>\
                                I could be, a chin-up bar<br>\
                                To make my Wernda stronk<br>\
                                The problem is, is Werdna's weight<br>\
                                My Werdna is too chomnk. <br><br>\
                                Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                                Whatever name you go by doesn't matter.<br>\
                                I will call you mine.<br><br>\
                                Werdna, Werdna won't you love me.<br><br>\
                                I could be, a mirror.<br>\
                                diverting Werdna's gaze.<br>\
                                For then I'd spend, my final days<br>\
                                Looking at his wonderful face<br><br>\
                                Werdna! Dandrewlion. Andy. For you I'm trying<br>\
                                Whatever name you go by doesn't matter.<br>\
                                I will call you mine.<br><br>\
                                Werdna, won't you call me yours.\"\
                                <br><br>As Nathan finishes the last note, a single tear falls from his eye. Nathan and the other human return inside, and Emily heads off, presumably toward its house. You wonder if you can find out where Emily lives. You enter the building by following Nathan and the other human inside, leaving the piano outside by itself.<br><br>After you re-enter the building, you look back to find that the piano has vanished, and it is now 11:30 PM. You are thoroughly confused.",
                                            get: {
                                                item: "Name Emily",
                                                data: -1
                                            },
                                        },
                                    },
                                },
                            }
                        }
                    }
                },
                "kill": {
                    cmd: {
                        "(Andy|Dandrewlion|Werdna|Andrew)": {
                            if: {
                                cond: "chose kill Andrew",
                                msg: "Uh...you've already killed this one..."
                            },
                            else: {
                                if: {
                                    cond: "licence to kill revoked",
                                    msg: "Killing things doesn't feel so fun anymore..."
                                },
                                else: {
                                    if: {
                                        cond: "Name Andrew",
                                        msg: "You lunge at Andrew. The human yelps, startled. You could have chosen friendship, but instead you knock Andrew over with the impact of your leap (the element of surprise and your telekinetic powers may have helped knock him down as well). Your claws are driven into its flesh as the two of you hit the ground. <br><br>\"Not so intimidating anymore!\" You think to yourself. <br><br>As Andrew bleeds out, you look back up at the metal pole contraption. It didn't seem to have been helpful in keeping intruders such as yourself away. You feel a bit tired, so you curl up on the human's chest and fall asleep for a little while. You are asleep for a while, and then you awaken and realize that you should rewind time to heal the human, so you don't get in trouble. Hm. Revive? (\"yes\" or \"no\")",
                                        inc: "rest",
                                        inc2: "kill point A",
                                        get: {
                                            item: "Andrew life/death question",
                                            data: -1
                                        },
                                        dest: Locations.DecisionRoom
                                    },
                                    else: {
                                        msg: "You lunge at the tall, intimidating human. It yelps, startled. You could have chosen friendship, but instead you knock the human over with the impact of your leap (the element of surprise and your telekinetic powers may have helped knock it down as well). Your claws are driven into the human's flesh as the two of you hit the ground. \"Not so intimidating anymore!\" You think to yourself. As it bleeds out, you look back up at its metal pole contraption. It didn't seem to have been helpful in keeping intruders away. Hm. <br><br>\
                                    Now you have to decide. Revive? (\"yes\" or \"no\")",
                                        inc: "rest",
                                        inc2: "kill point A",
                                        get: {
                                            item: "Andrew life/death question",
                                            data: -1
                                        },
                                        dest: Locations.DecisionRoom
                                    },
                                },
                            },
                        },
                        Maia: {
                            if: {
                                cond: "chose kill Maia",
                                msg: "You've already killed this human. It lies on the ground, still holding the crossbow. You return to the hallway."
                            },
                            else: {
                                if: {
                                    cond: "licence to kill revoked",
                                    msg: "Killing things doesn't feel so fun anymore..."
                                },
                                else: {
                                    msg: "You lunge at the female human, but it pulls out a weapon that you recognize as a crossbow (you had died from being shot by one in a previous life). It won't get you this time. You rewind time a few seconds, to before the human has pulled it out. Your claws sink into the human's skin. You enjoy feeling its heartbeat slow and then stop under your paws. Now, do you revive the human? (\"yes\" or \"no\")",
                                    inc: "kill point Maia",
                                    get: {
                                        item: "Maia life/death question",
                                        data: -1
                                    },
                                    dest: Locations.DecisionRoom
                                },
                            },
                        },
                        Aliyah: {
                            if: {
                                cond: "chose kill Aliyah",
                                msg: "You've killed this one already, keep up!"
                            },
                            else: {
                                if: {
                                    cond: "licence to kill revoked",
                                    msg: "Killing things doesn't feel so fun anymore..."
                                },
                                else: {
                                    msg: "You enter the room of a female human. It reaches out to pet you, but you scratch its paw. It recoils in shock.<br><br>You kill the human. It's a weak human, so it doesn't put up much of a fight. You watch the life drain from its eyes as it looks at you in betrayal. You feel a slight pang of guilt. All the human wanted was to pet you. Revive? (\"yes\" or \"no\")",
                                    inc: "kill point Aliyah",
                                    get: {
                                        item: "Aliyah life/death question",
                                        data: -1
                                    },
                                    dest: Locations.DecisionRoom
                                },
                            },
                        },
                        Reu: {
                            if: {
                                cond: "chose kill Reu",
                                msg: "Uh...you can't kill someone who's still dead. Try \"revive Reu\" first if you want to kill him again."
                            },
                            else: {
                                if: {
                                    cond: "licence to kill revoked",
                                    msg: "Killing things doesn't feel so fun anymore..."
                                },
                                else: {
                                    if: {
                                        cond: "Name Phyllis",
                                        msg: "You re-enter the room of a tall human. It looks up from its desk at you and smiles. <br><br>\"Well, hello again!\" It starts to say. You run at the human and leap, sinking your claws into its throat. It stands and attempts to remove you from its throat, but you're determined. The human collapses on its couch after some struggle. <br><br>Once the life has left its eyes, you survey the room. You see a seal on the couch and you remember that its name is Phyllis. You pad over to Phyllis and meow at it. It does not respond.<br><br>You hop onto the chair that it had been sitting on before you had entered, and you note that it is a spinning chair. You spin yourself in the chair excitedly for a while. <br><br>\
                                        Now you have to decide: will you revive the human? (\"yes\" or \"no\")",
                                        inc: "kill point R",
                                        get: {
                                            item: "Reu life/death question",
                                            data: -1
                                        },
                                        dest: Locations.DecisionRoom
                                    },
                                    else: {
                                        msg: "You enter the room of a tall human. It looks up from its desk at you and smiles. <br><br>\"Well, hello!\" It starts to say. You run at the human and leap, sinking your claws into its throat. It stands and attempts to remove you from its throat, but you're determined. The human collapses on its couch after some struggle. <br><br>Once the life has left its eyes, you survey the room. You hop onto the chair that the human had been sitting on before you had entered, and you note that it is a spinning chair. You spin yourself in the chair excitedly for a while. <br><br>\
                                        Now you have to decide: will you revive the human? (\"yes\" or \"no\")",
                                        inc: "kill point R",
                                        get: {
                                            item: "Reu life/death question",
                                            data: -1
                                        },
                                        dest: Locations.DecisionRoom
                                    },
                                },
                            },
                        },
                        Nathan: {
                            if: {
                                cond: "chose kill Nathan",
                                msg: "Really? Trying to kill the same person twice? If you can't keep track of who you've killed, maybe the murder game isn't for you."
                            },
                            else: {
                                if: {
                                    cond: "licence to kill revoked",
                                    msg: "Killing things doesn't feel so fun anymore..."
                                },
                                else: {
                                    msg: "Padding into Nathan's room from the hall, you lunge at Nathan, plunging your claws into him. As he bleeds out onto the carpet, you start to perhaps regret your actions. Should you revive him? (\"Yes\" or \"no\")",
                                    get: {
                                        item: "Nathan life/death question",
                                        data: -1
                                    },
                                    inc: "kill point N",
                                    dest: Locations.DecisionRoom
                                },
                            },
                        },
                        "(Treacys|treacy|Jackie Claire|Claire Jackie)": {
                            if: {
                                cond: "licence to kill revoked",
                                msg: "Killing things doesn't feel so fun anymore..."
                            },
                            else: {
                                if: {
                                    cond: "Treacy killer",
                                    msg: "Lucky reluctantly goes to kill the Treacys. After slaughtering both of them, she dies shortly after due to sheer grief and sadness. Why did you make her do this? What kind of cruel overlord are you?<br><br>\
                                    You should take some time to think about what you've done. Maybe go back to a more wholesome time in your youth.",
                                    inc: "kill point Claire",
                                    inc2: "kill point Jackie",
                                    end: 540
                                },
                                else: {
                                    msg: ">:( Why would you want to kill the Treacys?? You can try again if you *want* but that makes you a mean person...",
                                    get: {
                                        item: "Treacy killer",
                                        data: -1
                                    },
                                },
                            }
                        },
                        Jake: {
                            if: {
                                cond: "licence to kill revoked",
                                msg: "Killing things doesn't feel so fun anymore..."
                            },
                            else: {
                                if: {
                                    cond: "Jake killer",
                                    msg: "Lucky reluctantly goes to kill Jake., solely doing it because you asked her to. After slaughtering the human, she dies shortly after due to sheer grief and sadness. Why did you make her do this? What kind of cruel overlord are you? You should take some time to think about what you've done. Maybe go back to a more wholesome time in your youth. Take a nap, even.",
                                    inc: "kill point Jake",
                                    end: 541
                                },
                                else: {
                                    msg: ">:( Why would you want to kill jake?? You can try again if you *want* but that makes you a mean person...",
                                    get: {
                                        item: "Jake killer",
                                        data: -1
                                    },

                                }
                            }
                        }
                    },
                },
                "(chocolate|dining)": {
                    cmd: {
                        "(milk|hall)": {
                            if: {
                                cond: "chose kill Andrew",
                                if: {
                                    cond: "Name Andrew",
                                    msg: "You trot up to Andrew's room to see the human, and then you remember that you'd killed it. \"revive Andy\" to get chocolate milk together."
                                },
                                else: {
                                    msg: "You go to see the tall, intimidating human, and then you remember that you'd killed it already. Hm. Maybe you should try to \"revive Werdna\" to see how this interaction would be different..."
                                },
                            },
                            else: {
                                if: {
                                    cond: "Name Andrew",
                                    img: "Images/AndrewDiningHall.JPG",
                                    msg: "You go to see the human (whose name you now know to be Andrew). As you walk up, it's leaving the room. It seems surprised to see you. <br><br>\"Oh hi...\" Andrew says to you. \"I'm just kind of craving some sugar and possibly a banana, so I'm headed to the dining hall to get some chocolate milk. Want to come?\" <br><br>\
                                You nod and follow the human. You pad down the hallway after it. <br><br>\
                                Andrew watches you as you walk together. <br><br>\"Are you Nathan's cat?\" It asks you. \"Why am I talking to a cat...\" It mutters to itself. You nod in response to its question. It ignores your nod. You roll your eyes. <br><br>\
                                You arrive at the dining hall. It pours itself a glass of chocolate milk and grabs a banana. Realizing that cats can't have chocolate, Andrew sets down a glass of water for you. You do like drinking water out of glasses, but you usually do it when your family leaves cups unattended. It's less satisfying when you're not being mischievous, but you drink it anyway. After the two of your finish your drinks, you return to the hallway and the human returns to its room.",
                                    inc: "water",
                                },
                                else: {
                                    img: "Images/AndrewDiningHall.JPG",
                                    msg: "You go to see the tall, intimidating human. As you walk up, it's leaving the room. It seems surprised to see you. <br><br>\"Oh hi...\" It says to you. \"I'm just kind of craving some sugar and possibly a banana, so I'm headed to the dining hall to get some chocolate milk. Want to come?\" <br><br>\
                                You nod and follow the human. You pad down the hallway after it. <br><br>\
                                The human watches you as you walk together. <br><br>\"Are you Nathan's cat?\" It asks you. \"Why am I talking to a cat...\" It mutters to itself. You nod in response to its question. It ignores your nod. You roll your eyes. <br><br>\
                                You arrive at the dining hall. It pours itself a glass of chocolate milk and grabs a banana. Realizing that cats can't have chocolate, the human sets down a glass of water for you. You do like drinking water out of glasses, but you usually do it when your family leaves cups unattended. It's less satisfying when you're not being mischievous, but you drink it anyway. After the two of your finish your drinks, you return to the hallway and the human returns to its room.",
                                    inc: "water",
                                }
                            },
                        },
                    },
                },
                "hard": {
                    cmd: {
                        "hat": {
                            if: {
                                cond: "chose kill Andrew",
                                msg: "You don't really want to take the hard hat...what fun is there in taking things from the dead? The best part of taking the hard hat would be to mess with the human...",
                            },
                            else: {
                                msg: "You go to see the tall intimidating human. You dart in, jump onto its bed, and take the yellow hard hat hanging on its bedpost. The human notices you leaving with the hat and doesn't know what to do. You run around the building as he follows you. As you run through the fourth floor, a human comes out a room. It laughs and says <br><br>\"A cat's taken your hard hat? How did that happen, Andrew?\" <br><br>\"Shut up\" The tall human replies. You run back downstairs, and you're faster than he is, so you make it to Andrew's room first. You leave the hat on the bedpost and leave the room.",
                                get: {
                                    item: "Name Andrew",
                                    data: -1,
                                },
                            },
                        },
                    },
                },
                "mirror": {
                    if: {
                        cond: "chose kill Andrew",
                        msg: "You go to one of your victims' rooms and step over its body to get to the mirror. You stare at it for a while, entranced by the ability of the cat in the mirror to copy your every move. You try to make sudden movements to trick it, but it follows perfectly. <br><br>\
                        You eventually go back to the hallway."
                    },
                    else: {
                        if: {
                            cond: "Name Andrew",
                            msg: "Andrew turns around in its seat to look at itself in the mirror. After admiring its appearance for several minutes, it goes back to work."
                        },
                        else: {
                            msg: "The human turns around in its seat to look at itself in the mirror. After admiring its appearance for several minutes, it goes back to work.",
                        },
                    },
                },
                "banana": {
                    if: {
                        cond: "chose kill Andrew",
                        msg: "You go to one of your victims' rooms and get a banana from a shelf.",
                        inc: "banana",
                        inc2: "food"
                    },
                    else: {
                        if: {
                            cond: "Name Andrew",
                            img: "Images/AndrewBanana.PNG",
                            msg: "Andrew eats a banana"
                        },
                        else: {
                            img: "Images/AndrewBanana.PNG",
                            msg: "The human eats a banana.",
                        },
                    },
                },
                "weed": {
                    if: {
                        cond: "chose kill Maia",
                        if: {
                            cond: "chose kill Nathan",
                            msg: "You go into the room of one of the humans that you had killed. It still lies dead on the floor. You step over its body to get some of the plant from the window. Perhaps Nathan will know what to do with it - hmm, you've killed Nathan... I suppose you'll have to revive him if you want to deliver the weed. You take it and return to the hallway. (\"revive Nathan\" and then \"deliver weed\" to give to Nathan, also \"revive Maia\" if you want that)",
                            inc: "weed",
                        },
                        else: {
                            msg: "You go into the room of one of the humans that you had killed. It still lies dead on the floor. You step over its body to get some of the plant from the window. Perhaps Nathan will know what to do with it. You return to the hallway. (\"deliver weed\" to give to Nathan, \"revive Maia\" if you want that)",
                            inc: "weed",
                        },
                    },
                    else: {
                        if: {
                            cond: "chose kill Nathan",
                            msg: "You walk up to one of the female humans in its room. The human turns around, not pleased to see you. You get the impression that it doesn't like cats. You decide to play nice and you sit at its feet. You notice that the human has some kind of plant in its hands. You tilt your head at it inquiringly. The human notices you looking at the plant. <br><br>\"It's weed, it's like the human equivalent of catnip.\" The human explains. You nod. You do enjoy catnip.<br><br>\"Weed probably isn't good for cats, but if you want, you can keep me company as I go deliver it to Nathan's room. I deal weed out of his window.\" It says.<br><br> Realizing that Nathan is dead, which means that there is no one for the human to deliver it to, you decide to take the weed. You can revive Nathan if you want, or just hold on to the weed. (\"revive Nathan\" and then \"deliver weed\" to give to Nathan)",
                            inc: "weed",
                        },
                        else: {
                            msg: "You walk up to one of the female humans in its room. The human turns around, not pleased to see you. You get the impression that it doesn't like cats. You decide to play nice and you sit at its feet. You notice that the human has some kind of plant in its hands. You tilt your head at it inquiringly. The human notices you looking at the plant. <br><br>\"It's weed, it's like the human equivalent of catnip.\" The human explains. You nod. You do enjoy catnip.<br><br>\"Weed probably isn't good for cats, but if you want, you can keep me company as I go deliver it to Nathan's room. I deal weed out of his window.\" It says.<br><br> You grab the leaves from the human as it's about to leave and you decide to deliver the weed to Nathan. (\"deliver weed\" to give to Nathan)",
                            inc: "weed",
                        },
                    },
                },
                "(deliver|give)": {
                    cmd: {
                        "weed": {
                            if: {
                                cond: "chose kill Nathan",
                                msg: "Nathan is dead, but you decide to put the weed in his room anyway.",
                                get: {
                                    item: "weed",
                                    data: -1
                                }
                            },
                            else: {
                                msg: "You go to Nathan's room and give him the weed.",
                                get: {
                                    item: "weed",
                                    data: -1
                                },
                            },
                        },
                    },
                },
                "Jake": {
                    msg: "You wander down a flight of stairs and eventually come across an open door that you decide to enter. You see what appears to be a fairly tall male human who has dark curly hair. You walk into the room and curl up on its lap. It seems surprised but accepts it. It asks you if you like watching sports. You do like watching the players run around on the screen, but you have no idea what's happening in the game. You nod at the human. it seems surprised, but seems to then write it off as its imagination. \"Humans\" You scoff to yourself. <br><br>You fall asleep as the two of you watch sports together. Later, he gets up to go to bed, and you return to the hallway.",
                    inc: "rest",
                },
                "play": {
                    cmd: {
                        "basketball": {
                            msg: "You sit at a door and move forward in time until a tall, male human with dark curly hair comes and opens it. The human is carrying an orange ball with black lines on it. It doesn't notice you immediately as you follow it out the door. You follow the human down the path until it stops at a gravelly flat rectangular area. There is a pole a flat rounded rectangle perched on the top of the pole, along with a net. The human notices you at last, and smiles at you. It bounces the ball on the ground and throws it at the top of the pole. You tilt your head at the pole structure, unsure what the objective of the game is. Perhaps the human is trying to destroy the pole? The human cheers as the ball passes through the net. You are thoroughly baffled. Does the human not realize that the pole has not been knocked over and that the ball has escaped the net? What could the objective be? The human sets the ball down in front of you, and you decide to copy its actions. Using your telekinesis, you lift the ball carefully, carrying it toward the hoop and letting it fall directly into the net. The human looks shocked. You repeat this a few more times, then decide that you want to go back to hall-wandering, so you rewind time slowly, following him back inside. It is now 11:30 PM and you are in the hallway.",
                            inc: "won basketball game!",
                        },
                    },
                },
                "Nathan": {
                    msg: "You head over to Nathan's room.",
                    dest: Locations.nathan2,
                },
                "Headquarters": {
                    if: {
                        cond: "licence to kill revoked",
                        msg: "Your licence to kill was revoked, remember?"
                    },
                    else: {
                        if: {
                            cond: "licence to kill",
                            msg: "You are transported back to Headquarters",
                            dest: Locations.Headquarters
                        },
                        else: {
                            msg: "What's Headquarters?"
                        },
                    },
                },
                "(Emily|garden)": {
                    msg: "You go to a door that leads outside, and you skip time until someone has opened it. You slip out behind them, unnoticed. You find the garden, and you explore a little. As you're sniffing a bean plant, you blink and realize that the scene has changed. You look under your feet to see the now-familiar blue shimmery circle shrinking. It stops at about a paw wide. You paw at it, hoping for a way to escape, and it readily opens. You go back to the garden, and then return to the strange room. If you want to return, you can always go back to the garden (type \"garden\" to return) You take a look around.",
                    get: {
                        item: "has been to Emily's house before",
                        data: -1
                    },
                    dest: Locations.Emily
                },
                "(Follow|go)": {
                    if: {
                        cond: "the gift of knowledge",
                        msg: "You go into the closet where you'd seen the human disappear, as it sits working at its desk.. Where are you?",
                        dest: Locations.AliyahRoom2,
                    },
                    else: {
                        msg: "Follow who? Huh?"
                    }
                },
                "revive": {
                    msg: "Revive who?",
                    cmd: {
                        "Reu": {
                            if: {
                                cond: "chose kill Reu",
                                msg: "Alright, fine. You decide to revive the tall human, using the power of your healing tears so as to not delete any events you might have done in between killing and reviving the human. You return to the hallway.",
                                get: {
                                    item: "chose kill Reu",
                                    data: 0
                                },
                                get2: {
                                    item: "revived Reu",
                                    data: -1
                                }
                            },
                            else: {
                                msg: "Revive? The tall human is still alive!"
                            }
                        },
                        "Maia": {
                            if: {
                                cond: "chose kill Maia",
                                msg: "You decide to revive Maia because you're boring and you don't like living on the edge.",
                                get: {
                                    item: "chose kill Maia",
                                    data: 0
                                },
                                get2: {
                                    item: "revived Maia",
                                    data: -1
                                }
                            },
                            else: {
                                msg: "You can't revive someone who's still alive..."
                            }
                        },
                        "Nathan": {
                            if: {
                                cond: "chose kill Nathan",
                                msg: "You decide to revive Nathan because you're boring and you don't like living on the edge.",
                                get: {
                                    item: "chose kill Nathan",
                                    data: 0
                                },
                                get2: {
                                    item: "revived Nathan",
                                    data: -1
                                }
                            },
                            else: {
                                msg: "You can't revive someone who's still alive..."
                            }
                        },
                        "Emily": {
                            if: {
                                cond: "chose kill Emily",
                                msg: "*sigh* fine.",
                                get: {
                                    item: "chose kill Emily",
                                    data: 0
                                },
                                get2: {
                                    item: "revived Emily",
                                    data: -1
                                }
                            },
                            else: {
                                msg: "You can't revive someone who's still alive..."
                            }
                        },
                        "(Andy|Dandrewlion|Werdna)": {
                            if: {
                                cond: "chose kill Andrew",
                                msg: "Fine, fine.",
                                get: {
                                    item: "chose kill Andrew",
                                    data: 0
                                },
                                get2: {
                                    item: "revived Andrew",
                                    data: -1
                                }
                            },
                            else: {
                                msg: "You can't kill someone who's still alive."
                            }
                        },
                        "Andrew": {
                            msg: "Hmm. I don't know who Andrew is. Maybe try reviving Andy, Werdna, or Dandrewlion?"
                        },
                        "Aliyah": {
                            if: {
                                cond: "chose kill Aliyah",
                                msg: "You decide to revive the human (good choice). You use your amnesic healing tears to heal the human. When you're finished, the human sees you and reaches out to pet you. You comply, hopping up onto the human's lap, feeling somewhat guilty for killing the human in the first place. You fall asleep.<br><br>\
                                Later, you return to the hall.",
                                inc: "rest",
                                get: {
                                    item: "chose kill Aliyah",
                                    data: 0
                                },
                                get2: {
                                    item: "revived Aliyah",
                                    data: -1
                                }
                            },
                            else: {
                                msg: "You can't revive someone who's still alive..."
                            }
                        },
                    }
                }
            },
        },
        Emily: {
            if: {
                cond: "chose kill Emily",
                cmd: {
                    "hint": {
                        if: {
                            cond: "chose kill Eevee",
                            msg: "Here are all your possible commands for Emily's room:<br><br>\
                    revive Emily<br>\
                    revive Eevee<br>\
                    look (what you see changes depending on whether or not you've seen Eevee)<br>\
                    bean<br>\
                    Emily<br>\
                    Eevee/cat<br>\
                    kill Emily<br>\
                    kill Eevee<br>\
                    portal<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>"
                        },
                        else: {
                            msg: "Here are all your possible commands for Emily's room:<br><br>\
                    revive Emily<br>\
                    look (what you see changes depending on whether or not you've seen Eevee)<br>\
                    bean<br>\
                    Emily<br>\
                    Eevee/cat<br>\
                    kill Emily<br>\
                    kill Eevee<br>\
                    portal<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>"
                        },
                    },
                    l: {
                        if: {
                            cond: "Name Eevee",
                            if: {
                                cond: "chose kill Eevee",
                                if: {
                                    cond: "Name Emily",
                                    img1: "Images/DeadEmily.jpeg",
                                    img2: "Images/Emily.jpeg",
                                    msg: "You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. Eevee is lying dead on the floor. Also, Emily lies dead on the floor as its ghost wanders around gleefully. It seems to enjoy being a ghost.",
                                    clear: 1,
                                    cmd: {
                                        "bean": {
                                            img1: "Images/BabyHeartBeans.jpeg",
                                            img2: "Images/HeartBean.jpeg",
                                            msg: "You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.",
                                        }
                                    }
                                },
                                else: {
                                    img: "Images/Emily.jpeg",
                                    msg: "You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. Eevee is lying dead on the floor. Also, a human dead body lies on the floor as its ghost wanders around gleefully.",
                                    clear: 1,
                                    cmd: {
                                        "bean": {
                                            img: "Images/BabyHeartBeans.jpeg",
                                            img2: "Images/HeartBean.jpeg",
                                            msg: "You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.",
                                        }
                                    }
                                }
                            },
                            else: {
                                if: {
                                    cond: "Name Emily",
                                    img1: "Images/DeadEmily.jpeg",
                                    img2: "Images/Emily.jpeg",
                                    msg: "You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. Eevee is in the room with you, looking outside. Also, Emily lies dead on the floor as its ghost wanders around gleefully. It seems to enjoy being a ghost.",
                                    clear: 1,
                                    cmd: {
                                        "bean": {
                                            img: "Images/BabyHeartBeans.jpeg",
                                            img2: "Images/HeartBean2.jpeg",
                                            msg: "You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.",
                                        }
                                    }
                                },
                                else: {
                                    img1: "Images/HeartBean2.jpeg",
                                    img2: "Images/Emily.jpeg",
                                    msg: "You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. Eevee is in the room with you, looking outside. Also, a dead body lies on the floor as its ghost wanders around gleefully.",
                                    clear: 1,
                                    cmd: {
                                        "bean": {
                                            img: "Images/BabyHeartBeans.jpeg",
                                            img2: "Images/HeartBean.jpeg",
                                            msg: "You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.",
                                        }
                                    }
                                }
                            },
                        },
                        else: {
                            if: {
                                cond: "Name Emily",
                                img: "Images/Emily.jpeg",
                                msg: "You see a bunch of bean plants and a few flowers in front of a window. They're in some odd pots, they look like they might be teapots. Interesting. You wonder who lives here. You can smell a cat! Perhaps a new friend? Also, Emily lies dead on the floor, its ghost wandering the room gleefully. It seems to enjoy being a ghost.",
                                clear: 1,
                                cmd: {
                                    "bean": {
                                        img1: "Images/BabyHeartBeans.jpeg",
                                        img2: "Images/HeartBean.jpeg",
                                        msg: "You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.",
                                    }
                                }
                            },
                            else: {
                                if: {
                                    cond: "chose kill Eevee",
                                    img: "Images/Emily.jpeg",
                                    msg: "You see a bunch of bean plants and a few flowers in front of a window. They're in some odd pots, they look like they might be teapots. Interesting. A cat lies dead on the floor. Also, a dead body lies on the floor, its ghost wandering the room gleefully. It seems to enjoy being a ghost.",
                                    clear: 1,
                                    cmd: {
                                        "bean": {
                                            img: "Images/BabyHeartBeans.jpeg",
                                            img2: "Images/HeartBean.jpeg",
                                            msg: "You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.",
                                        },
                                    }
                                },
                                else: {
                                    img1: "Images/Emily.jpeg",
                                    msg: "You see a bunch of bean plants and a few flowers in front of a window. They're in some odd pots, they look like they might be teapots. Interesting. You wonder who lives here. You can smell a cat! Perhaps a new friend? Also, a dead body lies on the floor, its ghost wandering the room gleefully. It seems to enjoy being a ghost.",
                                    clear: 1,
                                    cmd: {
                                        "bean": {
                                            img: "Images/BabyHeartBeans.jpeg",
                                            img2: "Images/HeartBean.jpeg",
                                            msg: "You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.",
                                        },
                                    }
                                }
                            },
                        },
                    },
                    "bean": {
                        img: "Images/BabyHeartBeans.jpeg",
                        img2: "Images/HeartBean.jpeg",
                        msg: "You admire the bean plants. You rewind time and fast-forward again, watching them grow up over time.",
                    },
                    "Emily": {
                        if: {
                            cond: "Name Emily",
                            msg: "You trot over to where Emily lies on the floor. You admire your handiwork. (If you feel guilty, type \"revive Emily\")"
                        },
                        else: {
                            msg: "Trotting over to where the human lies on the floor, you admire your handiwork. (If you feel guilty, type \"revive Emily\")",
                        },
                    },
                    "(Eevee|cat)": {
                        if: {
                            cond: "chose kill Eevee",
                            msg: "You look at the dead body of the fluffy cat. You are proud that you managed to take her down, it was quite a fight! It was lucky that you were experienced enough to kill her, or you might not have been able to do it! (If you're feeling guilty, you can \"revive Eevee\""
                        },
                        else: {
                            img: "Images/Eevee.jpeg",
                            msg: "A large light-coloured fluffy cat enters the room. <br><br>\"Hello!\" You say to her. <br><br>\"This is my house!\" She hisses at you. You take a step back and try to appear as non-threatening as possible. \"I've arrived here using a portal, I'm just planning on wandering around for a bit and then returning to where I came from\" You explain. <br><br>\
                            Eevee notices the body of the human on the floor and looks at you in shock. \"Did you...kill her?\" She asks you. \"Yep!\" You reply. The cat doesn't seem to know what to say to that.<br><br>\
                            \"So anyway,as I was saying\" you continue, \"I came here using a portal!\"\
                            <br><br>\"A portal?\" She asks. <br><br>\"Yes, it's a blue shimmery circle that allows me to travel through space.\" You add. <br><br>She seems skeptical, so you lead her to the circle. <br><br> \"I see nothing\" She scoffs. You blink in confusion. It's right there, in plain sight! You think to yourself...You decide to take a quick trip to the other building and back, to prove it. When you come back, the cat seems shocked. <br><br>\"You just vanished into thin air!\" She exclaims. You smile. <br><br>\"That's only one of the things I can do.\" You lift the bean plants off the table telekinetically to demonstrate. You realize that you don't even know this cat's name. \"What's your name?\" You ask her. \"Eevee\" She responds.",
                            get: {
                                item: "Name Eevee",
                                data: -1
                            }
                        },
                    },
                    kill: {
                        cmd: {
                            "Emily": {
                                if: {
                                    cond: "licence to kill revoked",
                                    msg: "Killing things doesn't feel so fun anymore..."
                                },
                                else: {
                                    msg: "I hate to break it to you, but you've already killed this one..."
                                },
                            },
                            "Eevee": {
                                if: {
                                    cond: "chose kill Eevee",
                                    msg: "You chose to keep her dead, you can't kill her again (unless you revive her- \"revive Eevee\")"
                                },
                                else: {
                                    if: {
                                        cond: "licence to kill revoked",
                                        msg: "Killing things doesn't feel so fun anymore..."
                                    },
                                    else: {
                                        if: {
                                            cond: "kill point N",
                                            if: {
                                                cond: "kill point A",
                                                if: {
                                                    cond: "kill point Maia",
                                                    if: {
                                                        cond: "kill point M",
                                                        if: {
                                                            cond: "kill point Em",
                                                            if: {
                                                                cond: "kill point Aliyah",
                                                                if: {
                                                                    cond: "kill point R",
                                                                    if: {
                                                                        cond: "kill point B",
                                                                        msg: "You decide to kill Eevee. You unsheathe your claws into her throat. She is surprised but fights back. Unfortunately for her, you are well-experienced. You have killed many before her. Baba, Mumu, Nathan, a few of his friends...<br><br>She gets a few scratches in before she ultimately succumbs to you. You feel powerful. Now comes the question: should you revive her? (\"Yes\" or \"no\")",
                                                                        get: {
                                                                            item: "Eevee life/death question",
                                                                            data: -1
                                                                        },
                                                                        inc2: "kill point Ev",
                                                                        dest: Locations.DecisionRoom
                                                                    },
                                                                    else: {
                                                                        msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                                        dest: Locations.hallway3,
                                                                    },
                                                                },
                                                                else: {
                                                                    msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                                    dest: Locations.hallway3,
                                                                },
                                                            },
                                                            else: {
                                                                msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                                dest: Locations.hallway3,
                                                            },
                                                        },
                                                        else: {
                                                            msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                            dest: Locations.hallway3,
                                                        },
                                                    },
                                                    else: {
                                                        msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                        dest: Locations.hallway3,
                                                    },
                                                },
                                                else: {
                                                    msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                    dest: Locations.hallway3,
                                                },
                                            },
                                            else: {
                                                msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                dest: Locations.hallway3,
                                            },
                                        },
                                        else: {
                                            msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                            dest: Locations.hallway3,
                                        },
                                    },
                                },
                            }
                        },
                    },
                    "(garden|Grebel|portal)": {
                        msg: "You head back to the garden through the portal and walk up to outside Nathan's room. You're in the hallway.",
                        dest: Locations.hallway3
                    },
                    "revive": {
                        cmd: {
                            "Emily": {
                                if: {
                                    cond: "Name Emily",
                                    msg: "Emily's ghost glares at you as you approach. It knows what's about to happen, and it likes being a ghost! You rewind time, making it so she never died.",
                                    get: {
                                        item: "chose kill Emily",
                                        data: 0
                                    },
                                    get2: {
                                        item: "revived Emily",
                                        data: -1
                                    }
                                },
                                else: {
                                    msg: "The human's ghost glares at you as you approach, knowing that you are about to revive it. It likes being a ghost! You ignore its disapproval and rewind time to let the human live again.",
                                    get: {
                                        item: "chose kill Emily",
                                        data: 0
                                    },
                                    get2: {
                                        item: "revived Emily",
                                        data: -1
                                    }
                                },
                            },
                            "Eevee": {
                                if: {
                                    cond: "chose kill Eevee",
                                    msg: "You sigh and rewind time to allow Eevee to live. You do hate having to deal with consequences for your actions, you suppose.",
                                    get: {
                                        item: "chose kill Eevee",
                                        data: 0
                                    },
                                    get2: {
                                        item: "revived Eevee",
                                        data: -1
                                    }
                                },
                                else: {
                                    msg: "Huh?"
                                }

                            }
                        },
                    },
                },
            },
            else: {
                cmd: {
                    "hint": {
                        if: {
                            cond: "chose kill Eevee",
                            msg: "Here are all your possible commands for Emily's room:<br><br>\
                            revive Eevee<br>\
                            look (what you see changes)<br>\
                            bean<br>\
                            Emily<br>\
                            Eevee/cat<br>\
                            kill Emily<br>\
                            kill Eevee<br>\
                            portal<br>\
                            inv<br>\
                            clear<br>\
                            help<br>\
                            hint<br>"
                        },
                        else: {
                            msg: "Here are all your possible commands for Emily's room:<br><br>\
                            look (what you see changes)<br>\
                            bean<br>\
                            Emily<br>\
                            Eevee/cat<br>\
                            kill Emily<br>\
                            kill Eevee<br>\
                            portal<br>\
                            inv<br>\
                            clear<br>\
                            help<br>\
                            hint<br>"
                        },
                    },
                    l: {
                        if: {
                            cond: "Name Eevee",
                            if: {
                                cond: "chose kill Eevee",
                                img: "Images/Emily.jpeg",
                                msg: "You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. Eevee lies dead.",
                                clear: 1
                            },
                            else: {
                                img1: "Images/HeartBean2.jpeg",
                                img2: "Images/Emily.jpeg",
                                msg: "You see a bunch of bean plants in front of a window. They're in some odd pots that look like they could be teapots. Eevee is in the room with you, looking outside.",
                                clear: 1
                            },
                        },
                        else: {
                            if: {
                                cond: "chose kill Eevee",
                                img: "Images/Emily.jpeg",
                                msg: "You see a bunch of bean plants and a few flowers in front of a window. They're in some odd pots, they look like they might be teapots. Interesting. You wonder who lives here. You can smell a cat! Perhaps a new friend?",
                                clear: 1,
                            },
                            else: {
                                img: "Images/Emily.jpeg",
                                msg: "You see a bunch of bean plants and a few flowers in front of a window. They're in some odd pots, they look like they might be teapots. Interesting. You wonder who lives here. You can smell a cat! Perhaps a new friend?",
                                clear: 1,
                            },
                        }
                    },
                    "bean": {
                        img: "Images/BabyHeartBeans.jpeg",
                        img2: "Images/HeartBean.jpeg",
                        msg: "You admire the bean plants. You rewind time and fast-forward again, seeing them grow up.",
                    },
                    "Emily": {
                        if: {
                            cond: "Name Emily",
                            if: {
                                cond: "chose kill Eevee",
                                msg: "As you admire the wonderfully growing beans, Emily walks into the room. Ah, it seems that you have managed to find the human's house! Emily seems surprised to see you.<br><br>\"Lucky?\" It asks you. You roll your eyes. \"Yes?\" You meow back at it. Emily seems unsure what it should say next. Emily suddenly realizes that Eevee lying dead on the floor, and it looks at you in shock! You decide that it's time to revive Eevee, so you rewind time to undo it. If you still want to kill her, be more careful this time!",
                                get: {
                                    item: "chose kill Eevee",
                                    data: 0
                                },
                            },
                            else: {
                                msg: "As you admire the wonderfully growing beans, Emily walks into the room. Ah, it seems that you have managed to find the human's house! Emily seems surprised to see you.<br><br>\"Lucky?\" It asks you. You roll your eyes. \"Yes?\" You meow back at it. Emily seems unsure what it should say next. You turn your attention back to the beans. <br><br>\"Those are icicle water heart beans.\" Emily explains to you. You stare at the human. It had just strung a bunch of random words together and pretended that it was an explanation. Turning your attention to the beans, you ignore the human. Emily laughs to itself as it leaves the room."
                            },
                        },
                        else: {
                            if: {
                                cond: "chose kill Eevee",
                                msg: "As you admire the wonderfully growing beans, a human walks into the room. It seems surprised to see you.<br><br>\"Lucky?\" It asks you. You roll your eyes. \"Yes?\" You meow back at it. It seems unsure what it should say next. Then, the human suddenly realizes that Eevee is lying dead on the floor, and it looks at you in shock! You decide that it's time to revive Eevee, so you rewind time to undo it. If you still want to kill her, be more careful this time!",
                                get: {
                                    item: "chose kill Eevee",
                                    data: 0
                                },
                            },
                            else: {
                                msg: "As you're looking at the wonderfully growing beans, a female human walks into the room. It seems surprised to see you.<br><br>\"Lucky?\" It asks you. You roll your eyes \"Yes?\" You meow back at it. How does it know your name? You wonder. You turn your attention back to the beans. <br><br>\"Those are icicle water heart beans.\" the human explains to you. You stare at the human. Really, 'icicle water heart beans'? It seems like the human had just strung a bunch of random words together and pretended that it was an explanation. \"My name is Emily\" It adds. Turning your attention to the beans, you ignore the human. It laughs to itself as it leaves the room.",
                                get: {
                                    item: "Name Emily",
                                    data: -1
                                }
                            },
                        }
                    },
                    "(Eevee|cat)": {
                        if: {
                            cond: "chose kill Eevee",
                            msg: "You look at the dead body of the fluffy cat. You are proud that you managed to take her down, it was quite a fight! It was lucky that you were experienced enough to kill her, or you might not have been able to do it! (If you're feeling guilty, you can \"revive Eevee.\""
                        },
                        else: {
                            img: "Images/Eevee.jpeg",
                            msg: "A large light-coloured fluffy cat enters the room. <br><br>\"Hello!\" You say to her. <br><br>\"This is my house!\" She hisses at you. You take a step back and try to appear as non-threatening as possible. \"I've arrived here using a portal, I'm just planning on wandering around for a bit and then returning to where I came from\" You explain. <br><br>\"A portal?\" She asks. <br><br>\"Yes, it's a blue shimmery circle that allows me to travel through space.\" You add. <br><br>She seems skeptical, so you lead her to the circle. <br><br> \"I see nothing\" She scoffs. You blink in confusion. It's right there, in plain sight! You think to yourself...You decide to take a quick trip to the other building and back, to prove it. When you come back, the cat seems shocked. <br><br>\"You just vanished into thin air!\" She exclaims. You smile. <br><br>\"That's only one of the things I can do.\" You lift the bean plants off the table telekinetically to demonstrate. You realize that you don't even know this cat's name. \"What's your name?\" You ask her. \"Eevee\" She responds.",
                            get: {
                                item: "Name Eevee",
                                data: -1
                            }
                        },
                    },
                    kill: {
                        cmd: {
                            "Emily": {
                                if: {
                                    cond: "licence to kill revoked",
                                    msg: "Killing things doesn't feel so fun anymore..."
                                },
                                else: {
                                    msg: "The human walks into the room and you decide to kill it. Lunging for its throat, you sink your claws in. The human is knocked down by the force, and fights it a little, but ultimately accepts its fate. Now, do you rewind time to revive her or not? (\"yes\" or \"no\")",
                                    inc: "kill point Em",
                                    get: {
                                        item: "Emily life/death question",
                                        data: -1
                                    },
                                    dest: Locations.DecisionRoom
                                },
                            },
                            "Eevee": {
                                if: {
                                    cond: "chose kill Eevee",
                                    msg: "You chose to keep her dead, you can't kill her again (unless you revive her- \"revive Eevee\")"
                                },
                                else: {
                                    if: {
                                        cond: "licence to kill revoked",
                                        msg: "Killing things doesn't feel so fun anymore..."
                                    },
                                    else: {
                                        if: {
                                            cond: "kill point N",
                                            if: {
                                                cond: "kill point A",
                                                if: {
                                                    cond: "kill point Maia",
                                                    if: {
                                                        cond: "kill point M",
                                                        if: {
                                                            cond: "kill point Em",
                                                            if: {
                                                                cond: "kill point Aliyah",
                                                                if: {
                                                                    cond: "kill point R",
                                                                    if: {
                                                                        cond: "kill point B",
                                                                        msg: "You decide to kill Eevee. You unsheathe your claws into her throat. She is surprised but fights back. Unfortunately for her, you are well-experienced. You have killed many before her. Baba, Mumu, Nathan, a few of his friends...<br><br>She gets a few scratches in before she ultimately succumbs to you. You feel powerful. Now here comes the question: rewind time to save her or not? (\"yes\" or \"no\")",
                                                                        inc: "kill point Ev",
                                                                        get: {
                                                                            item: "Eevee life/death question",
                                                                            data: -1
                                                                        },
                                                                        dest: Locations.DecisionRoom
                                                                    },
                                                                    else: {
                                                                        msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                                        dest: Locations.hallway3,
                                                                    },
                                                                },
                                                                else: {
                                                                    msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                                    dest: Locations.hallway3,
                                                                },
                                                            },
                                                            else: {
                                                                msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                                dest: Locations.hallway3,
                                                            },
                                                        },
                                                        else: {
                                                            msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                            dest: Locations.hallway3,
                                                        },
                                                    },
                                                    else: {
                                                        msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                        dest: Locations.hallway3,
                                                    },
                                                },
                                                else: {
                                                    msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                    dest: Locations.hallway3,
                                                },
                                            },
                                            else: {
                                                msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                                dest: Locations.hallway3,
                                            },
                                        },
                                        else: {
                                            msg: "You lunge at the fluffy cat, but unfortunately, she is too powerful for you. You manage to get a scratch or two in, but you ultimately are forced to run off and escape to the hallway through the portal. You rewind time for good measure, just so she won't remember the exchange. Phew. Perhaps you need a bit more experience before you can kill her.",
                                            dest: Locations.hallway3,
                                        },
                                    },
                                },
                            }
                        },
                    },
                    "(garden|Grebel|portal)": {
                        msg: "You head back to the garden through the portal and walk up to outside Nathan's room. You're in the hallway.",
                        dest: Locations.hallway3
                    },
                    "revive": {
                        msg: "revive??",
                        cmd: {
                            "Eevee": {
                                if: {
                                    cond: "chose kill Eevee",
                                    msg: "You sigh and rewind time to allow Eevee to live. You do hate having to deal with consequences for your actions, you suppose.",
                                    get: {
                                        item: "chose kill Eevee",
                                        data: 0
                                    },
                                    get2: {
                                        item: "revived Eevee",
                                        data: -1
                                    }
                                },
                                else: {
                                    msg: "revive??"
                                }
                            }
                        }
                    }
                },
            }
        },
        Headquarters: {
            cmd: {
                "hint": {
                    if: {
                        cond: "has mission",
                        msg: "Alrighty Agent Lucky, here are all the possible commands:<br><br>\
                    look (tells you what mission(s) are available)<br>\
                    \
                    move (up|down)\
                    Accept<br>\
                    \
                    Decline<br>\
                    Nathan / hallway (you can still come back to Headquarters by typing \"Headquarters\" from the hallway)<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>"
                    },
                    else: {
                        msg: "Alrighty Agent Lucky, here are all the possible commands (NOTE: More actions will be unlocked when you do one of these actions, so check the hints again after you do something if you're still lost):<br><br>\
                    look (tells you what mission(s) are available)<br>\
                    \
                    move (up|down)\
                    Nathan / hallway (you can still come back to Headquarters by typing \"Headquarters\" from the hallway)<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>",
                    },
                },
                l: {
                    if: {
                        cond: "Save the cats mission - completed",
                        msg: "You are in Assassin's Headquarters! You currently have no missions, but check back later! <br>Your completed/assigned missions appear in your inventory along with their status.",
                        clear: 1
                    },
                    else: {
                        if: {
                            cond: "weed mission - completed",
                            if: {
                                cond: "befriend",
                                msg: "You are in Assassin's Headquarters! <br><br>You currently have one available mission:<br><br>\
                    Due to the self-restraint you showed on your weed mission (which actually allowed us to gather more intel than if you had killed them), your next mission is also not an assassination. You will be gathering intel on a group of individuals who are suspected to be illegally trafficking exotic cat species (such as caracals, lynxes, and servals). You may even be able to free some of them. <br><br>(respond \"Accept\" to accept, or just return to the hallway outside Nathan's room by typing \"Nathan\")<br><br>Your completed/assigned missions appear in your inventory.",
                                inc: "Save the cats mission",
                                get2: {
                                    item: "has mission",
                                    data: -1
                                },
                                clear: 1
                            },
                            else: {
                                msg: "You are in Assassin's Headquarters! <br><br>You currently have one available mission:<br><br>\
                                Due to the ease at which you killed everyone while on the weed mission, you are being given an assassination! Your goal is to kill this person as quickly as possible and while not drawing attention, if possible. You'll get more information if you accept the mission. <br><br>(respond \"Accept\" to accept, or just return to the hallway outside Nathan's room by typing \"Nathan\")<br><br>Your completed/assigned missions appear in your inventory.",
                                inc: "Assassination mission",
                                get2: {
                                    item: "has mission",
                                    data: -1
                                },
                                clear: 1
                            },
                        },
                        else: {
                            if: {
                                cond: "weed",
                                msg: "You are in Assassin's Headquarters! <br><br>You currently have one available quest:<br><br>\
                                Your mission is to go undercover on the streets and help send high-up drug dealers to jail. <br><br>(respond \"Accept\" to accept, or just return to the hallway outside Nathan's room by typing \"Nathan\")<br><br>Your completed/assigned missions appear in your inventory along with their status.",
                                inc: "weed mission",
                                get2: {
                                    item: "has mission",
                                    data: -1
                                },
                                clear: 1
                            },
                            else: {
                                if: {
                                    cond: "save the pets mission - completed",
                                    msg: "You are in Assassin's Headquarters! You currently have no missions, but check back later!<br>Your completed/in progress missions appear in your inventory. You can return to the hallway outside Nathan's room by typing \"Nathan\" Perhaps there are still things you can do to unlock a mission!",
                                    clear: 1
                                },
                                else: {
                                    msg: "You are in Assassin's Headquarters! <br><br>You currently have one available quest:<br><br>\
                                    Your mission is to join a team of other secret agents on a mission to save someone. You will receive further details if you choose to accept it.<br><br>(respond \"Accept\" to accept, or just return to the hallway outside Nathan's room by typing \"Nathan\")<br><br>Your completed/assigned missions appear in your inventory along with their status.",
                                    inc: "Wonder Pets mission",
                                    get2: {
                                        item: "has mission",
                                        data: -1
                                    },
                                    clear: 1
                                },
                            },
                        },
                    },
                },
                "Decline": {
                    if: {
                        cond: "has mission",
                        msg: "How dare you pick an option that wasn't given! It was simple! \"return\" or \"accept\", how hard is it? That's it! I quit! No more game for you!",
                        end: 100
                    },
                    else: {
                        if: {
                            cond: "declined a mission that doesn't even *exist*!", count: 5,
                            msg: "I've had enough of this! Why can't you just play the game normally?? Who just spams certain commands??",
                            end: 101
                        },
                        else: {
                            if: {
                                cond: "declined a mission that doesn't even *exist*!",
                                msg: "And you've declined the nonexistent mission for a second time...I see...",
                                inc: "declined a mission that doesn't even *exist*!"
                            },
                            else: {
                                msg: "Huh? What are you declining? You don't even have a mission...",
                                get: {
                                    item: "declined a mission that doesn't even *exist*!",
                                    data: -1
                                },
                            },
                        },
                    }

                },
                "Accept": {
                    if: {
                        cond: "north Aliyah",
                        msg: "You go into the room again and get beamed into the assassination mission destination again. Maybe this time you should actually try completing the mission instead of wandering everywhere? You do have a job here...",
                        dest: Locations.Assassin
                    },
                    else: {
                        if: {
                            cond: "Assassination mission",
                            msg: "You have accepted the mission!  <br><br>\
                            \
                            You are not led to a plane, as you normally are, you are led to a strange room with a television next to a peculiar machine, a cylindrical chamber. It is the height of a human (it's probably originally designed for humans), so there's plenty of space.\
                            \
                            You learn that you are being hired to assassinate a popular children's TV show character. You're not familiar with him (you're a cat, you don't really watch children's TV shows) and you aren't informed of why they want to kill him, but they reassure you that he is dangerous and must be killed for the safety of the country. They hand you a drawing of who you're supposed to kill, and you set it down and decide to look at it later (remember to look at it, later you can type \"drawing\" to look at it).<br><br>\
                            \
                            You step inside the chamber. The machine turns on and a circular panel below your feet starts to glow blue. It's reminiscent of the portals you've been through, but not exactly the same. The slight glow turns into a bright beam of light that envelops you, and you close your eyes tightly to avoid bright spots in your vision. You open your eyes once the brightness fades, looking down at the ground first to avoid light. As you do, you notice suddenly that you are wearing scuba gear. As you look around, you have to blink a few times before you can believe your eyes.",
                            dest: Locations.Assassin
                        },
                        else: {
                            if: {
                                cond: "Save the cats mission",
                                msg: "You have accepted the mission! You travel to an unknown location via private plane (luckily you have the plane to yourself) and you are further briefed on the specifics of the mission on the way over. <br><br>You land after several hours of flying. Stretching your legs, you step out of the plane. Look around to get your bearings.",
                                dest: Locations.SaveCats
                            },
                            else: {
                                if: {
                                    cond: "weed mission",
                                    msg: "You are transported via private plane to Spain. Unfortunately, you do not have the plane to yourself. Some other secret agent that they call \"007\" also had a different mission in the same city. You think he's obnoxious, but you do both have a \"licence to kill,\" as they say. When you land, you are instructed to behave like a normal cat and make your way to a particular location, where a huge deal is going down involving a hybrid drug, a cross between meth and cocaine. When you arrive, you look around (respond \"look\")",
                                    dest: Locations.Spain,
                                },
                                else: {
                                    if: {
                                        cond: "Wonder Pets mission",
                                        msg: "You have accepted the mission!<br><br>\
                                        You are taken outside to a hangar where you see planes and cars. You wait for them to direct you to one, but they seem to be waiting for something.<br><br>\
                                        A door opens from outside and an odd contraption that looks as though it's a child's toy flies through it and lands in front of you. You blink in confusion.<br><br>\
                                        The agents motion at you to enter, so you do. What kind of mission is this?<br><br>\
                                        You arrive at a building. Look around."
                                    },
                                    else: {
                                        msg: "Hold on, what are you accepting? You don't have a mission...Look around first, or if no missions are being offered, return to Nathan's new house by typing \"Nathan\". It's possible that there's something you can do there to qualify you for a mission.",
                                    }
                                },
                            }
                        },
                    },
                },
                "(Grebel|Nathan|hallway)": {
                    msg: "You return to the hallway outside Nathan's room. To get back to Headquarters, you can kill another leprechaun, or type \"Headquarters.\" You could kill people or get weed, or from here you can find Eevee though that weird garden portal.",
                    dest: Locations.hallway3,
                },
            },
        },
        Spain: {
            cmd: {
                "hint": {
                    if: {
                        cond: "north Spain",
                        msg: "Agent Lucky, here are your possible options at this moment on this mission:<br><br>\
                    look<br>\
                    move (north|east|up|down)<br>\
                    intel / befriend (NEW)<br>\
                    kill squirrel (NEW)<br>\
                    eat squirrel<br>\
                    kill<br>\
                    return / Headquarters (leaves mission unfinished, but you can re-accept)<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>"
                    },
                    else: {
                        msg: "Agent Lucky, here are your possible options at this moment on this mission (NOTE that some actions unlock other actions, so this list only shows what you currently have unlocked (changes as you go)):<br><br>\
                    look<br>\
                    move (north|east|up|down)<br>\
                    eat squirrel<br>\
                    kill<br>\
                    return / Headquarters (leaves mission unfinished, but you can re-accept)<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>"
                    },
                },
                l: {
                    msg: "You are on the streets.<br><br>\
            N: You are supposed to head north to get to where you are supposed to be.<br>\
            E: You see a squirrel disappearing around the corner! You probably have time to chase it (you have the power to rewind time, so really you have all the time in the world)!<br><br>\
            When your mission is complete, enter \"Headquarters\" to return.",
                    clear: 1,
                },
                m: {
                    cmd: {
                        n: {
                            msg: "You trot off down the road, having been briefed on the layout of the streets beforehand. You arrive at the place. You see a few tall humans, two male and one female. They see you and beckon encouragingly. \"They like cats...\" You note to yourself. You now have two paths: gather intel by befriending them, or kill them all and report back? (You could also take a quick side trip to get that squirrel by going east).<br><br>\
                            \"kill\" or \"befriend\"?",
                            get: {
                                item: "north Spain",
                                data: -1
                            }
                        },
                        e: {
                            msg: "You chase the squirrel down the block! You don't end up catching it, but you find it to be good exercise, which you needed now that you're a secret agent! Unfortunately, this mission is not an assassination mission, but you think it'll still be fun. You do have the power to rewind time, so maybe you can just kill the humans and undo it! You could even do that with the squirrel as well...you love not having consequences for your actions!",
                            get: {
                                item: "squirrel",
                                data: -1,
                            }
                        },
                    },
                },
                "(intel|befriend)": {
                    if: {
                        cond: "north Spain",
                        msg: "You pad up to the group, meowing at them. They pet you, and you enjoy their company. <br>All you have to do is hang around until they reveal enough incriminating information. You have undetectable cameras placed in your eyes as contact lenses, constantly streaming to Headquarters. You get a lot of video evidence over the course of a couple days (including their big drug bust) and you even come along when they go to meet someone higher-up! When you eventually return, your work pays off, and you have unlocked another mission! You are now back at Headquarters. Look around to get details on the mission.",
                        get: {
                            item: "weed mission",
                            data: 0,
                        },
                        get2: {
                            item: "weed mission - completed",
                            data: 1,
                        },
                        get3: {
                            item: "befriend",
                            data: -1,
                        },
                        dest: Locations.Headquarters,
                    },
                    else: {
                        msg: "*sigh* please look around and do things before saying random commands out of order."
                    }

                },
                "kill": {
                    if: {
                        cond: "north Spain",
                        msg: "You innocently trot up to the small group, and at the last second before one of their hands touches you, you leap onto it. Using the element of surprise (and your extensive experience), you kill everyone in sight. This time, you actually have a licence to kill. You don't have to rewind time. Huh. <br><br>You make sure that they're all dead, and you go to the meet-up location. You lead everyone to the place where they were, and they congratulate you on a job well done. Mission complete! You are now in Headquarters, you can look around to see if you have a mission!",
                        get: {
                            item: "weed mission",
                            data: 0,
                        },
                        get2: {
                            item: "weed mission - completed",
                            data: 1,
                        },
                        inc: "kill point W",
                        dest: Locations.Headquarters,
                    },
                    else: {
                        if: {
                            cond: "squirrel serial killer",
                            msg: "Another squirrel? Alright...<br><br>\
                            You hunt around until you find one, snapping its neck quickly. This is good practice for your career as an assassin.",
                            inc: "squirrel",
                            inc2: "kill point S"
                        },
                        else: {
                            if: {
                                cond: "squirrel",
                                msg: "You rewind time to kill the squirrel. You chase it and snap its neck. This is one kill that you don't have to rewind. Mm. You wish you could go back and put the squirrel on Meow's pillow. Maybe after this quest you will.",
                                inc: "kill point S",
                                get: {
                                    item: "squirrel",
                                    data: 1
                                },
                                get2: {
                                    item: "squirrel serial killer",
                                    data: -1
                                }
                            },
                            else: {
                                msg: "What do you want to kill? Maybe look around again to see where you can go?"
                            }
                        },
                    },
                    cmd: {
                        "squirrel": {
                            msg: "You rewind time to kill the squirrel. You chase it and snap its neck. This is one kill that you don't have to rewind. Mm. You wish you could go back and put the squirrel on Nathan's pillow. Maybe after this quest you will.",
                            inc: "kill point S",
                            get: {
                                item: "squirrel",
                                data: 0
                            },
                        }
                    }
                },
                "eat": {
                    if: {
                        cond: "kill point S",
                        msg: "You eat the squirrel. Tasty. The only problem is that now you can't put it on Meow's pillow. Well, you could always go rewind time and re-kill this one. You stop and think for a second. Is this an unlimited food source?",
                        inc: "food",
                        get: {
                            item: "squirrel",
                            data: 0
                        }
                    },
                    else: {
                        msg: "You can't eat. Try killing a squirrel first!",
                    },
                    cmd: {
                        "squirrel": {
                            if: {
                                cond: "kill point S",
                                msg: "You eat the squirrel. Tasty. The only problem is that now you can't put it on Meow's pillow. Well, you could always go rewind time and re-kill this one. You stop and think for a second. Is this an unlimited food source?",
                                inc: "food",
                                get: {
                                    item: "squirrel",
                                    data: 0
                                }
                            },
                            else: {
                                msg: "You can't do that. Try killing a squirrel first!",
                            },
                        }
                    }
                },
                "(Return|Headquarters)": {
                    msg: "You return to Headquarters. You can come back to Spain by typing \"Accept\" again if you haven't completed the mission yet.",
                    dest: Locations.Headquarters
                },
            },
        },
        Assassin: {
            cmd: {
                "hint": {
                    if: {
                        cond: "north Aliyah",
                        if: {
                            cond: "who to kill first?",
                            if: {
                                cond: "got asked question",
                                msg: "Agent Lucky, here are all possible commands at this point (changes as you progress):<br><br>\
                            Yes<br>\
                            No<br>\
                            look<br>\
                            drawing<br>\
                            inv<br>\
                            clear<br>\
                            help<br>\
                            hint<br>"
                            },
                            else: {
                                msg: "Agent Lucky, here are all possible commands at this point (changes as you progress):<br><br>\
                            look<br>\
                            move (up|down)<br>\
                            kill Spongebob<br>\
                            kill Sandy<br>\
                            drawing<br>\
                            inv<br>\
                            clear<br>\
                            help<br>\
                            hint<br>"
                            },
                        },
                        else: {
                            msg: "Agent Lucky, here are all possible commands at this point (changes as you progress):<br><br>\
                            Revive Aliyah<br><br>\
                            look<br>\
                            follow<br>\
                            move (south|up|down)<br>\
                            drawing<br>\
                            inv<br>\
                            clear<br>\
                            help<br>\
                            hint"
                        }
                    },
                    else: {
                        if: {
                            cond: "who to kill first?",
                            if: {
                                cond: "got asked question",
                                msg: "Agent Lucky, here are all possible commands at this point (changes as you progress):<br><br>\
                            Yes<br>\
                            No<br>\
                            look<br>\
                            move (up|down)<br>\
                            drawing<br>\
                            inv<br>\
                            clear<br>\
                            help<br>\
                            hint<br>"
                            },
                            else: {
                                msg: "Agent Lucky, here are all possible commands at this point (changes as you progress):<br><br>\
                            look<br>\
                            move (up|down)<br>\
                            kill Spongebob<br>\
                            kill Sandy<br>\
                            drawing<br>\
                            inv<br>\
                            clear<br>\
                            help<br>\
                            hint<br>"
                            },
                        },
                        else: {
                            msg: "Agent Lucky, here are all possible commands at this point (changes as you progress):<br><br>\
                            Revive Aliyah<br><br>\
                            look<br>\
                            move (north|south|up|down)<br>\
                            drawing<br>\
                            inv<br>\
                            clear<br>\
                            help<br>\
                            hint<br>\
                            ",
                        }
                    },
                },
                l: {
                    if: {
                        cond: "looked already",
                        msg: "You've got two paths: <br><br>\
                        S: You are supposed to head south to get to your target.<br>\
                        N: North is the opposite of south and so that's the direction you would go to waste time.",
                        clear: 1,
                        cmd: {
                            "drawing": {
                                img: "https://pyxis.nymag.com/v1/imgs/7aa/21a/c1de2c521f1519c6933fcf0d08e0a26fef-27-spongebob-squarepants.rsquare.w700.JPG",
                                msg: "You look at the drawing."
                            },
                        }
                    },
                    else: {
                        msg: "You look at your surroundings to find that you have materialized in the middle of the ocean floor. Not only that, but everything looks a little weird. It looks like a simplified, cartoonish version of reality, almost as though someone had drawn it. It takes a minute or two for you to get used to how everything looks.\
                        \
                        As per usual, you see two main courses of action:<br><br>\
                        S: You are supposed to head south to get to your target.<br>\
                        N: North is the opposite of south and so that's the direction you would go to waste time.",
                        clear: 1,
                        inc: "looked already",
                        cmd: {
                            "drawing": {
                                img: "https://pyxis.nymag.com/v1/imgs/7aa/21a/c1de2c521f1519c6933fcf0d08e0a26fef-27-spongebob-squarepants.rsquare.w700.JPG",
                                msg: "You look at the drawing."
                            },
                        }
                    },
                },
                m: {
                    cmd: {
                        n: {
                            if: {
                                cond: "who to kill first?",
                                msg: "Um...why would you be going north?? You have an assassination to do! Get on task!",
                            },
                            else: {
                                if: {
                                    cond: "accepted already",
                                    msg: "You've already been north, you've seen all the interesting things there are to see! Just go south and complete the mission already! You really do love to procrastinate!"
                                },
                                else: {
                                    if: {
                                        cond: "rejected",
                                        msg: "Nothing's really happening to the north...you wish that you'd taken up Aliyah on her offer...",
                                    },
                                    else: {
                                        if: {
                                            cond: "chose kill Aliyah",
                                            msg: "You head north. You do like to waste time. Why did you choose north? You hadn't even seen anything interesting in that direction...<br><br>\
                                            As you stalk off, looking around for something to do, you see a figure disappear around a corner. You narrow your eyes. As you turn the corner, intent on figuring out what the human is up to, you realize that you know this one already! This is the ghost of someone you'd killed before!<br><br>\
                                            As you get closer, the ghost turns and smiles at you. <br><br>\
                                            \"My name is Aliyah and my pronouns are she/her.\" She informs you. You register this fact, but you are also in shock at the fact that she's here. Really, this is where her ghost chooses to wander? In some weird underwater town?<br><br>\
                                            \"Want to come with me?\" Aliyah offers, gesturing at a blue shimmery portal that had started to open in front of her. <br><br>\
                                            (respond \"follow\" to go with her, respond \"south\" to head on your way to the mission. Note: You will be able to come back here and finish the mission if you want.)",
                                            get: {
                                                item: "north Aliyah",
                                                data: -1
                                            },
                                        },
                                        else: {
                                            if: {
                                                cond: "Name Aliyah",
                                                if: {
                                                    cond: "north Aliyah",
                                                    msg: "Aliyah is waiting for your answer as she stands in front of the portal..."
                                                },
                                                else: {
                                                    msg: "You head north. You do like to waste time. Why did you choose north? You hadn't even seen anything interesting in that direction...<br><br>\
                                                As you stalk off, looking around for something to do, you see a figure disappear around a corner. You narrow your eyes. As you turn the corner, intent on figuring out what the human is up to, you realize that you know this one already! This is Aliyah! You've killed this one before (and rewound time to undo it, of course)<br><br>\
                                                As you get closer, Aliyah turns and smiles at you. Re-introducing itself, the human informs you that its pronouns are she/her. You register this fact, but you are also in shock at the fact that she's here. <br><br>\
                                                \"Want to come with me?\" Aliyah offers, gesturing at a blue shimmery portal that had started to open in front of her. <br><br>\
                                                (respond \"follow\" to go with her, respond \"south\" to head on your way to the mission. Note: You will be able to come back here and finish the mission if you want.)",
                                                    get: {
                                                        item: "north Aliyah",
                                                        data: -1
                                                    },
                                                },
                                            },
                                            else: {
                                                msg: "You head north. You do like to waste time. Why did you choose north? You hadn't even seen anything interesting in that direction...<br><br>\
                                As you stalk off, looking around for something to do, you see a figure disappear around a corner. You narrow your eyes. As you turn the corner, intent on figuring out what the human is up to, you realize that you know this one already! This is one of the humans that you killed (and later unkilled, of course), from the place where Nathan is staying! As you get closer, the human turns around and smiles at you. <br><br>\
                                \"Hello, Lucky!\" The human says to you. \"Fancy seeing you here! I should introduce myself, my name is Aliyah. I realize that I know your name and you never knew mine...also my pronouns are she/her.\" You stare at the human. How could she be here?<br><br>\
                                \"Want to come with me?\" Aliyah offers, gesturing at a blue shimmery portal that had started to open in front of her. <br><br>\
                                (respond \"follow\" to go with her, respond \"south\" to head on your way to the mission. Note: If you go through the portal, you will be able to come back here and finish the mission if you want.)",
                                                get: {
                                                    item: "north Aliyah",
                                                    data: -1
                                                },
                                                get2: {
                                                    item: "Name Aliyah",
                                                    data: -1
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                        },

                        s: {
                            if: {
                                cond: "north Aliyah",
                                msg: "You shake your head and turn away from Aliyah. You look over your shoulder to find that she seems disappointed, but shrugs and enters the portal by herself. As it closes behind her, you note that you've lost the chance to find out where the portal leads...<br><br>\
                                Shaking it off, you head south. <br><br>\
                                \
                                You head south, toward a town built on the floor of the ocean. You had been informed that the individual you are searching for is extremely dangerous and that he must be killed as quickly and as quietly as possible. You take out the drawing that had been given to you, and you notice a name written at the bottom: \”Spongebob Squarepants.\” Odd name. <br><br>\
                                \
                                As you walk through the town's streets, you wonder who lives here. You see fish wearing clothes and walking around town upright. This really is a strange place. You have been told to look out for a large pineapple, and that your target should be inside it when he is at home from work. <br><br>\
                                \
                                You see a pineapple nearby, but upon looking around, you conclude that Spongebob is not home yet. You see a large sculpture next door of a human head, with a door for the mouth. A bit further over, there is also a large rock on the ground where there might have been a house. <br><br>\
                                \
                                You walk over to the rock, deciding to hop up and curl up for a second, but suddenly the rock lifts fully upright as though on a hinge, and you see a pink starfish underneath. The starfish hops off the rock and introduces itself excitedly as Patrick Star. You are taken aback, as you didn't know that starfish spoke. You ask if Patrick knows where Spongebob Squarepants is, or when he'll be back. <br><br>\
                                \
                                \"It'll be a while...\" Patrick says sadly. \"He gets off work at around 6 PM.\" You look at the watch that is included in your suit, and find that it's about 5:30 PM. <br><br>\
                                \
                                \"He'll be back in half an hour.\" You reassure the star. <br><br>\
                                \
                                \"Hey, do you know Sandy Cheeks?\" Patrick asks you. \"She's a squirrel, and she also wears a suit like that.\"<br><br>\
                                \
                                A squirrel? Underwater? Your mouth starts to salivate as you think about killing Sandy. Should you wait the half hour, wandering around town for a bit and making sure to not be too suspicious, or should you go kill Sandy and then come back to kill him afterward? it doesn't really matter when in the evening you kill him, so it's fine to waste a bit more than half an hour as long as you get the job done. <br><br>\
                                \
                                (respond \"kill Spongebob\" or \"kill Sandy\")",
                                get: {
                                    item: "who to kill first?",
                                    data: -1
                                },
                                get2: {
                                    item: "rejection",
                                    data: -1
                                }

                            },
                            else: {
                                msg: "You head south, toward a town built on the floor of the ocean. You had been informed that the individual you are searching for is extremely dangerous and that he must be killed as quickly and as quietly as possible. You take out the drawing that had been given to you, remembering the name that they'd told you: \”Spongebob Squarepants.\” Odd name, but perhaps it's fitting for a sponge. You wonder if every sponge's name has the word \"sponge\" in it...<br><br>\
                                \
                                As you walk through the town's streets, you wonder who lives here. You see fish wearing clothes and walking around town upright. This really is a strange place. You have been told to look out for a large pineapple, and that your target should be inside it when he is at home from work. <br><br>\
                                \
                                You see a pineapple nearby, but upon looking around, you conclude that Spongebob is not home yet. You see a large sculpture next door of a human head, with a door for the mouth. A bit further over, there is also a large rock on the ground where there might have been a house. <br><br>\
                                \
                                You walk over to the rock, deciding to hop up and curl up for a second, but suddenly the rock lifts fully upright as though on a hinge, and you see a pink starfish underneath. The starfish hops off the rock and introduces itself excitedly as Patrick Star. You are taken aback, as you didn't know that starfish spoke. You ask if Patrick knows where Spongebob Squarepants is, or when he'll be back. <br><br>\
                                \
                                \"It'll be a while...\" Patrick says sadly. \"He gets off work at around 6 PM.\" You look at the watch that is included in your suit, and find that it's about 5:30 PM. <br><br>\
                                \
                                \"He'll be back in half an hour.\" You reassure the star. <br><br>\
                                \
                                \"Hey, do you know Sandy Cheeks?\" Patrick asks you. \"She's a squirrel, and she also wears a suit like that.\"<br><br>\
                                \
                                A squirrel? Underwater? Your mouth starts to salivate as you think about killing Sandy. Should you wait the half hour, wandering around town for a bit and making sure to not be too suspicious, or should you go kill Sandy and then come back to kill him afterward? it doesn't really matter when in the evening you kill him, so it's fine to waste a bit more than half an hour as long as you get the job done. <br><br>\
                                \
                                (respond \"kill Spongebob\" or \"kill Sandy\")",
                                get: {
                                    item: "who to kill first?",
                                    data: -1
                                },
                            }
                        }
                    }
                },
                "kill": {
                    cmd: {
                        "Aliyah": {
                            if: {
                                cond: "chose kill Aliyah",
                                msg: "You...can't kill a ghost...<br><br>\
                            If you *really* want to kill the human, you can \"revive Aliyah\" and then \"kill Aliyah\""
                            },
                            else: {
                                if: {
                                    cond: "north Aliyah",
                                    msg: "You decide to kill Aliyah (again). As she bleeds out, you step over her body toward the portal. You leave her dead there. When you come back, you'll be where you started when you were beamed in. <br><br>\
                                You come out of the portal into a room. Where are you? Try looking around<br><br>\
                                (You can come back to where you were beamed in by typing \"Assassination\" or you can go back to headquarters with \"Headquarters.\" ",
                                    get: {
                                        item: "chose kill Aliyah",
                                        data: -1
                                    },
                                    inc: "kill point Aliyah",
                                    dest: Locations.AliyahRoom2
                                },
                                else: {
                                    msg: "Aliyah's not even here right now! Where did you get that idea from??"
                                }
                            },
                        },
                        "(him|Spongebob)": {
                            if: {
                                cond: "who to kill first?",
                                if: {
                                    cond: "kill point Sandy",
                                    msg: "You make your way to Spongebob's pineapple. You see through his window that he is sitting on a chair in his living room. You paw at his door.<br><br>\
                                    Answering the door, he smiles asks you your name. <br><br>\
                                    \"My name is Lucky.\" You answer. He welcomes you inside, offering to cook you a Krabby Patty. You have no idea what that is, but you nod anyway. The two of you start to chat as he starts to cook on the stove, and you start thinking of ways to kill him. You are about to pounce on him when you suddenly remember that sponges regenerate when they are cut apart. If you cut him in half, there will just be two living sponges!<br><br>\
                                    New plan. If you beam him to Headquarters, he will suffocate when out of water. It should take no more than a few minutes to die. Now you just have to get him to come with you to a specific meeting point so you can be beamed out...<br><br>\
                                    \"Do you want to be best friends??\" Spongebob says excitedly to you. You are taken aback. You'd only been here for maybe five minutes. Do you want to be friends?(\"yes\" or \"no\")",
                                    get: {
                                        item: "got asked question",
                                        data: -1
                                    },
                                    get2: {
                                        item: "question interrupted by cops",
                                        data: -1
                                    },

                                },
                                else: {
                                    msg: "You wait for a bit, wandering around the town. At almost six, you head to a nearby restaurant called the \"Krusty Krab,\" which you know to be Spongebob's place of work. As he walks out of the restaurant and down the road toward his house, you just so happen to be strolling along right next to him. <br><br>\
                                    \"Hello!\" He says to you. You are taken aback by his friendliness. \"Hello.\" You respond, deciding to try to win his trust. You suddenly recall that sponges regenerate when they are cut apart, so if you try to cut him apart, both halves will live! Alright, new plan. You will get him to come to the meeting point, and you will both be transported back to Headquarters, where he will suffocate due to lack of water. <br><br>\
                                    \"Do you want to be best friends??\" Spongebob says excitedly to you, interrupting your rather murderous train of thought. You are taken aback. You'd only been walking together for maybe five minutes. You think about it for a bit, genuinely. What if Headquarters was wrong? He seems like such a friendly person - or rather, sponge. What if you just stayed here permanently? I mean, in the future if you found him to be dangerous, you could probably kill him at that point, right?<br><br>\
                                    Do you want to be friends?(\"yes\" or \"no\")",
                                    get: {
                                        item: "got asked question",
                                        data: -1
                                    },
                                    get2: {
                                        item: "question uninterrupted",
                                        date: -1
                                    },
                                    inc: "kill point Spongebob",
                                },
                            },
                            else: {
                                msg: "Maybe you should look around and move places before you jump to killing things..."
                            },
                        },
                        "(Sandy|her)": {
                            if: {
                                cond: "who to kill first?",
                                if: {
                                    cond: "kill point Sandy",
                                    msg: "You've already killed Sandy! Go get Spongebob already!"
                                },
                                else: {
                                    msg: "The thought of that tasty squirrel is just too much. <br><br>\
                                    \"Where could I find this \"Sandy Cheeks\"?\" You ask Patrick. \"I think we'd be good friends.\" You add. <br><br>\
                                    \"She lives in a glass dome with a tree and grass in it, it's not too far from here.\" Patrick points. <br><br>\
                                    You thank Patrick and follow his instructions to get to her house. You knock on the door of the glass dome. Sandy lets you into the air lock, and the water then drains out. You take off your suit, freeing your paws. <br><br>\
                                    \"What brings you to my dome?\" Sandy inquires. You waste no time leaping at her, unsheathing your claws in midair. She screams, and you hope that it's not loud enough for townspeople to hear. After killing her, you recall that the dome is fully transparent. <br><br>\
                                    As you leave to complete your mission, you pass by someone who seems to be going to see Sandy Cheeks. You speed up. You'd better hurry before they discover that she's dead!<br><br>\
                                    \
                                    Now it's Spongebob's turn! <br><br>\
                                    (type \"kill Spongebob\")",
                                    inc: "Kill point Sandy",
                                    inc: "squirrel"
                                }
                            },
                            else: {
                                msg: "Kill Sandy? Who's Sandy?",
                            }
                        }
                    }
                },
                "follow": {
                    if: {
                        cond: "north Aliyah",
                        msg: "You follow Aliyah into the shimmery portal. When you get to the other side, she laughs to herself. <br><br>\
                        \"Silly me! I've forgotten something at Grebel!\" She goes into a different portal. You are left alone.<br><br>\
                        \
                        Where are you?",
                        get: {
                            item: "accepted already",
                            data: -1
                        },
                        dest: Locations.AliyahRoom2
                    },
                    else: {
                        msg: "Follow who? Maybe you should look around some more before randomly trying to follow people around."
                    },
                },
                "drawing": {
                    img: "https://pyxis.nymag.com/v1/imgs/7aa/21a/c1de2c521f1519c6933fcf0d08e0a26fef-27-spongebob-squarepants.rsquare.w700.JPG",
                    msg: "You look at the drawing."
                },
                "Yes": {
                    if: {
                        cond: "question uninterrupted",
                        msg: "Spongebob looks at you eagerly, waiting for your answer. You smile. <br><br>\
                        \"Alright.\" You agree. You decide not to kill him.<br><br>\
                        You, Spongebob, and Patrick become very close friends, and you live together happily forever. And by \"forever\" I mean about a month. A month in, Headquarters sends another assassin in who kills you, Spongebob, and Patrick. As you're bleeding out after being fatally injured, you admit to Spongebob that you had initially been sent there to kill him, and that this assassin was just here to finish the job.",
                        end: 8
                    },
                    else: {
                        if: {
                            cond: "question interrupted by cops",
                            msg: "You say yes, but as you're answering, a few cops burst into the pineapple house (that sea star must have tipped them off as to your location!) and arrest you for the murder of Sandy Cheeks. Spongebob looks at you in horror as you are marched away. <br><br>\
                            \
                            You spend the night in jail, and in the morning you escape using your telekinesis to pick the lock. You go to the meeting place and get beamed out of wherever you are. You materialize back in Headquarters, and you look at the TV next to the chamber to see some fish cops running up to the spot that you had just dematerialized from. It's hard for you to wrap your head around the concept that you had been inside a TV show.<br><br>\
                            \
                            You have failed your mission, and Headquarters doesn't take to failures well. You are fired from your job and your licence to kill is revoked. <br><br>\
                            You are sad, and because of your failure, you no longer want to kill. It just doesn't feel as thrilling anymore.<br><br>\
                            \
                            You are now back at your house, in the kitchen.",
                            get1: {
                                item: "Assassination mission",
                                data: 0
                            },
                            get2: {
                                item: "Assassination mission - FAILED",
                                data: 1
                            },
                            get3: {
                                item: "licence to kill",
                                data: 0
                            },
                            get4: {
                                item: "licence to kill revoked",
                                data: -1
                            },
                            dest: Locations.kitchen

                        },
                        else: {
                            msg: "What? What are you saying \"yes\" to?",
                        },
                    },
                },
                "No": {
                    if: {
                        cond: "question uninterrupted",
                        msg: "\"Yes, I think we'll be great friends.\" You say. <br><br>\
                        \"Want to walk with me to that side of town?\" You ask him, pointing in the general direction of the meeting point.<br><br>\
                        \"Sure!\" He replies, beaming. He follows you straight there, and you stop at the spot (which looks like any other part of the ocean floor) and press a button on your space suit. <br><br>\
                        \"Why have we stopped randomly?\" He inquires, looking at the button you just pressed. <br><br>\
                        \"I just wanted to see what this button did!\" You respond. The beam of light swallows the two of you, and after a few seconds, you appear back in Headquarters. Spongebob immediately starts to suffocate. <br><br>\
                        \"But...I thought you wanted to be friends...\" He manages to say with his last bit of air. <br><br>\
                        You feel a little bad, he didn't seem like he was a dangerous individual at all...<br><br>\
                        You glance at the TV next to the chamber to see a cartoon show. In it, a few fish are standing upright around an empty space. You recognize them as the townspeople of the town where Spongebob had lived. \"Where did they go?\" The fish are saying to one another.<br><br>\
                        You have completed your mission! You are now in Headquarters. Look around!",
                        get: {
                            item: "Assassination mission",
                            data: 0
                        },
                        get2: {
                            item: "Assassination mission - completed",
                            data: 1
                        },
                        dest: Locations.Headquarters
                    },
                    else: {
                        if: {
                            cond: "question interrupted by cops",
                            msg: "You ignore his question, and you start looking around for ways to get him out of the house and toward the meeting point by force. You spot a back door out of the pineapple. <br><br>\
                            \"Want to go for a walk with me? I wanted to explore that side of town\" You ask him, pointing toward the back door. He nods, and the two of you go out the door. As you are walking off, nearing the meeting point, you see some officers approaching Spongebob's house, and they see you as you walk away! You quickly drag Spongebob along more quickly, and upon arriving at the meeting point, you hurriedly press a button on your suit that causes you to start dematerializing. <br><br>\
                            \"Hey, you! Stop! You are a key suspect in the murder of Sandy Cheeks!\" An officer says as she approaches. Spongebob looks to you in sheer horror. <br><br>\
                            The blue light overtakes both of you, and you appear back at Headquarters. Spongebob starts to suffocate upon arriving, and you watch as he dies. Your scuba suit vanishes as quickly as it had appeared. Mission accomplished!<br><br>\
                            You are now in Headquarters!",
                            get: {
                                item: "Assassination mission",
                                data: 0
                            },
                            get2: {
                                item: "Assassination mission - completed",
                                data: 1
                            },
                            dest: Locations.Headquarters
                        },
                        else: {
                            msg: "What? What are you saying \"no\" to?",
                        },
                    },
                },
                "revive": {
                    cmd: {
                        "Aliyah": {
                            msg: "You decide to revive a human that you'd killed. What was the point of that?<br><br>\
                            Maybe you should see if anything is happening to the north or south? (remember that south is where your mission is)"
                        }
                    }
                }
            },
        },
        SaveCats: {
            cmd: {
                "hint": {
                    if: {
                        cond: "south kill",
                        msg: "Agent Lucky, here are all your possible commands at the moment (NOTE: this list updates as you progress):<br><br>\
                    look<br>\
                    move (up|down)<br>\
                    kill<br>\
                    gather intel<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>"
                    },
                    else: {
                        msg: "Agent Lucky, here are all your possible commands at the moment (NOTE: this list updates as you progress):<br><br>\
                        look<br>\
                        move (north|south|up|down)<br>\
                        inv<br>\
                        clear<br>\
                        help<br>\
                        hint<br>"
                    }
                },
                l: {
                    msg: "You are in an unknown location, but you know which way to go<br><br>\
                    S: To get to the place you need to be, you should head south.\
                    N: You see a leaf blowing in the wind! That looks like it would be fun to chase!",
                    clear: 1
                },
                m: {
                    cmd: {
                        s: {
                            msg: "You trot along the street toward your destination, going over the plan in your head. You arrive at a warehouse-like building, and you peek inside. <br><br>Cages fill the building, only leaving narrow paths between stacks of cages to allow a person to squeeze by, presumably to allow a person to feed the cats. You recognize that you need to proceed with caution. You are not a human, so they won't think you're onto their plans, but you are a cat, so you're in danger of being captured! <br><br>What do you do now?<br>\
                            You can sneak around and gather intel (you have a contact lens that records audio & video), or you can just try to kill all the humans you see in the warehouse.",
                            get: {
                                item: "south kill",
                                data: -1
                            }
                        },
                        n: {
                            if: {
                                cond: "south kill",
                                msg: "You chase after the leaf! It tumbles in the wind as you sprint after it. Unfortunately, the leaf flies up out of your reach, swept away by the wind.",
                                get: {
                                    item: "north leaf",
                                    data: -1
                                },
                                else: {
                                    msg: "Ummm hello, you've got a mission to do! The time for chasing leaves is over!!"
                                }
                            }
                        },
                    },
                },
                "kill": {
                    if: {
                        cond: "south kill",
                        msg: "You decide to kill them all. This is going to be fun. Good thing you have a licence to kill, there's no rewinding necessary! You creep into the warehouse, avoiding the people standing guard. First, you want to see what's going on in more detail. <br><br>\
                        \
                        A few different cat species are here, one row has leopards, the row next to it has caracals, and the next one has lynxes. You shake your head to yourself. The cats aren't supposed to exist in the same habitat. <br><br>\
                        \
                        You sneak up on a guard, preparing to take out the entire group. Then, you notice that a few rows over, a housecat seems to be trying to get your attention silently. You carefully retreat and go around the rows to reach the row where the cat is without drawing the humans' attention. As you approach, you realize that the housecat is one of your littermates! You hadn't seen her since you were kittens! <br><br>\
                        \
                        You use your telekinesis to free her quietly (she can't free herself because although she does have magical powers, they're more in the vein of invulnerability). Looking at one another in utter shock, you both have many questions. <br><br>\
                        \
                        \"We can talk later\" She whispers, narrowing her eyes at the guards threateningly. You have many questions for her, but you agree and turn your gaze to the humans as well. The two of you nod at one another and stalk off in opposite directions to take the humans from both sides. <br><br>\
                        The two of you work quickly to kill all of the guards and then you go together to the meet location and you lead the other agents to the warehouse so they can transport the cats back to their habitats.<br><br>\
                        Now that you're done with the mission, you turn to your sister and ask her if she wants to come with you. You have so much to catch up on! She declines reluctantly. \"I'm an agent too, so I have to be getting back to my Headquarters in Italy.\" She explains. <br><br>You're disappointed, but you understand. You don't really want to follow her to Italy, and she doesn't want to follow you back to Canada. You say your goodbyes and step back onto the plane. <br><br>You are now back at Headquarters, you can look around to see if there's a mission.",
                        get: {
                            item: "littermate",
                            data: -1
                        },
                        get2: {
                            item: "kill point SaveCats",
                            data: 1
                        },
                        get3: {
                            item: "Save the cats mission",
                            data: 0
                        },
                        get4: {
                            item: "Save the cats mission - completed",
                            data: 1
                        },
                        dest: Locations.Headquarters,
                    },
                    else: {
                        if: {
                            cond: "north leaf",
                            msg: "You look around for something to kill. The leaf! You rewind time slightly so it's within your reach, and you snatch it right out of the air triumphantly. This is good practice for your mission. Is it time to go south now?",
                        },
                        else: {
                            msg: "What is there to kill? Maybe try going north or south (look around to see where things are)",
                        }
                    }
                },
                "(Gather|sneak)": {
                    cmd: {
                        "(intel|around)": {
                            msg: "You decide to sneak around and gather intel. A few different cat species are here, one row has leopards, the row next to it has caracals, and the next one has lynxes. You shake your head to yourself. The cats aren't supposed to exist in the same habitat. <br><br>\
                            As you creep around, you notice that a few rows over, a housecat seems to be trying to get your attention silently. You carefully retreat and go around the rows to reach the row where the cat is without drawing the humans' attention. As you approach, you realize that the housecat is one of your littermates! You hadn't seen her since you were kittens! <br><br>\
                            You use your telekinesis to free her quietly (she can't free herself because although she does have magical powers, they're more in the vein of invulnerability). Looking at one another in utter shock, you both have many questions. <br><br>\
                            \"We'll catch up later, first we should take them all out.\" She says, narrowing her eyes at the guards. Normally you'd be up for that, but you'd opted to just gather intel rather than kill everyone, so you're committed to getting everyone arrested without hurting them. <br><br>\
                            \"No!\" You respond, stopping her from pouncing. She looks at you in confusion. Even as a kitten, you'd never turned down a fight. She must think you're going soft. <br><br>\
                            \"Let's just gather intel and report back; I want to see if I can take the whole organization down with enough intel.\" You whisper, darting your eyes toward the guards. She sighs and agrees.<br><br>\
                            You sneak around to a back room and get a glimpse of a long-haired human talking to a short-haired human. You stare at them for a few seconds, hoping that it's a clear enough short to run facial recognition. <br><br>Unsure what to do, the two of your wander around the warehouse for a bit and then leave, meeting the people from Headquarters at the meet point. They thank you for what you did and they say that they have enough evidence now to take legal action against the organization. <br><br>Turning to your sibling, you ask her if she wants to come back to Canada with you. She declines, and asks if you want to come to where she is stationed in Italy. You turn her down. The two of you say your goodbyes and you get on the plane by yourself, headed for Canada. <br><br><br>\
                            \
                            \
                            You are now in Headquarters. Look around to see if you have a mission.",
                            get1: {
                                item: "littermate",
                                data: -1
                            },
                            get2: {
                                item: "gathered intel",
                                data: -1
                            },
                            get3: {
                                item: "Save the cats mission",
                                data: 0
                            },
                            get4: {
                                item: "Save the cats mission - completed",
                                data: 1
                            },
                            dest: Locations.Headquarters
                        },
                    },
                },
            },
        },
        heaven: {
            cmd: {
                "hint": {
                    msg: "Going for the hint was probably a good choice. Here are your options:<br><br>\
                    kill leprechaun<br>\
                    Where am I?<br>\
                    move (down|up)<br>\
                    look<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>"
                },
                kill: {
                    msg: "Try killing a leprechaun rather than just shouting \"kill\" into the void.",
                    cmd: {
                        "Leprechaun": {
                            msg: "You have killed a leprechaun!",
                            if: {
                                cond: "licence to kill revoked",
                                msg: "Killing things doesn't feel so fun anymore..."
                            },
                            else: {
                                if: {
                                    cond: "kill point N",
                                    inc: "kill point L",
                                    if: {
                                        cond: "kill point A",
                                        inc: "kill point L",
                                        if: {
                                            cond: "kill point Maia",
                                            inc: "kill point L",
                                            if: {
                                                cond: "kill point M",
                                                inc: "kill point L",
                                                if: {
                                                    cond: "kill point Em",
                                                    inc: "kill point L",
                                                    if: {
                                                        cond: "kill point Aliyah",
                                                        inc: "kill point L",
                                                        if: {
                                                            cond: "kill point Ev",
                                                            inc: "kill point L",
                                                            if: {
                                                                cond: "kill point R",
                                                                inc: "kill point L",
                                                                if: {
                                                                    cond: "kill point B",
                                                                    msg: "You are ready. You are transported to the Assassin's Headquarters",
                                                                    inc: "licence to kill",
                                                                    inc2: "kill point L",
                                                                    dest: Locations.Headquarters
                                                                },
                                                                else: {
                                                                    msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                                                    inc: "kill point L",
                                                                    inc: "thou art banished!",
                                                                    dest: Locations.hell,
                                                                },
                                                                else: {
                                                                    msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                                                    inc: "kill point L",
                                                                    inc: "thou art banished!",
                                                                    dest: Locations.hell
                                                                },
                                                            },
                                                            else: {
                                                                msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                                                inc: "kill point L",
                                                                inc: "thou art banished!",
                                                                dest: Locations.hell
                                                            },
                                                        },
                                                        else: {
                                                            msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                                            inc: "kill point L",
                                                            inc: "thou art banished!",
                                                            dest: Locations.hell
                                                        },
                                                    },
                                                    else: {
                                                        msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                                        inc: "kill point L",
                                                        inc: "thou art banished!",
                                                        dest: Locations.hell
                                                    },
                                                },
                                                else: {
                                                    msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                                    inc: "kill point L",
                                                    inc: "thou art banished!",
                                                    dest: Locations.hell
                                                },
                                            },
                                            else: {
                                                msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                                inc: "kill point L",
                                                inc: "thou art banished!",
                                                dest: Locations.hell
                                            },
                                        },
                                        else: {
                                            msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                            inc: "kill point L",
                                            inc: "thou art banished!",
                                            dest: Locations.hell
                                        },
                                    },
                                    else: {
                                        msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                        inc: "kill point L",
                                        inc: "thou art banished!",
                                        dest: Locations.hell
                                    },
                                },
                                else: {
                                    msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                    inc: "kill point L",
                                    inc: "thou art banished!",
                                    dest: Locations.hell
                                },
                            },
                        },
                    },
                },
                l: {
                    msg: "Leprechaun Heaven seems amazing! Gold is abundant, and that includes goldfish - they come here when they die. Leprechauns are unicycling all over the place, doing fancy tricks. They hand you a matching outfit and ask you to join them in their leprechauning. You are reluctant, but they're insistent. <br><br>\"We all resisted at first, but now we embrace it!\"<br><br> They say to you. You back away, but they creep ever closer. You're not so sure that this is heaven anymore...",
                    img: "https://images4-f.ravelrycache.com/uploads/rdavis8483/543913653/IMG_8100_small2.JPG",
                    clear: 1,
                    end: 777,
                },
                m: {
                    cmd: {
                        u: {
                            if: {
                                cond: "attempt #7-fail",
                                msg: "Alright, alright, you passed the test *rolls eyes*",
                                get: {
                                    item: "attempt #7-fail",
                                    data: 0
                                },
                                get2: {
                                    item: "attempt #6-fail",
                                    data: 0
                                },
                                get3: {
                                    item: "attempt #5-fail",
                                    data: 0
                                },
                                get4: {
                                    item: "attempt #4- fail",
                                    data: 0
                                },
                                get5: {
                                    item: "attempt #3- fail",
                                    data: 0
                                },
                                get6: {
                                    item: "attempt #2- fail",
                                    data: 0
                                },
                                get7: {
                                    item: "attempt #1- fail",
                                    data: 0
                                },
                                dest: Locations.HomeHardware
                            },
                            else: {
                                if: {
                                    cond: "attempt #6-fail",
                                    msg: "I'm done writing messages.",
                                    get: {
                                        item: "attempt #7-fail",
                                        data: -1
                                    }
                                },
                                else: {
                                    if: {
                                        cond: "attempt #5-fail",
                                        msg: "I'm done writing messages.",
                                        get: {
                                            item: "attempt #6-fail",
                                            data: -1
                                        }
                                    },
                                    else: {
                                        if: {
                                            cond: "attempt #4- fail",
                                            msg: "Yeah, nothing's happening.",
                                            get: {
                                                item: "attempt #5-fail",
                                                data: -1
                                            }
                                        },
                                        else: {
                                            if: {
                                                cond: "attempt #3- fail",
                                                msg: "And we're on attempt 4 now...you can probably stop now...nothing's going to happen",
                                                get: {
                                                    item: "attempt #4- fail",
                                                    data: -1
                                                }
                                            },
                                            else: {
                                                if: {
                                                    cond: "attempt #2- fail",
                                                    msg: "Uh...and you're still trying...alright...",
                                                    get: {
                                                        item: "attempt #3- fail",
                                                        data: -1
                                                    }
                                                },
                                                else: {
                                                    if: {
                                                        cond: "attempt #1- fail",
                                                        msg: "I see that you're trying again. Well, I believe in you, I suppose.",
                                                        get: {
                                                            item: "attempt #2- fail",
                                                            data: -1
                                                        }
                                                    },
                                                    else: {
                                                        msg: "Uh...you're already here, you can't go to Leprechaun Heaven again (although I know, it's pretty fantastic. Keep trying, I believe in you!)",
                                                        get: {
                                                            item: "attempt #1- fail",
                                                            data: -1
                                                        }
                                                    }
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    }
                },
                "Where": {
                    cmd: {
                        "am": {
                            cmd: {
                                "I": {
                                    msg: "You are in Leprechaun Heaven! Look around!",
                                },
                            },
                        },
                    },
                },
            },
        },
        hell: {
            cmd: {
                h: {
                    msg: "Here are your basic commands (maybe if you type \"hint\" you'll get one or two extra)<br><br>\
                    move (up|down)<br>\
                    look<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>"
                },
                "hint": {
                    if: {
                        cond: "talked to the beaver",
                        msg: "Here's the list of commands:<br><br>\
                    follow<br>\
                    move (up|down)<br>\
                    kill beavers<br>\
                    look<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>"
                    },
                    else: {
                        msg: "Here you go:<br><br>\
                    move (up|down)<br>\
                    talk to beavers<br>\
                    kill beavers<br>\
                    look<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>"
                    },
                },
                kill: {
                    cmd: {
                        "(beaver|beavers|them|everyone)": {
                            msg: "You kill the beavers. <br><br>Now what?<br><br>\
                            Perhaps now you are the master of hell or something. You don't see anyone around. You feel a bit lonely. You suppose that this must be your personal hell, since if this were a group situation, it'd be pretty well-populated. Or maybe everyone became beavers. You laugh at the concept. <br><br>\
                            \
                            You look at your paws and find, to your horror, that you are morphing into a beaver! When someone pops into hell, you attack them as easy street plays.",
                            inc: "kill point Beaver",
                            clear: 1,
                            end: 666
                        }
                    }
                },
                l: {
                    if: {
                        cond: "tempted fate lol",
                        msg: "Beavers surround you as you catch on fire and as Easy Street plays.",
                        clear: 1,
                        end: 666
                    },
                    else: {
                        msg: "You look around. Fires burn everywhere. You see beavers off in the distance. Look around again?",
                        get: {
                            item: "tempted fate lol",
                            data: -1
                        }
                    }
                },
                m: {
                    cmd: {
                        u: {
                            if: {
                                cond: "thou art banished!",
                                msg: "No! You have been banished for a reason! Killing a leprechaun is simply unforgivable! You should be ashamed of yourself..."
                            },
                            else: {
                                msg: "You ascend to Leprechaun Heaven! Leprechauns are frolicking.",
                                dest: Locations.heaven
                            }

                        },
                        d: {
                            if: {
                                cond: "highway to hell 5",
                                msg: "Whoops, you dig through and find that there's a lava pit there. You are now burning to...death? You're already in hell...<br>\
                                    You climb out of the pit and find that although you are in excruciating pain, you haven't died. Hell is weird.",
                                end: 321
                            },
                            else: {
                                if: {
                                    cond: "highway to hell 4",
                                    msg: "Your digging seems to pay off! You can feel that the ground in the hole is close to breaking!",
                                    get: {
                                        item: "highway to hell 5",
                                        data: -1
                                    }
                                },
                                else: {
                                    if: {
                                        cond: "highway to hell 3",
                                        msg: "You continue to dig",
                                        get: {
                                            item: "highway to hell 4",
                                            data: -1
                                        }
                                    },
                                    else: {
                                        if: {
                                            cond: "highway to hell 2",
                                            msg: "You dig as quickly as you can. It's unclear if anything will happen.",
                                            get: {
                                                item: "highway to hell 3",
                                                data: -1
                                            }
                                        },
                                        else: {
                                            if: {
                                                cond: "highway to hell 1",
                                                msg: "You begin to dig in the ground",
                                                get: {
                                                    item: "highway to hell 2",
                                                    data: -1
                                                }
                                            },
                                            else: {
                                                msg: "Uh, you're already in hell. I'm not entirely sure where you think you're going...",
                                                get: {
                                                    item: "highway to hell 1",
                                                    data: -1
                                                }
                                            },
                                        },
                                    },
                                }
                            },
                        },
                    }
                },
                "(talk|meow|beaver|beavers)": {
                    if: {
                        cond: "talked to the beaver",
                        msg: "Want to follow the beavers? (\"follow\" if yes)"
                    },
                    else: {
                        if: {
                            cond: "already followed the beaver",
                            msg: "You've already talked to and followed the beaver! Either pick a portal (1, 2, or 3) or do something else!"
                        },
                        else: {
                            msg: "You walk up to the beavers and decide to talk to them. Of course, they don't understand what you say, since you're a cat and beavers don't understand cats. That would just be ridiculous!<br><br>\
                    Although they don't understand you, they seem to want to lead you somewhere. Follow?",
                            get: {
                                item: "talked to the beaver",
                                data: -1
                            }
                        }
                    },
                    cmd: {
                        "(beaver|beavers)": {
                            if: {
                                cond: "talked to the beaver",
                                msg: "Want to follow the beavers? (\"follow\" if yes)"
                            },
                            else: {
                                if: {
                                    cond: "already followed the beaver",
                                    msg: "You've already talked to and followed the beaver! Either pick a portal (1, 2, or 3) or do something else!"
                                },
                                else: {
                                    msg: "You walk up to the beavers and decide to talk to them. Of course, they don't understand what you say, since you're a cat and beavers don't understand cats. That would just be ridiculous!<br><br>\
                            Although they don't understand you, they seem to want to lead you somewhere. Follow?",
                                    get: {
                                        item: "talked to the beaver",
                                        data: -1
                                    }
                                }
                            },
                        }
                    },
                },
                "(follow|yes)": {
                    if: {
                        cond: "talked to the beaver",
                        msg: "You follow the beavers to a set of three shimmering portals. Which portal should you enter? (1, 2, or 3?)",
                        get: {
                            item: "talked to the beaver",
                            data: 0
                        },
                        get2: {
                            item: "already followed the beaver",
                            data: -1
                        },
                        get3: {
                            item: "the great beaver question",
                            data: -1
                        },
                    },
                    else: {
                        if: {
                            cond: "already followed the beaver",
                            msg: "You...you've already done that. You know where the portals are, just pick: 1, 2, or 3?"
                        },
                        else: {
                            msg: "Huh?"
                        }
                    }
                },
                "(1|one|first|left)": {
                    if: {
                        cond: "the great beaver question",
                        msg: "You go into portal 1 (the one on the left) and appear back in your house, in the kitchen!",
                        dest: Locations.kitchen
                    },
                    else: {
                        msg: "What?"
                    }
                },
                "(2|two|second|middle)": {
                    if: {
                        cond: "the great beaver question",
                        if: {
                            cond: "Grebel",
                            msg: "You go into portal 2 (the one in the middle) and appear in the room where Nathan currently lives!",
                            dest: Locations.nathan2
                        },
                        else: {
                            msg: "You go into portal 2 (the one in the middle) and appear in a room you've never been in before! Look around!",
                            dest: Locations.nathan2,
                            get: {
                                item: "went into portal 2",
                                data: -1
                            }
                        },
                    },
                    else: {
                        msg: "What?"
                    }
                },
                "(3|three|third|right)": {
                    if: {
                        cond: "the great beaver question",
                        msg: "You go into portal 3 (the one on the right) and appear in a room (look around)!",
                        dest: Locations.AliyahRoom2
                    },
                    else: {
                        msg: "What?"
                    }
                },
            },
        },
        AliyahRoom2: {
            cmd: {
                "hint": {
                    if: {
                        cond: "licence to kill",
                        if: {
                            cond: "Assassination mission",
                            msg: "Alright, here are your available commands:<br><br>\
                            look<br>\
                            leave<br>\
                            portal<br>\
                            Assassination<br>\
                            Headquarters<br>\
                            bed<br>\
                            carpet<br>\
                            inv<br>\
                            clear<br>\
                            help<br>\
                            hint"
                        },
                        else: {
                            msg: "Alright, here are your available commands:<br><br>\
                            look<br>\
                            leave<br>\
                            portal<br>\
                            Headquarters<br>\
                            bed<br>\
                            carpet<br>\
                            inv<br>\
                            clear<br>\
                            help<br>\
                            hint"
                        },
                    },
                    else: {
                        msg: "Alright, here are your available commands:<br><br>\
                            look<br>\
                            leave<br>\
                            portal<br>\
                            bed<br>\
                            carpet<br>\
                            inv<br>\
                            clear<br>\
                            help<br>\
                            hint"
                    },
                },
                l: {
                    if: {
                        cond: "licence to kill",
                        if: {
                            cond: "Assassination mission",
                            img: "Images/AliyahRoom2.jpeg",
                            msg: "You look around the room. The bed looks comfortable, the carpet looks soft and fluffy, and the sunlight streams in through the window. The door is open and you see a hallway. (\"leave\" to go to the hallway, \"portal\" to go to the building where Nathan lives now, \"Assassination\" to go back to your mission, or \"Headquarters\" to return to headquarters).",
                            clear: 1,
                        },
                        else: {
                            img: "Images/AliyahRoom2.jpeg",
                            msg: "You look around the room. The bed looks comfortable, the carpet looks soft and fluffy, and the sunlight streams in through the window. The door is open and you see a hallway. (\"leave\" to go to the hallway, \"portal\" to go to the building where Nathan lives now, or \"Headquarters\" to return to headquarters).",
                            clear: 1,
                        },
                    },
                    else: {
                        img: "Images/AliyahRoom2.jpeg",
                        msg: "You look around the room. The bed looks comfortable, the carpet looks soft and fluffy, and the sunlight streams in through the window. The door is open and you see a hallway. (\"leave\" to go to the hallway, \"portal\" to go to the building where Nathan lives now.)",
                        clear: 1
                    },
                },
                "bed": {
                    msg: "Walking across the soft carpet, you curl up on the bed happily and fall asleep.",
                    inc: "rest",
                },
                "carpet": {
                    msg: "You curl up on the fluffy carpet and fall asleep.",
                    inc: "rest",
                },
                "(portal|Grebel)": {
                    msg: "You return to Aliyah's other room and then go to the hallway.",
                    dest: Locations.hallway3
                },
                "(explore|leave|hallway)": {
                    msg: "You go to the hallway. There are four open doors, one leading to a bathroom, and the others leading to bedrooms. There is also a slippery-looking staircase at the end of the hall.",
                    dest: Locations.AliyahHallway
                },
                "Headquarters": {
                    if: {
                        cond: "licence to kill revoked",
                        msg: "You have lost your licence to kill, so you can't go back to Headquarters."
                    },
                    else: {
                        if: {
                            cond: "Assassination mission",
                            msg: "You are transported back to Headquarters. Look around- you can re-accept the mission to go back to the mission.",
                            dest: Locations.Headquarters
                        },
                        else: {
                            if: {
                                cond: "Assassination mission - completed",
                                msg: "You are transported back to Headquarters. Look around to see if you have a mission.",
                                dest: Locations.Headquarters
                            },
                            else: {
                                msg: "What do you want to do?"
                            }
                        }
                    }
                },
                "(Assassination|mission)": {
                    if: {
                        cond: "Assassination mission",
                        msg: "You return to the place that Headquarters had beamed you to. Perhaps now it's time you go south?",
                        dest: Locations.Assassin
                    },
                    else: {
                        msg: "Assassination?",
                    },
                },
            },
        },
        AliyahHallway: {
            cmd: {
                "hint": {
                    if: {
                        cond: "stairs question",
                        msg: "Alright, here are your commands for now (they change as you progress through the game):<br><br>\
                            be careful<br>\
                            just go<br>\
                            look<br>\
                            help<br>\
                            Zara<br>\
                            kill Zara<br>\
                            Parents<br>\
                            hallway<br>\
                            water / toilet<br>\
                            stairs<br>\
                            Aliyah<br>\
                            bathroom<br>\
                            bed (after \"parents\")<br>\
                            laundry (after \"door\")<br>\
                            door (after \"parents\")<br>\
                            inv<br>\
                            help<br>\
                            clear<br>\
                            hint"
                    },
                    else: {
                        msg: "Alright, here are your commands for now (they change as you progress through the game):<br><br>\
                            be careful<br>\
                            just go<br>\
                            look<br>\
                            help<br>\
                            Zara<br>\
                            kill Zara<br>\
                            Parents<br>\
                            hallway<br>\
                            water / toilet<br>\
                            stairs<br>\
                            Aliyah<br>\
                            bathroom<br>\
                            bed (after \"parents\")<br>\
                            laundry (after \"door\")<br>\
                            door (after \"parents\")<br>\
                            inv<br>\
                            help<br>\
                            clear<br>\
                            hint",
                    }
                },
                h: {
                    msg: "Commands: north/south/east/west are now obsolete, you can type a name that you see on the floor plan to go to their room. When you \"look\" while in a room, the text there should tell you which objects you can interact with, and/or the object will be on the floor plan. <br><br>\
                    look<br>\
                    inv<br>\
                    help<br>\
                    clear<br>\
                    hint",
                    clear: 1
                },
                l: {
                    img: "Images/AliyahHallway.jpeg",
                    msg: "You are in a hallway with four open doors. One leads to a bathroom, and the others lead to bedrooms. There is also a slippery-looking staircase at the end of the hall.",
                    clear: 1
                },
                "(Zara|right|r)": {
                    if: {
                        cond: "Name Zara",
                        msg: "Entering Zara's room, you climb over mountains of clothes to see them laying on its side on its bed. <br><br>",
                        dest: Locations.ZaraRoom
                    },
                    else: {
                        msg: "Entering a bedroom to your right, you climb over mountains of clothes to see a lazy looking human laying on its side on its bed. <br><br>\
                        You try to determine its gender and start to wonder how you had guessed others'. Had you been making too many assumptions?. You shake your head and decide not to care about gender. <br><br>\
                        \"Oh hi, Lucky!\" It says. You wonder how it knows your name. <br>\
                        \"You can call me Zara. I use they/them pronouns.\" You meow in understanding, but the silly human seems to take your understanding for confusion. They continue to talk about pronouns for a bit, so you skip forward in time a minute or two to get out of the conversation. <br><br>\
                        \
                        You are now in their room.",
                        get: {
                            item: "Name Zara",
                            data: -1
                        },
                        dest: Locations.ZaraRoom
                    }
                },
                "kill": {
                    cmd: {
                        "Zara": {
                            if: {
                                cond: "licence to kill revoked",
                                msg: "Killing things doesn't feel so fun anymore..."
                            },
                            else: {
                                msg: "You go into the messy room to the right in the hallway and jump at the human's head, aiming to kill. You'd aimed for the eyes, but your claws dig into their hair instead and you hang awkwardly from their hair. They lift you gently to sit on their hair and you sit on top of their head in confusion. They take your off their head and pet you with one hand, balancing you with the other. They giggle.<br><br>\
                            \"Try poison next time.\" They advise you, placing your on their bed. You decide to take a nap there instead of trying to kill them again because sleep is the best. You wake up a bit later and jump down from the bed.",
                                inc: "rest",
                            },
                        },
                    }
                },
                "(left|Leila|Rob|Parents)": {
                    msg: "You go into a room with brownish-coloured walls. No one is here, but there is a large bed that looks comfy and there is a door leading somewhere.",
                    get: {
                        item: "bathroom and walk-in closet",
                        data: -1
                    },
                    get2: {
                        item: "parents' bed",
                        data: -1
                    },
                },
                "bed": {
                    if: {
                        cond: "parents' bed",
                        msg: "You curl up on the bed. Mm. Cozy wonderful sleep :) ",
                        inc: "rest"
                    },
                    else: {
                        msg: "Whose bed? Maybe explore around a bit.",
                    }
                },
                "door": {
                    if: {
                        cond: "bathroom and walk-in closet",
                        msg: "You head for the mysterious door and it leads to a small room with clothing on hangers and in laundry baskets, and then a small bathroom with a blue floor, a sink, and a toilet. The toilet water is calling to you but so does the pile of laundry in the small room. You return to the hallway, but you can come straight to the toilet or laundry now that you know where they are..",
                        get: {
                            item: "laundry",
                            data: -1
                        },
                        get2: {
                            item: "bathroom and walk-in closet",
                            data: 0
                        }
                    },
                    else: {
                        msg: "Which door?",
                    }
                },
                "hallway": {
                    msg: "You're in the hallway.",
                },
                "(water|toilet)": {
                    msg: "You drink that glorious water. Ah...refreshing...",
                    inc: "water"
                },
                "laundry": {
                    if: {
                        cond: "laundry",
                        msg: "You curl up in the laundry in the small room between the bedroom and the connected bathroom. Cozy.",
                        inc: "rest",
                    },
                    else: {
                        msg: "Where's the laundry? Go find it first so you know where to go.",
                    }

                },
                "stairs": {
                    msg: "You look down the stairs and wonder how careful you should be. \"Be careful\" or \"just go\"?",
                    get: {
                        item: "stairs question",
                        data: -1,
                    },
                },
                "careful": {
                    if: {
                        cond: "stairs question",
                        msg: "You step carefully down the stairs, coming to the bottom. You see a living room and a door that leads outside.",
                        get: {
                            item: "stairs question",
                            data: 0
                        }
                    },
                    else: {
                        msg: "What are you trying to do?",
                    },
                },
                "just": {
                    cmd: {
                        "go": {
                            if: {
                                cond: "stairs question",
                                msg: "You go down the stairs at your usual speed. You’ve seen worse than some pesky stairs. <br><br>\
                                The stairs are no match for the great and powerful Lucky-<br><br>AH!You're falling down the stairs!!<br><br>\
                                A lovely funeral was held.<br><br>\
                                Summer has come and passed<br>\
                                The innocent cat never lasts<br>\
                                Wake me up when September ends<br>\
                                Like my kitties come to pass<br>\
                                One year has gone so fast<br>\
                                Wake me up when September ends<br>\
                                Here comes the meows again<br>\
                                Falling from the leprechaun heaven<br>\
                                Drenched in my pain again<br>\
                                Becoming who we are<br>\
                                As my memory rests<br>\
                                But never forgets what I lost<br>\
                                Wake me up when September ends<br>\
                                Summer has come and passed<br>\
                                The innocent cat never lasts<br>\
                                Wake me up when September ends<br>\
                                bring out the milk again<br>\
                                Like we did when spring began<br>\
                                Wake me up when September ends<br>\
                                Here comes the meows again<br>\
                                Falling from the stars<br>\
                                Drenched in my pain again<br>\
                                Becoming who we are<br>\
                                As my memory rests<br>\
                                But never forgets what I lost<br>\
                                Wake me up when September ends<br>\
                                Summer has come and passed<br>\
                                The innocent cat never last<br>\
                                Wake me up when September ends<br>\
                                Like my kitties come to pass<br>\
                                Five years has gone so fast<br>\
                                Wake me up when September ends<br>\
                                Wake me up when September ends<br>\
                                Wake me up when September ends",
                                get: {
                                    item: "stairs question",
                                    data: 0
                                },
                                end: 7
                            },
                            else: {
                                msg: "What are you trying to do?"
                            }

                        }
                    }
                },
                "Aliyah": {
                    msg: "You trot into Aliyah's room.",
                    dest: Locations.AliyahRoom2
                },
                "bathroom": {
                    msg: "You head over to the bathroom. Nothing much is happening here, but you do see a toilet, so you take the opportunity to drink some *sophisticated* water.",
                    inc: "water",
                }
            },
        },
        ZaraRoom: {
            cmd: {
                "hint": {
                    if: {
                        cond: "follow Z",
                        msg: "Here are all the possible commands right now: <br><br>\
                        look<br>\
                        follow<br>\
                        return / leave<br>\
                        kill Zara<br>\
                        kill Elliot<br>\
                        sleep / bed\
                        inv<br>\
                        help<br>\
                        clear<br>\
                        hint"
                    },
                    else: {
                        msg: "Here are all the possible commands right now: <br><br>\
                        look<br>\
                        follow<br>\
                        return / leave<br>\
                        kill Zara<br>\
                        sleep / bed\
                        inv<br>\
                        help<br>\
                        clear<br>\
                        hint"
                    },
                },
                l: {
                    if: {
                        cond: "follow Z",
                        msg: "You are in a bedroom. The bed is covered in fluffy stuffed animals, so it looks more cuddly than most human beds. <br><br>\
                        There is a human in the room that you think is probably male, but after meeting Zara, you aren't sure about gender anymore.<br><br>\
                        \"Lucky, this is Elliot, he/him. Elliot, this is Lucky, she/her\" Zara says, introducing you two. You can either return to Zara's room by typing \"return\" or sleep on Elliot's bed.",
                        clear: 1
                    },
                    else: {
                        msg: "You look around. Zara notices you looking around and asks:<br><br>\
                        \"Do you wanna visit my friend with me?\"<br><br>\
                        You think that the room you're in looks messy and uninteresting anyway, so you suppose that you should follow them. (type \"follow\" to follow, type \"leave\" to go back to the hallway)",
                        clear: 1
                    },
                },
                "follow": {
                    if: {
                        cond: "follow Z",
                        msg: "You follow Zara back into their room.",
                        get: {
                            item: "follow Z",
                            data: 0
                        }
                    },
                    else: {
                        msg: "You follow Zara into a portal in their room, your tail waving high. The portal is tall enough for the human to walk through. Look around!",
                        get: {
                            item: "follow Z",
                            data: -1
                        }
                    },
                },
                "(return|leave)": {
                    if: {
                        cond: "follow Z",
                        msg: "You are now back in Zara's room.",
                        get: {
                            item: "follow Z",
                            data: 0
                        },
                    },
                    else: {
                        if: {
                            cond: "Name Zara",
                            msg: "You leave Zara's room. You are now in the hallway.",
                            dest: Locations.AliyahHallway
                        },
                        else: {
                            msg: "You leave the room. You are now in the hallway.",
                            dest: Locations.AliyahHallway
                        }
                    }
                },
                "kill": {
                    cmd: {
                        "Zara": {
                            msg: "You jump at Zara's head, aiming to kill. You'd aimed for their eyes, but your claws dig into their hair instead and you hang awkwardly from their hair. They lift you gently to sit on their hair and you sit on top of their head in confusion. They take your off their head and pet you with one hand, balancing you with the other. They giggle.<br><br>\
                            \"Try poison next time.\" They advise you, placing your on their bed. You decide to take a nap there instead of trying to kill them again because sleep is the best. You wake up a bit later and jump down from the bed.",
                            inc: "rest",
                        },
                        "Elliot": {
                            if: {
                                cond: "follow Z",
                                msg: "Zara shoots you a look as if they can tell what you're thinking and you decide against it."
                            },
                            else: {
                                msg: "Elliot? He isn't here..."
                            }
                        }
                    }
                },
                "(sleep|bed)": {
                    if: {
                        cond: "follow Z",
                        msg: "You curl up on Elliot's bed with the stuffed animals. Mm, cozy!",
                        inc: "rest"
                    },
                    else: {
                        msg: "You curl up on Zara's bed and fall asleep.",
                        inc: "rest",
                    }
                }
            },
        },
        HomeHardware: {
            cmd: {
                "hint": {
                    msg: "Alright, here are your available commands:<br><br>\
                    look<br>\
                    move (up|down)<br>\
                    inv<br>\
                    clear<br>\
                    help<br>\
                    hint<br>\
                    "
                },
                l: {
                    msg: "Welcome to Home Hardware!",
                    clear: 1
                },
                "g": {
                    cmd: {
                        "(plants|plant)": {
                            msg: "You browse the store and find a catnip plant! You use your telekinetic powers to lift it, and you walk over to the cashier and set it down in front of her. Maia walks up and pays for it, and you leave with the plant.",
                            end: 789
                        }
                    }
                },
                m: {
                    cmd: {
                        u: {
                            if: {
                                cond: "idk why but they're trying to go even further up than Home Hardware 4",
                                msg: "Aha, I have fooled you. You've gone so far up that you've gone down! Welcome to hell!",
                                get: {
                                    item: "idk why but they're trying to go even further up than Home Hardware 5",
                                    data: 0
                                },
                                get2: {
                                    item: "idk why but they're trying to go even further up than Home Hardware 4",
                                    data: 0
                                },
                                get3: {
                                    item: "idk why but they're trying to go even further up than Home Hardware 3",
                                    data: 0
                                },
                                get4: {
                                    item: "idk why but they're trying to go even further up than Home Hardware 2",
                                    data: 0
                                },
                                get5: {
                                    item: "idk why but they're trying to go even further up than Home Hardware 1",
                                    data: 0
                                },

                                dest: Locations.hell
                            },
                            else: {
                                if: {
                                    cond: "idk why but they're trying to go even further up than Home Hardware 3",
                                    msg: "You're not going to get anywhere this time..",
                                    get: {
                                        item: "idk why but they're trying to go even further up than Home Hardware 4",
                                        data: -1
                                    }
                                },
                                else: {
                                    if: {
                                        cond: "idk why but they're trying to go even further up than Home Hardware 2",
                                        msg: "You're not going to get anywhere this time..",
                                        get: {
                                            item: "idk why but they're trying to go even further up than Home Hardware 3",
                                            data: -1
                                        }
                                    },
                                    else: {
                                        if: {
                                            cond: "idk why but they're trying to go even further up than Home Hardware 1",
                                            msg: "I see you're still trying. Huh. There's something to be said for perseverance, I suppose.",
                                            get: {
                                                item: "idk why but they're trying to go even further up than Home Hardware 2",
                                                data: -1
                                            }
                                        },
                                        else: {
                                            msg: "How can you go up from here?",
                                            get: {
                                                item: "idk why but they're trying to go even further up than Home Hardware 1",
                                                data: -1
                                            }
                                        }
                                    },
                                }
                            }
                        },
                    },
                }
            },
        },
        DecisionRoom: {
            cmd: {
                l: {
                    msg: "Revive? (\"yes\" or \"no\")",
                },
                "yes": {
                    if: {
                        cond: "Mumu life/death question",
                        msg: "You decide to revive Mumu. You start to cry in regret, and as your tears fall onto her, she starts to wake up. Your tears have healed her! They also seem to have had an amnesic effect: she doesn't remember you killing her! It's probably a good idea to leave now... <br><br>",
                        get: {
                            item: "Mumu life/death question",
                            data: 0
                        },
                        dest: Locations.living_room
                    },
                    else: {
                        if: {
                            cond: "Baba life/death question",
                            msg: "You decide to revive Baba.",
                            get: {
                                item: "Baba life/death question",
                                data: 0
                            },
                            dest: Locations.office
                        },
                        else: {
                            if: {
                                cond: "Emily life/death question",
                                msg: "You rewind time, watching the human's struggle happen in reverse. It is now alive, having no memory of what just happened.",
                                get: {
                                    item: "Emily life/death question",
                                    data: 0
                                },
                            },
                            else: {
                                if: {
                                    cond: "Eevee life/death question",
                                    msg: "You decide to rewind time to avoid facing consequences. The fluffy cat remembers nothing.",
                                    get: {
                                        item: "Eevee life/death question",
                                        data: 0
                                    },
                                    dest: Locations.Emily
                                },
                                else: {
                                    if: {
                                        cond: "Reu life/death question",
                                        msg: "You decide to revive Reu by rewinding time. You return to the hallway.",
                                        get: {
                                            item: "Reu life/death question",
                                            data: 0
                                        },
                                        dest: Locations.hallway3
                                    },
                                    else: {
                                        if: {
                                            cond: "Maia life/death decision",
                                            msg: "Because you hate consequences, you decide to revive the human. You return to the hallway.",
                                            get: {
                                                item: "Maia life/death question",
                                                data: 0
                                            },
                                            dest: Locations.hallway3
                                        },
                                        else: {
                                            if: {
                                                cond: "Nathan life/death decision",
                                                msg: "Because you are a *cough cough chicken cough cough* (sorry, I meant to say a coward), you decide to revive the human. Afterwards, you return to the hallway.",
                                                get: {
                                                    item: "Nathan life/death question",
                                                    data: 0
                                                },
                                                dest: Locations.hallway3
                                            },
                                            else: {
                                                if: {
                                                    cond: "Andrew life/death decision",
                                                    msg: "You decide to revive the human, probably because you want to sleep on its couch but you feel a little weird about doing it while the human is dead... Afterwards, you return to the hallway.",
                                                    get: {
                                                        item: "Andrew life/death question",
                                                        data: 0
                                                    },
                                                    dest: Locations.hallway3
                                                },
                                                else: {
                                                    if: {
                                                        cond: "Aliyah life/death decision",
                                                        msg: "You decide to revive the human (good choice). You use your amnesic healing tears to heal the human. When you're finished, the human sees you and reaches out to pet you. You comply, hopping up onto the human's lap, feeling somewhat guilty for killing the human in the first place. You fall asleep.<br><br>\
                                                        Later, you return to the hall.",
                                                        inc: "rest",
                                                        get: {
                                                            item: "Aliyah life/death question",
                                                            data: 0
                                                        },
                                                        dest: Locations.hallway3
                                                    },
                                                    else: {
                                                        msg: "Revive who?",
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            }
                        }
                    }
                },
                "no": {
                    if: {
                        cond: "Mumu life/death question",
                        msg: "You leave her dead :) You can still change your mind and revive her (command is \"revive\"). You are still in the living room.",
                        get: {
                            item: "chose death Mumu",
                            data: -1
                        },
                        get2: {
                            item: "Mumu life/death question",
                            data: 0
                        },
                        dest: Locations.living_room
                    },
                    else: {
                        if: {
                            cond: "Baba life/death question",
                            msg: "Alright, Baba can stay dead. If you want to be boring, type \"revive.\"",
                            get: {
                                item: "Baba life/death question",
                                data: 0
                            },
                            get2: {
                                item: "chose kill Baba",
                                data: -1
                            },
                            dest: Locations.office
                        },
                        else: {
                            if: {
                                cond: "Emily life/death question",
                                msg: "Coolio, Emily stays dead. If your conscience kicks in, type \"revive Emily.\"",
                                get: {
                                    item: "Emily life/death question",
                                    data: 0
                                },
                                get2: {
                                    item: "chose kill Emily",
                                    data: -1
                                },
                                dest: Locations.Emily
                            },
                            else: {
                                if: {
                                    cond: "Eevee life/death question",
                                    msg: "Yay, living life on the edge. Type \"revive Eevee\" if you change your mind.",
                                    get: {
                                        item: "Eevee life/death question",
                                        data: 0
                                    },
                                    get2: {
                                        item: "chose kill Eevee",
                                        data: -1
                                    },
                                },
                                else: {
                                    if: {
                                        cond: "Reu life/death question",
                                        msg: "Yes! You decide to keep Reu dead, live on the edge. \"Revive Reu\" brings the human back to life, if you change your mind for some reason.",
                                        get: {
                                            item: "Reu life/death question",
                                            data: 0
                                        },
                                        get2: {
                                            item: "chose kill Reu",
                                            data: -1
                                        },
                                        dest: Locations.hallway3
                                    },
                                    else: {
                                        if: {
                                            cond: "Maia life/death question",
                                            msg: "Yes! You decide to keep the human dead, living life on the edge! \"Revive Maia\" brings the human back to life, if you want that.",
                                            get: {
                                                item: "Maia life/death question",
                                                data: 0
                                            },
                                            get2: {
                                                item: "chose kill Maia",
                                                data: -1
                                            },
                                            dest: Locations.hallway3
                                        },
                                        else: {
                                            if: {
                                                cond: "Nathan life/death question",
                                                msg: "Yes! You decide to keep the human dead, living life on the edge! \"Revive Nathan\" brings the human back to life, if you want that.",
                                                get: {
                                                    item: "Nathan life/death question",
                                                    data: 0
                                                },
                                                get2: {
                                                    item: "chose kill Nathan",
                                                    data: -1
                                                },
                                                dest: Locations.hallway3
                                            },
                                            else: {
                                                if: {
                                                    cond: "Andrew life/death question",
                                                    msg: "Yes! You decide to keep the human dead, living life on the edge! You take a nap on the human's chest, just to feel like you have truly beat it. <br><br>After a while, you return to the hallway. <br><br>\
                                                \"Revive Andy\" brings the human back to life, if you want that.",
                                                    inc: "rest",
                                                    get: {
                                                        item: "Andrew life/death question",
                                                        data: 0
                                                    },
                                                    get2: {
                                                        item: "chose kill Andrew",
                                                        data: -1
                                                    },
                                                    dest: Locations.hallway3
                                                },
                                                else: {
                                                    if: {
                                                        cond: "Aliyah life/death question",
                                                        msg: "You decide to leave the human dead, which I can normally get behind, but really? The human wanted nothing more than to pet you! Don't you feel even the slightest bit of remorse? Ah, forget it...you're too far gone...<br><br>\
                                                        You return to the hall, leaving the dead body in the room. You notice that a closet door is open in the room, but decide not to explore it. (\"go\" to go see what's happening, \"revive Aliyah\" to revive)<br><br>\
                                                        You are now in the hallway.",
                                                        get: {
                                                            item: "Aliyah life/death question",
                                                            data: 0
                                                        },
                                                        get2: {
                                                            item: "chose kill Aliyah",
                                                            data: -1
                                                        },
                                                        dest: Locations.hallway3
                                                    },
                                                    else: {
                                                        msg: "Huh?"
                                                    },
                                                },
                                            },
                                        },
                                    }
                                },
                            },
                        },
                    }
                },
            }
        },
        WonderPetSchoolhouse: {
            if: {
                cond: "looked outside the schoolhouse already",
                cmd: {
                    h: {
                        if: {
                            cond: "WonderPetsMissionQuestion",
                            msg: "Commands:<br><br>\
                                look<br>\
                                kill Wonder Pets<br>\
                                inv<br>\
                                help<br>\
                                clear<br>\
                                hint-> hopefully very helpful for if you don't know what to do, the hint is a specific list of possible commands that changes depending on where you are in the game"
                        }
                    },
                    l: {
                        if: {
                            cond: "WonderPetsMissionQuestion",
                            msg: "The animals look at you uncomfortably. You think about how nice it would feel to kill them...(\"kill Wonder Pets\" or \"mission\" are the only two options here)",
                            clear: 1
                        },
                        else: {
                            img: "https://lh3.googleusercontent.com/proxy/CHvzjCL9JDs_g7adD1_WVgjk8q0v282tX9Voat97E56r0G2zzGyxiQ_qUQRVT-zliQ_SxvVKEyTirM44UGJlTH3-btmBLdR2TD2K7UYhn3s9WOy-YzszCzG5GKoEwqAIZ2cBcy8RZFCzc9AClo6UI_OOOldggMY-XeiNGO4",
                            msg: "The building seems to only contain one room, and it has a colourful rug with the alphabet written around the edge on the floor, and children's toys scattered around the room. As you look around, a hamster and a duckling jump out of their enclosures and come running up to you. <br><br>\
                            \"We're so glad you're here!\" The hamster says to you. <br><br>\
                            \"We really need your help!\" The duckling adds. \"See, our friend Tuck is not feeling well today, and we need someone to help us on our missions!\" The duckling motions to a turtle lying in its tank. <br><br>\
                            You nod, still unsure why you, a trained assassin, were sent here...<br><br>\
                            Then, you hear a ringing sound, and you turn to see that a cylindrical tin pen-holder that is decidedly *not* a phone is shaking and ringing as though it's a phone. The hamster immediately begins to sing: <br><br>\
                            \"The phone, the phone is ringing!\"<br><br>\
                            \"The phone, we'll be right there!\" The duckling continues. You stare at the animals in confusion.<br><br>\
                            \"The phone, the phone is ringing!\" The turtle chimes in from its tank.<br><br>\
                            \"There's an animal in trouble\" (the hamster again)<br><br>\
                            \"There's an animal in trouble\" (the duckling)<br><br>\
                            \"There's an animal in trouble somewhere.\" The turtle finishes the song and the hamster at last picks up the phone. <br><br>\
                            After listening to the phone for approximately half a second, the hamster gasps. \"What's happening?\" You inquire. <br><br>\
                            \"It's a c-\" the hamster starts to sing the answer, but you slash it across the face with your claws. The hamster shrinks back and decides that it would be best to just give a straight answer.<br><br>\
                            \"There's, um, there's a cat...t-trapped in a tree.\" The hamster says shakily. <br><br>\
                            The duckling and the hamster look at one another, probably regretting hiring an assassin to help them with their little 'save the animals' missions.<br><br>\
                            Do you go on the mission right now? (yes/no)",
                            get: {
                                item: "WonderPetsMissionQuestion",
                                data: -1
                            },
                            clear: 1
                        },
                    },
                    "(Yes|mission|rescue)": {
                        if: {
                            cond: "started to rescue the cat",
                            msg: "\"Yes! Now, let's think of a solution together to fix this problem.\" Linny says, looking like he's about to start singing again. You resist the temptation to strangle him. You use your telekinetic powers to part some branches to help free the cat, and you carefully let the cat float down.<br><br>\
                                Meanwhile, Linny and Ming-ming seem to be singing about teamwork. <br><br>\
                                \"What's gonna work?\" Linny asks. <br><br>\
                                \"Teamwork!\" Ming-ming responds brightly. You roll your eyes.<br><br>\
                                \"I got the cat down!\" You inform them as the cat reaches the ground. <br><br>\
                                They blink at you in surprise.<br><br>\
                                Your surroundings start to dissolve and you struggle to understand your surroundings as it changes. You spin around, trying to find an explanation, anything. You see that while the Wonder Pets are disappearing, the recently rescued cat is not. In fact, the cat glares at you threateningly. <br><br>\
                                Your surroundings solidify again. Look around!",
                            clear: 1,
                            dest: Locations.UnluckyEncounter,
                        },
                        else: {
                            img: "Images/WonderPets.jpeg",
                            msg: "Stepping back, you nod. \"Let's save that cat!\" You say. The duckling and hamster look relieved that they're no longer in imminent danger. <br><br>\
                            The three of you board the boat-plane contraption and fly straight toward a series of wooden squares on the wall, which are each filled with children's belongings. You brace yourself for impact, wondering why they are choosing to crash. At the last second, a flap opens and you see that there is a path leading straight outside.<br><br>\
                            As you fly toward your destination, the animals start to sing: <br><br>\
                            \"Wonder Pets, Wonder Pets, we're on our way-\" You cut them off immediately.<br><br>\
                            \"What did I say about singing?\" You snarl at them. Quivering, they wisely decide not to reply.<br><br>\
                            After some time, you arrive in a foresty area near a housing area. You vaguely see a cat in the tree. The cat's pretty high up, so you don't see any details.<br><br>\
                            \"M-my name's Linny, pronouns he/him, I'm a Guinea Pig.\" The guinea pig says. Whoops. You'd been referring to him as a hamster this whole time. Oh well.<br><br>\
                            \"I'm Ming-ming, pronouns she/her, I'm a duck who's just learned to fly!\" The duckling adds proudly, showing you that she can get a whole five inches off the ground. You nod. <br><br>\
                            \"I'm Lucky, pronouns she/her, and I'm a cat.\" You reluctantly introduce yourself. You concede that you should be cordial, at least for now. Put your murderous tendencies on hold.<br><br>\
                            \"Shall we rescue the cat?\" You say, sighing inwardly. This was not what you had in mind when you'd heard that you were now an assassin.<br><br>\
                            (respond with \"rescue\", this is the only possible command)",
                            get: {
                                item: "started to rescue the cat",
                                data: -1
                            },
                        },
                    },
                    "No": {
                        msg: "You decide not to go on the mission (you can still choose to go on the mission if you want). You can look around the room a bit as the three animals look at you uncomfortably."
                    },
                    "kill": {
                        cmd: {
                            "wonder": {
                                cmd: {
                                    "pets": {
                                        msg: "A true murderer at heart, huh? Alright, go kill the harmless little class pets and prevent them from saving kittens or helping pandas.<br><br>\
                                            You lunge at the hamster first, and the duckling and the turtle scream in terror as you slit its throat. You turn to the duckling next, and lastly you kill the turtle. The boat-plane thing aggressively picks you up and transports you back to Assassin's Headquarters. You get a very stern talking-to, and then a threatening-looking human comes in with a gun. You try to resist, running all over the room. A few other agents get shot accidentally in the process. The human manages to shoot you. As you lie, gasping your last breaths, you wonder if it was worth it.",
                                        inc: "food", count: 3,
                                        inc2: "Wonder Pets kill point",
                                        end: 307
                                    }
                                }
                            }
                        }
                    }
                }

            },
            else: {
                cmd: {
                    l: {
                        img: "https://s3.amazonaws.com/images.hamlethub.com/hhresized/500/6932/201905/Peter-Parley-Schoolhouse-2-1558533334.jpg",
                        msg: "You take a second to look around outside the schoolhouse before the weird boat/plane contraption flies you inside through the chimney at the top of the building. You cough as smoke flies up your nose. What is happening?? (\"look\" again)",
                        get: {
                            item: "looked outside the schoolhouse already",
                            data: -1
                        },
                        clear: 1
                    }
                }
            }
        },
        UnluckyEncounter: {
            cmd: {
                l: {
                    if: {
                        cond: "Unlucky wants to try again",
                        msg: "You look around to find yourself in a plain, featureless black room this time. Unlucky sits in front of you, glaring holes into your skull. <br><br>\
                        \"What just happened?\" You ask the cat. She smirks at you.<br><br>\
                        \"My name is Unlucky. I'm you, but evil.\" Unlucky says, reintroducing herself. You suppose that she really was serious about the whole 'redoing it' thing.\
                        \"You're me but evil? I'm not exactly an angel myself-\" You start to say, when you start to see dark wispy shapes coming out of Unlucky. Her eyes start to turn fully black and her pupils glow red. The darkness creeps over and threatens to envelop you. <br><br>\
                        Shrinking back, you try to fend it off with your telekinesis, but it's too powerful. Unlucky smiles, knowing that she now has the upper hand."
                    },
                    else: {
                        if: {
                            cond: "already talked to Unlucky",
                            img: "Images/FierceLucky.png",
                            msg: "Unlucky snarls at you."
                        },
                        else: {
                            msg: "You look around to find yourself in a plain, featureless white room. The cat sits in front of you, glaring so hard you can practically feel the heat. <br><br>\
                    You examine the cat. It has tortoiseshell patterning that, come to think of it, looks a lot like yours. In fact, it looks exactly like yours. You don't look in mirrors often, but you think that this cat looks remarkably like you.<br><br>\
                    \"Who are you?\" You ask the cat. It smirks at you.<br><br>\
                    \"Isn't it obvious? I'm you, but evil.\" The cat says. You roll your eyes. You note that she even sounds like you...<br><br>\
                    \"You're me but evil? I'm not exactly an angel myself\" You reply. \"I've killed pretty much everyone I know, and I don't exactly feel guilty about it.\" The cat nods. <br><br>\
                    \"My name's Unlucky, by the way. Pronouns are she/her.\" She adds. You blink at her.<br><br>\
                    \"Did you...did you name yourself Unlucky just so you'd be the opposite of me?\" You ask incredulously. The cat looks a little uncomfortable<br><br>\
                    \"W-well, when you say it like that, it sounds lame...\" She replies.<br><br>\
                    \"But...yeah...I suppose that's why I named myself Unlucky...\" There's a short awkward silence as both of you don't know what to say.<br><br><br>\
                    \"First time having a nemesis, huh?\" You say. She scowls.<br><br>\
                    \"Let's do this again.\" She mutters to herself. Your surroundings blur into one another. Try looking around.",
                            get: {
                                item: "already talked to Unlucky",
                                data: -1
                            },
                            get2: {
                                item: "Unlucky wants to try again",
                                data: -1
                            }
                        },
                    },
                },
            }
        },
    },
},

    Aliases = {
        "move": "m",
        "(north|run away|run|run inside|go inside)": "n",
        "(south|adventure time)": "s",
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
        "(play chess|chess time)": "chess",
        "(get plant|buy plant|plant)": "g plant",
        "(be careful|go carefully)": "careful",
        "(heart bean|bean plant|look bean plant|look heart bean)": "bean",
        "play basketball": "basketball",
        "(Werdna Dandrewlion Andy|song)": "song Werdna Dandrewlion Andy",
        "(leave room|hall-wander|hall wander|see people)": "hallway3",
        "(go to Nathan's room|Nathan's room)": "nathan",
        "(sleep laundry|nap laundry|sleep laundry pile|nap laundry pile)": "laundry",
        "(sleep blanket|nap blanket|get rest)": "blanket",
        "(get chocolate milk)": "chocolate milk",
        "(look outside|look out window|sit chair)": "chair",
        "(nap bed|sleep bed|nap)": "bed",
        "(steal hard hat|take hard hat)": "hard hat",
        "(look outside|look out window|sit chair)": "chair",
        "(sleep under bed|under bed|go under bed|go Grebel|Grebel)": "portal",
        "(halp|help|helpp|helppp)": "h",
        "(hunt squirrel|hunt squirrel|chase squirrel|chase squirrels|find squirrel|find a squirrel|hunting time)": "squirrel",
        "(get catnip|find catnip|catnip time|look catnip|catnippp|hunt catnip|hunt for catnip)": "catnip",
        "adventure time": "s",
        "get weed": "weed",
        "(inventory|inv)": "i",
        "(talk to treacys)": "Treacys",
        "^l i$": "i",
        "(glass|toilet)": "water",
        "(pick up|get|grab|obtain|eat|drink)": "g",
        "(nest|sleeping bag|sleep bed)": "bed",
        "^sleep$": "u bed",
        "(a leprechaun|the leprechaun|all the leprechauns|every leprechaun|all leprechauns|the leprechauns)": "leprechaun",
        "(glass of water|glass)": "water",
        "(use|interact|sleep|sit|climb|bask in)": "u",
        "(sunbathe|sunlight|sunshine)": "u sun",
        "(talk|say|speak)": "meow",
        "(murder|attack)": "kill",
        "(clear|cls)": "clr",
        "\\b(talk to|see|visit|on|in|with|to|for|at|from|the|about|into|near|after|as|like|since|after|off|above|below|and|but)\\b": "",
    };
