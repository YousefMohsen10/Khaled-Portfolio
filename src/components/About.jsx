import Reveal from './Reveal';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

const PersonIcon = () => (
  <svg viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="22" r="10" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M10 50c0-11.046 8.954-20 20-20s20 8.954 20 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const skills = [
  'Event Photography', 'Cinematic Reels', 'Color Grading',
  'Wedding Coverage', 'Corporate Events', 'Social Media Content',
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-inner">

          <Reveal direction="left">
            <div className="about-image-frame">
              {/* Replace placeholder with <img src="..." alt="Khaled Mohsen" /> when ready */}
              <div className="about-image-placeholder">
                <div className="about-ph-icon"><PersonIcon /></div>
                <p>Your Portrait Here</p>
              </div>
              <div className="about-image-deco" />
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="section-eyebrow">The Person Behind the Lens</p>
            <h2 className="section-title">About <em>Khaled</em></h2>
            <div className="about-text">
              <p>
                I'm Khaled Mohsen — a visual storyteller based in Egypt, with a passion for capturing
                life's most significant moments. My journey began with a camera and an insatiable
                curiosity about how light shapes emotion.
              </p>
              <p>
                Over five years, I've built a practice rooted in authenticity: documenting weddings,
                corporate events, and cultural festivals with a cinematic eye. I believe every event
                carries a unique energy — my job is to find it, feel it, and preserve it forever.
              </p>
              <p>
                When I'm not behind the lens, I'm crafting reels that blend motion and music into short
                cinematic experiences — stories that stop the scroll.
              </p>
            </div>
            <div className="about-skills">
              {skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
            </div>
            <button className="btn btn--primary" onClick={() => scrollTo('contact')}>Work With Me</button>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
