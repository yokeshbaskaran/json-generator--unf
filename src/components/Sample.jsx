import { useState } from "react";

const InputForm = () => {
  const [inputFields, setInputFields] = useState([{ name: "", value: "" }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setInputFields((prevInputFields) => {
      const newInputFields = [...prevInputFields];
      newInputFields[index] = { name, value };
      return newInputFields;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const outputObject = {};
    inputFields.forEach((field) => {
      outputObject[field.name] = field.value;
    });
    console.log(outputObject); // Displaying in console
  };

  return (
    <div>
      <h2>Enter Input Values</h2>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <label>{`Input${index + 1}: `}</label>
            <input
              type="text"
              name="name"
              value={inputField.name}
              onChange={(e) => handleChange(index, e)}
            />
            <span> = </span>
            <input
              type="text"
              name="value"
              value={inputField.value}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setInputFields([...inputFields, { name: "", value: "" }])
          }
        >
          Add Input
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;

// import { useState } from "react";

// const InputForm = () => {
//   const [inputFields, setInputFields] = useState([{ name: "", value: "" }]);
//   const [output, setOutput] = useState(null);

//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const newInputFields = [...inputFields];
//     newInputFields[index][name] = value;
//     setInputFields(newInputFields);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formattedOutput = inputFields.map((field) => ({
//       [field.name]: field.value,
//     }));
//     console.log(formattedOutput);
//     setOutput(formattedOutput);
//   };

//   return (
//     <div>
//       <h2>Enter Input Values</h2>
//       <form onSubmit={handleSubmit}>
//         {inputFields.map((inputField, index) => (
//           <div key={index}>
//             <label>{`Input${index + 1}: `}</label>
//             <input
//               type="text"
//               name="name"
//               value={inputField.name}
//               onChange={(e) => handleChange(index, e)}
//             />
//             <span> = </span>
//             <input
//               type="text"
//               name="value"
//               value={inputField.value}
//               onChange={(e) => handleChange(index, e)}
//             />
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             setInputFields([...inputFields, { name: "", value: "" }])
//           }
//         >
//           Add Input
//         </button>
//         <button type="submit">Submit</button>
//       </form>
//       {output && (
//         <div>
//           <h2>Output:</h2>
//           <pre>{JSON.stringify(output, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InputForm;

// import { useState } from "react";

// const Sample = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState([]);
//   const [initValue, setInitValue] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInitValue({
//       ...initValue,
//       [name]: value,
//     });
//   };

//   const handleClick = () => {
//     setData((prev) => [...prev, initValue]);
//     setCount((prev) => prev + 1);
//     setInitValue({
//       username: "",
//       password: "",
//     });
//   };

//   const jsonGenerate = () => {
//     return JSON.stringify(data, null, 2);
//   };

//   return (
//     <>
//       <h1>JSON Generator</h1>
//       <section>
//         <div>
//           <label>Id: {count}</label>
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name={handleChange}
//             value={initValue.username}
//             placeholder="Enter Username:"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             name="password"
//             type="password"
//             value={initValue.password}
//             placeholder="Enter Password:"
//             onChange={handleChange}
//           />
//         </div>
//         <br />
//         <button onClick={handleClick}>Click here!!</button>

//         <div>
//           <h3>Generated JSON:</h3>
//           <pre>{jsonGenerate()}</pre>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Sample;
