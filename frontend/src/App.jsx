import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "./services/api";

function Navbar() {
  return (
    <div className="navbar">

      <h2>AI Complaint System</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/signup">Signup</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

        <Link to="/complaints">Complaints</Link>

      </div>

    </div>
  );
}
function Home() {
  return (
    <div className="container">
      <h1>AI Smart Complaint Management System</h1>

      <p>
        AI-powered complaint registration and tracking platform
      </p>

      <div className="nav-links">
        <Link to="/signup">Signup</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register Complaint</Link>

        <Link to="/complaints">View Complaints</Link>
      </div>
    </div>
  );
}

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/signup", formData);

      alert(res.data.message);
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      alert("Login successful");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    category: "",
    location: "",
  });

  const [aiResult, setAiResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await API.post(
        "/complaints",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const aiResponse = await API.post("/ai/analyze", {
        complaint: formData.description,
      });

      setAiResult(aiResponse.data.result);

      alert("Complaint submitted successfully");

    } catch (error) {

      console.log(error);

      alert("Failed to submit complaint");
    }
  };

  return (
    <div className="container">

      <h2>Complaint Registration</h2>

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Complaint Title"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Complaint Description"
          rows="5"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Complaint Category"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit Complaint
        </button>

      </form>

      {
        aiResult && (
          <div className="ai-box">
            <h3>AI Analysis Result</h3>

            <pre>{aiResult}</pre>
          </div>
        )
      }

    </div>
  );
}

function Complaints() {

  const [complaints, setComplaints] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const fetchComplaints = async () => {

    try {

      const res = await API.get("/complaints");

      setComplaints(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const searchByLocation = async () => {

    try {

      const res = await API.get(
        `/complaints/search/location?location=${search}`
      );

      setComplaints(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const filterByCategory = async () => {

    try {

      const res = await API.get("/complaints");

      const filtered = res.data.filter(
        (item) =>
          item.category.toLowerCase() ===
          category.toLowerCase()
      );

      setComplaints(filtered);

    } catch (error) {

      console.log(error);
    }
  };

  const updateStatus = async (id) => {

    const status = prompt("Enter new status");

    if (!status) return;

    try {

      await API.put(`/complaints/${id}`, {
        status,
      });

      fetchComplaints();

    } catch (error) {

      console.log(error);
    }
  };

  const deleteComplaint = async (id) => {

    try {

      await API.delete(`/complaints/${id}`);

      fetchComplaints();

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchComplaints();

  }, []);

  return (
    <div className="container">

      <h2>Complaint List</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search by location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          placeholder="Filter by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={searchByLocation}>
          Search
        </button>

        <button onClick={filterByCategory}>
          Filter
        </button>

      </div>

      <div className="complaint-grid">

        {
          complaints.map((item) => (

            <div className="card" key={item._id}>

              <h3>{item.title}</h3>

              <p><strong>Name:</strong> {item.name}</p>

              <p><strong>Category:</strong> {item.category}</p>

              <p><strong>Location:</strong> {item.location}</p>

              <p><strong>Status:</strong> {item.status}</p>

              <p>{item.description}</p>

              <button
                onClick={() => updateStatus(item._id)}
              >
                Update Status
              </button>

              <button
                onClick={() => deleteComplaint(item._id)}
              >
                Delete
              </button>

            </div>
          ))
        }

      </div>

    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/complaints" element={<Complaints />} />

      </Routes>
    </>
  );
}

export default App;