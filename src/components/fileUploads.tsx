import { useRef, useState, type ChangeEvent } from "react";

const FileUploads = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileUploadBtnRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  }

  return (
    <div className="flex items-center flex-col">
      <input
        ref={fileUploadBtnRef}
        className="hidden"
        type="file"
        onChange={handleFileChange}
      />
      <div
        className="text-center py-4 border-dotted border w-[500px] rounded"
        onClick={() => fileUploadBtnRef.current?.click()}
      >
        CLICK ME
      </div>
      {file && <p>{file?.name} has been selected</p>}
      {file && (
        <img src={URL.createObjectURL(file)} className="size-50 object-cover" />
      )}
    </div>
  );
};

export default FileUploads;
