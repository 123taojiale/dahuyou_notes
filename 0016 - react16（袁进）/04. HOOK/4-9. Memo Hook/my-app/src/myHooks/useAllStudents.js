import { useEffect, useState } from "react";
import { getAllStudents } from "../services/students";

/**
 * 当组件首次加载完成后，获取所有学生数据
 */
export default function useAllStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    (async () => {
      const stus = await getAllStudents();
      setStudents(stus);
    })();
  }, []);
  return students;
}
