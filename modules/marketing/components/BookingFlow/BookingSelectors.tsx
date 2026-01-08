"use client";
import { format, addDays, startOfToday } from 'date-fns';
import { TIME_SLOTS_15, TIME_SLOTS_30 } from './constants';

export function BookingSelector({ selectedDate, onDateSelect, selectedTime, onTimeSelect, meetingType, setMeetingType }: any) {
  const slots = meetingType === 15 ? TIME_SLOTS_15 : TIME_SLOTS_30;

  // Shared styles for dark mode interactive elements
  const cardBase = "transition-all duration-300 border backdrop-blur-sm";
  const cardIdle = "bg-white/5 border-white/10 text-gray-300 hover:border-purple-500/50 hover:bg-white/10";
  const cardActive = "bg-purple-600 border-purple-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]";

  return (
    <div className="grid md:grid-cols-2 gap-12 py-4">
      
      {/* LEFT COLUMN: Date Selection */}
      <div className="space-y-6">
        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">1. Select Date</h4>
        <div className="grid grid-cols-4 gap-3">
          {[...Array(12)].map((_, i) => {
            const date = addDays(startOfToday(), i);
            const isSelected = format(date, 'PP') === format(selectedDate, 'PP');
            return (
              <button 
                key={i} 
                type="button"
                onClick={() => onDateSelect(date)}
                className={`group p-3 rounded-2xl flex flex-col items-center justify-center gap-1 ${cardBase}
                  ${isSelected ? `${cardActive} scale-105` : cardIdle}`}
              >
                <span className={`text-[10px] uppercase font-bold ${isSelected ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-300'}`}>
                  {format(date, 'eee')}
                </span>
                <span className="text-xl font-black tracking-tighter">
                  {format(date, 'd')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT COLUMN: Duration & Time */}
      <div className="space-y-6">
        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">2. Duration & Slot</h4>
        
        {/* Toggle Switch */}
        <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10">
          {[15, 30].map(t => (
            <button 
              key={t} 
              type="button"
              onClick={() => setMeetingType(t)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 
                ${meetingType === t ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              {t} Min Sync
            </button>
          ))}
        </div>
        
        {/* Time Grid */}
        <div className="grid grid-cols-2 gap-3 max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
          {slots.map(slot => (
            <button 
              key={slot} 
              type="button"
              onClick={() => onTimeSelect(slot)}
              className={`py-3.5 rounded-xl text-xs font-bold ${cardBase}
                ${selectedTime === slot ? cardActive : cardIdle}`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}