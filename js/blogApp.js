/**
 * Hemşirelik Rehberi - Blog & Klinik Kütüphane Görünüm Yöneticisi
 */
window.currentBlogCategory = 'all';

window.initBlog = function() {
    window.renderBlogCards();
};

window.filterBlogCategory = function(cat) {
    window.currentBlogCategory = cat;
    document.querySelectorAll('.blog-cat-btn').forEach(btn => {
        if (btn.getAttribute('data-cat') === cat) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    window.renderBlogCards();
};

window.renderBlogCards = function() {
    const listContainer = document.getElementById('blog-cards-grid');
    const featuredContainer = document.getElementById('blog-featured-container');
    const searchInput = document.getElementById('blog-search-input');
    if (!listContainer || !window.BLOG_DATA) return;

    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const cat = window.currentBlogCategory;

    let filtered = window.BLOG_DATA.filter(post => {
        const matchesCat = (cat === 'all' || post.category === cat);
        const matchesQuery = !query || 
            post.title.toLowerCase().includes(query) || 
            post.summary.toLowerCase().includes(query) || 
            post.category.toLowerCase().includes(query);
        return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
        if (featuredContainer) featuredContainer.innerHTML = '';
        listContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border);">
                <div style="font-size: 2.5rem; margin-bottom: 8px;">🔍</div>
                <h3 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 4px;">Aramanıza Uygun Blog Yazısı Bulunamadı</h3>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Farklı bir arama terimi deneyebilir veya kategorileri sıfırlayabilirsiniz.</p>
            </div>
        `;
        return;
    }

    // Render Featured Post (only when not searching and cat is 'all')
    if (featuredContainer) {
        if (!query && cat === 'all') {
            const feat = filtered[0];
            featuredContainer.innerHTML = `
                <div class="blog-featured-card" onclick="openBlogArticle('${feat.slug}')">
                    <div class="blog-featured-badge">${feat.coverBadge}</div>
                    <div class="blog-featured-meta">
                        <span>🏷️ ${feat.category}</span>
                        <span>⏱️ ${feat.readTime}</span>
                        <span>📅 ${feat.date}</span>
                    </div>
                    <h2 class="blog-featured-title">${feat.title}</h2>
                    <p class="blog-featured-summary">${feat.summary}</p>
                    <div class="blog-featured-footer">
                        <div class="blog-author-mini">
                            <span>${feat.authorAvatar}</span>
                            <strong>${feat.author}</strong>
                        </div>
                        <span class="blog-read-btn">Yazıyı Oku →</span>
                    </div>
                </div>
            `;
            // Remaining items for grid
            filtered = filtered.slice(1);
        } else {
            featuredContainer.innerHTML = '';
        }
    }

    // Render Cards Grid
    listContainer.innerHTML = filtered.map(post => `
        <div class="blog-card" onclick="openBlogArticle('${post.slug}')">
            <div class="blog-card-header">
                <span class="blog-card-cat">${post.category}</span>
                <span class="blog-card-time">⏱️ ${post.readTime}</span>
            </div>
            <h3 class="blog-card-title">${post.title}</h3>
            <p class="blog-card-summary">${post.summary}</p>
            <div class="blog-card-footer">
                <div class="blog-author-mini">
                    <span>${post.authorAvatar}</span>
                    <small>${post.author}</small>
                </div>
                <span class="blog-card-link">Devamını Oku →</span>
            </div>
        </div>
    `).join('');
};

window.openBlogArticle = function(slug, pushHistory = true) {
    const post = window.BLOG_DATA.find(p => p.slug === slug || p.id === slug);
    if (!post) {
        window.showBlogList(pushHistory);
        return;
    }

    const listView = document.getElementById('blog-list-view');
    const articleView = document.getElementById('blog-article-view');
    if (!listView || !articleView) return;

    // Switch to article view
    listView.style.display = 'none';
    articleView.style.display = 'block';

    // Fill elements
    document.getElementById('breadcrumb-article-title').textContent = post.title;
    document.getElementById('article-category-badge').textContent = post.category;
    document.getElementById('article-read-time').textContent = '⏱️ ' + post.readTime;
    document.getElementById('article-date').textContent = '📅 ' + post.date;
    document.getElementById('article-title').textContent = post.title;
    document.getElementById('article-author-avatar').textContent = post.authorAvatar || '👨‍⚕️';
    document.getElementById('article-author-name').textContent = post.author;
    document.getElementById('article-author-title').textContent = post.authorTitle || 'Klinik Karar Destek Uzmanı';
    document.getElementById('article-body-content').innerHTML = post.content;

    // Render related articles
    const relatedGrid = document.getElementById('blog-related-grid');
    if (relatedGrid) {
        const related = window.BLOG_DATA.filter(p => p.slug !== slug).slice(0, 2);
        relatedGrid.innerHTML = related.map(rel => `
            <div class="blog-card" onclick="openBlogArticle('${rel.slug}')">
                <div class="blog-card-header">
                    <span class="blog-card-cat">${rel.category}</span>
                    <span class="blog-card-time">⏱️ ${rel.readTime}</span>
                </div>
                <h3 class="blog-card-title">${rel.title}</h3>
                <p class="blog-card-summary">${rel.summary}</p>
                <div class="blog-card-footer">
                    <span class="blog-card-link">Yazıyı Oku →</span>
                </div>
            </div>
        `).join('');
    }

    // Push History & SEO Head Updates
    if (pushHistory) {
        const targetPath = '/blog/' + post.slug;
        try {
            if (location.pathname !== targetPath) {
                history.pushState({ tab: 'blog', articleSlug: post.slug }, '', targetPath);
            }
        } catch (e) {}
    }

    // Update document title & metadata dynamically
    document.title = `${post.title} | Hemşirelik Rehberi`;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', post.summary);

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.showBlogList = function(pushHistory = true) {
    const listView = document.getElementById('blog-list-view');
    const articleView = document.getElementById('blog-article-view');
    if (listView && articleView) {
        listView.style.display = 'block';
        articleView.style.display = 'none';
    }

    if (pushHistory) {
        try {
            if (location.pathname !== '/blog') {
                history.pushState({ tab: 'blog' }, '', '/blog');
            }
        } catch (e) {}
    }

    document.title = 'Hemşirelik Blogu & Klinik Rehberler | Hemşirelik Rehberi';
    window.renderBlogCards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
