import * as React from "react";
import { FiveStars } from "@components/rating/FiveStars";

export const Rating = ({
  rating,
  totalRatings,
}: {
  rating: number;
  totalRatings: number;
}) => {
  return (
    <div className="flex items-center">
      <FiveStars rating={rating} />
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {rating.toFixed(2)}
      </p>
      <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {totalRatings}
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        Reviews
      </p>
    </div>
  );
};
