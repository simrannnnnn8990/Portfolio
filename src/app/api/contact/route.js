
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const body = await request.json()

    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: 'Name, email and message are required.',
        },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message: 'Please enter a valid email address.',
        },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Simran Gautam" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,

      // Visitor ko reply karne ke liye
      replyTo: email,

      subject: `Portfolio Contact — ${name}`,

      // Normal plain-text email
      text: `Hi Simran,

You received a new message through your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}

—
This message was sent through your portfolio contact form.
`,
    })

    return Response.json({
      success: true,
      message: 'Message sent successfully.',
    })
  } catch (error) {
    console.error('Contact form error:', error)

    return Response.json(
      {
        success: false,
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    )
  }
}

