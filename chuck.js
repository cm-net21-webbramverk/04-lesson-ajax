// hämta DOM-elementen som ska manipuleras
const chuckButton = document.querySelector('#chuck-button')
const chuckResults = document.querySelector('.chuck-results')
const chuckImage = document.querySelector('#chuck-icon')

// Klickhändelse på knappen
chuckButton.addEventListener('click', async () => {
	// lägg till console.log om du behöver felsöka

	// Skicka ett HTTP GET request till API:et,
	// vänta på att få svar från servern
	const response = await fetch('https://api.chucknorris.io/jokes/random', { method: 'GET' })

	// Omvandla svaret till ett JavaScript-objekt mha JSON
	const data = await response.json()
	
	// hur datan ser ut beror på API:et
	// console.log('API response: ', data)

	// Uppdatera DOM-elementen i appen med informationen som vi fick från API:et
	chuckResults.innerText = data.value
	chuckImage.src = data.icon_url
})