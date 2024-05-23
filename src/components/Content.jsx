import { useState } from "react";
import { FiCopy } from "react-icons/fi";
// import Tags from "../helpers/Tags";

const Content = () => {
  // const textId = useId();
  // const typeId = useId();
  // const valuesId = useId();

  const [fields, setFields] = useState([]);

  const [initData, setInitData] = useState({
    dataName: "",
    dataType: "string",
    dataValue: "",
  });

  const handleDataValueChange = (e) => {
    const { id, value } = e.target;
    setInitData((prev) => ({ ...prev, [id]: value }));
  };

  const getData = () => {
    setFields((prev) => [...prev, initData]);
    setInitData({
      dataName: "",
      dataType: "string",
      dataValue: "",
    });
  };

  const jsonFormat = () => {
    return JSON.stringify(fields, null, 2);
  };

  return (
    <>
      <section>
        <div className="yokii w-full h-auto md:h-[80vh] lg:w-[65%] p-2 my-5 mx-auto border border-black ">
          <h1>JSON Generator</h1>

          <div className="yoki w-full h-auto p-2 flex flex-col md:flex-row ">
            <div className="w-full md:w-1/2 m-1 p-2 yokiii">
              <div className="flex flex-col my-1">
                <span>Mention the Usage</span>
                <textarea placeholder="Type here"></textarea>
              </div>
              {/* ENTRIES---- */}
              <div className="my-3 w-full yokiii">
                <h2 className="text-[#71717A] text-center m-2">
                  Enter your data here
                </h2>

                <div className="flex flex-col">
                  <div className="flex justify-around">
                    <h3>Name</h3>
                    <h3>Type</h3>
                    <h3>Enter values</h3>
                  </div>
                  {/* JSON_ALL_FIELDS */}
                  <section className="yokii grid grid-cols-3">
                    {/* json-text */}
                    <div>
                      <input
                        type="text"
                        value={initData.dataName}
                        id="dataName"
                        placeholder="Enter String:"
                        onChange={handleDataValueChange}
                        required
                      />
                    </div>
                    {/* json-type */}
                    <div>
                      <select
                        id="dataType"
                        onChange={(e) =>
                          setInitData({ ...initData, dataType: e.target.value })
                        }
                      >
                        <option value="string">string</option>
                        <option value="number">number</option>
                        <option value="boolean">boolean</option>
                      </select>
                    </div>
                    {/* json-Entervalues */}
                    <div>
                      {initData.dataType === "string" ? (
                        <input
                          type="text"
                          value={initData.dataValue}
                          id="dataValue"
                          placeholder="Enter String:"
                          onChange={handleDataValueChange}
                          required
                        />
                      ) : initData.dataType === "number" ? (
                        <input
                          type="number"
                          value={initData.dataValue}
                          id="dataValue"
                          placeholder="Enter number:"
                          onChange={handleDataValueChange}
                          required
                        />
                      ) : (
                        <select
                          name="booleanType"
                          id="dataValue"
                          onChange={handleDataValueChange}
                        >
                          <option value="true">True</option>
                          <option value="false">False</option>
                        </select>
                      )}
                    </div>
                  </section>

                  <button onClick={getData}>Get the JSON Data</button>

                  {/* <Tags /> */}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 m-1 p-2 min-h-[350px] max-h-[400px] overflow-auto bg-[#dfdfdf] rounded-lg">
              <div>
                <h3 className="hidden">Entered Data</h3>
                <div className="px-2 py-1 flex items-center relative">
                  <pre className="flex-1">{jsonFormat()}</pre>
                  <div className="hidden">
                    <span className="button_styles">0 items</span>
                    <span className="button_styles hover_styles">
                      <FiCopy size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
