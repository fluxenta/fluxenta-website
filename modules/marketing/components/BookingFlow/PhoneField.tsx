"use client";
import React, { useState, useRef, useEffect } from 'react';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import Input from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';

interface PhoneFieldProps {
  phone: string;
  setPhone: (val: string | undefined) => void;
}

const getFlagEmoji = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export function PhoneField({ phone, setPhone }: PhoneFieldProps) {
  const [country, setCountry] = useState<any>('IN');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCountrySelect = (c: any) => {
    setCountry(c);
    setIsOpen(false);
    setPhone("");
  };

  // Base style matching ContactForm inputs
  const boxStyle = "h-[54px] bg-white/5 border border-white/10 rounded-xl flex items-center transition-all duration-300 focus-within:border-purple-500 focus-within:bg-white/10";

  return (
    <div className="flex gap-3" ref={dropdownRef}>
      
      {/* Country Selector Box */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`${boxStyle} px-3 gap-2 min-w-[110px] hover:border-white/30`}
        >
          <span className="text-2xl leading-none">{getFlagEmoji(country)}</span>
          <span className="text-sm font-bold text-white">
            +{getCountryCallingCode(country)}
          </span>
          <span className="text-[10px] text-gray-400 ml-auto">▼</span>
        </button>

        {/* Dark Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-[300px] bg-[#1a1a24] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="max-h-[220px] overflow-y-auto custom-scrollbar p-1">
              {getCountries().map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => handleCountrySelect(c)}
                  className={`w-full text-left px-4 py-3 text-sm font-bold flex items-center gap-3 rounded-lg transition-colors
                    ${country === c ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-white/5'}`}
                >
                  <span className="text-xl">{getFlagEmoji(c)}</span>
                  <span className="flex-1">{en[c]}</span>
                  <span className="opacity-50">+{getCountryCallingCode(c)}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Phone Input Box */}
      <div className={`${boxStyle} flex-1 px-4`}>
        <Input
          country={country}
          value={phone}
          onChange={setPhone}
          placeholder="Your phone number"
          className="w-full bg-transparent outline-none text-white placeholder:text-gray-500 font-medium"
          maxLength={16}
        />
      </div>
    </div>
  );
}