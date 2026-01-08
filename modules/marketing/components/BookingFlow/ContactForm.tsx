"use client";
import { PhoneField } from './PhoneField';

// Reusable style for all inputs to ensure consistency
const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 outline-none text-white placeholder:text-gray-500 focus:border-purple-500 focus:bg-white/10 transition-all duration-300";
const labelStyle = "text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1 mb-1.5 block";

export function ContactForm({ state, setState, onSubmit, loading }: any) {
  if (!state) return null;

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      
      <div className="space-y-1">
        <label className={labelStyle}>Full Name *</label>
        <input 
          required 
          value={state.name} 
          onChange={e => setState({...state, name: e.target.value})} 
          className={inputStyle}
          placeholder="Your full name"
        />
      </div>

      <div className="space-y-1">
        <label className={labelStyle}>Work Email *</label>
        <input 
          required 
          type="email" 
          value={state.email} 
          onChange={e => setState({...state, email: e.target.value})} 
          className={inputStyle}
          placeholder="Your email address"
        />
      </div>

      <div className="space-y-1">
        <label className={labelStyle}>Contact Number *</label>
        <PhoneField 
          phone={state.phone} 
          setPhone={(val: string | undefined) => setState({...state, phone: val || ''})} 
        />
      </div>

      <div className="space-y-1">
        <label className={labelStyle}>The Vision</label>
        <textarea 
          required 
          value={state.idea} 
          onChange={e => setState({...state, idea: e.target.value})} 
          className={`${inputStyle} resize-none min-h-[120px]`}
          placeholder="Tell us about your project..."
        />
      </div>

      <button 
        type="submit" 
        disabled={loading} 
        className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg uppercase tracking-widest hover:bg-purple-500 active:scale-[0.98] disabled:opacity-70 transition-all shadow-lg shadow-purple-900/30 mt-4"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}