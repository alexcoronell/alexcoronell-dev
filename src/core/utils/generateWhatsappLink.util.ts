import { personalData } from "@data/index";

const cleanPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/[^\d+]/g, "");
  if (cleaned.startsWith("+")) {
    return cleaned;
  }

  // If no + and it's a valid number, add + (assuming international format)
  return cleaned ? `+${cleaned}` : "";
};

export const generateLinkWhatsapp = (message: string): string => {
  const encodeMessage = encodeURIComponent(message);
  const phone = cleanPhoneNumber(personalData.phone);
  return `https://wa.me/${phone}?text=${encodeMessage}`;
};
