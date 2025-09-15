import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "VVIPER",
  role: "GAME DEVELOPER",
  introduction: "Aspiring game developer with a passion for creating interactive experiences. I specialize in developing games using Unreal Engine and also have strong full-stack development experience.",
  description: "Hey, I'm Arnim! I didn’t always have clarity about what I wanted to do or how I would do it, but as they say, small events in life shape your future. Looking back, it’s been quite a journey—from developing an interest in HTML, CSS, and PHP, to exploring coding in general, and finally discovering what I truly enjoy: game development.\n\nAlong the way, I’ve learned several programming languages, including HTML, CSS, PHP, Java, Python, JavaScript, and a few more. I’ve also built various extensions, ranging from automation tools to job-handling utilities. In addition, I’ve created multiple Python scripts, such as a Discord music bot, a BMS alert system, an automated website monitoring tool, and more.\n\nWhen it comes to game development, I’ve worked on several projects, including a 3D runner, TPP/FPP mission-based games, top-down shooters, and more. You can find videos of these projects in the games section!",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/my_cv.pdf`,
  links: {
    github: "https://github.com/VVIPER-PRODUCTIONS",
    itchIO: "https://VVIPER-PRODUCTIONS.itch.io",
    linkedIn: "https://www.linkedin.com/in/arnim-singhania/",
  }
};

export const games: Game[] = [
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];