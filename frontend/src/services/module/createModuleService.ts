import { BaseUrlHost } from "@/utils/common/baseUrl";
import axios from "axios";

interface ModuleInterface {
  module_code: number;
  name: string;
  base_pay: number;
  created_by: string;
  updated_by?: string;
}
export async function createModuleService({
  module_code,
  name,
  base_pay,
  created_by,
  updated_by,
}: ModuleInterface): Promise<any> {
  let errorMessage: string;
  try {
    let updated;

    if (updated_by) {
      updated = updated_by;
    }
    const payload = { name: name,module_code:module_code,base_pay:base_pay,created_by: created_by, updated_by: updated };
    const url = `${BaseUrlHost}/module`;
    const response = await axios.post(url, payload);
    if (response.data.status !== 201) {
      errorMessage = "Unable to create Module. Please try again in a while.";
      return errorMessage;
    }
    return response.data;
  } catch (error) {
    console.log(error);
    errorMessage = "Something went wrong. Please try again in a while.";
    return errorMessage;
  }
}
