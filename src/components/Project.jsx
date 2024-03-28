import "./Project.css"

export const Project=()=> {
   /* const userName = [
    'jingh999',
    'vittoriamatteoli',
    'lunek1'
  ] */

  fetch(`https://api.github.com/users/jingh999/repos`)
    .then(res => res.json())
    .then(
      json=>{
        const filteredRepo=json.filter(repo=>projectNames.includes(repo.name))
        console.log(filteredRepo)
      })

  const projectNames = [
    'Chatbot',
    'w3-project-library',
    'w4-project-weather-app',
    'w5-project-music-releases-vite',
    'project-survey-vite',
    'w7-project-happy-thoughts-vite',
  ]  



  return (
    <div className="project">
      <img src="" alt="" className="projectCover" />
      <div className="projectDetail">
        <h4 className="projectTitle">Chatbox built in JavaScript</h4>
        
        <p className="projectIntro">The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.</p>
        
        {/* <div className="skills">HTML5</div>
        <div className="external link">
          <button>Live demo</button>
          <button>View the code</button>
        </div> */}
      </div>
    </div>
  )
}
