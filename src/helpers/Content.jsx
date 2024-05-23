import { useState } from "react";

const Content = () => {
  const [datas, setDatas] = useState([]);

  const [fields, setFields] = useState([
    { inputName: "name1", inputType: "String", inputValues: "454" },
    { inputName: "name02", inputType: "Number", inputValues: "54" },
    { inputName: "name30", inputType: "Boolean", inputValues: "554" },
  ]);

  const handleChange = (index, fieldKeys, value) => {
    const updateField = [...fields];
    updateField[index][fieldKeys] = value;
    setFields(updateField);
  };

  const handleSubmit = () => {
    const values = [...fields];
    const json = JSON.stringify(values, null, 2);
    setDatas(json);
    setFields([...fields, { inputName: "", inputType: "", inputValues: "" }]);
  };

  // const generateJSON = () => {
  //   const data = [];
  //   for (let i = 0; i < limit; i++) {
  //     const item = {};
  //     fields.forEach((field) => {
  //       if (field.name) {
  //         item[field.name] = generateFieldValue(field);
  //       }
  //     });
  //     data.push(item);
  //   }
  //   setJsonData(data);
  // };

  return (
    <>
      <section className="my-16 p-3">
        <h1 className="text-center text-2xl font-bold">JSON Generator</h1>
        {fields.map((field, index) => (
          <main key={index}>
            <div>
              <label>Title</label>
              <input
                type="text"
                value={field.inputName}
                onChange={(e) =>
                  handleChange(index, "inputName", e.target.value)
                }
              />
            </div>
            <div>
              <label>Type:</label>
              <select
                value={field.inputType}
                onChange={(e) =>
                  handleChange(index, "inputType", e.target.value)
                }
              >
                <option value="string">String</option>
                <option value="number">Number</option>
                <option value="boolean">boolean</option>
              </select>
            </div>
            <div>
              <label>Values</label>
              <input
                type="text"
                value={field.inputValues}
                onChange={(e) =>
                  handleChange(index, "inputValues", e.target.value)
                }
              />
            </div>

            <hr />
          </main>
        ))}
      </section>

      <section>
        <div>
          <button className="button_styles" onClick={handleSubmit}>
            GET DATA
          </button>
          <br />
          <br />
          <div>
            <span>Your Data:</span>
            <pre>{datas}</pre>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
