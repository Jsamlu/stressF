import React, { useEffect, useRef, useState } from 'react';


const H_scroll = ({list}) => {
  const scrollContainer = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollContainer.current;

    if (!container) return;

    let scrollSpeed = 1;
    let animationFrameId;

    const scroll = () => {
      if (!isHovered) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div className="relative w-full h-full">
      {/* Horizontal Scrollable Container */}
      <div
        ref={scrollContainer}
        className="flex space-x-4 items-center overflow-x-scroll no-scrollbar"
        style={{ whiteSpace: 'wrap' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {list.map((list) => (
          <div className="">
          <div className="rounded-xl  flex relative object-cover h-[300px] w-[350px] transform hover:scale-[110%] scale-90 transition-all duration-500">
            <img loading="lazy"
              src={list.image}
              alt="qna.jpg"
              className="h-full w-full "
            />
            <div className="absolute flex text-xl text-center items-center opacity-[0%] hover:opacity-[75%] h-[300px] w-[350px] bg-slate-800 text-white text-egxt-center transform transition-all duration-500">
              {list.decs}
              </div>
          </div>
        </div>
       
        ))}
        {list.map((list) => (
          <div className="">
          <div className="rounded-xl  flex relative object-cover h-[300px] w-[350px] transform hover:scale-[110%] scale-90 transition-all duration-500">
            <img loading="lazy"
              src={list.image}
              alt="qna.jpg"
              className="h-full w-full "
            />
            <div className="absolute flex text-xl text-center items-center opacity-[0%] hover:opacity-[75%] h-[300px] w-[350px] bg-slate-800 text-white text-egxt-center transform transition-all duration-500">
              {list.decs}
              </div>
          </div>
        </div>
       
        ))}
        {list.map((list) => (
          <div className="">
          <div className="rounded-xl  flex relative object-cover h-[300px] w-[350px] transform hover:scale-[110%] scale-90 transition-all duration-500">
            <img loading="lazy"
              src={list.image}
              alt="qna.jpg"
              className="h-full w-full "
            />
            <div className="absolute flex text-xl text-center items-center opacity-[0%] hover:opacity-[75%] h-[300px] w-[350px] bg-slate-800 text-white text-egxt-center transform transition-all duration-500">
              {list.decs}
              </div>
          </div>
        </div>
       
        ))}
      </div>

    </div>
  );
};

export default H_scroll;
