import { FC, memo } from "react";

interface IFormViewProps {}

const FormView: FC<IFormViewProps> = (props) => {
  return <form>{props.children}</form>;
};

export default memo(FormView);
