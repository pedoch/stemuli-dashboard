import { Button } from "antd";

export default function Notifications() {
  return (
    <Button className="bg-white rounded-full pt-2 pb-7 px-2 shadow text-black border-none hover:bg-primary focus:bg-primary">
      <img src="/images/icons/bell.svg" />
    </Button>
  );
}
