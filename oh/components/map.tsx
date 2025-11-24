"use client";
import { useEffect, useState } from "react";

export default function Map() {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
    null
  );

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        console.log("Error getting location: ", err);
      }
    );
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden bg-gray-200">
      {coords ? (
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`}
        ></iframe>
      ) : (
        <p className="flex items-center justify-center h-full">
          Getting your location…
        </p>
      )}
    </div>
  );
}
