export const profile = (req, res) => {
  res.render("profile", { pageTitle: "Profile" });
  return;
};

export const login = (req, res) => {
  res.render("login", { pageTitle: "Login" });
  return;
};
