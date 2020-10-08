import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Navbar from "./Navbar";

const App = () => (
  <>
    <Navbar/>
    <div className="container">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </>
)

export default App
