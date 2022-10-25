import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

export const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const onClickReset = () => {
    setCounter(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setCounter(counter + 1);
      }, 1000);
    } else if (!isActive && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, counter]);

  return (
    <>
      <p className={styles.p}>{counter}</p>
      <button
        disabled={isActive ? true : false}
        className={styles.button}
        onClick={toggle}
      >
        Start
      </button>
      <button disabled={isActive ? false : true} onClick={toggle}>
        Stop
      </button>
      <button onClick={onClickReset}>Reset</button>
    </>
  );
};
