const capitalizeFirstLetter = (name) => {
  if (typeof name !== "string" || name.length === 0) {
    console.log("The given word must be string and not empty!");
  } else {
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(capitalized);
  }
};

capitalizeFirstLetter("hello");
