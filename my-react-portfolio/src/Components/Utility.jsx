export const fetchProjects = async (url) => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const projects = await response.json();
		return projects;
	} catch (error) {
		throw new Error("Failed to fetch projects 😔");
	}
};