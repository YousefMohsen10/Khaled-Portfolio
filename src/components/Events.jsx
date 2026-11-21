import Reveal from './Reveal';

const leftCol = [
  { ph: 'mosaic-ph-1', tag: 'Wedding',   caption: 'Al-Farah Ballroom, Cairo', delay: 0   },
  { ph: 'mosaic-ph-2', tag: 'Corporate', caption: 'Annual Gala Night',         delay: 200 },
];

const centerCol = [
  { ph: 'mosaic-ph-3', tag: 'Festival', caption: 'Cultural Festival 2024', delay: 100 },
  { ph: 'mosaic-ph-4', tag: 'Social',   caption: 'Rooftop Celebration',    delay: 300 },
];

const rightCol = [
  { ph: 'mosaic-ph-5', tag: 'Portrait', caption: 'Distinguished Guest Series', delay: 150 },
  { ph: 'mosaic-ph-6', tag: 'Formal',   caption: 'Black Tie Evening',           delay: 350 },
];

function MosaicItem({ ph, tag, caption, delay }) {
  return (
    <Reveal direction="up" delay={delay} className="mosaic-item">
      <div className={`mosaic-image-placeholder ${ph}`}>
        <div className="ph-tag">{tag}</div>
      </div>
      <div className="mosaic-caption"><span>{caption}</span></div>
    </Reveal>
  );
}

export default function Events() {
  return (
    <section className="section events-section" id="events">
      <div className="container">

        <div className="events-header">
          <Reveal direction="left">
            <div>
              <p className="section-eyebrow">Live Events</p>
              <h2 className="section-title">Event <em>Photography</em></h2>
            </div>
          </Reveal>
          <Reveal direction="right">
            <p className="events-lead">
              From intimate gatherings to grand productions — capturing the
              unrepeatable energy of human experience.
            </p>
          </Reveal>
        </div>

        <div className="events-mosaic">
          <div className="mosaic-col mosaic-col--left">
            {leftCol.map((item, i) => <MosaicItem key={i} {...item} />)}
          </div>
          <div className="mosaic-col mosaic-col--center">
            {centerCol.map((item, i) => <MosaicItem key={i} {...item} />)}
          </div>
          <div className="mosaic-col mosaic-col--right">
            {rightCol.map((item, i) => <MosaicItem key={i} {...item} />)}
          </div>
        </div>

      </div>
    </section>
  );
}
