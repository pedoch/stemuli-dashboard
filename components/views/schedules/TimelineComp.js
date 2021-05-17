import { SmallTimeLine, BigTimeLine } from "./index";

export default function TimelineComp() {
  return (
    <div className="rounded-xl shadow-lg grid grid-cols-3 mt-8 bg-white verySmallLaptop:grid-cols-1 verySmallLaptop:shadow-none verySmallLaptop:bg-transparent smallTablet:flex smallTablet:flex-col-reverse">
      <SmallTimeLine />
      <BigTimeLine />
    </div>
  );
}
