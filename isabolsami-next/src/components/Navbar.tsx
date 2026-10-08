import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Navegación principal">
      <a className={styles.logo} href="#inicio">
        Navbar
      </a>

      <div className={styles.enlaces}>
        <a href="#inicio">Home</a>
        <a href="#funcionalidades">Features</a>
        <a href="#precios">Pricing</a>
        <a href="informacion">About</a>

      </div>
    </nav>
  );
}