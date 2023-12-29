type ValidatePhoto = (
  file: File | null,
  fileErrorText: string,
  setFileErrorText: React.Dispatch<React.SetStateAction<string>>,
  setIsFileOk: React.Dispatch<React.SetStateAction<boolean>>
) => void;

export const validatePhoto: ValidatePhoto = (
  file,
  fileErrorText,
  setFileErrorText,
  setIsFileOk
) => {
  if (!fileErrorText.includes("idle") && (!file || file === null)) {
    setFileErrorText("You should choose the photo");
    setIsFileOk(false);
  }

  if (file) {
    if (file?.size > 5242880) {
      setFileErrorText("The photo size must not be greater than 5 Mb");
      setIsFileOk(false);
    } else {
      setFileErrorText("");
      setIsFileOk(true);
    }
  }
};

// function for validation photo befor sending to server
