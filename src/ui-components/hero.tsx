import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Main content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-normal mb-2 text-center">
          Build Beautiful React Apps
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
          Faster With VisiUI
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-center text-gray-300">
          Supercharge your development with a powerful library of UI components
          designed to improve productivity and code quality for React developers.
        </p>
        <div className="text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300">
            Explore The Components
            <svg className="w-5 h-5 ml-2 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-1/2">
        <div className="w-full h-full bg-purple-600 rounded-full opacity-30 filter blur-3xl transform translate-y-1/2 translate-x-1/4"></div>
      </div>
    </div>
  )
}

export default Hero