import { useState } from "react";
import { sculptureList } from "./components/datas";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isGoFirstDisabled, setIsGoFirstDisabled] = useState(true);
  const [isGoLastDisabled, setIsGoLastDisabled] = useState(false);

  function handleNextClick() {
    const newIndex = index + 1;
    setIndex(newIndex);

    if (newIndex >= sculptureList.length - 1) {
      setIsNextDisabled(true);
    }

    if (newIndex > 0) {
      setIsPrevDisabled(false);
    }

    if (newIndex > 0) {
      setIsGoFirstDisabled(false);
    }
  }

  function handlePrevClick() {
    const newIndex = index - 1;
    setIndex(newIndex);

    if (newIndex <= 0) {
      setIsPrevDisabled(true);
    }
    if (newIndex <= 0) {
      setIsGoFirstDisabled(true);
    }
    if (newIndex < sculptureList.length - 1) {
      setIsNextDisabled(false);
    }
    if (newIndex < sculptureList.length - 1) {
      setIsGoLastDisabled(false);
    }
  }

  function handleGoFirstClick() {
    const newIndex = 0;
    setIndex(newIndex);

    if (newIndex <= 0) {
      setIsGoFirstDisabled(true);
    }

    if (newIndex <= 0) {
      setIsPrevDisabled(true);
    }
    if (newIndex < sculptureList.length - 1) {
      setIsNextDisabled(false);
    }
    if (newIndex >= 0) {
      setIsGoLastDisabled(false);
    }
  }

  function handleGoLastClick() {
    const newIndex = sculptureList.length - 1;
    setIndex(newIndex);

    if (newIndex >= sculptureList.length - 1) {
      setIsGoLastDisabled(true);
    }

    if (newIndex >= sculptureList.length - 1) {
      setIsNextDisabled(true);
    }

    if (newIndex > 0) {
      setIsGoFirstDisabled(false);
    }

    if (newIndex > 0) {
      setIsPrevDisabled(false);
    }
  }
  let sculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handleGoFirstClick} disabled={isGoFirstDisabled}>
        Go to First
      </button>
      <button onClick={handlePrevClick} disabled={isPrevDisabled}>
        prev
      </button>
      <button onClick={handleNextClick} disabled={isNextDisabled}>
        Next
      </button>
      <button onClick={handleGoLastClick} disabled={isGoLastDisabled}>
        Go to Last
      </button>
      <h1>
        {sculpture.name}
        {sculpture.artist}
      </h1>
      <h2>
        ({index + 1} of {sculptureList.length})
      </h2>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </div>
  );
}
