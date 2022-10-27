import { apiEmail } from "@/modules/shared/apis";
// Interfaces
import { IEmailDto, IMessage } from "../interfaces";

export const sendEmail = (values: IEmailDto) => {
  return apiEmail.post<IMessage>("/api/v1/email/send", values);
};
