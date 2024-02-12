import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { Button } from "@components/ui/button";
import { AddReviewForm } from "@components/AddReviewForm";

export function DialogCloseButton({ itemId }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Review</DialogTitle>
          <DialogDescription>Rate this product</DialogDescription>
        </DialogHeader>
        <AddReviewForm itemId={itemId} />
      </DialogContent>
    </Dialog>
  );
}
