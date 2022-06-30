import React from "react";
import { createRoot } from "react-dom/client";
import StudentList from "./components/StudentList";

const container = document.getElementById("root"),
  root = createRoot(container),
  appkey = "_abc123_1606358542486";

let stus = [];

/**
 * 获取数据
 */
const fetchData = async () => {
  await fetch("https://open.duyiedu.com/api/student/findAll?appkey=" + appkey)
    .then((r) => r.json())
    .then((resp) => {
      stus = resp.data;
    });
};

/**
 * 渲染页面
 */
const render = async () => {
  root.render("数据加载中。。。");
  await fetchData();
  root.render(
    <>
      <StudentList stus={stus} />
    </>
  );
};

render();
