# Task: Implement Mega Menu Navbar Dropdown (React + Tailwind CSS)

## Mục tiêu

Tạo component `Navbar` với **Mega Menu dropdown** — khi hover hoặc click vào một nav item có children, một panel sẽ xuất hiện bên dưới hiển thị các sub-links kèm icon và mô tả. Clone theo giao diện của [obsidianos.com](https://obsidianos.com/).

---

## Yêu cầu kỹ thuật

- **Framework:** React (Function Component + Hooks)
- **Styling:** Tailwind CSS
- **Không dùng** thư viện UI bên ngoài (Ant Design, MUI, Headless UI...)
- **Responsive:** Trên desktop dùng hover, trên mobile dùng click

---

## Cấu trúc file cần tạo

```
src/
└── components/
    └── Navbar/
        ├── Navbar.jsx          ← Component chính
        ├── NavDropdown.jsx     ← Component dropdown cho từng item
        └── navConfig.js        ← Data config cho các nav items
```

---

## File 1: `navConfig.js` — Cấu hình data

```js
// src/components/Navbar/navConfig.js

export const NAV_ITEMS = [
  {
    label: "What we offer",
    children: [
      {
        icon: "🧠",
        title: "AI Practice Management",
        description:
          "Your clients, meetings, and tasks — captured by AI, searchable in seconds, ready to act on.",
        href: "/what-we-offer/ai-crm-for-financial-advisors",
      },
      {
        icon: "🏦",
        title: "Custody & Execution",
        description:
          "Trade, rebalance, and custody — all in one place. With instant account opening.",
        href: "/what-we-offer/custody-and-execution",
      },
    ],
  },
  {
    label: "Who's it for",
    children: [
      {
        icon: "👥",
        title: "Independent firms",
        description:
          "Spend less time on admin and more time delivering advice that matters.",
        href: "/whos-it-for/independent-firms",
      },
      {
        icon: "🌐",
        title: "Consolidators",
        description:
          "Unify firms, data, and controls to scale faster — without operational drag.",
        href: "/whos-it-for/consolidators",
      },
    ],
  },
  {
    label: "Integrations",
    href: "/integrations",
  },
  {
    label: "Security",
    href: "/security",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
];
```

---

## File 2: `NavDropdown.jsx` — Component dropdown

```jsx
// src/components/Navbar/NavDropdown.jsx
import { useState, useRef, useEffect } from "react";

export default function NavDropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-full flex items-center"
      // Hover trên desktop
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger button */}
      <button
        className="flex items-center gap-1 px-4 h-full text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        {/* Chevron icon */}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        className={`
          absolute top-full left-0 mt-1 w-80 z-50
          bg-white border border-gray-100 rounded-xl shadow-lg p-2
          transition-all duration-150 origin-top-left
          ${isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
          }
        `}
        role="menu"
      >
        {item.children.map((child) => (
          <a
            key={child.href}
            href={child.href}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-100 group"
            role="menuitem"
          >
            {/* Icon box */}
            <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-100 border border-gray-200 text-lg group-hover:bg-gray-200 transition-colors">
              {child.icon}
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900 leading-snug">
                {child.title}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                {child.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
```

---

## File 3: `Navbar.jsx` — Component chính

```jsx
// src/components/Navbar/Navbar.jsx
import NavDropdown from "./NavDropdown";
import { NAV_ITEMS } from "./navConfig";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center h-14">

        {/* Logo */}
        <a
          href="/"
          className="font-semibold text-sm text-gray-900 mr-8 flex-shrink-0"
        >
          Obsidian
        </a>

        {/* Nav items */}
        <div className="flex items-center h-full">
          {NAV_ITEMS.map((item) =>
            // Nếu item có children → render NavDropdown
            // Nếu không → render link thường
            item.children ? (
              <NavDropdown key={item.label} item={item} />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-4 h-full flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* CTA button (bên phải) */}
        <div className="ml-auto flex-shrink-0">
          <a
            href="/get-started"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
```

---

## Cách dùng

Import `Navbar` vào layout chính của app:

```jsx
// src/App.jsx hoặc src/layouts/Layout.jsx
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* Phần còn lại của trang */}
    </div>
  );
}
```

---

## Giải thích cách hoạt động

### 1. Vị trí dropdown (CSS positioning)

```
┌─────────────────────────────────┐
│  [NAVBAR]  position: relative   │  ← nav item cha
└─────────────────────────────────┘
┌──────────────────────┐
│  DROPDOWN PANEL      │  ← position: absolute, top: 100%, left: 0
│  ● AI Practice Mgmt  │
│  ● Custody & Exec    │
└──────────────────────┘
```

- Container cha: `relative` → làm gốc tọa độ cho con
- Dropdown panel: `absolute top-full left-0` → nằm ngay dưới button trigger

### 2. Animation mở/đóng

Dùng Tailwind transition + conditional classes:
- Đóng: `opacity-0 scale-95 pointer-events-none`
- Mở: `opacity-100 scale-100 pointer-events-auto`

### 3. Đóng khi click ra ngoài

```js
useEffect(() => {
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
```

Dùng `useRef` để kiểm tra xem click có nằm trong component không.

---

## Checklist sau khi implement

- [ ] Hover vào "What we offer" → dropdown hiện ra
- [ ] Di chuột ra ngoài → dropdown tự đóng
- [ ] Click ra ngoài dropdown → tự đóng
- [ ] Chevron icon xoay 180° khi dropdown mở
- [ ] Hover vào từng sub-link trong dropdown → highlight (bg thay đổi)
- [ ] Các link thường (Integrations, Pricing...) không có dropdown
- [ ] Logo nằm bên trái, CTA button nằm bên phải
- [ ] Không bị lỗi console

---

## Lưu ý

- Nếu dùng **React Router** thay `<a href>`, thay bằng `<Link to={child.href}>` từ `react-router-dom`
- Nếu muốn thêm nav item mới, chỉ cần thêm object vào mảng `NAV_ITEMS` trong `navConfig.js`
- Nếu muốn dùng SVG icon thay emoji, thay phần `{child.icon}` bằng component icon tương ứng
