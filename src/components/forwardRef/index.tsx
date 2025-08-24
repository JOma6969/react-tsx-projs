// make a component that focuses on an input when the page loads up

import { useRef, useEffect } from "react";
import ChildComp from "./ChildComp";

const ForwardRefParent = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div>
      <form action="" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
        <ChildComp ref={ref} />
        <button>Focus Me</button>
      </form>
    </div>
  );
};

export default ForwardRefParent;
