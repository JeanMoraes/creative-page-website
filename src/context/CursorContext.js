import { createContext, useEffect, useRef } from "react";

export const CursorContext = createContext()

export function CursorProvider({ children }) {
    
    const delay = 18;

    const dot = useRef(null);
    const dotOutline = useRef(null);
    
    const endX = useRef(0);
    const endY = useRef(0);

    const _x = useRef(0);
    const _y = useRef(0);
    
    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    const requestRef = useRef(null);
  
    const toggleCursorVisibility = () => {
      if (cursorVisible.current) {
        dot.current.style.opacity = 1;
        dotOutline.current.style.opacity = 1;
      } else {
        dot.current.style.opacity = 0;
        dotOutline.current.style.opacity = 0;
      }
    };
  
    const toggleCursorSize = () => {
      if (cursorEnlarged.current) {
        dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
        dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.25)';
      } else {
        dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
        dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };
  
    const mouseOverEvent = () => {
      cursorEnlarged.current = true;
      toggleCursorSize();
    };
  
    const mouseOutEvent = () => {
      cursorEnlarged.current = false;
      toggleCursorSize();
    };
  
    const mouseEnterEvent = () => {
      cursorVisible.current = true;
      toggleCursorVisibility();
    };
  
    const mouseLeaveEvent = () => {
      cursorVisible.current = false;
      toggleCursorVisibility();
    };
  
    const mouseMoveEvent = e => {

      cursorVisible.current = true;
      toggleCursorVisibility();
  
      endX.current = e.pageX;
      endY.current = e.pageY;
  
      dot.current.style.top = endY.current + 'px';
      dot.current.style.left = endX.current + 'px';
    };
  
    const animateDotOutline = () => {
      _x.current += (endX.current - _x.current) / delay;
      _y.current += (endY.current - _y.current) / delay;
  
      dotOutline.current.style.top = _y.current + 'px';
      dotOutline.current.style.left = _x.current + 'px';
  
      requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    return (
        <CursorContext.Provider value={{
            dot,
            dotOutline,
            endX,
            endY,
            animateDotOutline,
            mouseOverEvent,
            mouseOutEvent,
            mouseMoveEvent,
            mouseEnterEvent,
            mouseLeaveEvent,
            requestRef,
        }}>
            { children }
        </CursorContext.Provider>
    )
}