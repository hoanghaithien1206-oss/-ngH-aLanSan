const r = z,
  t = ["Sơ Kỳ", "Trung Kỳ", "Hậu Kỳ", "Đại Viên Mãn"],
  e = [
    "Luyện Khí",
    "Trúc Cơ",
    "Kim Đan",
    "Nguyên Anh",
    "Hóa Thần",
    "Luyện Hư",
    "Hợp Thể",
    "Đại Thừa",
    "Độ Kiếp",
    "Chân Tiên",
    "Tiên Vương",
    "Tiên Đế",
  ],
  n = [1, 1.18, 1.38, 1.6],
  a = [
    100, 160, 260, 420, 680, 1100, 1780, 2880, 4660, 7540, 12200, 19740,
  ].flatMap((r) => n.map((t) => Math.round(r * t))),
  o = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2880,
    3360, 3840, 4800, 5760, 6720, 7680, 9600, 11520, 13440, 15360, 19200, 23040,
    26880, 30720, 38400, 46080, 53760, 61440, 76800, 92160, 107520, 122880,
    153600, 184320, 215040, 245760, 307200, 368640, 430080, 491520, 614400,
    737280, 860160, 983040,
  ],
  s = {
    1: [
      100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2400,
      2400, 2400, 4800, 4800, 4800, 4800, 9600, 9600, 9600, 9600, 19200, 19200,
      19200, 19200, 38400, 38400, 38400, 38400, 76800, 76800, 76800, 76800,
      153600, 153600, 153600, 153600, 307200, 307200, 307200, 307200, 614400,
      614400, 614400, 614400,
    ],
    2: a,
    3: o,
  },
  c = [
    100, 100, 100, 100, 200, 200, 200, 200, 500, 500, 500, 500, 1e3, 1e3, 1e3,
    1e3, 2e3, 2e3, 2e3, 2e3, 5e3, 5e3, 5e3, 5e3, 1e4, 1e4, 1e4, 1e4, 5e4, 5e4,
    5e4, 5e4, 1e5, 1e5, 1e5, 1e5, 5e5, 5e5, 5e5, 5e5, 2e6, 2e6, 2e6, 2e6, 1e7,
    1e7, 1e7, 1e7,
  ];
const i = {
    "Phàm": "Phàm",
    "Phàm Giai": "Phàm",
    "Phàm Cấp": "Phàm",
    "Phàm Phẩm": "Phàm",
    "Hoàng": "Hoàng",
    "Hoàng Giai": "Hoàng",
    "Hoàng Cấp": "Hoàng",
    "Hoàng Phẩm": "Hoàng",
    "Huyền": "Huyền",
    "Huyền Giai": "Huyền",
    "Huyền Cấp": "Huyền",
    "Huyền Phẩm": "Huyền",
    dia: "Địa",
    "Địa Giai": "Địa",
    "Địa Cấp": "Địa",
    "Địa Phẩm": "Địa",
    "Thiên": "Thiên",
    "Thiên Giai": "Thiên",
    "Thiên Cấp": "Thiên",
    "Thiên Phẩm": "Thiên",
    "Tiên": "Tiên",
    "Tiên Giai": "Tiên",
    "Tiên Cấp": "Tiên",
    "Tiên Phẩm": "Tiên",
    "Thánh": "Thánh",
    "Thánh Giai": "Thánh",
    "Thánh Cấp": "Thánh",
    "Thánh Phẩm": "Thánh",
    "Tiên Thiên": "Tiên Thiên",
    "Tiên Thiên Giai": "Tiên Thiên",
    "Tiên Thiên Cấp": "Tiên Thiên",
  },
  u = {
    "Nhập Môn": "Nhập Môn",
    "Sơ Cấp": "Nhập Môn",
    "Sơ Học": "Nhập Môn",
    "Tân Thủ": "Nhập Môn",
    "Thục Luyện": "Thục Luyện",
    "Trung Cấp": "Thục Luyện",
    "Nhàn Thục": "Thục Luyện",
    "Tiểu Thành": "Thục Luyện",
    "Tinh Thông": "Tinh Thông",
    "Cao Cấp": "Tinh Thông",
    "Tinh Trạm": "Tinh Thông",
    "Đại Thành": "Đại Thành",
    "Đại Sư": "Đại Thành",
    "Tông Sư": "Đại Thành",
    "Viên Mãn": "Viên Mãn",
    "Hoàn Mỹ": "Viên Mãn",
    "Cực Trí": "Viên Mãn",
    "Hóa Cảnh": "Hóa Cảnh",
    "Hóa Thần": "Hóa Cảnh",
    "Phản Phác Quy Chân": "Hóa Cảnh",
    "Xuất Thần Nhập Hóa": "Hóa Cảnh",
  };
const l = r.z.object({
    ten: r.z.string().prefault(""),
    mo_ta: r.z.string().prefault(""),
    pham_cap: r.z.string().prefault(""),
    so_luong: r.z.coerce
      .number()
      .transform((r) => Math.max(0, r))
      .prefault(1),
  }),
  f = new Set(["Linh Thạch", "Hạ Phẩm Linh Thạch"]);
function p(r) {
  return String(r ?? "")
    .trim()
    .replace(/\s+/g, "");
}
function m(r, t) {
  return [p(r), p(t?.ten)].filter(Boolean).some((r) => f.has(r));
}
function g(r, ...t) {
  let e = Number(r);
  (!Number.isFinite(e) || e < 0) && (e = 0);
  const n = t.map((r) => {
    const t = (function (r) {
      const t = {};
      let e = 0;
      for (const [n, a] of Object.entries(r ?? {}))
        if (a) {
          if (m(n, a)) {
            const r = Number(a.so_luong);
            Number.isFinite(r) && r > 0 && (e += r);
            continue;
          }
          t[n] = a;
        }
      return { inventory: t, spiritStone: e };
    })(r);
    return ((e += t.spiritStone), t.inventory);
  });
  return { spiritStone: e, inventories: n };
}
const b = {
    "Tu Luyện": "Tu Luyện",
    "Bế Quan": "Tu Luyện",
    "Tọa Thiền": "Tu Luyện",
    "Điều Tức": "Tu Luyện",
    "Bình Cảnh": "Bình Cảnh",
    "Bình Cảnh Kỳ": "Bình Cảnh",
    "Kẹt Ải": "Bình Cảnh",
    "Thụ Trở": "Bình Cảnh",
    "Đột Phá": "Đột Phá",
    "Xung Ải": "Đột Phá",
    "Phá Cảnh": "Đột Phá",
    thu_dot_pha: "Đột Phá",
    "Củng Cố": "Củng Cố",
    "Củng Cố": "Củng Cố",
    "Căn Cơ Chưa Vững": "Củng Cố",
    "Áp Cảnh": "Áp Cảnh",
    "Áp Chế Cảnh Giới": "Áp Cảnh",
    "Tàng Phong Dưỡng Cảnh": "Áp Cảnh",
  },
  d = {
    "Không": "Không",
    "": "Không",
    "Chưa Đột Phá": "Không",
    "Thành Công": "Thành Công",
    "Phá Cảnh Thành Công": "Thành Công",
    "Vượt Qua": "Thành Công",
    "Thất Bại": "Thất Bại",
    "Phá Cảnh Thất Bại": "Thất Bại",
    "Xung Ải Thất Bại": "Thất Bại",
  },
  h = r.z
    .object({
      giai_doan: r.z
        .string()
        .transform((r) => b[String(r).trim()] || "Tu Luyện")
        .prefault("Tu Luyện"),
      nguyen_nhan_binh_canh: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      muc_tieu_dot_pha: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      ket_qua_truoc: r.z
        .string()
        .transform((r) => d[String(r).trim()] || "Không")
        .prefault("Không"),
    })
    .prefault({ giai_doan: "Tu Luyện", nguyen_nhan_binh_canh: "", muc_tieu_dot_pha: "", ket_qua_truoc: "Không" });
function S(r) {
  const n = _.clamp(Math.floor(Number(r) || 1), 1, o.length),
    a = Math.floor((n - 1) / 4);
  return `${e[a] ?? "Luyện Khí"} ${t[(n - 1) % 4] ?? "Sơ Kỳ"}`;
}
function j(r, t = 3) {
  const e = (function (r = 3) {
    if (!0 === r) return s[1];
    if (!1 === r) return s[3];
    const t = Math.max(1, Math.floor(Number(r) || 3));
    return s[t] ?? o;
  })(t);
  return e[_.clamp(Math.floor(Number(r) || 1), 1, e.length) - 1] ?? e[0] ?? 100;
}
function y(r, t, e = 1, n = 3) {
  const a = Number(t);
  if (!Number.isFinite(a) || a <= 0) return 0;
  const o = j(r, e),
    s = j(r, n);
  if (o <= 0 || o === s) return Math.round(a);
  const c = a / o,
    i = Math.round(c * s);
  return Math.max(0, i);
}
function N(r, t) {
  const e = h.parse(r ?? {}),
    n = j(t.level);
  let a = e.giai_doan;
  t.legacyAttemptBreakthrough || "Đột Phá" === a
    ? (a = "Đột Phá")
    : "Tu Luyện" === a && t.cultivation >= n && (a = "Bình Cảnh");
  const s = t.level < o.length ? S(t.level + 1) : e.muc_tieu_dot_pha,
    c = ["Bình Cảnh", "Đột Phá", "Áp Cảnh"].includes(a);
  return {
    giai_doan: a,
    nguyen_nhan_binh_canh: c ? e.nguyen_nhan_binh_canh : "",
    muc_tieu_dot_pha: c ? e.muc_tieu_dot_pha || s : "",
    ket_qua_truoc: e.ket_qua_truoc,
  };
}
const v = r.z
    .object({
      ten: r.z.string().prefault(""),
      mo_ta: r.z.string().prefault(""),
      loai: r.z.enum(["Công Pháp", "Thần Thông", "Bí Thuật"]).prefault("Thần Thông"),
      pham_cap: r.z
        .string()
        .transform((r) => i[r] || "Phàm")
        .catch("Phàm"),
      do_thuan_thuc: r.z
        .string()
        .transform((r) =>
          (function (r) {
            const t = String(r ?? "")
              .trim()
              .replace(/^["'“”‘’]+|["'“”‘’]+$/g, "");
            return u[t]
              ? u[t]
              : t.includes("Tiểu Thành")
                ? "Thục Luyện"
                : t.includes("Trung Thành")
                  ? "Tinh Thông"
                  : t.includes("Đại Viên Mãn")
                    ? "Viên Mãn"
                    : "Nhập Môn";
          })(r),
        )
        .catch("Nhập Môn"),
      thoi_gian_linh_ngo: r.z.coerce.number().catch(() => Date.now()),
      cap_uy_luc: r.z.coerce.number().optional(),
    })
    .transform((r) => {
      if (!r.cap_uy_luc || 0 === r.cap_uy_luc) {
        const t = { "Nhập Môn": 1, "Thục Luyện": 2, "Tinh Thông": 3, "Đại Thành": 4, "Viên Mãn": 5, "Hóa Cảnh": 6 },
          e =
            { "Phàm": 1, "Hoàng": 2, "Huyền": 3, dia: 4, "Thiên": 5, "Tiên": 6, "Thánh": 7, "Tiên Thiên": 8 }[
              r.pham_cap
            ] || 1,
          n = t[r.do_thuan_thuc] || 1;
        return { ...r, cap_uy_luc: 10 * e + n };
      }
      return r;
    }),
  M = r.z
    .record(r.z.string().describe("Tên vật phẩm"), l)
    .prefault({})
    .transform((r) => _.pickBy(r, ({ so_luong: r }) => r > 0));
function A(r, t = !1) {
  const e = r.cap_do,
    n = j(e),
    a = c[e - 1] ?? 100,
    o = {
      nguong_dot_pha: n,
      tuoi_tho_toi_da: a,
      mo_ta_canh_gioi: S(e),
      trang_thai_tuoi_tho: `${r.tuoi_tho_da_song}/${a}`,
      trang_thai: (function (r, t, e) {
        const n = r?.giai_doan || "Tu Luyện";
        return "Đột Phá" === n
          ? "Đột Phá"
          : "Củng Cố" === n
            ? "Củng Cố"
            : "Áp Cảnh" === n
              ? "Áp Cảnh"
              : "Bình Cảnh" === n || t >= e
                ? "Bình Cảnh Kỳ"
                : "Tu Luyện";
      })(r.trang_thai_tu_luyen, r.tu_vi, n),
      tien_do: `${(100 * (n > 0 ? _.clamp(r.tu_vi / n, 0, 1) : 0)).toFixed(1)}%`,
    };
  if (!t) return o;
  const s = (function (r) {
      const t = Math.floor((r - 1) / 4),
        e = (r - 1) % 4,
        n = Math.pow(10, t + 1),
        a = 0.2 * n * e;
      return Math.round(n + a);
    })(e),
    i = Object.values(r.danh_sach_than_thong || {}),
    u =
      s +
      (i.length > 0 ? Math.max(...i.map((r) => r.cap_uy_luc || 0)) : 0) +
      (() => {
        const t = r.the_chat || "";
        return t.includes("Thần")
          ? 500
          : t.includes("Thánh")
            ? 200
            : t.includes("Đạo")
              ? 100
              : t.includes("Linh")
                ? 50
                : 0;
      })();
  return { ...o, chien_luc: u };
}
const D = r.z.object({
    cap_do: r.z.coerce.number().transform((r) => _.clamp(r, 1, 48)),
    linh_can: r.z.string().describe("linh_can"),
    chat: r.z.string().describe("the_chat"),
    tuoi: r.z.string().describe("Tuổi"),
    thuoc_ve: r.z.string().describe("Thuộc về"),
    cong_phap: r.z.string().describe("Công Pháp"),
    binh_khi: r.z.string().describe("ban_menh_binh_khi"),
    than_thong: r.z.array(r.z.string()).prefault([]),
  }),
  x = r.z
    .object({
      cam_xuc_hien_tai: r.z.string().prefault(""),
      nguyen_nhan_thai_do: r.z.string().prefault(""),
      nguyen_vong_quan_he: r.z.string().prefault(""),
      ki_ki_tiep_xuc: r.z.string().prefault(""),
      hen_uoc_chua_hoan_thanh: r.z.string().prefault(""),
    })
    .prefault({}),
  w = r.z
    .object({
      cap_do: r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 48))
        .prefault(1),
      tu_vi: r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      linh_can: r.z.string().prefault("Ngũ Hành Tạp Linh Căn"),
      the_chat: r.z.string().prefault("Phàm Thể"),
      cong_phap: r.z.string().prefault("Không"),
      ban_menh_binh_khi: r.z.string().prefault("Không"),
      danh_sach_than_thong: r.z.record(r.z.string().describe("Tên thần thông"), v).prefault({}),
      linh_thach: r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      tuoi_tho_da_song: r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      thu_dot_pha: r.z.boolean().prefault(!1),
      trang_thai_tu_luyen: h,
      do_hao_cam: r.z.coerce
        .number()
        .transform((r) => _.clamp(r, -200, 200))
        .prefault(0),
      quan_he: r.z.string().prefault("Người Lạ"),
      ngu_canh_quan_he: x,
    })
    .prefault({
      cap_do: 1,
      tu_vi: 0,
      linh_can: "Ngũ Hành Tạp Linh Căn",
      the_chat: "Phàm Thể",
      cong_phap: "Không",
      ban_menh_binh_khi: "Không",
      danh_sach_than_thong: {},
      linh_thach: 0,
      tuoi_tho_da_song: 0,
      thu_dot_pha: !1,
      trang_thai_tu_luyen: { giai_doan: "Tu Luyện", nguyen_nhan_binh_canh: "", muc_tieu_dot_pha: "", ket_qua_truoc: "Không" },
      do_hao_cam: 0,
      quan_he: "Người Lạ",
      ngu_canh_quan_he: {},
    })
    .transform((r) => {
      ((r.trang_thai_tu_luyen = N(r.trang_thai_tu_luyen, {
        legacyAttemptBreakthrough: r.thu_dot_pha,
        level: r.cap_do,
        cultivation: r.tu_vi,
      })),
        (r.thu_dot_pha = "Đột Phá" === r.trang_thai_tu_luyen.giai_doan));
      const t = A(r, !1);
      return { ...r, ...t };
    }),
  B = r.z.object({
    cap_do: r.z.coerce
      .number()
      .transform((r) => _.clamp(r, 1, 48))
      .prefault(1),
    tong_mon_dang_o: r.z.string().prefault("Tán Tu"),
    ghi_chu: r.z.string().prefault(""),
  }),
  O = {
    "Không Chiến Đấu": "Không Chiến Đấu",
    "Hòa Bình": "Không Chiến Đấu",
    "An Toàn": "Không Chiến Đấu",
    "Thoát Chiến": "Không Chiến Đấu",
    "Đối Trì": "Đối Trì",
    "Cảnh Giới": "Đối Trì",
    "Giằng Co": "Đối Trì",
    "Đối Thị": "Đối Trì",
    "Kịch Chiến": "Kịch Chiến",
    "Chiến Đấu": "Kịch Chiến",
    "Giao Chiến": "Kịch Chiến",
    "Sát Phạt": "Kịch Chiến",
    "Trọng Thương": "Trọng Thương",
    "Trọng Thương": "Trọng Thương",
    "Trọng Thương": "Trọng Thương",
    "Lâm Nguy": "Lâm Nguy",
    "Lâm Tử": "Lâm Nguy",
    "Thùy Nguy": "Lâm Nguy",
    "Nguy Cấp": "Lâm Nguy",
  },
  k = {
    "Vô Thương": "Vô Thương",
    "Không": "Vô Thương",
    "Hoàn Hảo": "Vô Thương",
    "Khỏe Mạnh": "Vô Thương",
    "Khinh Thương": "Khinh Thương",
    "Tiểu Thương": "Khinh Thương",
    "Vi Thương": "Khinh Thương",
    "Trọng Thương": "Trọng Thương",
    "Trọng Thương": "Trọng Thương",
    "Đại Thương": "Trọng Thương",
    "Lâm Nguy": "Lâm Nguy",
    "Lâm Tử": "Lâm Nguy",
    "Thùy Nguy": "Lâm Nguy",
  },
  F = {
    "Nghiền Áp": "Nghiền Áp",
    "Áp Đảo": "Nghiền Áp",
    "Miểu Sát": "Nghiền Áp",
    "Điếu Đả": "Nghiền Áp",
    "Ưu Thế": "Ưu Thế",
    "Chiếm Ưu": "Ưu Thế",
    "Thượng Phong": "Ưu Thế",
    "Có Lợi": "Ưu Thế",
    "Thế Quân Lực Địch": "Thế Quân Lực Địch",
    "Quân Thế": "Thế Quân Lực Địch",
    "Hòa Nhau": "Thế Quân Lực Địch",
    "Tương Đương": "Thế Quân Lực Địch",
    "Kỳ Cổ Tương Đương": "Thế Quân Lực Địch",
    "Yếu Thế": "Yếu Thế",
    "Hạ Phong": "Yếu Thế",
    "Bất Lợi": "Yếu Thế",
    "Lạc Hậu": "Yếu Thế",
    "Tuyệt Vọng": "Tuyệt Vọng",
    "Tất Tử": "Tuyệt Vọng",
    "Nghiền Áp Yếu Thế": "Tuyệt Vọng",
    "Vô Vọng": "Tuyệt Vọng",
  },
  P = {
    "Hoàn Hảo": "Hoàn Hảo",
    "Vô Thương": "Hoàn Hảo",
    "Khỏe Mạnh": "Hoàn Hảo",
    "Toàn Thịnh": "Hoàn Hảo",
    "Khinh Thương": "Khinh Thương",
    "Tiểu Thương": "Khinh Thương",
    "Vi Thương": "Khinh Thương",
    "Trọng Thương": "Trọng Thương",
    "Trọng Thương": "Trọng Thương",
    "Đại Thương": "Trọng Thương",
    "Lâm Nguy": "Lâm Nguy",
    "Lâm Tử": "Lâm Nguy",
    "Thùy Nguy": "Lâm Nguy",
    "Đã Chết": "Đã Chết",
    "Tử Vong": "Đã Chết",
    "Kích Sát": "Đã Chết",
    "Trận Vong": "Đã Chết",
  },
  E = {
    "Không": "Không",
    "": "Không",
    "Vô Kiếp": "Không",
    "Lôi Kiếp": "Lôi Kiếp",
    "Thiên Lôi": "Lôi Kiếp",
    "Lôi Kiếp": "Lôi Kiếp",
    "Tâm Kiếp": "Tâm Kiếp",
    "Tâm Ma": "Tâm Kiếp",
    "Ma Kiếp": "Tâm Kiếp",
    "Thiên Kiếp": "Thiên Kiếp",
    "Đại Kiếp": "Thiên Kiếp",
    "Tình Kiếp": "Tình Kiếp",
    "Tình Quan": "Tình Kiếp",
    "Nhân Quả Kiếp": "Nhân Quả Kiếp",
    "Nhân Quả": "Nhân Quả Kiếp",
    "Hồng Trần Kiếp": "Hồng Trần Kiếp",
    "Hồng Trần": "Hồng Trần Kiếp",
    "Luân Hồi Kiếp": "Luân Hồi Kiếp",
    "Luân Hồi": "Luân Hồi Kiếp",
  },
  C = {
    "Không": "Không",
    "Vô Kiếp": "Không",
    "Tiểu Kiếp": "Tiểu Kiếp",
    "Nhỏ": "Tiểu Kiếp",
    "Sơ Cấp": "Tiểu Kiếp",
    "Trung Kiếp": "Trung Kiếp",
    "Trung": "Trung Kiếp",
    "Trung Cấp": "Trung Kiếp",
    "Đại Kiếp": "Đại Kiếp",
    "Lớn": "Đại Kiếp",
    "Cao Cấp": "Đại Kiếp",
    "Thiên Phạt": "Thiên Phạt",
    "Thiên": "Thiên Phạt",
    "Cực": "Thiên Phạt",
    "Thiên Đạo": "Thiên Phạt",
  },
  W = {
    "Không": "Không",
    "": "Không",
    "Chưa Độ Kiếp": "Không",
    "Thành Công": "Thành Công",
    "Thông Qua": "Thành Công",
    "Vượt Qua": "Thành Công",
    "Thất Bại": "Thất Bại",
    "Chưa Qua": "Thất Bại",
    "Thất Bại": "Thất Bại",
  },
  q = r.z
    .object({
      dang_chien_dau: r.z.boolean().prefault(!1),
      trang_thai_hien_tai: r.z
        .string()
        .transform((r) => O[r] || "Không Chiến Đấu")
        .prefault("Không Chiến Đấu"),
      chi_so_linh_luc: r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 100))
        .prefault(100),
      cap_do_thuong_the: r.z
        .string()
        .transform((r) => k[r] || "Vô Thương")
        .prefault("Vô Thương"),
      quan_bai_tay_da_dung: r.z.array(r.z.string()).prefault([]),
      so_hiep_chien_dau: r.z.coerce.number().prefault(0),
    })
    .prefault({
      dang_chien_dau: !1,
      trang_thai_hien_tai: "Không Chiến Đấu",
      chi_so_linh_luc: 100,
      cap_do_thuong_the: "Vô Thương",
      quan_bai_tay_da_dung: [],
      so_hiep_chien_dau: 0,
    }),
  I = r.z.object({
    ten: r.z.string().prefault("Kẻ Địch Chưa Biết"),
    canh_gioi: r.z.string().prefault("Chưa Biết"),
    danh_gia_chien_luc: r.z
      .string()
      .transform((r) => F[r] || "Thế Quân Lực Địch")
      .prefault("Thế Quân Lực Địch"),
    trang_thai: r.z
      .string()
      .transform((r) => P[r] || "Hoàn Hảo")
      .prefault("Hoàn Hảo"),
    dac_diem: r.z.string().prefault(""),
  }),
  V = r.z
    .object({
      dang_do_kiep: r.z.boolean().prefault(!1),
      kiep_chung: r.z
        .string()
        .transform((r) => E[r] || "Không")
        .prefault("Không"),
      cap_do_kiep_nan: r.z
        .string()
        .transform((r) => C[r] || "Không")
        .prefault("Không"),
      giai_doan_hien_tai: r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 9))
        .prefault(0),
      tong_so_giai_doan: r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 9))
        .prefault(0),
      suc_chiu_dung_kiep_luc: r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 100))
        .prefault(100),
      phap_bao_ho_dao_da_dung: r.z.array(r.z.string()).prefault([]),
      mo_ta_kiep_nan: r.z.string().prefault(""),
      nguyen_nhan_kich_hoat: r.z.string().prefault(""),
      ket_qua_do_kiep_truoc: r.z
        .string()
        .transform((r) => W[r] || "Không")
        .prefault("Không"),
      thoi_gian_hoi_chieu_do_kiep: r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      nhat_ky_phat_that_bai: r.z.string().prefault(""),
    })
    .prefault({
      dang_do_kiep: !1,
      kiep_chung: "Không",
      cap_do_kiep_nan: "Không",
      giai_doan_hien_tai: 0,
      tong_so_giai_doan: 0,
      suc_chiu_dung_kiep_luc: 100,
      phap_bao_ho_dao_da_dung: [],
      mo_ta_kiep_nan: "",
      nguyen_nhan_kich_hoat: "",
      ket_qua_do_kiep_truoc: "Không",
      thoi_gian_hoi_chieu_do_kiep: 0,
      nhat_ky_phat_that_bai: "",
    })
    .transform((r) =>
      r.dang_do_kiep
        ? {
            ...r,
            cap_do_kiep_nan: "Không" === r.cap_do_kiep_nan ? "Tiểu Kiếp" : r.cap_do_kiep_nan,
            giai_doan_hien_tai: _.clamp(r.giai_doan_hien_tai, 0, 9),
            tong_so_giai_doan: _.clamp(Math.max(r.tong_so_giai_doan || 3, r.giai_doan_hien_tai, 1), 1, 9),
          }
        : {
            ...r,
            kiep_chung: "Không",
            cap_do_kiep_nan: "Không",
            giai_doan_hien_tai: 0,
            tong_so_giai_doan: 0,
            mo_ta_kiep_nan: "",
            nguyen_nhan_kich_hoat: "",
          },
    ),
  Z = r.z
    .object({
      khu_vuc_hien_tai: r.z.string().prefault("Nơi Chưa Biết"),
      tang_cap_truc_thuoc: r.z.string().prefault("Địa Tầng"),
      mo_ta_moi_truong: r.z.string().prefault(""),
      muc_do_nguy_hiem: r.z.coerce.number().prefault(10),
      loi_di_kha_dung: r.z.array(r.z.string()).prefault([]),
      thong_tin_dan_duong: r.z.string().prefault(""),
    })
    .prefault({
      khu_vuc_hien_tai: "Nơi Chưa Biết",
      tang_cap_truc_thuoc: "Địa Tầng",
      mo_ta_moi_truong: "",
      muc_do_nguy_hiem: 10,
      loi_di_kha_dung: [],
      thong_tin_dan_duong: "",
    }),
  R = r.z
    .object({
      ho_ten: r.z.string().prefault("Vô Danh Thị"),
      tong_mon: r.z.string().prefault("Tán Tu"),
      xuat_than: r.z.string().prefault("Phàm Nhân"),
    })
    .prefault({ ho_ten: "Vô Danh Thị", tong_mon: "Tán Tu", xuat_than: "Phàm Nhân" }),
  G = r.z
    .object({
      cap_do: r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 48))
        .prefault(1),
      tu_vi: r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      linh_can: r.z.string().prefault("Ngũ Hành Tạp Linh Căn"),
      the_chat: r.z.string().prefault("Phàm Thể"),
      cong_phap: r.z.string().prefault("Không"),
      ban_menh_binh_khi: r.z.string().prefault("Không"),
      danh_sach_than_thong: r.z.record(r.z.string().describe("Tên thần thông"), v).prefault({}),
      linh_thach: r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      tuoi_tho_da_song: r.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      thu_dot_pha: r.z.boolean().prefault(!1),
      trang_thai_tu_luyen: h,
      hanh_tung: Z,
      than_phan: R,
      tui_do: M,
      phap_bao: M,
      tui_tap_vat: M,
      trang_thai_chien_dau: q,
      ke_dich_hien_tai: r.z.array(I).prefault([]),
      trang_thai_do_kiep: V,
    })
    .prefault({
      cap_do: 1,
      tu_vi: 0,
      linh_can: "Ngũ Hành Tạp Linh Căn",
      the_chat: "Phàm Thể",
      cong_phap: "Không",
      ban_menh_binh_khi: "Không",
      danh_sach_than_thong: {},
      linh_thach: 0,
      tuoi_tho_da_song: 0,
      thu_dot_pha: !1,
      trang_thai_tu_luyen: { giai_doan: "Tu Luyện", nguyen_nhan_binh_canh: "", muc_tieu_dot_pha: "", ket_qua_truoc: "Không" },
      hanh_tung: {
        khu_vuc_hien_tai: "Nơi Chưa Biết",
        tang_cap_truc_thuoc: "Địa Tầng",
        mo_ta_moi_truong: "",
        muc_do_nguy_hiem: 10,
        loi_di_kha_dung: [],
        thong_tin_dan_duong: "",
      },
      than_phan: { ho_ten: "Vô Danh Thị", tong_mon: "Tán Tu", xuat_than: "Phàm Nhân" },
      tui_do: {},
      phap_bao: {},
      tui_tap_vat: {},
      trang_thai_chien_dau: {
        dang_chien_dau: !1,
        trang_thai_hien_tai: "Không Chiến Đấu",
        chi_so_linh_luc: 100,
        cap_do_thuong_the: "Vô Thương",
        quan_bai_tay_da_dung: [],
        so_hiep_chien_dau: 0,
      },
      ke_dich_hien_tai: [],
      trang_thai_do_kiep: {
        dang_do_kiep: !1,
        kiep_chung: "Không",
        cap_do_kiep_nan: "Không",
        giai_doan_hien_tai: 0,
        tong_so_giai_doan: 0,
        suc_chiu_dung_kiep_luc: 100,
        phap_bao_ho_dao_da_dung: [],
        mo_ta_kiep_nan: "",
        nguyen_nhan_kich_hoat: "",
        ket_qua_do_kiep_truoc: "Không",
        thoi_gian_hoi_chieu_do_kiep: 0,
        nhat_ky_phat_that_bai: "",
      },
    })
    .transform((r) => {
      const t = g(r.linh_thach, r.tui_do, r.tui_tap_vat),
        [e, n] = t.inventories;
      ((r.linh_thach = t.spiritStone),
        (r.tui_do = e ?? {}),
        (r.tui_tap_vat = n ?? {}),
        (r.trang_thai_tu_luyen = N(r.trang_thai_tu_luyen, {
          legacyAttemptBreakthrough: r.thu_dot_pha,
          level: r.cap_do,
          cultivation: r.tu_vi,
        })),
        (r.thu_dot_pha = "Đột Phá" === r.trang_thai_tu_luyen.giai_doan));
      const a = A(r, !0);
      return { ...r, ...a };
    }),
  J = {
    "Đang Tiến Hành": "Đang Tiến Hành",
    "Tiến Hành": "Đang Tiến Hành",
    "Đang Xử Lý": "Đang Tiến Hành",
    "Chưa Hoàn Thành": "Đang Tiến Hành",
    "Chờ Hoàn Thành": "Đang Tiến Hành",
    "Chưa Bắt Đầu": "Đang Tiến Hành",
    "Đã Tiếp Nhận": "Đang Tiến Hành",
    "Tiếp Nhận": "Đang Tiến Hành",
    "Đang Tiến Hành": "Đang Tiến Hành",
    "Đã Hoàn Thành": "Đã Hoàn Thành",
    "Hoàn Thành": "Đã Hoàn Thành",
    "Đã Hoàn Thành": "Đã Hoàn Thành",
    "Đã Đạt Được": "Đã Hoàn Thành",
    "Đạt Được": "Đã Hoàn Thành",
    "Đã Kết Thúc": "Đã Hoàn Thành",
    "Kết Thúc": "Đã Hoàn Thành",
    "Đã Hoàn Thành": "Đã Hoàn Thành",
    "Đã Hoàn Thành": "Đã Hoàn Thành",
    "Đã Hoàn Thành": "Đã Hoàn Thành",
    "Đã Thất Bại": "Đã Thất Bại",
    "Thất Bại": "Đã Thất Bại",
    "Đã Thất Bại": "Đã Thất Bại",
    "Đã Thất Bại": "Đã Thất Bại",
    "Trung Chỉ": "Đã Thất Bại",
    "Chung Chỉ": "Đã Thất Bại",
    "Buông Bỏ": "Đã Thất Bại",
    "Quá Hạn Thất Bại": "Đã Thất Bại",
    "Đã Thất Bại": "Đã Thất Bại",
    "Đã Thất Bại": "Đã Thất Bại",
  },
  L = {
    "Chính Tuyến": "Chính Tuyến",
    "Nhiệm Vụ Chính": "Chính Tuyến",
    "Nhiệm Vụ Chính Tuyến": "Chính Tuyến",
    main: "Chính Tuyến",
    "Chi Nhánh": "Chi Nhánh",
    "Nhiệm Vụ Chi Nhánh": "Chi Nhánh",
    side: "Chi Nhánh",
    sidequest: "Chi Nhánh",
    "Mỗi Ngày": "Mỗi Ngày",
    "Hằng Ngày": "Mỗi Ngày",
    "Nhiệm Vụ Mỗi Ngày": "Mỗi Ngày",
    daily: "Mỗi Ngày",
    "Lâm Nguy Thụ Mệnh": "Lâm Nguy Thụ Mệnh",
    "Khẩn Cấp": "Lâm Nguy Thụ Mệnh",
    "Nhiệm Vụ Khẩn Cấp": "Lâm Nguy Thụ Mệnh",
    urgent: "Lâm Nguy Thụ Mệnh",
    "Khám Phá Bí Cảnh": "Khám Phá Bí Cảnh",
    "Bí Cảnh": "Khám Phá Bí Cảnh",
    "Thám Hiểm": "Khám Phá Bí Cảnh",
    "Nhiệm Vụ Bí Cảnh": "Khám Phá Bí Cảnh",
    dungeon: "Khám Phá Bí Cảnh",
    "Tu Luyện": "Chi Nhánh",
    "Nhiệm Vụ Tu Luyện": "Chi Nhánh",
  },
  T = r.z.object({
    ten: r.z.string().prefault(""),
    loai: r.z
      .string()
      .transform((r) => L[String(r).trim()] || "Chi Nhánh")
      .prefault("Chính Tuyến"),
    muc_tieu: r.z.string().prefault(""),
    trang_thai: r.z
      .string()
      .transform((r) => J[String(r).trim()] || "Đang Tiến Hành")
      .prefault("Đang Tiến Hành"),
    thong_tin_bi_canh: r.z
      .object({
        vuc: r.z
          .enum([
            "Thiên Tầng",
            "Thần Châu",
            "Đông Thương",
            "Nam Viêm",
            "Tây Canh",
            "Bắc Minh",
            "Hạ Tầng",
            "Tứ Hải",
          ])
          .optional(),
        nguy: r.z.coerce
          .number()
          .transform((r) => _.clamp(r, 0, 100))
          .optional(),
        dac: r.z.string().optional(),
        phan_thuong: r.z
          .union([
            r.z.array(r.z.string()),
            r.z.string().transform((r) => (r ? [r] : [])),
          ])
          .prefault([]),
        gioi_han: r.z.string().optional(),
      })
      .optional(),
    thoi_gian_tao: r.z
      .union([r.z.coerce.number(), r.z.string().transform(() => Date.now())])
      .prefault(() => Date.now()),
  }),
  U = r.z.object({
    gia_tri: r.z.coerce
      .number()
      .transform((r) => _.clamp(r, -100, 100))
      .prefault(0),
    quan_he: r.z.string().prefault("Xa Lạ"),
    thoi_gian_cap_nhat: r.z.coerce.number().prefault(() => Date.now()),
  }),
  H = r.z
    .record(r.z.string().describe("Tên thế lực"), U)
    .prefault({})
    .transform((r) =>
      _(r)
        .mapValues((r) => {
          const t = r.gia_tri;
          let e;
          e =
            t >= 80
              ? "Đồng Minh"
              : t >= 60
                ? "Thân Thiện"
                : t >= 30
                  ? "Hữu Hảo"
                  : t >= 10
                    ? "Thiên Hướng Trung Lập"
                    : t >= -10
                      ? "Trung Lập"
                      : t >= -30
                        ? "Trung Lập Ác Cảm"
                        : t >= -60
                          ? "Địch Đối"
                          : t >= -80
                            ? "Thù Hận"
                            : "Bất Tử Bất Hưu";
          const n = r.quan_he && "Xa Lạ" !== r.quan_he ? r.quan_he : e;
          return { ...r, quan_he: n };
        })
        .value(),
    ),
  K = {
    "Thám Hiểm": "Thám Hiểm",
    "Nhiệm Vụ": "Nhiệm Vụ",
    "Giao Dịch": "Giao Dịch",
    "Kết Giao": "Kết Giao",
    "Tranh Đoạt": "Tranh Đoạt",
    "Tu Luyện": "Tu Luyện",
    hong_nhan: "Hồng Nhan",
    "Ngẫu Nhiên": "Ngẫu Nhiên",
    "Hành Động": "Thám Hiểm",
    "Mạo Hiểm": "Thám Hiểm",
    "Hằng Ngày": "Nhiệm Vụ",
    "Tương Tác Hằng Ngày": "Hồng Nhan",
    "Chiến Đấu": "Tranh Đoạt",
    "Thách Thức": "Tranh Đoạt",
    "Xã Giao": "Kết Giao",
    "Tương Tác": "Kết Giao",
    "Yêu Ước": "Kết Giao",
    "Giải Hậu": "Kết Giao",
    "Cơ Duyên": "Thám Hiểm",
    "Cơ Ngộ": "Thám Hiểm",
    "Kỳ Ngộ": "Thám Hiểm",
    "Bí Cảnh": "Thám Hiểm",
    "Tầm Bảo": "Thám Hiểm",
    "Thải Cấu": "Giao Dịch",
    "Dịch Vật": "Giao Dịch",
    "Mua Bán": "Giao Dịch",
    "Ủy Thác": "Nhiệm Vụ",
    "Huyền Thưởng": "Nhiệm Vụ",
    "Lâm Nguy Thụ Mệnh": "Nhiệm Vụ",
    "Chi Nhánh": "Nhiệm Vụ",
    "Chính Tuyến": "Nhiệm Vụ",
    "Song Tu": "Hồng Nhan",
    "Thân Mật": "Hồng Nhan",
    "Trêu Ghẹo": "Hồng Nhan",
    random: "Ngẫu Nhiên",
  },
  Q = [
    {
      type: "Hồng Nhan",
      pattern:
        /hong_nhan|佳人|道侣|双修|温情|独处|相拥|相守|调情|缠绵|共寝|同眠|忘忧|听雨|清弦|晚棠|云裳|梦杳泠|朔璃鸢|阿鸢|血手飞鸢|朔望舒|赤月女帝|幽影宗主|虞汐|虞颜|虞汐颜/,
    },
    {
      type: "Tu Luyện",
      pattern:
        /修炼|闭关|打坐|吐纳|冲关|破境|突破|压境|稳固|悟道|渡劫|根基|丹药|灵阵|参悟/,
    },
    {
      type: "Giao Dịch",
      pattern: /坊市|易物|交易|买卖|采购|拍卖|丹药铺|商会|补给|售卖|收购|置换/,
    },
    {
      type: "Tranh Đoạt",
      pattern:
        /争夺|夺取|抢夺|截杀|斗法|厮杀|围攻|追杀|迎战|强敌|魔修|冲突|守擂|比斗/,
    },
    {
      type: "Nhiệm Vụ",
      pattern:
        /任务|委托|悬赏|求援|护送|调查|追查|营救|临危|急报|收尾|善后|赴约|赴命/,
    },
    {
      type: "Kết Giao",
      pattern: /结交|拜访|邀约|会面|结识|拉拢|试探|求见|访友|赴宴|论道|同游/,
    },
    { type: "Ngẫu Nhiên", pattern: /随缘|随机|碰运气|听天由命/ },
  ];
function X(r, t) {
  const e = K[r];
  if (e) return e;
  const n = Object.values(t)
    .map((r) =>
      (function (r) {
        return String(r ?? "").trim();
      })(r),
    )
    .filter(Boolean)
    .join("｜");
  for (const r of Q) if (r.pattern.test(n)) return r.type;
  return "Thám Hiểm";
}
const Y = r.z
    .object({
      ten: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      nguon_goc: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      loai: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault("Thám Hiểm"),
      mo_ta: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      ky_vong_thu_hoach: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      danh_gia_rui_ro: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      gioi_han_thoi_gian: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .optional(),
      su_kien_lien_quan: r.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .optional(),
      muc_do_uu_tien: r.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 5))
        .prefault(3),
    })
    .transform((r) => {
      const t = {
        ten: r.ten,
        nguon_goc: r.nguon_goc,
        mo_ta: r.mo_ta,
        ky_vong_thu_hoach: r.ky_vong_thu_hoach,
        danh_gia_rui_ro: r.danh_gia_rui_ro,
        gioi_han_thoi_gian: r.gioi_han_thoi_gian ?? "",
        su_kien_lien_quan: r.su_kien_lien_quan ?? "",
      };
      return { ...r, loai: X(r.loai, t) };
    }),
  rr = r.z
    .object({
      kich_hoat_nhac_nho_hanh_dong: r.z.boolean().prefault(!0),
      phien_ban_he_thong_tu_luyen: r.z.coerce.number().prefault(1),
      chu_ky_ghi_de_trang_thai_thu_cong: r.z.string().prefault(""),
    })
    .prefault({}),
  tr =
    (r.z.object({ kich_hoat_nhac_nho_hanh_dong: r.z.boolean().prefault(!0) }).prefault({}),
    {
      "Thuận Toại": "Thuận Toại",
      "Thụ Trở": "Thụ Trở",
      "Bình Ổn": "Bình Ổn",
      "Thuận Toại": "Thuận Toại",
      "Thụ Trở": "Thụ Trở",
      "Bình Ổn": "Bình Ổn",
    }),
  er = r.z
    .object({
      thien_dao_cam_ung: r.z
        .string()
        .transform((r) => tr[String(r).trim()] || "Bình Ổn")
        .prefault("Bình Ổn"),
      canh_bao_ap_luc_moi_truong: r.z.string().prefault("Thiên đạo vận chuyển bình thường, vạn vật theo lý tự nhiên."),
      du_lieu_noi_bo: r.z
        .object({
          so_phien_ban: r.z.coerce.number().prefault(1),
          bao_ve_can_bang: r.z
            .object({
              bo_dem_lien_tuc_trac_tro: r.z.coerce.number().prefault(0),
              nguong_kich_hoat: r.z.coerce.number().prefault(3),
              so_hiep_con_hieu_luc: r.z.coerce.number().prefault(0),
              so_hiep_hoi_chieu: r.z.coerce.number().prefault(0),
            })
            .prefault({}),
          chien_luoc_dong: r.z
            .object({
              gioi_han_luong_thay_doi_mot_hiep: r.z.coerce.number().prefault(0.15),
              toc_do_giam_tu_nhien: r.z.coerce.number().prefault(0.03),
              hiep_hoi_tang_truong: r.z.coerce.number().prefault(2),
            })
            .prefault({}),
          snapshot_ket_toan_do_kho: r.z
            .object({
              he_so_co_so_hiep: r.z.coerce.number().prefault(1),
              he_so_cuoi_cung: r.z.coerce.number().prefault(1),
              nguon_phan_tang: r.z
                .object({
                  tang_tu_su_the_gioi: r.z.coerce.number().prefault(1),
                  tang_so_thich_nguoi_choi: r.z.coerce.number().prefault(1),
                  tang_trang_thai_ngan_han: r.z.coerce.number().prefault(1),
                })
                .prefault({}),
            })
            .prefault({}),
        })
        .prefault({}),
    })
    .prefault({}),
  nr = r.z.object({
    dia: r.z.string().describe("Nơi ở"),
    dac: r.z.string().describe("Đặc điểm cốt lõi"),
    luc: r.z.string().describe("Chiến lực cao nhất"),
    doanh: r.z.enum(["Chính", "Ma", "Trung"]),
    mo: r.z.enum(["Siêu Lớn", "Lớn", "Nhỏ", "Vi", "Đặc Biệt"]),
  }),
  ar = r.z.object({
    giai: r.z
      .string()
      .transform((r) => i[r] || "Phàm")
      .catch("Phàm"),
    tinh: r.z.string().describe("Thuộc tính"),
    hieu: r.z.string().describe("Hiệu quả"),
  }),
  or = r.z
    .object({
      giai: r.z.enum([
        "Phàm Khí",
        "Pháp Khí",
        "Linh Khí",
        "Pháp Bảo",
        "Linh Bảo",
        "Tiên Khí",
        "Thánh Khí",
        "Đạo Khí",
        "Bản Mệnh",
      ]),
      loai: r.z.string().describe("loai"),
      dac_tinh_ban_menh: r.z.string().optional().describe("Đặc tính độc nhất của bản mệnh pháp bảo"),
      khi_linh: r.z.string().optional().describe("Tên khí linh"),
    })
    .transform((r) => ({
      ...r,
      dac:
        "Bản Mệnh" === r.giai
          ? "Chí Tôn"
          : "Đạo Khí" === r.giai
            ? "Siêu Phàm"
            : "Thánh Khí" === r.giai
              ? "Cực Phẩm"
              : "Tiên Khí" === r.giai
                ? "Đỉnh Cấp"
                : "Linh Bảo" === r.giai
                  ? "Mạnh"
                  : "Pháp Bảo" === r.giai
                    ? "Trung"
                    : "Phổ Thông",
    })),
  sr = r.z.object({
    vuc: r.z.enum([
      "Thiên Tầng",
      "Thần Châu",
      "Đông Thương",
      "Nam Viêm",
      "Tây Canh",
      "Bắc Minh",
      "Hạ Tầng",
      "Tứ Hải",
    ]),
    loai: r.z.enum(["Bí Cảnh", "Thành Trấn", "Tông Môn", "Cấm Địa", "Di Tích", "Địa Hình"]),
    nguy: r.z.coerce.number().transform((r) => _.clamp(r, 0, 100)),
    dac: r.z.string().describe("dac_diem"),
    tai_nguyen: r.z
      .union([
        r.z.array(r.z.string()),
        r.z.string().transform((r) => (r ? [r] : [])),
      ])
      .prefault([]),
  }),
  cr = r.z
    .object({
      chat: r.z.enum(["Liệt", "Hạ", "Trung", "Thượng", "Cực", "Thiên", "Dị"]),
      tinh: r.z.string().describe("Thuộc tính"),
      hi: r.z.enum(["Thường", "Ít", "Hiếm", "Hiếm Có", "Truyền Thuyết"]),
    })
    .transform((r) => ({
      ...r,
      toc:
        {
          "Liệt": "0.3 lần",
          "Hạ": "0.5 lần",
          "Trung": "1 lần",
          "Thượng": "2 lần",
          "Cực": "3 lần",
          "Thiên": "5 lần",
          "Dị": "4 lần",
        }[r.chat] || "1 lần",
      dac:
        "Thiên" === r.chat
          ? "Đơn Hệ Đỉnh Cấp"
          : "Dị" === r.chat
            ? "Biến Dị Hiếm Có"
            : "Cực" === r.chat
              ? "Song Hệ Ưu Tú"
              : "Thường Quy",
    })),
  ir = r.z
    .object({
      chat: r.z.enum(["Phàm", "Linh", "Đạo", "Thánh", "Thần"]),
      dac: r.z.string().describe("Đặc tính"),
      hi: r.z.enum(["Thường", "Ít", "Hiếm", "Hiếm Có", "Truyền Thuyết"]),
    })
    .transform((r) => ({
      ...r,
      uu:
        "Thần" === r.chat
          ? "Chí Cao"
          : "Thánh" === r.chat
            ? "Cực Mạnh"
            : "Đạo" === r.chat
              ? "Mạnh"
              : "Linh" === r.chat
                ? "Trung"
                : "Không",
    })),
  ur = [
    { canonical: "hua_thinh_vu", aliases: ["Hứa Thính Vũ"] },
    { canonical: "ngu_tich_nhan", aliases: ["Ngu Tịch Nhan", "Ngu Tịch", "Ngu Nhan"] },
    { canonical: "bach_thanh_huyen", aliases: ["Bạch Thanh Huyền"] },
    { canonical: "nam_cung_van_thuong", aliases: ["Nam Cung Vân Thường"] },
    { canonical: "mong_yeu_linh", aliases: ["Mộng Yểu Linh"] },
    { canonical: "nguyen_vong_uu", aliases: ["Nguyễn Vong Ưu"] },
    { canonical: "van_duong", aliases: ["Vãn Đường"] },
    { canonical: "soc_ly_oanh", aliases: ["Sóc Ly Oanh", "A Oanh", "Huyết Thủ Phi Oanh"] },
    { canonical: "soc_vong_thu", aliases: ["Sóc Vọng Thư", "Xích Nguyệt Nữ Đế", "U Ảnh Tông Chủ"] }
  ],
  lr = w.parse({}),
  fr = /[\u3400-\u4dbf\u4e00-\u9fff]/;
function pr(r, t, e) {
  const n = String(r ?? "").trim();
  return n && n !== e ? n : t;
}
function mr(r) {
  const t = String(r ?? "").trim();
  if (!t) return "";
  const e =
      t
        .replace(
          /^(?:[A-Za-z][A-Za-z0-9]*)(?:[._:\-/\\\s]+[A-Za-z0-9]+)*[._:\-/\\\s]*/u,
          "",
        )
        .trim() || t,
    n = e.search(fr);
  return n < 0 ? "" : e.slice(n).trim();
}
function zr(r, t) {
  if (!r) return _.cloneDeep(t);
  const e = _.cloneDeep(r),
    n = _.cloneDeep(lr.ngu_canh_quan_he);
  ((e.cap_do = Math.max(Number(r.cap_do ?? lr.cap_do), Number(t.cap_do ?? lr.cap_do))),
    (e.tu_vi = Math.max(Number(r.tu_vi ?? lr.tu_vi), Number(t.tu_vi ?? lr.tu_vi))),
    (e.linh_thach = Math.max(Number(r.linh_thach ?? lr.linh_thach), Number(t.linh_thach ?? lr.linh_thach))),
    (e.tuoi_tho_da_song = Math.max(
      Number(r.tuoi_tho_da_song ?? lr.tuoi_tho_da_song),
      Number(t.tuoi_tho_da_song ?? lr.tuoi_tho_da_song),
    )),
    (e.thu_dot_pha = Boolean(r.thu_dot_pha || t.thu_dot_pha)));
  const a = _.cloneDeep(lr.trang_thai_tu_luyen);
  return (
    (e.trang_thai_tu_luyen = N(
      {
        giai_doan: pr(t.trang_thai_tu_luyen?.giai_doan, String(r.trang_thai_tu_luyen?.giai_doan ?? a.giai_doan), a.giai_doan),
        nguyen_nhan_binh_canh: pr(
          t.trang_thai_tu_luyen?.nguyen_nhan_binh_canh,
          String(r.trang_thai_tu_luyen?.nguyen_nhan_binh_canh ?? a.nguyen_nhan_binh_canh),
          a.nguyen_nhan_binh_canh,
        ),
        muc_tieu_dot_pha: pr(
          t.trang_thai_tu_luyen?.muc_tieu_dot_pha,
          String(r.trang_thai_tu_luyen?.muc_tieu_dot_pha ?? a.muc_tieu_dot_pha),
          a.muc_tieu_dot_pha,
        ),
        ket_qua_truoc: pr(
          t.trang_thai_tu_luyen?.ket_qua_truoc,
          String(r.trang_thai_tu_luyen?.ket_qua_truoc ?? a.ket_qua_truoc),
          a.ket_qua_truoc,
        ),
      },
      {
        legacyAttemptBreakthrough: e.thu_dot_pha,
        level: e.cap_do,
        cultivation: e.tu_vi,
      },
    )),
    (e.do_hao_cam = Number.isFinite(Number(t.do_hao_cam))
      ? Number(t.do_hao_cam)
      : Number(r.do_hao_cam ?? lr.do_hao_cam)),
    (e.quan_he = pr(t.quan_he, String(r.quan_he ?? lr.quan_he), lr.quan_he)),
    (e.ngu_canh_quan_he = {
      cam_xuc_hien_tai: pr(
        t.ngu_canh_quan_he?.cam_xuc_hien_tai,
        String(r.ngu_canh_quan_he?.cam_xuc_hien_tai ?? n.cam_xuc_hien_tai),
        n.cam_xuc_hien_tai,
      ),
      nguyen_nhan_thai_do: pr(
        t.ngu_canh_quan_he?.nguyen_nhan_thai_do,
        String(r.ngu_canh_quan_he?.nguyen_nhan_thai_do ?? n.nguyen_nhan_thai_do),
        n.nguyen_nhan_thai_do,
      ),
      nguyen_vong_quan_he: pr(
        t.ngu_canh_quan_he?.nguyen_vong_quan_he,
        String(r.ngu_canh_quan_he?.nguyen_vong_quan_he ?? n.nguyen_vong_quan_he),
        n.nguyen_vong_quan_he,
      ),
      ki_ki_tiep_xuc: pr(
        t.ngu_canh_quan_he?.ki_ki_tiep_xuc,
        String(r.ngu_canh_quan_he?.ki_ki_tiep_xuc ?? n.ki_ki_tiep_xuc),
        n.ki_ki_tiep_xuc,
      ),
      hen_uoc_chua_hoan_thanh: pr(
        t.ngu_canh_quan_he?.hen_uoc_chua_hoan_thanh,
        String(r.ngu_canh_quan_he?.hen_uoc_chua_hoan_thanh ?? n.hen_uoc_chua_hoan_thanh),
        n.hen_uoc_chua_hoan_thanh,
      ),
    }),
    String(r.linh_can ?? lr.linh_can) === lr.linh_can &&
      String(t.linh_can ?? "").trim() &&
      (e.linh_can = t.linh_can),
    String(r.the_chat ?? lr.the_chat) === lr.the_chat &&
      String(t.the_chat ?? "").trim() &&
      (e.the_chat = t.the_chat),
    String(r.cong_phap ?? lr.cong_phap) === lr.cong_phap &&
      String(t.cong_phap ?? "").trim() &&
      (e.cong_phap = t.cong_phap),
    String(r.ban_menh_binh_khi ?? lr.ban_menh_binh_khi) === lr.ban_menh_binh_khi &&
      String(t.ban_menh_binh_khi ?? "").trim() &&
      (e.ban_menh_binh_khi = t.ban_menh_binh_khi),
    (e.danh_sach_than_thong = { ...(r.danh_sach_than_thong ?? {}), ...(t.danh_sach_than_thong ?? {}) }),
    e
  );
}
function gr(r, t) {
  return r
    ? {
        cap_do: Math.max(Number(r.cap_do ?? 1), Number(t.cap_do ?? 1)),
        linh_can: pr(t.linh_can, String(r.linh_can ?? ""), ""),
        chat: pr(t.chat, String(r.chat ?? ""), ""),
        tuoi: pr(t.tuoi, String(r.tuoi ?? ""), ""),
        thuoc_ve: pr(t.thuoc_ve, String(r.thuoc_ve ?? ""), ""),
        cong_phap: pr(t.cong_phap, String(r.cong_phap ?? ""), ""),
        binh_khi: pr(t.binh_khi, String(r.binh_khi ?? ""), ""),
        than_thong: Array.from(
          new Set(
            [...(r.than_thong ?? []), ...(t.than_thong ?? [])]
              .map((r) => String(r).trim())
              .filter(Boolean),
          ),
        ),
      }
    : _.cloneDeep(t);
}
function br(r) {
  const t = Math.max(0, Number.isFinite(r) ? r : 0);
  return t <= 20 ? 6 : t <= 60 ? 4 : t <= 120 ? 3 : 2;
}
function dr(r, t) {
  (t < 3 && (r.tu_vi = y(r.cap_do, r.tu_vi, t, 3)),
    (r.trang_thai_tu_luyen = N(r.trang_thai_tu_luyen, {
      legacyAttemptBreakthrough: r.thu_dot_pha,
      level: r.cap_do,
      cultivation: r.tu_vi,
    })),
    (r.thu_dot_pha = "Đột Phá" === r.trang_thai_tu_luyen.giai_doan),
    Object.assign(r, A(r, !1)));
}
const _r = r.z
    .object({
      dong_ho_the_gioi: r.z
        .object({
          ky_nguyen: r.z.string().prefault("Thời Đại Mạt Pháp"),
          nam: r.z.coerce.number().prefault(1),
          thang: r.z.coerce
            .number()
            .transform((r) => _.clamp(r, 1, 12))
            .prefault(1),
          ngay: r.z.coerce
            .number()
            .transform((r) => _.clamp(r, 1, 30))
            .prefault(1),
          gio: r.z.string().prefault("Giờ Tý"),
        })
        .prefault({
          ky_nguyen: "Thời Đại Mạt Pháp",
          nam: 1,
          thang: 1,
          ngay: 1,
          gio: "Giờ Tý",
        }),
      ban_do_the_gioi: r.z
        .record(
          r.z.string().describe("Tên khu vực"),
          r.z.object({
            layer: r.z.enum(["Thiên Tầng", "Địa Tầng", "Hạ Tầng"]).prefault("Địa Tầng"),
            danger: r.z.coerce.number().transform((r) => _.clamp(r, 0, 100)),
            desc: r.z.string().prefault(""),
            connections: r.z.array(r.z.string()).prefault([]),
          }),
        )
        .prefault({}),
      dia_chi_the_gioi: r.z
        .record(
          r.z.string().describe("Tên sự kiện"),
          r.z.object({
            trang_thai: r.z.string().prefault(""),
            su_kien: r.z.string().prefault(""),
          }),
        )
        .prefault({}),
      kho_the_luc_tong_mon: r.z.record(r.z.string().describe("Tên tông môn"), nr).prefault({}),
      kho_cong_phap: r.z.record(r.z.string().describe("Tên công pháp"), ar).prefault({}),
      kho_phap_bao: r.z
        .record(r.z.string().describe("Tên pháp bảo"), or)
        .prefault({
          "Trấn Uyên Kiếm": { giai: "Tiên Khí", loai: "Kiếm" },
          "Song Ngư Bội": {
            giai: "Bản Mệnh",
            loai: "Ngọc Bội",
            dac_tinh_ban_menh:
              "Khế ước nguồn máu, Âm Dương song sinh, Khí linh hóa hình, Cùng chủ cộng tu, Sinh tử tương y, Khóa máu hộ chủ",
            khi_linh: "ngu_tich_nhan",
          },
        }),
      kho_dia_diem: r.z
        .record(r.z.string().describe("Tên địa điểm"), sr)
        .prefault({
          "Thiên Uyên": {
            vuc: "Thiên Tầng",
            loai: "Cấm Địa",
            nguy: 95,
            dac: "Khe Nứt Tinh Thần",
            tai_nguyen: ["Mảnh Tinh Thần", "Vẫn Thiết"],
          },
          "Găng Phong Đới": {
            vuc: "Thiên Tầng",
            loai: "Cấm Địa",
            nguy: 90,
            dac: "Bình Chướng Găng Phong",
            tai_nguyen: ["Tinh Hoa Găng Phong"],
          },
          "Vấn Đạo Phong": {
            vuc: "Thần Châu",
            loai: "Tông Môn",
            nguy: 10,
            dac: "Vạn Pháp Tông",
            tai_nguyen: ["Công Pháp", "Linh Dược"],
          },
          "Kiếm Môn Quan": {
            vuc: "Thần Châu",
            loai: "Tông Môn",
            nguy: 15,
            dac: "Kiếm Các",
            tai_nguyen: ["Kiếm Ý", "Phi Kiếm"],
          },
          "Tạng Thư Các": {
            vuc: "Thần Châu",
            loai: "Tông Môn",
            nguy: 5,
            dac: "Cổ Tịch",
            tai_nguyen: ["Công Pháp", "Bí Thuật"],
          },
          "Phong Đô Thành": {
            vuc: "Thần Châu",
            loai: "Thành Trấn",
            nguy: 30,
            dac: "Quỷ Thị",
            tai_nguyen: ["Tài Liệu U Minh"],
          },
          "Long Môn Thác": { vuc: "Thần Châu", loai: "Bí Cảnh", nguy: 40, dac: "Hóa Long", tai_nguyen: ["Long Khí"] },
          "Kiến Mộc Lâm": {
            vuc: "Đông Thương",
            loai: "Địa Hình",
            nguy: 50,
            dac: "Cổ Thụ Tinh",
            tai_nguyen: ["Linh Mộc", "Yêu Đan"],
          },
          "Lăng Thanh Đế": {
            vuc: "Đông Thương",
            loai: "Di Tích",
            nguy: 85,
            dac: "Truyền Thừa Thanh Đế",
            tai_nguyen: ["Truyền Thừa Thanh Đế"],
          },
          "Bách Hoa Cảnh": { vuc: "Đông Thương", loai: "Bí Cảnh", nguy: 20, dac: "Biển Hoa", tai_nguyen: ["Linh Hoa"] },
          "Bất Diệt Hỏa Sơn": {
            vuc: "Nam Viêm",
            loai: "Địa Hình",
            nguy: 80,
            dac: "Chu Tước Niết Bàn",
            tai_nguyen: ["Chu Tước Hỏa"],
          },
          "Niết Bàn Đài": {
            vuc: "Nam Viêm",
            loai: "Di Tích",
            nguy: 70,
            dac: "Niết Bàn",
            tai_nguyen: ["Niết Bàn Cảm Ngộ"],
          },
          "Vạn Kiếm Trủng": {
            vuc: "Tây Canh",
            loai: "Cấm Địa",
            nguy: 85,
            dac: "Kiếm Ý",
            tai_nguyen: ["Kiếm Ý", "Cổ Kiếm"],
          },
          "Huyền Băng Sơn": {
            vuc: "Bắc Minh",
            loai: "Tông Môn",
            nguy: 50,
            dac: "Huyền Vũ Tông",
            tai_nguyen: ["Huyền Băng"],
          },
          "Quy Khương Nhãn": {
            vuc: "Bắc Minh",
            loai: "Cấm Địa",
            nguy: 99,
            dac: "Quy Khương",
            tai_nguyen: ["Quy Khương Cảm Ngộ"],
          },
          "Hoàng Tuyền Tích": {
            vuc: "Hạ Tầng",
            loai: "Di Tích",
            nguy: 90,
            dac: "U Minh",
            tai_nguyen: ["Hoàng Tuyền Thủy"],
          },
          "Viêm Uyên": {
            vuc: "Hạ Tầng",
            loai: "Cấm Địa",
            nguy: 95,
            dac: "Địa Tâm Hỏa",
            tai_nguyen: ["Địa Tâm Hỏa"],
          },
        }),
      tong_mon_suy_doan: r.z
        .object({
          vuc_hien_tai: r.z.string().prefault(""),
          the_luc_chinh_hien_tai: r.z.string().prefault(""),
        })
        .prefault({ vuc_hien_tai: "", the_luc_chinh_hien_tai: "" }),
      kho_linh_can: r.z.record(r.z.string().describe("Tên linh căn"), cr).prefault({}),
      kho_the_chat: r.z.record(r.z.string().describe("Tên thể chất"), ir).prefault({}),
      ban_ton: G,
      kho_nhan_vat_hong_nhan: r.z
        .record(r.z.string().describe("Tên nhân vật"), D)
        .prefault({
          "hua_thinh_vu": {
            cap_do: 33,
            linh_can: "Thủy Bản Nguyên Thiên",
            chat: "Quy Khương Thần Thể",
            tuoi: "Ngoại 26 Thực 12000",
            thuoc_ve: "Quy Khương Chi Chủ",
            cong_phap: "Vạn Thủy Quy Nguyên Tiên Thiên",
            binh_khi: "Thương Hải Di Châu Tiên Thiên",
            than_thong: ["Quy Khương Ca", "Nghịch Lưu Hư Vọng", "Tịch Diệt Hải Vực", "Vạn Thủy Đồng Nguyên"],
          },
          "ngu_tich_nhan": {
            cap_do: 12,
            linh_can: "Thủy Âm Dương Dị",
            chat: "Song Ngư Thể",
            tuoi: "Hóa Hình 0 Năm",
            thuoc_ve: "{{user}} Ngọc Bội",
            cong_phap: "Song Sinh Thiên Cực / Âm Dương",
            binh_khi: "Song Ngư Bội Bản Thể",
            than_thong: ["Khô Mộc Xuân", "Đoạt Mệnh Trang", "Song Ngư Mộng"],
          },
          "bach_thanh_huyen": {
            cap_do: 29,
            linh_can: "Kim Thiên Căn",
            chat: "Kiếm Thể",
            tuoi: "Ngoại 30 Thực 1000+",
            thuoc_ve: "Tán Tu Kiếm Tông Sư",
            cong_phap: "Kiếm Ý Tiên / Thiên Âm Thiên",
            binh_khi: "Thanh Huyền Cầm Kiếm Linh Bảo",
            than_thong: ["Cầm Kiếm Sát", "Kiếm Ý Ca", "Vạn Kiếm Tâm"],
          },
          "nam_cung_van_thuong": {
            cap_do: 16,
            linh_can: "Hỏa Thiên Căn",
            chat: "Thần Hoàng Đạo Thể",
            tuoi: "Ngoại 10 Thực 118",
            thuoc_ve: "Đại Hạ Thê Phượng Cung Chủ",
            cong_phap: "Cửu Chuyển Niết Bàn Tiên",
            binh_khi: "Thê Ngô Trâm Linh Bảo",
            than_thong: ["Nam Minh Ly Hỏa", "Hoàng Uy Trấn Thế", "Vũ Hóa Hư Không"],
          },
          "mong_yeu_linh": {
            cap_do: 23,
            linh_can: "Thụy Thú Dị Căn",
            chat: "Thừa Hoàng Thánh Thể",
            tuoi: "Ngoại 8 Thực Vạn Năm+",
            thuoc_ve: "Không (Mạt Đại Thừa Hoàng)",
            cong_phap: "Thừa Hoàng Bản Nguyên Thiên",
            binh_khi: "Không",
            than_thong: ["Thụy Quang Tí Hữu", "Linh Giác Thông Minh", "Bản Nguyên Bộc Phát"],
          },
          "nguyen_vong_uu": {
            cap_do: 44,
            linh_can: "Nhân Quả Đại Đạo Bản Nguyên",
            chat: "Vạn Pháp Bất Xâm Chi Thể",
            tuoi: "Nhị Bát Phương Hoa / Lịch Kiếp Vạn Tải",
            thuoc_ve: "Tiên Giới Tiên Vương (Phàm Giới Ngụy Trang)",
            cong_phap: "Nhân Quả Đại Đạo",
            binh_khi: "Không (Vạn Vật Giai Binh)",
            than_thong: ["Khái Niệm Mạt Trừ", "Nhân Quả Soán Cải", "Tiên Vương Uy Áp", "Trùng Sóc Kỷ Nguyên"],
          },
          "van_duong": {
            cap_do: 15,
            linh_can: "U Minh Linh Căn",
            chat: "Phệ Hồn Chi Thể",
            tuoi: "Chưa Biết",
            thuoc_ve: "Tán Tu",
            cong_phap: "U Minh Quy Hồn Kinh Thiên",
            binh_khi: "Dẫn Hồn Linh Linh Bảo",
            than_thong: ["Minh Hà Chỉ Dẫn", "Minh Liên Trầm Mộng", "Quy Hồn Bài Chu"],
          },
          "soc_ly_oanh": {
            cap_do: 4,
            linh_can: "Dị Biến Phong Linh Căn",
            chat: "Quế Phách Linh Lung Thể",
            tuoi: "Ngoại 16 Thực 16",
            thuoc_ve: "Tây Canh Quỳnh Luân Thùy Diệu Cung Ly Tông Thiên Kim",
            cong_phap: "Toái Tinh U Ảnh Quyết Tàn Thiên",
            binh_khi: "Toái Tinh Song Nhẫn",
            than_thong: ["Yến Hồi Thiểm"],
          },
          "soc_vong_thu": {
            cap_do: 32,
            linh_can: "Hạo Nguyệt Dị Linh Căn",
            chat: "Hạo Nguyệt U Vi Thể",
            tuoi: "Ngoại 20 Thực 2000+",
            thuoc_ve: "Tây Canh Quỳnh Luân Thùy Diệu Cung Cung Chủ",
            cong_phap: "Xích Uyên Trấn Thế Huyết Nguyệt Quyết",
            binh_khi: "Sương Phách Cực Phẩm Linh Bảo",
            than_thong: ["Nguyệt Ánh Thiên Cơ", "Xích Nguyệt Chiêu Tâm", "Nguyệt Hoa Phong Cấm", "Huyết Nguyệt Trấn Hồn", "Vạn Ảnh Quy Tông"],
          },
        }),
      hong_nhan: r.z.record(r.z.string().describe("Tên hồng nhan"), w).prefault({}),
      npc_do_giam: r.z.record(r.z.string().describe("Tên NPC"), B).prefault({}),
      danh_sach_nhiem_vu: r.z
        .record(r.z.string().describe("ID nhiệm vụ"), T)
        .prefault({})
        .transform((r) =>
          _(r)
            .pickBy((r, t) => !!r && !!String(t).trim())
            .mapValues((r, t) => {
              return {
                ...r,
                ten:
                  mr(r.ten) ||
                  mr(t) ||
                  ((e = r.loai),
                  {
                    "Chính Tuyến": "Nhiệm Vụ Chính Tuyến",
                    "Chi Nhánh": "Nhiệm Vụ Chi Nhánh",
                    "Mỗi Ngày": "Nhiệm Vụ Mỗi Ngày",
                    "Lâm Nguy Thụ Mệnh": "Lâm Nguy Thụ Mệnh",
                    "Khám Phá Bí Cảnh": "Khám Phá Bí Cảnh",
                  }[String(e ?? "").trim()] || "Nhiệm Vụ Chưa Đặt Tên"),
              };
              var e;
            })
            .pickBy((r) => "Đang Tiến Hành" === r.trang_thai)
            .value(),
        ),
      he_thong_danh_vong: H,
      he_thong_do_kho: er,
      co_ngo_co_the_tham_gia: r.z
        .array(Y)
        .prefault([])
        .transform((r) => r.filter((r) => !!r.ten)),
      hoan_canh_hien_tai: r.z.string().prefault(""),
      cai_dat_he_thong: rr,
      snapshot_do_hao_cam: r.z
        .record(
          r.z.string().describe("Tên hồng nhan"),
          r.z.coerce.number().transform((r) => _.clamp(r, -200, 200)),
        )
        .prefault({}),
    })
    .transform((r) => {
      r.kho_nhan_vat_hong_nhan = (function (r) {
        const t = _.cloneDeep(r ?? {});
        for (const { canonical: r, aliases: e } of ur) {
          let n = t[r] ? _.cloneDeep(t[r]) : void 0;
          for (const r of e) {
            const e = t[r];
            e && ((n = gr(n, e)), delete t[r]);
          }
          n && (t[r] = n);
        }
        return t;
      })(r.kho_nhan_vat_hong_nhan ?? {});
      const t = (function (r, t) {
        const e = _.cloneDeep(r ?? {}),
          n = _.cloneDeep(t ?? {});
        for (const { canonical: r, aliases: t } of ur) {
          let a = e[r] ? _.cloneDeep(e[r]) : void 0;
          for (const r of t) {
            const t = e[r];
            t && ((a = zr(a, t)), delete e[r]);
          }
          a && (e[r] = a);
          const o = [n[r], ...t.map((r) => n[r])]
            .map((r) => Number(r))
            .filter((r) => Number.isFinite(r));
          for (const r of t) delete n[r];
          o.length > 0 && (n[r] = o[o.length - 1]);
        }
        return { companions: e, snapshot: n };
      })(r.hong_nhan ?? {}, r.snapshot_do_hao_cam ?? {});
      ((r.hong_nhan = t.companions), (r.snapshot_do_hao_cam = t.snapshot));
      const e = Math.max(
        1,
        Math.floor(Number(r.cai_dat_he_thong?.phien_ban_he_thong_tu_luyen ?? 1) || 1),
      );
      !(function (r, t) {
        (t < 3 && (r.tu_vi = y(r.cap_do, r.tu_vi, t, 3)),
          (r.trang_thai_tu_luyen = N(r.trang_thai_tu_luyen, {
            legacyAttemptBreakthrough: r.thu_dot_pha,
            level: r.cap_do,
            cultivation: r.tu_vi,
          })),
          (r.thu_dot_pha = "Đột Phá" === r.trang_thai_tu_luyen.giai_doan),
          Object.assign(r, A(r, !0)));
      })(r.ban_ton, e);
      for (const t of Object.values(r.hong_nhan ?? {})) dr(t, e);
      r.cai_dat_he_thong = {
        ...(r.cai_dat_he_thong ?? {}),
        phien_ban_he_thong_tu_luyen: 3,
        chu_ky_ghi_de_trang_thai_thu_cong: String(r.cai_dat_he_thong?.chu_ky_ghi_de_trang_thai_thu_cong ?? ""),
      };
      const n = _.cloneDeep(r.snapshot_do_hao_cam ?? {});
      for (const [t, e] of Object.entries(r.hong_nhan ?? {})) {
        const r = Number(e?.do_hao_cam);
        if (!Number.isFinite(r)) continue;
        const a = Number(n[t]);
        if (Number.isFinite(a)) {
          const t = br(a);
          e.do_hao_cam = _.clamp(r, a - t, a + t);
        } else e.do_hao_cam = _.clamp(r, -200, 200);
        n[t] = e.do_hao_cam;
      }
      return ((r.snapshot_do_hao_cam = _.pickBy(n, (t, e) => _.has(r.hong_nhan, e))), r);
    }),
  hr = "__Đạp Nguyệt Tầm Tiên_mvu_guard_installed__",
  Sr = new Set([
    "nguong_dot_pha",
    "tuoi_tho_toi_da",
    "mo_ta_canh_gioi",
    "trang_thai_tuoi_tho",
    "trang_thai",
    "tien_do",
  ]),
  jr = new Set(),
  yr = new Map(),
  Nr = new Map(),
  vr = [
    "dong_ho_the_gioi",
    "ban_do_the_gioi",
    "dia_chi_the_gioi",
    "kho_the_luc_tong_mon",
    "kho_cong_phap",
    "kho_phap_bao",
    "kho_dia_diem",
    "tong_mon_suy_doan",
    "kho_linh_can",
    "kho_the_chat",
    "ban_ton",
    "kho_nhan_vat_hong_nhan",
    "Hồng Nhan",
    "npc_do_giam",
    "danh_sach_nhiem_vu",
    "he_thong_danh_vong",
    "he_thong_do_kho",
    "co_ngo_co_the_tham_gia",
    "hoan_canh_hien_tai",
    "cai_dat_he_thong",
    "snapshot_do_hao_cam",
  ];
function Mr(r) {
  let t = String(r || "").trim();
  if (!t) return t;
  (t.startsWith("./") && (t = t.slice(1)),
    t.startsWith("/") && (t = t.replace(/^\/+/, "").replaceAll("/", ".")),
    (t = t
      .replaceAll("：", ":")
      .replaceAll("。", ".")
      .replace(/\s+/g, "")
      .replace(/["'“”‘’[\]]+/g, "")));
  const e = {
    dong_ho_the_gioi: "dong_ho_the_gioi",
    ban_do_the_gioi: "ban_do_the_gioi",
    dia_chi_the_gioi: "dia_chi_the_gioi",
    kho_the_luc_tong_mon: "kho_the_luc_tong_mon",
    kho_cong_phap: "kho_cong_phap",
    kho_phap_bao: "kho_phap_bao",
    kho_dia_diem: "kho_dia_diem",
    kho_linh_can: "kho_linh_can",
    kho_the_chat: "kho_the_chat",
    kho_nhan_vat_hong_nhan: "kho_nhan_vat_hong_nhan",
    hong_nhan: "Hồng Nhan",
    he_thong_danh_vong: "he_thong_danh_vong",
    he_thong_do_kho: "he_thong_do_kho",
    muc_do_nguy_hiem: "muc_do_nguy_hiem",
    khu_vuc_hien_tai: "khu_vuc_hien_tai",
    tang_cap_truc_thuoc: "tang_cap_truc_thuoc",
    hoan_canh_hien_tai: "hoan_canh_hien_tai",
    co_ngo_co_the_tham_gia: "co_ngo_co_the_tham_gia",
    danh_sach_nhiem_vu: "danh_sach_nhiem_vu",
  };
  for (const [r, n] of Object.entries(e)) t = t.replaceAll(r, n);
  return (
    t.startsWith("stat_data.") ||
      (vr.some((r) => t === r || t.startsWith(`${r}.`)) &&
        (t = `stat_data.${t}`)),
    t
  );
}
const aliasMap = new Map();
ur.forEach(item => {
  item.aliases.forEach(alias => aliasMap.set(alias, item.canonical));
});
function Ar(r) {
  const t = r.match(/^stat_data\.hong_nhan\.([^./]+)(?=\.|\$)/);
  if (t && aliasMap.has(t[1]))
    return r.replace(`stat_data.hong_nhan.${t[1]}`, `stat_data.hong_nhan.${aliasMap.get(t[1])}`);
  const e = r.match(/^stat_data\.kho_nhan_vat_hong_nhan\.([^./]+)(?=\.|\$)/);
  return e && aliasMap.has(e[1])
    ? r.replace(`stat_data.kho_nhan_vat_hong_nhan.${e[1]}`, `stat_data.kho_nhan_vat_hong_nhan.${aliasMap.get(e[1])}`)
    : r;
}
function $r(r, t) {
  if (r.endsWith("do_thuan_thuc") && "string" == typeof t) {
    const r = t.trim().replace(/^["'“”‘’]+|["'“”‘’]+$/g, "");
    if (r.includes("Tiểu Thành")) return "Thục Luyện";
    if (r.includes("Trung Thành")) return "Tinh Thông";
    if (r.includes("Đại Viên Mãn")) return "Viên Mãn";
  }
  return t;
}
function Dr(r, t, e) {
  if (
    !(function (r) {
      const t = r.match(
        /^stat_data\.(?:ban_ton|hong_nhan\.[^./]+|npc_do_giam\.[^./]+)\.([^./]+)$/,
      );
      return !!t && Sr.has(t[1]);
    })(t)
  )
    return !1;
  const n = (function (r, t) {
    const e = _.get(t, r);
    if (void 0 !== e) return _.cloneDeep(e);
    const n = _r.safeParse(_.get(t, "stat_data"));
    return n.success ? _.get({ stat_data: n.data }, r) : void 0;
  })(t, e);
  return (
    void 0 !== n &&
    ((r.type = "set"),
    (r.args = [t, JSON.stringify(n)]),
    (r.reason = "Trường phái sinh chỉ đọc bị vệ sĩ cải tả thành no-op"),
    !0)
  );
}
function xr(r) {
  if (!Array.isArray(r.args)) return null;
  switch (r.type) {
    case "set":
    case "insert":
      return r.args.length >= 3 ? 2 : r.args.length >= 2 ? 1 : null;
    case "add":
      return r.args.length >= 2 ? 1 : null;
    default:
      return null;
  }
}
function wr(r, t) {
  const e = Number(t);
  if (!Number.isFinite(e) || e < 1) return;
  const n = Math.floor(e),
    a = r.match(/^stat_data\.hong_nhan\.([^./]+)\.cap_do$/);
  if (a) return void yr.set(a[1], n);
  const o = r.match(/^stat_data\.kho_nhan_vat_hong_nhan\.([^./]+)\.cap_do$/);
  o && Nr.set(o[1], n);
}
function Br() {
  const r = window;
  r[hr] ||
    ((r[hr] = !0),
    eventOn(Mvu.events.COMMAND_PARSED, (r, t) => {
      for (const e of t) {
        if (!Array.isArray(e.args) || 0 === e.args.length) continue;
        const t = String(e.args[0] ?? ""),
          n = Ar(Mr(t));
        if ((n && n !== t && (e.args[0] = n), n && Dr(e, n, r))) continue;
        const a = xr(e);
        if (null !== a && e.args.length > a && n) {
          const r = e.args[a],
            t = $r(n, r);
          (_.isEqual(r, t) || (e.args[a] = t), wr(n, t));
        }
      }
    }),
    eventOn(Mvu.events.VARIABLE_UPDATE_ENDED, (r) => {
      !(function (r) {
        for (const [t, e] of yr.entries())
          _.has(r, `stat_data.hong_nhan.${t}`) &&
            _.set(r, `stat_data.hong_nhan.${t}.cap_do`, e);
        for (const [t, e] of Nr.entries())
          _.has(r, `stat_data.kho_nhan_vat_hong_nhan.${t}`) &&
            _.set(r, `stat_data.kho_nhan_vat_hong_nhan.${t}.cap_do`, e);
      })(r);
      const t = _.get(r, "stat_data"),
        e = _r.safeParse(t);
      (yr.clear(),
        Nr.clear(),
        e.success && (_.isEqual(t, e.data) || _.set(r, "stat_data", e.data)));
    }),
    console.info("[Đạp Nguyệt Tầm Tiên] Vệ sĩ bảo vệ biến độc lập đã kích hoạt"));
}
$(() => {
  waitGlobalInitialized("Mvu")
    .then(() => Br())
    .catch((r) => console.warn("[Đạp Nguyệt Tầm Tiên] Vệ sĩ bảo vệ biến độc lập tải thất bại", r));
});
//# sourceMappingURL=index.js.map