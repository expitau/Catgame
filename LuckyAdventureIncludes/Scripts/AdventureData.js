
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

});

WorldData = {
    msg: "Chichien's brain is too smol to understand :(",
    cmd: {
        clr: {
            clear: 1
        },
        kill: {
            msg: "What would you like to kill?",
            cmd: {
                ".*": {
                    msg: "You can't kill that (sadly).",
                }
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
            clear"
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
                    msg: "You have ascended to Leprechaun Heaven!",
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
        }
    },

    locations: {
        kitchen: {
            cmd: {
                l: {
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
                            msg: "You sit in the sun. It's very warm and nice. Just as you start to relax, the dishwasher turns on and you freak out and run to the dining room.",
                            dest: Locations.dining_room
                        }
                    }
                }
            }
        },
        outside: {
            cmd: {
                "catnip": {
                    msg: "You wander around the forest until you come across a familiar-looking plant. It smells amazing! You roll around in it and eat some of it, thoroughly enjoying yourself. After a while, you realize that in your...inebriated state... you'd accidentally lifted the house off the ground with your telekinetic powers! Oops. You blink, restoring it back to how it was.",
                },
                "squirrel": {
                    msg: "Frolicking about in the forest, you come across a squirrel! This is your chance to contribute to the family. Meow and Baba will love it! You bolt after it, but it climbs a tree quickly. You contemplate following, but you don't really want to get stuck up there...",
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
                    msg: "As you approach, you realize that geese are somewhat more intimidating than you remember. Good thing you're not a normal cat! You use your telekinetic powers to lift the goose off the ground. Honking in surprise, the goose seems to be calling for help.<br><br>A few seconds later, you start to notice the ground shaking slightly. This concerns you, since several of your littermates died in an earthquake. Your telekinetic powers were the only reason you and the rest of your littermates didn't die that day...<br><br>To your utter bewilderment, an emourmous goose appears, thundering through the forest toward you. You drop the now-miniscule-seeming goose onto the patio (it is offended and honks at you) and gasp at the gigantic bird. It stands about tall enough to reach the top of the roof on the house. You wonder to yourself how it keeps itself hidden, and seemingly in response to your question, it shape-shifts into a catlike figure. <br><br>\"Hello\". The creature says to you.<br><br>\"Um...hello...\" You reply cautiously, very aware that it is not a wise idea to get on the bad side of this creature. You may have nine lives, but you've used up a fair number of those (you have a complicated past set of lives)...<br><br>\"I'm going to have to ask you to not bother my geese.\" The creature states. You nod furiously in response, eager to get out of this without injury. \"You see, the geese are special to me, and the fact that you would try to kill or at least injure one of them...it just breaks my heart\" It continues. <br><br>You are now thoroughly terrified. You should never have tried to leave the house!<br><br>\"I agree, you should have stayed inside. Stay away from my children.\" It replies. What \is\ this creature? You wonder to yourself. \"They call me Mr. Goose\" The creature answers. \"Alright\" It concedes. \"I will allow you to leave, since I can read your mind and I am reasonably sure that you will never harm one of my little geese again.\"<br><br>\"Oh, and I almost forgot.\" Mr. Goose adds. \"I can't let you tell everyone that I exist!\" The goose-cat waves a paw and disappears. You wonder what exactly that last bit means. Perhaps if you try to tell Lulu or Mumu anything you saw, you won't be able to! Or maybe it'll give you amnesia! No, that can't be it, you can still remember what just happened. I suppose next time you interact with one of the other cats, you'll have to make sure that you can talk about Mr. Goose. <br><br> Shaken by the whole experience, you have two choices ahead of you. Choose peace, or choose violence? (You could also run off and chase squirrels or find some catnip as well.)",
                    dest: Locations.MrGoose
                },
            },
        },
        MrGoose: {
            cmd: {
                l: {
                    msg: "Mr. Goose looms above you.",
                },
                "catnip": {
                    msg: "You wander around the forest until you come across a familiar-looking plant. It smells amazing! You roll around in it and eat some of it, thoroughly enjoying yourself. After a while, you realize that in your...inebriated state... you'd accidentally lifted the house off the ground with your telekinetic powers! Oops. You blink, restoring it back to how it was.",
                    dest: Locations.outside
                },
                "squirrel": {
                    msg: "Frolicking about in the forest, you come across a squirrel! This is your chance to contribute to the family. Meow and Baba will love it! You bolt after it, but it climbs a tree quickly. You contemplate following, but you don't really want to get stuck up there...",
                    dest: Locations.outside
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
                        w: {
                            msg: "You look to the west and see the patio. Trotting off in that direction, you realize that there is a goose sitting on the tile! Geese are big birds... what should you do? <br><br>As you are thinking this, the goose seems to notice you. It honks at you. Is that a challenge? You think to yourself. <br><br>Do you want to fight the goose, venture into the forest, or turn tail and run back into the house? <br><br>respond \"fight\", \"south\" (for outdoor adventure time), or \"north\" (run back inside).",
                        },
                    },
                },
                "violence": {
                    msg: "Shaking off everything Mr. Goose has said, you lunge at him. If you're fast enough, maybe you'll get him, you think to youself.<br><br>It seems you were wrong. Where are you? (respond \"Where am I?\" or \"up\")",
                    dest: Locations.heaven,
                },
                "peace": {
                    msg: "You meekly tread back inside...<br><br>You're shaking slightly as you walk inside. Mumu sees you as she passes by and asks what's wrong. You start to say you just met an enourmous goose named Mr. Goose, but the words won't make their way out of your mouth. <br><br>\"Nothing...\" You reply. <br>She shrugs and moves on.",
                    dest: Locations.kitchen,
                },
            },
        },
        dining_room: {
            cmd: {
                l: {
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
                            get: {
                                item: "food",
                                data: 1
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
                        "Baba": {
                            msg: "You meow at Baba, he turns around and makes weird baby noises at you and picks you up. You can see his computer, type 'watch' to look at it."
                        }
                    }
                },
                kill: {
                    msg: "What would you like to kill?",
                    cmd: {
                        "Baba": {
                            msg: "You approach Baba from behind, slowly stalking up. You leap up to scratch the back of his head with the intent to kill. <br><br>As your claws sink into his flesh, he yelps in pain. <br><br>Suddenly, you are transported back to the kitchen...<br><br>You look at your claws and you can still see the blood. You blink, and it disappears. Mystified, you decide to just continue with your day. You somewhat regret hurting Baba and you hope he isn't dead.",
                            inc: "kill point B",
                            dest: Locations.kitchen
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
                        }
                    }
                },
                meow: {
                    cmd: {
                        "mumu": {
                            msg: "You meow at Mumu, she replies:<br><br>\
                            \"My meow meow's gone awayyy<br>\
                            I'll now be sad throughout the day!<br>\
                            There's just nothing else to say!<br>\
                            Meow meow's goneeee, meow meow's goneeeee!\""

                        }
                    }
                },
                break: {
                    cmd: {
                        "water": {
                            msg: "Your paw strikes the glass surface and you watch the glass fall to the ground slowly. You feel a sense of power emerge as it shatters across the ground. You step in the glass shards. Good thing you're invincible to injury. A normal cat would have been cut by the glass! <br><br>Suddenly, a leprechaun pops out of nowhere and rewinds time for you. Good thing it's fixed now - Meow would probably be pretty mad at you. Oh well, it was fun while it lasted. You contemplate doing it again."
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
                            msg: "You approach Mumu in an attempt to try out a quick pick-up line: <br><br>\
\"I'm not high on catnip, I'm just intoxicated by you\"<br>*you raise your eyebrows suggestively*<br><br>She doesn't seem to like the pick-up line. You revert back to your original plan. You put your paw up to her face and suddenly unsheathe your claws into her neck. She bleeds to death.<br><br>Standing over her body, you start to regret killing her. Maybe you shouldn't have done it.<br><br>You start to cry in regret, and as your tears fall onto her, she starts to wake up. Your tears have healed her! They also seem to have had an amnesic effect: she doesn't remember you killing her! It's probably a good idea to leave now...",
                            inc: "kill point M",
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
                l: {
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
                l: {
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
                            msg: "She seems to be glaring at you in a way that makes you think that she'd kill you first if given the chance. Not this time! <br><br>You charge into the room and leap onto the bed, surprising her. She fights back viciously, and it ends in a draw. <br><br>You walk away with minor wounds and you think to yourself that maybe you made a questionable decision. Oh well. Perhaps you're glad that she didn't die.",
                        }
                    }
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
                            get: {
                                item: "water",
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
                            get: {
                                item: "rest",
                                data: 1
                            }
                        }
                    }
                }
            }
        },
        basement: {
            cmd: {
                l: {
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

                    get: {
                        item: "rest",
                        data: 1
                    }

                },
                "Nathan": {
                    msg: "You head over to Nathan's room.",
                    dest: Locations.nathan1
                },
            }
        },
        nathan1: {
            cmd: {
                l: {
                    msg: "You are in Nathan's room! Your cat bed is here, there's a chair you like to sit on, and Nathan's bed looks pretty comfortable, too.",
                    clear: 1,
                },
                "chair": {
                    msg: "You sit on the chair in Nathan's room and look out the window. The birds and squirrels look pretty tasty out there! You could go outside once you have rested and eaten (or you could break the window now!).",
                    get: {
                        item: "rest",
                        data: 1
                    },
                },
                "break": {
                    cmd: {
                        "window": {
                            msg: "You leap from the chair into the window, shattering it completely. You're an essentially invincible kitten, so you don't get injured by the glass. Yay, you're outside!",
                            dest: Locations.outside
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
                "portal": {
                    msg: "You crawl under Nathan's bed. You like to be here, it's safe and comfortable, maybe not as comfortable as the actual bed, but -<br><br>You suddenly notice a blue shimmery circle-like shape appear on the ground, no larger than one of your paws. Curious, you creep closer to it. The circle grows rapidly and swallows you!",
                    dest: Locations.nathan2
                },
            }
        },
        nathan2: {
            cmd: {
                l: {
                    msg: "You come out of the blue shimmery circle and find yourself inside a wooden box, which you conclude is a closet. The shimmery circle is at the back of the closet, but you decide to explore first. You can always come back here to go back to the house.<br><br>You can smell Nathan's scent in the room, perhaps this is where he's been the past few months. You come out of the closet and you find yourself in a room you've never seen before! Nathan is at a desk working on his computer. You read his screen (you learned to read two lives ago, in Italy) and find that he is not doing work, he is coding a game. \"Lucky's Cat Adventures\" You read. You laugh to yourself. It couldn't possibly be as exciting as your actual life. He hasn't noticed you yet.",
                    clear: 1,
                },
                "Nathan": {
                    msg: "\"Hello!\" You mew at Nathan. He jumps. <br><br>\"Lucky?\" he exclaims. He picks you up and hugs you. \"I don't know how you're here...perhaps you're just a figment of my imagination, a sign that I'm up too late...\" You glance at the clock and realize that time has passed since you last looked outside, it's now about 5 AM. You decide that you want to have time to yourself to wander around the building, so you rewind time so that he hasn't noticed you yet. It's now about 11:30 PM. You think about leaving the room.",
                },
                kill: {
                    msg: "What would you like to kill?",
                    cmd: {
                        "Nathan": {
                            msg: "You lunge at Nathan, plunging your claws into him. As he bleeds out onto the carpet, you start to perhaps regret your actions. Sighing, you blink and the blood disappears. You like to kill, but you hate having consequences for your actions. Nathan appears back where he was, fully healed and with no memory of the incident.",
                            inc: "kill point N"

                        },
                    },
                },
                "home": {
                    msg: "You leap back through the portal and appear at home!",
                    dest: Locations.nathan1,
                },

                "hallway3": {
                    msg: "You trot out into the hallway, looking around. It's dark, perhaps because it's past 11 PM.",
                    dest: Locations.hallway3,
                },

            },
        },
        hallway3: {
            cmd: {
                l: {
                    msg: "Hall-wandering time! Who can you talk to?",
                    clear: 1,
                },
                "Werdna": {
                    cmd: {
                        "Dandrewlion": {
                            cmd: {
                                "Andy": {
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
                                },
                            },
                        },
                    },
                },
                "(extended|more)": {
                    cmd: {
                        "verses": {
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
                    },
                },
                "Reu": {
                    msg: "You scratch at one of the doors, which is slightly open. A tall human crosses the room and looks at you in confusion. \"Well hello\" It says to you. You pad into the room and see a stuffed blueish blob seated on the couch. \"That's Phyllis\" The human explains to you. You curl up on the couch next to Phyllis and fall asleep. A few hours later, you awaken and leave the room. The tall human watches you leave, confused and unsure of what to do about this random cat wandering the building. You laugh to yourself.",
                    get: {
                        item: "rest",
                        data: 1
                    },
                },
                "Treacys": {
                    msg: "You wander down the hall, through a lounge area and down the hall some more. You see one room in particular that has two name signs on either side of the door. \"Jackie\" one reads, and the other \"Claire\". The door is closed, so you rewind time slowly until it's open, it's now probably 10 PM. You pad into their room, surprising them. \"Where did this cat come from?!\" The shorter-haired one said to the other. The other human shrugs, mystified \"This cat looks an awful lot like Nathan's cat Lucky, from the pictures I've seen\" One of them remarks. The other nods, looking at you closely. You decide that you're bored of this, and you skip ahead in time to where you were (and erase their memories, of course). You are now standing at their closed door at a time past 11:30 PM",
                },
                "Maia": {
                    msg: "You wander down the hall, past a lounge-type room, and further down the hall. Near the far end of the hall, you see an open door on the right side. You enter to see a female human working at its desk. You wander in and hop up on its lap. It seems surprised. \"A cat?\" It exclaims at you. \"Why not a dog?\" It sighs. It pets you a few times. You see a few plants near the window, including one that that smells vaguely of skunk. Hmm. You leave after a while.",
                },
                "Aliyah": {
                    msg: "You wander down the hall, past a lounge-type room, and further down the hall. Near the far end of the hall, you see an open door on the left side. You enter to see a female human working at its desk. You wander in and hop up on its lap. It seems excited, and starts to pet you. You fall asleep. A while later, you go back to the hallway",
                    get: {
                        item: "rest",
                        data: 1
                    },

                },

                "(Werdna|Andy|Dandrewlion)": {
                    msg: "You wander down a flight of stairs and eventually come across an open door that you decide to enter. There is a fairly tall-looking and somewhat intimidating-looking male human sitting at a desk. In between the desk and the bed is a contraption of metal poles and wood, which you can only assume is a defense-type of machine to prevent intruders from approaching. You meow at the human, but it is wearing a contraption over its ears that seems to be obstructing its hearing. You walk in anyway and curl up on its couch for a while. Although he pays no attention to you, you do somewhat enjoy his presence for some reason.  A while later, you leave to go back to hall-wandering.",
                    get: {
                        item: "rest",
                        data: 1
                    },
                },

                "kill": {
                    cmd: {
                        Andy: {
                            msg: "You lunge at the tall, intimidating human. It yelps, startled. You could have chosen friendship, but instead you knock the human over with the impact of your leap (the element of surprise and your telekinetic powers may have helped knock him down as well). Your claws are driven into the human's flesh as the two of you hit the ground. \"Not so intimidating anymore!\" You think to yourself. As he bleeds out, you look back up at his metal pole contraption. It didn't seem to have been helpful in keeping intruders away. As you always do, you rewind time, allowing him to live again. He's seated back at his desk. You curl up on his couch for a few hours to get some sleep, then you leave and hall-wander some more.",
                            inc: "kill point A",
                            get: {
                                item: "rest",
                                data: 1
                            },
                        },
                        Maia: {
                            msg: "You lunge at the female human, but it pulls out a weapon that you recognize as a crossbow (you died from being shot by one in a previous life). It won't get you this time.You rewind time a few seconds, to before the human has pulled it out. Your claws sink into the human's skin. You enjoy feeling its heartbeat slow and then stop under your paws. Sighing, you rewind time so that she is still alive. You go back to the hallway.",
                            inc: "kill point Maia",
                        },
                    },
                },
                "(chocolate|dining)": {
                    cmd: {
                        "(milk|hall)":{
                            msg: "You go to see the tall, intimidating human. As you walk up, it's leaving the room. It seems surprised to see you. <br><br>\"Oh hi...\" It says to you. \"I'm just kind of craving some sugar and possibly a banana, so I'm headed to the dining hall to get some chocolate milk. Want to come?\" <br><br>\
                             You nod and follow the human. You pad down the hallway after it. <br><br>\
                            The human watches you as you walk together. <br><br>\"Are you Nathan's cat?\" It asks you. \"Why am I talking to a cat...\" It mutters to itself. You nod in response to its question. It ignores your nod. You roll your eyes. <br><br>\
                            You arrive at the dining hall. It pours itself a glass of chocolate milk and grabs a banana. Realizing that cats can't have chocolate, the human sets down a glass of water for you. You do like drinking water out of glasses, but you usually do it when your family leaves cups unattended. It's less satisfying when you're not being mischeivious, but you drink it anyway. After the two of your finish your drinks, you return to the hallway and the human returns to its room. ",
                            get: {
                                item: "water",
                                data: 1
                            },
                        },
                    },
                },

                "weed": {
                    msg: "You walk up to one of the female humans in its room. The human turns around, not pleased to see you. You get the impression that it doesn't like cats. You decide to play nice and you sit at its feet. You notice that the human has some kind of plant in its hands. You tilt your head at it inquiringly. The human notices you looking at the plant. <br><br>\"It's weed, it's like the human equivalent of catnip.\" The human explains. You nod. You do enjoy catnip.<br><br>\"Weed probably isn't good for cats, but if you want, you can keep me company as I go deliver it to Nathan's room. I deal weed out of his window.\" It says.<br><br> You grab the leaves from the human as it's about to leave and you decide to deliver the weed to Nathan.",
                    get: {
                        item: "weed",
                        data: 1
                    },
                },

                "deliver": {
                    cmd: {
                        "weed": {
                            msg: "You go to Nathan's room and give him the weed.",
                            get: {
                                item: "weed",
                                data: -1
                            },
                        },
                    },
                },
                "Jake": {
                    msg: "You wander down a flight of stairs and eventually come across an open door that you decide to enter. You see what appears to be a fairly tall male human who has dark curly hair. You walk into the room and curl up on its lap. It seems surprised but accepts it. It asks you if you like watching sports. You do like watching the players run around on the screen, but you have no idea what's happening in the game. You nod at the human. it seems surprised, but seems to then write it off as its imagination. \"Humans\" You scoff to yourself. <br><br>You fall asleep as the two of you watch sports together. Later, he gets up to go to bed, and you return to the hallway.",
                    get: {
                        item: "rest",
                        data: 1
                    },
                },

                "Andrew": {
                    msg: "The name seems vaguely familiar...try Andy, Dandrewlion, or Werdna",
                    get: {
                        item: "rest",
                        data: 1
                    },
                },

                "Nathan": {
                    msg: "You head over to Nathan's room.",
                    dest: Locations.nathan2,
                },
                "Emily": {
                    msg: "You go to a door that leads outside, and you skip time until someone has opened it. You slip out behind them, unnoticed. You find the garden, and you explore a little. As you're sniffing a bean plant, you blink and realize that the scene has changed. You look under your feet to see the now-familiar blue shimmery circle shrinking. It stops at about a paw wide. You paw at it, hoping for a way to escape, and it readily opens. You go back to the garden, and then return to the strange room. If you want to return, you can always go back to the garden (type \"garden\" to return) You take a look around.",
                    dest: Locations.Emily
                },
            },
        },
        Emily: {
            cmd: {
                l: {
                    msg: "You see a bunch of bean plants in front of a window. They're in some odd pots, they look like they might be teapots. Interesting. You wonder who lives here.",
                    clear: 1,
                },
                "Emily": {
                    msg: "As you're looking at the wonderfully growing beans, a female human walks into the room. She seems surprised to see you.<br><br>\"Lucky?\" It asks you. You roll your eyes \"Yes?\" You meow back at it. How does it know your name? You wonder.",
                },
                "Eevee": {
                    msg: "You leave the room through the open door and wander around until you find a large light-coloured fluffy cat. <br><br>\"Hello!\" You say to her. <br><br>\"This is my house!\" She hisses at you. You take a step back and try to appear as non-threatening as possible. \"I've arrived here using a portal, I'm just planning on wandering around for a bit and then returning to where I came from\" You explain. <br><br>\"A portal?\" She asks. <br><br>\"Yes, it's a blue shimmery circle that allows me to travel through space.\" You add. <br><br>She seems skeptical, so you lead her to the bean plant room and show her where the circle is. <br><br> \"I see nothing\" She scoffs. You blink in confusion. It's right there, in plain sight! You think to yourself...You decide to take a quick trip to the other building and back, to prove it. When you come back, the cat seems shocked. <br><br>\"You just vanished into thin air!\" She exclaims. You smile. <br><br>\"That's only one of the things I can do.\" You lift the bean plants off the table telekinetically to demonstrate. You realize that you don't even know this cat's name. \"What's your name?\" You ask her. \"Eevee\" She responds.",
                },
                kill: {
                    cmd: {
                        "Emily": {
                            msg: "You kill Emily. She accepts her fate.",
                            inc: "kill point Em",
                        },
                        "Eevee": {
                            msg: "You kill Eevee ",
                            inc: "kill point Ev",
                        },
                    },
                },

                "garden": {
                    msg: "You head back to the garden and walk up to outside Nathan's room.You're in the hallway.",
                    dest: Locations.hallway3
                },
            }
        },
        Headquarters: {
            cmd: {
                l: {
                    if: {
                        cond: "weed mission",
                        if:{
                            cond: "befriend",
                            msg: "You go on mission!",
                        },
                        else:{
                            msg: "You are in Assassin's Headquarters! You currently have no missions, but check back later! <br>Your completed/in progress missions appear in your inventory.",
                        },
                    },
                    else: {
                        if: {
                            cond: "weed",
                            msg: "You are in Assassin's Headquarters! <br><br>You currently have one available quest:<br><br>\
                        Your mission is to go undercover on the streets and help send high-up drug dealers to jail. <br><br>(respond \"Accept\" to accept, or just return to the hallway outside Nathan's room by typing \"Nathan\")<br><br>Your completed/in progress missions appear in your inventory.",
                        },

                        else: {
                            msg: "You are in Assassin's Headquarters! You currently have no missions, but check back later!<br>Your completed/in progress missions appear in your inventory.",
                        },
                    },
                },

                "Accept": {
                    msg: "You are transported via private plane to Spain. Unfortunately, you do not have the plane to yourself. Some other secret agent that they call \"007\" also had a different mission in the same city. You think he's obnoxious, but you do both have a \"license to kill,\" as they say. When you land, you are instructed to behave like a normal cat and make your way to a particular location, where a huge deal is going down involving a hybrid drug, a cross between meth and cocaine. When you arrive, you look around (respond \"look\")",
                    get: {
                        item: "weed mission",
                        data: 1
                    },
                    dest: Locations.Spain,
                },
                "(Grebel|Nathan)": {
                    msg: "You return to the hallway outside Nathan's room. You could kill people or get weed, or from here you can find Eevee though that weird garden portal.",
                    dest: Locations.hallway3,
                },
            },
        },
        Spain: {
            cmd: {
                l: {
                    msg: "You are on the streets.<br>\
                N: You are supposed to head north to get to where you are supposed to be.<br>\
                E: You see a squirrel disappearing around the corner! You probably have time to chase it (you have the power to rewind time, so really you have all the time in the world)!<br>\
                When your mission is complete, enter \"Headquarters\" to return.",
                },
                m: {
                    cmd: {
                        n: {
                            msg: "You trot off down the road, having been briefed on the layout of the streets beforehand. You arrive at the place. You see a few tall humans, two male and one female. They see you and beckon encouragingly. \"They like cats...\" You note to yourself. You now have two paths: gather intel by befriending them, or kill them all and report back?",
                        },
                        e: {
                            msg: "You chase the squirrel down the block! You don't end up catching it, but you find it to be good exercise, which you needed now that you're a secret agent! Unfortunately, this mission is not an assassination mission, but you think it'll still be fun. You do have the power to rewind time, so maybe you can just kill them and undo it! You love not having consequences for your actions!",
                        },
                    },
                },
                "(gather intel|intel|befriend)": {
                    msg: "You pad up to the group, meowing at them. They pet you, and you enjoy their company. <br>All you have to do is hang around until they reveal enough incriminating information. You have undetectable cameras placed in your eyes as contact lenses, constantly streaming to Headquarters. You get a lot of video evidence over the course of a couple days (including their big drug bust) and you even come along when they go to meet someone higher-up! When you eventually return, your work pays off, and you unlock another mission! You are now back at Headquarters-look around to get details on the mission.",
                    get: {
                        item: "weed mission",
                        data: "completed",
                        item: "befriend",
                        data:-1,
                    },
                },
                "kill": {
                    msg: "You innocently trot up to the small group, and at the last second before one of their hands touches you, you leap onto it. Using the element of surprise (and your extensive experience), you kill everyone in sight. This time, you actually have a licence to kill. You don't have to rewind time. Huh. <br><br>You gather up their IDs and make sure that they're all dead, and you go to the meet-up location. You lead everyone to the place where they were, and they congratulate you on a job well done. Mission complete!",
                    get: {
                        item: "weed mission",
                        data: "completed",
                        item: "kill point W",
                        data: 1
                    },
                    dest: Locations.Headquarters,
                },
                "(Return|Headquarters)": {
                    msg: "You return to Headquarters.",
                    dest: Locations.Headquarters
                },
            },
        },
        heaven: {
            cmd: {
                kill: {
                    cmd: {
                        "Leprechaun": {
                            msg: "You have killed a leprechaun!",
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
                                                cond: "kill point B",
                                                msg: "You are ready. You are transported to the Assassin's Headquarters",
                                                get: {
                                                    item: "licence to kill",
                                                    data: 1,
                                                },
                                                inc: "kill point L",
                                                dest: Locations.Headquarters
                                            },
                                            else: {
                                                msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                                inc: "kill point L",
                                                dest: Locations.hell,
                                            }
                                        },
                                        else: {
                                            msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                            inc: "kill point L",
                                            dest: Locations.hell
                                        }
                                    },
                                    else: {
                                        msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                        inc: "kill point L",
                                        dest: Locations.hell
                                    }
                                },
                                else: {
                                    msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                    inc: "kill point L",
                                    dest: Locations.hell
                                }
                            },
                            else: {
                                msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                inc: "kill point L",
                                dest: Locations.hell
                            },
                            else: {
                                msg: "You hear a voice coming from a higher being. It's the God of Leprechauns! He bellows \"How dare you so much as touch a hair on one of my lovely leprechauns' heads! You've killed them!? You don't deserve to be here in lovely Leprechaun Heaven! I hereby banish you to hell!\"",
                                inc: "kill point L",
                                dest: Locations.hell
                            },
                        },
                    },
                },


                "Where am I?": {
                    msg: "You are in Leprechaun Heaven! Look around!",
                },
                l: {
                    msg: "Leprechaun Heaven seems amazing! Gold is abundant, and that includes goldfish - they come here when they die. Leprechauns are unicycling all over the place, doing fancy tricks. They hand you a matching outfit and ask you to join them in their leprechauning. You are reluctant, but they're insistent. <br><br>\"We all resisted at first, but now we embrace it!\"<br><br> They say to you. You back away, but they creep ever closer. You're not so sure that this is heaven anymore...",
                    end: 777,
                }
            }
        },

        hell: {
            cmd: {
                l: {
                    msg: "You catch on fire and and Easy Street plays.",
                    end: 666
                }
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
        "(talk to Reu|visit Reu|say hi to Reu)": "Reu",
        "(talk to Andy|visit Andy|say hi to Andy)": "Andy",
        "(talk to Maia|visit Maia|say hi to Maia)": "Maia",
        "(hallway|explore|leave room|hall-wander|hall wander|see people|exploring|leave)": "hallway3",
        "(meow at Nathan|talk to Nathan|go to Nathan's room|Nathan's room)": "nathan",
        "(sleep on laundry|nap on laundry|sleep on laundry pile|nap on laundry pile)": "laundry",
        "(sleep on blanket|nap on blanket|get rest)": "blanket",
        "(look outside|look out window|sit on chair)": "chair",
        "(nap on bed|sleep on bed|nap)": "bed",
        "(yes|hear verses)": "extended verses",
        "(look outside|look out window|sit on chair)": "chair",
        "(sleep under bed|under bed|go under bed|go to Grebel|Grebel)": "portal",
        "(halp|help)": "h",
        "(hunt for squirrel|hunt squirrel|chase squirrel|chase squirrels|find squirrel|find a squirrel|hunting time)": "squirrel",
        "(get catnip|find catnip|catnip time|look for catnip|catnippp|hunt catnip|hunt for catnip)": "catnip",
        "adventure time": "s",
        "get weed": "weed",
        "(inventory|inv)": "i",
        "(see Emily|visit Emily|talk to Emily|say hi to Emily)": "Emily",
        "(see Eevee|visit Eevee|talk to Eevee|say hi to Eevee)": "Eevee",
        "(Jackie|Claire|Jackie and Claire|Treacy|talk to treacys)": "Treacys",
        "Treacys": "Treacy",
        "^l i$": "i",
        "(glass|toilet)": "water",
        "(pick up|get|grab|obtain|eat|drink)": "g",
        "(nest|sleeping bag)": "bed",
        "^sleep$": "u bed",
        "(a leprechaun|the leprechaun|all the leprechauns|every leprechaun|all leprechauns|the leprechauns)": "leprechaun",
        "(glass of water|glass)": "water",
        "(use|interact|sleep|sit|climb|bask in)": "u",
        "(sunlight|sunshine)": "sun",
        "(talk|say|speak)": "meow",
        "(murder|attack)": "kill",
        "(clear|cls)": "clr",
        "\\b(on|in|with|to|for|at|from|the|about|into|near|after|as|like|since|after|off|above|below|and|but)\\b": "",
    };
