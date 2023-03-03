import style from "./mark.module.scss";
const { g, gray } = style;
export const tabs = { share: "分享", ask: "问答", job: "招聘" };
function Mark(data) {
  const tagText = ({ data }) =>
    data.top ? "置顶" : data.good ? "精华" : tabs[data.tab];
  console.log(data);
  return (
    <span className={data.data.top || data.data.true ? g : gray}>
      {tagText(data)}
    </span>
  );
}

export default Mark;
