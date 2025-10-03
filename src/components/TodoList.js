

export function TodoList(items) {

  const ul = document.createElement('ul')
  (items || []).forEach((text, index) => {
    const li = document.createElement('li')
    li.textContent = String(text)
    if (index % 2 === 0) {
      li.className = 'odd'
    }
    ul.appendChild(li)
  })
  return ul
}


