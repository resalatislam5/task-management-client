export const getTasks = async () => {
  const res = await fetch(
    `https://task-management-server-cyan-nine.vercel.app/api/tasks`
  );
  const data = await res.json();
  console.log("await res.json()", data);

  return data;
};

export const createTask = async () => {};
