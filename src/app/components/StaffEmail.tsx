import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

type ContactUsEmailProps = {
  name: string;
  phone: string;
  medium: string;
  email: string;
  message: string;
};

const MessageUsEmail = ({
  name,
  email,
  phone,
  medium,
  message,
}: ContactUsEmailProps) => {
  const previewText = `Colorworks: 🚀${name} just sent you a message.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
            <Heading className="text-black text-[20px] font-normal text-left">
              <strong className="uppercase">
                We have potential prospect: {name},
              </strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              {message}
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              The prospect would like to be contacted {medium}.
            </Text>

            <Hr className="my-[16px] mx-0 w-full" />

            <Text className="text-[#666666] text-[12px]">
              <strong>Phone:</strong> {phone}
            </Text>
            <Text className="text-[#666666] text-[12px]">
              <strong>Email:</strong> {email}
            </Text>
            <Text className="text-[#666666] text-[12px]">
              This email is delivered to you through the Paintwork SDK
              integrations.✨
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MessageUsEmail;
