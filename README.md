# 📸 Stills in Time — Yearwise Decoupled Content Guide

All travel stories, photo collections, and EXIF metadata are completely decoupled from code into clean **Markdown (`.md`) files** organized inside yearwise folders in:
👉 `src/content/series/[YEAR]/`

---

## 📁 Yearwise Directory Structure

Each series is organized into a sub-folder corresponding to its year:

```text
src/content/series/
├── 2024/
│   └── benapur-west-bengal.md
└── 2025/
    ├── koyna-dam-satara.md
    ├── bangriposhi.md
    └── west-sikkim.md
```

---

## 📝 How to Add a New Photo Series for Any Year

To add a new series to your portfolio:
1. Create a year folder if it doesn't exist (e.g. `src/content/series/2026/`).
2. Create a new `.md` file inside that year folder (e.g. `src/content/series/2026/meghalaya.md`).
3. Add metadata at the top between `---` markers, followed by your travel story text below.

### Example Markdown File (`src/content/series/2026/meghalaya.md`):

```markdown
---
id: 2026-meghalaya
title: Monsoon Whispers of Meghalaya
state: ml
type: travel
location: Meghalaya, India
dateRange: Monsoon 2026
coverUrl: https://your-image-host.com/cover.jpg
photos:
  - id: mg-photo-1
    url: https://your-image-host.com/waterfall.jpg
    title: Nohkalikai Falls in Heavy Mist
    description: Towering monsoon cascade shrouded in drifting clouds.
    storySnippet: Standing at the edge of the plateau watching rainwater plunge into emerald pools.
    location: Cherrapunji, Meghalaya
    date: Monsoon 2026
    tag: Monsoon & Rivers
    categoryTag: Monsoon & Rivers
    camera: Nikon Z Series
    lens: NIKKOR Z 24-70mm f/4 S
    shutter: 1/500s
    aperture: f/8.0
    iso: ISO 100
    focalLength: 35mm
---

Write your full travelogue story text here. 

You can write multiple paragraphs, use bold text, lists, and quotes. The website automatically renders this narrative in the story gallery view and highlights Meghalaya on the interactive map of India.
```

---

## 🗺️ 2-Letter State Codes for Map Highlights

Setting the `state` property in the frontmatter automatically highlights that state on the interactive map:

- **Maharashtra**: `state: mh`
- **West Bengal**: `state: wb`
- **Odisha**: `state: or`
- **Sikkim**: `state: sk`
- **Meghalaya**: `state: ml`
- **Himachal Pradesh**: `state: hp`
- **Uttarakhand**: `state: uk`
- **Rajasthan**: `state: rj`
- **Kerala**: `state: kl`
- **Karnataka**: `state: ka`
- **Ladakh**: `state: la`

---

## 🚀 Preview Changes

Run `npm run dev` in your terminal to launch the website locally and preview your new yearwise Markdown stories in real time.
