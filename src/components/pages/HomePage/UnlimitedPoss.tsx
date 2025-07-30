import React from 'react'

const UnlimitedPoss: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/others/BearishUnliPoss.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[600px] px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          One OS.<br />
          Unlimited Possibilities
        </h1>
        <p className="mt-6 text-xl font-semibold">
          As low as $39/seat per month
        </p>
        <p className="mt-2 italic text-base max-w-md">
          View our pricing calculator and see how much you can save
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4">
          <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-6 rounded-md transition">
            View Pricing
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium py-2 px-6 rounded-md transition">
            Start free now
          </button>
        </div>
      </div>
    </section>
  )
}

export default UnlimitedPoss
