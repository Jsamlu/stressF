import React, { useEffect, useRef, useState } from 'react';


const InfiniteHorizontalScroll = (list) => {
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

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -scrollContainer.current.clientWidth / 5, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: scrollContainer.current.clientWidth / 5, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Horizontal Scrollable Container */}
      <div
        ref={scrollContainer}
        className="flex space-x-4 items-center overflow-x-scroll no-scrollbar"
        style={{ whiteSpace: 'nowrap' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {list.map((list) => (
          <div className="">
          <div className="rounded-xl  flex relative object-cover h-[300px] w-[350px]">
            <div className=" backdrop-blur-0 hover:backdrop-blur-lg"></div>
            <img loading="lazy"
              src={list.image}
              alt="qna.jpg"
              className="h-full w-full hover:bg-blue-500/50 transform hover:scale-[110%] transition-all duration-300"
            />
            <div className="absolute  opacity-[0%] hover:opacity-[50%] h-[300px] w-[350px] bg-blue-800 text-white text-4xl text-center transform transition-all duration-300">helllllllllo</div>
          </div>
        </div>
        ))}{Feature_List.map((list) => (
          <div className="">
          <div className="rounded-xl  flex relative object-cover h-[300px] w-[350px]">
            <div className=" backdrop-blur-0 hover:backdrop-blur-lg"></div>
            <img loading="lazy"
              src={list.image}
              alt="qna.jpg"
              className="h-full w-full hover:bg-blue-500/50 transform hover:scale-[110%] transition-all duration-300"
            />
            <div className="absolute  opacity-[0%] hover:opacity-[50%] h-[300px] w-[350px] bg-blue-800 text-white text-4xl text-center transform transition-all duration-300">helllllllllo</div>
          </div>
        </div>
        ))}{Feature_List.map((list) => (
          <div className="">
          <div className="rounded-xl  flex relative object-cover h-[300px] w-[350px]">
            <div className=" backdrop-blur-0 hover:backdrop-blur-lg"></div>
            <img loading="lazy"
              src={list.image}
              alt="qna.jpg"
              className="h-full w-full hover:bg-blue-500/50 transform hover:scale-[110%] transition-all duration-300"
            />
            <div className="absolute  opacity-[0%] hover:opacity-[50%] h-[300px] w-[350px] bg-blue-800 text-white text-4xl text-center transform transition-all duration-300">helllllllllo</div>
          </div>
        </div>
        ))}{Feature_List.map((list) => (
          <div className="">
          <div className="rounded-xl  flex relative object-cover h-[300px] w-[350px]">
            <div className=" backdrop-blur-0 hover:backdrop-blur-lg"></div>
            <img loading="lazy"
              src={list.image}
              alt="qna.jpg"
              className="h-full w-full hover:bg-blue-500/50 transform hover:scale-[110%] transition-all duration-300"
            />
            <div className="absolute  opacity-[0%] hover:opacity-[50%] h-[300px] w-[350px] bg-blue-800 text-white text-4xl text-center transform transition-all duration-300">helllllllllo</div>
          </div>
        </div>
        ))}
      </div>

    </div>
  );
};

export default InfiniteHorizontalScroll;
