import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff, FiBookOpen } from "react-icons/fi";

import { loginUser } from "../../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!formData.email || !formData.password) {
      setMessage("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser(formData);

      localStorage.setItem("token", response.data.token);

      localStorage.setItem("user", JSON.stringify(response.data.user));

      setMessage("Login Successful");

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);
    } catch (error) {
      setMessage(error.response?.data?.message || "Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-6">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
        {/* Left Side */}

        <div className="hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white lg:flex lg:flex-col lg:justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
            <FiBookOpen size={32} />
          </div>

          <h1 className="mt-8 text-4xl font-bold">Notes Maker</h1>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            Organize your ideas, manage your notes, and stay productive with a
            clean and modern note management experience.
          </p>

          <div className="mt-12 space-y-4 text-blue-100">
            <p>✓ Secure Authentication</p>

            <p>✓ Create & Manage Notes</p>

            <p>✓ Fast and Responsive UI</p>
          </div>
        </div>

        {/* Right Side */}

        <div className="p-8 md:p-14">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h2>

          <p className="mt-2 text-gray-500">Sign in to continue.</p>

          {message && (
            <div
              className={`mt-6 rounded-xl border px-4 py-3 text-sm font-medium ${
                message === "Login Successful"
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email
              </label>

              <div className="flex items-center rounded-xl border border-gray-300 bg-gray-50 px-4 focus-within:border-blue-600 focus-within:bg-white">
                <FiMail className="text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="flex items-center rounded-xl border border-gray-300 bg-gray-50 px-4 focus-within:border-blue-600 focus-within:bg-white">
                <FiLock className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {loading ? (
                <>
                  <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Logging In...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;