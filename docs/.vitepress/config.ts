import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sirinaria",
  description: "Sirinaria campaign setting.",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "https://bobonthenet.com" }
    ],

    sidebar: [
      {
        text: "History",
        link: "/history/",
        collapsed: true,
        items: [
          { text: "Arito Greegate and the Fall of the Torang Dynasty", link: "/history/torangsandgreegate"}
        ]
      },
      {
        text: "The Pantheon of Sirinaria",
        link: "/pantheon/",
        collapsed: true,
        items: [
          { text: "Annato", link: "/pantheon/annato"},
          { text: "Follya", link: "/pantheon/follya"},
          { text: "Keeyar and Noeyar", link: "/pantheon/keeyarandnoeyar" },
          { text: "Mutar", link: "/pantheon/mutar"},
          { text: "Thunir", link: "/pantheon/thunir" }
          
        ],
      },
      {
        text: "Lineages of Sirinaria",
        link: "/lineages/",
        collapsed: true,
        items: [
          {text: "Dragonborn", link: "/lineages/dragonborn"},
          { text: "Dwarves", link: "/lineages/dwarves" },
          { text: "Elves", link: "/lineages/elves" },
          { text: "Gnomes", link: "/lineages/gnomes"},
          { text: "Humans", link: "/lineages/humans"}
        ]
      },
      {
        text: "Gazetteer of Sirinaria",
        link: "/gazetteer/",
        collapsed: true,
        items: [
          { text: "Dwar'Cathr", link: "/gazetteer/dwarcathr"},
          { text: "Fellnari Forest", link: "/gazetteer/fellnariforest" },
          { text: "Greegate", link: "/gazetteer/greegate"},
          { text: "Hastdurn", link: "/gazetteer/hastdurn"},
          { text: "Hawksmont", link: "/gazetteer/hawksmont"},
          { text: "Llyndairwen", link: "/gazetteer/llyndairwen"}
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/bobonthenet/Sirinaria" },
      { icon: "discord", link: "https://discord.gg/pRtR54YwjW"}
    ]
  }
})
