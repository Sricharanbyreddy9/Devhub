// Final merged version of login.js

// 1. User login feature: validating username/password
function login(username, password) {
  const savedUsername = "charan";
  const savedPassword = "12345";

  if (username === savedUsername && password === savedPassword) {
    console.log("✅ Login successful!");
  } else {
    console.log("❌ Invalid username or password.");
  }
}

// 2. Password reset feature: generating OTP
function resetPassword() {
  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
  console.log("🔐 Your OTP is:", otp);
}