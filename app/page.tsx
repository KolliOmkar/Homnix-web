export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          color: "#6d28d9",
          fontWeight: "bold"
        }}
      >
        Homnix
      </h1>

      <p
        style={{
          fontSize: "22px",
          marginTop: "20px"
        }}
      >
        All Services. One Trusted Platform.
      </p>

      <button
        style={{
          marginTop: "30px",
          background: "#6d28d9",
          color: "white",
          padding: "15px 30px",
          borderRadius: "16px",
          border: "none",
          fontSize: "18px"
        }}
      >
        Book Now
      </button>
    </main>
  );
}
