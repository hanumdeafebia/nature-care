import Naturecare from "./components/Naturecare";
import "./index.css";

export default function App() {
  return (
    <main>
      <h1>NatureCare</h1>
      <p>Produk untuk hidup lebih ramah lingkungan.</p>

      <Naturecare
        nama="Eco Bottle"
        manfaat="Botol minum yang dapat digunakan kembali."
        harga={25000}
        tersedia={true}
      />

      <Naturecare
        nama="Reusable Bag"
        manfaat="Tas belanja untuk mengurangi plastik sekali pakai."
        harga={15000}
        tersedia={true}
      />

      <Naturecare
        nama="Bamboo Toothbrush"
        manfaat="Sikat gigi berbahan bambu."
        harga={10000}
        tersedia={false}
      />
    </main>
  );
}