/**
 * CACV IT Portal - menu configuration
 * ------------------------------------
 * Edit this file to add, rename or remove items.
 *
 *  - An item with `url`      => a link button (opens in a new tab)
 *  - An item with `children` => an expandable folder (can be nested to any depth)
 *
 * Replace each "#" with the Google Docs / Sheets / Drive share URL.
 * Access control is handled by Google Drive sharing settings.
 */
window.PORTAL_LINKS = [
  {
    title: "Hardware Inventory",
    icon: "🖥️",
    description: "Church IT equipment register",
    url: "#"
  },
  {
    title: "Password",
    icon: "🔐",
    description: "Restricted - authorised IT staff only",
    url: "#"
  },
  {
    title: "Documentation",
    icon: "📚",
    description: "Guides & procedures",
    children: [
      {
        title: "Network",
        icon: "🌐",
        children: [
          {
            title: "Wireless Bridge Installation Guide",
            icon: "📄",
            url: "#"
          }
        ]
      }
    ]
  }
];
