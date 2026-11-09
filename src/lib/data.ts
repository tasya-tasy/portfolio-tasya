// ============================================================
// DATA.TS — Satu file untuk seluruh konten portfolio
// Edit file ini untuk mengubah konten website
// ============================================================

// ---------- PROFIL ----------
export const profile = {
  name: "Tasya Anisa",
  headline: "Technology Enthusiast | Business & Entrepreneurship | Digital Innovation",
  shortBio:
    "Fresh graduate Teknik Informatika dengan ketertarikan pada pengembangan teknologi, pengelolaan data, analisis sistem, dan kewirausahaan. Memiliki pengalaman membangun usaha mandiri dan mengembangkan proyek teknologi berbasis kecerdasan buatan.",
  university: "Politeknik Negeri Lhokseumawe",
  major: "Teknik Informatika",
  gpa: "3.44",
  status: "Fresh Graduate",
  avatarUrl: "/profile.jpg", // File ada di public/profile.jpg
 cvUrl: "/projects/CV_ATS_TASYA%20ANISA.pdf", // Taruh file CV di public/cv.pdf
};

// ---------- KONTAK ----------
export const contact = {
  email: "tasyaanisa733@gmail.com", // Ganti dengan email asli
  linkedin: "https://linkedin.com/in/placeholder", // Ganti dengan URL LinkedIn
  github: "https://github.com/placeholder", // Ganti dengan URL GitHub
  whatsapp: "https://wa.me/6282274079271", // Nomor WA Tasya Anisa
};

// ---------- ABOUT ----------
export const about = {
  paragraphs: [
    "Saya merupakan lulusan Teknik Informatika dari Politeknik Negeri Lhokseumawe dengan IPK 3,44. Memiliki ketertarikan pada pengembangan teknologi, pengelolaan data, analisis sistem, serta pengembangan bisnis.",
    "Selain latar belakang akademik di bidang teknologi, saya memiliki pengalaman dalam membangun dan mengembangkan usaha secara mandiri. Pengalaman tersebut mencakup pengelolaan keuangan, produksi, pemasaran, serta partisipasi dalam program pendanaan kewirausahaan mahasiswa.",
    "Saya adalah pribadi yang adaptif, teliti, komunikatif, bertanggung jawab, dan memiliki semangat untuk terus belajar serta mengembangkan kemampuan di dunia profesional.",
  ],
  interests: [
    "Pengembangan Teknologi",
    "Pengelolaan Data",
    "Analisis Sistem",
    "Kewirausahaan",
    "Pengolahan Citra Digital",
  ],
};

// ---------- PENDIDIKAN ----------
export const education = [
  {
    institution: "Politeknik Negeri Lhokseumawe",
    degree: "Diploma / Sarjana Terapan",
    major: "Teknik Informatika",
    gpa: "3.44",
    // Tidak menyertakan tahun karena belum terkonfirmasi
    description:
      "Mempelajari pengembangan perangkat lunak, basis data, jaringan komputer, pengolahan citra digital, dan kecerdasan buatan. Aktif dalam kegiatan kewirausahaan mahasiswa.",
  },
];

// ---------- PENGALAMAN ----------
export const experiences = [
  {
    id: "internship",
    title: "Internship / Praktik Kerja Lapangan",
    company: "Nama Perusahaan", // Ganti dengan nama perusahaan
    period: "Periode PKL", // Ganti dengan periode asli
    type: "Internship" as const,
    description:
      "Membantu pelaksanaan inspeksi borescope, pengelolaan data operasional, penyusunan dokumentasi teknis, serta analisis kebutuhan dan permasalahan sistem.",
    tasks: [
      "Membantu proses inspeksi borescope pada mesin pembangkit listrik",
      "Melakukan pengelolaan dan pengolahan data operasional",
      "Menyusun dokumentasi teknis hasil inspeksi",
      "Menganalisis kebutuhan dan permasalahan sistem yang ada",
    ],
  },
  {
    id: "entrepreneurship",
    title: "Founder & Pengelola",
    company: "Keripik Pisang Lumer by Crunchiess",
    period: "Periode Usaha", // Ganti dengan periode asli
    type: "Entrepreneurship" as const,
    description:
      "Membangun dan mengembangkan brand usaha makanan ringan secara mandiri. Terlibat dalam seluruh aspek pengelolaan usaha mulai dari keuangan, produksi, hingga penjualan.",
    tasks: [
      "Membangun dan mengembangkan brand Keripik Pisang Lumer by Crunchiess",
      "Mengelola aspek keuangan, produksi, dan penjualan",
      "Mengikuti program pendanaan kewirausahaan mahasiswa",
      "Merancang strategi pemasaran dan pengembangan produk",
    ],
  },
];

// ---------- PROYEK ----------
export const projects = [
  {
    id: "borescope-cnn",
    title: "Sistem Deteksi dan Analisis Kondisi Ruang Bakar Berbasis Citra Borescope Menggunakan CNN",
    summary:
      "Pengembangan sistem untuk mendeteksi dan menganalisis kondisi ruang bakar mesin pembangkit listrik dari citra borescope menggunakan Convolutional Neural Network dengan arsitektur ResNet-50.",
    description:
      "Proyek tugas akhir yang mengembangkan sistem berbasis kecerdasan buatan untuk membantu identifikasi kondisi komponen ruang bakar mesin pembangkit listrik. Sistem memanfaatkan metode Convolutional Neural Network (CNN) dengan arsitektur ResNet-50 untuk mengolah dan menganalisis citra digital hasil inspeksi borescope.",
    technologies: [
      "Python",
      "Deep Learning",
      "CNN (ResNet-50)",
      "Pengolahan Citra Digital",
      "Sistem Berbasis Web",
    ],
    category: "Artificial Intelligence",
    demoUrl: "#", // Ganti dengan URL demo jika ada
    repoUrl: "#", // Ganti dengan URL GitHub repo
    images: ["/borescope-1.png"], // Screenshot di public/borescope-1.png
  },
];

// ---------- PENCAPAIAN ----------
export const achievements = [
  {
    id: "pendanaan-kewirausahaan",
    title: "Program Pendanaan Kewirausahaan Mahasiswa Tingkat Nasional",
    description:
      "Mengikuti program pendanaan kewirausahaan mahasiswa tingkat nasional dengan usaha Keripik Pisang Lumer by Crunchiess.",
    certificateUrl: "/certificates/pendanaan.pdf", // Ganti dengan file sertifikat
  },
  {
    id: "pemateri-kewirausahaan",
    title: "Pemateri Kegiatan Penjaringan Minat dan Bakat Kewirausahaan Mahasiswa",
    description:
      "Menjadi pemateri dalam kegiatan penjaringan minat dan bakat kewirausahaan mahasiswa, berbagi pengalaman membangun dan mengelola usaha.",
    certificateUrl: "/certificates/pemateri.pdf", // Ganti dengan file sertifikat
  },
];

// ---------- SKILLS ----------
export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Technical Skills",
    skills: [
      "Website Development",
      "Data Management",
      "System Testing",
      "System Analysis",
      "Digital Image Processing",
      "Deep Learning",
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Analytical Thinking",
      "Time Management",
      "Entrepreneurship",
    ],
  },
];

// ---------- SERTIFIKAT ----------
export const certificates = [
  {
    id: "cert-1",
    title: "Nama Sertifikat", // Ganti
    issuer: "Penyelenggara", // Ganti
    year: "", // Opsional
    imageUrl: "/certificates/cert-1.jpg", // Ganti dengan gambar sertifikat
  },
  // Tambahkan sertifikat lainnya di sini
];

// ---------- NAVIGASI ----------
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

