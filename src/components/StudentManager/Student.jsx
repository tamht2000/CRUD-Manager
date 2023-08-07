import React from "react";

// R-5: Nhận dữ liệu từ ListStudent
function Student({ studentKey, inforStudent }) {
  return (
    <tr key={studentKey}>
      <td>{studentKey + 1}</td>
      <td>{inforStudent.studentId}</td>
      <td>{inforStudent.studentName}</td>
      <td>{inforStudent.studentAge}</td>
      <td>{inforStudent.gender ? "Nam" : "Nữ"}</td>
      <td>
        <div className="template-demo">
          <button type="button" className="btn btn-danger btn-icon-text">
            Xem
          </button>
          <button type="button" className="btn btn-warning btn-icon-text">
            Sửa
          </button>
          <button type="button" className="btn btn-success btn-icon-text">
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Student;
