export default function Naturecare({
  nama,
  manfaat,
  harga,
  tersedia
}) {
  return (
    <section className="produk">
      <h2>{nama}</h2>
      <p className="product-category">Perawatan Alami</p>
      <p>{manfaat}</p>
      <p>Harga: Rp{harga.toLocaleString("id-ID")}</p>
      <p>
        Status:{" "}
        <span className={tersedia ? "status-tersedia" : "status-habis"}>
          {tersedia ? "Tersedia" : "Tidak tersedia"}
        </span>
      </p>
    </section>
  );
}