/* 

Zdravím! Rád bych vám představil malý projekt s názvem Quiz. 
Tento script zobrazuje text na stránce znak po znaku a zobrazuje tlačítko 'Start' pro pokračování v kvízu.
K tomu nám slouží JavaScript kód, který se skládá z několika částí.

V první části kódu nastavíme proměnné pro pole textových řetězců, generování náhodného zpoždění, aktuální řetězcové a znakové indexy a mezivýsledek textového výstupu.

Vytváření proměnných:
pole textových řetězců "text" obsahující uvítací zprávu a pokyny pro spuštění kvízu;
proměnná "animationDelay", která generuje náhodné zpoždění pro animaci výstupu textu;
proměnná "line", která ukládá aktuální index řádku do pole "text";
proměnná "count", která ukládá aktuální index znaků v řetězci;
proměnná "result", která obsahuje mezivýsledek textového výstupu.

Funkce "typeLine()", která zobrazuje text na stránce znak po znaku. Tato funkce používá setTimeout() ke generování zpoždění mezi znaky.
Po vytištění každého znaku funkce aktualizuje proměnnou "result" a nastaví novou hodnotu pro prvek h1 na stránce. 

Každý znak se přidá k mezivýsledku, který se pak zobrazí na stránce v prvku h1. Po vypsání celého řádku se funkce přesune na další řádek,
a pokud byly vykresleny všechny řádky, zavolá funkci 'showButton()', která na stránce zobrazí tlačítko 'Start'.

V kódu je navíc funkce 'getRandomInt()', která generuje náhodné číslo v daném rozsahu.

Ve výsledku získáme animovaný textový výstup a tlačítko pro spuštění kvízu.
*/

const text = [
	'Welcome to the Quiz project.<br>',
	'Click the Start button to continue.',
]
const animationDelay = getRandomInt(getRandomInt(210 * 1.75))
let line = 0
let count = 0
let result = ''

function typeLine() {
	const interval = setTimeout(() => {
		result += text[line][count]
		document.querySelector('h1').innerHTML = result + '|'
		count++
		if (count >= text[line].length) {
			count = 0
			line++
			if (line === text.length) {
				clearTimeout(interval)
				document.querySelector('h1').innerHTML = result
				showButton()
				return true
			}
		}
		typeLine()
	}, animationDelay)
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max))
}

function showButton() {
	const customBtn = document.getElementById('custom-btn')
	customBtn.style.visibility = 'visible'
	customBtn.style.opacity = '1'
}

typeLine()
