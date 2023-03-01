import { CommonButtonProps } from "@utils/props";
import { FunctionComponent as FC } from "react";

const PushBtn: FC<CommonButtonProps> = (props) => {
  const { children, className, onClick, ...restProps } = props;

  return (
    <button
      {...restProps}
      onClick={(evt) => {
        evt.preventDefault();
        onClick && onClick(evt);
      }}
      className={`px-4 py-2 rounded duration-150 active:scale-95 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default PushBtn;
