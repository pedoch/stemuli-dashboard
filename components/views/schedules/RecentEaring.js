import { useState } from "react";
import styled from "styled-components";
import { Tooltip, Button } from "antd";

export default function RecentEarning() {
  const earnings = [
    {
      id: 1,
      price: 64,
      title: "Collab UI",
      description: "Illustration",
      color: [63, 140, 255],
      image: "blue-spring-md.png",
    },
    {
      id: 2,
      price: 64,
      title: "Sapiens",
      description: "Illustration",
      color: [255, 162, 192],
      image: "purple-spiral-md.png",
    },
    {
      id: 3,
      price: 64,
      title: "Folio Agency",
      description: "Illustration",
      color: [255, 206, 115],
      image: "orange-spiral-md.png",
    },
  ];
  return (
    <div className="col-span-5 p-6 mb-10 bg-white shadow-xl rounded-lg verySmallLaptop:col-span-1">
      <p className="mb-4 text-xl font-semibold">Recent Earning 🔥</p>
      <div className="grid grid-cols-2 w-full smallTablet:grid-cols-1">
        <div className="col-span-1 mr-4">
          {earnings.map((earning) => (
            <RecentEaringCard key={earning.id} item={earning} />
          ))}
        </div>
        <div className="col-span-1 w-8/12 mx-auto smallTablet:hidden">
          <EarningsGraph />
          <p className="text-center text-lg font-semibold mt-3">Aug Earning</p>
          <p className="text-center mb-10">18 July - 18 Agu</p>
          <Button
            size="large"
            className="bg-black text-white rounded-2xl pt-4 pb-10 w-full flex justify-center hover:bg-black"
          >
            <img src="/images/icons/plus-in-circle.svg" className="mr-3" /> New
          </Button>
        </div>
      </div>
      <Stats />
    </div>
  );
}

function RecentEaringCard({ item }) {
  return (
    <EarningCard
      className={`flex justify-between w-full rounded-xl my-2 p-4 cursor-pointer`}
      color={item.color}
    >
      <div className="flex">
        <div
          className="mr-2 rounded-xl"
          style={{
            backgroundColor: `rgb(${item.color[0]}, ${item.color[1]}, ${item.color[2]})`,
          }}
        >
          <img src={`/images/${item.image}`} />
        </div>
        <div>
          <p className="mb-1 font-semibold">{item.title}</p>
          <p className="mb-1 text-xs">{item.description}</p>
          <span className={`bg-primary text-white p-1 py-0.5 rounded-md`}>
            ${item.price}
          </span>
        </div>
      </div>
      <img src="/images/icons/carret-right.svg" className="h-3" />
    </EarningCard>
  );
}

const EarningCard = styled.div`
  :hover {
    background-color: rgba(
      ${(props) => `${props.color[0]}, ${props.color[1]}, ${props.color[2]}`},
      0.3
    );
  }
`;

function EarningsGraph() {
  let earnings = [
    {
      price: 10,
      color: "#CDF4FF",
    },
    {
      price: 15,
      color: "#CDF4FF",
    },
    {
      price: 25,
      color: "#A0D7E7",
    },
    {
      price: 50,
      color: "#0049C6",
    },
    {
      price: 30,
      color: "#CFC8FF",
    },
    {
      price: 40,
      color: "#CDF4FF",
    },
    {
      price: 25,
      color: "#A0D7E7",
    },
  ];

  //Find the object with the highest price property
  const maxEarn = earnings.reduce(function (prev, current) {
    return prev.price > current.price ? prev : current;
  });

  return (
    <div className="w-full grid grid-cols-7 space-x-3 h-40">
      {earnings.map((earn, index) => (
        <Tooltip title={earn.price} color="#000" key={index}>
          <div className="min-h-full flex flex-col justify-end">
            <div
              className="rounded"
              style={{
                backgroundColor: earn.color,
                //Calculate height of bars based on the object with the highest price property
                height: `${(earn.price / maxEarn.price) * 100}%`,
              }}
            ></div>
          </div>
        </Tooltip>
      ))}
    </div>
  );
}

function Stats() {
  const [selectedStat, setSelectedStat] = useState(1);
  const stats = [
    { name: "Trending", icon: "bag.svg" },
    { name: "Popular", icon: "graph.svg" },
    { name: "Trending", icon: "document.svg" },
    { name: "Trending", icon: "wallet.svg" },
  ];

  return (
    <div className="w-full border border-gray-200 rounded-xl grid grid-cols-4 p-0.5 space-x-2 smallTablet:hidden">
      {stats.map((stat, index) => {
        return (
          <div
            key={index}
            className={`px-4 py-2 flex flex-col items-center rounded-xl cursor-pointer hover:bg-primary-light hover:text-black ${
              selectedStat === index && "bg-primary text-white"
            }`}
            onClick={() => setSelectedStat(index)}
          >
            <img
              src={`/images/icons/${stat.icon}`}
              className={`h-6 w-6 mb-2`}
            />
            <p className="text-sm text-center flex">{stat.name}</p>
          </div>
        );
      })}
    </div>
  );
}
