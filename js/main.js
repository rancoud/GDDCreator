var projectFormJson = [
  {
    name: "Game Name",
    type: "text",
    help: "",
    placeholder: "",
    value: "mygame"
  },
  {
    name: "Company Name",
    type: "text",
    help: "",
    placeholder: "",
    value: ""
  },
  {
    name: "Revision",
    type: "text",
    help: "",
    placeholder: "1.0.0",
    value: ""
  },
  {
    name: "Created At",
    type: "text",
    help: "",
    placeholder: "",
    value: ""
  }
];

var overviewFormJson = [
  {
    name: "Overall Gameplay",
    type: "text",
    help: "1 short sentences about the overall gameplay",
    placeholder: "",
    value: ""
  },
  {
    name: "Storyline",
    type: "textarea",
    help: "1-2 Paragraphs setting up the storyline or environment of the game.  Describe the first 2 minutes after the player hits the start button",
    placeholder: "",
    value: ""
  },
  {
    name: "General Gameplay",
    type: "text",
    help: "2-3 sentences that sum up the general gameplay, the general visual style and the overall feel of the game.",
    placeholder: "",
    value: ""
  }
];

var targetPlatformForm = [
  {
    name: "Target Platform",
    type: "textarea",
    help: "What platforms are you making this game for, what engine is it in, what are the min specs players need to play this, etc etc?",
    placeholder: "",
    value: ""
  }
];

var visualStyleForm = [
  {
    name: "Visual Style",
    type: "textarea",
    help: "Description of the visual style. This section of the game design document is very important when the director is not the visual designer. Even when the same person, this section will be a great inspiration and motivator for the rest of the team, as well as help pitch the idea to any stakeholders. The section should include visual references as well as concept art of locations, sketches etc.",
    placeholder: "",
    value: ""
  }
];

var audioStyleForm = [
  {
    name: "Audio Style",
    type: "textarea",
    help: "Describe the Audio style of the game.. \
    *	Music style and Genre with References\
    *	Audio Effects style\
    *	The kind of characters that would have dialogue with references\
    *	When dialogue or voice work would be used",
    placeholder: "",
    value: ""
  }
];

var startingOutForm = [
  {
    name: "Starting Out",
    type: "textarea",
    help: "How game begins",
    placeholder: "",
    value: ""
  }
];

var gameStartForm = [
  {
    name: "Game Start",
    type: "textarea",
    help: "Describe how the game loads up, what does the player do?",
    placeholder: "",
    value: ""
  }
];

var mainMenuForm = [
  {
    name: "Main menu",
    type: "textarea",
    help: "What happens after he/she gets past the loading screen and first menu?",
    placeholder: "",
    value: ""
  }
];

var characterSelectionForm = [
  {
    name: "Character Selection",
    type: "textarea",
    help: "How is the character selection / creation handled?",
    placeholder: "",
    value: ""
  }
];

var characterCreationForm = [
  {
    name: "Character Selection",
    type: "textarea",
    help: "How is their character management handled?  How do they outfit their character?  What is the interface like with the store or management screen?",
    placeholder: "",
    value: ""
  },
  {
    name: "Character Stuff",
    type: "textarea",
    help: "What does the player use to purchase upgrades for his weapon, how is this currency earned? What can be purchased?  Can they sell back?",
    placeholder: "",
    value: ""
  },
  {
    name: "Access Character Selection",
    type: "textarea",
    help: "Do they even have access to this before the intro campaign?",
    placeholder: "",
    value: ""
  }
];

var gameStartAndIntroForm = [
  {
    name: "After select character",
    type: "textarea",
    help: "After they create and setup their character what do they do?  How do they start the game? How do they choose or find a server?  Are their choices limited in the beginning? Is there a single player option and a multiplayer?",
    placeholder: "",
    value: ""
  },
  {
    name: "Tutorial",
    type: "textarea",
    help: "Is there some kind of tutorial they go through? Maybe a start mission or a brief little story mode to guide them through the mechanics of the game, introducing them to one mechanic per level, setting up the level so that they need a minimum amount of points to pass and that they have to use a specific mechanic in the level to achieve that.",
    placeholder: "",
    value: ""
  },
  {
    name: "Tutorial Ending",
    type: "textarea",
    help: "How many levels do they go through to learn all of the basic mechanics?",
    placeholder: "",
    value: ""
  },
  {
    name: "Start Gaming",
    type: "textarea",
    help: "General overview of gameplay, how does the level start, what information is displayed to the player before, during and immediately after loading and how is it displayed?",
    placeholder: "",
    value: ""
  },
  {
    name: "Other players",
    type: "textarea",
    help: "How are the players setup and spawned?",
    placeholder: "",
    value: ""
  },
  {
    name: "Gameplay at beginning",
    type: "textarea",
    help: "Describe the gameplay briefly once the game starts",
    placeholder: "",
    value: ""
  },
];

var inGameHudAndMenusForm = [
  {
    name: "HUD Design",
    type: "textarea",
    help: "Describe the HUD in a sentence or two, what information is being displayed and how?(Diegetically?)",
    placeholder: "",
    value: ""
  },
  {
    name: "Menus Design",
    type: "textarea",
    help: "How are the menu's, the server selection hub, the store, the mission selections visually represented and interacted with in game?",
    placeholder: "",
    value: ""
  }
];

var multiplayerForm = [
  {
    name: "Servers",
    type: "textarea",
    help: "For the multiplayer how is the server setup handled?  Alternatively how do non hosts find servers and how are their paired with other players?",
    placeholder: "",
    value: ""
  },
  {
    name: "First content",
    type: "textarea",
    help: "What environments/levels are available to the player in the beginning?  What game options are available to players and the host before the game starts?",
    placeholder: "",
    value: ""
  },
  {
    name: "Options",
    type: "textarea",
    help: "Describe in-game options available to both the host and the players.  How is the options screen displayed?",
    placeholder: "",
    value: ""
  },
  {
    name: "Match Ending",
    type: "textarea",
    help: "What happens when the match is over?  What A/V event is displayed for the winners / losers?",
    placeholder: "",
    value: ""
  },
  {
    name: "LeaderBoard",
    type: "textarea",
    help: "How are the scores tabulated and describe the end-game / leaderboard screen",
    placeholder: "",
    value: ""
  },
  {
    name: "Before quit match",
    type: "textarea",
    help: "What options do the players have right before exiting the match?",
    placeholder: "",
    value: ""
  },
  {
    name: "After quit match",
    type: "textarea",
    help: "What happens immediately after the players exit the match? What screen are they taken to and what do they get from the match(currency, score, xp, etc etc)",
    placeholder: "",
    value: ""
  }
];

var uiForm = [
  {
    name: "UI",
    type: "textarea",
    help: "General direction",
    placeholder: "",
    value: ""
  },
];

var uiMainMenuForm = [
  {
    name: "Main Menu",
    type: "textarea",
    help: "Describe the aesthetics and style of the menu, how it is displayed and how it is interacted with. Cite examples and post images of reference menus.",
    placeholder: "",
    value: ""
  },
];

var playerCustomizationForm = [
  {
    name: "Player Customization",
    type: "textarea",
    help: "List the elements and options for the UI involved with setting up the player, buying and selling weapons, equiping items, etc etc.",
    placeholder: "",
    value: ""
  },
];

var gameSetupScreenForm = [
  {
    name: "Game setup Screen",
    type: "textarea",
    help: "Go over the elements, options and UI involved with setting up or joining a match in multiplayer or starting/resuming a single player game.",
    placeholder: "",
    value: ""
  },
];

var inGameOptionsMenuForm = [
  {
    name: "In-Game Options Menu",
    type: "textarea",
    help: "Flow Chart and/or Wireframe",
    placeholder: "",
    value: ""
  },
];

var inGameHudForm = [
  {
    name: "In-Game HUD",
    type: "textarea",
    help: "Describe what information needs to be displayed and how it will be displayed.  Cite examples and shot sample shots of other games that contain similar styles or elements",
    placeholder: "",
    value: ""
  },
];

var gameOverScreenForm = [
  {
    name: "Game Over Screen",
    type: "textarea",
    help: "What information is displayed once a match is finished?",
    placeholder: "",
    value: ""
  },
];

var levelSelectionForm = [
  {
    name: "Level Selection",
    type: "textarea",
    help: "Describe the level selection and unlocking process.  How many levels does your average player start out with and how does he progress through the game?  How are the levels organized and grouped?  Are there distinct areas within the game and levels within those areas?  What motivates the player to unlock and go through the levels?",
    placeholder: "",
    value: ""
  },
];

var levelTypesForm = [
  {
    name: "Level Types",
    type: "textarea",
    help: "If there are distinct sectors or groupings of levels(ie: desert, cities, river, outpost) how are they grouped and what groups are planned?  How does the player access/unlock them?  Each level type or sector should have a template that defines key characteristics that are common in all levels within this sector, not only visually but even strategically.  Describe each level type in detail and go over the characteristics that define them, both from an aesthetic and gameplay stand point.",
    placeholder: "",
    value: ""
  },
];

var fullLevelListForm = [
  {
    name: "Full Level List",
    type: "textarea",
    help: "A full rundown of the levels to be included in the game, organized by grouping.  Full details of each level should be contained within a separate level design document.",
    placeholder: "",
    value: ""
  },
];

var gameplayForm = [
  {
    name: "Main job",
    type: "textarea",
    help: "What's the middle game like, what will the player spend the majority of his time doing while playing the game?",
    placeholder: "",
    value: ""
  },
  {
    name: "Objectives",
    type: "textarea",
    help: "What are our emotional objectives in the player, what kind of gameplay are we trying to foster here and how are we achieving or working towards those goals?",
    placeholder: "",
    value: ""
  },
  {
    name: "Play styles",
    type: "textarea",
    help: "What kind of play styles are available to the player?",
    placeholder: "",
    value: ""
  },
  {
    name: "Interactions",
    type: "textarea",
    help: "How does the player interact with the environment?",
    placeholder: "",
    value: ""
  },
  {
    name: "Challenges",
    type: "textarea",
    help: "What are the main challenges facing the player and how are we rewarding the player for successful behavior.",
    placeholder: "",
    value: ""
  },
  {
    name: "Multiplayer",
    type: "textarea",
    help: "Describe the multiplayer aspect of gamplay both from the adversarial/competitive aspect and from the co-operative aspect",
    placeholder: "",
    value: ""
  }
];

var mechanicsForm = [
  {
    name: "Mechanics",
    type: "textarea",
    help: "What kind of mechanics are to be employed in the game?  Go over movement, combat, health, equipment usage, special abilities and anything else that governs how the player plays the game.",
    placeholder: "",
    value: ""
  }
];

var controlsForm = [
  {
    name: "Controls",
    type: "textarea",
    help: "Describe how the player controls his character, fires his weapon, etc etc.",
    placeholder: "",
    value: ""
  }
];

var modesForm = [
  {
    name: "Modes",
    type: "textarea",
    help: "What modes are available to the player, if any?",
    placeholder: "",
    value: ""
  }
];

var winningTheMatchForm = [
  {
    name: "Winning the match",
    type: "textarea",
    help: "Describe the conditions for winning the game. How long do matches/games last?  What determines when the game is over?",
    placeholder: "",
    value: ""
  }
];

var scoreForm = [
  {
    name: "Score",
    type: "textarea",
    help: "After the match is over, how is the score calculated and how are",
    placeholder: "",
    value: ""
  }
];

var currencyForm = [
  {
    name: "Currency",
    type: "textarea",
    help: "How much money do the players earn per match or per action? Are there modifiers applied to this amount for specific actions?",
    placeholder: "",
    value: ""
  }
];

var challengesOfImportanceForm = [
  {
    name: "Challenges of importance",
    type: "textarea",
    help: "Are there certain challenges, events or levels within the game that are more important and challenging than others.  Challenges that represent large progress jumps and can unlock new items, abilities or areas",
    placeholder: "",
    value: ""
  }
];

var missionsForm = [
  {
    name: "Missions",
    type: "textarea",
    help: "Is there a mission or achievement system? How does it work?  What is the purpose of this system? Go over all achievements and rewards",
    placeholder: "",
    value: ""
  }
];

var achievementsForm = [
  {
    name: "Achievements",
    type: "textarea",
    help: "Is there a mission or achievement system? How does it work?  What is the purpose of this system? Go over all achievements and rewards",
    placeholder: "",
    value: ""
  }
];

var assetsForm = [
  {
    name: "2D",
    type: "textarea",
    help: "Style and Requirements for model sheets, environmental illustrations, and promo pieces.",
    placeholder: "",
    value: ""
  },
  {
    name: "3D",
    type: "textarea",
    help: "Tri budgets for Chars, props and weapons",
    placeholder: "",
    value: ""
  },
  {
    name: "Textures",
    type: "textarea",
    help: "Dimensions, maps needed and file formats",
    placeholder: "",
    value: ""
  },
  {
    name: "Naming conventions",
    type: "textarea",
    help: "",
    placeholder: "",
    value: ""
  },
  {
    name: "Animation requirements",
    type: "textarea",
    help: "Rigging limits, Programs to be used for rigging and animation",
    placeholder: "",
    value: ""
  },
];

var charactersForm = [
  {
    name: "Characters",
    type: "textarea",
    help: "A run down of all of the 2D, 3D, Animation and Audio work needed for the characters of the game.  Including back story, abilities and special traits",
    placeholder: "",
    value: ""
  }
];

var weaponsForm = [
  {
    name: "Weapons",
    type: "textarea",
    help: "A run down of all of the 2D, 3D, VFX and Audio work needed for the weapons of the game",
    placeholder: "",
    value: ""
  }
];

var equipmentAndUpgradesForm = [
  {
    name: "Equipment and Upgrades",
    type: "textarea",
    help: "A run down of all of the 2D, 3D and Audio work needed for the equipment of the game",
    placeholder: "",
    value: ""
  }
];

var environmentalForm = [
  {
    name: "Environmental",
    type: "textarea",
    help: "All global environmental assets(which could be reskinned depending on the level they appear in) to be laid out here as well as their role in the puzzle process and their possible effect on the scene and environment around them.",
    placeholder: "",
    value: ""
  }
];

var audioForm = [
  {
    name: "Audio",
    type: "textarea",
    help: "All global audio assets like UI sounds and audio tracks",
    placeholder: "",
    value: ""
  }
];

var backStoryForm = [
  {
    name: "Back Story",
    type: "textarea",
    help: "Describe the backstory of the game",
    placeholder: "",
    value: ""
  }
];

var cinematicsForm = [
  {
    name: "Cinematics",
    type: "textarea",
    help: "Any cinematics should be listed and described here. Further detail to be found in a beat sheet",
    placeholder: "",
    value: ""
  }
];

var globalFormJson = {
  "project-form" : projectFormJson,

  "overview-form" : overviewFormJson,
    "target-platform-form" : targetPlatformForm,
    "visual-style-form" : visualStyleForm,
    "audio-style-form" : audioStyleForm,

  "starting-out-form" : startingOutForm,
    "game-start-form" : gameStartForm,
    "main-menu-form" : mainMenuForm,
    "character-selection-form" : characterSelectionForm,
    "character-creation-form" : characterCreationForm,
    "game-start-and-intro-form" : gameStartAndIntroForm,
    "in-game-hud-and-menus-form" : inGameHudAndMenusForm,

  "multiplayer-form" : multiplayerForm,

  "ui-form" : uiForm,
    "ui-main-menu-form" : uiMainMenuForm,
    "player-customization-form" : playerCustomizationForm,
    "game-setup-screen-form" : gameSetupScreenForm,
    "in-game-options-menu-form" : inGameOptionsMenuForm,
    "in-game-hud-form" : inGameHudForm,
    "game-over-screen-form" : gameOverScreenForm,
    "level-selection-form" : levelSelectionForm,
      "level-types-form" : levelTypesForm,
      "full-level-list-form" : fullLevelListForm,

  "gameplay-form" : gameplayForm,
    "mechanics-form" : mechanicsForm,
    "controls-form" : controlsForm,
    "modes-form" : modesForm,
    "winning-the-match-form" : winningTheMatchForm,
      "score-form" : scoreForm,
      "currency-form" : currencyForm,
    "challenges-of-importance-form" : challengesOfImportanceForm,
    "missions-form" : missionsForm,
    "achievements-form" : achievementsForm,

  "assets-form" : assetsForm,
    "characters-form" : charactersForm,
    "weapons-form" : weaponsForm,
    "equipment-and-upgrades-form" : equipmentAndUpgradesForm,
    "environmental-form" : environmentalForm,
    "audio-form" : audioForm,

  "back-story-form" : backStoryForm,
    "cinematics-form" : cinematicsForm,
};

var summaryMarkdown = {
  "project-form" : {
    level: 1,
    title: "Project"
  },

  "overview-form" : {
    level: 1,
    title: "Overview"
  },
    "target-platform-form" : {
      level: 2,
      title: "Target Platform"
    },
    "visual-style-form" : {
      level: 2,
      title: "Visual Style"
    },
    "audio-style-form" : {
      level: 2,
      title: "Audio Style"
    },

  "starting-out-form" : {
    level: 1,
    title: "Starting Out"
  },
    "game-start-form" : {
      level: 2,
      title: "Game Start"
    },
    "main-menu-form" : {
      level: 2,
      title: "Main Menu"
    },
    "character-selection-form" : {
      level: 2,
      title: "Character Selection"
    },
    "character-creation-form" : {
      level: 2,
      title: "Character Creation"
    },
    "game-start-and-intro-form" : {
      level: 2,
      title: "Game Start & Intro"
    },
    "in-game-hud-and-menus-form" : {
      level: 2,
      title: "In-Game HUD & Menus"
    },

  "multiplayer-form" : {
    level: 1,
    title: "Multiplayer"
  },

  "ui-form" : {
    level: 1,
    title: "UI"
  },
    "ui-main-menu-form" : {
      level: 2,
      title: "Main Menu"
    },
    "player-customization-form" : {
      level: 2,
      title: "Player Customization"
    },
    "game-setup-screen-form" : {
      level: 2,
      title: "Game setup Screen"
    },
    "in-game-options-menu-form" : {
      level: 2,
      title: "In-Game Options Menu"
    },
    "in-game-hud-form" : {
      level: 2,
      title: "In-Game HUD"
    },
    "game-over-screen-form" : {
      level: 2,
      title: "Game Over Screen"
    },
    "level-selection-form" : {
      level: 2,
      title: "Level Selection"
    },
      "level-types-form" : {
        level: 3,
        title: "Level Types"
      },
      "full-level-list-form" : {
        level: 3,
        title: "Full Level List"
      },

  "gameplay-form" : {
    level: 1,
    title: "Gameplay"
  },
    "mechanics-form" : {
      level: 2,
      title: "Mechanics"
    },
    "controls-form" : {
      level: 2,
      title: "Controls"
    },
    "modes-form" : {
      level: 2,
      title: "Modes"
    },
    "winning-the-match-form" : {
      level: 2,
      title: "Winning the match"
    },
      "score-form" : {
        level: 3,
        title: "Score"
      },
      "currency-form" : {
        level: 3,
        title: "Currency"
      },
    "challenges-of-importance-form" : {
      level: 2,
      title: "Challenges of importance"
    },
    "missions-form" : {
      level: 2,
      title: "Missions"
    },
    "achievements-form" : {
      level: 2,
      title: "Achievements"
    },

  "assets-form" : {
    level: 1,
    title: "Assets"
  },
    "characters-form" : {
      level: 2,
      title: "Characters"
    },
    "weapons-form" : {
      level: 2,
      title: "Weapons"
    },
    "equipment-and-upgrades-form" : {
      level: 2,
      title: "Equipment and Upgrades"
    },
    "environmental-form" : {
      level: 2,
      title: "Environmental"
    },
    "audio-form" : {
      level: 2,
      title: "Audio"
    },

  "back-story-form" : {
    level: 1,
    title: "Back Story"
  },
    "cinematics-form" : {
      level: 2,
      title: "Cinematics"
    }
};

var sidebarSummary = [
  {
    title: "Project",
    form: "project-form",
    active: true
  },
  {
    title: "Overview",
    form: "overview-form",
    childs: [
      {
        title: "Target Platform",
        form: "target-platform-form"
      },
      {
        title: "Visual Style",
        form: "visual-style-form"
      },
      {
        title: "Audio Style",
        form: "audio-style-form"
      }
    ]
  },
  {
    title: "Starting Out",
    form: "starting-out-form",
    childs: [
      {
        title: "Game Start",
        form: "game-start-form"
      },
      {
        title: "Main Menu",
        form: "main-menu-form"
      },
      {
        title: "Character Selection",
        form: "character-selection-form"
      },
      {
        title: "Character Creation",
        form: "character-creation-form"
      },
      {
        title: "Game Start & Intro",
        form: "game-start-and-intro-form"
      },
      {
        title: "In-Game HUD & Menus",
        form: "in-game-hud-and-menus-form"
      }
    ]
  },
  {
    title: "Multiplayer",
    form: "multiplayer-form"
  },
  {
    title: "UI",
    form: "ui-form",
    childs: [
      {
        title: "Main Menu UI",
        form: "ui-main-menu-form"
      },
      {
        title: "Player Customization",
        form: "player-customization-form"
      },
      {
        title: "Game setup Screen",
        form: "game-setup-screen-form"
      },
      {
        title: "In-Game Options Menu",
        form: "in-game-options-menu-form"
      },
      {
        title: "In-Game HUD",
        form: "in-game-hud-form"
      },
      {
        title: "Game Over Screen",
        form: "game-over-screen-form"
      },
      {
        title: "Level Selection",
        form: "level-selection-form",
        childs: [
          {
            title: "Level Types",
            form: "level-types-form"
          },
          {
            title: "Full Level List",
            form: "full-level-list-form"
          }
        ]
      }
    ]
  },
  {
    title: "Gameplay",
    form: "gameplay-form",
    childs: [
      {
        title: "Mechanics",
        form: "mechanics-form"
      },
      {
        title: "Controls",
        form: "controls-form"
      },
      {
        title: "Modes",
        form: "modes-form"
      },
      {
        title: "Winning the match",
        form: "winning-the-match-form",
        childs: [
          {
            title: "Score",
            form: "score-form"
          },
          {
            title: "Currency",
            form: "currency-form"
          }
        ]
      },
      {
        title: "Challenges of importance",
        form: "challenges-of-importance-form"
      },
      {
        title: "Missions",
        form: "missions-form"
      },
      {
        title: "Achievements",
        form: "achievements-form"
      }
    ]
  },
  {
    title: "Assets",
    form: "assets-form",
    childs: [
      {
        title: "Characters",
        form: "characters-form"
      },
      {
        title: "Weapons",
        form: "weapons-form"
      },
      {
        title: "Equipment and Upgrades",
        form: "equipment-and-upgrades-form"
      },
      {
        title: "Environmental",
        form: "environmental-form"
      },
      {
        title: "Audio",
        form: "audio-form"
      }
    ]
  },
  {
    title: "Back Story",
    form: "back-story-form",
    childs: [
      {
        title: "Cinematics",
        form: "cinematics-form"
      }
    ]
  }
];
var sm = new SummaryGenerator('summary-sidebar', 'main-forms');
sm.generate(sidebarSummary);

var globalForm = new MetaBootstrapFormGenerator(globalFormJson);

(function($){

  function cleanLinkForMarkdown(string) {
    string = string.toLowerCase();
    string = string.split(' ').join('-');
    return string;
  }

  $('.nav-sidebar a').click(function(event){
    event.preventDefault();

    var divToShow = $(this).attr('data-id-part');
    if(divToShow === undefined) {
      return;
    }

    $('.main>div').hide();
    $('.nav-sidebar li').removeClass('active');
    $('#'+divToShow).show();
    $(this).parent().addClass('active');
  });

  $('#export-json-btn').click(function(){
    $('#export-json-text').val(globalForm.export(true));
  });

  $('#import-json-btn').click(function(){
    var jsonString = $('#import-json-text').val();
    if(jsonString.length > 0) {
      try {
        var json = JSON.parse(jsonString);
        globalForm.import(json);
      } catch (e) {
        alert("JSON incorrect");
      }
    }
  });

  $('#export-markdown-btn').click(function(){
    var mdg = new MarkdownGenerator();
    var json = globalForm.export();
    var key = md = summary = '';
    var num = 1;

    summary = mdg.title('Summary');
    for (var i = 0, max = json.length; i < max; i++) {
      key = Object.keys(json[i]);

      summary = summary + mdg.listOrder(
                            mdg.link(summaryMarkdown[key].title, '#' + cleanLinkForMarkdown(summaryMarkdown[key].title)),
                            summaryMarkdown[key].level,
                            num + '. '
                          );
      num++;

      md = md + mdg.title(summaryMarkdown[key].title, summaryMarkdown[key].level, cleanLinkForMarkdown(summaryMarkdown[key].title));
      for(var j = 0, maxJ = json[i][key].length; j < maxJ; j++) {
        md = md + mdg.text(json[i][key][j].name);
        md = md + mdg.text(json[i][key][j].value);
      }
    }

    md = summary + '  \n' + md;

    $('#export-markdown-text').val(md);
  });

  function restoreFormValues() {
    oldjson = localStorage.getItem('gddcreator');
    if(oldjson !== null) {
      globalForm.import(JSON.parse(oldjson));
    }
  }

  function saveFormValue() {
    localStorage.setItem('gddcreator', globalForm.export(true));
  }

  restoreFormValues();

  $('input,textarea').keyup(function(e){
    saveFormValue();
  });

  $('#btn-delete-localstorage').click(function(e){
    e.preventDefault();
    if(confirm('Are you sure you want to delete local storage?')) {
      localStorage.removeItem('gddcreator');
    }
    return false;
  })

})(jQuery);
