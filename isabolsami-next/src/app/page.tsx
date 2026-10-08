import ProgressBar from "@/components/ProgressBar";
import Navbar from "../components/Navbar";
import Formulario from "@/components/Formulario";
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
    

      <h2>Reto #2: Progress Bar</h2> 
      <ProgressBar />

      <h2>Reto #3: Formulario completo</h2>
      <Formulario />
      </main>
  );
}