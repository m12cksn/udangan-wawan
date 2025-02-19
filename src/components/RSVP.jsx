import React, { useState, useEffect } from "react";
import { berkshire } from "@/app/fonts";
import { supabase } from "@/supabaseClient"; // Import Supabase

const RSVP = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [kehadiran, setKehadiran] = useState("hadir");
  const [texts, setTexts] = useState([]);

  // Ambil pesan dari Supabase saat halaman dibuka
  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("rsvp_message")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching messages:", error);
      else setTexts(data);
    };

    fetchMessages();
  }, []);

  // Simpan pesan ke database Supabase
  const handleSubmit = async () => {
    if (!nama || !pesan) {
      alert("Nama dan pesan harus diisi!");
      return;
    }

    const { data, error } = await supabase
      .from("rsvp_message") // Pastikan nama tabel benar
      .insert([{ name: nama, message: pesan }])
      .select(); // Supaya data yang baru masuk langsung dikembalikan

    console.log("Data:", data); // Debugging
    console.log("Error:", error); // Debugging

    if (error) {
      console.error("Gagal menyimpan pesan:", error);
      alert("Gagal menyimpan pesan. Coba lagi!");
    } else {
      setTexts([data[0], ...texts]); // Masukkan data terbaru ke state
      setNama("");
      setPesan("");
    }
  };

  return (
    <div id="rsvp">
      <div className="flex justify-center mx-auto">
        <div className="bg-[url('/images/oke1.webp')] bg-cover relative bg-center bg-opacity-20 max-w-sm py-28 w-full flex flex-col justify-center items-center overflow-hidden px-8">
          <div className="w-full backdrop-blur-lg bg-white/50 p-5 mt-3">
            <h1
              className={`${berkshire.className} text-xl text-slate-700 text-center mb-5`}
            >
              Konfirmasi Kehadiran
            </h1>
            <div className="flex flex-col gap-1">
              <label className="text-slate-800">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="h-9 p-3 shadow rounded"
                placeholder="Your Name ...."
              />
            </div>
            <div className="flex flex-col gap-1 mt-5">
              <label className="text-slate-800">Ucapan dan Do'a</label>
              <textarea
                rows={5}
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                className="rounded shadow p-3"
              />
            </div>
            {/* <div className="flex flex-col gap-1 mt-5">
              <label className="text-slate-800">Kehadiran</label>
              <select
                className="h-9 p-2"
                value={kehadiran}
                onChange={(e) => setKehadiran(e.target.value)}
              >
                <option value="hadir">Hadir</option>
                <option value="tidak hadir">Tidak Hadir</option>
              </select>
            </div> */}
            <div className="flex justify-start mt-5">
              <button
                onClick={handleSubmit}
                className="px-5 py-1 bg-purple-500 rounded shadow text-slate-100"
              >
                Kirim
              </button>
            </div>
          </div>
          <div className="w-full backdrop-blur-lg bg-white/50 p-5 mt-3 h-96 overflow-scroll">
            <h1
              className={`${berkshire.className} text-xl text-slate-700 text-center mb-3`}
            >
              Ucapan Teman & Kerabat
            </h1>
            {texts.length === 0 ? (
              <p className="text-center text-gray-500 mt-5">
                Belum ada ucapan.
              </p>
            ) : (
              texts.map((text, index) => (
                <div key={index} className="bg-white p-3 rounded">
                  <h1 className="text-slate-700">{text.message}</h1>
                  <p className="text-xs text-slate-900 mt-1">{text.name}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
