const toggle = document.getElementById('theme-toggle')

const storedTheme =
	localStorage.getItem('theme') ||
	(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
if (storedTheme)
	document.documentElement.setAttribute('data-theme', storedTheme)

toggle.onclick = function () {
	const currentTheme = document.documentElement.getAttribute('data-theme')
	let targetTheme = 'light'
	document.querySelector('.d-none').textContent = 'dark mode'

	if (currentTheme === 'light') {
		targetTheme = 'dark'
		document.querySelector('.d-none').textContent = 'light mode'
	}

	document.documentElement.setAttribute('data-theme', targetTheme)
	localStorage.setItem('theme', targetTheme)
}
