import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      process.env.WEB3FORMS_ACCESS_KEY ||
      '1cbd1af4-74a3-4208-b4a3-d21b4c441b5e';

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('name', body.name || '');
    formData.append('email', body.email || '');
    formData.append('subject', body.subject || `New message from ${body.name}`);
    formData.append('message', body.message || '');
    formData.append('from_name', 'Sahil Sharma Portfolio');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
