import { NextRequest, NextResponse } from 'next/server'
import { validateInquiryInput } from '@/lib/inquiry-schema'
import { sendInquiryEmail } from '@/lib/email'

const MAX_PAYLOAD_BYTES = 16 * 1024 // 16 KB max request body

export async function POST(req: NextRequest) {
  try {
    // 1. Bounded request size check
    const contentLength = req.headers.get('content-length')
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { success: false, error: 'PAYLOAD_TOO_LARGE', message: 'Request payload exceeds allowable limit.' },
        { status: 413 }
      )
    }

    // 2. Parse JSON body safely
    let rawBody: unknown
    try {
      const text = await req.text()
      if (text.length > MAX_PAYLOAD_BYTES) {
        return NextResponse.json(
          { success: false, error: 'PAYLOAD_TOO_LARGE', message: 'Request payload exceeds allowable limit.' },
          { status: 413 }
        )
      }
      rawBody = JSON.parse(text)
    } catch {
      return NextResponse.json(
        { success: false, error: 'INVALID_JSON', message: 'Malformed JSON payload.' },
        { status: 400 }
      )
    }

    // 3. Server-side validation
    const validation = validateInquiryInput(rawBody)
    if (!validation.success || !validation.data) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_FAILED',
          errors: validation.errors,
        },
        { status: 400 }
      )
    }

    // 4. Send email through configured provider adapter
    const delivery = await sendInquiryEmail(validation.data)

    if (!delivery.ok) {
      if (delivery.error === 'EMAIL_SERVICE_NOT_CONFIGURED') {
        return NextResponse.json(
          {
            success: false,
            error: 'EMAIL_SERVICE_NOT_CONFIGURED',
            message:
              'Email delivery is currently awaiting configuration. Please contact us directly at echo@schedence.xyz.',
          },
          { status: 503 }
        )
      }

      return NextResponse.json(
        {
          success: false,
          error: 'DELIVERY_FAILED',
          message:
            'Unable to deliver inquiry message at this time. Please contact us directly at echo@schedence.xyz.',
        },
        { status: delivery.status || 502 }
      )
    }

    // 5. Genuine delivery success
    return NextResponse.json({
      success: true,
      message: 'Your institutional inquiry has been received. We will follow up directly.',
    })
  } catch (err) {
    // Non-sensitive server error reporting
    return NextResponse.json(
      {
        success: false,
        error: 'INTERNAL_ERROR',
        message: 'An unexpected error occurred. Please contact us at echo@schedence.xyz.',
      },
      { status: 500 }
    )
  }
}
