import type { ContactMessage } from "@interfaces/index";

const url =
  "https://script.google.com/macros/s/AKfycbzTqMErjxTBWiYlihIJKucF9qmhnYQ2dOAwY2fAPkIIwBeYotTRa9grsm-bhUCfG0w9/exec";

export const sendContactMessage = async (message: ContactMessage) => {
  const formData = new FormData();
  formData.append("fullname", message.fullname);
  formData.append("email", message.email);
  formData.append("message", message.message || "");
  return await fetch(url, {
    method: "POST",
    body: formData,
  });
};
