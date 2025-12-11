const appState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  currentPage: 1,
  productsPerPage: 8,
  currentCategory: "all",
  currentSort: "newest",
};

// بيانات المعرض مع تحسينات SEO
const galleryData = window.galleryData || [
  {
    id: 1,
    category: "curtains",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "ستائر فاخرة في فيلا",
    description: "تركيب ستائر blackout في فيلا فاخرة",
    alt: "ستائر فاخرة في فيلا - منتجات الخولاني محمد",
    // إضافة بيانات منظمة
    structuredData: {
      "@type": "ImageObject",
      "contentUrl": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      "description": "تركيب ستائر blackout في فيلا فاخرة من الخولاني محمد"
    }
  },
];

// بيانات آراء العملاء مع تحسينات SEO
const testimonialsData = window.testimonialsData || [
  {
    id: 1,
    name: "أحمد السديري",
    position: "عميل - الرياض",
    text: "الستائر التي طلبتها كانت رائعة! الجودة والتنسيق كانا فوق التوقعات.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    // إضافة بيانات منظمة للتعليقات
    structuredData: {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "أحمد السديري"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "الستائر التي طلبتها كانت رائعة! الجودة والتنسيق كانا فوق التوقعات."
    }
  },
];

// تهيئة التطبيق مع تحسينات SEO
document.addEventListener("DOMContentLoaded", function() {
  // إضافة بيانات منظمة للموقع
  addStructuredData();
  
  // تعطيل التنقل السلس أثناء تحميل الصفحة لأداء أفضل
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  initApp();
});

// إضافة بيانات منظمة للموقع
function addStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "الخولاني محمد",
    "description": "متجر الخولاني محمد - متخصص في الستائر، المضلات، الفراشات والمخيمات",
    "url": window.location.href,
    "telephone": "+966-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "الرياض",
      "addressCountry": "SA"
    },
    "openingHours": "Mo-Su 08:00-22:00",
    "priceRange": "$$",
    "image": "https://example.com/logo.jpg" // استبدل برابط الشعار الفعلي
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}

function initApp() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
    return;
  }

  // التحقق من وجود العناصر قبل التهيئة
  const elementsToCheck = [
    'loadingScreen',
    'navbar',
    'searchInput',
    'cartBtn',
    'featuredProducts',
    'productsGrid',
  ];

  elementsToCheck.forEach((id) => {
    if (!document.getElementById(id)) {
      console.warn(`Element #${id} not found`);
    }
  });
      initConsultationForm();

  // تحسين ترتيب التهيئة للأداء
  initLoadingScreen();
  initNavigation();
  initSearchFunctionality();
  initCartFunctionality();
  initProducts();
  initGallery();
  initTestimonials();
  initContactForm();
  initNewsletter();
  initModals();
  initAnimations();

  // تحديث العداد الأولي
  updateCartCount();

  // إضافة حدث لتحسين Core Web Vitals
  window.addEventListener('load', () => {
    // إرسال بيانات أداء الصفحة (يمكن استخدامها مع Google Analytics)
    const loadTime = performance.now();
    console.log(`🔄 وقت تحميل الصفحة: ${loadTime.toFixed(2)}ms`);
    
    // إضافة حدث LCP (Largest Contentful Paint)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log(`🎯 LCP: ${lastEntry.startTime.toFixed(2)}ms`);
    }).observe({type: 'largest-contentful-paint', buffered: true});
  });

  console.log('✅ تم تحميل موقع الخولاني محمد بنجاح مع تحسينات SEO');
}

// === إدارة شاشة التحميل ===
function initLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');

  // محاكاة عملية التحميل مع تحسينات الأداء
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.visibility = 'hidden';
      // إزالة من DOM بعد الاختفاء لتوفير الذاكرة
      setTimeout(() => {
        if (loadingScreen.parentNode) {
          loadingScreen.parentNode.removeChild(loadingScreen);
        }
      }, 1000);
    }, 500);
  }, 1500); // تقليل وقت التحميل المحاكى
}

// === إدارة التنقل ===
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // تأثير التمرير مع تحسين الأداء
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    // استخدام debounce لتحسين الأداء
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      updateActiveNavLink();
    }, 10);
  });

  // تبديل القائمة في الجوال
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      
      // إضافة/إزالة ARIA labels للوصول
      const isExpanded = navMenu.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // التنقل السلس مع تحسينات SEO
  navLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        // تحديث الروابط النشطة
        navLinks.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');

        // تحديث عنوان URL بدون إعادة تحميل الصفحة (لتحسين UX وSEO)
        history.pushState(null, null, targetId);

        // إغلاق القائمة في الجوال
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
}

// تحديث الرابط النشط
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// === وظائف البحث ===
function initSearchFunctionality() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchBtn = document.getElementById('searchBtn');

  if (!searchInput) return;

  // البحث أثناء الكتابة مع تحسينات الأداء
  let searchTimeout;
  searchInput.addEventListener('input', function(e) {
    const value = e.target.value.trim().toLowerCase();

    // استخدام debounce لتقليل طلبات البحث
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      if (value.length > 1) {
        const results = performSearch(value);
        displaySearchResults(results);
        
        // تحديث عنوان URL للبحث (لتحسين SEO)
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('q', value);
        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
        history.replaceState(null, null, newUrl);
      } else {
        hideSearchResults();
        
        // إزالة معلمة البحث من URL
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete('q');
        const newUrl = `${window.location.pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
        history.replaceState(null, null, newUrl);
      }
    }, 300);
  });

  // زر البحث
  searchBtn.addEventListener('click', function() {
    const value = searchInput.value.trim();
    if (value) {
      const results = performSearch(value);
      displaySearchResults(results);
    }
  });

  // البحث بالضغط على Enter
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const value = searchInput.value.trim();
      if (value) {
        const results = performSearch(value);
        displaySearchResults(results);
      }
    }
  });

  // إغلاق النتائج عند النقر خارجها
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      hideSearchResults();
    }
  });
  
  // معالجة بحث URL عند تحميل الصفحة
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('q');
  if (searchQuery) {
    searchInput.value = searchQuery;
    const results = performSearch(searchQuery);
    displaySearchResults(results);
  }
}

// تنفيذ البحث
function performSearch(query) {
  return window.productsManager.search(query);
}

// عرض نتائج البحث - النسخة المحسنة مع SEO
function displaySearchResults(results) {
  const searchResults = document.getElementById('searchResults');
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.trim();
  
  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="search-no-results">
        <i class="fas fa-search" aria-hidden="true"></i>
        <h4>لا توجد نتائج لـ "${query}"</h4>
        <p>جرب كلمات بحث أخرى أو تصفح جميع المنتجات</p>
        <button class="btn btn-outline mt-2" onclick="scrollToSection('products')" aria-label="تصفح جميع المنتجات">
          <i class="fas fa-th-large" aria-hidden="true"></i>
          تصفح جميع المنتجات
        </button>
      </div>
      <div class="search-suggestions">
        <div class="search-suggestions-title">اقتراحات للبحث:</div>
        <div class="search-suggestions-list">
          <div class="search-suggestion-tag" onclick="document.getElementById('searchInput').value = 'ستائر'; performSearch('ستائر');" role="button" tabindex="0" aria-label="البحث عن ستائر">
            ستائر
          </div>
          <div class="search-suggestion-tag" onclick="document.getElementById('searchInput').value = 'مضلات'; performSearch('مضلات');" role="button" tabindex="0" aria-label="البحث عن مضلات">
            مضلات
          </div>
          <div class="search-suggestion-tag" onclick="document.getElementById('searchInput').value = 'فراشات'; performSearch('فراشات');" role="button" tabindex="0" aria-label="البحث عن فراشات">
            فراشات
          </div>
          <div class="search-suggestion-tag" onclick="document.getElementById('searchInput').value = 'مخيمات'; performSearch('مخيمات');" role="button" tabindex="0" aria-label="البحث عن مخيمات">
            مخيمات
          </div>
        </div>
      </div>
    `;
  } else {
    searchResults.innerHTML = results.map(product => `
      <div class="search-result-item" data-product-id="${product.id}" role="button" tabindex="0" aria-label="عرض تفاصيل ${product.name}">
        ${product.badge ? `<div class="search-result-badge">${product.badge}</div>` : ''}
        <img src="${product.image}" alt="${product.name} - ${getCategoryName(product.category)}" loading="lazy">
        <div class="search-result-info">
          <div class="search-result-name">${product.name}</div>
          <div class="search-result-meta">
            <span class="search-result-category">${getCategoryName(product.category)}</span>
            <div class="search-result-rating">
              ${generateStarRating(product.rating)}
              <span>(${product.rating})</span>
            </div>
          </div>
          <div class="search-result-features">
            ${product.features.slice(0, 2).join(' • ')}
          </div>
          <div class="search-result-price-section">
            ${product.oldPrice ? `
              <span class="search-result-old-price">${product.oldPrice} ر.س</span>
            ` : ''}
            <span class="search-result-price">${product.price} ر.س</span>
          </div>
        </div>
        <i class="fas fa-chevron-left" style="color: var(--text-light); font-size: 0.9rem;" aria-hidden="true"></i>
      </div>
    `).join('') + `
      <div class="search-suggestions">
        <div class="search-suggestions-title">عرض ${results.length} منتج</div>
        <div class="search-suggestions-list">
          <div class="search-suggestion-tag" onclick="filterByCategory('all')" role="button" tabindex="0" aria-label="عرض جميع المنتجات">
            عرض الكل
          </div>
          <div class="search-suggestion-tag" onclick="filterByCategory('curtains')" role="button" tabindex="0" aria-label="عرض الستائر فقط">
            الستائر فقط
          </div>
          <div class="search-suggestion-tag" onclick="filterByCategory('shades')" role="button" tabindex="0" aria-label="عرض المضلات فقط">
            المضلات فقط
          </div>
        </div>
      </div>
    `;

    // إضافة event listeners للعناصر بعد إنشائها
    setTimeout(() => {
      document.querySelectorAll('.search-result-item').forEach((item) => {
        item.addEventListener('click', () => {
          const productId = item.getAttribute('data-product-id');
          openProductModal(parseInt(productId));
          hideSearchResults();
        });
        
        // إضافة دعم لوحة المفاتيح
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const productId = item.getAttribute('data-product-id');
            openProductModal(parseInt(productId));
            hideSearchResults();
          }
        });
      });
    }, 0);
  }
  
  searchResults.classList.add('active');
  searchResults.setAttribute('aria-hidden', 'false');
}

// إخفاء نتائج البحث
function hideSearchResults() {
  const searchResults = document.getElementById('searchResults');
  searchResults.classList.remove('active');
  searchResults.setAttribute('aria-hidden', 'true');
}

// === إدارة السلة ===
function initCartFunctionality() {
  const cartBtn = document.getElementById('cartBtn');
  const cartPanel = document.getElementById('cartPanel');
  const closeCart = document.getElementById('closeCart');
  const clearCart = document.getElementById('clearCart');
  const checkoutBtn = document.getElementById('checkoutBtn');

  // فتح/إغلاق السلة
  if (cartBtn && cartPanel) {
    cartBtn.addEventListener('click', () => {
      cartPanel.classList.add('active');
      cartPanel.setAttribute('aria-hidden', 'false');
    });

    closeCart.addEventListener('click', () => {
      cartPanel.classList.remove('active');
      cartPanel.setAttribute('aria-hidden', 'true');
    });
  }

  // تفريغ السلة
  if (clearCart) {
    clearCart.addEventListener('click', clearCartItems);
  }

  // إتمام الطلب
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', proceedToCheckout);
  }

  // تحديث عرض السلة
  updateCartDisplay();
}

// إضافة منتج للسلة
function addToCart(productId) {
  try {
    const product = window.productsManager.getAll().find(p => p.id == productId);
    if (!product) {
      throw new Error('المنتج غير موجود');
    }

    const existingItem = appState.cart.find(item => item.id == productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      appState.cart.push({
        ...product,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(appState.cart));
    updateCartCount();
    updateCartDisplay();
    showNotification(`تم إضافة "${product.name}" إلى السلة`, 'success');

    const cartPanel = document.getElementById('cartPanel');
    if (cartPanel) {
      cartPanel.classList.add('active');
      cartPanel.setAttribute('aria-hidden', 'false');
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    showNotification('حدث خطأ في إضافة المنتج', 'error');
  }
}

// إزالة منتج من السلة
function removeFromCart(productId) {
  appState.cart = appState.cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(appState.cart));
  updateCartCount();
  updateCartDisplay();
  showNotification('تم إزالة المنتج من السلة', 'success');
}

// تحديث الكمية
function updateQuantity(productId, change) {
  const item = appState.cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity < 1) {
      removeFromCart(productId);
    } else {
      localStorage.setItem('cart', JSON.stringify(appState.cart));
      updateCartDisplay();
    }
  }
}

// تفريغ السلة
function clearCartItems() {
  if (appState.cart.length === 0) {
    showNotification('السلة فارغة بالفعل', 'info');
    return;
  }

  if (confirm('هل أنت متأكد من تفريغ السلة؟')) {
    appState.cart = [];
    localStorage.setItem('cart', JSON.stringify(appState.cart));
    updateCartCount();
    updateCartDisplay();
    showNotification('تم تفريغ السلة', 'success');
  }
}

// تحديث عداد السلة
function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.setAttribute('aria-label', `${totalItems} عنصر في السلة`);

    // تأثير عند التحديث
    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => {
      cartCount.style.transform = 'scale(1)';
    }, 300);
  }
}

// تحديث عرض السلة
function updateCartDisplay() {
  const cartItems = document.getElementById('cartItems');
  const cartTotalPrice = document.getElementById('cartTotalPrice');

  if (!cartItems) return;

  if (appState.cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
        <p>سلة التسوق فارغة</p>
        <button class="btn btn-primary mt-2" onclick="scrollToSection('products')" aria-label="التوجه إلى قسم المنتجات">تسوق الآن</button>
      </div>
    `;
    cartTotalPrice.textContent = '0 ر.س';
  } else {
    cartItems.innerHTML = appState.cart.map(item => `
      <div class="cart-item" data-product-id="${item.id}">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${item.price} ر.س</div>
          <div class="cart-item-quantity">
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="تقليل الكمية">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="زيادة الكمية">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="إزالة ${item.name} من السلة">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    `).join('');

    const total = appState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalPrice.textContent = `${total.toLocaleString()} ر.س`;
  }
}

function getCustomerName() {
  return new Promise((resolve) => {
    const modalHTML = `
      <div class="modal active" id="customerInfoModal" style="display: block; z-index: 10000;">
        <div class="modal-content" style="max-width: 400px;">
          <div class="modal-header">
            <h3>تأكيد الطلب</h3>
            <button class="close-modal" onclick="closeCustomerInfoModal()">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <div style="text-align: center; margin-bottom: 1.5rem;">
              <i class="fab fa-whatsapp" style="font-size: 3rem; color: #25D366; margin-bottom: 1rem;"></i>
              <p>سيتم فتح واتساب لإرسال طلبك تلقائياً</p>
            </div>
            
            <form id="customerInfoForm">
              <div class="form-group">
                <label for="customerName">اسمك (للتعرّف عليك) *</label>
                <input type="text" id="customerName" name="name" required 
                       placeholder="أدخل اسمك" autofocus>
              </div>
              
              <div class="form-actions">
                <button type="button" class="btn btn-outline" onclick="closeCustomerInfoModal()">
                  إلغاء
                </button>
                <button type="submit" class="btn btn-primary">
                  <i class="fab fa-whatsapp"></i>
                  إرسال عبر واتساب
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);

    // إدارة النموذج
    const form = document.getElementById('customerInfoForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const customerName = formData.get('name').trim();

      if (!customerName) {
        showNotification('الرجاء إدخال اسمك', 'error');
        return;
      }

      closeCustomerInfoModal();
      resolve(customerName);
    });

    // إغلاق النموذج عند النقر خارجيه
    const modal = document.getElementById('customerInfoModal');
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeCustomerInfoModal();
        resolve(null);
      }
    });

    // إغلاق بالضغط على Esc
    document.addEventListener('keydown', function handleEsc(e) {
      if (e.key === 'Escape') {
        closeCustomerInfoModal();
        document.removeEventListener('keydown', handleEsc);
        resolve(null);
      }
    });
  });
}

// إتمام الطلب
async function proceedToCheckout() {
  console.log('🔴 بدء عملية proceedToCheckout');
  
  if (appState.cart.length === 0) {
    showNotification('السلة فارغة', 'error');
    return;
  }

  try {
    // طلب اسم العميل فقط
    const customerName = await getCustomerName();
    if (!customerName) {
      console.log('🔴 المستخدم ألغى العملية');
      return;
    }

    console.log('🟢 اسم العميل:', customerName);

    // حفظ الطلب في النظام
    const order = window.ordersManager.createOrder(appState.cart, { name: customerName });
    console.log('🟢 تم إنشاء الطلب:', order);

    // إنشاء رسالة واتساب مفصلة
    const whatsappMessage = createWhatsAppOrderMessage(order);
    
    // استخدام window.location مباشرة (الطريقة الأكثر فعالية)
    const phoneNumber = "774274010"; // بدون رمز الدولة
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    console.log('🔗 رابط واتساب:', whatsappUrl);
    
    // تفريغ السلة أولاً
    appState.cart = [];
    localStorage.setItem('cart', JSON.stringify(appState.cart));
    updateCartCount();
    updateCartDisplay();

    // التوجيه إلى واتساب
    showNotification('جاري التوجيه إلى واتساب...', 'info');
    
    // استخدام setTimeout لضمان تنفيذ الإشعار أولاً
    setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1500);

  } catch (error) {
    console.error('❌ خطأ في proceedToCheckout:', error);
    showNotification('حدث خطأ أثناء معالجة الطلب', 'error');
  }
}


function createWhatsAppOrderMessage(order) {
  const total = order.total;
  
  // إنشاء قائمة المنتجات مع الصور
  const itemsList = order.items.map((item, index) => 
    `🏷️ *${item.name}*
├ 📸 ${item.image}
├ 📊 الكمية: ${item.quantity}
├ 💰 السعر: ${item.price} ر.س
└ 🧮 المجموع: ${item.price * item.quantity} ر.س`
  ).join('\n\n');

  const message = `🛒 *طلب جديد - متجر الخولاني محمد*

📋 *معلومات الطلب:*
• رقم الطلب: #${order.orderNumber}
• التاريخ: ${new Date(order.createdAt).toLocaleDateString('ar-SA')}
• اسم العميل: ${order.customer.name}

📦 *المنتجات المطلوبة:*
${itemsList}

💰 *المجموع الكلي: ${total.toLocaleString()} ر.س*

📍 *تفاصيل إضافية:*
• يمكنني رؤية صور المنتجات من الروابط أعلاه
• جاهز لتأكيد الطلب وتفاصيل التوصيل

شكراً لاختياركم متجر الخولاني محمد! 🎉`;

  return message;
}


function closeCustomerInfoModal() {
  const modal = document.getElementById('customerInfoModal');
  if (modal) {
    modal.remove();
  }
}

// يحفظ الطلب في localStorage فقط
function submitConsultation(formData) {
    const consultation = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString(),
        status: 'new'
    };
    
    // حفظ في localStorage
    const consultations = JSON.parse(localStorage.getItem('consultations')) || [];
    consultations.push(consultation);
    localStorage.setItem('consultations', JSON.stringify(consultations));
    
    showNotification('تم استلام استشارتك وسنتواصل معك قريباً');
}

function showMessageForCopy(message) {
  const modalHTML = `
    <div class="modal active" id="copyMessageModal" style="display: block;">
      <div class="modal-content" style="max-width: 500px;">
        <div class="modal-header">
          <h3>نسخ رسالة الطلب</h3>
          <button class="close-modal" onclick="closeCopyMessageModal()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div style="text-align: center; margin-bottom: 1rem;">
            <i class="fas fa-exclamation-triangle" style="color: orange; font-size: 2rem;"></i>
            <p>لم يتم فتح واتساب تلقائياً</p>
          </div>
          
          <div class="form-group">
            <label>يرجى نسخ الرسالة التالية وإرسالها يدوياً على واتساب:</label>
            <textarea id="messageToCopy" readonly 
                      style="width: 100%; height: 200px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; font-family: inherit;"
                      >${message}</textarea>
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn btn-outline" onclick="closeCopyMessageModal()">
              إغلاق
            </button>
            <button type="button" class="btn btn-primary" onclick="copyMessageToClipboard()">
              <i class="fas fa-copy"></i>
              نسخ الرسالة
            </button>
            <button type="button" class="btn btn-success" onclick="openWhatsAppManually()">
              <i class="fab fa-whatsapp"></i>
              فتح واتساب يدوياً
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  const modalContainer = document.createElement('div');
  modalContainer.innerHTML = modalHTML;
  document.body.appendChild(modalContainer);
}

// === إدارة المنتجات ===
function initProducts() {
  displayFeaturedProducts();
  displayAllProducts();
  initProductFilters();

  // الاستماع لتحديثات المنتجات
  window.addEventListener('productsUpdated', () => {
    displayFeaturedProducts();
    displayAllProducts();
  });
}

// عرض المنتجات المميزة
function displayFeaturedProducts() {
  const featuredContainer = document.getElementById('featuredProducts');
  if (!featuredContainer) return;

  const featuredProducts = window.productsManager.getFeatured();

  featuredContainer.innerHTML = featuredProducts.map(product => `
    <div class="product-card" itemscope itemtype="https://schema.org/Product">
      ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
      <div class="product-image">
        <img src="${product.image}" alt="${product.name} - ${getCategoryName(product.category)}" loading="lazy" itemprop="image">
      </div>
      <div class="product-content">
        <span class="product-category" itemprop="category">${getCategoryName(product.category)}</span>
        <h3 class="product-title" itemprop="name">${product.name}</h3>
        <ul class="product-features">
          ${product.features.map(feature => `<li itemprop="description">${feature}</li>`).join('')}
        </ul>
        <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          ${product.oldPrice ? `
            <span class="product-old-price">${product.oldPrice} ر.س</span>
          ` : ''}
          <span itemprop="price" content="${product.price}">${product.price}</span>
          <span itemprop="priceCurrency" content="SAR">ر.س</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-outline" onclick="openProductModal(${product.id})" aria-label="معاينة ${product.name}">
            <i class="fas fa-eye" aria-hidden="true"></i>
            معاينة
          </button>
          <button class="btn btn-primary" onclick="addToCart(${product.id})" aria-label="إضافة ${product.name} إلى السلة">
            <i class="fas fa-shopping-cart" aria-hidden="true"></i>
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// عرض جميع المنتجات
function displayAllProducts() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  let filteredProducts = filterAndSortProducts();

  // التقسيم للصفحات
  const startIndex = (appState.currentPage - 1) * appState.productsPerPage;
  const endIndex = startIndex + appState.productsPerPage;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);

  if (productsToShow.length === 0) {
    productsGrid.innerHTML = `
      <div class="text-center" style="grid-column: 1/-1; padding: 3rem;">
        <i class="fas fa-search fa-3x" style="color: var(--text-light); margin-bottom: 1rem;" aria-hidden="true"></i>
        <h3 style="color: var(--text-light);">لا توجد منتجات</h3>
        <p>جرب تغيير عوامل التصفية أو البحث عن شيء آخر</p>
      </div>
    `;
  } else {
    productsGrid.innerHTML = productsToShow.map(product => `
      <div class="product-card" itemscope itemtype="https://schema.org/Product">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name} - ${getCategoryName(product.category)}" loading="lazy" itemprop="image">
        </div>
        <div class="product-content">
          <span class="product-category" itemprop="category">${getCategoryName(product.category)}</span>
          <h3 class="product-title" itemprop="name">${product.name}</h3>
          <ul class="product-features">
            ${product.features.slice(0, 3).map(feature => `<li itemprop="description">${feature}</li>`).join('')}
          </ul>
          <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            <span itemprop="price" content="${product.price}">${product.price}</span>
            <span itemprop="priceCurrency" content="SAR">ر.س</span>
          </div>
          <div class="product-actions">
            <button class="btn btn-outline" onclick="openProductModal(${product.id})" aria-label="معاينة ${product.name}">
              <i class="fas fa-eye" aria-hidden="true"></i>
              معاينة
            </button>
            <button class="btn btn-primary" onclick="addToCart(${product.id})" aria-label="إضافة ${product.name} إلى السلة">
              <i class="fas fa-shopping-cart" aria-hidden="true"></i>
              أضف للسلة
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  updateLoadMoreButton(filteredProducts.length);
}

// تصفية وترتيب المنتجات
function filterAndSortProducts() {
  let filtered = window.productsManager.getAll().filter(p => p.status === 'active');

  // التصفية حسب الفئة
  if (appState.currentCategory !== 'all') {
    filtered = filtered.filter(product => product.category === appState.currentCategory);
  }

  // الترتيب
  switch (appState.currentSort) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'popular':
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case 'newest':
    default:
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
  }

  return filtered;
}

// تهيئة عوامل التصفية
function initProductFilters() {
  const categoryFilter = document.getElementById('categoryFilter');
  const sortFilter = document.getElementById('sortFilter');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  if (categoryFilter) {
    categoryFilter.addEventListener('change', function() {
      appState.currentCategory = this.value;
      appState.currentPage = 1;
      displayAllProducts();
      
      // تحديث URL مع معلمات التصفية
      updateURLWithFilters();
    });
  }

  if (sortFilter) {
    sortFilter.addEventListener('change', function() {
      appState.currentSort = this.value;
      appState.currentPage = 1;
      displayAllProducts();
      
      // تحديث URL مع معلمات التصفية
      updateURLWithFilters();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMoreProducts);
  }
  
  // معالجة معلمات URL عند التحميل
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  const sort = urlParams.get('sort');
  
  if (category && categoryFilter) {
    categoryFilter.value = category;
    appState.currentCategory = category;
  }
  
  if (sort && sortFilter) {
    sortFilter.value = sort;
    appState.currentSort = sort;
  }
}

// تحديث URL مع معلمات التصفية
function updateURLWithFilters() {
  const urlParams = new URLSearchParams();
  
  if (appState.currentCategory !== 'all') {
    urlParams.set('category', appState.currentCategory);
  }
  
  if (appState.currentSort !== 'newest') {
    urlParams.set('sort', appState.currentSort);
  }
  
  const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ''}`;
  history.replaceState(null, null, newUrl);
}

// تحميل المزيد من المنتجات
function loadMoreProducts() {
  const totalProducts = filterAndSortProducts().length;
  const totalPages = Math.ceil(totalProducts / appState.productsPerPage);

  if (appState.currentPage < totalPages) {
    appState.currentPage++;
    displayAllProducts();
  }
}

// تحديث زر تحميل المزيد
function updateLoadMoreButton(totalProducts) {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (!loadMoreBtn) return;

  const totalPages = Math.ceil(totalProducts / appState.productsPerPage);

  if (appState.currentPage >= totalPages || totalProducts === 0) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
    loadMoreBtn.textContent = `تحميل المزيد (${appState.currentPage}/${totalPages})`;
    loadMoreBtn.setAttribute('aria-label', `تحميل المزيد من المنتجات، الصفحة ${appState.currentPage} من ${totalPages}`);
  }
}

// التصفية حسب الفئة
function filterByCategory(category) {
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) {
    categoryFilter.value = category;
    appState.currentCategory = category;
    appState.currentPage = 1;
    displayAllProducts();

    // تحديث URL
    updateURLWithFilters();
    
    // التمرير لقسم المنتجات
    scrollToSection('products');
  }
}

// === المعرض ===
function initGallery() {
  displayGallery();
  initGalleryFilters();
}

// عرض المعرض
function displayGallery(filter = 'all') {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;

  const filteredGallery = filter === 'all' ? 
    galleryData : 
    galleryData.filter(item => item.category === filter);

  galleryGrid.innerHTML = filteredGallery.map(item => `
    <div class="gallery-item" itemscope itemtype="https://schema.org/ImageObject">
      <img src="${item.image}" alt="${item.alt || item.title}" loading="lazy" itemprop="contentUrl">
      <div class="gallery-overlay">
        <h4 itemprop="name">${item.title}</h4>
        <p itemprop="description">${item.description}</p>
      </div>
    </div>
  `).join('');
}

// تصفية المعرض
function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // إزالة النشط من جميع الأزرار
      filterBtns.forEach(b => b.classList.remove('active'));
      // إضافة النشط للزر المختار
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');
      displayGallery(filter);
    });
  });
}

// === آراء العملاء ===
function initTestimonials() {
  const testimonialsSlider = document.getElementById('testimonialsSlider');
  if (!testimonialsSlider) return;

  // إضافة بيانات منظمة للتعليقات
  const reviewStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonialsData.map((testimonial, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": testimonial.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": testimonial.rating.toString()
        },
        "reviewBody": testimonial.text
      }
    }))
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(reviewStructuredData);
  document.head.appendChild(script);

  testimonialsSlider.innerHTML = testimonialsData.map(testimonial => `
    <div class="testimonial-item" itemscope itemtype="https://schema.org/Review">
      <div class="testimonial-text" itemprop="reviewBody">"${testimonial.text}"</div>
      <div class="testimonial-author">
        <div class="author-avatar">
          <img src="${testimonial.avatar}" alt="${testimonial.name}" itemprop="image" loading="lazy">
        </div>
        <div class="author-info">
          <h4 itemprop="author" itemscope itemtype="https://schema.org/Person">
            <span itemprop="name">${testimonial.name}</span>
          </h4>
          <span itemprop="jobTitle">${testimonial.position}</span>
        </div>
      </div>
      <div class="testimonial-rating" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
        <meta itemprop="ratingValue" content="${testimonial.rating}">
        ${generateStarRating(testimonial.rating)}
      </div>
    </div>
  `).join('');
}

// === نماذج الاتصال ===
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const messageData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    // قواعد التحقق
    const rules = {
      name: { required: true, message: 'الاسم' },
      phone: { required: true, message: 'الهاتف' },
      message: { required: true, message: 'الرسالة' }
    };
    
    const errors = validateFormData(messageData, rules);
    
    if (errors.length > 0) {
      showNotification(errors.join('\n'), 'error');
      return;
    }
    
    // إذا لا توجد أخطاء، تابع
    window.messagesManager.createMessage(messageData);
    showNotification('شكراً لك! تم استلام رسالتك وسنتواصل معك قريباً.', 'success');
    this.reset();
  });
}

// النشرة البريدية
function initNewsletter() {
  const newsletterForm = document.getElementById('newsletterForm');
  if (!newsletterForm) return;

  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;

    showNotification('شكراً للاشتراك في النشرة البريدية!', 'success');
    this.reset();
  });
}

// === النماذج المنبثقة ===
function initModals() {
  // إغلاق النماذج بالضغط على الخلفية
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      closeAllModals();
    }
  });

  // إغلاق بالضغط على Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

// دالة فتح نموذج الاستشارة
function openConsultationModal() {
    const modal = document.getElementById('consultationModal');
    if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        
        // إعادة تعيين النموذج
        const form = document.getElementById('consultationForm');
        if (form) form.reset();
        
        // التركيز على أول حقل
        setTimeout(() => {
            const firstInput = modal.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 100);
    }
}

// دالة إغلاق نموذج الاستشارة
function closeConsultationModal() {
    const modal = document.getElementById('consultationModal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }
}

// معالجة إرسال الاستشارة
function initConsultationForm() {
    const consultationForm = document.getElementById('consultationForm');
    if (!consultationForm) return;

    consultationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const consultationData = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            type: formData.get('type'),
            message: formData.get('message') || 'لا توجد تفاصيل إضافية'
        };

        // التحقق من البيانات المطلوبة
        if (!consultationData.name || !consultationData.phone) {
            showNotification('الاسم ورقم الهاتف مطلوبان', 'error');
            return;
        }

        // إرسال الاستشارة عبر واتساب
        sendConsultationToWhatsApp(consultationData);
        
        // إغلاق النموذج
        closeConsultationModal();
        
        // إعادة تعيين النموذج
        this.reset();
    });
}

// إرسال الاستشارة إلى واتساب
function sendConsultationToWhatsApp(consultationData) {
    const phoneNumber = "774274010";
    
    // إنشاء رسالة الاستشارة
    const consultationMessage = createConsultationMessage(consultationData);
    
    // إنشاء رابط واتساب
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(consultationMessage)}`;
    
    // فتح واتساب
    window.open(whatsappUrl, '_blank');
    
    // إشعار للمستخدم
    showNotification('جاري فتح واتساب لإرسال استشارتك...', 'success');
}

// إنشاء رسالة الاستشارة
function createConsultationMessage(consultationData) {
    const typeNames = {
        'curtains': 'ستائر',
        'shades': 'مضلات', 
        'mattresses': 'فراشات',
        'tents': 'مخيمات',
        'general': 'استشارة عامة'
    };

    return `📋 *طلب استشارة جديدة - الخولاني محمد*

👤 *معلومات العميل:*
• الاسم: ${consultationData.name}
• الهاتف: ${consultationData.phone}
• نوع الاستشارة: ${typeNames[consultationData.type]}

📝 *تفاصيل الاستشارة:*
${consultationData.message}

🕒 *معلومات الطلب:*
• التاريخ: ${new Date().toLocaleDateString('ar-SA')}
• الوقت: ${new Date().toLocaleTimeString('ar-SA')}

يرجى التواصل مع العميل لتحديد موعد الاستشارة! 🎯`;
}

function closeConsultationModal() {
  const modal = document.getElementById('consultationModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function openProductModal(productId) {
  const product = window.productsManager.getAll().find(p => p.id == productId);
  
  if (!product) {
    showNotification('المنتج غير موجود', 'error');
    return;
  }

  // إنشاء محتوى النموذج
  const modalContent = `
    <div class="modal-header">
      <h3 itemprop="name">${product.name}</h3>
      <button class="close-modal" onclick="closeProductModal()" aria-label="إغلاق النافذة المنبثقة">
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
    </div>
    <div class="modal-body product-modal-body">
      <div class="product-modal-grid" itemscope itemtype="https://schema.org/Product">
        <div class="product-modal-image">
          <img src="${product.image}" alt="${product.name} - ${getCategoryName(product.category)}" itemprop="image" loading="lazy">
          ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        </div>
        <div class="product-modal-details">
          <div class="product-category" itemprop="category">${getCategoryName(product.category)}</div>
          <h2 class="product-title" itemprop="name">${product.name}</h2>
          
          <div class="product-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
            ${generateStarRating(product.rating)}
            <span class="rating-text">(<span itemprop="ratingValue">${product.rating}</span>)</span>
          </div>
          
          <div class="product-price-section" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            ${product.oldPrice ? `
              <div class="product-old-price">${product.oldPrice} ر.س</div>
            ` : ''}
            <div class="product-current-price">
              <span itemprop="price" content="${product.price}">${product.price}</span>
              <span itemprop="priceCurrency" content="SAR">ر.س</span>
            </div>
          </div>
          
          <div class="product-features-modal">
            <h4>المميزات:</h4>
            <ul>
              ${product.features.map(feature => `<li itemprop="description">${feature}</li>`).join('')}
            </ul>
          </div>
          
          <div class="product-description">
            <h4>الوصف:</h4>
            <p itemprop="description">${product.description}</p>
          </div>
          
          <div class="product-stock">
            <span class="stock-label ${product.inStock ? 'in-stock' : 'out-of-stock'}" itemprop="availability" content="${product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'}">
              ${product.inStock ? '🟢 متوفر في المخزون' : '🔴 غير متوفر'}
            </span>
            ${product.stock ? `<span class="stock-count">(${product.stock} قطعة)</span>` : ''}
          </div>
          
          <div class="product-modal-actions">
            <button class="btn btn-outline" onclick="closeProductModal()" aria-label="إغلاق النافذة المنبثقة">
              <i class="fas fa-times" aria-hidden="true"></i>
              إغلاق
            </button>
            <button class="btn btn-primary" onclick="addToCart(${product.id}); closeProductModal();" aria-label="إضافة ${product.name} إلى السلة">
              <i class="fas fa-shopping-cart" aria-hidden="true"></i>
              أضف إلى السلة
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // الحصول على النموذج وتحديث محتواه
  const productModal = document.getElementById('productModal');
  const modalContentElement = productModal.querySelector('.modal-content');
  
  modalContentElement.innerHTML = modalContent;
  productModal.classList.add('active');
  productModal.setAttribute('aria-hidden', 'false');
  
  // التركيز على النموذج لمنع التمرير خلفه
  const closeButton = productModal.querySelector('.close-modal');
  if (closeButton) {
    setTimeout(() => closeButton.focus(), 100);
  }
}

function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  let stars = '';
  
  // نجوم كاملة
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star" aria-hidden="true"></i>';
  }
  
  // نصف نجمة
  if (halfStar) {
    stars += '<i class="fas fa-star-half-alt" aria-hidden="true"></i>';
  }
  
  // نجوم فارغة
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star" aria-hidden="true"></i>';
  }
  
  return stars;
}

// دالة إغلاق النموذج
function closeProductModal() {
  const productModal = document.getElementById('productModal');
  productModal.classList.remove('active');
  productModal.setAttribute('aria-hidden', 'true');
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach((modal) => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  });
}

// === الرسوم المتحركة ===
function initAnimations() {
  // استخدام Intersection Observer للرسوم المتحركة
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';

        if (entry.target.classList.contains('product-card')) {
          entry.target.classList.add('animate__fadeInUp');
        }
      }
    });
  }, observerOptions);

  // مراقبة العناصر
  document.querySelectorAll('.product-card, .stat, .gallery-item, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

// === وظائف مساعدة ===
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    
    // تحديث عنوان URL
    history.pushState(null, null, `#${sectionId}`);
  }
}

function getCategoryName(category) {
  const categories = {
    curtains: 'الستائر',
    shades: 'المضلات',
    mattresses: 'الفراشات',
    tents: 'المخيمات'
  };
  return categories[category] || category;
}

function showNotification(message, type = 'info') {
  // إزالة أي إشعارات سابقة
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.setAttribute('role', 'alert');
  notification.setAttribute('aria-live', 'polite');
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}" aria-hidden="true"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('show');
  }, 100);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

function validateFormData(formData, rules) {
  const errors = [];
  
  for (const [field, rule] of Object.entries(rules)) {
    const value = formData[field];
    
    if (rule.required && !value) {
      errors.push(`${rule.message} مطلوب`);
    }
    
    if (rule.min && value < rule.min) {
      errors.push(`${rule.message} يجب أن يكون على الأقل ${rule.min}`);
    }
    
    if (rule.pattern && !rule.pattern.test(value)) {
      errors.push(`${rule.message} غير صالح`);
    }
  }
  
  return errors;
}

// جعل الوظائف متاحة globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.clearCartItems = clearCartItems;
window.openProductModal = openProductModal;
window.openConsultationModal = openConsultationModal;
window.closeConsultationModal = closeConsultationModal;
window.scrollToSection = scrollToSection;
window.filterByCategory = filterByCategory;
