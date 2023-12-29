import { FC } from "react";
import { Tooltip } from "react-tooltip";

export const TooltipCmp: FC = () => {
  return (
    <>
      <Tooltip
        offset={21}
        className="tooltip"
        classNameArrow="arrow"
        id="name-tooltip"
        place="bottom"
      />
      <Tooltip
        offset={21}
        className="tooltip"
        classNameArrow="arrow"
        id="email-tooltip"
        place="bottom-end"
      />
      <Tooltip
        offset={21}
        className="tooltip"
        classNameArrow="arrow"
        id="image-tooltip"
        place="bottom"
      />
      <style>{`
        .tooltip{
          height: 32px;
          font-family: Nunito;
          font-size: 16px;
          line-height: 26px;
          padding:3px 16px;
          }
        .arrow{
          width: 0px;
          height: 0px;
          }
          `}</style>
    </>
  );
};
