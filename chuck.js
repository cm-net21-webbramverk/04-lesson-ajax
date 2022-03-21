const chuckButton = document.querySelector('#chuck-button')
const chuckResults = document.querySelector('.chuck-results')

chuckButton.addEventListener('click', async () => {
	// lägg till console.log om du behöver felsöka
	const response = await fetch('https://api.chucknorris.io/jokes/random', { method: 'GET' })
	const data = await response.json()
	
	// hur datan ser ut beror på API:et
	// console.log('API response: ', data)
	chuckResults.innerText = data.value
})