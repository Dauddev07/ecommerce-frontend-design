/* ============================================================
   header-footer.js
   Injects shared header and footer into every page
   ============================================================ */

const HEADER_HTML = `
<header>
  <!-- TOP BAR -->
  <div class="header-topbar">
    <div class="container">
      <!-- Logo -->
      <a href="index.html" class="logo">
        <img src="assets/images/logo.png" alt="Brand Logo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <span class="logo-icon" style="display:none"><i class="fa-solid fa-store"></i></span>
        Brand
      </a>

      <!-- Search -->
      <div class="search-wrap">
        <input type="text" id="searchInput" placeholder="Search" autocomplete="off" />
        <select class="search-cat" id="searchCat">
          <option>All category</option>
          <option>Automobiles</option>
          <option>Clothes and wear</option>
          <option>Electronics</option>
          <option>Home interiors</option>
          <option>Sports and outdoor</option>
        </select>
        <button class="search-btn" onclick="handleSearch()">
          <i class="fa-solid fa-magnifying-glass"></i> Search
        </button>
      </div>

      <!-- Actions -->
      <div class="header-actions">
        <a href="#" class="action-link">
          <i class="fa-regular fa-user"></i>
          <span>Profile</span>
        </a>
        <a href="#" class="action-link">
          <i class="fa-regular fa-message"></i>
          <span>Message</span>
        </a>
        <a href="#" class="action-link">
          <i class="fa-solid fa-box"></i>
          <span>Orders</span>
        </a>
        <a href="cart.html" class="action-link">
          <i class="fa-solid fa-cart-shopping"></i>
          <span class="cart-badge" id="cartCount">0</span>
          <span>My cart</span>
        </a>
      </div>
    </div>
  </div>

  <!-- MAIN NAV -->
  <nav class="main-nav">
    <div class="container">

      <!-- All category -->
      <div class="all-cat-wrap">
        <button class="all-cat-btn">
          <i class="fa-solid fa-bars"></i>
          All category
          <i class="fa-solid fa-chevron-down" style="font-size:10px;margin-left:4px;"></i>
        </button>
        <ul class="cat-dropdown">
          <li><a href="#"><i class="fa-solid fa-car"></i>Automobiles</a></li>
          <li><a href="#"><i class="fa-solid fa-shirt"></i>Clothes and wear</a></li>
          <li><a href="#"><i class="fa-solid fa-couch"></i>Home interiors</a></li>
          <li><a href="#"><i class="fa-solid fa-computer"></i>Computer and tech</a></li>
          <li><a href="#"><i class="fa-solid fa-wrench"></i>Tools, equipments</a></li>
          <li><a href="#"><i class="fa-solid fa-person-running"></i>Sports and outdoor</a></li>
          <li><a href="#"><i class="fa-solid fa-paw"></i>Animal and pets</a></li>
          <li><a href="#"><i class="fa-solid fa-gears"></i>Machinery tools</a></li>
          <li class="see-all"><a href="#"><i class="fa-solid fa-grip"></i>More category</a></li>
        </ul>
      </div>

      <!-- Nav links -->
      <div class="nav-links">
        <a href="index.html">Hot offers</a>
        <a href="index.html">Gift boxes</a>
        <a href="index.html">Projects</a>
        <a href="index.html">Menu item</a>
        <a href="#" class="has-drop">
          Help <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i>
          <ul class="sub-drop">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </a>
      </div>

      <!-- Right: language + ship -->
      <div class="nav-right">
        <select class="lang-select">
          <option>English, USD</option>
          <option>Arabic, AED</option>
          <option>French, EUR</option>
        </select>
        <div class="ship-to">
          <img src="assets/images/flags/de.png" alt="DE" />
          <span>Ship to</span>
          <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i>
        </div>
      </div>

    </div>
  </nav>
</header>
`;

const FOOTER_HTML = `
<footer>
  <!-- Newsletter -->
  <div class="newsletter-strip">
    <div class="container">
      <h3>Subscribe on our newsletter</h3>
      <p>Get daily news on upcoming offers from many suppliers all over the world</p>
      <div class="newsletter-form">
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
      </div>
    </div>
  </div>

  <!-- Footer columns -->
  <div class="footer-grid">
    <!-- Brand -->
    <div class="footer-brand footer-col">
      <a href="index.html" class="logo">
        <img src="assets/images/logo.png" alt="Brand" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <span class="logo-icon" style="display:none"><i class="fa-solid fa-store"></i></span>
        Brand
      </a>
      <p>Best information about the company goes here but now lorem ipsum is available.</p>
      <div class="social-icons">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
      </div>
    </div>

    <div class="footer-col">
      <h4>About</h4>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Find store</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Blogs</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Partnership</h4>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Find store</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Blogs</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Information</h4>
      <ul>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Money Refund</a></li>
        <li><a href="#">Shipping</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>For users</h4>
      <ul>
        <li><a href="#">Login</a></li>
        <li><a href="#">Register</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">My Orders</a></li>
      </ul>
    </div>
  </div>

  <!-- Footer bottom -->
  <div class="footer-bottom">
    <div class="container">
      <p>© 2023 Ecommerce.</p>
      <div class="app-badges">
        <a href="#" class="app-badge">
          <i class="fa-brands fa-apple"></i>
          <div>
            <small>Download on the</small>
            <strong>App Store</strong>
          </div>
        </a>
        <a href="#" class="app-badge">
          <i class="fa-brands fa-google-play"></i>
          <div>
            <small>Get it on</small>
            <strong>Google Play</strong>
          </div>
        </a>
      </div>
    </div>
  </div>
</footer>
`;

/* ---- Inject on DOM ready ---- */
document.addEventListener('DOMContentLoaded', () => {
  /* Header */
  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = HEADER_HTML;

  /* Footer */
  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  /* Highlight active nav link */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.color = 'var(--blue)';
      link.style.fontWeight = '600';
    }
  });
});

/* ---- Search handler ---- */
function handleSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (q) window.location.href = `listview.html?q=${encodeURIComponent(q)}`;
}
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement.id === 'searchInput') handleSearch();
});
