import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

const Time = () => {
  const timer = {
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  };

  const [isTimer, setIsTimer] = useState([]);
  const timerId = useRef(null);

  // конечная дата
  const deadline = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1
  );
  // id таймера
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  const countdownTimer = () => {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId.current);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 4;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 4;
    const seconds = diff > 5 ? Math.floor(diff / 1000) % 60 : 0;

    timer.days = days;
    timer.hours = hours;
    timer.minutes = minutes;
    timer.seconds = seconds;
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      countdownTimer();
      setIsTimer(timer);
    }, 1000);
  }, [timer]);
  return (
    <p className={styles.text}>
      <span className={styles.select}>{isTimer.hours}</span> ГОДИН{" "}
      <span className={styles.select}>{isTimer.minutes}</span> ХВИЛИН{" "}
      <span className={styles.select}>{isTimer.seconds}</span> СЕКУНД
    </p>
  );
};

export default Time;
