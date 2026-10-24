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
    url: "https://docs.google.com/spreadsheets/d/1nhnJGLytlwe9TT8qyz1946F4ByGLB6Y1RyrpssMGzpI/edit?gid=0#gid=0"
  },
  {
    title: "Password",
    icon: "🔐",
    description: "Restricted - authorised IT staff only",
    url: "https://docs.google.com/spreadsheets/d/1gLjpMN21LRgttcsMHIe_7wcFsHJi6Sl6WLiHgSQ0IFc/edit?gid=0#gid=0"
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
            title: "CACV IT Network Plan",
            icon: "🗺️",
            url: "https://drive.google.com/file/d/1D0pdkwRglf7BSb0GXjODOSNXN0kXwVP2/view?usp=drive_link"
          },
          {
            title: "Wireless Bridge Installation Guide",
            icon: "📄",
            url: "https://docs.google.com/document/d/1LuW8umBJoy9ZtVPhop5ZvIiVG82jC6D2/edit?usp=drive_link&ouid=114523866939779335289&rtpof=true&sd=true"
          }
        ]
      }
    ]
  },
  {
    title: "Projects",
    icon: "🚀",
    description: "IT systems & ongoing developments",
    children: [
      {
        title: "Room Booking System",
        icon: "📅",
        children: [
          {
            title: "Requirements & Git Repo",
            icon: "💻",
            url: "https://github.com/RockyCCLee/cacv-booking_system"
          },
          {
            title: "Demo",
            icon: "🔗",
            url: "https://cacv-bookingsystem-testing.up.railway.app/app.html"
          }
        ]
      },
      {
        title: "CACV Website Modernization",
        icon: "🌐",
        children: [
          {
            title: "Requirements & Git Repo",
            icon: "💻",
            url: "https://github.com/RockyCCLee/cacv-webpage"
          },
          {
            title: "Demo",
            icon: "🔗",
            url: "https://cacv-webpage.vercel.app/en"
          }
        ]
      },
      {
        title: "Repair Reporting System (Not started)",
        icon: "🛠️",
        url: "#"
      }
    ]
  }
];
