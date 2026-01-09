import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ratingsReviewsCardData } from "@/components/RatingsReviews/ratingsReviews.data";
import { RatingsReviewsType } from "@/components/RatingsReviews/ratingsReviewsType";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog";
import RatingsReviewsDialog from "@/components/RatingsReviews/RatingsReviewsDialog";
import { BinMinusIn, EditPencil, Star } from "iconoir-react";
import StarFilled from "@/assets/star-filled.png";
import StarEmpty from "@/assets/star-empty.png";
import CourseSelect from "@/components/reusableComponents/CourseSelect";

const RatingsReviews: React.FC = () => {
  const [reviewsDialogOpen, setReviewsDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedReviews, setSelectedReviews] =
    useState<RatingsReviewsType | null>(null);

  const handleAdd = () => {
    setSelectedReviews(null);
    setReviewsDialogOpen(true);
  };

  const handleEdit = (reviews: RatingsReviewsType) => {
    setSelectedReviews(reviews);
    setReviewsDialogOpen(true);
  };

  const handleDeleteClick = (reviews: RatingsReviewsType) => {
    setSelectedReviews(reviews);
    setDeleteDialogOpen(true);
  };

  const onDelete = () => {
    if (!selectedReviews) return;
    console.log("Deleting review:", selectedReviews.id);
    setDeleteDialogOpen(false);
    setSelectedReviews(null);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between flex-col lg:flex-row gap-4 items-center">
        <h2 className="justify-start text-2xl font-bold w-full lg:w-auto">Ratings & Reviews</h2>
         <div className="flex flex-wrap flex-1 w-full gap-2 lg:gap-4 lg:justify-end">
          <CourseSelect />
        <Button variant="secondary" 
        className="h-[44px]"
        onClick={handleAdd}>
          Add A Review
        </Button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="flex flex-col gap-[10px]">
        {ratingsReviewsCardData.map((review) => (
          <div key={review.id} className="relative rounded-xl bg-[#EEF5FF] p-4">
            <div className="flex justify-between gap-3 mb-4">
              {/* Rating */}
              <div className="flex gap-[8px] star-custom">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    src={star <= review.rating ? StarFilled : StarEmpty}
                    alt="star"
                    className="w-[34px] h-[34px]"
                  />
                ))}
              </div>
              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  className="rounded-lg"
                  size="icon"
                  onClick={() => handleEdit(review)}
                >
                  <EditPencil className="w-3 h-3" />
                </Button>
                <Button
                  className="rounded-lg"
                  size="icon"
                  variant="destructive"
                  onClick={() => handleDeleteClick(review)}
                >
                  <BinMinusIn />
                </Button>
              </div>
            </div>

            {/* Review Text */}
            <p className="justify-start text-paragraph text-sm font-medium leading-[30px]">
              {review.review}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-start flex-wrap gap-3 mt-2">
              <div className="flex flex-col gap-2">
                <p className="justify-start text-black text-base font-bold">{review.personName}</p>
                <p className="justify-start text-paragraph text-sm font-medium">{review.companyName}</p>
                <p className="justify-start text-paragraph text-sm font-medium">{review.position}</p>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <p className="justify-start text-paragraph text-sm font-medium">User Id: {review.userId}</p>
                <p className="underline cursor-pointer justify-start text-black text-sm font-medium">{review.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dialogs */}
      <RatingsReviewsDialog
        open={reviewsDialogOpen}
        setOpen={setReviewsDialogOpen}
        editData={selectedReviews}
      />

      <ConfirmDialog
        open={deleteDialogOpen}
        title="Delete Review?"
        description="Are you sure you want to delete this review? This action cannot be undone."
        onCancel={() => setDeleteDialogOpen(false)}
        onConfirm={onDelete}
      />
    </div>
  );
};

export default RatingsReviews;
