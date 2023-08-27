import { BaseUrlHost } from "@/utils/common/baseUrl";
import axios from "axios";

interface ReviewInterface {
  student_id: number;
  tutor_id: number;
  transaction_id: number;
  rating: number;
  review: string;
  created_by: string;
  updated_by?: string;
}
export async function createReviewService({
  student_id,
  tutor_id,
  transaction_id,
  rating,
  review,
  created_by,
  updated_by,
}: ReviewInterface): Promise<any> {
  let errorMessage: string;
  try {
    let updated;

    if (updated_by) {
      updated = updated_by;
    }
    const payload = { student_id:student_id,tutor_id:tutor_id,transaction_id:transaction_id,rating:rating,review:review,created_by: created_by, updated_by: updated };
    const url = `${BaseUrlHost}/review`;
    const response = await axios.post(url, payload);
    if (response.data.status !== 201) {
      errorMessage = "Unable to create Review. Please try again in a while.";
      return errorMessage;
    }
    return response.data;
  } catch (error) {
    console.log(error);
    errorMessage = "Something went wrong. Please try again in a while.";
    return errorMessage;
  }
}
