import { StarSVG } from "@components/rating/StarSvG";
import { useState } from "react";

export const EditableFiveStars = ({
  setRating,
}: {
  setRating: (value: number) => void;
}) => {
  const [selectedStars, setSelectedStars] = useState<string[]>(
    Array(5).fill("text-gray-300"),
  );

  const highLightStar = (selectedStar: number) => {
    const coloredIn = "text-yellow-300";
    const blank = "text-gray-300";

    setSelectedStars((prevStars) =>
      prevStars.map((star, index) =>
        index < selectedStar ? coloredIn : blank,
      ),
    );
    setRating(selectedStar);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <div
          key={index}
          onClick={() => highLightStar(star)}
          className={selectedStars[index]}
        >
          <StarSVG />
        </div>
      ))}
    </div>
  );
};
