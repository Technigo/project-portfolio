import "./App.css"
import { Header } from "./components/Header.jsx"
import { Lead } from "./components/Lead.jsx"
import { Projects } from "./components/Projects.jsx"
import { Skills } from "./components/Skills.jsx"
import { Contact } from "./components/Contact.jsx"

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
