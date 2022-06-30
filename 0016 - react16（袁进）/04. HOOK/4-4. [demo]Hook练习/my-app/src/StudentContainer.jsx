import React, { useState, useEffect } from "react";
import Pager from "./components/common/Pager";
import StudentList from "./components/common/StudentList";
import Modal from "./components/common/Modal";
import findStuByPage from "./services/findStuByPage";

const refCur = React.createRef();
const refSize = React.createRef();
const refVisible = React.createRef();

/**
 * 展示学生列表
 * 1. 支持翻页
 * 2. 加载中展示蒙版
 * 3. 支持自定义页容量
 * 4. 支持指定页码跳转
 */
export default function StudentContainer() {
  const [datas, setDatas] = useState([]);
  const [size, setSize] = useState(2);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [visibleNum, setVisibleNum] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const stus = await findStuByPage(current, size);
      setIsLoading(false);
      setDatas(stus.findByPage);
      setTotal(stus.cont);
    })();
  }, [current, size]);

  return (
    <div>
      {isLoading ? (
        <Modal>Loading。。。</Modal>
      ) : (
        <>
          <div className="stuContainer">
            <StudentList datas={datas} />
          </div>
          <div className="pagerContainer">
            <Pager
              size={size}
              total={total}
              current={current}
              visibleNum={visibleNum}
              onChange={(newPage) => {
                setCurrent(newPage);
              }}
            />
          </div>
          <p>
            当前页：<input type="text" ref={refCur}></input>
          </p>
          <p>
            页容量：<input type="text" ref={refSize}></input>
          </p>
          <p>
            可见页码量：<input type="text" ref={refVisible}></input>
          </p>
          <p>
            <button
              onClick={() => {
                refCur.current.value && setCurrent(+refCur.current.value);
                refSize.current.value && setSize(+refSize.current.value);
                refVisible.current.value &&
                  setVisibleNum(+refVisible.current.value);
              }}
            >
              确定
            </button>
          </p>
        </>
      )}
    </div>
  );
}
