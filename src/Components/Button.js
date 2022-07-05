import React from "react";

export default function Button() {
  return (
    <div className="flex content-center">
      <div className="flex mx-auto mt-4 space-x-3 lg:mt-6">
        <a
          href="# "
          className=" text-xs inline-flex items-center py-2 px-2  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add friend
        </a>
        <a
          href="# "
          className="inline-flex items-center py-2 px-2  font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
        >
          Message
        </a>
      </div>
    </div>
  );
}
