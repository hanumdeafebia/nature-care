import { useState } from "react";
import Naturecare from "./components/Naturecare";
import "./index.css";

const daftarProduk = [
  {
    nama: "Eco Bottle",
    manfaat: "Botol minum yang dapat digunakan kembali.",
    harga: 25000,
    tersedia: true,
    kategori: "Perlengkapan Minum",
  },
  {
    nama: "Reusable Bag",
    manfaat: "Tas belanja untuk mengurangi plastik sekali pakai.",
    harga: 15000,
    tersedia: true,
    kategori: "Perlengkapan Belanja",
  },
  {
    nama: "Bamboo Toothbrush",
    manfaat: "Sikat gigi berbahan bambu.",
    harga: 10000,
    tersedia: false,
    kategori: "Perawatan",
  },
];

export default function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const produkDitampilkan =
    kategoriAktif === "Semua"
      ? daftarProduk
      : daftarProduk.filter(
          (produk) => produk.kategori === kategoriAktif
        );

  return (
    <main>
      <h1>NatureCare</h1>
      <p>Produk untuk hidup lebih ramah lingkungan.</p>

      <section className="filter-kategori">
        <h2>Filter Kategori Produk</h2>

        <label htmlFor="kategori">Pilih kategori: </label>
        <select
          id="kategori"
          value={kategoriAktif}
          onChange={(event) => setKategoriAktif(event.target.value)}
        >
          <option value="Semua">Semua Produk</option>
          <option value="Perlengkapan Minum">
            Perlengkapan Minum
          </option>
          <option value="Perlengkapan Belanja">
            Perlengkapan Belanja
          </option>
          <option value="Perawatan">Perawatan</option>
        </select>
      </section>

      <section className="daftar-produk">
        {produkDitampilkan.map((produk) => (
          <Naturecare
            key={produk.nama}
            nama={produk.nama}
            manfaat={produk.manfaat}
            harga={produk.harga}
            tersedia={produk.tersedia}
          />
        ))}
      </section>

      <p>Jumlah produk ditampilkan: {produkDitampilkan.length}</p>
    </main>
  );
}