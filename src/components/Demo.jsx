import { useState, useEffect } from "react";

function JSONGenerator() {
  const [idCount, setIdCount] = useState(0);

  const [fields, setFields] = useState([]);
  const [currentField, setCurrentField] = useState({
    id: idCount,
    name: "",
    type: "",
    value: "",
  });

  useEffect(() => {
    setCurrentField((prevField) => ({
      ...prevField,
      id: idCount,
    }));
  }, [idCount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentField((prevField) => ({
      ...prevField,
      [name]: value,
    }));
  };

  const handleAddField = () => {
    setFields((prevFields) => [...prevFields, currentField]);
    setIdCount((prev) => prev + 1);
    setCurrentField({
      id: idCount + 1,
      name: "",
      type: "",
      value: "",
    });
  };

  const generateJSON = () => {
    const jsonvalue = JSON.stringify(fields, null, 2);
    return jsonvalue;
  };

  return (
    <div>
      <h2>Custom JSON Generator</h2>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={currentField.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={currentField.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={currentField.type}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Value:</label>
        <input
          type="text"
          name="value"
          value={currentField.value}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleAddField}>Add Field</button>
      <div>
        <h3>Generated JSON:</h3>
        <pre>{generateJSON()}</pre>
      </div>
    </div>
  );
}

export default JSONGenerator;
