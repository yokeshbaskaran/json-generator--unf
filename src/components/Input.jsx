import { useState } from "react";

const InputForm = () => {
  const [copyText, setCopyText] = useState("");

  const handleCopy = () => {
    const paragraph = document.getElementById("content");
    const output = paragraph.innerHTML;
    navigator.clipboard
      .writeText(output)
      .then(() => {
        setCopyText("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div>
      <h2>Enter Input Values</h2>

      <p id="content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ab
        labore, amet reiciendis cupiditate optio a fuga dicta totam laboriosam
        id itaque consequatur magni, tenetur sapiente accusamus. Veniam totam
        porro molestiae eius dolor in facilis? Distinctio, laborum quasi nulla
        nisi illo deleniti quas neque nemo ex repudiandae libero, aperiam
        officiis?
      </p>
      <br />
      <br />

      <button onClick={handleCopy}>Copy Text</button>
      {copyText && (
        <span className="bg-black rounded-md text-center block w-[100px] text-white p-1">
          {copyText}
        </span>
      )}
    </div>
  );
};

export default InputForm;
