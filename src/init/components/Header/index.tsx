import { FC, memo } from "react";

interface IHeaderViewProps {}

const HeaderView: FC<IHeaderViewProps> = (props) => {
  return (
    <>
      <p>
        Лабораторная работа 1 по дисциплине МРЗвИС
        <br />
        Выполнена студентом группы 921703
        <br />
        БГУИР Головаченко Сергеем Андреевичем
      </p>
      <br />
    </>
  );
};

export default memo(HeaderView);
