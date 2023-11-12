function App() {

  return (
      <div className="container h-screen w-screen mx-auto flex items-center justify-center">
        <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 mx-4 rounded-md">
        <div className="flex flex-row items-center">
        <img className="w-24 rounded-full"
        alt="User Avatar"
        src="https://avatars.githubusercontent.com/u/120386705?v=4"/>

        <div
        className="ml-4">
          <h3 className="font-semibold text-2xl">Filipe Branco</h3>
          <h4 className="text-indigo-400 text-xl pt-1">Full Stack Web Developer</h4>
        </div>
        </div> 

        <div className="mt-6">
          <h2 className="font-semibold text-3xl mb-2">Bio</h2>
          <p className="text-gray300 font-light mt-1 max-w-lg text-lg text-justify">I worked in tech support for 4 years,
which gave me a broad view of the tech
world, the tools needed for problem
solving and great experience in
customer support. My 5 years as a flight
attendant in a multi-cultural
environment taught me how to work in a
team. The daily challenges made me a
quick-thinker.</p>
        </div>

        <div className="mt-6">
        <h2 className="font-semibold text-3xl mb-2">Career</h2>
        <div className="mt-4">
          <h3 className="text-yellow-500 font-medium text-xl mt-1">Vodafone</h3>
          <ul className="list-disc list-inside pl-4">
            <li className="list-item">Customer Service Representative.</li>
            <li className="list-item">Tech Support: TV, internet and smartphone. </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-yellow-500 font-medium text-xl mt-1">Ryanair</h3>
          <ul className="list-disc list-inside pl-4">
            <li className="list-item">Cabin Crew.</li>
            <li className="list-item">Responsible for the safety and comfort of passengers.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-yellow-500 font-medium text-xl mt-1">easyJet</h3>
          <ul className="list-disc list-inside pl-4">
            <li className="list-item">Cabin Crew.</li>
            <li className="list-item">Tasks included inspecting safety equipment, emergency and first aid procedures.</li>
            <li className="list-item">Responsible for public announcements in multiple languages.</li>
          </ul>
        </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-3xl mb-2">Skills</h2>
          <ul className="list-disc list-inside pl-4">
            <li className="list-item">HTML & CSS.</li>
            <li className="list-item">JavaScript & React.</li>
            <li className="list-item">MongoDB, NODE.js</li>
            <li className="list-item">Spoken languages: English, Portuguese, German, Italian.</li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
