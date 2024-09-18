const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");


const userData = {};

const addData = () => {
  const nameValue = name.value;
  const emailValue = email.value;
  const messageValue = message.value;

  if (nameValue.length > 1 && emailValue.length > 6 && messageValue.length > 1) {
    userData.name = nameValue;
    userData.email = emailValue;
    userData.message = messageValue;

    alert('успішне відправлення')
  } else {
    alert('введіть дані')
  }
//   userData.name = nameValue;
//   userData.email = emailValue;
//   userData.message = messageValue;
};
addData()

export {userData, addData}