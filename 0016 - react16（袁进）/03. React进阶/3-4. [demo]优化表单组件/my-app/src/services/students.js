const appkey = "_abc123_1606358542486";
const domain = "https://open.duyiedu.com";

const getAllStudents = async () => {
  // /api/student/findAll
  const result = await fetch(`${domain}/api/student/findAll?appkey=${appkey}`)
    .then((r) => r.json())
    .then((resp) => resp.data);
  return result;
};

export default getAllStudents;
