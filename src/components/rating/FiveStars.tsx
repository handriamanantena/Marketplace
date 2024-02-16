import { Star } from "@components/rating/Star";

export const FiveStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((num: number) => (
        <Star isStyled={rating >= num} />
      ))}
    </div>
  );
};
