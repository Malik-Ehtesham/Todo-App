const CompletedTodoItem = ({ task }) => {
  return (
    <div className="flex  items-center w-5/6 sm:w-full md:w-140 lg:w-150 my-3">
      <input
        type="text"
        placeholder={task}
        className="input truncate input-bordered input-success w-5/6 sm:w-full md:w-140 lg:w-150  text-xl font-bold text-red-500 "
        readOnly
      />
      <input
        type="checkbox"
        checked="checked"
        className="checkbox checkbox-success mx-2 "
      />
    </div>
  );
};

export default CompletedTodoItem;
