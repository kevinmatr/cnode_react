import React from "react";
import { useState, useEffect } from "react";
import API from "../../api";
import List from "../../components/list";
import style from "./home.module.scss";
const { nav, active } = style;

const topic = [
  {
    title: "全部",
    tabdata: "all",
  },
  {
    title: "精选",
    tabdata: "good",
  },
  {
    title: "分享",
    tabdata: "share",
  },
  {
    title: "问答",
    tabdata: "ask",
  },
  {
    title: "招聘",
    tabdata: "job",
  },
];
const Home = () => {
  const [topicList, setTopicList] = useState([]);
  const [pageObj, setPageObj] = useState({
    limit: 10,
    page: 1,
    tab: "all",
  });

  const getTopicL = async () => {
    let res = await API.getlist(pageObj);
    console.log(res);
    setTopicList(res.data.data);
  };

  useEffect(() => {
    getTopicL();
  }, [pageObj]);
  return (
    <div>
      <ul className={nav}>
        {topic.map((item) => (
          <li
            onClick={() => setPageObj({ ...pageObj, tab: item.tabdata })}
            className={item.tabdata == pageObj.tab ? active : ""}
            key={item.tab}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div>
        {topicList.map((item) => (
          <List key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
