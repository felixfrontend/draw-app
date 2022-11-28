import React from "react";
import { setTool } from "../redux/slices/tool";
import { useDispatch, useSelector } from "react-redux";


const Select = () => {
  const dispatch = useDispatch();
  const { tool } = useSelector((state) => state.tool);
  return (
    <select
      className="select"
      value={tool}
      onChange={(e) => {
        dispatch(setTool(e.target.value));
      }}
    >
      <option value="pen">Карандаш ✍</option>
      <option value="eraser">Резинка ⬜</option>
    </select>
  );
};

export default Select;
