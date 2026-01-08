"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { BookingSelector } from './BookingSelectors';
import { ContactForm } from './ContactForm';
import { submitBooking, rescheduleBooking } from './actions';

export default function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{ id: string, date: Date, time: string, type: number } | null>(null);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', idea: '', country: 'IN' as any
  });
  
  const [bookingMeta, setBookingMeta] = useState({
    date: new Date(), time: '', type: 15
  });

  useEffect(() => {
    if (open) {
      if (confirmedBooking) {
        setStep(1);
        setBookingMeta({
          date: confirmedBooking.date,
          time: confirmedBooking.time,
          type: confirmedBooking.type
        });
      } else {
        setStep(1);
      }
    }
  }, [open]); 

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const res = await submitBooking({
      ...formData,
      timeline: 'Flexible', 
      bookingDate: bookingMeta.date,
      timeSlot: bookingMeta.time,
      meetingType: bookingMeta.type
    });
    
    if (res.success && res.id) {
      setConfirmedBooking({ 
        id: res.id, 
        date: bookingMeta.date, 
        time: bookingMeta.time,
        type: bookingMeta.type
      });
      setStep(3);
    }
    setLoading(false);
  };

  const handleReschedule = async () => {
    if (!confirmedBooking?.id) return;
    setLoading(true);
    const res = await rescheduleBooking(
      confirmedBooking.id,
      bookingMeta.date,
      bookingMeta.time,
      bookingMeta.type
    );
    if (res.success && res.id) {
      setConfirmedBooking({ 
        id: res.id, 
        date: bookingMeta.date, 
        time: bookingMeta.time,
        type: bookingMeta.type
      });
      setStep(3);
    }
    setLoading(false);
  }

  const isTimeChanged = confirmedBooking 
    ? (format(bookingMeta.date, 'PP') !== format(confirmedBooking.date, 'PP') || 
       bookingMeta.time !== confirmedBooking.time)
    : false;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} 
        className="relative bg-[#0f0f17] w-full max-w-5xl rounded-[32px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-white/10"
      >
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col h-full">
          
          {/* --- STEP 1: Calendar (Dark Theme) --- */}
          {step === 1 && (
            <div className="text-white flex flex-col h-full">
              <div className="mb-6">
                {confirmedBooking ? (
                   <div className="inline-flex items-center gap-2.5 bg-purple-500/20 text-purple-300 border border-purple-500/50 px-4 py-2 rounded-full mb-6">
                     <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                     </span>
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Existing Booking Found</span>
                   </div>
                ) : null}
                
                <h3 className="text-4xl font-black tracking-tight text-white mb-2 italic">
                  {confirmedBooking ? "Update Session" : "Discovery Session"}
                </h3>
                <p className="text-gray-400 font-medium">
                  {confirmedBooking 
                    ? "Select a new window for our conversation." 
                    : "Secure a time for your initial strategy briefing."}
                </p>
              </div>
              
              <BookingSelector 
                selectedDate={bookingMeta.date} 
                onDateSelect={(d: any) => setBookingMeta({...bookingMeta, date: d})}
                selectedTime={bookingMeta.time} 
                onTimeSelect={(t: any) => setBookingMeta({...bookingMeta, time: t})}
                meetingType={bookingMeta.type} 
                setMeetingType={(t: number) => setBookingMeta(prev => ({ ...prev, type: t, time: '' }))}
              />

              {/* ACTION AREA - Right Aligned & Small Button */}
              {/* NEW BUTTON LAYOUT: Aligned to Right, Purple, Small */}
              <div className="mt-8 flex justify-center pt-6 border-t border-white/5">
                {confirmedBooking ? (
                  <button 
                    disabled={!isTimeChanged || loading} 
                    onClick={handleReschedule} 
                    className="px-8 py-3 bg-purple-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:bg-purple-500 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-purple-900/40"
                  >
                    {loading ? "Updating..." : "Confirm Update"}
                  </button>
                ) : (
                  <button 
                    disabled={!bookingMeta.time} 
                    onClick={() => setStep(2)} 
                    className="px-8 py-3 bg-purple-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:bg-purple-500 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-purple-900/40"
                  >
                    Proceed to Details →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* --- STEP 2: The Dark Form (Existing) --- */}
          {step === 2 && (
             /* ... Same as previous step, ensure you keep the existing grid layout code here ... */
             /* I'm condensing this part for brevity, assume the code from the previous turn is here */
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-5 flex flex-col">
                <button 
                  onClick={() => setStep(1)} 
                  className="group flex items-center gap-2 text-gray-400 mb-8 hover:text-white transition-colors font-bold text-xs uppercase tracking-widest"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Calendar
                </button>
                <div className="mb-auto">
                  <h3 className="text-4xl font-black tracking-tight text-white mb-4">Meet with Fluxenta</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10">Let us show you how we can transform your vision into a scalable digital reality.</p>
                  <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl">🚀</div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Fluxenta Team</h4>
                      <p className="text-gray-400 text-sm">Digital Product Studio</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7">
                <ContactForm state={formData} setState={setFormData} onSubmit={handleFinalSubmit} loading={loading} />
              </div>
            </div>
          )}

          {/* --- STEP 3: Success (Dark Theme) --- */}
          {step === 3 && (
            <div className="text-center py-16 animate-in zoom-in duration-500 text-white">
              <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 text-purple-500">✓</div>
              <h2 className="text-3xl font-black mb-4 uppercase italic">{confirmedBooking ? "Schedule Updated" : "Session Confirmed"}</h2>
              <p className="text-gray-400 max-w-sm mx-auto mb-10 text-lg">
                {confirmedBooking ? "Your appointment has been moved successfully." : "Your slot is secured. A calendar invitation is on its way."}
              </p>
              <button onClick={onClose} className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors">Close Window</button>
            </div>
          )}
        </div>
        
        <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all">✕</button>
      </motion.div>
    </div>
  );
}