import { useEffect, useRef } from 'react';

export default function Loader() {
  const loaderRef = useRef(null);
  const fillRef   = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Start fill animation shortly after mount
    const t1 = setTimeout(() => {
      if (fillRef.current) fillRef.current.style.width = '100%';
    }, 100);

    // Hide loader after fill completes
    const t2 = setTimeout(() => {
      if (loaderRef.current) loaderRef.current.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1900);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="page-loader" ref={loaderRef}>
      <div className="loader-inner">
        <span className="loader-name">K M</span>
        <div className="loader-bar">
          <div className="loader-fill" ref={fillRef} />
        </div>
      </div>
    </div>
  );
}
