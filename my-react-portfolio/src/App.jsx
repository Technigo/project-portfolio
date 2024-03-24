import "./App.css"
import Header from "../src/components/Header.jsx"
import Lead from "../src/components/Lead.jsx"
import Projects from "../src/components/Projects.jsx"
import Skills from "../src/components/Skills.jsx"
import Contact from "../src/components/Contact.jsx"

export const App = () => {
	return (
		<>
			<Header />
			<Lead />
			<Projects />
			<Skills />
			<Contact />
		</>
	)
}

export default App
