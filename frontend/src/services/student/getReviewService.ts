import { BaseUrlHost } from "@/utils/common/baseUrl";
import axios from "axios";

export async function getReviewService({}): Promise<any> {
  let errorMessage: string;
  try {
    const url = `${BaseUrlHost}/review`;
    const response = await axios.get(url);
    if (response.data.status !== 200) {
      errorMessage = "Unable to get Review. Please try again in a while.";
      return errorMessage;
    }
    return response.data;
  } catch (error) {
    console.log(error);
    errorMessage = "Something went wrong. Please try again in a while.";
    return errorMessage;
  }
}
