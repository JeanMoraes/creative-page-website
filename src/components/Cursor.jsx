import { useContext, useEffect, useRef } from "react";
import { CursorContext } from "../context/CursorContext";

const Cursor = () => {

    const {
        mouseOverEvent,
        mouseOutEvent,
        mouseMoveEvent,
        mouseEnterEvent,
        mouseLeaveEvent,
        endX,
        endY,
        dot,
        dotOutline,
        animateDotOutline,
        requestRef } = useContext(CursorContext)
  
    useEffect(() => {
        endX.current = window.innerWidth / 2
        endY.current = window.innerHeight / 2

      document.addEventListener('mousedown', mouseOverEvent);
      document.addEventListener('mouseup', mouseOutEvent);
      document.addEventListener('mousemove', mouseMoveEvent);
      document.addEventListener('mouseenter', mouseEnterEvent);
      document.addEventListener('mouseleave', mouseLeaveEvent);
  
      animateDotOutline();
  
      return () => {
        document.removeEventListener('mousedown', mouseOverEvent);
        document.removeEventListener('mouseup', mouseOutEvent);
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseenter', mouseEnterEvent);
        document.removeEventListener('mouseleave', mouseLeaveEvent);
  
        cancelAnimationFrame(requestRef.current);
      };
    }, []);

  return (
    <>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
    </>
  );
};

export default Cursor;
