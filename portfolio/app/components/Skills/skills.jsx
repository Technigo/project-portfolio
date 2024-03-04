const Skills = () => {
  return (
    <section className="flex items-center justify-center w-screen min-h-screen bg-gradient-to-r from-pink-300 to-orange-300">
      <div className="mx-4 md:mx-16 lg:mx-60">
        <h2 className="text-6xl font-bold text-white mt-32 mb-16 text-center">Skills</h2>
        <div className="grid gap-6 grid-cols-1 mb-32 md:grid-cols-2 lg:grid-cols-4">
          <div className="px-1">
            <h3 className="text-2xl font-medium text-center w-auto mb-4 text-white bg-pink-500 p-1">Code</h3>
            <ul className="text-white list-none">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript ES6</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>GitHub</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="px-1">
            <h3 className="text-2xl font-medium text-center w-auto mb-4 text-white bg-rose-500 p-1">Toolbox</h3>
            <ul className="text-white list-none">
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Visual Studio Code</li>
              <li>Wordpress</li>
              <li>Slack</li>
            </ul>
          </div>
          <div className="px-1">
            <h3 className="text-2xl font-medium mb-4 text-center w-auto text-white bg-orange-500 p-1">In progress</h3>
            <ul className="text-white list-none">
              <li>React Native</li>
              <li>GenAI</li>
              <li>Astro</li>
              <li>Vue</li>
            </ul>
          </div>
          <div className="px-1">
            <h3 className="text-2xl font-medium mb-4 text-center w-auto text-white bg-yellow-300 p-1">More</h3>
            <ul className="text-white list-none">
              <li>Journalism</li>
              <li>Social media</li>
              <li>Copywriting</li>
              <li>Video production</li>
              <li>Radio production</li>
              <li>Agile working</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
