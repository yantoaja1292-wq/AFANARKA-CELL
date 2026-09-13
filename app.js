function pesan() {
  const operator = document.getElementById("operator").value;
  const nomor = document.getElementById("nomor").value.trim();
  const nominal = document.getElementById("nominal");
  const nominalText = nominal.options[nominal.selectedIndex]?.text || "";

  if (!operator || !nomor || !nominal.value) {
    alert("Mohon lengkapi operator, nomor HP, dan nominal pulsa.");
    return;
  }

  // GANTI NOMOR INI dengan nomor WhatsApp AFANARKA CELL.
  const whatsapp = "6281234567890";
  const pesan = `Halo AFANARKA CELL, saya ingin membeli pulsa.%0A%0AOperator: ${operator}%0ANomor: ${nomor}%0ANominal: ${nominalText}%0A%0AMohon informasi pembayaran.`;
  window.open(`https://wa.me/${whatsapp}?text=${pesan}`, "_blank");
}
