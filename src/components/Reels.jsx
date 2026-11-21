import { useRef, useState } from 'react';
import Reveal from './Reveal';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

// Map each reel number to its Cloudinary URL (or null to fall back to local file)
const cloudinaryUrls = {
  1:  'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269457/reel_1__compressed.mp4',
  2:  'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269328/reel_2__compressed.mp4',
  3:  'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269594/reel_3__compressed.mp4',
  4:  'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269527/reel_4__compressed.mp4',
  5:  'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269691/reel_5__compressed.mp4',
  6:  'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269721/reel_6__compressed.mp4',
  7:  'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269703/reel_7__compressed.mp4',
  8:  'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269829/reel_8__compressed.mp4',
  9:  'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269846/reel_9__compressed.mp4',
  10: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269873/reel_10__compressed.mp4',
  11: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269946/reel_11__compressed.mp4',
  12: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269960/reel_12__compressed.mp4',
  13: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795269907/reel_13__compressed.mp4',
  14: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270297/reel_14__compressed.mp4',
  15: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270288/reel_15__compressed.mp4',
  16: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270365/reel_16__compressed.mp4',
  17: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270278/reel_17__compressed.mp4',
  18: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270288/reel_18__compressed.mp4',
  19: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270383/reel_19__compressed.mp4',
  20: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270345/reel_20__compressed.mp4',
  21: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270653/reel_21__compressed.mp4',
  22: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270634/reel_22__compressed.mp4',
  23: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270486/reel_23__compressed.mp4',
  24: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270519/reel_24__compressed.mp4',
  25: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270611/reel_25__compressed.mp4',
  26: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270473/reel_26__compressed.mp4',
  27: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270560/reel_27__compressed.mp4',
  28: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270589/reel_28__compressed.mp4',
  29: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270665/reel_29__compressed.mp4',
  30: 'https://res.cloudinary.com/ekeg3vhw/video/upload/v1795270646/reel_30__compressed.mp4',
};

function getVideoSrc(num) {
  return cloudinaryUrls[num] ?? `/videos/reel (${num}).MOV`;
}

const reels = [
  { id: 'r1',  num: 1,  phClass: 'reel-ph-1',  delay: 0 },
  { id: 'r2',  num: 2,  phClass: 'reel-ph-2',  delay: 150 },
  { id: 'r3',  num: 3,  phClass: 'reel-ph-3',  delay: 300 },
  { id: 'r4',  num: 4,  phClass: 'reel-ph-4',  delay: 450 },
  { id: 'r5',  num: 5,  phClass: 'reel-ph-5',  delay: 600 },
  { id: 'r6',  num: 6,  phClass: 'reel-ph-6',  delay: 750 },
  { id: 'r7',  num: 7,  phClass: 'reel-ph-7',  delay: 900 },
  { id: 'r8',  num: 8,  phClass: 'reel-ph-8',  delay: 1050 },
  { id: 'r9',  num: 9,  phClass: 'reel-ph-9',  delay: 1200 },
  { id: 'r10', num: 10, phClass: 'reel-ph-10', delay: 1350 },
  { id: 'r11', num: 11, phClass: 'reel-ph-11', delay: 1500 },
  { id: 'r12', num: 12, phClass: 'reel-ph-12', delay: 1650 },
  { id: 'r13', num: 13, phClass: 'reel-ph-13', delay: 1800 },
  { id: 'r14', num: 14, phClass: 'reel-ph-14', delay: 1950 },
  { id: 'r15', num: 15, phClass: 'reel-ph-15', delay: 2100 },
  { id: 'r16', num: 16, phClass: 'reel-ph-16', delay: 2250 },
  { id: 'r17', num: 17, phClass: 'reel-ph-17', delay: 2400 },
  { id: 'r18', num: 18, phClass: 'reel-ph-18', delay: 2550 },
  { id: 'r19', num: 19, phClass: 'reel-ph-19', delay: 2700 },
  { id: 'r20', num: 20, phClass: 'reel-ph-20', delay: 2850 },
  { id: 'r21', num: 21, phClass: 'reel-ph-21', delay: 3000 },
  { id: 'r22', num: 22, phClass: 'reel-ph-22', delay: 3150 },
  { id: 'r23', num: 23, phClass: 'reel-ph-23', delay: 3300 },
  { id: 'r24', num: 24, phClass: 'reel-ph-24', delay: 3450 },
  { id: 'r25', num: 25, phClass: 'reel-ph-25', delay: 3600 },
  { id: 'r26', num: 26, phClass: 'reel-ph-26', delay: 3750 },
  { id: 'r27', num: 27, phClass: 'reel-ph-27', delay: 3900 },
  { id: 'r28', num: 28, phClass: 'reel-ph-28', delay: 4050 },
  { id: 'r29', num: 29, phClass: 'reel-ph-29', delay: 4200 },
  { id: 'r30', num: 30, phClass: 'reel-ph-30', delay: 4350 },
];

export default function Reels() {
  const videoRefs = useRef({});
  const [playingId, setPlayingId] = useState(null);

  const handleToggle = (id) => {
    const clicked = videoRefs.current[id];
    if (!clicked) return;

    // pause all other videos
    Object.entries(videoRefs.current).forEach(([vid, el]) => {
      if (vid !== id && el && !el.paused) {
        el.pause();
        el.currentTime = 0;
      }
    });

    if (clicked.paused) {
      clicked.muted = false;        // unmute on first user tap (gesture allows audio)
      clicked.play().catch(() => {
        // if play fails (e.g. strict browser policy), keep muted and retry
        clicked.muted = true;
        clicked.play().catch(() => {});
      });
      setPlayingId(id);
    } else {
      clicked.pause();
      setPlayingId(null);
    }
  };

  return (
    <section className="section reels-section" id="reels">
      <div className="container">

        <Reveal direction="up">
          <div className="section-header">
            <p className="section-eyebrow center">Motion Work</p>
            <h2 className="section-title">Cinematic <em>Reels</em></h2>
            <p className="section-desc">
              Vertical cinematic stories crafted for the scroll-first generation.<br />
              Every frame, intentional.
            </p>
          </div>
        </Reveal>

        <div className="reels-grid">
          {reels.map(({ id, num, phClass, tag, delay }) => (
            <Reveal key={id} direction="up" delay={delay} className="reel-item">
              <div className="reel-frame">
                <video
                  ref={(el) => { videoRefs.current[id] = el; }}
                  className={`reel-placeholder ${phClass}`}
                  src={getVideoSrc(num)}
                  playsInline
                  muted
                  loop
                  preload="metadata"
                />
                {/* overlay button for reliable mobile tap */}
                <button
                  className={`reel-play-btn${playingId === id ? ' reel-play-btn--playing' : ''}`}
                  aria-label={playingId === id ? 'Pause' : 'Play'}
                  onClick={() => handleToggle(id)}
                />
                <div className="reel-info">
                  <span className="reel-tag">{tag}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" className="section-cta">
          <button className="btn btn--outline" onClick={() => scrollTo('contact')}>Commission a Reel</button>
        </Reveal>

      </div>
    </section>
  );
}
