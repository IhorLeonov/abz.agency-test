export const errorWrapper = (message: string) => {
  if (message.includes("401")) {
    return "Authorization failed!";
  } else if (message.includes("409")) {
    return "User with this phone or email already exist!";
  } else if (message.includes("422")) {
    return "Validation failed!";
  } else return message;
};

// function for changing error text from server for best user understanding
