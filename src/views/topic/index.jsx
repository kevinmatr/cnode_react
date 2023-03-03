import React, { useMemo } from "react";
import API from "../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./topic.module.scss";
import Mark from "../../components/mark";
import { tabs } from "../../components/mark";
import Transtime from "../../utils/transTime";
const { content, title, t_top, t_bottom } = style;

const Topic = () => {
  const params = useParams();
  const [topic, setTopic] = useState([]);

  const isMark = useMemo(() => topic.good || topic.top, [topic]);

  const getTopic = async () => {
    let res = await API.getTopic(params.id);
    console.log(res);
    setTopic(res.data.data);
  };

  useEffect(() => {
    getTopic();
  }, []);
  return (
    <div>
      <div className={title}>
        <div className={t_top}>
          {isMark && <Mark data={topic}></Mark>}
          <p>{topic.title}</p>
        </div>
        <div className={t_bottom}>
          <span> • 发布于：{Transtime(topic.create_at)}</span>
          <span> • 作者：{topic.author?.loginname}</span>
          <span> {topic.visit_count}次浏览</span>
          <span> • 来自于：{tabs[topic.tab]}</span>
        </div>
      </div>
      <div
        className={content}
        dangerouslySetInnerHTML={{ __html: topic.content }}
      ></div>
    </div>
  );
};

export default Topic;
//8a806951-4a6d-479a-8dcd-2e4e555b5gf3
