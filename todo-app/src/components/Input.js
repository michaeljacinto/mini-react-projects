import React from "react";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function Input() {
    return (
        <div className="pt-4">
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                {/* // <div class="items-center"> */}
                < label htmlFor="price" className="block text-sm font-medium text-gray-700" >
                    Price
                </label >
                <div className="flex-shrink-0">
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                                Currency
                            </label>
                            <select
                                id="currency"
                                name="currency"
                                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                            >
                                <option>USD</option>
                                <option>CAD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}