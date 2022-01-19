const TODOS_API = '/api/todos'
const addButton = document.querySelector('.addButton')
var input = document.querySelector('.input')
const container = document.querySelector('.container')

class item {
	constructor(item) {
		this.createDiv(item)
	}
	createDiv(item) {
		let input = document.createElement('input')
		input.value = item.record
		input.disabled = true
		input.classList.add('item_input')
		input.type = 'text'

		let itemBox = document.createElement('div')
		itemBox.classList.add('item')
		itemBox.id = item._id

		let editButton = document.createElement('button')
		editButton.innerHTML = 'EDIT'
		editButton.classList.add('editButton')

		let removeButton = document.createElement('button')
		removeButton.innerHTML = 'REMOVE'
		removeButton.classList.add('removeButton')

		container.appendChild(itemBox)

		itemBox.appendChild(input)
		itemBox.appendChild(editButton)
		itemBox.appendChild(removeButton)

		editButton.addEventListener('click', () => this.edit(input))

		removeButton.addEventListener('click', () => this.remove(itemBox, input.value))
	}

	async edit(input) {
		const newInput = prompt('Enter new msg:', input.value)
		input.value = newInput
		await fetch(TODOS_API, {
			method: 'PATCH',
			body: JSON.stringify({ id: input.closest('.item')?.id, record: newInput }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}

	async remove(item, value) {
		container.removeChild(item)
		await fetch(`${TODOS_API}/${item.id}`, {
			method: 'DELETE',
		})
	}
}

async function check() {
	if (input.value != '') {
		const response = await fetch(TODOS_API, {
			method: 'POST',
			body: JSON.stringify({ record: input.value }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const result = await response.json()
		if(!result.error){
			new item(result)
			input.value = ''
		}
	}
}

async function boot() {
	const records = await fetch(TODOS_API).then((t) => t.json())
	records.forEach( record => new item(record) )
}

boot()

addButton.addEventListener('click', check)

window.addEventListener('keydown', (e) => {
	if (e.which == 13) {
		check()
	}
})
