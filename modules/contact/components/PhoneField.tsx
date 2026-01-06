'use client'

import Input, {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'
import type { CountryCode } from 'libphonenumber-js'

interface PhoneFieldProps {
  phone?: string
  setPhone: (value?: string) => void
  country?: CountryCode
  setCountry: (value?: CountryCode) => void
}

export function PhoneField({
  phone,
  setPhone,
  country,
  setCountry,
}: PhoneFieldProps) {

  // ✅ STABLE HANDLER (prevents infinite loop)
  const handlePhoneChange = (value?: string) => {
    if (value !== phone) {
      setPhone(value)
    }
  }

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-2">
        Contact Number
      </label>

      <div className="flex gap-3 items-center">
        {/* Country */}
        <div className="relative w-[45%]">
          <select
            value={country}
            onChange={(e) =>
              setCountry(e.target.value as CountryCode)
            }
            className="
              w-full appearance-none
              bg-white text-black
              border border-gray-300
              rounded-lg
              px-4 py-3 pr-10
              focus:outline-none focus:ring-2 focus:ring-black/20
            "
          >
            <option value="">Select</option>
            {getCountries().map((c) => (
              <option key={c} value={c}>
                {en[c]} +{getCountryCallingCode(c)}
              </option>
            ))}
          </select>

          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            ▼
          </span>
        </div>

        {/* Phone */}
        <Input
          country={country}
          value={phone}
          onChange={handlePhoneChange} // ✅ FIX
          placeholder="Phone number"
          className="
            w-full
            bg-white text-black
            border border-gray-300
            rounded-lg px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-black/20
          "
        />
      </div>
    </div>
  )
}
