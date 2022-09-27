import React from "react";
import students from "./student.json";

const Practice3 = () => {
  return (
    <div>
      <ul>
        {students
          .filter((s) => s.yas < 25)
          .map((s, index) => (
            <li key={index}>{s.isim}</li>
          ))}
      </ul>
      <select>
        {students
          .reduce((values, student) => {
            if (!values.includes(student.kurs)) values.push(student.kurs);
            return values;
          }, [])
          .map((s, i) => (
            <option key={i}>{s}</option>
          ))}
      </select>
    </div>
  );
};

export default Practice3;
