import { useEffect, useState } from 'react';
import Reveal from './Reveal';

/* ─── Projects Data ─────────────────────────────────────── */
const projects = [
  {
    id: 'deloitte',
    title: 'Deloitte',
    tag: 'Corporate Event',
    images: [
      '/events/deloitte/2026_10_21_00_22_IMG_7396.JPEG',
      '/events/deloitte/2026_10_21_00_22_IMG_7397.JPEG',
      '/events/deloitte/2026_10_21_00_22_IMG_7403.JPEG',
      '/events/deloitte/2026_10_21_00_37_IMG_7400.JPEG',
      '/events/deloitte/2026_10_21_00_38_IMG_7404.JPEG',
      '/events/deloitte/2026_10_21_00_38_IMG_7412.JPEG',
      '/events/deloitte/2026_10_21_00_42_IMG_7406.JPEG',
      '/events/deloitte/2026_10_21_00_47_IMG_7407.JPEG',
      '/events/deloitte/2026_10_21_00_48_IMG_7414.JPEG',
      '/events/deloitte/2026_10_21_00_49_IMG_7415.JPEG',
      '/events/deloitte/2026_10_21_00_53_IMG_7409.JPEG',
      '/events/deloitte/2026_10_21_01_01_IMG_7408.JPEG',
      '/events/deloitte/2026_10_21_01_02_IMG_7417.JPEG',
      '/events/deloitte/2026_10_21_01_10_IMG_7398.JPEG',
      '/events/deloitte/2026_10_21_01_16_IMG_7399.JPEG',
      '/events/deloitte/2026_10_21_01_21_IMG_7411.JPEG',
      '/events/deloitte/2026_10_21_01_23_IMG_7401.JPEG',
      '/events/deloitte/2026_10_21_01_26_IMG_7416.JPEG',
      '/events/deloitte/2026_10_21_01_27_IMG_7405.JPEG',
      '/events/deloitte/2026_10_21_01_28_IMG_7410.JPEG',
      '/events/deloitte/2026_10_21_01_38_IMG_7413.JPEG',
      '/events/deloitte/2026_10_21_01_46_IMG_7418.JPEG',
      '/events/deloitte/2026_10_21_01_47_IMG_7419.JPEG',
      '/events/deloitte/2026_10_21_01_52_IMG_7402.JPEG',
    ],
  },
  {
    id: 'heen-namet',
    title: 'Heen Namet El Madina',
    tag: 'BTS — Film Set',
    images: [
      '/events/bts-heen-namet-el-madina/2026_06_29_16_38_IMG_2155.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_16_38_IMG_6710.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_17_06_IMG_2156.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_17_06_IMG_6694.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_17_06_IMG_6695.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_17_13_IMG_2157.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_17_13_IMG_2158.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_17_13_IMG_6696.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_17_13_IMG_6711.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_18_15_IMG_6709.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_18_46_IMG_6697.JPG',
      '/events/bts-heen-namet-el-madina/2026_06_29_18_46_IMG_6698.JPG',
      '/events/bts-heen-namet-el-madina/2026_06_29_18_46_IMG_6719.JPG',
      '/events/bts-heen-namet-el-madina/2026_06_29_18_47_IMG_6699.JPG',
      '/events/bts-heen-namet-el-madina/2026_06_29_18_55_IMG_6700.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_19_00_IMG_6718.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_19_05_IMG_2159.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_19_06_IMG_2160.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_19_06_IMG_6701.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_19_07_IMG_6702.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_19_07_IMG_6717.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_19_14_IMG_6703.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_19_14_IMG_6716.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_19_29_IMG_2161.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_20_41_IMG_2162.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_20_41_IMG_6704.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_20_41_IMG_6707.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_20_41_IMG_6715.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_20_43_IMG_6705.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_21_26_IMG_2163.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_21_26_IMG_6706.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_21_30_IMG_2164.JPG',
      '/events/bts-heen-namet-el-madina/2026_06_29_21_30_IMG_2165.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_21_30_IMG_6712.jpg',
      '/events/bts-heen-namet-el-madina/2026_06_29_21_30_IMG_6713.JPG',
      '/events/bts-heen-namet-el-madina/2026_06_29_21_30_IMG_6714.JPG',
    ],
  },
  {
    id: 'kora-eh',
    title: 'El Kora Eh',
    tag: 'BTS — Film Set',
    images: [
      '/events/bts-el-kora-eh/2026_07_31_08_39_IMG_2131.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_08_47_IMG_2132.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_08_47_IMG_2133.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_08_52_IMG_2134.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_09_53_IMG_2135.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_09_57_IMG_2136.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_14_06_IMG_2137.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_14_07_IMG_2138.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_15_12_IMG_2139.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_15_13_IMG_2140.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_15_13_IMG_2141.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_15_24_IMG_2142.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_15_39_IMG_2143.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_17_57_IMG_2144.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_18_15_IMG_2145.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_18_48_IMG_2146.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_21_21_IMG_2147.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_22_55_IMG_2148.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_22_56_IMG_2149.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_22_59_IMG_2150.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_23_00_IMG_2151.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_23_03_IMG_2152.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_23_06_IMG_2153.JPEG',
      '/events/bts-el-kora-eh/2026_07_31_23_09_IMG_2154.JPEG',
    ],
  },
];

const optimizedImage = (src) => src.replace('/events/', '/events-optimized/').replace(/\.(jpe?g)$/i, '.webp');
/* ─── Project folders ──────────────────────────────────── */
function ProjectCard({ project, onOpen }) {
  return (
    <button className="ev-card" onClick={() => onOpen(project)} aria-haspopup="dialog">
      <span className="ev-card-preview" aria-hidden="true">
        {project.images.slice(0, 4).map(src => (
          <img key={src} src={optimizedImage(src)} alt="" loading="lazy" decoding="async" />
        ))}
        <span className="ev-card-count">{project.images.length} photos</span>
      </span>
      <span className="ev-card-info">
        <span className="ev-card-tag">{project.tag}</span>
        <span className="ev-card-title" role="heading" aria-level="3">{project.title}</span>
      </span>
      <span className="ev-card-open">Open project <span aria-hidden="true">&rarr;</span></span>
    </button>
  );
}

function ProjectGallery({ project, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="ev-modal-backdrop" onClick={(event) => event.target === event.currentTarget && onClose()}>
      <section className="ev-modal" role="dialog" aria-modal="true" aria-labelledby="ev-modal-title">
        <header className="ev-modal-header">
          <div>
            <span className="ev-card-tag">{project.tag} / {project.images.length} photos</span>
            <h2 className="ev-modal-title" id="ev-modal-title">{project.title}</h2>
          </div>
          <button className="ev-modal-close" type="button" onClick={onClose} aria-label="Close project gallery" autoFocus>&times;</button>
        </header>
        <div className="ev-folder-grid">
          {project.images.map((src, index) => (
            <img
              key={src}
              src={optimizedImage(src)}
              alt={`${project.title}, photo ${index + 1}`}
              className="ev-folder-photo"
              loading={index < 8 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default function Events() {
  const [activeProject, setActiveProject] = useState(null);
  const closeGallery = () => setActiveProject(null);

  return (
    <section className="section events-section" id="events">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header">
            <p className="section-eyebrow center">Live Events</p>
            <h2 className="section-title">Event <em>Photography</em></h2>
            <p className="section-desc">
              From intimate gatherings to grand productions,<br />
              capturing the unrepeatable energy of human experience.
            </p>
          </div>
        </Reveal>

        <div className="ev-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
          ))}
        </div>
      </div>

      {activeProject && <ProjectGallery project={activeProject} onClose={closeGallery} />}
    </section>
  );
}
