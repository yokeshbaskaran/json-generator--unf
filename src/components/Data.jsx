import { useState } from "react";

const JSONGenerator = () => {
  const [fields, setFields] = useState([
    { name: "name", type: "String", value: "" },
    { name: "author", type: "String", value: "" },
    { name: "year", type: "Number", value: "" },
  ]);

  const [limit, setLimit] = useState(10);
  const [jsonData, setJsonData] = useState(null);

  const handleAddField = () => {
    setFields([...fields, { name: "", type: "String", value: "" }]);
  };

  const handleChangeField = (index, fieldKey, value) => {
    const updatedFields = [...fields];
    updatedFields[index][fieldKey] = value;
    // console.log(updatedFields);
    // console.log(index);
    // console.log([fieldKey]);
    // console.log(value);
    setFields(updatedFields);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const generateJSON = () => {
    const data = [];
    for (let i = 0; i < limit; i++) {
      const item = {};
      fields.forEach((field) => {
        if (field.name) {
          item[field.name] = generateFieldValue(field);
        }
      });
      data.push(item);
    }
    setJsonData(data);
  };

  const generateFieldValue = (field) => {
    if (field.type === "String") {
      return field.value;
    } else if (field.type === "Number") {
      return parseInt(field.value);
    } else if (field.type === "Boolean") {
      // Convert string values to boolean
      return field.value === "true";
    }
    return "";
  };

  return (
    <div>
      <h2>Define your structure</h2>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            value={field.name}
            onChange={(e) => handleChangeField(index, "name", e.target.value)}
            placeholder="Name"
          />
          <select
            value={field.type}
            onChange={(e) => handleChangeField(index, "type", e.target.value)}
          >
            <option value="String">String</option>
            <option value="Number">Number</option>
            <option value="Boolean">Boolean</option>
          </select>
          {field.type !== "Boolean" ? (
            <input
              type={field.type === "Number" ? "number" : "text"}
              value={field.value}
              onChange={(e) =>
                handleChangeField(index, "value", e.target.value)
              }
              placeholder={`Enter ${field.type}`}
            />
          ) : (
            <select
              value={field.value}
              onChange={(e) =>
                handleChangeField(index, "value", e.target.value)
              }
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          )}

          <button onClick={() => handleRemoveField(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddField}>+ Add Field</button>
      <br />
      <br />
      <div>
        <label>Limit: </label>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value))}
        />
      </div>
      <br />
      <button onClick={generateJSON}>Get JSON Data</button>
      <br />
      <div>{jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>}</div>
    </div>
  );
};

export default JSONGenerator;
