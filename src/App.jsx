import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>풍생 링커 정상 작동 확인! 🎉</h1>
      <p>태블릿에서도 화면이 잘 뜨고 있습니다.</p>
      <button onClick={() => setCount((count) => count + 1)}>
        카운트: {count}
      </button>
    </div>
  )
}

export default App
