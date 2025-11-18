export const UploadFallback = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-700 p-8 text-center">
      <div className="flex flex-col items-center">
        <svg
          className="mb-4 h-12 w-12 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.55a2.5 2.5 0 010 4.09l-4.55 2.55M4 12h11M4 12a2 2 0 01-2-2V8a2 2 0 012-2h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H11m4 8a2 2 0 002-2v-2a2 2 0 00-2-2h-1.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293H4"
          />
        </svg>
        <h3 className="text-xl font-bold text-white">Camera is off</h3>
        <p className="text-gray-400">
          Click the button below to start the camera.
        </p>
      </div>
    </div>
  )
}
