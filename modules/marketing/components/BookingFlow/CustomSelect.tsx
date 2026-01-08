"use client";
import { useState, useRef, useEffect } from 'react';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: Option[];
}

export function CustomSelect({ label, value, onChange, options }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find(o => o.value === value)?.label || value;

  return (
    <div className="space-y-1 relative" ref={ref}>
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
        {label}
      </label>
      
      {/* The Trigger Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-[52px] flex items-center justify-between border-b-2 bg-white px-2 cursor-pointer transition-all
          ${isOpen ? 'border-black' : 'border-gray-100 hover:border-gray-300'}`}
      >
        <span className="text-lg font-medium text-black">{selectedLabel}</span>
        <span className={`text-[10px] text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </div>

      {/* The Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl z-[60] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="max-h-[200px] overflow-y-auto custom-scrollbar p-1">
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 text-sm font-bold cursor-pointer rounded-lg transition-colors
                  ${value === opt.value ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}
              >
                {opt.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}