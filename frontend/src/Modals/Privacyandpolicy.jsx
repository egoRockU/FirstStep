import React from 'react'

function Privacyandpolicy( isOpen, onAccept, onDecline ) {
  return (
    <>
    {isOpen && (
      <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-8 w-96 rounded-lg z-50">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Privacy Policy</h2>
          </div>
          <div className="overflow-y-auto max-h-80">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
            <div className="mt-4 flex justify-end">
            <button
              onClick={onDecline}
              className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Decline
            </button>
            <button
              onClick={onAccept}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Accept
            </button>
          </div>
          </div>
        </div>
      </div>
    )}
  </>
    )
}

export default Privacyandpolicy