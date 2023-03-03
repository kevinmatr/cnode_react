import React from "react";
import style from "./list.module.scss";
import transTime from "../utils/transTime";
import { NavLink } from "react-router-dom";
import Mark from "./mark";
const { list, content, imga, count, tag, time } = style;
const List = ({ data }) => {
  return (
    <div className={list}>
      <div className={imga}>
        <img src={data.author.avatar_url} alt="" />
      </div>
      <div className={count}>
        <span>{data.reply_count}</span>
        <span>/</span>
        <span>{data.visit_count}</span>
      </div>
      <div className={tag}>
        <Mark data={data}></Mark>
      </div>
      <div className={content}>
        <NavLink to={"/topic/" + data.id}>{data.title}</NavLink>
      </div>
      <div className={time}>
        <p>{transTime(data.last_reply_at)}</p>
      </div>
    </div>
  );
};

export default List;
