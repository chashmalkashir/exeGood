
import React ,{useState,useEffect} from 'react'

export function Page1() {
  return (
    <div>
      <Title></Title>
      <h3>lesson 1</h3>
    </div>
  )
}
export function Page2() {
  return (
    <div>
      <Title></Title>
      <h3>lesson 2</h3>
    </div>
  )
}

export function Title() {
  return (
    <div>
      <h1>hello react</h1>
    </div>
  )
}


// פקד שעון
export function Clock(props) {
  const [ticks, setTicks] = useState(0);

  function tick() {
    setTicks(val => val + 1);
  }

  useEffect(function () {
    const timer = setInterval(tick, 5000);

    return function cancel() {
      clearInterval(timer);
    }
  }, []);

  return (
    <div>
      Ticks... {ticks}
    </div>
  );
}

// פקד המציג טקסט אחר בכל שניה
export function NewsTicker(props) {
  const { items } = props;
  const [itemIndex, setItemIndex] = useState(0);

  function tick() {
    setItemIndex(val => (val + 1) % items.length);
  }

  useEffect(function () {
    const timer = setInterval(tick, 1000);

    return function cancel() {
      clearInterval(timer);
    }
  }, []);

  return (
    <h1 style={{color:items[itemIndex]}}>{items[itemIndex]}</h1>
  )
}

// hook
function useTimer(ms = 1000) {
  const [ticks, setTicks] = useState(0);

  function tick() {
    setTicks(v => v + 1);
  }

  useEffect(function () {
    const timer = setInterval(tick, ms);

    return function cancel() {
      clearInterval(timer);
    }
  }, []);

  return ticks;
}
//new oclock

export function NewClock(props) {
  const ticks = useTimer();
  return (
    <div>
      Ticks... {ticks}
    </div>
  );
}
export function NewsTicker2(props) {
  const { items } = props;
  const ticks = useTimer();
  return (
    <h1>{items[ticks % items.length]}</h1>
  )
}

