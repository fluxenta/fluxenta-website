"use server";

import { prisma } from '@/app/lib/prisma';
import { sendInternalNotification } from "@/app/lib/notifications"; // Ensure this file exists from the previous step

export async function submitBooking(data: any) {
  try {
    // 1. Data Cleaning: Handle Next.js Server Action date serialization quirks
    // Sometimes dates come as "$D2024..." strings which crash Prisma
    const cleanDateString = typeof data.bookingDate === 'string' && data.bookingDate.startsWith('$D') 
      ? data.bookingDate.substring(2) 
      : data.bookingDate;
      
    const finalDate = new Date(cleanDateString);

    // 2. Database Creation
    const booking = await prisma.booking.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        idea: data.idea,
        timeline: data.timeline,
        bookingDate: finalDate,
        timeSlot: data.timeSlot,
        meetingType: data.meetingType,
      },
    });

    // 3. Trigger Email Notification (Non-blocking)
    // We await this so the logs show up, but inside a try/catch in the helper handles failures silently
    await sendInternalNotification('NEW', {
      ...data,
      bookingDate: finalDate, // Send the clean Date object to the email template
    });

    return { success: true, id: booking.id };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, message: "Failed to sync with Mission Control." };
  }
}

export async function rescheduleBooking(bookingId: string, newDate: Date, newTime: string, meetingType: number) {
  try {
    // 1. Database Update
    // We capture the result in 'updated' so we can use the client's name/email for the notification
    const updated = await prisma.booking.update({
      where: { id: bookingId },
      data: {
        bookingDate: new Date(newDate),
        timeSlot: newTime,
        meetingType: meetingType
      }
    });

    // 2. Trigger Email Notification
    await sendInternalNotification('RESCHEDULE', {
      name: updated.name,      // Fetched from DB
      email: updated.email,    // Fetched from DB
      phone: updated.phone,    // Fetched from DB
      bookingDate: new Date(newDate),
      timeSlot: newTime,
      meetingType: meetingType,
      idea: "(Rescheduled - See original record in Supabase for full details)" 
    });

    return { success: true, id: updated.id };
  } catch (error) {
    console.error("Reschedule Error:", error);
    return { success: false };
  }
}