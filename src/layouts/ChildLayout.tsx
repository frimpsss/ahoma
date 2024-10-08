import React, { useEffect, useState } from "react";

const ChildLayout = ({
  children,
  title,
  trailing,
}: {
  children: React.ReactNode;
  title?: React.ReactNode;
  trailing?: React.ReactNode;
}) => {
  const [w, setW] = useState();
  const divRef = React.useRef(null);
  function handleResize() {
    setW(divRef?.current?.getBoundingClientRect().left);
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return (
    <div className="w-[620px] mx-auto  top-0 left-0 right-0 ">
      <div className="flex items-center justify-center  py-4 h-[8vh] relative">
        <div>{title}</div>
        <div className="absolute  right-2 h-full z-20 grid place-items-center">
          {trailing}
        </div>
      </div>
      <div
        className="border-[0.5px] border-border rounded-t-2xl left-0 right-0 bg-child p-6  bottom-0 shadow z-[10] sticky  min-h-[92vh]"
        ref={divRef}
      ></div>

      <div
        className="fixed  w-screen left-0 px-[1px] bottom-0 z-[100] overflow-scroll h-[92vh]"
        style={{
          paddingLeft: w,
          paddingRight: w,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ChildLayout;
