// Middleware to validate user registration inputs (already defined)
// Middleware to validate user registration inputs
const validateUserRegistration = (req, res, next) => {
  const { name, email, mobile, password, confirmPassword } = req.body;

  if (!name || !email || !mobile || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  next();
};

// Middleware to validate user login inputs
const validateUserLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  next();
};

module.exports = { validateUserRegistration, validateUserLogin };
