const capitalizeFirstLetter = (name) => {
  if (typeof name !== "string" || name.length === 0) {
    console.log("The given word must be string and not empty!");
  } else {
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(capitalized);
  }
};

capitalizeFirstLetter("hello");


// კარგია, უბრალოდ ორიოდე რეკომენდაცია: 
// 1.Return Value - კონსოლში ჩაწერის ნაცვლად, უკეთესია ფუნქცია აბრუნებდეს შედეგს. 
// 2. Error handling - შენს კოდში ფუნქცია ლოგავს ერორ მესიჯს და არ ხდება ცალსახად ერორის დამუშავება, error case - არ გვიჩანს. 
// 

// const capitalizeFirstLetter = (name) => {
//   if (typeof name !== "string" || name.length === 0) {
//     throw new Error("The given word must be a string and not empty");
//   }
//   return name.charAt(0).toUpperCase() + name.slice(1);
// };

// try {
//   const result = capitalizeFirstLetter("hello");
//   console.log(result);
// } catch (error) {
//   console.error(error.message);
// } 



 