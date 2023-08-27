import { BaseUrlHost } from "@/utils/common/baseUrl";
import axios from "axios";

interface StudentInterface {
  user_id: number;
  student_rating: number;
  created_by: string;
  updated_by?: string;
}
export async function createStudentService({
user_id,
  transaction_id,
  rating,
  Student,
  created_by,
  updated_by,
}: StudentInterface): Promise<any> {
  let errorMessage: string;
  try {
    let updated;

    if (updated_by) {
      updated = updated_by;
    }
    const payload = { student_id:student_id,tutor_id:tutor_id,transaction_id:transaction_id,rating:rating,Student:Student,created_by: created_by, updated_by: updated };
    const url = `${BaseUrlHost}/student`;
    const response = await axios.post(url, payload);
    if (response.data.status !== 201) {
      errorMessage = "Unable to create Student. Please try again in a while.";
      return errorMessage;
    }
    return response.data;
  } catch (error) {
    console.log(error);
    errorMessage = "Something went wrong. Please try again in a while.";
    return errorMessage;
  }
}
