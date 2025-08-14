import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Add global style to remove cursor pointer
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: none !important;
      }
      button, a, [role="button"], .cursor-pointer, [onclick] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'button' || 
          target.tagName.toLowerCase() === 'a' ||
          target.onclick ||
          target.role === 'button' ||
          target.className.includes('cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const onMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    // Hide the default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed pointer-events-none z-[99] transition-all duration-200 ease-out
          ${isClicking ? 'scale-75' : ''}
          ${isHovering ? 'bg-blue-500' : 'bg-black'}`}
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          opacity: 0.75,
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      />
      <div
        className={`fixed pointer-events-none z-[99] mix-blend-difference
          ${isClicking ? 'scale-75' : ''}`}
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'white',
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
