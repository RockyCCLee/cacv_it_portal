# CACV IT Portal

A lightweight, static web portal that gives the CACV church IT team quick access to key Google Docs.

- Plain HTML / CSS / JavaScript, with no build step and no dependencies
- Hi-tech dark theme with expand/collapse menus
- **Access control is handled by Google Drive sharing**: this site only stores links

## Update links

Edit [`js/links.js`](js/links.js). Replace each `"#"` with the Google Doc share URL:

```js
{ title: "Hardware Inventory", icon: "🖥️", url: "https://docs.google.com/spreadsheets/d/XXXX/edit" }
```

- An item with `url` is a link button that opens in a new tab.
- An item with `children` is an expandable folder, and folders can be nested to any depth.
- Items still set to `"#"` show as **SOON** and can't be clicked.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

1. Go to repo **Settings → Pages**.
2. Under **Source**, choose `Deploy from a branch`, then pick `main` and `/ (root)`.
3. The site goes live at `https://rockycclee.github.io/cacv_it_portal/`.

> Note: the page itself is public. Documents are protected by their Google Drive sharing permissions.

## Structure

```
index.html          Page layout
css/style.css       Theme
js/links.js         Menu configuration (edit this)
js/app.js           Menu rendering & expand/collapse logic
assets/cma-logo.png The Christian and Missionary Alliance logo
```
