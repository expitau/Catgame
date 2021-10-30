// START OF SCRIPT
locations = {
	kitchen: {
		commands: {
			"look": (args) => {
				if (!args[0]) {
					t.write("You're in the kitchen, it gets pretty loud here sometimes, but the sun is shining through the window and is very warm.\n\ N: The dining room\n\ S: There's a door leading outside\n\ - The sun is shining onto the floor");
					t.clear();
				} else if (args[0] == 'sun') {
					t.write("The sun looks very warm and inviting");
				}
			},
			"use": (args) => {
				if (!args[0]) {
				} else if (args[0] == 'sun') {
					t.write("You sit in the sun. It's very warm and nice. Just as you start to relax, the dishwasher turns on and you freak out and run to the dining room.");
					location = locations.dining_room;
				}
			},
		},
		connections: {
			"(s|outside)": () => {
				if (variables["You have eaten food"] >= 0 && variables["You have had a drink"] >= 0 && variables["You are well rested"] >= 0) {
					t.write("You are ready. You wander over and meow at baba until he lets you outside");
					location = locations.outside;
				} else {
					t.write("You're not ready to go outside yet, you need to be well fed, have a drink, and rest first");
				}
			},
			"(n|dining)": () => {
				t.write("You go into the dining room");
				location = locations.dining_room;
			},
		},
	},
	outside: {
		commands: {
			"look": (args) => {
				if (!args[0]) {
					t.write("It's a pretty nice day! Not cold enough to form the terrible wet white fluff, but not too hot that shade is required. You survey the landscape of infinite litterbox, and decide that the garden is an excellent spot.\n\ N: You can go back inside\n\ S: You can go on an adventure into the forest.\n\ W: You can go around front\n\ - There is a catnip plant growing in the garden");
					t.clear();
				} else if (args[0] == 'forest') {
					t.write("The forest is fun to play in, you like chasing leaves");
				} else if (args[0] == 'catnip') {
					t.write("The plant smells good");
				}
			},
			"get": (args) => {
				if (!args[0]) {
				} else if (args[0] == 'catnip') {
					t.write("The catnip is fantastic, it makes you happy. You begin to loose control, and you freak out. You run in circles for 8 minutes straight, attacking leaves and fruitlessly chasing birds.                             Eventually you calm down. You survey your surroundings, and find you are exactly where you started");
				}
			},
		},
		connections: {
			"(n|kitchen)": () => {
				t.write("After some waiting around, you convince baba to let you back in.");
				location = locations.kitchen;
			},
			"(s|forest)": () => {
				t.write("You journey off into the forest, and after having a good time and chase some squirrels, you realize you actually have zero idea where you are.                             You sit down and meow until nighttime... when the wild turkey attacks.");
				return -1;
			},
			"(w|front|path)": () => {
				t.write("You are immediately startled by a leaf in the wind, and you bolt the nearest tree.\n\ You climb and you climb until you can't climb anymore. You look down. You're so high! You feel accomplished.\n\ \n\ \n\ You can't get down.");
				return -1;
			},
		},
	},
	dining_room: {
		commands: {
			"look": (args) => {
				if (!args[0]) {
					t.write("You're in the dining room, where the food and water bowls are. You like to sneak up on lulu when she's eating, but she isn't here right now.\n\ N: The entryway\n\ S: The kitchen\n\ W: The office\n\ D: The basement, but you don't need to go down there\n\ - There's food here\n\ - There's water here");
					t.clear();
				} else if (args[0] == 'water') {
					t.write("This water is not good enough for chichien");
				} else if (args[0] == 'food') {
					t.write("The food looks tasty");
				}
			},
			"get": (args) => {
				if (!args[0]) {
				} else if (args[0] == 'food') {
					if (variables["You have eaten food"] >= 0) {
						t.write("You've already eaten food, but you force yourself to eat more anyway.");
						variables["You have eaten food"]++
					} else {
						t.write("You eat some of the food, you're not as hungry anymore");
						variables["You have eaten food"] = 1
					}
				} else if (args[0] == 'water') {
					t.write("The water here is gross, you don't want to drink it. Your water has to be *sophisticated*");
				}
			},
		},
		connections: {
			"(n|entryway|entry)": () => {
				t.write("You go to the entryway");
				location = locations.entryway;
			},
			"(s|kitchen)": () => {
				t.write("You wander into the kitchen");
				location = locations.kitchen;
			},
			"(w|office)": () => {
				t.write("You go to the office");
				location = locations.office;
			},
			"(d|downstairs)": () => {
				t.write("Down there is just the pathetic litter pan, that's not good enough for chichien. You sit at the top of the stairs for a while contemplating cat things");
			},
		},
	},
	office: {
		commands: {
			"look": (args) => {
				if (!args[0]) {
					t.write("You're in the office, baba is here working on his laptop. You like baba, baba gives nice pets.\n\ N: Living room\n\ E: Dining room\n\ - Baba is here");
					t.clear();
				} else if (args[0] == 'baba') {
					t.write("Baba is watching the blinking lights on the laptop");
				}
			},
			"meow": () => {
				if (!args[0]) {
				} else if (args[0] == 'baba') {
					t.write("You meow at baba, he turns around and makes weird baby noises at you and picks you up. You can see his computer, type 'watch' to look at it.");
				}
			},
			"use": (args) => {
				if (!args[0]) {
				} else if (args[0] == 'baba') {
					t.write("You jump up and sit on babas lap. You can see his computer, type 'watch' to look at it.");
				}
			},
			"watch": () => {
				t.write("The more you watch, the more enthralled you become. Pictures are moving around the screen! It's very entertaining for a cat. You lose your mind to this hypnotic state.");
				return -1;
			},
		},
		connections: {
			"(n|living)": () => {
				t.write("You go over to the living room");
				location = locations.living_room;
			},
			"(e|dining)": () => {
				t.write("You go to the dining room");
				location = locations.dining_room;
			},
		},
	},
	living_room: {
		commands: {
			"look": (args) => {
				if (!args[0]) {
					t.write("You are in the living room, one of your favorites! Mumu is sleeping in her cat bed. There's an empty glass on the table.\n\ N: The window\n\ E: Entryway\n\ S: The office\n\ - Mumu is here\n\ - There's an empty glass on the table.");
					t.clear();
				} else if (args[0] == 'mumu') {
					t.write("Mumu looks sad");
				} else if (args[0] == 'water') {
					t.write("The glass is empty :(");
				} else if (args[0] == 'window') {
					t.write("You look out the window and chatter at some birds. You know you can't catch them, but it's fun to watch anyways");
				}
			},
			"meow": () => {
				if (!args[0]) {
				} else if (args[0] == 'mumu') {
					t.write("You meow at mumu, she replies:\n\ \n\ \"My meow meow's gone awayyy\n\ I'll now be sad throughout the day!\n\ There's just nothing else to say!\n\ Meow meow's goneeee, meow meow's goneeeee!\"");
				}
			},
			"get": (args) => {
				if (!args[0]) {
				} else if (args[0] == 'water') {
					t.write("The glass is empty, so you can't drink from it. You meow at baba, but he's too \"busy\" watching the blinking lights");
				}
			},
			"v": () => {
				if (!args[0]) {
				} else if (args[0] == 'mumu') {
					if (!args[0]) {
						t.write("What do you want to give mumu?");
					} else if (args[0] == 'sock') {
						if (variables["A sock"] >= 0) {
							t.write("You give mumu the sock, and she is instantly comforted. She thanks you by telling you how to finally defeat the wretched lulu\n\ \n\ \"Mbpthh mfthh mphh mmm pfhht mbt mbewow...\"\n\ \n\ ...prehaps her mouth was too full");
							variables["A sock"] = 0
						} else {
							t.write("You don't have a sock");
						}
					}
				}
			},
			"break": () => {
				if (!args[0]) {
					t.write("What do you want to break?");
				} else if (args[0] == 'water') {
					if (variables["broken"] >= 0) {
						t.write("The glass is already on the ground");
					} else {
						t.write("You push the empty glass off the table and it falls onto the carpet, it doesn't break");
						variables["broken"] = -1
					}
				} else if (args[0] == 'window') {
					t.write("Chichien is not stronk enough");
				}
			},
		},
		connections: {
			"(e|entry)": () => {
				t.write("You go to the entryway");
				location = locations.entryway;
			},
			"(s|office)": () => {
				t.write("You gallop as fast as you possibly can to the office. Very fun");
				location = locations.office;
			},
			"(n|window)": () => {
				t.write("You look out the window and chatter at some birds. You know you can't catch them, but it's fun to watch anyways");
			},
		},
	},
	entryway: {
		commands: {
			"look": (args) => {
				if (variables["lulu"] >= 0) {
					t.write("You're in the entryway. It's pretty dirty. The door leads outside.\n\ N: Outside\n\ E: Hallway\n\ S: Dining room\n\ W: Living room");
					t.clear();
				} else {
					t.write("You're in the entryway. It's pretty dirty. The door leads outside. You see the dreaded lulu at the end of the hall, she trots into emily's room\n\ E: Hallway\n\ S: Dining room\n\ W: Living room");
					t.clear();
					variables["lulu"] = -1
				}
			},
		},
		connections: {
			"(n|outside)": () => {
				if (variables["You have eaten food"] >= 0 && variables["You have had a drink"] >= 0 && variables["You are well rested"] >= 0) {
					t.write("You are ready. You are excited. You are so excited. You bound over and meow at baba until he lets you outside. As soon as you're out you bolt for the forest and climb up a tree.\n\ You climb and you climb until you can't climb anymore. You look down. You're so high! You feel accomplished.\n\ \n\ \n\ You can't get down.");
					return -1;
				} else {
					t.write("You're not ready to go outside yet, you need to be well fed, have a drink, and rest first");
				}
			},
			"(s|dining)": () => {
				t.write("You go into the dining room");
				location = locations.dining_room;
			},
			"(w|living)": () => {
				t.write("You see a yellow ball, and bat it into the living room. You lose it again after 0.01ms");
				location = locations.living_room;
			},
			"(e|hall|hallway)": () => {
				t.write("You go down the hallway a little bit.");
				location = locations.hallway1;
			},
		},
	},
	hallway1: {
		commands: {
			"look": (args) => {
				t.write("You are in the middle of the hallway, James' door is closed. You suspect he's in there, but doesn't want to be bothered right now.\n\ E: Hallway\n\ S: Bathroom\n\ W: Entryway");
				t.clear();
			},
			"meow": () => {
				if (!args[0]) {
				} else if (args[0] == 'james') {
					t.write("He doesn't respond, oh well");
				}
			},
		},
		connections: {
			"(e|hall|hallway)": () => {
				t.write("You continue down the hallway");
				location = locations.hallway2;
			},
			"(s|bathroom)": () => {
				t.write("You journey into the bathroom");
				location = locations.bathroom;
			},
			"(w|entry|entryway)": () => {
				t.write("You go to the entryway");
				location = locations.entryway;
			},
		},
	},
	hallway2: {
		commands: {
			"look": (args) => {
				if (!args[0]) {
					t.write("You are at the end of the hallway, Emily's door is next to you, and you see Lulu's ugly face peering at you from on top of the bed\n\ N: Emily's room\n\ S: Meow's room\n\ W: Hallway");
					t.clear();
				} else if (args[0] == 'lulu') {
					t.write("You don't like Lulu very much, probably best to keep your distance");
				} else if (args[0] == 'emily') {
					t.write("She's snickering at you from her bed");
				}
			},
			"meow": () => {
				if (!args[0]) {
				} else if (args[0] == 'lulu') {
					t.write("She mockingly meows back at you");
				} else if (args[0] == 'emily') {
					t.write("She calls you stupid, as usual...");
				}
			},
		},
		connections: {
			"(n|emilys|emily|lulu)": () => {
				t.write("You enter Emily's room... very cautiously... and then out of nowhere Lulu leaps off the bed and attacks you. You're too nice to hurt even a monster like her, so you succumb to your fate...");
				return -1;
			},
			"(s|meow|master|bedroom)": () => {
				t.write("You enter the master bedroom");
				location = locations.meow_room;
			},
			"(w|hall|hallway)": () => {
				t.write("You go down the hallway");
				location = locations.hallway1;
			},
		},
	},
	bathroom: {
		commands: {
			"look": (args) => {
				if (!args[0]) {
					t.write("You are in the bathroom. You can see the large, white bowl in the corner.\n\ N: The hallway\n\ E: Meow's bedroom\n\ - There's a toilet here");
					t.clear();
				} else if (args[0] == 'water') {
					t.write("Mmmm, toilet water");
				}
			},
			"get": (args) => {
				if (!args[0]) {
				} else if (args[0] == 'water') {
					t.write("You jump up on the toilet and have a good long drink. You feel very refreshed! Best water in the house.");
					variables["You have had a drink"] = 1
				}
			},
		},
		connections: {
			"(n|hall|hallway)": () => {
				t.write("You go to the hallway");
				location = locations.hallway1;
			},
			"(e|meow|master|bedroom)": () => {
				t.write("You go into Meow's room");
				location = locations.meow_room;
			},
		},
	},
	meow_room: {
		commands: {
			"look": (args) => {
				if (!args[0]) {
					t.write("You are in Meow's room, she has lots of blankets. You see your sleeping bag nest in the corner of the room.\n\ N: Hallway\n\ W: The bathroom\n\ - Your sleeping bag nest is here\n\ - There's a pile of socks on the ground here");
					t.clear();
				} else if (args[0] == 'bed') {
					t.write("It's very cozy and warm");
				}
			},
			"get": (args) => {
				if (!args[0]) {
				} else if (args[0] == 'sock') {
					if (variables["A sock"] >= 0) {
						t.write("You already have a sock, you can't carry another");
					} else {
						t.write("You pick up a sock, it smells like meow meow");
						variables["A sock"] = 1
					}
				}
			},
			"use": (args) => {
				if (!args[0]) {
				} else if (args[0] == 'bed') {
					t.write("You curl up in your bed and take a nap. You dream that lulu got trapped outside and you never saw her again. Ah what a good dream, you feel much more rested now!");
					variables["You are well rested"] = 1
				}
			},
		},
		connections: {
			"(n|hall|hallway)": () => {
				t.write("You go to the hallway");
				location = locations.hallway2;
			},
			"(w|bathroom)": () => {
				t.write("You go to the bathroom");
				location = locations.bathroom;
			},
		},
	},
}

