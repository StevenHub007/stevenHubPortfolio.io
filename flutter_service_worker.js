'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "53080ef87dd7ce6f69fb07ebd64ffafa",
".git/config": "6195eda0e0b11e96b37e2dc4dbf70a13",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5fd97408b3e3bd7fe11560ea62d9c0db",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23e918ee56068ecc3ec22176cdbd3fb2",
".git/logs/refs/heads/master": "23e918ee56068ecc3ec22176cdbd3fb2",
".git/logs/refs/remotes/origin/master": "a449132df556854705adce2e488ae834",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/774d0d8993df0ecef05916edc1ecde82e31fc2": "7be52f3246b35d3d9774b91b578dc1b2",
".git/objects/07/e82efe78916021b7ec8d11d26a882e33a5a6b1": "4c6be8fb139fef63534cf4f1cc0e0094",
".git/objects/08/31191f56616754243658cf4fdc075964f8f7eb": "c2cda1620405c73339c6b6a420a9222b",
".git/objects/13/23cd93395bc79e1a7f8f8587c653e7c0924c66": "897dcf3e76b31870980e5ae3c671311f",
".git/objects/14/c502c885c41b8942d77fd050598b194886bf00": "5d4df35c2d80bff3f7d2739a72b508e1",
".git/objects/1b/be00559b06a0644d447eba329960dd393c57b3": "18c8f1543397cad701c4ffb65dbc385f",
".git/objects/1c/c34049731fd55ad8b0ca8c7c729220e2735d79": "0c7e96041579c7746ce7fbee243e5a5e",
".git/objects/22/f78a47cd482697cf91644ed384cd5608d9bd9f": "6dfc9873e3b167d30f78357d4e4db9be",
".git/objects/26/bd9d0b1fdae0dd5b8587eb0ddba436cc4f3456": "75351b8f4206c98f9c0d814e3d58cfc8",
".git/objects/2e/0ffd24f0342f48096507f45e57ddca78e1e56c": "16bc4f6aeee49ec624ecbb2923c55659",
".git/objects/2f/7e3db5989eac6f28f6cdb19886d860df19cf14": "a237970292161b975b516e92cb192720",
".git/objects/30/a02fed7b39ad195be563308460524dce34b80c": "53a8d3c566bbfbe61f5cccf6b6f9e176",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/6f1e6bd6cd2911f044325fb8004f2568c1abe2": "c835f7db02eafd995ecbcdc506826db6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/d9fa54cc2d8f24f54e26d7b2d5747697363462": "f0c6de4a518ffa1c069011d26c4d998a",
".git/objects/39/a8deb9641c8a3605d147588633b1986a2e3158": "ceb9108c3dda613a0995af845de70c9b",
".git/objects/3a/58dd5b30cfacb3a14fc1a1965efcfcc617865f": "794bba040fb3a478eb03826bee2334e5",
".git/objects/3a/f5973ea1d4046c82e5dd27c4c57ce1365169bb": "2011207be4896edebff225870379c30f",
".git/objects/3c/55d96e79a7e9c6c46ab08a3467465d2641df0d": "f8a41a87ef81ab4ab1884ff0c3e2dba1",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/6c982ff3209357305892181e61565d1e01d439": "c2f0eb7bb7750258f9e16248e7745133",
".git/objects/45/336c9b94f6332bbd8adccdfbddb8cab98e3e2e": "ccacd4663049c327f65de02148c7b3e5",
".git/objects/46/e9593ff0e2f9ce1715324f7bb10fcce35304e6": "ae6f19631c07667b704008297f79ae0e",
".git/objects/48/ef703ca796662556aa5699130b2329dd847d3a": "9778cc7ed39631c73588e3c6ad800da3",
".git/objects/49/7aeb7720ba62b0cddcab5158a8e91dc00d5476": "437709d48b067e1476a2c9348ca50aaf",
".git/objects/4d/40947fc1d720dfc0d156e1f20486f89c04795f": "0bb1b34b5a5c22010562d4fee6da7e9e",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/9e6d006932b63db6691fcc71d9985d7e60f47e": "b1c94d97ccbd59018e3f6957162f06fb",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/203a5fc15adcc2e2148929fb7862b7fb50be59": "6e9cef46c783e95c456fc03879287840",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/da46ba421eacd38ce9df776dbed6964e4e18a9": "990f0c99be8c3b322cead92823f067ec",
".git/objects/77/4ede2c02e6d89f3dfc3eb499603fa302dd4b25": "29e459aa8082a3919b15a2e8e6b7154c",
".git/objects/7b/2cf64ed49da4a759ad100e2abf1cae4a554369": "c9b14a16640ec521f9f5750516a35af3",
".git/objects/7e/7754e3f745e5ca21692f970956998f1f9e179f": "41b9fde700366af9adeb115a5c1d46b9",
".git/objects/80/cabab306852f5b38833c9ed5feb8c820fe47fa": "0b15e9969fc9eb67b49432d7b791d055",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/3b04be806f7956e2cc88f756818fcb4ea0ce41": "9775f236edc9360df8c266c97799259d",
".git/objects/93/b896a59e4fe34cbc61423d29b9a65ef9eb63af": "65e7bcba8fb38ef7112999b577e03c50",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/97/6aa1f5583cfe788d8cec1fe205499fac485517": "a37885529b12de0981f521bef5788f57",
".git/objects/9d/4608aaf2302d07580c664f941c895f914e2cdd": "bfe37f57be368b254aa473f3c2ae2efd",
".git/objects/9e/9ece26be89b9dfef54e488a61cd9e909706da2": "906cb43c62b475f5a9754b4106a13e80",
".git/objects/a1/c38861d68ec66cbf9764c98ccba5b94e646261": "b62778529223db2668d716d315b5a159",
".git/objects/a3/ed5e3c1ba8d80feaa8c0c54e62484a209c06f4": "017344161630750702b241661ea8117f",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/688757a2b1fa3668eee9a5346efc6ce2fe0892": "c60edfadbebc5f2871ecb8b11ac6bbbd",
".git/objects/ad/8a43d19b358e246e9088b1c3b9d64aaa639f50": "36d1b8df005ac5c9255e3bf23ce31027",
".git/objects/b3/e1e7bb1520023f42113597766c057635971dcc": "db14f0be3ca29e8d9582f11cd07aa369",
".git/objects/b3/e8ae1f797e16022318cff449cad4c13fc6d637": "5e13874a11e0b3111a04f4da01f1d547",
".git/objects/b5/d9aeeb81fba32af1899c35d80f7bd43d45fa5a": "69ae8912c996ca7aede8db1c446a7504",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/0d449de2a2e36a40c0033dc8805ae965480ab0": "802666de0ff0b3017023a45aa3a0926b",
".git/objects/c3/7b1eee14edfc6c9aa1210faff349ff0595f506": "bd3dabd5605ebc19c3f825acfaaa8bb9",
".git/objects/c6/4c46becbb21069d24e22c24def83703e31799e": "612548f9c1087d81cde4567de4a93280",
".git/objects/c6/d62b3c0baf3857ebb10c4e14da311f6b34954e": "774cfa619e01e3655524db9982efb66e",
".git/objects/c7/28b6c086a4f1b7d71d7620be159ae3d0b8ad3f": "0af9506cce2264c68a2fa26a9c5f0b0a",
".git/objects/c8/de73d2f06c0bd6a7b857b33aae5749b9dccda0": "3be148909256e4e1d22843b2404ce06c",
".git/objects/d4/06a0e5d4b4e52cbc18895eaf6ad17433c05d16": "a7f6a084bf744680b623d63c33bb041d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/cf41db7807c206b43f53ee846929bc4810ed67": "649a504104908a05eaf13c47ea83bcad",
".git/objects/d5/afbecf8e15c3618ac5633226305ebfaec8775a": "869932850717e1dbc23bcf4288875658",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e0/b8356432f60e613ffaa4f8a563dd70c36482af": "1036f5cb980450dc0b391cab8ae5cd63",
".git/objects/e1/d7bdbc8e87e063718e44788a9ba6e2eb496505": "f0509b0f9cc210e358827a6edc9d3e52",
".git/objects/e3/8c9c36a1fb5bb37251b8eed615e72a8a7f4b70": "347db4788d13d936fc1624f6f7a410c9",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d5a9a9e48cd4690beae061962ca67f132be470": "73642b5891316e7acbe5f6b19c7fa316",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/6f7d3e3906e0af31ae1da178d735c9e237af3f": "4d9763d8a1e6b2ed8c92cae26ea890a7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/8b1cb9e4fba61233405fd0e5d5dbca8deff8f6": "17731b9f9b8bb648aa95a505c24dcda2",
".git/refs/heads/master": "93cae7fc893ca006ee12f70eaf47d461",
".git/refs/remotes/origin/master": "93cae7fc893ca006ee12f70eaf47d461",
"assets/AssetManifest.bin": "0a2e9a795f0b60eddcc3ec4a1241c00c",
"assets/AssetManifest.bin.json": "0187cc05b0f27c7de38adf089eb56d55",
"assets/AssetManifest.json": "fc02864c4afb9933567e55e2861b791f",
"assets/Certificate/ItCertificate/BizTraining.jpg": "4cfcd5f73f968f4da6d4d13d751cbee0",
"assets/Certificate/ItCertificate/flutterCeti.png": "2f025625eba29ed63650852920139b1c",
"assets/Certificate/ItCertificate/foundationgusto.jpg": "5036379ae27959e6690d24a72e400a2d",
"assets/Certificate/ItCertificate/ProductTrainingCertificate.jpg": "d764a7b288ff8055dba7a7d9caf64049",
"assets/font/JetBrainsMono-Regular.ttf": "a0147b5ab9e4946e81879aef45313def",
"assets/FontManifest.json": "0156cf349095ed2eb0acc6a6398c6cea",
"assets/fonts/MaterialIcons-Regular.otf": "e736f34b972268a7c53043273e37272d",
"assets/json/4j.json": "c96f4a42e88c22d7c253680da79dde55",
"assets/logo/facebook/facebook.png": "ca99cf13fd38f4bd9e36be800cdbc968",
"assets/logo/github/githubLogo.png": "cc89770087edf52b64d3923441593130",
"assets/logo/linkedin/linkedin.png": "6baa71cf13fb5132c802511c75aafc42",
"assets/logo/logoSteven.png": "803f358a92999ebd973f37fc35e811e5",
"assets/logo/telegram/telegram.png": "e62470c7bcaee3df395f39fd4580094a",
"assets/NOTICES": "aab19098cd99fa5159e664b33d55f0d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/pictures/avatar.png": "af355c33b6b23fcd432fc2432e565d9b",
"assets/pictures/avatar_waving.png": "8e78ad76d707ec23007376206b7f0ccf",
"assets/pictures/barista.webp": "a568d14bd8ac6c21aa06a8ebb22b4c04",
"assets/pictures/it.png": "17ad0cc6d97bc316c1c37d495059d41d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/skills/flutter_icon.png": "218c4c5df83b068f8cb476f89832d5dd",
"assets/skills/java_icon.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/skills/react_native.png": "b4b76cf6f2018dba956d734b93e387fa",
"assets/skills/swift_icon.png": "33545f94cd445225da7865d7a2168698",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "f992ca594e8528461793a7b0b17dfba9",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "5b0164522ea272a00db93a3e2758bde3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "57b6419fb0a268376af4e8d4cfe570b0",
"/": "57b6419fb0a268376af4e8d4cfe570b0",
"main.dart.js": "0d613d720507484bda39d1c5372aae14",
"manifest.json": "b3ad4b351961a74744b6730c29579e14",
"version.json": "0e5ec3c80635b909d59f8e86efbc2671"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
