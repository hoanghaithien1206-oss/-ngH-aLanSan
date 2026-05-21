import { registerMvuSchema as r } from "https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js";
const e = z,
  t = ["Sơ Kỳ", "Trung Kỳ", "Hậu Kỳ", "Đại Viên Mãn"],
  n = [
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
  a = [1, 1.18, 1.38, 1.6],
  o = [
    100, 160, 260, 420, 680, 1100, 1780, 2880, 4660, 7540, 12200, 19740,
  ].flatMap((r) => a.map((e) => Math.round(r * e))),
  c = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2880,
    3360, 3840, 4800, 5760, 6720, 7680, 9600, 11520, 13440, 15360, 19200, 23040,
    26880, 30720, 38400, 46080, 53760, 61440, 76800, 92160, 107520, 122880,
    153600, 184320, 215040, 245760, 307200, 368640, 430080, 491520, 614400,
    737280, 860160, 983040,
  ],
  i = {
    1: [
      100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 2400, 2400,
      2400, 2400, 4800, 4800, 4800, 4800, 9600, 9600, 9600, 9600, 19200, 19200,
      19200, 19200, 38400, 38400, 38400, 38400, 76800, 76800, 76800, 76800,
      153600, 153600, 153600, 153600, 307200, 307200, 307200, 307200, 614400,
      614400, 614400, 614400,
    ],
    2: o,
    3: c,
  },
  u = [
    100, 100, 100, 100, 200, 200, 200, 200, 500, 500, 500, 500, 1e3, 1e3, 1e3,
    1e3, 2e3, 2e3, 2e3, 2e3, 5e3, 5e3, 5e3, 5e3, 1e4, 1e4, 1e4, 1e4, 5e4, 5e4,
    5e4, 5e4, 1e5, 1e5, 1e5, 1e5, 5e5, 5e5, 5e5, 5e5, 2e6, 2e6, 2e6, 2e6, 1e7,
    1e7, 1e7, 1e7,
  ];
const s = {
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
  l = {
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
const f = e.z.object({
    ten: e.z.string().prefault(""),
    mo_ta: e.z.string().prefault(""),
    pham_cap: e.z.string().prefault(""),
    so_luong: e.z.coerce
      .number()
      .transform((r) => Math.max(0, r))
      .prefault(1),
  }),
  p = new Set(["Linh Thạch", "Hạ Phẩm Linh Thạch"]);
function m(r) {
  return String(r ?? "")
    .trim()
    .replace(/\s+/g, "");
}
function g(r, e) {
  return [m(r), m(e?.ten)].filter(Boolean).some((r) => p.has(r));
}
function b(r, ...e) {
  let t = Number(r);
  (!Number.isFinite(t) || t < 0) && (t = 0);
  const n = e.map((r) => {
    const e = (function (r) {
      const e = {};
      let t = 0;
      for (const [n, a] of Object.entries(r ?? {}))
        if (a) {
          if (g(n, a)) {
            const r = Number(a.so_luong);
            Number.isFinite(r) && r > 0 && (t += r);
            continue;
          }
          e[n] = a;
        }
      return { inventory: e, spiritStone: t };
    })(r);
    return ((t += e.spiritStone), e.inventory);
  });
  return { spiritStone: t, inventories: n };
}
const d = {
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
  h = {
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
  S = e.z
    .object({
      giai_doan: e.z
        .string()
        .transform((r) => d[String(r).trim()] || "Tu Luyện")
        .prefault("Tu Luyện"),
      nguyen_nhan_binh_canh: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      muc_tieu_dot_pha: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      ket_qua_truoc: e.z
        .string()
        .transform((r) => h[String(r).trim()] || "Không")
        .prefault("Không"),
    })
    .prefault({ giai_doan: "Tu Luyện", nguyen_nhan_binh_canh: "", muc_tieu_dot_pha: "", ket_qua_truoc: "Không" });
function j(r) {
  const e = _.clamp(Math.floor(Number(r) || 1), 1, c.length),
    a = Math.floor((e - 1) / 4);
  return `${n[a] ?? "Luyện Khí"} ${t[(e - 1) % 4] ?? "Sơ Kỳ"}`;
}
function M(r, e = 3) {
  const t = (function (r = 3) {
    if (!0 === r) return i[1];
    if (!1 === r) return i[3];
    const e = Math.max(1, Math.floor(Number(r) || 3));
    return i[e] ?? c;
  })(e);
  return t[_.clamp(Math.floor(Number(r) || 1), 1, t.length) - 1] ?? t[0] ?? 100;
}
function N(r, e, t = 1, n = 3) {
  const a = Number(e);
  if (!Number.isFinite(a) || a <= 0) return 0;
  const o = M(r, t),
    c = M(r, n);
  if (o <= 0 || o === c) return Math.round(a);
  const i = a / o,
    u = Math.round(i * c);
  return Math.max(0, u);
}
function y(r, e) {
  const t = S.parse(r ?? {}),
    n = M(e.level);
  let a = t.giai_doan;
  e.legacyAttemptBreakthrough || "Đột Phá" === a
    ? (a = "Đột Phá")
    : "Tu Luyện" === a && e.cultivation >= n && (a = "Bình Cảnh");
  const o = e.level < c.length ? j(e.level + 1) : t.muc_tieu_dot_pha,
    i = ["Bình Cảnh", "Đột Phá", "Áp Cảnh"].includes(a);
  return {
    giai_doan: a,
    nguyen_nhan_binh_canh: i ? t.nguyen_nhan_binh_canh : "",
    muc_tieu_dot_pha: i ? t.muc_tieu_dot_pha || o : "",
    ket_qua_truoc: t.ket_qua_truoc,
  };
}
const v = e.z
    .object({
      ten: e.z.string().prefault(""),
      mo_ta: e.z.string().prefault(""),
      loai: e.z.enum(["Công Pháp", "Thần Thông", "Bí Thuật"]).prefault("Thần Thông"),
      pham_cap: e.z
        .string()
        .transform((r) => s[r] || "Phàm")
        .catch("Phàm"),
      do_thuan_thuc: e.z
        .string()
        .transform((r) =>
          (function (r) {
            const e = String(r ?? "")
              .trim()
              .replace(/^["'“”‘’]+|["'“”‘’]+$/g, "");
            return l[e]
              ? l[e]
              : e.includes("Tiểu Thành")
                ? "Thục Luyện"
                : e.includes("Trung Thành")
                  ? "Tinh Thông"
                  : e.includes("Đại Viên Mãn")
                    ? "Viên Mãn"
                    : "Nhập Môn";
          })(r),
        )
        .catch("Nhập Môn"),
      thoi_gian_linh_ngo: e.z.coerce.number().catch(() => Date.now()),
      cap_uy_luc: e.z.coerce.number().optional(),
    })
    .transform((r) => {
      if (!r.cap_uy_luc || 0 === r.cap_uy_luc) {
        const e = { "Nhập Môn": 1, "Thục Luyện": 2, "Tinh Thông": 3, "Đại Thành": 4, "Viên Mãn": 5, "Hóa Cảnh": 6 },
          t =
            { "Phàm": 1, "Hoàng": 2, "Huyền": 3, dia: 4, "Thiên": 5, "Tiên": 6, "Thánh": 7, "Tiên Thiên": 8 }[
              r.pham_cap
            ] || 1,
          n = e[r.do_thuan_thuc] || 1;
        return { ...r, cap_uy_luc: 10 * t + n };
      }
      return r;
    }),
  x = e.z
    .record(e.z.string().describe("Tên vật phẩm"), f)
    .prefault({})
    .transform((r) => _.pickBy(r, ({ so_luong: r }) => r > 0));
function D(r, e = !1) {
  const t = r.cap_do,
    n = M(t),
    a = u[t - 1] ?? 100,
    o = {
      nguong_dot_pha: n,
      tuoi_tho_toi_da: a,
      mo_ta_canh_gioi: j(t),
      trang_thai_tuoi_tho: `${r.tuoi_tho_da_song}/${a}`,
      trang_thai: (function (r, e, t) {
        const n = r?.giai_doan || "Tu Luyện";
        return "Đột Phá" === n
          ? "Đột Phá"
          : "Củng Cố" === n
            ? "Củng Cố"
            : "Áp Cảnh" === n
              ? "Áp Cảnh"
              : "Bình Cảnh" === n || e >= t
                ? "Bình Cảnh Kỳ"
                : "Tu Luyện";
      })(r.trang_thai_tu_luyen, r.tu_vi, n),
      tien_do: `${(100 * (n > 0 ? _.clamp(r.tu_vi / n, 0, 1) : 0)).toFixed(1)}%`,
    };
  if (!e) return o;
  const c = (function (r) {
      const e = Math.floor((r - 1) / 4),
        t = (r - 1) % 4,
        n = Math.pow(10, e + 1),
        a = 0.2 * n * t;
      return Math.round(n + a);
    })(t),
    i = Object.values(r.danh_sach_than_thong || {}),
    s =
      c +
      (i.length > 0 ? Math.max(...i.map((r) => r.cap_uy_luc || 0)) : 0) +
      (() => {
        const e = r.the_chat || "";
        return e.includes("Thần")
          ? 500
          : e.includes("Thánh")
            ? 200
            : e.includes("Đạo")
              ? 100
              : e.includes("Linh")
                ? 50
                : 0;
      })();
  return { ...o, chien_luc: s };
}
const B = e.z.object({
    cap_do: e.z.coerce.number().transform((r) => _.clamp(r, 1, 48)),
    linh_can: e.z.string().describe("linh_can"),
    chat: e.z.string().describe("the_chat"),
    tuoi: e.z.string().describe("Tuổi"),
    thuoc_ve: e.z.string().describe("Thuộc về"),
    cong_phap: e.z.string().describe("Công Pháp"),
    binh_khi: e.z.string().describe("ban_menh_binh_khi"),
    than_thong: e.z.array(e.z.string()).prefault([]),
  }),
  k = e.z
    .object({
      cam_xuc_hien_tai: e.z.string().prefault(""),
      nguyen_nhan_thai_do: e.z.string().prefault(""),
      nguyen_vong_quan_he: e.z.string().prefault(""),
      ki_ki_tiep_xuc: e.z.string().prefault(""),
      hen_uoc_chua_hoan_thanh: e.z.string().prefault(""),
    })
    .prefault({}),
  A = e.z
    .object({
      cap_do: e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 48))
        .prefault(1),
      tu_vi: e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      linh_can: e.z.string().prefault("Ngũ Hành Tạp Linh Căn"),
      the_chat: e.z.string().prefault("Phàm Thể"),
      cong_phap: e.z.string().prefault("Không"),
      ban_menh_binh_khi: e.z.string().prefault("Không"),
      danh_sach_than_thong: e.z.record(e.z.string().describe("Tên thần thông"), v).prefault({}),
      linh_thach: e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      tuoi_tho_da_song: e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      thu_dot_pha: e.z.boolean().prefault(!1),
      trang_thai_tu_luyen: S,
      do_hao_cam: e.z.coerce
        .number()
        .transform((r) => _.clamp(r, -200, 200))
        .prefault(0),
      quan_he: e.z.string().prefault("Người Lạ"),
      ngu_canh_quan_he: k,
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
      ((r.trang_thai_tu_luyen = y(r.trang_thai_tu_luyen, {
        legacyAttemptBreakthrough: r.thu_dot_pha,
        level: r.cap_do,
        cultivation: r.tu_vi,
      })),
        (r.thu_dot_pha = "Đột Phá" === r.trang_thai_tu_luyen.giai_doan));
      const e = D(r, !1);
      return { ...r, ...e };
    }),
  F = e.z.object({
    cap_do: e.z.coerce
      .number()
      .transform((r) => _.clamp(r, 1, 48))
      .prefault(1),
    tong_mon_dang_o: e.z.string().prefault("Tán Tu"),
    ghi_chu: e.z.string().prefault(""),
  }),
  w = {
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
  O = {
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
  V = {
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
  Z = {
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
  C = {
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
  P = {
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
  U = {
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
  q = e.z
    .object({
      dang_chien_dau: e.z.boolean().prefault(!1),
      trang_thai_hien_tai: e.z
        .string()
        .transform((r) => w[r] || "Không Chiến Đấu")
        .prefault("Không Chiến Đấu"),
      chi_so_linh_luc: e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 100))
        .prefault(100),
      cap_do_thuong_the: e.z
        .string()
        .transform((r) => O[r] || "Vô Thương")
        .prefault("Vô Thương"),
      quan_bai_tay_da_dung: e.z.array(e.z.string()).prefault([]),
      so_hiep_chien_dau: e.z.coerce.number().prefault(0),
    })
    .prefault({
      dang_chien_dau: !1,
      trang_thai_hien_tai: "Không Chiến Đấu",
      chi_so_linh_luc: 100,
      cap_do_thuong_the: "Vô Thương",
      quan_bai_tay_da_dung: [],
      so_hiep_chien_dau: 0,
    }),
  I = e.z.object({
    ten: e.z.string().prefault("Kẻ Địch Chưa Biết"),
    canh_gioi: e.z.string().prefault("Chưa Biết"),
    danh_gia_chien_luc: e.z
      .string()
      .transform((r) => V[r] || "Thế Quân Lực Địch")
      .prefault("Thế Quân Lực Địch"),
    trang_thai: e.z
      .string()
      .transform((r) => Z[r] || "Hoàn Hảo")
      .prefault("Hoàn Hảo"),
    dac_diem: e.z.string().prefault(""),
  }),
  E = e.z
    .object({
      dang_do_kiep: e.z.boolean().prefault(!1),
      kiep_chung: e.z
        .string()
        .transform((r) => C[r] || "Không")
        .prefault("Không"),
      cap_do_kiep_nan: e.z
        .string()
        .transform((r) => P[r] || "Không")
        .prefault("Không"),
      giai_doan_hien_tai: e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 9))
        .prefault(0),
      tong_so_giai_doan: e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 9))
        .prefault(0),
      suc_chiu_dung_kiep_luc: e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 0, 100))
        .prefault(100),
      phap_bao_ho_dao_da_dung: e.z.array(e.z.string()).prefault([]),
      mo_ta_kiep_nan: e.z.string().prefault(""),
      nguyen_nhan_kich_hoat: e.z.string().prefault(""),
      ket_qua_do_kiep_truoc: e.z
        .string()
        .transform((r) => U[r] || "Không")
        .prefault("Không"),
      thoi_gian_hoi_chieu_do_kiep: e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      nhat_ky_phat_that_bai: e.z.string().prefault(""),
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
  G = e.z
    .object({
      khu_vuc_hien_tai: e.z.string().prefault("Nơi Chưa Biết"),
      tang_cap_truc_thuoc: e.z.string().prefault("Địa Tầng"),
      mo_ta_moi_truong: e.z.string().prefault(""),
      muc_do_nguy_hiem: e.z.coerce.number().prefault(10),
      loi_di_kha_dung: e.z.array(e.z.string()).prefault([]),
      thong_tin_dan_duong: e.z.string().prefault(""),
    })
    .prefault({
      khu_vuc_hien_tai: "Nơi Chưa Biết",
      tang_cap_truc_thuoc: "Địa Tầng",
      mo_ta_moi_truong: "",
      muc_do_nguy_hiem: 10,
      loi_di_kha_dung: [],
      thong_tin_dan_duong: "",
    }),
  H = e.z
    .object({
      ho_ten: e.z.string().prefault("Vô Danh Thị"),
      tong_mon: e.z.string().prefault("Tán Tu"),
      xuat_than: e.z.string().prefault("Phàm Nhân"),
    })
    .prefault({ ho_ten: "Vô Danh Thị", tong_mon: "Tán Tu", xuat_than: "Phàm Nhân" }),
  J = e.z
    .object({
      cap_do: e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 48))
        .prefault(1),
      tu_vi: e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      linh_can: e.z.string().prefault("Ngũ Hành Tạp Linh Căn"),
      the_chat: e.z.string().prefault("Phàm Thể"),
      cong_phap: e.z.string().prefault("Không"),
      ban_menh_binh_khi: e.z.string().prefault("Không"),
      danh_sach_than_thong: e.z.record(e.z.string().describe("Tên thần thông"), v).prefault({}),
      linh_thach: e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      tuoi_tho_da_song: e.z.coerce
        .number()
        .transform((r) => Math.max(0, r))
        .prefault(0),
      thu_dot_pha: e.z.boolean().prefault(!1),
      trang_thai_tu_luyen: S,
      hanh_tung: G,
      than_phan: H,
      tui_do: x,
      phap_bao: x,
      tui_tap_vat: x,
      trang_thai_chien_dau: q,
      ke_dich_hien_tai: e.z.array(I).prefault([]),
      trang_thai_do_kiep: E,
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
      const e = b(r.linh_thach, r.tui_do, r.tui_tap_vat),
        [t, n] = e.inventories;
      ((r.linh_thach = e.spiritStone),
        (r.tui_do = t ?? {}),
        (r.tui_tap_vat = n ?? {}),
        (r.trang_thai_tu_luyen = y(r.trang_thai_tu_luyen, {
          legacyAttemptBreakthrough: r.thu_dot_pha,
          level: r.cap_do,
          cultivation: r.tu_vi,
        })),
        (r.thu_dot_pha = "Đột Phá" === r.trang_thai_tu_luyen.giai_doan));
      const a = D(r, !0);
      return { ...r, ...a };
    }),
  K = {
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
  Q = e.z.object({
    ten: e.z.string().prefault(""),
    loai: e.z
      .string()
      .transform((r) => L[String(r).trim()] || "Chi Nhánh")
      .prefault("Chính Tuyến"),
    muc_tieu: e.z.string().prefault(""),
    trang_thai: e.z
      .string()
      .transform((r) => K[String(r).trim()] || "Đang Tiến Hành")
      .prefault("Đang Tiến Hành"),
    thong_tin_bi_canh: e.z
      .object({
        vuc: e.z
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
        nguy: e.z.coerce
          .number()
          .transform((r) => _.clamp(r, 0, 100))
          .optional(),
        dac: e.z.string().optional(),
        phan_thuong: e.z
          .union([
            e.z.array(e.z.string()),
            e.z.string().transform((r) => (r ? [r] : [])),
          ])
          .prefault([]),
        gioi_han: e.z.string().optional(),
      })
      .optional(),
    thoi_gian_tao: e.z
      .union([e.z.coerce.number(), e.z.string().transform(() => Date.now())])
      .prefault(() => Date.now()),
  }),
  R = e.z.object({
    gia_tri: e.z.coerce
      .number()
      .transform((r) => _.clamp(r, -100, 100))
      .prefault(0),
    quan_he: e.z.string().prefault("Xa Lạ"),
    thoi_gian_cap_nhat: e.z.coerce.number().prefault(() => Date.now()),
  }),
  T = e.z
    .record(e.z.string().describe("Tên thế lực"), R)
    .prefault({})
    .transform((r) =>
      _(r)
        .mapValues((r) => {
          const e = r.gia_tri;
          let t;
          t =
            e >= 80
              ? "Đồng Minh"
              : e >= 60
                ? "Thân Thiện"
                : e >= 30
                  ? "Hữu Hảo"
                  : e >= 10
                    ? "Thiên Hướng Trung Lập"
                    : e >= -10
                      ? "Trung Lập"
                      : e >= -30
                        ? "Trung Lập Ác Cảm"
                        : e >= -60
                          ? "Địch Đối"
                          : e >= -80
                            ? "Thù Hận"
                            : "Bất Tử Bất Hưu";
          const n = r.quan_he && "Xa Lạ" !== r.quan_he ? r.quan_he : t;
          return { ...r, quan_he: n };
        })
        .value(),
    ),
  W = {
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
  X = [
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
function Y(r, e) {
  const t = W[r];
  if (t) return t;
  const n = Object.values(e)
    .map((r) =>
      (function (r) {
        return String(r ?? "").trim();
      })(r),
    )
    .filter(Boolean)
    .join("｜");
  for (const r of X) if (r.pattern.test(n)) return r.type;
  return "Thám Hiểm";
}
const rr = e.z
    .object({
      ten: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      nguon_goc: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      loai: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault("Thám Hiểm"),
      mo_ta: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      ky_vong_thu_hoach: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      danh_gia_rui_ro: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .prefault(""),
      gioi_han_thoi_gian: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .optional(),
      su_kien_lien_quan: e.z.coerce
        .string()
        .transform((r) => String(r).trim())
        .optional(),
      muc_do_uu_tien: e.z.coerce
        .number()
        .transform((r) => _.clamp(r, 1, 5))
        .prefault(3),
    })
    .transform((r) => {
      const e = {
        ten: r.ten,
        nguon_goc: r.nguon_goc,
        mo_ta: r.mo_ta,
        ky_vong_thu_hoach: r.ky_vong_thu_hoach,
        danh_gia_rui_ro: r.danh_gia_rui_ro,
        gioi_han_thoi_gian: r.gioi_han_thoi_gian ?? "",
        su_kien_lien_quan: r.su_kien_lien_quan ?? "",
      };
      return { ...r, loai: Y(r.loai, e) };
    }),
  er = e.z
    .object({
      kich_hoat_nhac_nho_hanh_dong: e.z.boolean().prefault(!0),
      phien_ban_he_thong_tu_luyen: e.z.coerce.number().prefault(1),
      chu_ky_ghi_de_trang_thai_thu_cong: e.z.string().prefault(""),
    })
    .prefault({}),
  tr =
    (e.z.object({ kich_hoat_nhac_nho_hanh_dong: e.z.boolean().prefault(!0) }).prefault({}),
    {
      "Thuận Toại": "Thuận Toại",
      "Thụ Trở": "Thụ Trở",
      "Bình Ổn": "Bình Ổn",
      "Thuận Toại": "Thuận Toại",
      "Thụ Trở": "Thụ Trở",
      "Bình Ổn": "Bình Ổn",
    }),
  nr = e.z
    .object({
      thien_dao_cam_ung: e.z
        .string()
        .transform((r) => tr[String(r).trim()] || "Bình Ổn")
        .prefault("Bình Ổn"),
      canh_bao_ap_luc_moi_truong: e.z.string().prefault("Thiên đạo vận chuyển bình thường, vạn vật theo lý tự nhiên."),
      du_lieu_noi_bo: e.z
        .object({
          so_phien_ban: e.z.coerce.number().prefault(1),
          bao_ve_can_bang: e.z
            .object({
              bo_dem_lien_tuc_trac_tro: e.z.coerce.number().prefault(0),
              nguong_kich_hoat: e.z.coerce.number().prefault(3),
              so_hiep_con_hieu_luc: e.z.coerce.number().prefault(0),
              so_hiep_hoi_chieu: e.z.coerce.number().prefault(0),
            })
            .prefault({}),
          chien_luoc_dong: e.z
            .object({
              gioi_han_luong_thay_doi_mot_hiep: e.z.coerce.number().prefault(0.15),
              toc_do_giam_tu_nhien: e.z.coerce.number().prefault(0.03),
              hiep_hoi_tang_truong: e.z.coerce.number().prefault(2),
            })
            .prefault({}),
          snapshot_ket_toan_do_kho: e.z
            .object({
              he_so_co_so_hiep: e.z.coerce.number().prefault(1),
              he_so_cuoi_cung: e.z.coerce.number().prefault(1),
              nguon_phan_tang: e.z
                .object({
                  tang_tu_su_the_gioi: e.z.coerce.number().prefault(1),
                  tang_so_thich_nguoi_choi: e.z.coerce.number().prefault(1),
                  tang_trang_thai_ngan_han: e.z.coerce.number().prefault(1),
                })
                .prefault({}),
            })
            .prefault({}),
        })
        .prefault({}),
    })
    .prefault({}),
  ar = e.z.object({
    dia: e.z.string().describe("Nơi ở"),
    dac: e.z.string().describe("Đặc điểm cốt lõi"),
    luc: e.z.string().describe("Chiến lực cao nhất"),
    doanh: e.z.enum(["Chính", "Ma", "Trung"]),
    mo: e.z.enum(["Siêu Lớn", "Lớn", "Nhỏ", "Vi", "Đặc Biệt"]),
  }),
  or = e.z.object({
    giai: e.z
      .string()
      .transform((r) => s[r] || "Phàm")
      .catch("Phàm"),
    tinh: e.z.string().describe("Thuộc tính"),
    hieu: e.z.string().describe("Hiệu quả"),
  }),
  cr = e.z
    .object({
      giai: e.z.enum([
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
      loai: e.z.string().describe("loai"),
      dac_tinh_ban_menh: e.z.string().optional().describe("Đặc tính độc nhất của bản mệnh pháp bảo"),
      khi_linh: e.z.string().optional().describe("Tên khí linh"),
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
  ir = e.z.object({
    vuc: e.z.enum([
      "Thiên Tầng",
      "Thần Châu",
      "Đông Thương",
      "Nam Viêm",
      "Tây Canh",
      "Bắc Minh",
      "Hạ Tầng",
      "Tứ Hải",
    ]),
    loai: e.z.enum(["Bí Cảnh", "Thành Trấn", "Tông Môn", "Cấm Địa", "Di Tích", "Địa Hình"]),
    nguy: e.z.coerce.number().transform((r) => _.clamp(r, 0, 100)),
    dac: e.z.string().describe("dac_diem"),
    tai_nguyen: e.z
      .union([
        e.z.array(e.z.string()),
        e.z.string().transform((r) => (r ? [r] : [])),
      ])
      .prefault([]),
  }),
  ur = e.z
    .object({
      chat: e.z.enum(["Liệt", "Hạ", "Trung", "Thượng", "Cực", "Thiên", "Dị"]),
      tinh: e.z.string().describe("Thuộc tính"),
      hi: e.z.enum(["Thường", "Ít", "Hiếm", "Hiếm Có", "Truyền Thuyết"]),
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
  sr = e.z
    .object({
      chat: e.z.enum(["Phàm", "Linh", "Đạo", "Thánh", "Thần"]),
      dac: e.z.string().describe("Đặc tính"),
      hi: e.z.enum(["Thường", "Ít", "Hiếm", "Hiếm Có", "Truyền Thuyết"]),
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
  lr = [
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
  fr = A.parse({}),
  pr = /[\u3400-\u4dbf\u4e00-\u9fff]/;
function mr(r, e, t) {
  const n = String(r ?? "").trim();
  return n && n !== t ? n : e;
}
function zr(r) {
  const e = String(r ?? "").trim();
  if (!e) return "";
  const t =
      e
        .replace(
          /^(?:[A-Za-z][A-Za-z0-9]*)(?:[._:\-/\\\s]+[A-Za-z0-9]+)*[._:\-/\\\s]*/u,
          "",
        )
        .trim() || e,
    n = t.search(pr);
  return n < 0 ? "" : t.slice(n).trim();
}
function gr(r, e) {
  if (!r) return _.cloneDeep(e);
  const t = _.cloneDeep(r),
    n = _.cloneDeep(fr.ngu_canh_quan_he);
  ((t.cap_do = Math.max(Number(r.cap_do ?? fr.cap_do), Number(e.cap_do ?? fr.cap_do))),
    (t.tu_vi = Math.max(Number(r.tu_vi ?? fr.tu_vi), Number(e.tu_vi ?? fr.tu_vi))),
    (t.linh_thach = Math.max(Number(r.linh_thach ?? fr.linh_thach), Number(e.linh_thach ?? fr.linh_thach))),
    (t.tuoi_tho_da_song = Math.max(
      Number(r.tuoi_tho_da_song ?? fr.tuoi_tho_da_song),
      Number(e.tuoi_tho_da_song ?? fr.tuoi_tho_da_song),
    )),
    (t.thu_dot_pha = Boolean(r.thu_dot_pha || e.thu_dot_pha)));
  const a = _.cloneDeep(fr.trang_thai_tu_luyen);
  return (
    (t.trang_thai_tu_luyen = y(
      {
        giai_doan: mr(e.trang_thai_tu_luyen?.giai_doan, String(r.trang_thai_tu_luyen?.giai_doan ?? a.giai_doan), a.giai_doan),
        nguyen_nhan_binh_canh: mr(
          e.trang_thai_tu_luyen?.nguyen_nhan_binh_canh,
          String(r.trang_thai_tu_luyen?.nguyen_nhan_binh_canh ?? a.nguyen_nhan_binh_canh),
          a.nguyen_nhan_binh_canh,
        ),
        muc_tieu_dot_pha: mr(
          e.trang_thai_tu_luyen?.muc_tieu_dot_pha,
          String(r.trang_thai_tu_luyen?.muc_tieu_dot_pha ?? a.muc_tieu_dot_pha),
          a.muc_tieu_dot_pha,
        ),
        ket_qua_truoc: mr(
          e.trang_thai_tu_luyen?.ket_qua_truoc,
          String(r.trang_thai_tu_luyen?.ket_qua_truoc ?? a.ket_qua_truoc),
          a.ket_qua_truoc,
        ),
      },
      {
        legacyAttemptBreakthrough: t.thu_dot_pha,
        level: t.cap_do,
        cultivation: t.tu_vi,
      },
    )),
    (t.do_hao_cam = Number.isFinite(Number(e.do_hao_cam))
      ? Number(e.do_hao_cam)
      : Number(r.do_hao_cam ?? fr.do_hao_cam)),
    (t.quan_he = mr(e.quan_he, String(r.quan_he ?? fr.quan_he), fr.quan_he)),
    (t.ngu_canh_quan_he = {
      cam_xuc_hien_tai: mr(
        e.ngu_canh_quan_he?.cam_xuc_hien_tai,
        String(r.ngu_canh_quan_he?.cam_xuc_hien_tai ?? n.cam_xuc_hien_tai),
        n.cam_xuc_hien_tai,
      ),
      nguyen_nhan_thai_do: mr(
        e.ngu_canh_quan_he?.nguyen_nhan_thai_do,
        String(r.ngu_canh_quan_he?.nguyen_nhan_thai_do ?? n.nguyen_nhan_thai_do),
        n.nguyen_nhan_thai_do,
      ),
      nguyen_vong_quan_he: mr(
        e.ngu_canh_quan_he?.nguyen_vong_quan_he,
        String(r.ngu_canh_quan_he?.nguyen_vong_quan_he ?? n.nguyen_vong_quan_he),
        n.nguyen_vong_quan_he,
      ),
      ki_ki_tiep_xuc: mr(
        e.ngu_canh_quan_he?.ki_ki_tiep_xuc,
        String(r.ngu_canh_quan_he?.ki_ki_tiep_xuc ?? n.ki_ki_tiep_xuc),
        n.ki_ki_tiep_xuc,
      ),
      hen_uoc_chua_hoan_thanh: mr(
        e.ngu_canh_quan_he?.hen_uoc_chua_hoan_thanh,
        String(r.ngu_canh_quan_he?.hen_uoc_chua_hoan_thanh ?? n.hen_uoc_chua_hoan_thanh),
        n.hen_uoc_chua_hoan_thanh,
      ),
    }),
    String(r.linh_can ?? fr.linh_can) === fr.linh_can &&
      String(e.linh_can ?? "").trim() &&
      (t.linh_can = e.linh_can),
    String(r.the_chat ?? fr.the_chat) === fr.the_chat &&
      String(e.the_chat ?? "").trim() &&
      (t.the_chat = e.the_chat),
    String(r.cong_phap ?? fr.cong_phap) === fr.cong_phap &&
      String(e.cong_phap ?? "").trim() &&
      (t.cong_phap = e.cong_phap),
    String(r.ban_menh_binh_khi ?? fr.ban_menh_binh_khi) === fr.ban_menh_binh_khi &&
      String(e.ban_menh_binh_khi ?? "").trim() &&
      (t.ban_menh_binh_khi = e.ban_menh_binh_khi),
    (t.danh_sach_than_thong = { ...(r.danh_sach_than_thong ?? {}), ...(e.danh_sach_than_thong ?? {}) }),
    t
  );
}
function br(r, e) {
  return r
    ? {
        cap_do: Math.max(Number(r.cap_do ?? 1), Number(e.cap_do ?? 1)),
        linh_can: mr(e.linh_can, String(r.linh_can ?? ""), ""),
        chat: mr(e.chat, String(r.chat ?? ""), ""),
        tuoi: mr(e.tuoi, String(r.tuoi ?? ""), ""),
        thuoc_ve: mr(e.thuoc_ve, String(r.thuoc_ve ?? ""), ""),
        cong_phap: mr(e.cong_phap, String(r.cong_phap ?? ""), ""),
        binh_khi: mr(e.binh_khi, String(r.binh_khi ?? ""), ""),
        than_thong: Array.from(
          new Set(
            [...(r.than_thong ?? []), ...(e.than_thong ?? [])]
              .map((r) => String(r).trim())
              .filter(Boolean),
          ),
        ),
      }
    : _.cloneDeep(e);
}
function dr(r) {
  const e = Math.max(0, Number.isFinite(r) ? r : 0);
  return e <= 20 ? 6 : e <= 60 ? 4 : e <= 120 ? 3 : 2;
}
function hr(r, e) {
  (e < 3 && (r.tu_vi = N(r.cap_do, r.tu_vi, e, 3)),
    (r.trang_thai_tu_luyen = y(r.trang_thai_tu_luyen, {
      legacyAttemptBreakthrough: r.thu_dot_pha,
      level: r.cap_do,
      cultivation: r.tu_vi,
    })),
    (r.thu_dot_pha = "Đột Phá" === r.trang_thai_tu_luyen.giai_doan),
    Object.assign(r, D(r, !1)));
}
const _r = e.z
  .object({
    dong_ho_the_gioi: e.z
      .object({
        ky_nguyen: e.z.string().prefault("Thời Đại Mạt Pháp"),
        nam: e.z.coerce.number().prefault(1),
        thang: e.z.coerce
          .number()
          .transform((r) => _.clamp(r, 1, 12))
          .prefault(1),
        ngay: e.z.coerce
          .number()
          .transform((r) => _.clamp(r, 1, 30))
          .prefault(1),
        gio: e.z.string().prefault("Giờ Tý"),
      })
      .prefault({ ky_nguyen: "Thời Đại Mạt Pháp", nam: 1, thang: 1, ngay: 1, gio: "Giờ Tý" }),
    ban_do_the_gioi: e.z
      .record(
        e.z.string().describe("Tên khu vực"),
        e.z.object({
          layer: e.z.enum(["Thiên Tầng", "Địa Tầng", "Hạ Tầng"]).prefault("Địa Tầng"),
          danger: e.z.coerce.number().transform((r) => _.clamp(r, 0, 100)),
          desc: e.z.string().prefault(""),
          connections: e.z.array(e.z.string()).prefault([]),
        }),
      )
      .prefault({}),
    dia_chi_the_gioi: e.z
      .record(
        e.z.string().describe("Tên sự kiện"),
        e.z.object({
          trang_thai: e.z.string().prefault(""),
          su_kien: e.z.string().prefault(""),
        }),
      )
      .prefault({}),
    kho_the_luc_tong_mon: e.z.record(e.z.string().describe("Tên tông môn"), ar).prefault({}),
    kho_cong_phap: e.z.record(e.z.string().describe("Tên công pháp"), or).prefault({}),
    kho_phap_bao: e.z
      .record(e.z.string().describe("Tên pháp bảo"), cr)
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
    kho_dia_diem: e.z
      .record(e.z.string().describe("Tên địa điểm"), ir)
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
        "Huyền Băng Sơn": { vuc: "Bắc Minh", loai: "Tông Môn", nguy: 50, dac: "Huyền Vũ Tông", tai_nguyen: ["Huyền Băng"] },
        "Quy Khương Nhãn": {
          vuc: "Bắc Minh",
          loai: "Cấm Địa",
          nguy: 99,
          dac: "Quy Khương",
          tai_nguyen: ["Quy Khương Cảm Ngộ"],
        },
        "Hoàng Tuyền Tích": { vuc: "Hạ Tầng", loai: "Di Tích", nguy: 90, dac: "U Minh", tai_nguyen: ["Hoàng Tuyền Thủy"] },
        "Viêm Uyên": { vuc: "Hạ Tầng", loai: "Cấm Địa", nguy: 95, dac: "Địa Tâm Hỏa", tai_nguyen: ["Địa Tâm Hỏa"] },
      }),
    tong_mon_suy_doan: e.z
      .object({
        vuc_hien_tai: e.z.string().prefault(""),
        the_luc_chinh_hien_tai: e.z.string().prefault(""),
      })
      .prefault({ vuc_hien_tai: "", the_luc_chinh_hien_tai: "" }),
    kho_linh_can: e.z.record(e.z.string().describe("Tên linh căn"), ur).prefault({}),
    kho_the_chat: e.z.record(e.z.string().describe("Tên thể chất"), sr).prefault({}),
    ban_ton: J,
    kho_nhan_vat_hong_nhan: e.z
      .record(e.z.string().describe("Tên nhân vật"), B)
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
    hong_nhan: e.z.record(e.z.string().describe("Tên hồng nhan"), A).prefault({}),
    npc_do_giam: e.z.record(e.z.string().describe("Tên NPC"), F).prefault({}),
    danh_sach_nhiem_vu: e.z
      .record(e.z.string().describe("ID nhiệm vụ"), Q)
      .prefault({})
      .transform((r) =>
        _(r)
          .pickBy((r, e) => !!r && !!String(e).trim())
          .mapValues((r, e) => {
            return {
              ...r,
              ten:
                zr(r.ten) ||
                zr(e) ||
                ((t = r.loai),
                {
                  "Chính Tuyến": "Nhiệm Vụ Chính Tuyến",
                  "Chi Nhánh": "Nhiệm Vụ Chi Nhánh",
                  "Mỗi Ngày": "Nhiệm Vụ Mỗi Ngày",
                  "Lâm Nguy Thụ Mệnh": "Lâm Nguy Thụ Mệnh",
                  "Khám Phá Bí Cảnh": "Khám Phá Bí Cảnh",
                }[String(t ?? "").trim()] || "Nhiệm Vụ Chưa Đặt Tên"),
            };
            var t;
          })
          .pickBy((r) => "Đang Tiến Hành" === r.trang_thai)
          .value(),
      ),
    he_thong_danh_vong: T,
    he_thong_do_kho: nr,
    co_ngo_co_the_tham_gia: e.z
      .array(rr)
      .prefault([])
      .transform((r) => r.filter((r) => !!r.ten)),
    hoan_canh_hien_tai: e.z.string().prefault(""),
    cai_dat_he_thong: er,
    snapshot_do_hao_cam: e.z
      .record(
        e.z.string().describe("Tên hồng nhan"),
        e.z.coerce.number().transform((r) => _.clamp(r, -200, 200)),
      )
      .prefault({}),
  })
  .transform((r) => {
    r.kho_nhan_vat_hong_nhan = (function (r) {
      const e = _.cloneDeep(r ?? {});
      for (const { canonical: r, aliases: t } of lr) {
        let n = e[r] ? _.cloneDeep(e[r]) : void 0;
        for (const r of t) {
          const t = e[r];
          t && ((n = br(n, t)), delete e[r]);
        }
        n && (e[r] = n);
      }
      return e;
    })(r.kho_nhan_vat_hong_nhan ?? {});
    const e = (function (r, e) {
      const t = _.cloneDeep(r ?? {}),
        n = _.cloneDeep(e ?? {});
      for (const { canonical: r, aliases: e } of lr) {
        let a = t[r] ? _.cloneDeep(t[r]) : void 0;
        for (const r of e) {
          const e = t[r];
          e && ((a = gr(a, e)), delete t[r]);
        }
        a && (t[r] = a);
        const o = [n[r], ...e.map((r) => n[r])]
          .map((r) => Number(r))
          .filter((r) => Number.isFinite(r));
        for (const r of e) delete n[r];
        o.length > 0 && (n[r] = o[o.length - 1]);
      }
      return { companions: t, snapshot: n };
    })(r.hong_nhan ?? {}, r.snapshot_do_hao_cam ?? {});
    ((r.hong_nhan = e.companions), (r.snapshot_do_hao_cam = e.snapshot));
    const t = Math.max(
      1,
      Math.floor(Number(r.cai_dat_he_thong?.phien_ban_he_thong_tu_luyen ?? 1) || 1),
    );
    !(function (r, e) {
      (e < 3 && (r.tu_vi = N(r.cap_do, r.tu_vi, e, 3)),
        (r.trang_thai_tu_luyen = y(r.trang_thai_tu_luyen, {
          legacyAttemptBreakthrough: r.thu_dot_pha,
          level: r.cap_do,
          cultivation: r.tu_vi,
        })),
        (r.thu_dot_pha = "Đột Phá" === r.trang_thai_tu_luyen.giai_doan),
        Object.assign(r, D(r, !0)));
    })(r.ban_ton, t);
    for (const e of Object.values(r.hong_nhan ?? {})) hr(e, t);
    r.cai_dat_he_thong = {
      ...(r.cai_dat_he_thong ?? {}),
      phien_ban_he_thong_tu_luyen: 3,
      chu_ky_ghi_de_trang_thai_thu_cong: String(r.cai_dat_he_thong?.chu_ky_ghi_de_trang_thai_thu_cong ?? ""),
    };
    const n = _.cloneDeep(r.snapshot_do_hao_cam ?? {});
    for (const [e, t] of Object.entries(r.hong_nhan ?? {})) {
      const r = Number(t?.do_hao_cam);
      if (!Number.isFinite(r)) continue;
      const a = Number(n[e]);
      if (Number.isFinite(a)) {
        const e = dr(a);
        t.do_hao_cam = _.clamp(r, a - e, a + e);
      } else t.do_hao_cam = _.clamp(r, -200, 200);
      n[e] = t.do_hao_cam;
    }
    return ((r.snapshot_do_hao_cam = _.pickBy(n, (e, t) => _.has(r.hong_nhan, t))), r);
  });
$(() => {
  (r(_r),
    console.info("[Đăng Hỏa Lan San · Cựu Mộng Tân Tài] Cấu trúc biến MVU đã đăng ký"),
    toastr.success("Cấu trúc biến MVU đã đăng ký thành công", "Đăng Hỏa Lan San · Cựu Mộng Tân Tài"));
});
//# sourceMappingURL=index.js.map