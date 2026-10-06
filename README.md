# alex6095.github.io

Source of my personal academic homepage: **<https://alex6095.github.io/>**

I'm Sangmin Lee (이상민), a Ph.D. student in the [SGVR Lab](https://sgvr.kaist.ac.kr/) at KAIST advised by
Prof. [Sung-Eui Yoon](https://sgvr.kaist.ac.kr/~sungeui/). I work on generative models (diffusion and flow
matching) and on distilling them into fast, reliable models.

The site is one static page of hand-written HTML and CSS. It has no framework, no Jekyll theme and no build
step, and GitHub Pages serves the files as they are.

## Structure

```text
.
├── index.html               # the whole homepage: about, news, publications, education, experience, awards
├── 404.html                 # "page not found"
├── assets/
│   ├── css/style.css        # all styles, with light/dark tokens at the top
│   ├── img/
│   │   ├── favicon.svg
│   │   ├── profile.jpg      # 400×400 portrait, shown as a circle
│   │   └── papers/          # publication thumbnails (WebP, about 960 px wide)
│   └── papers/              # self-hosted paper PDFs (for papers without an arXiv/proceedings link)
├── robots.txt
├── sitemap.xml
└── .nojekyll                # tells GitHub Pages to skip Jekyll processing
```

## Preview locally

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8000/>. Any static file server works.

## Updating content

All content is in `index.html`, and each section is marked by an HTML comment.

| To change | Do this |
| --- | --- |
| **Add a paper** | Copy one `<li class="pub">…</li>` block in the Publications section: international venues in the first list, domestic (Korean) venues under "Domestic (Korean) Papers". Put the newest paper first. Save its thumbnail as `assets/img/papers/<name>.webp`. Bold my name with `<b>Sangmin Lee</b>`. Leave out any `chip` link that doesn't exist yet. If the paper has no public link, put the PDF in `assets/papers/<name>-<venue><year>.pdf`. |
| **Add news** | Add an `<li>` at the top of the `<ul class="news">` list. Keep only the latest few items. |
| **Change the profile photo** | Replace `assets/img/profile.jpg` with a square image about 400 px wide. Strip its metadata first, because phone photos often carry GPS EXIF. |
| **Add a CV / Google Scholar link** | Add another `<a class="button" href="…">` to `hero-actions`. For a CV, upload `assets/cv.pdf` and link to it. |
| **Change position or bio** | Edit `hero-role` and `hero-bio`. Also update `<meta name="description">` in `<head>`. |
| **Change colors** | Edit the tokens at the top of `assets/css/style.css`. The `prefers-color-scheme: dark` block holds the dark-mode values. |

After any edit, update `<lastmod>` in `sitemap.xml`.

## Deployment

GitHub Pages publishes the root of the `main` branch. A push to `main` goes live in about a minute.

Other repositories with Pages enabled are served under this same domain. For example,
[`alex6095/mosdot`](https://github.com/alex6095/mosdot) is served at <https://alex6095.github.io/mosdot/>.
Don't create a top-level folder here with the name of such a repository, because the two paths would
conflict.

## Credits

- The layout was inspired by [Youngju Na's homepage](https://youngju-na.github.io/).
- Fonts are [Inter](https://rsms.me/inter/) and [Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR),
  served by Google Fonts under the SIL Open Font License.

## License

The site's source code (HTML, CSS and JavaScript) is under the [MIT License](LICENSE). The text, images and
paper figures are © Sangmin Lee and co-authors, and the MIT License does not cover them.
