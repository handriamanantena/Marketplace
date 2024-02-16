import { StarSVG } from "@components/rating/StarSvG";

export const Star = ({ isStyled }: { isStyled: boolean }) => {
  return (
    <div className={`text-${isStyled ? "yellow" : "gray"}-300`}>
      <StarSVG />
    </div>
  );
};
