# OCODEJS — Live Project Links

> Cập nhật: 17/11/2026  
> Repository: [zskbot/docs.rtf](https://github.com/zskbot/docs.rtf)

Tài liệu này tập hợp các đường dẫn truy cập trực tiếp tới website OCODEJS, AI Studio và mã nguồn dự án. Các URL GitHub Pages bên dưới được lấy từ kết quả deploy GitHub Pages thành công, không phải URL phỏng đoán.

## 1. Website đang chạy

| Khu vực | Live URL | Ghi chú |
|---|---|---|
| Trang chủ OCODEJS | https://zskbot.github.io/docs.rtf/ | GitHub Pages project site |
| AI Studio | https://zskbot.github.io/docs.rtf/studio.html | Trang Studio |
| Đăng nhập | https://zskbot.github.io/docs.rtf/dang-nhap | Route đăng nhập trong ứng dụng |
| Giới thiệu | https://zskbot.github.io/docs.rtf/gioi-thieu | Route giới thiệu |

**Trạng thái xác minh:** GitHub Pages deployment thành công trên commit `1e6fae45eeb7e5108d1599fc235f9bab7c8a4f27`. Log deploy ghi nhận environment URL là `https://zskbot.github.io/docs.rtf/` và kết quả `Reported success!`.

## 2. Mã nguồn và theo dõi triển khai

- Repository: https://github.com/zskbot/docs.rtf
- Nhánh chính: https://github.com/zskbot/docs.rtf/tree/main
- Lịch sử commit: https://github.com/zskbot/docs.rtf/commits/main
- GitHub Actions: https://github.com/zskbot/docs.rtf/actions
- Pages deployment thành công: https://github.com/zskbot/docs.rtf/actions/runs/43932619884
- Static site CI: https://github.com/zskbot/docs.rtf/actions/runs/43932622427
- Workflow deploy tĩnh: https://github.com/zskbot/docs.rtf/actions/runs/43932622352

## 3. Sửa lỗi AI Studio

- PR sửa base path ban đầu: https://github.com/zskbot/docs.rtf/pull/7
- PR sửa cú pháp JavaScript và bổ sung smoke test: https://github.com/zskbot/docs.rtf/pull/8
- Commit hiện được Pages deploy: https://github.com/zskbot/docs.rtf/commit/1e6fae45eeb7e5108d1599fc235f9bab7c8a4f27

Các thay đổi đã xử lý:
1. Chuẩn hóa base path `/docs.rtf` cho GitHub Pages project site.
2. Sửa JavaScript inline trong `studio.html` để dùng xuống dòng thật.
3. Sửa dấu ngoặc thừa trong router của `index.html`.
4. Mở rộng smoke test để kiểm tra cú pháp các inline script.

## 4. Trạng thái kiểm tra gần nhất

| Hạng mục | Kết quả |
|---|---|
| GitHub Pages build & deploy (run 43932619884) | PASS |
| Static site CI (run 43932622427) | FAIL |
| Deploy static content workflow (run 43932622352) | FAIL |

Lưu ý: GitHub Pages native build/deploy đã báo thành công. Hai workflow riêng vẫn báo lỗi; cần xem log tương ứng để xác định nguyên nhân. Không coi hai workflow này là bằng chứng website đang offline, cũng không coi Pages deploy thành công là bằng chứng mọi route đã được kiểm thử trên trình duyệt.

## 5. Cách kiểm tra nhanh trên iPhone

1. Mở [Trang chủ OCODEJS](https://zskbot.github.io/docs.rtf/).
2. Mở [AI Studio](https://zskbot.github.io/docs.rtf/studio.html).
3. Thử điều hướng tới Đăng nhập và Giới thiệu từ menu trong trang.
4. Nếu Safari đang giữ bản cũ, tải lại trang; có thể mở tab riêng tư để loại trừ cache cũ.

## 6. Quy tắc cập nhật tài liệu

- Chỉ đánh dấu **LIVE / DEPLOYED** khi có URL được xác nhận từ deployment hoặc hosting provider.
- Phân biệt trạng thái deploy với trạng thái smoke test và kiểm thử trình duyệt.
- Khi URL hoặc domain thay đổi, cập nhật bảng ở mục 1 và kiểm tra lại tất cả liên kết nội bộ.
- Không đưa token, API key, cookie hoặc thông tin bí mật vào tài liệu công khai.
