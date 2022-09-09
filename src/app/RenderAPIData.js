import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/RenderData";
import "./RenderAPIData.css";

export default function RenderAPIData() {
  const data = useSelector((state) => state.allData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <table>
        <tr className="headings">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {data.map((items) => {
          return (
            <tr>
              <td>{items.id}</td>
              <td className="name-col">{items.name}</td>
              <td>{items.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
