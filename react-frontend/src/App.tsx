import React, { useEffect } from 'react';
import './App.css';
import AddNoteButton from './components/addNoteButton/addNoteButton';
import ListNotes from './components/listNotes/listNotes';
import Layout from './layout';
import { useAppDispatch } from './store/hooks';
import { fetchNotesApi } from './store/actions';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotesApi())
  }, [dispatch])
  
  return (
    <Layout>
      <AddNoteButton />
      <ListNotes />
    </Layout>
  );
}

export default App;
