const CompletedTodoItem = () => {
  return (
    <div className="flex  items-center w-5/6 sm:w-full md:w-140 lg:w-150">
      <input
        type="text"
        placeholder="Fajr Ki Namaz"
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
