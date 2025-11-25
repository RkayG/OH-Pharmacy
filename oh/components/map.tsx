"use client";

const PHARMACY_ADDRESS_QUERY =
  "6%20-%208%20Longmarket%20Canterbury%20CT1%202JS%20United%20Kingdom";

export default function Map() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden bg-gray-200">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${PHARMACY_ADDRESS_QUERY}&z=17&output=embed`}
        title="OH Health + Pharmacy location"
        aria-label="Map showing OH Health + Pharmacy, 6-8 Longmarket, Canterbury, CT1 2JS"
      />
    </div>
  );
}
