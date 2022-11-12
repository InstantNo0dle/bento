//
//    Bento-Next
//    Config file
//
//
//    https://github.com/migueravila/Bento - upstream
//
const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Erin",
  openInNewTab: true,
  title: "new tab",

  // Clock
  twelveHourFormat: true,
  flashSeparator: true,
  
  // Theme
  theme: "catppuccin-mocha",
  imageBackground: false,
  imageUrl: "background.jpg", // place in ./src/assets/images/ and provide the file name. Alternatively, provide a URL to an image. If the page is served over https, you may have issues loading images from insecure origins.
  themes: [   // List of installed themes, add your own themes in ./src/assets/css/themes and include it in the array below.
    "arc",
    "bento",
    "catppuccin-frappe",
    "catppuccin-macchiato",
    "catppuccin-mocha",
    "conceptdark", // dark mode only
    "monokai",
    "nord",
    "sakura",
    "solarized",
    "summer"
  ],

  // Search Bar
  searchBar: true,
  searchEngine: "google", // google, ddg
  barStyle: "rounded", // bento, minimal, boxy, rounded
  barPlaceholder: "", // if blank, use search engine name. Set to ' ' for no placeholder.
  autoFocusBar: true,

  // Greetings
  greetingMorning: "Good morning,",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Sweet dreams,",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "d1b2d64b5cc868744fa92afa286ee11b", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "F", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // Request location from the browser. If false, or location is denied, use the coordinates below.
  defaultLatitude: "37.775",
  defaultLongitude: "-122.419",

  // Autochange theme from OS preferece - The below options are all mutually exclusive. If you've got multiple set to true, the first one will be set and the rest ignored.
  changeThemeByOS: true,

  // Switch theme based on set hours. (24hr format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // Switch dark theme automatically from sunrise to sunset. Pulls from the browsers location, or falls back to the defaults if not.
  // Requires an OpenWeatherMap API key.
  changeThemeByLocation: false,

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1", // entry ID, don't modify.
      name: "Github", // set the name of the card
      icon: "fab-github", // provide a FontAwesome icon name. Regular icons (fa-) don't require a prefix, while FA-Brands icons must be prefixed with "fab-"
      link: "https://github.com/" // provide a link to the page.
    },
    {
      id: "2",
      name: "Mail",
      icon: "envelope",
      link: "https://mail.google.com/mail/u/2/#inbox"
    },
    {
      id: "3",
      name: "TickTick",
      icon: "list-ol",
      link: "https://ticktick.com/webapp/#q/all/tasks"
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/u/2/r?pli=1"
    },
    {
      id: "5",
      name: "Reddit",
      icon: "fab-reddit",
      link: "https://reddit.com"
    },
    {
      id: "6",
      name: "YouTube",
      icon: "fab-youtube",
      link: "https://youtube.com/"
    }
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "fab-spotify",
      link: "https://open.spotify.com"
    },
    {
      id: "2",
      name: "twitter",
      icon: "fab-twitter",
      link: "https://twitter.com/"
    },
    {
      id: "3",
      name: "bot",
      icon: "fab-discord",
      link: "https://discord.com/app"
    },
    {
      id: "4",
      name: "Amazon",
      icon: "fab-amazon",
      link: "https://amazon.com/"
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "fab-hashnode",
      link: "https://hashnode.com/"
    },
    {
      id: "6",
      name: "Slack",
      icon: "fab-slack",
      link: "https://slack.com/"
    }
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "headphones",
      id: "1",
      links: [
        {
          name: "kai notebook",
          link: "https://www.youtube.com/playlist?list=PLguGs_1IRon7v4z6aqHXKAEDm0TzWXF0E"
        },
        {
          name: "abao",
          link: "https://www.youtube.com/c/%E9%98%BF%E9%B2%8D"
        },
        {
          name: "kharma medic",
          link: "https://www.youtube.com/playlist?list=PLmWo-cY6xKJbFIhZZZ-dm599XwucdH6g"
        },
        {
          name: "zach highley",
          link: "https://www.youtube.com/playlist?list=PLAwi1RbowI0xGMvg_bhossbOhlBa7U430"
        }
      ]
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "classroom",
          link: "https://classroom.google.com/u/1/h"
        },
        {
          name: "msm portal",
          link: "https://my.msmnyc.edu/ICS"
        },
        {
          name: "trello",
          link: "https://www.trello.com"
        },
        {
          name: "slack",
          link: "https://www.slack.com"
        }
      ]
    }
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "house-user",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com"
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com"
        },
        {
          name: "Hashnode",
          link: "https://www.hashnode.com"
        },
        {
          name: "Pocket",
          link: "https://www.pocket.com"
        }
      ]
    },
    {
      icon: "fab-github",
      id: "2",
      links: [
        {
          name: "Front",
          link: "https://www.reddit.com/r/Frontend/"
        },
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/"
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/"
        },
        {
          name: "Repos",
          link: "https://github.com/migueravila"
        }
      ]
    }
  ]
};

export const config = CONFIG;
