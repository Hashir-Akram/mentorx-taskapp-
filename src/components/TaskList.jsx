// TaskList Component - MentorX Academy
const TaskList = () => {
  const tasks = [
    { id: 1, title: "Learn Git branching", done: false },
    { id: 2, title: "Push to GitHub", done: true },
    { id: 3, title: "Create Pull Request", done: false },
  ];
  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      {tasks.map(t => (
        <div key={t.id} style={{ padding: "8px", margin: "4px 0",
          background: t.done ? "#d5f5e3" : "#fdebd0", borderRadius: "6px" }}>
          {t.done ? "✅" : "⬜"} {t.title}
        </div>
      ))}
    </div>
  );
};
export default TaskList;