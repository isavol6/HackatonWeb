import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Reto #1: Navbar invertido</h1>

      <Navbar />
    </main>
  );
}