import Reveal from './Reveal';

const steps = [
  { num: '01', title: 'Consultation',      body: 'Understanding your vision, the atmosphere you want, and the story you want to tell.' },
  { num: '02', title: 'Creative Direction', body: 'Crafting a visual narrative — lighting, angles, timing. Every element is intentional.' },
  { num: '03', title: 'Capture & Edit',    body: 'Professional shooting followed by cinematic color grading and careful post-production.' },
  { num: '04', title: 'Delivery',          body: 'Your gallery or reel, delivered beautifully and on time — ready to be shared.' },
];

export default function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="process-inner">

          <Reveal direction="left">
            <blockquote className="process-quote">
              <p>"Photography is the art of frozen time — the ability to store emotion and feelings within a frame."</p>
              <cite>— Khaled Mohsen</cite>
            </blockquote>
          </Reveal>

          <Reveal direction="right">
            <div className="process-steps-col">
              {steps.map(({ num, title, body }) => (
                <div className="process-step" key={num}>
                  <span className="step-num">{num}</span>
                  <div className="step-content">
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
