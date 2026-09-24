import { ContactForm } from "./ContactForm";

export default function ContactFormSection({
  appearance,
  available = true,
}: {
  appearance?: "inline";
  available?: boolean;
}) {
  return <ContactForm appearance={appearance} available={available} />;
}
