<div className="flex flex-col items-center mt-8">
      <div className="backdrop-blur-md bg-white/30 p-10 rounded-xl shadow-xl">
      <h1 className="text-2xl font-bold mb-4">What movie do you want to watch?</h1>
      <div className="flex flex-col items-center space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="Barbie"
            checked={selectedMovie === 'Barbie'}
            onChange={handleSelectionChange}
          />
          Barbie
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="Oppenheimer"
            checked={selectedMovie === 'Oppenheimer'}
            onChange={handleSelectionChange}
          />
          Oppenheimer
        </label>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={handleNext}
      >
        Next
        </button>
        </div>
    </div>
  );
} 

//example from sara - tailwind
//amanda and whadans pair project - class component like evelyn 
//picture - assets?