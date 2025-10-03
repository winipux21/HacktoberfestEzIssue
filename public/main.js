

const btn = document.getElementById('hello-btn')
const list = document.getElementById('todo-list')

btn?.addEventListener('click', async () => {
  try {
    const res = await fetch('/api/ping')
    const data = await res.json()
    console.log('PING:', data)
  } catch (e) {
    console.error('Ping failed', e)
  }
})

const todos = ['Проверить линтер', 'Починить 404 код', 'Исправить CSS colorr']

for (let i = 0; i <= todos.length; i++) {

  const item = todos[i]
  const li = document.createElement('li')
  li.textContent = item
  list.appendChild(li)
}


