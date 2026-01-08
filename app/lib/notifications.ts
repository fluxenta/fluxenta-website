import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInternalNotification(
  type: 'NEW' | 'RESCHEDULE', 
  data: any
) {
  const subject = type === 'NEW' 
    ? `🚀 New Lead: ${data.name}` 
    : `🗓️ Rescheduled: ${data.name} (Updated Time)`;

  try {
    await resend.emails.send({
      from: 'Fluxenta System <onboarding@resend.dev>', // Use your verified domain if you have one
      to: process.env.COMPANY_EMAIL as string,
      replyTo: data.email, // Allows you to just hit "Reply" to email the client
      subject: subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000;">${type === 'NEW' ? 'New Discovery Session Booked' : 'Session Rescheduled'}</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; color: #666;"><strong>Client Name</strong></td>
              <td style="padding: 10px 0;">${data.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; color: #666;"><strong>Email</strong></td>
              <td style="padding: 10px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; color: #666;"><strong>Phone</strong></td>
              <td style="padding: 10px 0;">${data.phone || 'N/A'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; color: #666;"><strong>Proposed Date</strong></td>
              <td style="padding: 10px 0; font-size: 16px; font-weight: bold;">
                ${new Date(data.bookingDate).toDateString()} @ ${data.timeSlot}
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; color: #666;"><strong>Duration</strong></td>
              <td style="padding: 10px 0;">${data.meetingType} Minutes</td>
            </tr>
            ${data.idea ? `
            <tr>
              <td colspan="2" style="padding-top: 20px; color: #666;"><strong>Project Vision:</strong></td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 10px 0; line-height: 1.6;">${data.idea}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 30px; padding: 15px; background: #f5f5f5; border-radius: 8px; font-size: 12px; color: #888;">
            Sent from Fluxenta Web System
          </div>
        </div>
      `
    });
    console.log("Notification email sent successfully.");
  } catch (error) {
    console.error("Failed to send email:", error);
    // We don't throw error here to avoid blocking the user's success screen
  }
}