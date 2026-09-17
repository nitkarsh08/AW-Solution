import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/7564051627?text=Hi%20AW%20Solution,%20I%20need%20a%20website."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
    >
      <MessageCircle size={28} />
    </a>
  );
}