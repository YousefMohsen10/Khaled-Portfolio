# Khaled Mohsen — Portfolio

This folder contains the **images** and **videos** for the portfolio.

## Recommended Structure

```
images/
├── hero/
│   └── hero-portrait.jpg          ← Hero section cinematic portrait (4:5 ratio recommended)
│
├── work/
│   ├── featured-event.jpg         ← Work grid item 01 (large, 4:5)
│   ├── featured-reel.jpg          ← Work grid item 02 (portrait, 4:5)
│   ├── editorial.jpg              ← Work grid item 03 (wide, 16:7)
│   └── night-event.jpg            ← Work grid item 04 (square)
│
├── events/
│   ├── wedding-cairo.jpg          ← Mosaic left-col tall (3:4)
│   ├── gala-night.jpg             ← Mosaic left-col short (4:3)
│   ├── festival-2024.jpg          ← Mosaic center wide (4:3)
│   ├── rooftop.jpg                ← Mosaic center wide (4:3)
│   ├── guest-portrait.jpg         ← Mosaic right-col short (4:3)
│   └── black-tie.jpg              ← Mosaic right-col tall (3:4)
│
├── about/
│   └── about-portrait.jpg         ← About section portrait (3:4 ratio)
│
└── reels/
    ├── reel-01-cover.jpg          ← Reel thumbnail covers (9:16 ratio)
    ├── reel-02-cover.jpg
    ├── reel-03-cover.jpg
    └── reel-04-cover.jpg
```

## How to Add Images

### Hero Photo
In `index.html`, find the `.hero-image-frame` div and replace the placeholder with:
```html
<img src="images/hero/hero-portrait.jpg" alt="Khaled Mohsen — Cinematic Portrait" />
```

### Work Grid Items
Replace each `.work-image-placeholder` div with:
```html
<img src="images/work/featured-event.jpg" alt="Description" />
```

### Reel Videos
Replace each `.reel-placeholder` div with:
```html
<video src="videos/reel-01.mp4" loop muted playsinline poster="images/reels/reel-01-cover.jpg"></video>
<div class="reel-play-icon">...</div>
```

## Recommended Specs

| Use Case     | Format | Min Width | Ratio  |
|-------------|--------|-----------|--------|
| Hero        | JPG    | 1080px    | 4:5    |
| Work Grid   | JPG    | 900px     | varies |
| Event Mosaic| JPG    | 800px     | varies |
| About       | JPG    | 700px     | 3:4    |
| Reel Cover  | JPG    | 540px     | 9:16   |
| Reel Video  | MP4    | 1080px    | 9:16   |

Optimize all images with [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com) before uploading.
