const getProfile = (req, res) => {
  // some logic
  res.status(200).json({
    id: "123",
    firstName: "John",
    lastName: "Doe",
  });
};

const updateProfile = (req, res) => {
  // some logic
  res.status(200).json({
    id: "123",
    firstName: "Tom",
    lastName: "Micky",
  });
};

export {getProfile,  updateProfile}