import React, { useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

function ParentComp() {
  // R-1: Khai báo state lưu trữ thông tin student
  const [students, setStudent] = useState([
    {
      studentId: "SV001",
      studentName: "Tam",
      studentAge: "23",
      gender: "Nam",
      birthDay: "08/05/2000",
      birthPlace: "HN",
      address: "HN",
    },
    {
      studentId: "SV002",
      studentName: "Nam",
      studentAge: "32",
      gender: "Nam",
      birthDay: "28/09/1991",
      birthPlace: "HD",
      address: "HN",
    },
    {
      studentId: "SV003",
      studentName: "Son",
      studentAge: "30",
      gender: "Nam",
      birthDay: "09/09/1994",
      birthPlace: "HY",
      address: "HN",
    },
  ]);

  // C-1: toggle create student
  const [toggle, setToggle] = useState(false);
  const [actionName, setActionName] = useState("Add");

  // C-2: Xây dựng hàm để truyền xuống component con
  const handleToggleAction = (toggle, action) => {
    setToggle(toggle);
    setActionName(action);
  };

  // C-11: viết hàm handleSubmitAdd để lấy dữ liệu từ Form lên cha
  const handleSubmitAdd = (newStudent, toggle) => {
    setStudent([...students, newStudent]);
    setToggle(toggle);
  };
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          {/* START CONTROL */}
          {/* C-3: Truyền xuống component Control */}
          <Control handleToggleAction={handleToggleAction} toggle={toggle} />
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          {/* R-2: Truyền data xuống component con (ListStudent) */}
          <ListStudent listStudentProps={students} />
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      {/* C-6: Sử dụng toggle để làm chức năng bật tắt */}

      {toggle ? <Form handleSubmitAdd={handleSubmitAdd} /> : ""}
      {/* END FORM SINH VIÊN */}
    </div>
  );
}

export default ParentComp;
