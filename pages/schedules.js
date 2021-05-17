import MainLayout from "../components/common/MainLayout";
import Head from "next/head";
import { Button, Input } from "antd";
import {
  TimelineComp,
  IconProgress,
  RecentEarning,
} from "../components/views/schedules";
import Notifications from "../components/common/Notifications";

export default function Schedules() {
  return (
    <MainLayout>
      <Head>
        <title>Schedules</title>
      </Head>
      <div className="w-full max-w-6xl mx-auto h-full">
        <div className="flex justify-between items-center w-full mt-10 tablet:mt-0 smallTablet:hidden">
          <div className="mb-5">
            <p className="text-2xl mb-2 font-semibold">Hi Dash UI8,</p>
            <p className="text-5xl font-bold">Schedules</p>
          </div>
          <div className="flex">
            <Input
              size="large"
              bordered={false}
              className="h-10 mr-2 rounded"
              placeholder="Search"
              prefix={<img src="/images/icons/search.svg" className="mr-2" />}
            />
            <Notifications />
          </div>
        </div>
        <div
          className="w-full bg-primary bg-no-repeat bg-right text-white rounded-3xl p-14 mt-5 phone:hidden"
          style={{ backgroundImage: "url('/images/purple-thing.png')" }}
        >
          <p className="text-4xl mb-5">Unity Dashboard</p>
          <p className="text-xl mb-3">
            Create Your Product Dashboard in Minutes
          </p>
          <Button className="px-7 pt-3 pb-8 font-bold bg-white rounded-xl shadow-lg">
            New Schedule
          </Button>
        </div>
        <div className="w-full relative bg-primary bg-no-repeat bg-right text-white rounded-3xl p-14 mt-5 hidden text-center phone:block phone:p-5">
          <img src="/images/purple-spiral-lg.png" className="mx-auto" />
          <p className="text-xl mb-5">Unity Dashboard</p>
          <p className="mb-5">Create Your Product Dashboard in Minutes</p>
          <Button className="px-7 pt-3 pb-8 font-bold bg-white rounded-xl shadow-lg">
            Get Started
          </Button>
          <img
            src="/images/icons/cancel.svg"
            className="absolute top-0 -right-3"
          />
        </div>
        <TimelineComp />
        <div className="grid grid-cols-7 space-x-10 w-full mt-10 verySmallLaptop:grid-cols-1 verySmallLaptop:space-x-0">
          <IconProgress />
          <RecentEarning />
        </div>
      </div>
    </MainLayout>
  );
}
