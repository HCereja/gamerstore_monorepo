import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";

export interface ReviewRatingProps {
  rating: number;
  size?: number;
}

const ReviewRating = ({ rating, size }: ReviewRatingProps) => {
  function ratingToStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<IconStarFilled size={size ?? 12} />);
      } else if (rating >= i - 0.5) {
        stars.push(<IconStarHalfFilled size={size ?? 12} />);
      } else {
        stars.push(<IconStar size={size ?? 12} />);
      }
    }
    return stars;
  }

  return (
    <div className="flex gap-0.5 text-emerald-400">{ratingToStars(rating)}</div>
  );
};

export default ReviewRating;
