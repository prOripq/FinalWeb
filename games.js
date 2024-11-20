const gameData = {
    lol: {
      title: "League of Legends",
      trailer: "https://www.youtube.com/embed/aR-KAldshAE",
      description: "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
      buy: "Install League of Legends na.exe"
    },
    mk: {
      title: "Mortal Kombat 1",
      trailer: "https://www.youtube.com/embed/UZ6eFEjFfJ0",
      description: "Mortal Kombat 1 introduces stunning graphics and a brutal new fighting style in its latest release.",
      buy: "https://store.steampowered.com/app/1971870/Mortal_Kombat_1/"
    },
    csgo: {
      title: "Counter-Strike: Global Offensive",
      trailer: "https://www.youtube.com/embed/edYCtaNueQY",
      description: "CS:GO expands upon the team-based action gameplay it pioneered when it was launched 19 years ago.",
      buy: "https://store.steampowered.com/app/730/CounterStrike_2/"
    },
    AS: {
        title: "Assassins's Creed: Unity",
        trailer: "https://www.youtube.com/embed/xzCEdSKMkdU",
        description: "Assassin's Creed Unity is a 2014 action-adventure game developed by Ubisoft Montreal and published by Ubisoft. It was released in November 2014 for PlayStation 4, Windows, and Xbox One, and in December 2020 for Stadia.[1] It is the eighth major installment in the Assassin's Creed series, and the successor to 2013's Assassin's Creed IV: Black Flag. It also has ties to Assassin's Creed Rogue, which was released for the previous generation consoles on the same day as Unity.",
        buy: "https://store.steampowered.com/app/289650/Assassins_Creed_Unity/"
      },
      COD: {
        title: "Call of Duty: Modern Warfare 2",
        trailer: "https://www.youtube.com/embed/blshENwbHgs",
        description: "Call of Duty: Modern Warfare 2 is a 2009 first-person shooter game developed by Infinity Ward and published by Activision. It is the sixth installment in the Call of Duty series and the direct sequel to Call of Duty 4: Modern Warfare. It was released worldwide on November 10, 2009, for Windows, PlayStation 3, and Xbox 360. A separate version for the Nintendo DS, titled Modern Warfare: Mobilized, was also released on the same day. A version for OS X was developed by Aspyr and released in May 2014, and the Xbox 360 version was made backward compatible for the Xbox One in 2018.",
        buy: "https://store.steampowered.com/app/10180/Call_of_Duty_Modern_Warfare_2_2009/"
      },
      Buck: {
        title: "Buckshot Roulette",
        trailer: "https://www.youtube.com/embed/JEGxnpGqEaE",
        description: "Buckshot Roulette is a 2023 indie tabletop horror video game developed and published by Estonian game developer Mike Klubnika It was released on Steam by Critical Reflex on 4 April 2024 to coincide with a new update. The game has been likened to the 2021 roguelike video game Inscryption, featuring gritty and industrial visuals as opposed to Inscryption's more rustic and mythical style. Klubnika developed the game in the Godot game engine, and also composed the game's soundtrack.",
        buy: "https://store.steampowered.com/app/2835570/Buckshot_Roulette/"
      },
      GM: {
        title: "Garry's Mod",
        trailer: "https://www.youtube.com/embed/kgXVLw6qpFM",
        description: "Garry's Mod is a 2006 sandbox game developed by Facepunch Studios and published by Valve. The base game mode of Garry's Mod has no set objectives and provides the player with a world in which to freely manipulate objects. Other game modes, notably Trouble in Terrorist Town and Prop Hunt, are created by other developers as mods and are installed separately, by means such as the Steam Workshop. Garry's Mod was created by Garry Newman as a mod for Valve's Source game engine and released in December 2004, before being expanded into a standalone release that was published by Valve in November 2006. Ports of the original Windows version for Mac OS X and Linux followed in September 2010 and June 2013, respectively. As of September 2021, Garry's Mod has sold more than 20 million copies. A successor, Sandbox, has been in development since 2015.",
        buy: "https://store.steampowered.com/app/4000/Garrys_Mod/"
      },
      Hades: {
        title: "Hades II",
        trailer: "https://www.youtube.com/embed/WzJ_UhPptBQ",
        description: "Hades II is an upcoming roguelike action role-playing game video game developed and published by Supergiant Games, serving as a sequel to Hades (2020). It was announced in December 2022 and was released in early access in May 2024 for Windows and in October 2024 for macOS, with plans to bring the game to consoles after the early access period. The game follows Melinoë, Princess of the Underworld and sister to Zagreus, the protagonist of the first game. Melinoë aims to defeat Chronos, the Titan of Time, with the aid of other Olympian Gods.",
        buy: "https://store.steampowered.com/app/1145350/Hades_II/"
      },
      Inj: {
        title: "Injustice 2",
        trailer: "https://www.youtube.com/embed/oDav-JfidL0",
        description: "Injustice 2 is a 2017 fighting video game. It is the sequel to 2013's Injustice: Gods Among Us and the second installment in the Injustice series which is based on the DC Universe. It is developed by NetherRealm Studios and published by Warner Bros.",
        buy: "https://store.steampowered.com/app/627270/Injustice_2/"
      },
      Ins: {
        title: "Inscryption",
        trailer: "https://www.youtube.com/embed/RN5GSIWIN1k",
        description: "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...",
        buy: "https://store.steampowered.com/app/1092790/Inscryption/"
      },
      L4D2: {
        title: "Left 4 Dead 2",
        trailer: "https://www.youtube.com/embed/Iqid90JR6BY",
        description: "Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans",
        buy: "https://store.steampowered.com/app/550/Left_4_Dead_2/"
      },
      Over: {
        title: "Overwatch 2",
        trailer: "https://www.youtube.com/embed/FqnKB22pOC0",
        description: "Overwatch 2 is a critically acclaimed, team-based shooter game set in an optimistic future with an evolving roster of heroes. Team up with friends and jump in today.",
        buy: "https://store.steampowered.com/app/2357570/Overwatch_2/"
      },
  };
  
  function showGameDetails(gameKey) {
    const modal = document.getElementById("gameModal");
    const gameDetails = document.getElementById("gameDetails");
    const game = gameData[gameKey];
  
    gameDetails.innerHTML = `
      <h2>${game.title}</h2>
      <iframe src="${game.trailer}" allowfullscreen></iframe>
      <p>${game.description}</p>
      <a class="button-27" href="${game.buy}" download>Download</a>
    `;
    modal.style.display = "flex";
  }
  
  function closeModal() {
    const modal = document.getElementById("gameModal");
    modal.style.display = "none";
  }
  