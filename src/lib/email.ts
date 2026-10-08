import { InquiryFormData, INQUIRY_TYPE_LABELS } from './inquiry-schema'

export type EmailDeliveryResult =
  | { ok: true; id: string }
  | { ok: false; error: string; status: number }

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function sendInquiryEmail(
  data: Omit<InquiryFormData, '_hp'>
): Promise<EmailDeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const recipient = (process.env.INQUIRY_RECIPIENT_EMAIL || 'echo@schedence.xyz').trim()
  const fromEmail = (process.env.INQUIRY_FROM_EMAIL || 'Schedence Inquiries <inquiries@schedence.xyz>').trim()

  // 1. Strict check: If Resend API key is not configured, do NOT simulate delivery.
  if (!apiKey) {
    return {
      ok: false,
      error: 'EMAIL_SERVICE_NOT_CONFIGURED',
      status: 503,
    }
  }

  const typeLabel = INQUIRY_TYPE_LABELS[data.inquiryType] || data.inquiryType
  const subject = `[Schedence Inquiry] ${typeLabel} — ${data.institution}`

  // 2. Safe plain text format
  const textBody = [
    `NEW INSTITUTIONAL INQUIRY — SCHEDENCE`,
    `======================================`,
    `Inquiry Type: ${typeLabel}`,
    `Full Name:    ${data.fullName}`,
    `Institution:  ${data.institution}`,
    `Work Email:   ${data.email}`,
    data.role ? `Role/Position: ${data.role}` : null,
    `Date & Time:  ${new Date().toISOString()}`,
    ``,
    `Message / Scheduling Requirements:`,
    `--------------------------------------`,
    data.message,
    ``,
    `======================================`,
    `Reply directly to this email to contact ${data.fullName} at ${data.email}.`,
  ]
    .filter(Boolean)
    .join('\n')

  // 3. Safe HTML format with HTML escaping
  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0b1b33; line-height: 1.6; margin: 0; padding: 24px; background-color: #fafbfc; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 28px; }
    .badge { display: inline-block; padding: 4px 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; background: #eff6ff; color: #1d4ed8; border-radius: 4px; }
    h1 { font-size: 20px; font-weight: 600; color: #0b1b33; margin: 16px 0 20px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    td { padding: 8px 0; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    td.label { color: #5b6b82; width: 140px; font-weight: 500; }
    td.value { color: #0b1b33; font-weight: 500; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; font-size: 14px; color: #334155; white-space: pre-wrap; word-break: break-word; }
    .footer { margin-top: 24px; font-size: 12px; color: #5b6b82; border-top: 1px solid #e2e8f0; pt: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">${escapeHtml(typeLabel)}</span>
    <h1>New Institutional Inquiry</h1>
    <table>
      <tr><td class="label">Full Name</td><td class="value">${escapeHtml(data.fullName)}</td></tr>
      <tr><td class="label">Institution</td><td class="value">${escapeHtml(data.institution)}</td></tr>
      <tr><td class="label">Work Email</td><td class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
      ${data.role ? `<tr><td class="label">Role / Position</td><td class="value">${escapeHtml(data.role)}</td></tr>` : ''}
      <tr><td class="label">Submitted At</td><td class="value">${escapeHtml(new Date().toISOString())}</td></tr>
    </table>
    <div style="margin-bottom: 8px; font-size: 13px; font-weight: 600; color: #5b6b82; text-transform: uppercase; letter-spacing: 0.05em;">Message / Scheduling Requirements</div>
    <div class="message-box">${escapeHtml(data.message)}</div>
    <div class="footer">
      This inquiry was submitted through schedence.xyz. Hit reply to contact ${escapeHtml(data.fullName)} directly at ${escapeHtml(data.email)}.
    </div>
  </div>
</body>
</html>
  `.trim()

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipient],
        reply_to: data.email, // Validated submitter's email as reply-to
        subject,
        text: textBody,
        html: htmlBody,
      }),
    })

    if (!res.ok) {
      // NOTE: We do NOT log user inputs, institution names, emails, or API keys here
      const errorJson = (await res.json().catch(() => ({}))) as { message?: string }
      return {
        ok: false,
        error: errorJson.message || 'EMAIL_DISPATCH_FAILED',
        status: res.status >= 500 ? 502 : 400,
      }
    }

    const json = (await res.json()) as { id?: string }
    return {
      ok: true,
      id: json.id || 'dispatched',
    }
  } catch (err) {
    // Network or serverless connection failure
    return {
      ok: false,
      error: 'EMAIL_NETWORK_ERROR',
      status: 502,
    }
  }
}
