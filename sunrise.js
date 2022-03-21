// plocka ut element ur DOM
const button = document.querySelector('#sunrise-button')
const resultSection = document.querySelector('.results')

let position = {
	lat: 57.669950,
	lon: 12.008410
}

button.addEventListener('click', async () => {
	const url = `https://api.sunrise-sunset.org/json?lat=${position.lat}&lng=${position.lon}`
	console.log('About to send request: ', url)
	const response = await fetch(url)
	const data = await response.json()

	console.log('Response from API:', data)
	resultSection.innerText = `The sun rose today at ${data.results.sunrise}.`
	 
})