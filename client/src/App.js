import { Route, Routes}  from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/views/Main';
import AddAuthor from './components/AddAuthor/AddAuthor';
import AuthorList from './components/AuthorList/AuthorList';
import Author from './components/Author/Author';
import Update from './components/Update/Update';


function App() {


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} default />
        <Route path='/new' element={<AddAuthor />} />
        <Route path='/authors' element={<AuthorList />} />
        <Route path='/authors/:id' element={<Author />} />
        <Route path='/authors/edit/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
