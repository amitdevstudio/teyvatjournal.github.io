// ── storage.js ─────────────────────────────────────────────────────────────────
// Single source of truth for characters, weapons, materials, artifacts & teams.
// Imported by guides.js, storage.html, and guide-detail.html.

// ── Characters ───────────────────────────────────────────────────────────────── 
const ELEMENT_ORDER = ["anemo", "cryo", "dendro", "electro", "geo", "hydro", "pyro"];

export const characters = [
  // ── Anemo ───────────────────────────────────────────────────────────────── 
  { id: 1, name: "Traverler", element: "anemo", weapon: "sword", rarity: 5, role: "DPS", image: "traveler.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Traveler_icon.png" },
  { id: 2, name: "Varka", element: "anemo", weapon: "claymore", rarity: 5, role: "DPS", image: "varka.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/02/21/553feb81c3bbc5e3bc69a765e157c33f_8250978205515428490.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 3, name: "Jean", element: "anemo", weapon: "sword", rarity: 5, role: "Support", image: "jean.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Jean_icon.png" },
  { id: 4, name: "Venti", element: "anemo", weapon: "bow", rarity: 5, role: "Support", image: "venti.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Venti_icon.png" },
  { id: 5, name: "Xianyun", element: "anemo", weapon: "catalyst", rarity: 5, role: "Support", image: "xianyun.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/01/29/35428890/2c2be27f8876e9435ab8c8b933b8408c_7973851751945394462.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 6, name: "Xiao", element: "anemo", weapon: "polearm", rarity: 5, role: "Support", image: "xiao.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Xiao_icon.png" },
  { id: 7, name: "Yumemizuki Mizuki", element: "anemo", weapon: "catalyst", rarity: 5, role: "Support", image: "mizuki.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/02/08/11662c12fb353d88bd2b20a2726c9f1c_8013472600677983943.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 8, name: "Chasca", element: "anemo", weapon: "bow", rarity: 5, role: "Support", image: "chasca.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/11/18/abe1192cc7aad45f6b273478dd5fa88a_4799372826012752249.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 9, name: "Wanderer", element: "anemo", weapon: "catalyst", rarity: 5, role: "Support", image: "wanderer.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/12/05/35428890/24d97a22be742fb732ea96f625d1faac_2495743636540582085.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 10, name: "Kaedehara Kazuha", element: "anemo", weapon: "sword", rarity: 5, role: "Support", image: "kazuha.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Kaedehara%2520Kazuha_icon.png" },
  { id: 11, name: "Sucrose", element: "anemo", weapon: "catalyst", rarity: 4, role: "Support", image: "sucrose.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Sucrose_icon.png" },
  { id: 12, name: "Purne", element: "anemo", weapon: "catalyst", rarity: 4, role: "Support", image: "purne.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/04/14/cbbfaf503833c5dd72367bec12610f83_920663712256874459.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 13, name: "Lan Yan", element: "anemo", weapon: "catalyst", rarity: 4, role: "Support", image: "lanyan.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/01/17/02a299cec38b4ef4f21952c37a624258_5744396397316809821.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 14, name: "Ifa", element: "anemo", weapon: "catalyst", rarity: 4, role: "Support", image: "ifa.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/04/30/ce693d1e36aef5936b2d2db006605fc4_9036718103340803450.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 15, name: "Jahoda", element: "anemo", weapon: "bow", rarity: 4, role: "Support", image: "jahoda.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/12/01/19708bac6eba4779a70908bf0bee70b1_1653339605275422455.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 16, name: "Lynette", element: "anemo", weapon: "sword", rarity: 4, role: "Support", image: "lynette.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/14/35428890/436e6f2b9b9006bfe511a98093259daf_7192025380861185061.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 17, name: "Faruzan", element: "anemo", weapon: "bow", rarity: 4, role: "Support", image: "faruzan.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/12/05/35428890/38c12ab46678a4008f83a0e46c900ef5_528211919348170763.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 18, name: "Shikanoin Heizou", element: "anemo", weapon: "catalyst", rarity: 4, role: "Support", image: "heizou.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Shikanoin%2520Heizou_icon.png" },
  { id: 19, name: "Sayu", element: "anemo", weapon: "claymore", rarity: 4, role: "Support", image: "sayu.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Sayu_icon.png" },

  // ── Geo ───────────────────────────────────────────────────────────────────  
  { id: 20, name: "Traveler", element: "geo", weapon: "sword", rarity: 5, role: "support", image: "tarveler.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Traveler_icon.png  " },
  { id: 21, name: "Zhongli", element: "geo", weapon: "polearm", rarity: 5, role: "DPS", image: "zhongli.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Zhongli_icon.png" },
  { id: 22, name: "Arataki Itto", element: "geo", weapon: "claymore", rarity: 5, role: "Support", image: "itto.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Arataki%2520Itto_icon.png" },
  { id: 23, name: "Navia", element: "geo", weapon: "claymore", rarity: 5, role: "Support", image: "navia.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2023/12/18/35428890/3fc7580c01a9e622692402889706c4db_8301615651200775487.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 24, name: "Zibai", element: "geo", weapon: "sword", rarity: 5, role: "Support", image: "zibai.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/29/72161f01ff431c9f099710f92c811454_1654176825175164246.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 25, name: "Albedo", element: "geo", weapon: "sword", rarity: 5, role: "Support", image: "albedo.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Albedo_icon.png" },
  { id: 26, name: "Chiori", element: "geo", weapon: "sword", rarity: 5, role: "Support", image: "chiori.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/03/11/35428890/5470f90694af13476e49be7b8346e2b1_5366587928381003654.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 27, name: "Xilonen", element: "geo", weapon: "sword", rarity: 4, role: "Support", image: "xilonen.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/09/25/b07074c2b9040516fd240b6b8d65c011_2487211347344319683.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 28, name: "Linnea", element: "geo", weapon: "bow", rarity: 5, role: "Support", image: "linnea.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/04/03/b73622caa3750012312c72437295ace3_6973976776946504804.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 29, name: "Kachina", element: "geo", weapon: "polearm", rarity: 4, role: "Support", image: "kachina.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/08/23/26925adb1092d29c8afdf46d92fad8bd_343637410022641529.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 30, name: "Ningguang", element: "geo", weapon: "catalyst", rarity: 4, role: "Support", image: "ningguang.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Ningguang_icon.png" },
  { id: 31, name: "Yun Jin", element: "geo", weapon: "polearm", rarity: 4, role: "Support", image: "yunjin.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Yun%2520Jin_icon.png" },
  { id: 32, name: "Noelle", element: "geo", weapon: "claymore", rarity: 4, role: "Support", image: "noelle.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Noelle_icon.png" },
  { id: 33, name: "Gorou", element: "geo", weapon: "bow", rarity: 4, role: "Support", image: "gorou.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Gorou_icon.png" },
  { id: 34, name: "Illuga", element: "geo", weapon: "polearm", rarity: 4, role: "Support", image: "illuga.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/29/d585407867aa47b4d925613cea9f00c2_5864597966579326880.png?x-oss-process=image%2Fformat%2Cwebp" },

  // ── Electro ──────────────────────────────────────────────────────────────── 
  { id: 35, name: "Traveler", element: "electro", weapon: "sword", rarity: 5, role: "DPS", image: "traveler.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/08/23/169177528/04f769b0b1671b5ffbbafefd7286b4b2_4670164833306961502.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 36, name: "Raiden Shogun", element: "electro", weapon: "polearm", rarity: 5, role: "DPS", image: "shogun.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Raiden%2520Shogun_icon.png" },
  { id: 37, name: "Keqing", element: "electro", weapon: "sword", rarity: 5, role: "DPS", image: "keqing.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Keqing_icon.png" },
  { id: 38, name: "Flins", element: "electro", weapon: "polearm", rarity: 5, role: "DPS", image: "flins.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2025/09/29/35428890/f6feccecc61d2bf772461f057dfb41cd_5944664216414192017.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 39, name: "Ineffa", element: "electro", weapon: "polearm", rarity: 5, role: "DPS", image: "ineffa.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/07/28/7c221918444852e9a3c2ad609ccacea2_8687518447126752117.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 40, name: "Varesa", element: "electro", weapon: "catalyst", rarity: 5, role: "DPS", image: "varesa.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/03/25/a54efe1bb7e82a589b9af44683a696ca_8635138146175164187.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 41, name: "cyno", element: "electro", weapon: "polearm", rarity: 5, role: "DPS", image: "cyno.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/28/77454259/e09e2bda5e022611fad0dea1bb6518bb_6757667565719577204.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 42, name: "Clorinde", element: "electro", weapon: "sword", rarity: 5, role: "DPS", image: "clorinde.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/06/04/35428890/770a66030815971c697ab81bc5436329_1296341861352728851.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 43, name: "Yae Miku", element: "electro", weapon: "catalyst", rarity: 5, role: "DPS", image: "miku.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Yae%2520Miko_icon.png" },
  { id: 44, name: "Ororon", element: "electro", weapon: "bow", rarity: 4, role: "DPS", image: "ororon.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/11/18/e4830690f8b6a1ebb02cfbc8ce955671_8091252479018770784.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 45, name: "Iansan", element: "electro", weapon: "polearm", rarity: 4, role: "DPS", image: "iansan.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/03/25/dd9a200a86b792fb1b73ef1ee7de0911_2097378734184941134.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 46, name: "Sethos", element: "electro", weapon: "bow", rarity: 4, role: "DPS", image: "sethis.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/06/04/35428890/cdb7abfcb86138e5b618946a5466d442_6414132746291261116.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 47, name: "Dori", element: "electro", weapon: "claymore", rarity: 4, role: "DPS", image: "dori.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/08/35428890/6539bea71efd0f839db897cfc4094362_3469125131800075941.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 48, name: "Kuki Shinobu", element: "electro", weapon: "sword", rarity: 4, role: "DPS", image: "kuki.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Kuki%2520Shinobu_icon.png" },
  { id: 49, name: "Razor", element: "electro", weapon: "claymore", rarity: 4, role: "DPS", image: "razor.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Razor_icon.png" },
  { id: 50, name: "Fischl", element: "electro", weapon: "bow", rarity: 4, role: "DPS", image: "fischl.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Fischl_icon.png" },
  { id: 51, name: "Beidou", element: "electro", weapon: "claymore", rarity: 4, role: "DPS", image: "beidou.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Beidou_icon.png" },
  { id: 52, name: "Kujou sara", element: "electro", weapon: "bow", rarity: 4, role: "DPS", image: "sara.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Kujou%2520Sara_icon.png" },
  { id: 53, name: "Lisa", element: "electro", weapon: "catalyst", rarity: 4, role: "DPS", image: "lisa.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Lisa_icon.png" },

  // ── Dendro ────────────────────────────────────────────────────────────────
  { id: 54, name: "Traveler", element: "dendro", weapon: "sword", rarity: 5, role: "DPS", image: "traveler.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/12/30/151578876/75bb898fe1c3b4ed29a2931829ddb845_1306153511401609506.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 55, name: "Tighnari", element: "dendro", weapon: "bow", rarity: 5, role: "DPS", image: "tighnari.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/08/22/35428890/497dd6fac3d3c652a367c67428550747_306268558608889633.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 56, name: "Nahida", element: "dendro", weapon: "catalyst", rarity: 5, role: "DPS", image: "nahida.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/29/35428890/f29490bddc56b4a6773b6c5003bbb853_9091170755650648414.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 57, name: "Nefer", element: "dendro", weapon: "catalyst", rarity: 5, role: "DPS", image: "nefer.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/10/21/7557acebcb72b4d9912bcb0e6c92306a_3655566527985254987.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 58, name: "Lauma", element: "dendro", weapon: "catalyst", rarity: 5, role: "DPS", image: "lauma.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/09/08/b06e9ff48d57de4856f1a05b1199aae1_8565150401481594895.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 59, name: "Kinich", element: "dendro", weapon: "claymore", rarity: 5, role: "DPS", image: "kinich.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/09/12/0099e74b4d0c919f6feab4bade3ab748_5795733017114624391.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 60, name: "Emilie", element: "dendro", weapon: "polearm", rarity: 5, role: "DPS", image: "emilie.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/07/31/87ad30965e0c1b45364fdccc51b3429d_6108610286145583716.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 61, name: "Baizhu", element: "dendro", weapon: "catalyst", rarity: 5, role: "DPS", image: "baizhu.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/05/02/35428890/05599650d7f42e1c4adde373de6b297d_8001303176243726128.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 62, name: "Alhaitham", element: "dendro", weapon: "sword", rarity: 5, role: "DPS", image: "alhaitham.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/01/15/35428890/25249dd20b86c775fb35bdbbd805d9ec_8879881358376735994.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 63, name: "Collei", element: "dendro", weapon: "bow", rarity: 4, role: "DPS", image: "collei.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/08/24/194600931/37a18b6b6865c59063003a9380f08225_7758071773430345954.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 64, name: "Kaveh", element: "dendro", weapon: "claymore", rarity: 4, role: "DPS", image: "kaveh.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/05/02/35428890/2270aba02b92034d7d76b4426be8f53b_7062168821433378650.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 65, name: "Yaoyao", element: "dendro", weapon: "polearm", rarity: 4, role: "DPS", image: "yaoyao.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/01/15/35428890/5bc9df1fb67391e4c8080da3d855de53_8974356791001371659.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 66, name: "Kirara", element: "dendro", weapon: "sword", rarity: 4, role: "DPS", image: "kirara.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/05/23/35428890/d1699810632f8c3bc8c1e8c8beb8250f_3141235252861584883.png?x-oss-process=image%2Fformat%2Cwebp" },


  // ── Hydro ─────────────────────────────────────────────────────────────────
  { id: 67, name: "Traveler", element: "hydro", weapon: "sword", rarity: 5, role: "Support", image: "traveler.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/12/30/151578876/75bb898fe1c3b4ed29a2931829ddb845_1306153511401609506.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 68, name: "Columbina", element: "hydro", weapon: "catalyst", rarity: 5, role: "Support", image: "columbina.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/13/80fa97679c8d1828fdd96c6aa9638632_4327573591148809640.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 69, name: "Mualani", element: "hydro", weapon: "catalyst", rarity: 5, role: "Support", image: "mulani.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/08/26/f4c75caad42923eb91ee760aa2eb473a_7439123622315070718.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 70, name: "Sigewinne", element: "hydro", weapon: "bow", rarity: 5, role: "Support", image: "sigewinne.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/06/26/35428890/2d607aa4d729030ea04f79919257e311_1172370997840232141.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 71, name: "Furina", element: "hydro", weapon: "sword", rarity: 5, role: "Support", image: "furina.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/11/06/35428890/263e5ea0784d182b393f67a7e24146a5_2961704185113948066.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 72, name: "Neuvillette", element: "hydro", weapon: "catalyst", rarity: 5, role: "Support", image: "neuvillette.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/26/35428890/0513aa7f482dbb4778545d02f94956fe_7540616405773975535.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 73, name: "Nilou", element: "hydro", weapon: "sword", rarity: 5, role: "Support", image: "nilou.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/10/10/35428890/586d726f9ebda3506c78beaaa41f13b6_5916447718992361520.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 74, name: "Yelan", element: "hydro", weapon: "bow", rarity: 5, role: "Support", image: "yelan.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Yelan_icon.png" },
  { id: 75, name: "Tartaglia", element: "hydro", weapon: "bow", rarity: 5, role: "Support", image: "tartagila.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Tartaglia_icon.png" },
  { id: 76, name: "Mona", element: "hydro", weapon: "catalyst", rarity: 5, role: "Support", image: "mona.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Mona_icon.png" },
  { id: 77, name: "Kamisato Ayato", element: "hydro", weapon: "sword", rarity: 5, role: "Support", image: "ayato.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Kamisato%2520Ayato_icon.png" },
  { id: 78, name: "Sangonormiya Kokomi", element: "hydro", weapon: "catalyst", rarity: 5, role: "Support", image: "kokomi.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Sangonomiya%2520Kokomi_icon.png" },
  { id: 79, name: "Barbara", element: "hydro", weapon: "catalyst", rarity: 4, role: "Support", image: "barbara.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Barbara_icon.png" },
  { id: 80, name: "Xingqiu", element: "hydro", weapon: "sword", rarity: 4, role: "Support", image: "xingqiu.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Xingqiu_icon.png" },
  { id: 81, name: "Candace", element: "hydro", weapon: "polearm", rarity: 4, role: "Support", image: "candace.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/28/77454259/2f43da4ece9eabfbde6ec2fcc81b3bff_6412967003441390014.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 82, name: "Dahlia", element: "hydro", weapon: "sword", rarity: 4, role: "Support", image: "dahlia.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/06/16/255dedc5048565aec2c5af510c6f74a5_7726536808309970424.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 83, name: "Aino", element: "hydro", weapon: "claymore", rarity: 4, role: "Support", image: "aino.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/09/09/4e58c851d6c947865026faa168db83bd_3944254802105067377.png?x-oss-process=image%2Fformat%2Cwebp" },

  // ── Pyro ────────────────────────────────────────────────────────────────── 
  { id: 84, name: "Traveler", element: "pyro", weapon: "sword", rarity: 5, role: "Support", image: "traveler.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/12/30/151578876/75bb898fe1c3b4ed29a2931829ddb845_1306153511401609506.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 85, name: "Nicole", element: "pyro", weapon: "catalyst", rarity: 5, role: "Support", image: "nicole.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/04/13/5e875ee63bca70ebeda64e6fa409d31b_2167664357911574684.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 86, name: "Durin", element: "pyro", weapon: "sword", rarity: 5, role: "Support", image: "durin.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/11/28/e3e2b8fcbff2f2f3cdcec6bbf04efa84_3327367670955368711.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 87, name: "Mavuika", element: "pyro", weapon: "claymore", rarity: 5, role: "Sub-DPS", image: "mavuika.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/12/30/2f098b1f15854fd9dafc54998795a59e_864981592196815761.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 88, name: "Arlecchino", element: "pyro", weapon: "polearm", rarity: 5, role: "Sub-DPS", image: "arlecchino.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/22/35428890/672e65470bfd14b664596c2a7f7eaaf8_7046130387894981792.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 89, name: "Lyney", element: "pyro", weapon: "bow", rarity: 5, role: "Sub-DPS", image: "lyney.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/11/35428890/e343d4442cc3b8e243f0d528bb715f75_1232011243947476013.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 90, name: "Dehya", element: "pyro", weapon: "claymore", rarity: 5, role: "Sub-DPS", image: "dehya.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/02/24/35428890/65b22311e1e38ffa45a4928d4005ecee_7076295870986871517.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 91, name: "hu Tao", element: "pyro", weapon: "polearm", rarity: 5, role: "Sub-DPS", image: "hutao.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Hu%2520Tao_icon.png" },
  { id: 92, name: "Diluc", element: "pyro", weapon: "claymore", rarity: 5, role: "Sub-DPS", image: "diluc.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Diluc_icon.png" },
  { id: 93, name: "Klee", element: "pyro", weapon: "catalyst", rarity: 5, role: "Sub-DPS", image: "klee.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Klee_icon.png" },
  { id: 94, name: "Yoimiya", element: "pyro", weapon: "bow", rarity: 5, role: "Sub-DPS", image: "yoimiya.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Yoimiya_icon.png" },
  { id: 95, name: "Gaming", element: "pyro", weapon: "claymore", rarity: 4, role: "Sub-DPS", image: "gaming.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/01/29/35428890/b041ad23a9d6245efac952a9379c5114_8939761424130236195.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 96, name: "Chevreuse", element: "pyro", weapon: "polearm", rarity: 4, role: "Sub-DPS", image: "chevreuse.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/01/09/35428890/a846729f31f16a987a8696466ebabcc0_6857330048220230431.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 97, name: "Xiangling", element: "pyro", weapon: "polearm", rarity: 4, role: "Sub-DPS", image: "xiangling.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Xiangling_icon.png" },
  { id: 98, name: "Xinyan", element: "pyro", weapon: "claymore", rarity: 4, role: "Sub-DPS", image: "xinyan.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Xinyan_icon.png" },
  { id: 99, name: "Bennett", element: "pyro", weapon: "sword", rarity: 4, role: "Sub-DPS", image: "bennett.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Bennett_icon.png" },
  { id: 100, name: "Yanfei", element: "pyro", weapon: "catalyst", rarity: 4, role: "Sub-DPS", image: "yanfei.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Yanfei_icon.png" },
  { id: 101, name: "Thoma", element: "pyro", weapon: "polearm", rarity: 4, role: "Sub-DPS", image: "thoma.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Thoma_icon.png" },
  { id: 102, name: "Amber", element: "pyro", weapon: "bow", rarity: 4, role: "Sub-DPS", image: "amber.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Amber_icon.png" },

  // ── Cryo ────────────────────────────────────────────────────────────────── 
  { id: 103, name: "Traveler", element: "cryo", weapon: "sword", rarity: 4, role: "Support", image: "traveler.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/12/30/151578876/75bb898fe1c3b4ed29a2931829ddb845_1306153511401609506.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 104, name: "Tsaritsa", element: "cryo", weapon: "TBA", rarity: 4, role: "Support", image: "tsaritsa.jpg", icon: "" },
  { id: 105, name: "Qiqi", element: "cryo", weapon: "sword", rarity: 4, role: "Support", image: "qiqi.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Qiqi_icon.png" },
  { id: 106, name: "Lohen", element: "cryo", weapon: "TBA", rarity: 4, role: "Support", image: "lohen.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/04/14/690ceb63cf621d0f6e1f29cb5edaf7ec_1616935497353882034.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 107, name: "Skirk", element: "cryo", weapon: "sword", rarity: 4, role: "Support", image: "skirk.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/06/16/48dba0c10560a3ef573f17d97408b5a0_2527001828446746987.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 108, name: "Escoffier", element: "cryo", weapon: "polearm", rarity: 4, role: "Support", image: "escoffier.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/04/30/ddbc128157d69479f61747f0918f9e72_2470321636402108639.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 109, name: "Citlali", element: "cryo", weapon: "catalyst", rarity: 4, role: "Support", image: "citlali.jpg", icon: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/12/27/c4ab2530bb8bbe3c0e811684f97ec124_6688582217610741079.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 110, name: "Wriothesley", element: "cryo", weapon: "catalyst", rarity: 4, role: "Support", image: "wriothesley.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/10/15/35428890/31a0eb2dec5d69ca8dd7616572136b8b_8886987124386670150.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 111, name: "Kamisato Ayaka", element: "cryo", weapon: "sword", rarity: 4, role: "Support", image: "ayaka.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Kamisato%2520Ayaka_icon.png" },
  { id: 112, name: "Shenhe", element: "cryo", weapon: "polearm", rarity: 4, role: "Support", image: "shenhe.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Shenhe_icon.png" },
  { id: 113, name: "Ganyu", element: "cryo", weapon: "bow", rarity: 4, role: "Support", image: "ganyu.jpg", icon: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/03/12/35428890/797ded201635d241d358c307e9e7417f_464481961971717418.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 114, name: "Eula", element: "cryo", weapon: "claymore", rarity: 4, role: "Support", image: "eula.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Eula_icon.png" },
  { id: 115, name: "Aloy", element: "cryo", weapon: "bow", rarity: 4, role: "Support", image: "aloy.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/11/19/80830045/1fb2086af3c7933af37eda1ff9084317_163049704110308134.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 116, name: "Charlotte", element: "cryo", weapon: "catalyst", rarity: 4, role: "Support", image: "charlotte.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/11/06/35428890/7bbbff3f35661a93b5091b1f17fae6c0_6927814687713967999.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 117, name: "Layla", element: "cryo", weapon: "sword", rarity: 4, role: "Support", image: "layla.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2022/11/15/35428890/48a495acadaf37f12d0a7f653d85bd83_7085430198590697354.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 118, name: "Chongyun", element: "cryo", weapon: "claymore", rarity: 4, role: "Support", image: "chongyun.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Chongyun_icon.png" },
  { id: 119, name: "Kaeya", element: "cryo", weapon: "sword", rarity: 4, role: "Support", image: "kaeya.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Kaeya_icon.png" },
  { id: 120, name: "Rosaria", element: "cryo", weapon: "polearm", rarity: 4, role: "Support", image: "rosaria.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Rosaria_icon.png" },
  { id: 121, name: "Diona", element: "cryo", weapon: "bow", rarity: 4, role: "Support", image: "diona.jpg", icon: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Diona_icon.png" },
  { id: 122, name: "Mika", element: "cryo", weapon: "polearm", rarity: 4, role: "Support", image: "mika.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/03/21/35428890/da13e3b1a2c6c0e5892b201cec735f9b_6392765476968311284.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 123, name: "Freminet", element: "cryo", weapon: "claymore", rarity: 4, role: "Support", image: "freminet.jpg", icon: "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/03/35428890/8e44111a378f4e5379b8e7444e8c2daa_4713775899437074849.png?x-oss-process=image%2Fformat%2Cwebp" },
];

// ── Weapons ────────────────────────────────────────────────────────────────────
export const weapons = [
  { id: 1, name: "Golden Frostbound Oath", type: "bow", rarity: 5, substat: "CRIT DMG", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/04/03/56dfea855cb96781fc3fa4409463e523_641344848709162695.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 2, name: "Gest of the Mighty Wolf", type: "claymore", rarity: 5, substat: "CRIT Rate", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/02/09/69a9c4711061f96f155bbe236d1ac188_2915183031167827788.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 3, name: "Nocturne's Curtain Cal", type: "catalyst", rarity: 5, substat: "CRIT DMG", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/07/670440ccb460f5f58e014c68ad569d78_7754520756837248808.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 4, name: "Lightbearing Moonshard", type: "sword", rarity: 5, substat: "CRIT DMG ", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/07/5df9a7e1f45c7967eb263a37362c76d9_5509634125074303398.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 5, name: "The Daybreak Chronicles", type: "bow", rarity: 5, substat: "CRIT DMG", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/11/25/888f15859930696bb17aeb61f35fa340_139096456278287885.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 6, name: "Athame Artis", type: "sword", rarity: 5, substat: "CRIT Rate", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/11/25/69991219a3eab8162a67513d013e6ef0_6929917729223804184.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 7, name: "Reliquary of Truth", type: "catalyst", rarity: 5, substat: "CRIT DMG", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/10/20/a81d9e6d6b35935cfa6027c1d74d70c8_5519387986125030469.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 8, name: "Bloodsoaked Ruins", type: "polearm", rarity: 5, substat: "CRIT Rate", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/09/01/f842bb3bf454987301dd1bedd3be0c06_372682473601768051.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 9, name: "Nightweaver's Looking Glass", type: "", rarity: 5, substat: "Elemental Mastery", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/09/01/d28b849e0abef976114ea7ecef92960e_4616051474368823347.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 10, name: "Fractured Halo", type: "polearm", rarity: 5, substat: "CRIT DMG", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/07/21/6f0271a3d35033b8ec7260faa56b8cc1_2090404062568539078.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 11, name: "Azurelight", type: "sword", rarity: 5, substat: "CRIT Rate", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/06/12/0809293ee527b40073c4c9636eff6dd0_2992571952915882222.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 12, name: "Symphonist of Scents", type: "polearm", rarity: 5, substat: "CRIT DMG", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/04/24/f1928d012621b1f03577efc4f619894a_6810995251642628479.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 13, name: "Vivid Notions", type: "catalyst", rarity: 5, substat: "CRIT DMG", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/03/17/4eed5f1f892cf722e4f8df1778a0a1f1_3249018324800310475.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 14, name: "Sunny Morning Sleep-In", type: "catalyst", rarity: 5, substat: "Elemental Mastery", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/02/07/de8bcaf9142a27cc3aefe8a77f5b4c4c_6111963220065472522.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 15, name: "Starcaller's Watch", type: "catalyst", rarity: 5, substat: "Elemental Mastery", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/12/26/de225a286996965268c32027a6c484d9_2367767765928118667.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 16, name: "A Thousand Blazing Suns", type: "claymore", rarity: 5, substat: "Crit Rate", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/12/26/da1910fbe0e825e1e3704c126720ab24_2121228058184091562.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 17, name: "Astral Vulture's Crimson Plumage", type: "bow", rarity: 5, substat: "CRIT DMG", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/11/14/d3bb0f9d936379661d409644e4269ff1_2888646900955247330.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 18, name: "Peak Patrol Song", type: "sword", rarity: 5, substat: "DEF Percentage", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/09/27/862200e1c8e0ee60c2396d8f4fbe7fb8_4291183729855777874.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 19, name: "Surf's Up", type: "catalyst", rarity: 5, substat: "CRIT DMG", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/08/23/6ce2e0da75fbdc19fc4b6f9e7bae9049_5151463723015160354.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 20, name: "Fang of the Mountain King", type: "claymore", rarity: 5, substat: "CRIT Rate", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/08/23/1fd3c498faccab68bfa5d961477a8c29_2936359463997877474.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 21, name: "Lumidouce Elegy", type: "polearm", rarity: 5, substat: "CRIT Rate", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/07/31/3dff07a4b024917cb63c933d2078ccc8_8401589850337226556.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 22, name: "Absolution", type: "sword", rarity: 5, substat: "CRIT DMG", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/05/30/d5da78d8dd0ac8814b699d6195145776_7211910286782963050.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 23, name: "Silvershower Heartstrings", type: "bow", rarity: 5, substat: "HP Percentage", image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/06/25/bbfcbecb44910640904415c4c8f7a71d_6233228634431101260.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 24, name: "Crimson Moon's Semblance", type: "polearm", rarity: 5, substat: "CRIT Rate", image: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/22/35428890/ce91a453b9a942c9ab20df0f62caa033_4944089408609115680.png?x-oss-process=image%2Fformat%2Cwebp" },
  { id: 25, name: "", type: "", rarity: 5, substat: "", image: "" },
  { id: 26, name: "", type: "", rarity: 5, substat: "", image: "" },
  { id: 26, name: "", type: "", rarity: 5, substat: "", image: "" },
  { id: 26, name: "", type: "", rarity: 5, substat: "", image: "" },
  { id: 26, name: "", type: "", rarity: 5, substat: "", image: "" },
];

// ── Materials ──────────────────────────────────────────────────────────────────
export const materials = [
  // ── LEVEL UP ──
  {
    name: "Hero's Wit",
    image: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/object/Hero's%2520Wit_icon.png",
    category: "level",
    type: "exp",
    quantity: 414,
    rarity: 4
  },
  {
    name: "Mora",
    image: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/object/Mora_icon.png",
    category: "level",
    type: "exp",
    quantity: 132,
    rarity: 4
  },

  // ── ASCENSION ──
  {
    name: "Mora",
    image: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/object/Mora_icon.png",
    category: "ascension",
    type: "ascend",
    quantity: 1,
    rarity: 4,
  },
  {
    name: "Prithiva Topaz Sliver",
    image: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/object/Prithiva%2520Topaz%2520Sliver_icon.png",
    category: "ascension",
    type: "boss",
    quantity: 9,
    rarity: 2,
    source: "Geo Hypostasis",
    note: "Check Location"
  },
  {
    name: "Tattered Warrant",
    image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/09/01/9f0e22244a7132935602433e79bef24f_5872688653273879780.png?x-oss-process=image%2Fformat%2Cwebp",
    category: "ascension",
    type: "enemy",
    quantity: 9,
    rarity: 1,
    source: "Watcher: Fallen Vigil",
    note: "Check Location"
  },
  {
    name: "Etherwing Moth",
    image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/04/03/23b393a553cb670acf666939d17c5695_6179380212703820393.png?x-oss-process=image%2Fformat%2Cwebp",
    category: "ascension",
    type: "enemy",
    quantity: 6,
    rarity: 0,
    source: "Etherwing Moth",
    note: "Check Location"
  },
  {
    name: "Marionette Core",
    image: "assets/materials/marionette-core.png",
    category: "ascension",
    type: "boss",
    quantity: 46,
    rarity: 4,
    source: "Geo Hypostasis",
    note: "Check Location"
  },
  {
    name: "Energy Nectar",
    image: "assets/materials/nectar.png",
    category: "ascension",
    type: "enemy",
    quantity: 36,
    rarity: 3,
    source: "Whopperflower",
    note: "Check Location"
  },
  // ── TALENT ──
  {
    name: "Teachings of Vagrancy",
    image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/09/01/ed8dd8491845103a4857b7e6ad172739_2056995232459361537.png?x-oss-process=image%2Fformat%2Cwebp",
    category: "talent",
    type: "book",
    quantity: 9,
    rarity: 2,
    source: "Violet Court",
    domain: "Violet Court",
    note: "Tue / Fri / Sun",
    days: "Tue/Fri/Sun"
  },
  {
    name: "Guide to Vagrancy",
    image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/09/01/2fbcc3ec03c81690ac6137a9d5e4bb67_6957037690208385960.png?x-oss-process=image%2Fformat%2Cwebp",
    category: "talent",
    type: "book",
    quantity: 63,
    rarity: 3,
    source: "Violet Court",
    domain: "Violet Court",
    note: "Tue / Fri / Sun",
    days: "Tue/Fri/Sun"
  },
  {
    name: "Philosophies of Vagrancy",
    image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/09/01/e851de2005e1242eee8e63c4c0dbdef1_9198943640019560886.png?x-oss-process=image%2Fformat%2Cwebp",
    category: "talent",
    type: "book",
    quantity: 114,
    rarity: 4,
    source: "Domain of Mastery: Overturned Roost",
    domain: "Domain of Mastery: Overturned Roost",
    note: "Wed / Sat / Sun",
    days: "Wed/Sat/Sun"
  },
  {
    name: "Elixir of the Heretic",
    image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/07/81fef767fc521a816515a91b967e1c21_2199698593939699469.png?x-oss-process=image%2Fformat%2Cwebp",
    category: "talent",
    type: "weekly",
    quantity: 18,
    rarity: 5,
    source: "The Doctor",
    note: "Check Location"
  },
  {
    name: "Shimmering Nectar",
    image: "assets/materials/nectar-shim.png",
    category: "talent",
    type: "enemy",
    quantity: 66,
    rarity: 2,
    source: "Whopperflower",
    note: "Check Location"
  },
  {
    name: "Energy Nectar",
    image: "assets/materials/nectar-energy.png",
    category: "talent",
    type: "enemy",
    quantity: 93,
    rarity: 3,
    source: "Whopperflower",
    note: "Check Location"
  },
  {
    name: "Gilded Scale",
    image: "assets/materials/gilded-scale.png",
    category: "talent",
    type: "weekly",
    quantity: 18,
    rarity: 5,
    source: "Azhdaha",
    note: "View Details"
  },
  {
    name: "Crown of Insight",
    image: "assets/materials/crown.png",
    category: "talent",
    type: "weekly",
    quantity: 3,
    rarity: 5,
    source: "Limited Events",
    note: "View Details"
  }
];
// ── Artifacts ─────────────────────────────────────────────────────────────────
export const artifacts = [
  {
    id: 1,
    name: "Viridescent Venerer",
    pieces: 4,
    source: "Valley of Remembrance",
    image: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Viridescent%2520Venerer/flower_of_life_icon.png",
    flower: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Viridescent%2520Venerer/flower_of_life_icon.png",
    plume: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Viridescent%2520Venerer/sands_of_eon_icon.png",
    sands: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Viridescent%2520Venerer/plume_of_death_icon.png",
    goblet: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Viridescent%2520Venerer/circlet_of_logos_icon.png",
    circlet: "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Viridescent%2520Venerer/goblet_of_eonothem_icon.png"
  },
  {
    id: 2,
    name: "A Day Carved From Rising Winds",
    pieces: 4,
    source: "Domain of Blessing: Sacred Vault",
    image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/12/7c4a7aca9f8325c6663239bbfa452ded_4271064323680356779.png?x-oss-process=image%2Fformat%2Cwebp",
    flower: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/12/7c4a7aca9f8325c6663239bbfa452ded_4271064323680356779.png?x-oss-process=image%2Fformat%2Cwebp",
    plume: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2026/01/17/237301566/1a94746531a931ca6745c9fa4f011aed_5846296446123627778.png?x-oss-process=image%2Fformat%2Cwebp",
    sands: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2026/01/17/237301566/8683a419d705e1fa6afe561017471bb7_3061162349719059973.png?x-oss-process=image%2Fformat%2Cwebp",
    goblet: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2026/01/17/237301566/1aae7ed000fa89733c1e87117664f999_2436576184041337834.png?x-oss-process=image%2Fformat%2Cwebp",
    circlet: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2026/01/17/237301566/0a7dc60bbf7ab92f1ca0e5b9f9243d1c_5407106439765251156.png?x-oss-process=image%2Fformat%2Cwebp"
  },
  {
    id: 3,
    name: "Aubade of Morningstar and Moon",
    pieces: 4,
    source: "Domain of Blessing: Sacred Vault",
    image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/12/ef58ecfcb8906792c3a9b07c92586934_3343384077195352394.png?x-oss-process=image%2Fformat%2Cwebp",
    flower: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/12/ef58ecfcb8906792c3a9b07c92586934_3343384077195352394.png?x-oss-process=image%2Fformat%2Cwebp",
    plume: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2026/01/17/237301566/64b42ee6b041482f631a62b2f209d0dd_6330169144717155788.png?x-oss-process=image%2Fformat%2Cwebp",
    sands: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2026/01/17/237301566/a5234f105846c8169e8eed65a1d96043_7456084356363360675.png?x-oss-process=image%2Fformat%2Cwebp",
    goblet: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2026/01/17/237301566/c7d1810c3806c2b48610e279dece177f_5216665289854896824.png?x-oss-process=image%2Fformat%2Cwebp",
    circlet: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2026/01/17/237301566/38f65c1a90f86c32fd7aae63e71a28f3_3601012444390265455.png?x-oss-process=image%2Fformat%2Cwebp"
  },
  {
    id: 4,
    name: "Desert Pavilion Chronicle",
    pieces: 2,
    source: "Valley of Remembrance (Mondstadt)",
    image: "https://static.wikia.nocookie.net/genshin-impact/images/5/5e/Item_The_First_Days_of_the_City_of_Kings.png",
    flower: "https://static.wikia.nocookie.net/genshin-impact/images/5/5e/Item_The_First_Days_of_the_City_of_Kings.png",
    plume: "https://static.wikia.nocookie.net/genshin-impact/images/5/5e/Item_The_First_Days_of_the_City_of_Kings.png",
    sands: "https://static.wikia.nocookie.net/genshin-impact/images/5/5e/Item_The_First_Days_of_the_City_of_Kings.png",
    goblet: "https://static.wikia.nocookie.net/genshin-impact/images/5/5e/Item_The_First_Days_of_the_City_of_Kings.png",
    circlet: "https://static.wikia.nocookie.net/genshin-impact/images/5/5e/Item_The_First_Days_of_the_City_of_Kings.png"
  }
];

// ── Teams ──────────────────────────────────────────────────────────────────────
// rank: "S" | "A" | "B"
// characters: ordered list of character NAMES (resolved against characters[] at render time)
// guideId: which guide this team belongs to
export const teams = [
  {
    id: 1,
    name: "Lunar Crystalize",
    tag: "Premium Team",
    rank: "S",
    description: "Lunar Crystallize is an advanced Geo + Hydro elemental reaction that generates Moondrifts, which resonate to deal CRIT-capable AoE Geo damage.",
    characters: ["Zibai", "Columbina", "Linnea", "Illuga"],
    guideId: 1
  },
  {
    id: 2,
    name: "Lunar Crystalize",
    tag: "Alternative Team",
    rank: "A",
    description: "Full Anemo resonance with Kazuha shredding resistance. Best Swirl uptime and consistent DPS ceiling.",
    characters: ["Navia", "Columbina", "Linnea", "Illuga"],
    guideId: 1
  },
  {
    id: 3,
    name: "Lunar Crystalize",
    tag: "Alternative Team",
    rank: "A",
    description: "Full Anemo resonance with Kazuha shredding resistance. Best Swirl uptime and consistent DPS ceiling.",
    characters: ["Zhongli", "Columbina", "Linnea", "Illuga"],
    guideId: 1
  },
  {
    id: 4,
    name: "Lunar Crystalize",
    tag: "F2P Team",
    rank: "A",
    description: "Full Anemo resonance with Kazuha shredding resistance. Best Swirl uptime and consistent DPS ceiling.",
    characters: ["Columbina", "Linnea", "Illuga", "Gorou"],
    guideId: 1
  },
  
];