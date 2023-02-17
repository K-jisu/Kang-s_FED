//** */
import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Counter A Update : ${count}`);
  });

  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`Counter B Update : ${obj.count}`);
  });

  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  // if (prevProps.obj.count === nextProps.obj.count) {
  //   return true;
  // }
  // return false;

  return prevProps.obj.count === nextProps.obj.count;
};

const MeMoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ count: 1 });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button
          onClick={() => {
            setCount(count);
          }}
        >
          Button A
        </button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MeMoizedCounterB obj={obj} />
        <button
          onClick={() => {
            setObj({ count: obj.count });
          }}
        >
          Button B
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
