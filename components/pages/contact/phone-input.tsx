"use client";

import { PhoneInput as IntPhoneInput } from "react-international-phone";
import { useFormContext, Controller } from "react-hook-form";

import "react-international-phone/style.css";

export default function PhoneInput({ name }: { name: string }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="w-full">
          <IntPhoneInput
            defaultCountry="ae"
            value={field.value}
            onChange={field.onChange}
            countrySelectorStyleProps={{
              buttonClassName: "px-1 rtl:!pe-1",
            }}
            inputClassName="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
      )}
    />
  );
}
