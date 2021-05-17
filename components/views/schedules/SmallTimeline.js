import { useState } from "react";

export default function SmallTimeLine() {
  const [cardSelected, setCardSelected] = useState(2);
  const tl = [
    {
      id: 1,
      date: {
        day: "Mon",
        date: 20,
        time: "10:00",
      },
      title: "Unity UI Kit",
      description: "UI Design",
      color: "#FFEBF6",
    },
    {
      id: 2,
      date: {
        day: "Tue",
        date: 21,
        time: "11:30",
      },
      title: "Bento 3D",
      description: "UI Design",
      color: "#CFC8FF",
    },
    {
      id: 3,
      date: {
        day: "Wed",
        date: 22,
        time: "12:00",
      },
      title: "Unity UI Kit",
      description: "UI Design",
      color: "#CDF4FF",
    },
    {
      id: 4,
      date: {
        day: "Thu",
        date: 23,
        time: "14:30",
      },
      title: "Unity UI Kit",
      description: "UI Design",
      color: "#FFE2AC",
    },
  ];
  return (
    <div className="w-full p-6 verySmallLaptop:shadow-lg verySmallLaptop:rounded-lg verySmallLaptop:bg-white smallTablet:mt-10">
      <p className="font-semibold text-xl hidden verySmallLaptop:block">
        Small Timeline
      </p>
      <div className="grid grid-cols-1 w-full verySmallLaptop:grid-cols-2 smallTablet:grid-cols-1">
        {tl.map((item) => (
          <SmallTimeLineCard
            item={item}
            cardSelected={cardSelected}
            setCardSelected={setCardSelected}
          />
        ))}
      </div>
    </div>
  );
}

function SmallTimeLineCard({ item, cardSelected, setCardSelected }) {
  return (
    <div
      className={`rounded-lg col-span-1 my-2 relative flex flex-col items-center cursor-pointer ${
        cardSelected === item.id && "bg-primary text-white"
      }`}
      onClick={() => setCardSelected(item.id)}
    >
      <div
        className={`p-3 mt-2 absolute h-full mx-auto rounded-lg bg-primary opacity-50 ${
          cardSelected === item.id ? "block" : "hidden"
        }`}
        style={{ width: "95%" }}
      ></div>
      <div className="p-4 w-full grid grid-cols-4" style={{ zIndex: 1 }}>
        <div className="relative flex flex-col items-center">
          <div
            className="p-3 mt-2 absolute rounded-lg h-full opacity-50"
            style={{
              width: "90%",
              backgroundColor: cardSelected === item.id ? "" : item.color,
            }}
          ></div>
          <div
            className="p-2 text-center h-full w-full rounded-lg"
            style={{
              backgroundColor: cardSelected === item.id ? "" : item.color,
              zIndex: 1,
            }}
          >
            <p className="text-xs">{item.date.day}</p>
            <p
              className={`text-2xl font-semibold text-black ${
                cardSelected === item.id && "text-white"
              }`}
            >
              {item.date.date}
            </p>
          </div>
        </div>
        <div className="col-span-3 ml-2 flex justify-between">
          <div>
            <p className="mb-1 font-semibold">{item.title}</p>
            <p className="mb-1 text-xs">{item.description}</p>
            <span
              className={`bg-primary text-white p-1 py-0.5 rounded-md ${
                cardSelected === item.id && "bg-primary-light text-primary"
              }`}
            >
              {item.date.time}
            </span>
          </div>
          <img src="/images/icons/carret-right.svg" className="h-3" />
        </div>
      </div>
    </div>
  );
}
