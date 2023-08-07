import React from "react";

// Cách 1: Để nhận props: Nhập props từ cha => lấy tất cả các props từ cha
// function ColorPicker(props) {
//   console.log(props);

// Cách 2: Để nhận props: sử dụng destructoring => lấy props cụ thể
// Cách 1: LiftingStateUp
// function ColorPicker({ setColorParent }) {
//   console.log(setColorParent);

//   const handleColorPicker = (event) => {
//     setColorParent(event.target.value);
//   };

// Cách 2: LiftingStateUp
function ColorPicker({ changeColor }) {
  const handleChangeColor = (event) => {
    changeColor(event.target.value);
  };
  return (
    <div>
      {/* Cách 1: LiftingStateUp */}
      {/* <input type="color" onChange={handleColorPicker} /> */}

      {/* Cách 2: LiftingStateUp */}
      <input type="color" onChange={handleChangeColor} />
    </div>
  );
}

export default ColorPicker;
