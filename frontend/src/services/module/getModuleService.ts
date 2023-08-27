import { BaseUrlHost } from "@/utils/common/baseUrl";
import axios from "axios";

export async function getModuleService({}): Promise<any> {
  let errorMessage: string;
  try {
    const url = `${BaseUrlHost}/module`;
    const response = await axios.get(url);
    if (response.data.status !== 200) {
      errorMessage = "Unable to get Module. Please try again in a while.";
      return errorMessage;
    }
    return response.data;
  } catch (error) {
    console.log(error);
    errorMessage = "Something went wrong. Please try again in a while.";
    return errorMessage;
  }
}
