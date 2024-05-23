import { useState } from "react";

const TagCreator = () => {
  const [tags, setTags] = useState([]);

  const addTag = () => {
    setTags([...tags, { dataType: "string", dataValue: "" }]);
  };

  const handleDataValueChange = (index, e) => {
    const updatedTags = [...tags];
    updatedTags[index].dataValue = e.target.value;
    setTags(updatedTags);
  };

  const handleDataTypeChange = (index, value) => {
    const updatedTags = [...tags];
    updatedTags[index].dataType = value;
    setTags(updatedTags);
  };

  return (
    <div>
      <button onClick={addTag}>Add Tag</button>
      {tags.map((tag, index) => (
        <section key={index}>
          <div>
            <input
              type="text"
              value={tag.dataValue}
              onChange={(e) => handleDataValueChange(index, e)}
              placeholder="Enter Value"
            />
          </div>
          <div>
            <select
              value={tag.dataType}
              onChange={(e) => handleDataTypeChange(index, e.target.value)}
            >
              <option value="string">string</option>
              <option value="number">number</option>
              <option value="boolean">boolean</option>
            </select>
          </div>
        </section>
      ))}
    </div>
  );
};

export default TagCreator;
