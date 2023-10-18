import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_AxZgd4HL_A9GUH5FW1L7Ls1asD67FqihQ');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['safaballe@gmail.com'],
        subject: 'Hello World',
        react: EmailTemplate({ firstName: 'John' })
      });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
