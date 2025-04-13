import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import TodoList from './components/TodoList'

function App() {
  

  return (
    <>
      <Header></Header>
      <Editor></Editor>
      <TodoList></TodoList>
    </>
  )
}

export default App
