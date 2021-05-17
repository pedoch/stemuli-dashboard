export default function BigTimeLine() {
  const days = [
    { day: "M", notification: 1 },
    { day: "T", notification: 1 },
    { day: "W", notification: null },
    { day: "Th", notification: null },
    { day: "Fr", notification: 3 },
    { day: "Sa", notification: null },
  ];

  const time = ["08:00", "09:00", "10:00", "11:00", "12:00"];

  const tasks = [
    {
      time: "08:00",
      task: "Bento 3D Objects",
      color: "#E2DFF6",
      trail: "#6C5DD3",
      span: 2,
      start: 0,
    },
    {
      time: "09:00",
      task: "Bento 3D Objects",
      color: "#FCEAF0",
      trail: "#FFA2C0",
      span: 3,
      start: 1,
    },
    {
      time: "10:00",
      task: "Bento 3D Objects",
      color: "#ECF7FA",
      trail: "#A0D7E7",
      span: 5,
      start: 0,
    },
    {
      time: "11:00",
      task: "Bento 3D Objects",
      color: "#F5F4FF",
      trail: "#CFC8FF",
      span: 4,
      start: 1,
    },
    {
      time: "12:00",
      task: "Bento 3D Objects",
      color: "#D9E8FF",
      trail: "#3F8CFF",
      span: 2,
      start: 2,
    },
  ];

  return (
    <div className="w-full p-6 col-span-2 verySmallLaptop:col-span-1 verySmallLaptop:mt-10 verySmallLaptop:shadow-lg verySmallLaptop:rounded-lg verySmallLaptop:bg-white smallTablet:w-full smallTablet:mt-0">
      <p className="font-semibold text-xl smallTablet:hidden">Big Timeline</p>
      <p className="font-semibold text-xl hidden smallTablet:block">
        Mobile Timeline
      </p>
      <Graph days={days} time={time} tasks={tasks} />
      <GraphKeys />
    </div>
  );
}

function Graph({ days, time, tasks }) {
  return (
    <div className="flex flex-col items-center relative mt-5 overflow-y-hidden overflow-x-auto">
      <div
        className="p-3 mt-2 absolute rounded-lg h-full border bg-white"
        style={{
          width: "95%",
        }}
      ></div>
      <div
        className=" rounded-lg w-full h-full border bg-white"
        style={{ zIndex: 1, minWidth: "500px" }}
      >
        <div className="w-full">
          <GraphXAxis days={days} />
          <hr className="w-full h-px " />
          <div className="w-full grid grid-cols-8">
            <GraphYAxis time={time} />
            <div className="col-span-6 h-full grid grid-cols-6 grid-rows-5 px-2 w-full relative">
              {tasks.map((task) => {
                return <GraphTasks key={task.time} task={task} />;
              })}
              <div className="absolute grid grid-cols-6 col-span-6 row-span-5 w-full h-full">
                <div className="w-full border-r"></div>
                <div className="w-full border-r"></div>
                <div className="w-full border-r"></div>
                <div className="w-full border-r"></div>
                <div className="w-full border-r"></div>
                <div className="w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GraphXAxis({ days }) {
  return (
    <div className="grid grid-cols-8 p-3">
      <p className="col-span-2 text-center">Aug</p>
      {days.map((day) => (
        <div key={day.day} className="w-full flex justify-center">
          <span className="relative">
            {day.day}
            {day.notification && (
              <span className="absolute p-1 bg-green-500 rounded-full"></span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

function GraphYAxis({ time }) {
  return (
    <div className="col-span-2 grid grid-rows-5">
      {time.map((t) => (
        <p className="my-4 text-center row-span-1">{t}</p>
      ))}
    </div>
  );
}

function GraphTasks({ task }) {
  return (
    <div
      className="rounded p-px flex justify-end my-5"
      style={{
        gridColumn: `${task.start + 1} / span ${task.span}`,
        gridRow: "span 1",
        backgroundColor: task.trail,
        zIndex: 1,
      }}
    >
      <div
        className="px-3 py-1 rounded"
        style={{ backgroundColor: task.color }}
      >
        <p className="whitespace-nowrap">{task.task}</p>
      </div>
    </div>
  );
}

function GraphKeys() {
  return (
    <div className="w-full flex justify-between mt-5 px-4">
      <p className="flex items-center">
        <span
          className="p-1 h-px rounded-full mr-3"
          style={{ backgroundColor: "#7FBA7A" }}
        ></span>
        Small note
      </p>
      <p className="flex items-center">
        <span
          className="p-1 h-px rounded-full mr-3"
          style={{ backgroundColor: "#6C5DD3" }}
        ></span>
        Small note
      </p>
      <p className="flex items-center">
        <span
          className="p-1 h-px rounded-full mr-3"
          style={{ backgroundColor: "#E4E4E4" }}
        ></span>
        Small note
      </p>
    </div>
  );
}
