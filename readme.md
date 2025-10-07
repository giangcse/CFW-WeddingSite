# Dự án Cloudflare Workers

## 📝 Giới thiệu

Trang web đám cưới sử dụng Cloudflare Workers.

## 🚀 Ưu điểm nổi bật

- Xử lý tại Edge: Tối ưu thời gian phản hồi với việc xử lý gần người dùng nhất
- Kiến trúc Serverless: Không cần quản lý server, tự động scale theo nhu cầu
- Hiệu năng cao: Tận dụng mạng lưới CDN toàn cầu của Cloudflare
- Bảo mật tối ưu: Tích hợp với hệ thống bảo mật của Cloudflare
- Chi phí hiệu quả: Chỉ trả tiền cho những gì bạn sử dụng

## 🛠️ Hướng dẫn cài đặt

### Yêu cầu tiên quyết

- Node.js (v16.0.0 trở lên)
- NPM (v7.0.0 trở lên) hoặc Yarn
- Wrangler CLI (công cụ chính thức từ Cloudflare)
- Tài khoản Cloudflare

### Các bước cài đặt

1. Clone dự án:

```bash
git clone [đường dẫn repository]
cd [tên thư mục dự án]
```

2. Cài đặt dependencies:

```bash
npm install wrangler -g
```

## ⚙️ Cấu hình

1. Xác thực với Cloudflare:

```bash
npx wrangler login
```

2. Tùy chỉnh file cấu hình `wrangler.toml`:

```toml
name = "ten-du-an"
account_id = "your-account-id"
workers_dev = true
```

## 🚀 Triển khai

### Môi trường phát triển

```bash
npm run
```

### Triển khai production

```bash
npx wrangler deploy
```

## 📁 Cấu trúc mã nguồn

```
project-root/
├── src/                 # Mã nguồn chính
│   ├── handlers/       # Xử lý request
│   ├── middleware/     # Middleware
│   └── utils/         # Tiện ích
├── tests/              # Unit tests
├── public/             # Tài nguyên tĩnh
└── wrangler.toml       # Cấu hình Cloudflare Workers
```

## 🔍 Phát triển

- Tuân thủ quy tắc Conventional Commits
- Viết test cho mọi tính năng mới
- Đảm bảo code coverage > 80%
- Review code trước khi merge

## 📚 Tài liệu tham khảo

- [Tài liệu chính thức Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Hướng dẫn Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Thực hành tốt nhất](https://developers.cloudflare.com/workers/learning/how-workers-works/)

## 🤝 Đóng góp

Chúng tôi luôn chào đón mọi đóng góp từ cộng đồng. Để đóng góp:

1. Fork dự án
2. Tạo nhánh tính năng (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add: tính năng mới'`)
4. Push lên nhánh (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 Giấy phép

Dự án được phân phối dưới giấy phép MIT. Xem `LICENSE` để biết thêm chi tiết.

## 📧 Liên hệ

[Tên của bạn] - [@giangpt2808](https://twitter.com/giangpt2808) - <email@example.com>

Link dự án: [https://github.com/giangcse/CFW-WeddingSite](https://github.com/giangcse/CFW-WeddingSite)
