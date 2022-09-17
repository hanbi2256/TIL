import { useState } from 'react';
import TodoBoard from './components/TodoBoard';



//인풋창이있고 버튼이 있다.
//인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가 된다.
//아이템 삭제버튼을 누르면 삭제가 가능하다

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todolist, setTodolist] = useState([])

  const addItem = () => {
    setTodolist([...todolist, inputValue])//기존에 있는 값은 유지하고 새로운 inputValue 넣기
  }

  return (
    <main style={{
      color: 'lightblue'
    }}>
      <input
        style={{
          color: 'lightblue'
        }}
        value={inputValue} type="text" onChange=
        {(event) => setInputValue(event.target.value)} />
      <button onClick={addItem}>추가</button>
      <TodoBoard todolist={todolist} />
    </main>
  )
}

export default App;