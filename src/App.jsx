import { useForm } from "react-hook-form";
import { useState } from "react";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    reset,
  } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data) => {
    setShowSuccess(false);
    let r = await fetch("https://form-handeling-backend.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (r.ok) {
      setShowSuccess(true);
      reset();
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          background: "#fff",
          padding: "2.5rem 2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)",
          minWidth: "340px",
          maxWidth: "360px",
          border: "1px solid #d1d5db",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          fontFamily: "Georgia, serif",
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: "1.5rem",
            color: "#22223b",
            textAlign: "center",
            letterSpacing: "1px",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "1.7rem",
            borderBottom: "1px solid #d1d5db",
            paddingBottom: "0.7rem",
          }}
        >
          Login Form
        </h2>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
        >
          <label
            style={{
              fontWeight: 600,
              color: "#4a4e69",
              marginBottom: "0.2rem",
              fontSize: "1rem",
            }}
          >
            Username
          </label>
          <input
            placeholder="Enter your username"
            type="text"
            {...register("username", {
              required: { value: true, message: "This field is Required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 10, message: "Max length is 10" },
            })}
            style={{
              padding: "0.6rem",
              borderRadius: "0.3rem",
              border: errors.username
                ? "2px solid #b22222"
                : "1.5px solid #bfc0c0",
              outline: "none",
              fontSize: "1rem",
              background: "#f8f9fa",
              fontFamily: "inherit",
              transition: "border 0.2s",
            }}
          />
          {errors.username && (
            <p style={{ color: "#b22222", margin: 0, fontSize: "0.95rem" }}>
              {errors.username.message}
            </p>
          )}
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
        >
          <label
            style={{
              fontWeight: 600,
              color: "#4a4e69",
              marginBottom: "0.2rem",
              fontSize: "1rem",
            }}
          >
            Password
          </label>
          <input
            placeholder="Enter your password"
            type="password"
            {...register("password", {
              required: { value: true, message: "This field is Required" },
              minLength: { value: 6, message: "Min length is 6" },
              maxLength: { value: 12, message: "Max length is 12" },
            })}
            style={{
              padding: "0.6rem",
              borderRadius: "0.3rem",
              border: errors.password
                ? "2px solid #b22222"
                : "1.5px solid #bfc0c0",
              outline: "none",
              fontSize: "1rem",
              background: "#f8f9fa",
              fontFamily: "inherit",
              transition: "border 0.2s",
            }}
          />
          {errors.password && (
            <p style={{ color: "#b22222", margin: 0, fontSize: "0.95rem" }}>
              {errors.password.message}
            </p>
          )}
        </div>
        <input
          type="submit"
          value={isSubmitting ? "Submitting..." : "Submit"}
          disabled={isSubmitting}
          style={{
            padding: "0.7rem",
            borderRadius: "0.3rem",
            border: "1px solid #22223b",
            background: isSubmitting ? "#bfc0c0" : "#22223b",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1.05rem",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            fontFamily: "inherit",
            marginTop: "0.5rem",
            transition: "background 0.2s",
          }}
        />
        {showSuccess && (
          <p
            style={{
              color: "#228b22",
              textAlign: "center",
              margin: 0,
              fontWeight: 500,
              fontFamily: "inherit",
            }}
          >
            Your data is showing on{" "}
            <a
              href="https://form-handeling-backend.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#22223b", textDecoration: "underline" }}
            >
              https://form-handeling-backend.onrender.com/
            </a>
          </p>
        )}
      </form>
    </div>
  );
};
export default App;
