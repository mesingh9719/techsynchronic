const PRIMARY_LEAD_EMAIL = 'mesingh9719@gmail.com';
const SECONDARY_LEAD_EMAIL = 'susingh9719@gmail.com';
const LEAD_ENDPOINT = `https://formsubmit.co/ajax/${PRIMARY_LEAD_EMAIL}`;

export async function submitLead(subject: string, fields: Record<string, string>) {
  const response = await fetch(LEAD_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      ...fields,
      _cc: SECONDARY_LEAD_EMAIL,
      _subject: subject,
      _captcha: 'false'
    })
  });

  if (!response.ok) {
    throw new Error(`Lead submission failed with status ${response.status}`);
  }

  const result = (await response.json()) as { success?: boolean };
  if (result.success === false) {
    throw new Error('Lead submission was rejected by the email service');
  }
}
