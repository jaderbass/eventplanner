setFormData({
  ...formData,
  [name]: value
});

formData = {
  username: "Anna",
  email: "neu@example.com",
  phone: "",
  participants: 1
}

const { name, value } = event.target;

name = "email";
value = "anna@example.com";

setFormData({
  ...formData,
  email: "neu@example.com"
});