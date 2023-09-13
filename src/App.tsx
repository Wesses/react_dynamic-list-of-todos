/* eslint-disable max-len */
import React, { useEffect, useState, useContext } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { getTodos } from './api';
import { Todo } from './types/Todo';
import { TodoModal } from './components/TodoModal';
import { Loader } from './components/Loader';
import { TodoContext } from './components/TodoContext';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { showedTodo } = useContext(TodoContext);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">
              {todos.length ? (
                <TodoList todos={todos} />
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>

      {showedTodo && <TodoModal />}
    </>
  );
};
