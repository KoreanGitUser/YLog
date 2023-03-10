import { HTMLProps as Props } from "react";

export type CommonInputProps = Omit<Props<HTMLInputElement>, "classID">;
export type CommonDivProps = Omit<Props<HTMLDivElement>, "classID">;
export type CommonLabelProps = Omit<Props<HTMLLabelElement>, "classID">;
export type CommonFormProps = Omit<Props<HTMLFormElement>, "classID">;
export type CommonAnchorProps = Omit<Props<HTMLAnchorElement>, "classID">;
export type CommonParagraphProps = Omit<Props<HTMLParagraphElement>, "classID">;
export type CommonHeadingProps = Omit<Props<HTMLHeadingElement>, "classID">;
export type CommonSelectProps = Omit<Props<HTMLSelectElement>, "classID">;
export type CommonOptionProps = Omit<Props<HTMLOptionElement>, "classID">;
export type CommonSpanProps = Omit<Props<HTMLSpanElement>, "classID ">;
export type CommonFieldProps = Omit<Props<HTMLFieldSetElement>, "classID ">;
export type CommonSectionProps = Omit<
  Props<HTMLTableSectionElement>,
  "classID"
>;

export type CommonButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type CommonSVGProps = React.SVGProps<SVGSVGElement>;

type InitProps = Props<HTMLElement>;
export default InitProps;
