import React, { useEffect, useState } from "react";

const UnMountTest = () => {
  useEffect(() => {
    //Mount 되는 시점
    console.log("Mount!");

    return () => {
      //UnMount 시점에 실행되게 됨
      console.log("UnMout!");
    };
  }, []);
  return <div>UnMout testing Component</div>;
};

const LifeCycle = () => {
  const [isVisble, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisble);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisble && <UnMountTest />}
    </div>
  );
};

export default LifeCycle;
