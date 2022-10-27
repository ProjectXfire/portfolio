import axios from "axios";

interface ErrorAxios {
  statusCode: number;
  message: string;
  error: string;
}

export const handleError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    if (error.response && error.response.data) {
      const errorMessage = error.response.data as ErrorAxios;
      return errorMessage.message;
    }
  }
  return error.message;
};
