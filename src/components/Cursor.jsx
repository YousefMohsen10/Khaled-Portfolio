import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef   = useRef(null);
  const followerRef = useRef(null);
  const mouse       = useRef({ x: 0, y: 0 });
  const follower    = useRef({ x: 0, y: 0 });
  const rafId       = useRef(null);

  useEffect(() => {
    // Only enable on devices that support hover (non-touch)
    if (!window.matchMedia('(hover: hover)').matches) return;

    const cursor   = cursorRef.current;
    const followed = followerRef.current;
    if (!cursor || !followed) return;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    };

    const animate = () => {
      follower.current.x += (mouse.current.x - follower.current.x) * 0.1;
      follower.current.y += (mouse.current.y - follower.current.y) * 0.1;
      followed.style.left = follower.current.x + 'px';
      followed.style.top  = follower.current.y + 'px';
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    // Hover states
    const addHover    = () => followed.classList.add('hovering');
    const removeHover = () => followed.classList.remove('hovering');

    const hoverEls = document.querySelectorAll(
      'a, button, .work-item, .reel-placeholder, .mosaic-item, .skill-tag, .btn, select, input, textarea'
    );
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    document.addEventListener('mousemove', onMove);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"          ref={cursorRef}   />
      <div className="cursor-follower" ref={followerRef} />
    </>
  );
}
