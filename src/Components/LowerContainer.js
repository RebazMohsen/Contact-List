import React from "react";

export default function LowerContainer() {
  return (
    <div className="bg-blue-100 py-1 text-sm text-bold px-4 text-gray-500 mt-1  rounded-md">
      <div className="flex  px-1  py-2  ">
        <svg
          class="h-5 w-5 text-gray-900 mt-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />{" "}
          <path d="M15 7a2 2 0 0 1 2 2" /> <path d="M15 3a6 6 0 0 1 6 6" />
        </svg>
        <div>
          <p className="text-sm">
            <span className="font-bold ml-1">Phone:</span> 0750 000 00 00
          </p>
        </div>
      </div>
      <div className="flex  px-1  py-2  ">
        <svg
          class="h-5 w-5 text-gray-900 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>

        <div>
          <p className="text-sm">
            <span className="font-bold ml-1">Email:</span> name@example.com
          </p>
        </div>
      </div>
      <div className="flex  px-1  py-2  ">
        <svg
          class="h-5 w-5 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <div>
          <p className="text-sm">
            <span className="font-bold ml-1">Location:</span> Address
          </p>
        </div>
      </div>
    </div>
  );
}
