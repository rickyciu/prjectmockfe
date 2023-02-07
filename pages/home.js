import react, { useEffect, useState } from "react";
import Header from "../component/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../store/cart/todoSlice";
import TodoItem from "../component/todoitem";
import Footer from "../component/Footer";
export default function Home() {
  const [input, setInput] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const user1 = useSelector((state) => {
    return state.user;
  });

  const user = useSelector((state) => {
    return state.todo;
  });


  console.log("intip gan",user.todos)
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <>
      <div className="latar">
        <div className="container">
          <Header />
          <div className="container home-con  tent rounded p-3 shadow">
            <h4 className="home-left text-light">Hi, {user1.player.username}</h4>
            <br></br>
            <div className="home-box-game mb-3 rounded border">
              <div className="p-3"></div>
              <div className="p-3 text-light home-detail">
                <h3 className="text-white">To Do List</h3>
                <form className="App-form" onSubmit={handleAddTodo}>
                  <input
                    type="text"
                    onInput={(e) => setInput(e.target.value)}
                  />
                  <button type="submit">+</button>
                  <button>Save</button>
                </form>{" "}
                <div className="Todos">
                  {user.count > 0 &&
                    user.todos.map((todo) => (
                      <TodoItem
                        key={todo.id}
                        text={todo.text}
                        id={todo.id}
                        onCheck={handleTodoDone}
                      />
                    ))}
                  {user.count === 0 && <p>No todos</p>}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

// export default Home;
