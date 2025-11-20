// src/constants/i18n-core.jsx
// Export non-component functions only
import { createContext, useContext } from 'react';

export const I18nContext = createContext({ lang: 'en', setLang: () => {}, t: (k) => k });

export const resources = {
  en: {
    nav: { search: 'Search', cart: 'Cart' },
    pv: { title: 'Take a closer look.' },
    hero: {
      buy: 'Buy',
      price: 'From $1599 or $123/mo for 12 months',
    },
    feature:{fea_h1: 'See it all in a new light.'},
    showcase: {
      title: 'Rocket Chip',
      intro_1: 'Introducing',
      intro_2_emph: 'M4, the next generation of Apple silicon',
      intro_3: '. M4 powers',
      p2: 'It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that’s unbelievably thin, light, and powerful.',
      p3: 'A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.',
      learn_text: 'Learn more about Apple Intelligence',
      learn_url: 'https://www.apple.com/apple-intelligence/',
      metrics: {
        up_to: 'Up to',
        faster_4x: '4x faster',
        pro_render_than_m2: 'pro rendering performance than M2',
        faster_1_5x: '1.5x faster',
        cpu_than_m2: 'CPU performance than M2',
      },
    },
    performance: {
      title: 'Next-level graphics performance. Game on.',
      p1_a: 'Run graphics-intensive workflows with a responsiveness that keeps up with your imagination.\n' +
        '          The M4 family of chips features a GPU with a second-generation\n' +
        '          hardware-accelerated ray tracing engine that renders images faster',
      p1_span:'so gaming feels more immersive and realistic than ever.',
      p1_b: ' And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.',
    },
    highlights:{
      highlight_h2: 'There\'s never been a better time to upgrade.',
      highlight_h3: 'Here\'s what you get with the new MacBook Pro.',
      highlight_p1: 'Fly through demanding task up to 9.8x faster',
      display: {
        line1: 'A stunning',
        line2: 'Liquid Retina XDR',
        line3: 'display.',
      },
      ai: {
        line1: 'Built for',
        line2: 'Apple Intelligence.',
      },
      battery: {
        up_to: 'Up to',
        hours_highlight: '14 more hours',
        tail: 'battery life.',
        note: '(Up to 24 hours total.)',
      },
    },
    footer: {
      fp1: 'More ways to shop: Find an Apple Store or other retailer near you. Or call 0812 9077 7722.',
      fp2: 'Copyright © 2025 Apple Inc. All rights reserved.',

      privacy: "Privacy Policy",
      privacy_link: "https://www.apple.com/legal/privacy/",

      terms: "Terms of Use",
      terms_link: "https://www.apple.com/legal/internet-services/terms/site.html",

      sales: "Sales Policy",
      sales_link: "https://www.apple.com/legal/sales-support/sales-policies/retail_us.html",

      legal: "Legal",
      legal_link: "https://www.apple.com/legal/",

      sitemap: "Sites Map",
      sitemap_link: "https://www.apple.com/sitemap/",
    },

  },
  id: {
    nav: { search: 'Cari', cart: 'Keranjang' },
    pv: { title: 'Lihatlah lebih dekat.' },
    hero: {
      buy: 'Beli',
      price: 'Mulai dari Rp 26.499.000 atau Rp 2.208.250/bulan selama 12 bulan',
    },
    feature: {fea_h1: 'Lihat semuanya dengan sudut pandang baru.'},
    showcase: {
      title: 'Rocket Chip',
      intro_1: 'Memperkenalkan',
      intro_2_emph: 'M4, generasi terbaru Apple silicon',
      intro_3: '. M4 menghadirkan kemampuan',
      p2: 'M4 menjalankan Apple Intelligence di iPad Pro, sehingga Anda dapat menulis, berkreasi, dan menyelesaikan lebih banyak hal dengan mudah. Semua dalam desain yang sangat tipis, ringan, dan bertenaga.',
      p3: 'Mesin tampilan baru menghadirkan presisi, akurasi warna, dan kecerahan yang menakjubkan. Dan GPU generasi berikutnya dengan ray tracing yang dipercepat perangkat keras menghadirkan grafis setara konsol di ujung jari Anda.',
      learn_text: 'Pelajari selengkapnya tentang Apple Intelligence',
      learn_url: 'https://www.apple.com/id/apple-intelligence/',
      metrics: {
        up_to: 'Hingga',
        faster_4x: '4x lebih cepat',
        pro_render_than_m2: 'kinerja rendering pro dibandingkan M2',
        faster_1_5x: '1,5x lebih cepat',
        cpu_than_m2: 'kinerja CPU dibandingkan M2',
      },
    },
    performance: {
      title: 'Performa grafis tinggi. Saatnya bermain.',
      p1_a: 'Jalankan alur kerja grafis berat dengan responsivitas yang sejalan dengan imajinasi Anda.\n' +
        'Keluarga chip M4 menghadirkan GPU dengan mesin ray tracing generasi kedua yang dipercepat perangkat keras untuk merender gambar lebih cepat',
      p1_span: 'sehingga pengalaman bermain game terasa lebih imersif dan realistis dari sebelumnya.',
      p1_b: 'Dynamic Caching mengoptimalkan memori on-chip yang cepat untuk secara dramatis meningkatkan pemanfaatan GPU rata-rata — menghadirkan lonjakan performa besar bagi aplikasi pro dan game paling menuntut.',
    },
    highlights:{
      highlight_h2: 'Tidak ada waktu yang lebih baik untuk upgrade MacBook Anda.',
      highlight_h3: 'Ini yang Anda dapatkan dengan MacBook Pro baru. ',
      highlight_p1: 'Jalankan tugas berat hingga 9,8x lebih cepat',
      display: {
        line1: 'Layar',
        line2: 'Liquid Retina XDR',
        line3: 'yang menakjubkan.',
      },
      ai: {
        line1: 'Dirancang untuk',
        line2: 'Apple Intelligence.',
      },
      battery: {
        up_to: 'Hingga',
        hours_highlight: '14 jam daya tahan',
        tail: 'baterai tambahan.',
        note: '(Total hingga 24 jam.)',
      },
    },
    footer: {
      fp1: 'Ada banyak cara berbelanja: Temukan di Toko Retail terdekat Anda. Atau hubungi 0812 9077 7722.',
      fp2: 'Hak cipta © 2025 Apple Inc. Seluruh hak cipta dilindungi undang-undang',

      privacy: "Kebijakan Privasi",
      privacy_link: "https://www.apple.com/legal/privacy/id/",

      terms: "Ketentuan Penggunaan",
      terms_link: "https://www.apple.com/legal/internet-services/terms/site.html",

      sales: "Kebijakan Penjual",
      sales_link: "https://www.apple.com/legal/sales-support/sales-policies/retail_us.html",

      legal: "Legal",
      legal_link: "/legal",

      sitemap: "Peta Situs",
      sitemap_link: "https://www.apple.com/id/sitemap/",
    },
  },
};

export function useI18n() { return useContext(I18nContext); }