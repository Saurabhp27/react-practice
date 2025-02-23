import { useState } from "react";

const Folder = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(data, "data");
  return (
    <div>
      <h2 onClick={() => setIsExpanded(!isExpanded)} className="name">
        <div>{data.isFolder ? "📁" : "📄"} </div>
        <div>{data.name}</div>
      </h2>
      {isExpanded && (
        <div style={{ marginLeft: "15px" }}>
          {data.items.map((item) => (
            <div>
              <Folder data={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
