import "./App.css"
import { Header } from "./components/header/Header.jsx"
import { Lead } from "./components/leadtext/Lead.jsx"
import { Projects } from "./components/projects/Projects.jsx"
import { Skills } from "./components/skills/Skills.jsx"
import { Contact } from "./components/contact/Contact.jsx"

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
