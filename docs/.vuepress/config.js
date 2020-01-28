module.exports = {
  themeConfig: {
    nav: [
      {
        text: "External",
        link: "https://google.com",
        target: "_self",
        rel: ""
      },
      { text: "Guide", link: "/guide/", target: "_blank" }
    ],
    sidebar: [
      {
        title: "Group 1", // required
        path: "/foo/", // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/"]
      }
    ]
  }
};
