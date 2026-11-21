import Reveal from './Reveal';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const workItems = [
  {
    id:        'w1',
    modifier:  'work-item--large',
    phClass:   'work-ph-1',
    label:     '01 — EVENT',
    text:      'Your Featured Event Photo',
    category:  'Event Photography',
    title:     'The Grand Celebration',
    linkLabel: 'View Series →',
    linkId:    'events',
    delay:     0,
  },
  {
    id:        'w2',
    modifier:  'work-item--portrait',
    phClass:   'work-ph-2',
    label:     '02 — REEL',
    text:      'Reel Preview Frame',
    category:  'Cinematic Reel',
    title:     'Motion Stories',
    linkLabel: 'Watch Reel →',
    linkId:    'reels',
    delay:     100,
  },
  {
    id:        'w3',
    modifier:  'work-item--wide',
    phClass:   'work-ph-3',
    label:     '03 — EDITORIAL',
    text:      'Editorial Photography',
    category:  'Editorial',
    title:     'Light & Shadow',
    linkLabel: 'View Project →',
    linkId:    'events',
    delay:     200,
  },
  {
    id:        'w4',
    modifier:  'work-item--square',
    phClass:   'work-ph-4',
    label:     '04 — EVENT',
    text:      'Event Highlight',
    category:  'Event Photography',
    title:     'Night Atmosphere',
    linkLabel: 'View Series →',
    linkId:    'events',
    delay:     300,
  },
];

export default function Work() {
  return (
    <section className="section work-section" id="work">
      <div className="container">

        <Reveal direction="up">
          <div className="section-header">
            <p className="section-eyebrow center">Selected Projects</p>
            <h2 className="section-title">Featured <em>Work</em></h2>
            <p className="section-desc">
              A curated selection of cinematic stories,<br />
              captured in both motion and stillness.
            </p>
          </div>
        </Reveal>

        <div className="work-grid">
          {workItems.map(({ id, modifier, phClass, label, text, category, title, linkLabel, linkId, delay }) => (
            <Reveal key={id} direction="up" delay={delay} className={`work-item ${modifier}`} as="article">
              <div className="work-image-wrap">
                {/* Replace with <img src="..." alt="..." /> when ready */}
                <div className={`work-image-placeholder ${phClass}`}>
                  <div className="ph-label">{label}</div>
                  <p>{text}</p>
                </div>
                <div className="work-overlay">
                  <span className="work-category">{category}</span>
                  <h3 className="work-title">{title}</h3>
                  <button className="work-link" onClick={() => scrollTo(linkId)}>{linkLabel}</button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
