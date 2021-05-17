import { Progress, Button } from "antd";

export default function IconProgress() {
  const icons = [
    {
      title: "Unity Comps",
      description: "New 3D Kit",
      progress: 57,
      image: "purple-spiral.png",
      color: "#FF9A7B",
    },
    {
      title: "Folio Designer",
      description: "UI Design Kit",
      progress: 62,
      image: "orange-spiral.png",
      color: "#7FBA7A",
    },
    {
      title: "Folio Agency",
      description: "UI Design Kit",
      progress: 35,
      image: "blue-spring.png",
      color: "#FFCE73",
    },
    {
      title: "Unity Comps",
      description: "New 3D Kit",
      progress: 58,
      image: "purple-spiral.png",
      color: "#FFA2C0",
    },
  ];
  return (
    <div className="col-span-2 p-6 w-full mb-10 bg-white shadow-xl rounded-lg verySmallLaptop:col-span-1">
      <p className="mb-4 text-xl font-semibold">Icon Progress</p>
      <div>
        {icons.map((icon) => (
          <div className="flex w-full justify-between my-8" key={icon.color}>
            <div className="flex w-full">
              <img src={`/images/${icon.image}`} className="mr-3" />
              <div>
                <p className="text-lg font-semibold">{icon.title}</p>
                <p>{icon.description}</p>
              </div>
            </div>
            <Progress
              type="circle"
              percent={icon.progress}
              strokeColor={icon.color}
              width={60}
              strokeWidth={10}
            />
          </div>
        ))}
      </div>
      <Button
        size="large"
        className="bg-black text-white rounded-2xl pt-4 pb-10 w-full hover:bg-black"
      >
        Discover More
      </Button>
    </div>
  );
}
