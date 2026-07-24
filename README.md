# 📸 Stills in Time — Photography Portfolio Guide

Welcome to your photography portfolio website! This guide explains in simple, plain English how to add new photos, update collection stories, and preview your changes.

---

## 🚀 Quick Start (Running Locally)

To view the website on your computer:
1. Open your terminal in this folder.
2. Type `npm run dev` and press Enter.
3. Open your browser and go to `http://localhost:3000`.

---

## 📁 Which Files Do I Edit?

You only need to edit **two simple files** in the `src/data/` folder:

| Task | File to Edit |
| :--- | :--- |
| **Add photos to the Home Page (Best Shots)** | `src/data/bestPhotos.ts` |
| **Add travel stories & series (India Chronicles)** | `src/data/defaultCategories.ts` |

---

## 🖼️ Task 1: How to Add Photos to the Home Page (Best Shots)

Open `src/data/bestPhotos.ts` in your text editor (like VS Code or Notepad).

At the top of the list, add a new block like this:

```typescript
{
  id: 'my-photo-1', // Any unique name without spaces
  url: 'https://your-image-link.com/photo.jpg', // Direct link to your photo
  title: 'Morning Sun over Koyna Lake', // Title shown on hover & gallery
  location: 'Satara, Maharashtra', // Location
  date: 'Monsoon 2025', // Season/Date
  categoryTag: 'Monsoon & Rivers', // Choose: 'Monsoon & Rivers' | 'Himalayan Vistas' | 'Spring & Flora' | 'Rural & Heritage'
  exif: {
    camera: 'Nikon Z Series', // Camera model
    lens: '24-70mm f/4', // Lens model
    shutter: '1/320s', // Shutter speed
    aperture: 'f/8.0', // Aperture (f-stop)
    iso: 'ISO 100', // ISO
    focalLength: '35mm' // Focal length
  }
},
```

> 💡 **Tip:** The Home Page displays the **first 16 photos** in a clean 4x4 grid. When visitors click any photo, they can cycle through all photos in your collection.

---

## 🗺️ Task 2: How to Add a Travel Story to India Chronicles

Open `src/data/defaultCategories.ts` in your text editor.

To add a new travel story or destination collection, add a block like this inside `rawDefaultCategories`:

```typescript
{
  id: '2026-meghalaya-monsoon', // Unique ID (Year-Location)
  state: 'ml', // 2-letter state code (e.g. 'ml' for Meghalaya, 'wb' for West Bengal, 'mh' for Maharashtra)
  title: 'Monsoon in Meghalaya', // Story title
  type: 'travel', // 'travel' or 'milestone'
  coverUrl: 'https://your-image-link.com/cover.jpg', // Cover image URL
  location: 'Meghalaya, India', // Region
  dateRange: 'Monsoon 2026', // Date label
  description: `Write your travelogue story here. You can write multiple paragraphs describing your travel experience, the scenery, and special moments.`,
  photos: [
    {
      id: 'ml-photo-1',
      url: 'https://your-image-link.com/waterfall.jpg',
      title: 'Cherrapunji Falls in Full Flow',
      location: 'Cherrapunji, Meghalaya',
      date: 'Monsoon 2026',
      aspectRatio: 'landscape',
      tag: 'Waterfalls'
    }
  ]
},
```

---

## 🌐 2-Letter Indian State Codes (for Interactive Map)

When adding a story in `defaultCategories.ts`, setting the `state` code will automatically highlight that state on the **Interactive Map of India**:

- **West Bengal**: `'wb'`
- **Maharashtra**: `'mh'`
- **Odisha**: `'or'`
- **Sikkim**: `'sk'`
- **Meghalaya**: `'ml'`
- **Himachal Pradesh**: `'hp'`
- **Uttarakhand**: `'uk'`
- **Rajasthan**: `'rj'`
- **Kerala**: `'kl'`
- **Karnataka**: `'ka'`
- **Ladakh**: `'la'`
- **Jammu & Kashmir**: `'jk'`

---

## ☁️ Where Should I Upload My Photos?

You can host your high-resolution photos on:
1. **Cloudinary** (Recommended — fast, optimized image delivery)
2. **Imgur / Flickr / Unsplash** or any image host that gives you a direct link ending in `.jpg` or `.png`.

---

## 🤝 Need Help?

If anything looks out of place, simply run `npm run dev` in your terminal to preview your edits in real-time!
