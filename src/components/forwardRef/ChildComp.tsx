import { forwardRef } from "react";

const ChildComp = forwardRef<HTMLInputElement | null>((_, ref) => {
  return <input type="text" ref={ref} />;
});

export default ChildComp;
