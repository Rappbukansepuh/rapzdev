<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 📱 KasClass-App (UangKas Pro)

**KasClass-App** adalah aplikasi manajemen keuangan kas kelas berbasis mobile yang dirancang khusus untuk mempermudah tugas Bendahara sekolah dalam mengelola transparansi dana secara praktis, akurat, dan efisien. Aplikasi ini dibangun di atas platform **React Native** menggunakan framework **Expo (Expo Router)**.

---

## ✨ Fitur Unggulan

* **💰 Pencatatan Transaksi Real-Time**: Mendukung pencatatan pemasukan (+) dan pengeluaran (-) kas secara instan dengan kalkulasi otomatis terhadap total saldo terkini.
* **🌙 Sinkronisasi Tema Otomatis**: Fitur *Dark Mode* dan *Light Mode* yang tersinkronisasi secara berkala dan konsisten di seluruh halaman (*Home*, *Tools*, dan *Profile*).
* **💬 Sistem Penagihan WhatsApp**: Integrasi *deep-linking* ke aplikasi WhatsApp menggunakan template pesan yang dinamis untuk mengingatkan teman sekelas yang belum membayar kas.
* **📋 Eksport & Berbagi Laporan**: Fitur untuk menyusun seluruh riwayat transaksi dan rincian saldo menjadi format teks terstruktur yang siap dibagikan ke grup kelas atau Wali Kelas.
* **🔔 Notifikasi Lokal (Expo Notifications)**: Pemicu respon *push notification* lokal saat aplikasi pertama kali dimuat serta konfirmasi sukses ketika transaksi baru berhasil disimpan.
* **💾 Penyimpanan Lokal Persisten**: Menggunakan `@react-native-async-storage/async-storage` untuk memastikan seluruh data keuangan tetap aman di memori perangkat meskipun aplikasi ditutup.

---

## 🛠️ Arsitektur & Teknologi

* **Framework Utama**: React Native (Expo Router)
* **Bahasa Pemrograman**: TypeScript / JavaScript
* **Manajemen Data**: AsyncStorage (Penyimpanan Lokal Persisten)
* **Penyedia Fitur Perangkat**: `expo-notifications`, `Linking` (Deep Linking), `Share` API
* **Struktur UI**: Komponen modular dengan optimasi performa melalui `ScrollView`, `Modal`, dan penanganan `Platform.OS` (Android / iOS / Web).

---

## 🚀 Panduan Menjalankan Proyek secara Lokal

### **Prasyarat (Prerequisites):**
Pastikan perangkat Anda telah menginstal **Node.js** (versi terbaru yang direkomendasikan).

1.  **Kloning Repositori:**
    ```bash
    git clone [https://github.com/Rappbukansepuh/Aplikasi-KasClass.git](https://github.com/Rappbukansepuh/Aplikasi-KasClass.git)
    cd Aplikasi-KasClass
    ```

2.  **Instalasi Dependencies:**
    ```bash
    npm install
    ```

3.  **Menjalankan Development Server:**
    ```bash
    npx expo start
    ```
    *Pindai (scan) QR Code yang muncul di terminal menggunakan aplikasi **Expo Go** pada perangkat Android atau iOS Anda untuk menjalankan aplikasi secara langsung.*

---

## 📦 Prosedur Build Menjadi File APK (Android Deployment)

Aplikasi ini siap dirakit menjadi file mentahan `.apk` menggunakan **EAS (Expo Application Services)** dengan langkah-langkah berikut:

1.  **Instalasi EAS CLI secara Global:**
    ```bash
    npm install -g eas-cli
    ```
2.  **Inisialisasi Konfigurasi Proyek:**
    ```bash
    eas build:configure
    ```
3.  **Eksekusi Build ke Cloud Server:**
    ```bash
    eas build --platform android --profile preview
    ```
    *Setelah proses perakitan selesai, unduh file `.apk` melalui tautan atau QR Code yang disediakan di terminal untuk langsung diinstal di perangkat Android.*

---

## 📝 Profil Pengembangan
Proyek ini dikembangkan secara mandiri sebagai bagian dari portofolio *Software Development*, berfokus pada implementasi arsitektur navigasi berbasis tab, manajemen *state* lokal, optimalisasi UI lintas platform, serta pemanfaatan API modul bawaan perangkat keras.
