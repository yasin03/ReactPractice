import React from "react";
import students from "./student.json";

const Tablo = () => {
  const stil1 = {
    color: "black",
    fontWeight: "bolder",
    backgroundColor: "aquamarine",
  };
  /*   const stil2 = {
    color: "black",
    fontWeight: "bolder",
    backgroundColor: "gray",
  }; */

  return (
    <div>
      <h1>Kursiyerler</h1>
      <table>
        <thead>
          <tr>
            <th>İsim</th>
            <th>Yaş</th>
            <th>Kurs</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr
                style={
                  index % 2 == 0 ? stil1 : { ...stil1, backgroundColor: "gray" }
                }
                key={index}
              >
                <td>{student.isim}</td>
                <td>{student.yas}</td>
                <td>{student.kurs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tablo;
