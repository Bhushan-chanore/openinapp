import React, { useState } from "react";
import styles from "../css/homefeatures.module.css";
import BellIcon from "../icons/iconBell.js";
import RevenueIcon from "../icons/iconRevenue.js";
import TotalTransactionsIcon from "../icons/iconTransactions.js";
import LikesIcon from "../icons/iconLikes.js";
import User2Icon from "../icons/iconPerson2.js";
import bhushan from "../icons/bhushan.png";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Text,
  PieChart,
  Pie,
} from "recharts";

const HomeFeatures = () => {
  var data = [
    { title: "Total Revenues", value: "$2,129,430", css: [styles.revenue] },
    { title: "Total Transactions", value: "1,520", css: [styles.transactions] },
    { title: "Total Likes", value: "9,721", css: [styles.likes] },
    { title: "Total Users", value: "892", css: [styles.users] },
  ];

  const Icon = (value) => {
    if (value === "Total Revenues") return <RevenueIcon />;
    else if (value === "Total Transactions") return <TotalTransactionsIcon />;
    else if (value === "Total Likes") return <LikesIcon />;
    else if (value === "Total Users") return <User2Icon />;
  };

  const Dashboard = () => {
    return (
      <>
        <div className={`d-flex flex-column ${styles.w100}`}>
          <div className={`d-flex flex-row ${styles.w100}`}>
            <div className={`d-flex ${styles.w50} justify-content-start`}>
              <span style={{ display: "flex" }} className={styles.dashboard}>
                Dashboard
              </span>
            </div>
            <div className={`d-flex ${styles.w50} justify-content-end`}>
              <input
                type="search"
                id="form1"
                class={`form-control ${styles.search}`}
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
            <BellIcon />
            <img
              src={bhushan}
              height={30}
              width={30}
              className={styles.loggedInImg}
              alt="Person"
            />
          </div>
          <div className={`d-flex ${styles.tilesStyle}`}>
            {data.map((each) => (
              <div className={styles.tiles}>
                <div className={each.css}>
                  <span className={`${styles.w100} ${styles.iconspan}`}>
                    {Icon(each.title)}
                  </span>
                  <span
                    className={`${styles.w100} justify-content-left ${styles.span1}`}
                  >
                    {each.title}
                  </span>
                  <span
                    className={`${styles.w100} justify-content-left ${styles.span2}`}
                  >
                    {each.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const Chart = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const data1 = [
      [
        { name: "", value: 100 },
        { name: "Week 1", value: 410 },
        { name: "Week 2", value: 150 },
        { name: "Week 3", value: 430 },
        { name: "Week 4", value: 180 },
        { name: "Week 5", value: 250 },
      ],
      [
        { name: "", value: 250 },
        { name: "Week 1", value: 460 },
        { name: "Week 2", value: 240 },
        { name: "Week 3", value: 480 },
        { name: "Week 4", value: 280 },
        { name: "Week 5", value: 400 },
      ],
      [
        { name: "", value: 0 },
        { name: "Week 1", value: 250 },
        { name: "Week 2", value: 220 },
        { name: "Week 3", value: 250 },
        { name: "Week 4", value: 300 },
        { name: "Week 5", value: 250 },
      ],
    ];
    const data2 = [
      [
        { name: "", value: 200 },
        { name: "Week 1", value: 390 },
        { name: "Week 2", value: 200 },
        { name: "Week 3", value: 300 },
        { name: "Week 4", value: 210 },
        { name: "Week 5", value: 420 },
      ],
      [
        { name: "", value: 300 },
        { name: "Week 1", value: 120 },
        { name: "Week 2", value: 450 },
        { name: "Week 3", value: 100 },
        { name: "Week 4", value: 380 },
        { name: "Week 5", value: 160 },
      ],
      [
        { name: "", value: 400 },
        { name: "Week 1", value: 150 },
        { name: "Week 2", value: 250 },
        { name: "Week 3", value: 150 },
        { name: "Week 4", value: 300 },
        { name: "Week 5", value: 500 },
      ],
    ];
    const renderLineChart = (
      <ResponsiveContainer
        width="96.5%"
        height={319}
        className={styles.chartbox}
      >
        <LineChart margin={{ top: 20, right: 40, left: 20, bottom: 20 }}>
          <Text textAnchor={"title"} />
          <Line
            name="Guest"
            data={data1[value]}
            type="monotone"
            dataKey="value"
            stroke="#9BDD7C"
            strokeWidth={3}
            dot={false}
          />
          <Line
            name="User"
            data={data2[value]}
            type="monotone"
            dataKey="value"
            stroke="#E9A0A0"
            strokeWidth={3}
            dot={false}
          />
          <Legend align="right" verticalAlign="top" iconType="circle" />
          <CartesianGrid vertical={false} stroke="#ccc" />
          <XAxis
            dataKey="name"
            allowDuplicatedCategory={false}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => (value === "Week 5" ? "" : value)}
          />
          <YAxis
            ticks={[0, 100, 200, 300, 400, 500]}
            axisLine={false}
            tickLine={false}
            domain={[0, 500]}
          />
          <Tooltip/>
        </LineChart>
      </ResponsiveContainer>
    );

    return (
      <>
        <div className={`d-flex flex-column ${styles.abovechart}`}>
          <span className={styles.chartTitle}>Activities</span>
          <select
            value={value}
            onChange={handleChange}
            className={styles.options}
          >
            <option value={0}>Apr-May 2021</option>

            <option value={1}>May-Jun 2021</option>

            <option value={2}>Jun-Jul 2021</option>
          </select>
        </div>
        {renderLineChart}
      </>
    );
  };

  const Schedule = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const data01 = [
      [
        { name: "Basic Tees", value: 580, fill: "#98D89E" },
        { name: "Custom Short Pants", value: 380, fill: "#F6DC7D" },
        { name: "Super Hoodies", value: 250, fill: "#EE8484" },
      ],
      [
        { name: "Basic Tees", value: 440, fill: "#98D89E" },
        { name: "Custom Short Pants", value: 260, fill: "#F6DC7D" },
        { name: "Super Hoodies", value: 360, fill: "#EE8484" },
      ],
      [
        { name: "Basic Tees", value: 220, fill: "#98D89E" },
        { name: "Custom Short Pants", value: 410, fill: "#F6DC7D" },
        { name: "Super Hoodies", value: 350, fill: "#EE8484" },
      ],
    ];

    const scheduleData = [
      {
        title: "Meeting with suppliers from Kuta Bali",
        time: "14:00 - 25:00",
        location: "at Sunset Road, Kuta Bali",
        css: [styles.scheduletile1],
      },
      {
        title: "Check Operation at Giga Factory 1",
        time: "18:00 - 20:00",
        location: "at Central Jakarta",
        css: [styles.scheduletile2],
      },
    ];

    return (
      <>
        <div className={`d-flex ${styles.scheduleflex} ${styles.w100}`}>
          <div
            className={`d-flex flex-column ${styles.w50} ${styles.schedule} ${styles.padding30}`}
          >
            <div className={`d-flex flex-row ${styles.abovepie}`}>
              <span className={`${styles.w50} ${styles.piechartTitle}`}>
                Top Products
              </span>
              <select
                value={value}
                onChange={handleChange}
                className={`${styles.w50} ${styles.optionsPie}`}
              >
                <option value={0}>Apr-May 2021</option>

                <option value={1}>May-Jun 2021</option>

                <option value={2}>Jun-Jul 2021</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={data01[value]}
                  dataKey="value"
                  nameKey="name"
                  cx="45%"
                  cy="50%"
                  outerRadius={60}
                  fill="#fff"
                />
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  iconType="circle"
                  iconSize={10}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div
            className={`d-flex flex-column ${styles.w50} ${styles.schedule} ${styles.padding30}`}
          >
            <span className={`${styles.w100} ${styles.scheduletext}`}>
              Today's Schedule
            </span>
            {scheduleData.map((each) => (
              <div className={`${styles.w100} ${each.css} d-flex flex-column`}>
                <span className={styles.schedtitle}>{each.title}</span>
                <span className={styles.schedtext}>{each.time}</span>
                <span className={styles.schedtext}>{each.location}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className={`d-flex flex-column align-items-center ${styles.homefeat}`}
      >
        <Dashboard />
        <Chart />
        <Schedule />
      </div>
    </>
  );
};

export default HomeFeatures;
