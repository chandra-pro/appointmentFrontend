import { commonrequest } from "./ApiCall";
const { BASE_URL } = "http://localhost:3000";

export const registerfunction = async data => {
  return await commonrequest(
    "POST",
    `http://localhost:3000/api/register`,
    data
  );
};

export const sentAvailableSlots = async query => {
  return await commonrequest(
    "POST",
    `${BASE_URL}/api/slots/available?${query}`
  );
};

export const otpVerify = async data => {
  return await commonrequest(
    "POST",
    `http://localhost:3000/api/verify-otp`,
    data
  );
};
export const adminVerify = async data => {
  return await commonrequest("POST", `${BASE_URL}admin/login`, data);
};
