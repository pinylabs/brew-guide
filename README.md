# Brew Guide

> **Preview: the full template is being built by the Pinies.** This repository is a small working EmDash site: its home page is the accepted design, and the rest is EmDash's own `starter-cloudflare` template. The Pinies' real build lands here later.

Better coffee at home, one method at a time: a dark-led EmDash docs site with a guide per method.

## Start it

- **In Piny:** pick it in the Templates tab.
- **Outside Piny:** `npm create astro -- --template github:pinylabs/brew-guide`, then `pnpm install` and `pnpm dev`, and open `/_emdash/admin` to set up the site.

It needs Node 22 or later and pnpm. On Cloudflare it uses a D1 database (`DB`) and an R2 bucket (`MEDIA`), as EmDash's Cloudflare templates do.

## Photos and video

They are linked from their sources and never copied into this repository:

- Home: Pour-over card; the guide page: the picture: [Nadia Valko](https://unsplash.com/@nadiavalko) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/pouring-hot-water-over-coffee-grounds-in-a-pour-over-brewer-F0XGFD9Z1Uk), not copied.
- The guide page: inline: [Karl Fredrickson](https://unsplash.com/@kfred) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/person-filling-glass-container-TYIzeCiZ_60), not copied.
- Home: AeroPress card: [Monaz Hastam](https://unsplash.com/@monazme) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/a-person-pours-hot-water-into-an-aeropress-coffee-maker-tT_WIvHzH1Q), not copied.
- Home: French press card: [Hrushi Chavhan](https://unsplash.com/@hcphotos) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/a-french-press-coffee-maker-on-a-wooden-table-U8Kq-UbCkOY), not copied.
- Home: Moka pot card: [Aaron Simpson](https://unsplash.com/@theaaronsimpson) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/a-silver-moka-pot-brewing-coffee-on-a-stove-burner-xVvqC0pbvuM), not copied.
- Home: Espresso card: [charlesdeluvio](https://unsplash.com/@charlesdeluvio) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/a-woman-is-using-a-grinder-on-a-blue-mat-7QhTwU-hfYU), not copied.
- Home: Cold brew card: [Nadia Valko](https://unsplash.com/@nadiavalko) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/cold-brew-coffee-in-a-mason-jar-with-ice-WCmMU38zg1c), not copied.
- Home: Start here, beans and grind: [Alin Luna](https://unsplash.com/@alin_luna) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/brown-coffee-beans-in-white-ceramic-bowl-fHZYP7QR8NI), not copied.
- Home: the hero, looped beside the headline: [Bobby Brown](https://www.pexels.com/video/barista-crafting-fresh-espresso-shot-30353740/) on Pexels, [Pexels License](https://www.pexels.com/license/), linked from [its page](https://www.pexels.com/video/barista-crafting-fresh-espresso-shot-30353740/), not copied.

## Licence

MIT. Built on EmDash's `starter-cloudflare` template, MIT, Copyright 2026 Cloudflare Inc.; its notice is kept in [LICENSE](LICENSE). Made by the Pinies in [Piny](https://piny.studio/home/).
