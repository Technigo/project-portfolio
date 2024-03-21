async function fetchRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/JosephineOderland/repos"
    )
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error)
  }

  return []
}

export { fetchRepos }
