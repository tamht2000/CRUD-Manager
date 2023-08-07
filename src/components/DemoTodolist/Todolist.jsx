// rfce

import React, { useState } from "react";

function Todolist() {
  // todolist: ['homewwork', 'go to school', ...]
  // bước 1: Khai báo các state lưu trữ dữ liệu
  // + state todo: dùng để chứa tất cả dữ liệu từ người dùng nhập
  const [todo, setTodo] = useState([]);
  // + state text: dùng để lấy dữ liệu từ ô input
  const [text, setText] = useState("");

  // bước 2: viết hàm handleChangeInput để lấy sự thay đổi trong ô input
  const handleChangeInput = (event) => {
    setText(event.target.value);
  };

  // bước 3: viết hàm handleAddTodo để thêm dữ liệu từ người dùng nhập vào state todo
  const handleAddTodo = () => {
    setTodo([...todo, { text: text, complete: false }]);
    setText("");
  };

  // Bước 5: splice() để xoá theo index
  const handleDelete = (id) => {
    const deleteTodo = [...todo];
    deleteTodo.splice(id, 1);
    setTodo(deleteTodo);
  };

  // Bước 6: làm chức năng complete
  const handleToggle = (id) => {
    const todoComplete = todo.map((element, index) =>
      id === element ? { ...element, complete: !element.complete } : element
    );
    setTodo(todoComplete);
  };

  // Bước 7: chức năng update
  const [editIndex, setEditIndex] = useState(-1); // mảng chạy từ index 0 -> lenghth - 1
  const [editText, setEditText] = useState("");
  // handleEdit để lấy index của phần tử
  const handleEdit = (id) => {
    // set lại giá trị index
    setEditIndex(id);
    // set lại giá trị ô input
    setEditText(todo[id].text);
  };

  // hàm handleUpdate để cập nhật lại giá trị mới
  // arrayName[vị trí index] = giá trị mới
  const handleUpdate = () => {
    const updateTodo = [...todo];
    updateTodo[editIndex].text = editText;
    setTodo(updateTodo);

    // trở về form ban đầu
    setEditIndex(-1);
  };
  return (
    <div>
      <h3>Todolist</h3>
      <input type="text" value={text} onChange={handleChangeInput} />
      <button onClick={handleAddTodo}>Add</button>

      {/* bước 4: hiển thị dữ liệu từ todo */}
      <ul>
        {todo.map((element, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(event) => setEditText(event.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </div>
            ) : (
              <div>
                <span
                  onClick={() => {
                    handleToggle(index);
                  }}
                  style={{
                    textDecoration: element.complete ? "line-through" : "none",
                  }}
                >
                  {element.text}
                </span>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleEdit(index);
                  }}
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
