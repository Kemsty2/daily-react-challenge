import { useState, useCallback } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import Header from "../Header/header.layout";

import { getDisplayName } from "../../../utils";

import Image1 from "../../../assets/imgs/carousel/001-blackgirl-with-beautiful-smile.png";
import Image2 from "../../../assets/imgs/carousel/002-blackmen-with-swagg.png";
import Image3 from "../../../assets/imgs/carousel/003-blackgirl-with-beautiful-lips.png";

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

const Arrow = ({ text }) => {
  return <button>{text}</button>;
};

const LeftArrow = () => {
  return <Arrow text="Left" />;
};

const RightArrow = () => {
  return <Arrow text="Right" />;
};

const images = [
  {
    title: "image-1",
    src: Image1,
  },
  {
    title: "image-1",
    src: Image2,
  },
  {
    title: "image-1",
    src: Image3,
  },
];

const Image = ({ title, src }) => {
  return <img src={src} alt={title} />;
};

function withDefaultWrapper(WrappedComponent) {
  const WithDefaultWrapper = ({ ...props }) => {
    const [position, setPosition] = useState(100);

    const restorePosition = useCallback(
      ({ scrollContainer }) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft = position;
        }
      },
      [position]
    );

    const savePosition = useCallback(
      ({ scrollContainer }) =>
        !!scrollContainer.current &&
        setPosition(scrollContainer.current.scrollLeft),
      []
    );
    return (
      <div>
        <div>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onInit={restorePosition}
            onScroll={savePosition}
            onWheel={onWheel}
          >
            {images.map((image, idx) => {
              return <Image key={`image-${idx}`} {...image} />;
            })}
          </ScrollMenu>
        </div>
        <Header />
        <WrappedComponent {...props} />
      </div>
    );
  };
  WithDefaultWrapper.displayName = `WithDefaultWrapper(${getDisplayName(
    WrappedComponent
  )})`;
  return WithDefaultWrapper;
}

export default withDefaultWrapper;
