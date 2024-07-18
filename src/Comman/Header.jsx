import React from 'react'

const Header = () => {
  return (
    <div>
    
      <div className="flex w-full h-12 items-center justify-between bg-purple-700">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 mr-2" />
          <h2 className="text-xl font-bold text-white">TableSprint</h2>
        </div>
        <div className="text-white">Home</div>
      </div>

    </div>
  )
}

export default Header