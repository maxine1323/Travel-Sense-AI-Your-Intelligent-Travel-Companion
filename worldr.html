<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Hotel Finder - 全球酒店搜尋</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- 整合 hotel.css.docx 的內容 -->
    <style>
        .hotel-card {
            transition: all 0.3s ease;
        }
        .hotel-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .modal-backdrop {
            backdrop-filter: blur(4px);
        }
        .search-input:focus {
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .tag-button {
            transition: all 0.2s ease;
        }
        .tag-button:hover {
            transform: scale(1.05);
        }
        .price-comparison {
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
        }
        .card-enter {
            animation: cardEnter 0.5s ease-out forwards;
        }
        @keyframes cardEnter {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .line-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .continent-section {
            border-left: 4px solid #3B82F6;
            padding-left: 1rem;
            margin-bottom: 1rem;
        }
        .filter-chip {
            transition: all 0.2s ease;
        }
        .filter-chip:hover {
            transform: translateY(-1px);
        }
        .heart-icon {
            transition: all 0.2s ease;
        }
        .heart-icon.favorited {
            background: rgba(255, 255, 255, 0.9) !important;
            transform: scale(1.1);
        }
        .visited-badge {
            background: linear-gradient(135deg, #10B981, #059669);
        }
        .type-badge {
            font-size: 0.75rem;
            font-weight: 600;
        }
        .amenity-tag {
            background: rgba(59, 130, 246, 0.1);
            color: #1D4ED8;
            border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .social-share-btn {
            transition: all 0.2s ease;
        }
        .social-share-btn:hover {
            transform: translateY(-2px);
        }
    </style>

</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
    <!-- Header (已修正響應式) -->
    <header class="bg-white shadow-lg border-b-4 border-blue-500 sticky top-0 z-40">
        <div class="container mx-auto px-6 py-4">
            <!-- 
              【版面修正】
              - flex-col 讓手機版垂直堆疊
              - md:flex-row 讓電腦版水平排列
            -->
            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                
                <!-- 
                  【版面修正】
                  - 左側 Logo 和標籤群組
                  - flex-col 讓 icon 和標籤在小螢幕垂直堆疊
                  - sm:flex-row 在稍大螢幕變水平
                -->
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full md:w-auto">
                    <!-- 修正：加上 text-center sm:text-left 讓 icon 在堆疊時置中 -->
                    <div class="text-3xl text-center sm:text-left"> 🏨 </div>
                    <!-- 
                      【版面修正】
                      - 標籤群組
                      - justify-center 讓標籤在手機上置中
                    -->
                    <div class="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 lg:gap-6">
                        <span
                            class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition-colors whitespace-nowrap text-sm"
                            data-translate="title">Global Hotel Finder</span>
                        <span
                            class="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium hover:bg-pink-200 transition-colors whitespace-nowrap text-sm"
                            data-translate="my_collection_header">My Collection</span>
                        <span
                            class="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium hover:bg-green-200 transition-colors whitespace-nowrap text-sm"
                            data-translate="cities_continents">57 Cities • 6 Continents</span>
                    </div>
                </div>
                
                <!-- 
                  【版面修正】
                  - 右側按鈕區
                  - flex-wrap 允許換行
                  - justify-center 手機置中
                  - md:justify-end 電腦靠右
                  - mt-4 md:mt-0 手機版時增加上方間距
                -->
                <div class="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-4 mt-4 md:mt-0">
                    <button id="analyticsBtn"
                        class="flex items-center space-x-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        <i class="fas fa-chart-bar"></i>
                        <span data-translate="analytics">Analytics</span>
                    </button>
                    <button id="myCollectionBtn"
                        class="flex items-center space-x-2 bg-pink-600 text-white px-3 py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm whitespace-nowrap">
                        <i class="fas fa-heart"></i>
                        <span data-translate="my_collection">My Collection</span>
                    </button>
                    <!-- 
                      【版面修正】
                      - space-x-2 改為 gap-2 保持一致性
                    -->
                    <div class="flex items-center gap-2">
                        <label class="text-sm font-medium text-gray-600" data-translate="language">Language:</label>
                        <select id="languageSelect"
                            class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                            <option value="en">English</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                            <option value="ja">日本語</option>
                            <option value="zh">繁體中文</option>
                            <option value="ko"> 한국어 </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="container mx-auto px-6 py-8">
        <!-- Advanced Filters Section -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-semibold text-gray-800" data-translate="filters">Advanced Search & Filters</h2>
                <button id="resetFilters" class="text-blue-600 hover:text-blue-800 font-medium"
                    data-translate="reset_filters">Reset All Filters</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Search -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700" data-translate="search">Search Hotels</label>
                    <div class="relative">
                        <input type="text" id="searchInput"
                            class="search-input w-full px-4 py-2 pl-10 pr-20 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            data-translate-placeholder="search_placeholder">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-search text-gray-400"></i>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center space-x-1 pr-2">
                            <button id="clearSearch" class="text-gray-400 hover:text-gray-600 p-1 rounded-full"
                                style="display: none;" onclick="clearSearch()">
                                <i class="fas fa-times"></i>
                            </button>
                            <button id="searchBtn"
                                class="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors text-sm"
                                onclick="performSearch()">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Continent Filter -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700" data-translate="continent">Continent</label>
                    <select id="continentFilter"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="" data-translate="all_continents">All Continents</option>
                    </select>
                </div>
                <!-- City Filter -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700" data-translate="city">City</label>
                    <select id="cityFilter"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="" data-translate="all_cities">All Cities</option>
                    </select>
                </div>
                <!-- Hotel Type Filter -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700" data-translate="hotel_type">Hotel
                        Type</label>
                    <select id="typeFilter"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="" data-translate="all_types">All Types</option>
                        <option value="five_star" data-translate="five_star">5-Star Hotel</option>
                        <option value="local_hotel" data-translate="local_hotel">Local Hotel</option>
                        <option value="secret_hotel" data-translate="secret_hotel">Secret Hotel</option>
                    </select>
                </div>
                <!-- Price Range -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700" data-translate="price_range">Price
                        Range</label>
                    <div class="flex space-x-2">
                        <input type="number" id="minPrice" placeholder="Min"
                            class="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <input type="number" id="maxPrice" placeholder="Max"
                            class="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                </div>
                <!-- Rating Filter -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700" data-translate="min_rating">Minimum
                        Rating</label>
                    <select id="ratingFilter"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="" data-translate="any_rating">Any Rating</option>
                        <option value="4.5">4.5+  ⭐⭐⭐⭐⭐ </option>
                        <option value="4.0">4.0+  ⭐⭐⭐⭐ </option>
                        <option value="3.5">3.5+  ⭐⭐⭐ </option>
                        <option value="3.0">3.0+  ⭐⭐ </option>
                    </select>
                </div>
                <!-- Sort -->
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700" data-translate="sort_by">Sort By</label>
                    <select id="sortFilter"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="name" data-translate="sort_name">Name</option>
                        <option value="price_low" data-translate="sort_price_low">Price: Low to High</option>
                        <option value="price_high" data-translate="sort_price_high">Price: High to Low</option>
                        <option value="rating" data-translate="sort_rating">Rating</option>
                        <option value="popularity" data-translate="sort_popularity">Popularity</option>
                    </select>
                </div>
                <!-- Show Visited Only -->
                <div class="space-y-2">
                    <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" id="showVisitedOnly"
                            class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500">
                        <span class="text-sm font-medium text-gray-700" data-translate="show_visited_only">Show Visited
                            Only</span>
                    </label>
                </div>
            </div>
            <!-- Active Filters Display -->
            <div id="activeFilters" class="mt-4 flex flex-wrap gap-2" style="display: none;">
                <span class="text-sm font-medium text-gray-600 mr-2" data-translate="active_filters">Active
                    Filters:</span>
            </div>
            <!-- Popular Search Tags -->
            <div class="mt-6">
                <h3 class="text-sm font-medium text-gray-700 mb-3" data-translate="popular_searches">Popular Searches
                </h3>
                <div class="flex flex-wrap gap-2" id="popularTags"></div>
            </div>
        </div>
        <!-- Statistics Dashboard -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-xl shadow-lg p-6">
                <div class="flex items-center">
                    <div class="text-3xl mr-4"> 🏨 </div>
                    <div>
                        <div class="text-2xl font-bold text-blue-600" id="totalHotels">0</div>
                        <div class="text-sm text-gray-600" data-translate="total_hotels">Total Hotels</div>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6">
                <div class="flex items-center">
                    <div class="text-3xl mr-4"> 💰 </div>
                    <div>
                        <div class="text-2xl font-bold text-green-600" id="avgPrice">$0</div>
                        <div class="text-sm text-gray-600" data-translate="avg_price">Average Price</div>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6">
                <div class="flex items-center">
                    <div class="text-3xl mr-4"> ⭐ </div>
                    <div>
                        <div class="text-2xl font-bold text-purple-600" id="avgRating">0.0</div>
                        <div class="text-sm text-gray-600" data-translate="avg_rating">Average Rating</div>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6">
                <div class="flex items-center">
                    <div class="text-3xl mr-4"> ✅ </div>
                    <div>
                        <div class="text-2xl font-bold text-orange-600" id="visitedCount">0</div>
                        <div class="text-sm text-gray-600" data-translate="visited">Visited</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Results -->
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-800" data-translate="available_hotels">Available Hotels</h2>
            <div class="text-sm text-gray-600" id="resultsCount">0 hotels found</div>
        </div>
        <!-- Hotel Cards Grid -->
        <div id="hotelGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>
        <!-- Load More Button -->
        <div class="text-center mt-8">
            <button id="loadMoreBtn"
                class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                style="display: none;" onclick="loadMoreHotels()">
                <span data-translate="load_more">Load More Hotels</span>
                <span id="loadMoreCount"></span>
            </button>
        </div>
    </div>
    <!-- Hotel Details Modal -->
    <div id="hotelModal"
        class="fixed inset-0 bg-black bg-opacity-50 modal-backdrop hidden z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <h2 id="modalTitle" class="text-2xl font-bold text-gray-800"></h2>
                    <button id="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                </div>
                <div id="modalContent"></div>
            </div>
        </div>
    </div>
    <!-- My Collection Modal -->
    <div id="collectionModal"
        class="fixed inset-0 bg-black bg-opacity-50 modal-backdrop hidden z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-800" data-translate="my_collection">My Collection</h2>
                    <button id="closeCollection" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                </div>
                <!-- Collection Tabs -->
                <div class="flex space-x-4 mb-6 border-b">
                    <button id="favoritesTab"
                        class="collection-tab px-4 py-2 font-medium border-b-2 border-pink-500 text-pink-600"
                        onclick="showCollectionTab('favorites')">
                        <i class="fas fa-heart mr-2"></i>
                        <span data-translate="favorites">Favorites</span>
                        <span id="favoritesCount"
                            class="ml-2 bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">0</span>
                    </button>
                    <button id="visitedTab"
                        class="collection-tab px-4 py-2 font-medium text-gray-600 hover:text-gray-800"
                        onclick="showCollectionTab('visited')">
                        <i class="fas fa-check-circle mr-2"></i>
                        <span data-translate="visited_hotels">Visited</span>
                        <span id="visitedTabCount"
                            class="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">0</span>
                    </button>
                    <button id="bookedTab"
                        class="collection-tab px-4 py-2 font-medium text-gray-600 hover:text-gray-800"
                        onclick="showCollectionTab('booked')">
                        <i class="fas fa-calendar-check mr-2"></i>
                        <span data-translate="booked_hotels">Booked</span>
                        <span id="bookedCount"
                            class="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">0</span>
                    </button>
                </div>
                <!-- Collection Content -->
                <div id="collectionContent" class="min-h-[400px]">
                    <!-- Content will be dynamically loaded here -->
                </div>
            </div>
        </div>
    </div>
    <!-- Analytics Modal -->
    <div id="analyticsModal"
        class="fixed inset-0 bg-black bg-opacity-50 modal-backdrop hidden z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-800" data-translate="analytics_dashboard">Analytics
                        Dashboard</h2>
                    <button id="closeAnalytics" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                </div>
                <!-- Charts Section -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4" data-translate="continent_distribution">
                            Hotels by Continent</h3>
                        <div class="w-full h-64">
                            <canvas id="continentChart"></canvas>
                        </div>
                    </div>
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4" data-translate="price_distribution">Price
                            Distribution</h3>
                        <div class="w-full h-64">
                            <canvas id="priceChart"></canvas>
                        </div>
                    </div>
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Hotel Types</h3>
                        <div class="w-full h-64">
                            <canvas id="typeChart"></canvas>
                        </div>
                    </div>
                </div>
                <!-- Additional Charts Row -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Top Cities by Hotel Count</h3>
                        <div class="w-full h-64">
                            <canvas id="cityChart"></canvas>
                        </div>
                    </div>
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Rating Distribution</h3>
                        <div class="w-full h-64">
                            <canvas id="ratingChart"></canvas>
                        </div>
                    </div>
                </div>
                <!-- Detailed Data Table -->
                <div class="bg-gray-50 rounded-xl p-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4" data-translate="detailed_stats">Detailed
                        Statistics</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="border-b">
                                    <th class="text-left py-2" data-translate="continent">Continent</th>
                                    <th class="text-left py-2" data-translate="cities">Cities</th>
                                    <th class="text-left py-2" data-translate="hotels">Hotels</th>
                                    <th class="text-left py-2" data-translate="avg_price">Avg Price</th>
                                    <th class="text-left py-2" data-translate="avg_rating">Avg Rating</th>
                                </tr>
                            </thead>
                            <tbody id="statsTableBody">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 整合 hotel..js.docx 的內容 -->
    <script type="module">
        // Global Configuration
        const CONFIG = {
            DEBOUNCE_DELAY: 300,
            ITEMS_PER_PAGE: 8,
            FALLBACK_IMAGE: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkFGQUZBIi8+CjwhLS0gQmVkIC0tPgo8cmVjdCB4PSI4MCIgeT0iMTQwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0Y5RkJGRiIgc3Ryb2tlPSIjRDFENUREIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iODAiIHk9IjEyMCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0iI0VGNDQ0NCIvPgo8IS0tIFBpbGxvd3MgLS0+CjxjaXJjbGUgY3g9IjEyMCIgY3k9IjEzMCIgcj0iMTUiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0QxRDVEQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEzMCIgcj0iMTUiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0QxRDVEQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjwhLS0gTGFtcCAtLT4KPHJlY3QgeD0iMzMwIiB5PSI4MCIgd2lkdGg9IjQiIGhlaWdodD0iNjAiIGZpbGw9IiM2QjcyODAiLz4KPGVsbGlwc2UgY3g9IjMzMiIgY3k9IjcwIiByeD0iMjAiIHJ5PSIxNSIgZmlsbD0iI0ZCRkRGRiIgc3Ryb2tlPSIjRDFENUREIiBzdHJva2Utd2lkdGg9IjIiLz4KPCEtLSBXaW5kb3cgLS0+CjxyZWN0IHg9IjMwIiB5PSI0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRERGNEZGIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIvPgo8bGluZSB4MT0iNzAiIHkxPSI0MCIgeDI9IjcwIiB5Mj0iMTAwIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIvPgo8bGluZSB4MT0iMzAiIHkxPSI3MCIgeDI9IjExMCIgeTI9IjcwIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjI3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlDQTNBRiIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIj5Ib3RlbCBJbnRlcmlvcjwvdGV4dD4KPC9zdmc+'
        };
        // World Data Structure (50+ Cities across 6 Continents)
        const WORLD_DATA = {
            africa: {
                cities: {
                    cairo: { country: 'Egypt', currency: 'EGP', rate: 31.0 },
                    nairobi: { country: 'Kenya', currency: 'KES', rate: 150.0 },
                    johannesburg: { country: 'South Africa', currency: 'ZAR', rate: 18.5 },
                    casablanca: { country: 'Morocco', currency: 'MAD', rate: 10.2 },
                    lagos: { country: 'Nigeria', currency: 'NGN', rate: 460.0 },
                    addis_ababa: { country: 'Ethiopia', currency: 'ETB', rate: 55.0 },
                    tunis: { country: 'Tunisia', currency: 'TND', rate: 3.1 },
                    accra: { country: 'Ghana', currency: 'GHS', rate: 12.0 }
                }
            },
            asia: {
                cities: {
                    tokyo: { country: 'Japan', currency: 'JPY', rate: 150.0 },
                    seoul: { country: 'South Korea', currency: 'KRW', rate: 1320.0 },
                    bangkok: { country: 'Thailand', currency: 'THB', rate: 36.0 },
                    singapore: { country: 'Singapore', currency: 'SGD', rate: 1.35 },
                    mumbai: { country: 'India', currency: 'INR', rate: 83.0 },
                    taipei: { country: 'Taiwan', currency: 'TWD', rate: 31.5 },
                    beijing: { country: 'China', currency: 'CNY', rate: 7.2 },
                    shanghai: { country: 'China', currency: 'CNY', rate: 7.2 },
                    hong_kong: { country: 'Hong Kong', currency: 'HKD', rate: 7.8 },
                    kuala_lumpur: { country: 'Malaysia', currency: 'MYR', rate: 4.7 },
                    jakarta: { country: 'Indonesia', currency: 'IDR', rate: 15800.0 },
                    manila: { country: 'Philippines', currency: 'PHP', rate: 56.0 },
                    ho_chi_minh: { country: 'Vietnam', currency: 'VND', rate: 24000.0 },
                    dubai: { country: 'UAE', currency: 'AED', rate: 3.67 },
                    doha: { country: 'Qatar', currency: 'QAR', rate: 3.64 },
                    riyadh: { country: 'Saudi Arabia', currency: 'SAR', rate: 3.75 },
                    tel_aviv: { country: 'Israel', currency: 'ILS', rate: 3.7 },
                    istanbul: { country: 'Turkey', currency: 'TRY', rate: 29.0 }
                }
            },
            europe: {
                cities: {
                    paris: { country: 'France', currency: 'EUR', rate: 0.85 },
                    london: { country: 'United Kingdom', currency: 'GBP', rate: 0.73 },
                    rome: { country: 'Italy', currency: 'EUR', rate: 0.85 },
                    berlin: { country: 'Germany', currency: 'EUR', rate: 0.85 },
                    moscow: { country: 'Russia', currency: 'RUB', rate: 90.0 },
                    madrid: { country: 'Spain', currency: 'EUR', rate: 0.85 },
                    barcelona: { country: 'Spain', currency: 'EUR', rate: 0.85 },
                    amsterdam: { country: 'Netherlands', currency: 'EUR', rate: 0.85 },
                    zurich: { country: 'Switzerland', currency: 'CHF', rate: 0.92 },
                    vienna: { country: 'Austria', currency: 'EUR', rate: 0.85 },
                    prague: { country: 'Czech Republic', currency: 'CZK', rate: 23.0 },
                    stockholm: { country: 'Sweden', currency: 'SEK', rate: 10.8 },
                    copenhagen: { country: 'Denmark', currency: 'DKK', rate: 6.9 },
                    oslo: { country: 'Norway', currency: 'NOK', rate: 10.9 },
                    helsinki: { country: 'Finland', currency: 'EUR', rate: 0.85 },
                    warsaw: { country: 'Poland', currency: 'PLN', rate: 4.3 },
                    budapest: { country: 'Hungary', currency: 'HUF', rate: 360.0 },
                    athens: { country: 'Greece', currency: 'EUR', rate: 0.85 },
                    lisbon: { country: 'Portugal', currency: 'EUR', rate: 0.85 }
                }
            },
            north_america: {
                cities: {
                    newyork: { country: 'United States', currency: 'USD', rate: 1.0 },
                    los_angeles: { country: 'United States', currency: 'USD', rate: 1.0 },
                    chicago: { country: 'United States', currency: 'USD', rate: 1.0 },
                    miami: { country: 'United States', currency: 'USD', rate: 1.0 },
                    las_vegas: { country: 'United States', currency: 'USD', rate: 1.0 },
                    san_francisco: { country: 'United States', currency: 'USD', rate: 1.0 },
                    toronto: { country: 'Canada', currency: 'CAD', rate: 1.35 },
                    vancouver: { country: 'Canada', currency: 'CAD', rate: 1.35 },
                    montreal: { country: 'Canada', currency: 'CAD', rate: 1.35 },
                    mexico_city: { country: 'Mexico', currency: 'MXN', rate: 17.0 },
                    cancun: { country: 'Mexico', currency: 'MXN', rate: 17.0 },
                    havana: { country: 'Cuba', currency: 'CUP', rate: 24.0 }
                }
            },
            south_america: {
                cities: {
                    sao_paulo: { country: 'Brazil', currency: 'BRL', rate: 5.0 },
                    rio_de_janeiro: { country: 'Brazil', currency: 'BRL', rate: 5.0 },
                    buenos_aires: { country: 'Argentina', currency: 'ARS', rate: 350.0 },
                    lima: { country: 'Peru', currency: 'PEN', rate: 3.7 },
                    santiago: { country: 'Chile', currency: 'CLP', rate: 900.0 },
                    bogota: { country: 'Colombia', currency: 'COP', rate: 4200.0 },
                    caracas: { country: 'Venezuela', currency: 'VES', rate: 36.0 },
                    quito: { country: 'Ecuador', currency: 'USD', rate: 1.0 },
                    montevideo: { country: 'Uruguay', currency: 'UYU', rate: 39.0 }
                }
            },
            oceania: {
                cities: {
                    sydney: { country: 'Australia', currency: 'AUD', rate: 1.5 },
                    melbourne: { country: 'Australia', currency: 'AUD', rate: 1.5 },
                    brisbane: { country: 'Australia', currency: 'AUD', rate: 1.5 },
                    perth: { country: 'Australia', currency: 'AUD', rate: 1.5 },
                    auckland: { country: 'New Zealand', currency: 'NZD', rate: 1.6 },
                    wellington: { country: 'New Zealand', currency: 'NZD', rate: 1.6 },
                    suva: { country: 'Fiji', currency: 'FJD', rate: 2.2 },
                    port_moresby: { country: 'Papua New Guinea', currency: 'PGK', rate: 3.5 }
                }
            }
        };
        // Enhanced translations with 5 languages
        const TRANSLATIONS = {
            en: {
                title: "Global Hotel Finder",
                language: "Language:",
                analytics: "Analytics",
                filters: "Advanced Search & Filters",
                reset_filters: "Reset All Filters",
                search: "Search Hotels",
                search_placeholder: "Search by name, city, keywords, or price range...",
                continent: "Continent",
                all_continents: "All Continents",
                city: "City",
                all_cities: "All Cities",
                hotel_type: "Hotel Type",
                all_types: "All Types",
                five_star: "5-Star Hotel",
                local_hotel: "Local Hotel",
                secret_hotel: "Secret Hotel",
                price_range: "Price Range",
                min_rating: "Minimum Rating",
                any_rating: "Any Rating",
                sort_by: "Sort By",
                sort_name: "Name",
                sort_price_low: "Price: Low to High",
                sort_price_high: "Price: High to Low",
                sort_rating: "Rating",
                sort_popularity: "Popularity",
                show_visited_only: "Show Visited Only",
                active_filters: "Active Filters",
                popular_searches: "Popular Searches",
                total_hotels: "Total Hotels",
                avg_price: "Average Price",
                avg_rating: "Average Rating",
                visited: "Visited",
                available_hotels: "Available Hotels",
                load_more: "Load More Hotels",
                analytics_dashboard: "Analytics Dashboard",
                continent_distribution: "Hotels by Continent",
                price_distribution: "Price Distribution",
                detailed_stats: "Detailed Statistics",
                cities: "Cities",
                hotels: "Hotels",
                book_now: "Book Now",
                view_details: "View Details",
                close: "Close",
                night: "night",
                rating: "Rating",
                amenities: "Amenities",
                description: "Description",
                popular_spots: "Popular Spots Nearby",
                compare_prices: "Compare Prices",
                share: "Share",
                add_to_favorites: "Add to Favorites",
                remove_from_favorites: "Remove from Favorites",
                mark_visited: "Mark as Visited",
                continents: {
                    africa: "Africa",
                    asia: "Asia",
                    europe: "Europe",
                    north_america: "North America",
                    south_america: "South America",
                    oceania: "Oceania"
                },
                tags: {
                    luxury: "Luxury",
                    spa: "Spa",
                    business: "Business",
                    family: "Family",
                    romantic: "Romantic",
                    beach: "Beach"
                },
                booking_processing: "Processing booking...",
                booking_confirmed: "Booking confirmed!",
                booking_success: "✓ Booked",
                added_to_favorites: "Added to favorites!",
                removed_from_favorites: "Removed from favorites",
                search_button: "Search",
                clear_search: "Clear",
                my_collection: "My Collection",
                my_collection_header: "My Collection",
                cities_continents: "57 Cities • 6 Continents",
                favorites: "Favorites",
                visited_hotels: "Visited Hotels",
                booked_hotels: "Booked Hotels",
                no_favorites: "No favorite hotels yet",
                no_visited: "No visited hotels yet",
                no_booked: "No booked hotels yet",
                add_some_favorites: "Start exploring and add some hotels to your favorites!",
                visit_some_hotels: "Mark hotels as visited when you travel!",
                book_some_hotels: "Book some hotels to see them here!",
                remove_from_collection: "Remove from collection",
                view_on_map: "View on Map",
                export_list: "Export List"
            },
            zh: {
                title: "全球酒店搜尋",
                language: "語言:",
                analytics: "分析",
                filters: "進階搜尋與篩選",
                reset_filters: "重置所有篩選",
                search: "搜尋酒店",
                search_placeholder: "按名稱、城市、關鍵詞或價格區間搜尋...",
                continent: "大洲",
                all_continents: "所有大洲",
                city: "城市",
                all_cities: "所有城市",
                hotel_type: "酒店類型",
                all_types: "所有類型",
                five_star: "五星級酒店",
                local_hotel: "當地酒店",
                secret_hotel: "秘密酒店",
                price_range: "價格範圍",
                min_rating: "最低評分",
                any_rating: "任何評分",
                sort_by: "排序方式",
                sort_name: "名稱",
                sort_price_low: "價格：低至高",
                sort_price_high: "價格：高至低",
                sort_rating: "評分",
                sort_popularity: "人氣",
                show_visited_only: "僅顯示已造訪",
                active_filters: "已啟用篩選",
                popular_searches: "熱門搜尋",
                total_hotels: "總酒店數",
                avg_price: "平均價格",
                avg_rating: "平均評分",
                visited: "已造訪",
                available_hotels: "可預訂酒店",
                load_more: "載入更多酒店",
                analytics_dashboard: "分析儀表板",
                continent_distribution: "各大洲酒店分佈",
                price_distribution: "價格分佈",
                detailed_stats: "詳細統計",
                cities: "城市",
                hotels: "酒店",
                book_now: "立即預訂",
                view_details: "查看詳情",
                close: "關閉",
                night: "晚",
                rating: "評分",
                amenities: "設施",
                description: "描述",
                popular_spots: "附近熱門景點",
                compare_prices: "價格比較",
                share: "分享",
                add_to_favorites: "加入收藏",
                remove_from_favorites: "移除收藏",
                mark_visited: "標記為已造訪",
                continents: {
                    africa: "非洲",
                    asia: "亞洲",
                    europe: "歐洲",
                    north_america: "北美洲",
                    south_america: "南美洲",
                    oceania: "大洋洲"
                },
                tags: {
                    luxury: "奢華",
                    spa: "水療",
                    business: "商務",
                    family: "家庭",
                    romantic: "浪漫",
                    beach: "海灘"
                },
                booking_processing: "正在處理預訂...",
                booking_confirmed: "預訂確認！",
                booking_success: "✓ 已預訂",
                added_to_favorites: "已加入收藏！",
                removed_from_favorites: "已移除收藏",
                search_button: "搜尋",
                clear_search: "清除",
                my_collection: "我的收藏",
                my_collection_header: "我的收藏",
                cities_continents: "57個城市 • 6大洲",
                favorites: "收藏清單",
                visited_hotels: "造訪過的酒店",
                booked_hotels: "已預訂酒店",
                no_favorites: "尚未收藏任何酒店",
                no_visited: "尚未造訪任何酒店",
                no_booked: "尚未預訂任何酒店",
                add_some_favorites: "開始探索並將酒店加入收藏吧！",
                visit_some_hotels: "旅行時記得標記造訪過的酒店！",
                book_some_hotels: "預訂一些酒店來查看它們！",
                remove_from_collection: "從收藏中移除",
                view_on_map: "在地圖上查看",
                export_list: "匯出清單"
            },
            fr: {
                title: "Recherche d'Hôtels Mondiale",
                language: "Langue:",
                analytics: "Analyses",
                filters: "Recherche et Filtres Avancés",
                reset_filters: "Réinitialiser Tous les Filtres",
                search: "Rechercher des Hôtels",
                search_placeholder: "Rechercher par nom, ville, mots-clés ou gamme de prix...",
                continent: "Continent",
                all_continents: "Tous les Continents",
                city: "Ville",
                all_cities: "Toutes les Villes",
                hotel_type: "Type d'Hôtel",
                all_types: "Tous les Types",
                five_star: "Hôtel 5 Étoiles",
                local_hotel: "Hôtel Local",
                secret_hotel: "Hôtel Secret",
                price_range: "Gamme de Prix",
                min_rating: "Note Minimale",
                any_rating: "Toute Note",
                sort_by: "Trier par",
                sort_name: "Nom",
                sort_price_low: "Prix: Bas à Élevé",
                sort_price_high: "Prix: Élevé à Bas",
                sort_rating: "Note",
                sort_popularity: "Popularité",
                show_visited_only: "Afficher Seulement les Visités",
                active_filters: "Filtres Actifs",
                popular_searches: "Recherches Populaires",
                total_hotels: "Total des Hôtels",
                avg_price: "Prix Moyen",
                avg_rating: "Note Moyenne",
                visited: "Visités",
                available_hotels: "Hôtels Disponibles",
                load_more: "Charger Plus d'Hôtels",
                analytics_dashboard: "Tableau de Bord Analytique",
                continent_distribution: "Hôtels par Continent",
                price_distribution: "Distribution des Prix",
                detailed_stats: "Statistiques Détaillées",
                cities: "Villes",
                hotels: "Hôtels",
                book_now: "Réserver Maintenant",
                view_details: "Voir les Détails",
                close: "Fermer",
                night: "nuit",
                rating: "Note",
                amenities: "Équipements",
                description: "Description",
                popular_spots: "Lieux Populaires à Proximité",
                compare_prices: "Comparer les Prix",
                share: "Partager",
                add_to_favorites: "Ajouter aux Favoris",
                remove_from_favorites: "Retirer des Favoris",
                mark_visited: "Marquer comme Visité",
                continents: {
                    africa: "Afrique",
                    asia: "Asie",
                    europe: "Europe",
                    north_america: "Amérique du Nord",
                    south_america: "Amérique du Sud",
                    oceania: "Océanie"
                },
                tags: {
                    luxury: "Luxe",
                    spa: "Spa",
                    business: "Affaires",
                    family: "Famille",
                    romantic: "Romantique",
                    beach: "Plage"
                },
                booking_processing: "Traitement de la réservation...",
                booking_confirmed: "Réservation confirmée !",
                booking_success: "✓ Réservé",
                added_to_favorites: "Ajouté aux favoris !",
                removed_from_favorites: "Retiré des favoris",
                search_button: "Rechercher",
                clear_search: "Effacer",
                my_collection: "Ma Collection",
                my_collection_header: "Ma Collection",
                cities_continents: "57 Villes • 6 Continents",
                favorites: "Favoris",
                visited_hotels: "Hôtels Visités",
                booked_hotels: "Hôtels Réservés",
                no_favorites: "Aucun hôtel favori pour le moment",
                no_visited: "Aucun hôtel visité pour le moment",
                no_booked: "Aucun hôtel réservé pour le moment",
                add_some_favorites: "Commencez à explorer et ajoutez des hôtels à vos favoris !",
                visit_some_hotels: "Marquez les hôtels comme visités lors de vos voyages !",
                book_some_hotels: "Réservez des hôtels pour les voir ici !",
                remove_from_collection: "Retirer de la collection",
                view_on_map: "Voir sur la carte",
                export_list: "Exporter la liste"
            },
            de: {
                title: "Globale Hotelsuche",
                language: "Sprache:",
                analytics: "Analysen",
                filters: "Erweiterte Suche & Filter",
                reset_filters: "Alle Filter Zurücksetzen",
                search: "Hotels Suchen",
                search_placeholder: "Nach Name, Stadt, Stichwörtern oder Preisbereich suchen...",
                continent: "Kontinent",
                all_continents: "Alle Kontinente",
                city: "Stadt",
                all_cities: "Alle Städte",
                hotel_type: "Hoteltyp",
                all_types: "Alle Typen",
                five_star: "5-Sterne Hotel",
                local_hotel: "Lokales Hotel",
                secret_hotel: "Geheimes Hotel",
                price_range: "Preisbereich",
                min_rating: "Mindestbewertung",
                any_rating: "Jede Bewertung",
                sort_by: "Sortieren nach",
                sort_name: "Name",
                sort_price_low: "Preis: Niedrig zu Hoch",
                sort_price_high: "Preis: Hoch zu Niedrig",
                sort_rating: "Bewertung",
                sort_popularity: "Beliebtheit",
                show_visited_only: "Nur Besuchte Anzeigen",
                active_filters: "Aktive Filter",
                popular_searches: "Beliebte Suchen",
                total_hotels: "Gesamte Hotels",
                avg_price: "Durchschnittspreis",
                avg_rating: "Durchschnittsbewertung",
                visited: "Besucht",
                available_hotels: "Verfügbare Hotels",
                load_more: "Mehr Hotels Laden",
                analytics_dashboard: "Analyse-Dashboard",
                continent_distribution: "Hotels nach Kontinent",
                price_distribution: "Preisverteilung",
                detailed_stats: "Detaillierte Statistiken",
                cities: "Städte",
                hotels: "Hotels",
                book_now: "Jetzt Buchen",
                view_details: "Details Anzeigen",
                close: "Schließen",
                night: "Nacht",
                rating: "Bewertung",
                amenities: "Ausstattung",
                description: "Beschreibung",
                popular_spots: "Beliebte Orte in der Nähe",
                compare_prices: "Preise Vergleichen",
                share: "Teilen",
                add_to_favorites: "Zu Favoriten Hinzufügen",
                remove_from_favorites: "Aus Favoriten Entfernen",
                mark_visited: "Als Besucht Markieren",
                continents: {
                    africa: "Afrika",
                    asia: "Asien",
                    europe: "Europa",
                    north_america: "Nordamerika",
                    south_america: "Südamerika",
                    oceania: "Ozeanien"
                },
                tags: {
                    luxury: "Luxus",
                    spa: "Spa",
                    business: "Business",
                    family: "Familie",
                    romantic: "Romantisch",
                    beach: "Strand"
                },
                booking_processing: "Buchung wird bearbeitet...",
                booking_confirmed: "Buchung bestätigt!",
                booking_success: "✓ Gebucht",
                added_to_favorites: "Zu Favoriten hinzugefügt!",
                removed_from_favorites: "Aus Favoriten entfernt",
                search_button: "Suchen",
                clear_search: "Löschen",
                my_collection: "Meine Sammlung",
                my_collection_header: "Meine Sammlung",
                cities_continents: "57 Städte • 6 Kontinente",
                favorites: "Favoriten",
                visited_hotels: "Besuchte Hotels",
                booked_hotels: "Gebuchte Hotels",
                no_favorites: "Noch keine Lieblingshotels",
                no_visited: "Noch keine besuchten Hotels",
                no_booked: "Noch keine gebuchten Hotels",
                add_some_favorites: "Beginnen Sie zu erkunden und fügen Sie Hotels zu Ihren Favoriten hinzu!",
                visit_some_hotels: "Markieren Sie Hotels als besucht, wenn Sie reisen!",
                book_some_hotels: "Buchen Sie Hotels, um sie hier zu sehen!",
                remove_from_collection: "Aus Sammlung entfernen",
                view_on_map: "Auf Karte anzeigen",
                export_list: "Liste exportieren"
            },
            ko: {
                title: " 글로벌   호텔   찾기 ",
                language: " 언어 :",
                analytics: " 분석 ",
                filters: " 고급   검색   및   필터 ",
                reset_filters: " 모든   필터   초기화 ",
                search: " 호텔   검색 ",
                search_placeholder: " 이름 ,  도시 ,  키워드   또는   가격   범위로   검색 ...",
                continent: " 대륙 ",
                all_continents: " 모든   대륙 ",
                city: " 도시 ",
                all_cities: " 모든   도시 ",
                hotel_type: " 호텔   유형 ",
                all_types: " 모든   유형 ",
                five_star: "5 성급   호텔 ",
                local_hotel: " 현지   호텔 ",
                secret_hotel: " 비밀   호텔 ",
                price_range: " 가격   범위 ",
                min_rating: " 최소   평점 ",
                any_rating: " 모든   평점 ",
                sort_by: " 정렬   기준 ",
                sort_name: " 이름 ",
                sort_price_low: " 가격 :  낮은   순 ",
                sort_price_high: " 가격 :  높은   순 ",
                sort_rating: " 평점 ",
                sort_popularity: " 인기순 ",
                show_visited_only: " 방문한   곳만   보기 ",
                active_filters: " 활성   필터 ",
                popular_searches: " 인기   검색어 ",
                total_hotels: " 총   호텔   수 ",
                avg_price: " 평균   가격 ",
                avg_rating: " 평균   평점 ",
                visited: " 방문함 ",
                available_hotels: " 예약   가능한   호텔 ",
                load_more: " 더   많은   호텔   보기 ",
                analytics_dashboard: " 분석   대시보드 ",
                continent_distribution: " 대륙별   호텔   분포 ",
                price_distribution: " 가격   분포 ",
                detailed_stats: " 상세   통계 ",
                cities: " 도시 ",
                hotels: " 호텔 ",
                book_now: " 지금   예약 ",
                view_details: " 자세히   보기 ",
                close: " 닫기 ",
                night: " 박 ",
                rating: " 평점 ",
                amenities: " 편의시설 ",
                description: " 설명 ",
                popular_spots: " 주변   인기   명소 ",
                compare_prices: " 가격   비교 ",
                share: " 공유 ",
                add_to_favorites: " 즐겨찾기에   추가 ",
                remove_from_favorites: " 즐겨찾기에서   제거 ",
                mark_visited: " 방문함으로   표시 ",
                continents: {
                    africa: " 아프리카 ",
                    asia: " 아시아 ",
                    europe: " 유럽 ",
                    north_america: " 북아메리카 ",
                    south_america: " 남아메리카 ",
                    oceania: " 오세아니아 "
                },
                tags: {
                    luxury: " 럭셔리 ",
                    spa: " 스파 ",
                    business: " 비즈니스 ",
                    family: " 가족 ",
                    romantic: " 로맨틱 ",
                    beach: " 해변 "
                },
                booking_processing: " 예약   처리   중 ...",
                booking_confirmed: " 예약이   확인되었습니다 !",
                booking_success: "✓  예약   완료 ",
                added_to_favorites: " 즐겨찾기에   추가되었습니다 !",
                removed_from_favorites: " 즐겨찾기에서   제거되었습니다 ",
                search_button: " 검색 ",
                clear_search: " 초기화 ",
                my_collection: " 내   컬렉션 ",
                my_collection_header: " 내   컬렉션 ",
                cities_continents: "57 개   도시  • 6 개   대륙 ",
                favorites: " 즐겨찾기 ",
                visited_hotels: " 방문한   호텔 ",
                booked_hotels: " 예약한   호텔 ",
                no_favorites: " 아직   즐겨찾기한   호텔이   없습니다 ",
                no_visited: " 아직   방문한   호텔이   없습니다 ",
                no_booked: " 아직   예약한   호텔이   없습니다 ",
                add_some_favorites: " 호텔을   탐색하고   즐겨찾기에   추가해보세요 !",
                visit_some_hotels: " 여행   시   방문한   호텔을   표시하세요 !",
                book_some_hotels: " 호텔을   예약하면   이곳에서   볼   수   있습니다 !",
                remove_from_collection: " 컬렉션에서   제거 ",
                view_on_map: " 지도에서   보기 ",
                export_list: " 목록   내보내기 "
            },
            ja: {
                title: "グローバルホテル検索",
                language: "言語:",
                analytics: "分析",
                filters: "高度な検索とフィルター",
                reset_filters: "すべてのフィルターをリセット",
                search: "ホテルを検索",
                search_placeholder: "名前、都市、キーワード、価格帯で検索...",
                continent: "大陸",
                all_continents: "すべての大陸",
                city: "都市",
                all_cities: "すべての都市",
                hotel_type: "ホテルタイプ",
                all_types: "すべてのタイプ",
                five_star: "5つ星ホテル",
                local_hotel: "ローカルホテル",
                secret_hotel: "シークレットホテル",
                price_range: "価格帯",
                min_rating: "最低評価",
                any_rating: "すべての評価",
                sort_by: "並び替え",
                sort_name: "名前",
                sort_price_low: "価格：安い順",
                sort_price_high: "価格：高い順",
                sort_rating: "評価",
                sort_popularity: "人気",
                show_visited_only: "訪問済みのみ表示",
                active_filters: "アクティブフィルター",
                popular_searches: "人気の検索",
                total_hotels: "総ホテル数",
                avg_price: "平均価格",
                avg_rating: "平均評価",
                visited: "訪問済み",
                available_hotels: "利用可能なホテル",
                load_more: "さらにホテルを読み込む",
                analytics_dashboard: "分析ダッシュボード",
                continent_distribution: "大陸別ホテル分布",
                price_distribution: "価格分布",
                detailed_stats: "詳細統計",
                cities: "都市",
                hotels: "ホテル",
                book_now: "今すぐ予約",
                view_details: "詳細を見る",
                close: "閉じる",
                night: "泊",
                rating: "評価",
                amenities: "設備",
                description: "説明",
                popular_spots: "近くの人気スポット",
                compare_prices: "価格を比較",
                share: "共有",
                add_to_favorites: "お気に入りに追加",
                remove_from_favorites: "お気に入りから削除",
                mark_visited: "訪問済みとしてマーク",
                continents: {
                    africa: "アフリカ",
                    asia: "アジア",
                    europe: "ヨーロッパ",
                    north_america: "北アメリカ",
                    south_america: "南アメリカ",
                    oceania: "オセアニア"
                },
                tags: {
                    luxury: "ラグジュアリー",
                    spa: "スパ",
                    business: "ビジネス",
                    family: "ファミリー",
                    romantic: "ロマンチック",
                    beach: "ビーチ"
                },
                booking_processing: "予約処理中...",
                booking_confirmed: "予約確認済み！",
                booking_success: "✓ 予約済み",
                added_to_favorites: "お気に入りに追加しました！",
                removed_from_favorites: "お気に入りから削除しました",
                search_button: "検索",
                clear_search: "クリア",
                my_collection: "マイコレクション",
                my_collection_header: "マイコレクション",
                cities_continents: "57都市 • 6大陸",
                favorites: "お気に入り",
                visited_hotels: "訪問済みホテル",
                booked_hotels: "予約済みホテル",
                no_favorites: "お気に入りのホテルはまだありません",
                no_visited: "訪問済みのホテルはまだありません",
                no_booked: "予約済みのホテルはまだありません",
                add_some_favorites: "探索を始めて、ホテルをお気に入りに追加しましょう！",
                visit_some_hotels: "旅行の際はホテルを訪問済みとしてマークしましょう！",
                book_some_hotels: "ホテルを予約してここで確認しましょう！",
                remove_from_collection: "コレクションから削除",
                view_on_map: "地図で表示",
                export_list: "リストをエクスポート"
            }
        };
        // Currency conversion rates and display preferences by language
        const CURRENCY_DISPLAY = {
            en: { currency: 'USD', symbol: '$', rate: 1.0 },
            zh: { currency: 'TWD', symbol: 'NT$', rate: 31.5 },
            fr: { currency: 'EUR', symbol: '€', rate: 0.85 },
            de: { currency: 'EUR', symbol: '€', rate: 0.85 },
            ja: { currency: 'JPY', symbol: '¥', rate: 150.0 }
        };
        // Application State
        const state = {
            currentLang: 'en',
            hotels: [],
            filteredHotels: [],
            displayedCount: CONFIG.ITEMS_PER_PAGE,
            visitedHotels: new Set(),
            favoriteHotels: new Set(),
            bookedHotels: new Set(),
            charts: {},
            filter: {
                query: '',
                continent: '',
                city: '',
                type: '',
                minPrice: '',
                maxPrice: '',
                minRating: '',
                sort: 'name'
            }
        };
        // Generate comprehensive hotel data
        function generateHotels() {
            const hotelTemplates = {
                five_star: [
                    { base: "Four Seasons", amenities: ["Pool", "Spa", "Gym", "Restaurant", "WiFi", "Concierge", "Butler Service"] },
                    { base: "Ritz Carlton", amenities: ["Pool", "Spa", "Gym", "Restaurant", "WiFi", "Butler Service", "Luxury Suites"] },
                    { base: "Grand Hyatt", amenities: ["Pool", "Spa", "Gym", "Restaurant", "WiFi", "Business Center", "Rooftop Bar"] },
                    { base: "St. Regis", amenities: ["Pool", "Spa", "Gym", "Restaurant", "WiFi", "24/7 Butler", "Private Beach"] },
                    { base: "Mandarin Oriental", amenities: ["Pool", "Spa", "Gym", "Restaurant", "WiFi", "Luxury Suites", "Art Gallery"] }
                ],
                local_hotel: [
                    { base: "Heritage Inn", amenities: ["WiFi", "Restaurant", "Local Tours", "Cultural Center", "Garden"] },
                    { base: "City View Hotel", amenities: ["WiFi", "Restaurant", "Rooftop Terrace", "Local Guides", "Bike Rental"] },
                    { base: "Traditional Lodge", amenities: ["WiFi", "Restaurant", "Cultural Activities", "Garden", "Library"] },
                    { base: "Boutique Palace", amenities: ["WiFi", "Restaurant", "Art Gallery", "Local Cuisine", "Courtyard"] },
                    { base: "Historic Manor", amenities: ["WiFi", "Restaurant", "Museum Tours", "Traditional Decor", "Tea Room"] }
                ],
                secret_hotel: [
                    { base: "Hidden Oasis", amenities: ["WiFi", "Private Pool", "Exclusive Access", "Personal Chef", "Spa"] },
                    { base: "Secret Garden", amenities: ["WiFi", "Private Spa", "Exclusive Tours", "Butler Service", "Wine Cellar"] },
                    { base: "Mystic Retreat", amenities: ["WiFi", "Private Beach", "Exclusive Dining", "Concierge", "Meditation Room"] }
                ]
            };
            const hotels = [];
            let hotelId = 1;
            // Generate hotels for all cities
            Object.keys(WORLD_DATA).forEach(continentKey => {
                const continent = WORLD_DATA[continentKey];
                Object.keys(continent.cities).forEach(cityKey => {
                    const city = continent.cities[cityKey];
                    // Generate 3-6 hotels per city
                    const numHotels = 3 + Math.floor(Math.random() * 4);
                    for (let i = 0; i < numHotels; i++) {
                        const types = Object.keys(hotelTemplates);
                        const type = types[Math.floor(Math.random() * types.length)];
                        const template = hotelTemplates[type][Math.floor(Math.random() * hotelTemplates[type].length)];
                        // Price calculation based on continent and city
                        const basePrice = getBasePrice(continentKey, cityKey, type);
                        const price = Math.round(basePrice * (0.8 + Math.random() * 0.4));
                        hotels.push({
                            id: hotelId++,
                            continent: continentKey,
                            city: cityKey,
                            country: city.country,
                            type: type,
                            name: `${template.base} ${getCityDisplayName(cityKey)}`,
                            price: price,
                            currency: city.currency,
                            rating: (3.5 + Math.random() * 1.5).toFixed(1),
                            popularity: Math.floor(Math.random() * 100) + 1,
                            amenities: [...template.amenities],
                            description: getHotelDescription(type, cityKey, city.country, state.currentLang),
                            popularSpots: getPopularSpots(cityKey, city.country, state.currentLang),
                            image: getHotelInteriorImage(hotelId, type)
                        });
                    }
                });
            });
            return hotels;
        }
        // Get hotel interior image based on type
        function getHotelInteriorImage(hotelId, type) {
            // Different interior themes based on hotel type
            const interiorCategories = {
                five_star: [
                    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop', // Luxury hotel room
                    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', // Luxury suite
                    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop', // Premium bedroom
                    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop', // Elegant room
                    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop'  // Luxury interior
                ],
                local_hotel: [
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop', // Cozy room
                    'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=400&h=300&fit=crop', // Traditional room
                    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop', // Boutique room
                    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop', // Local style room
                    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop'  // Comfortable room
                ],
                secret_hotel: [
                    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop', // Unique suite
                    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop', // Exclusive room
                    'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400&h=300&fit=crop', // Private suite
                    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop', // Hidden gem room
                    'https://images.unsplash.com/photo-1540518614846-7eded47ee3b5?w=400&h=300&fit=crop'  // Secret retreat
                ]
            };
            const categoryImages = interiorCategories[type] || interiorCategories.local_hotel;
            const imageIndex = (hotelId - 1) % categoryImages.length;
            return categoryImages[imageIndex];
        }
        // Helper functions
        function getBasePrice(continent, city, type) {
            const continentMultipliers = {
                africa: 0.4, asia: 0.6, europe: 1.2,
                north_america: 1.5, south_america: 0.7, oceania: 1.3
            };
            const typeMultipliers = {
                five_star: 3.0, local_hotel: 1.0, secret_hotel: 2.5
            };
            const basePrice = 50; // Base price in USD equivalent
            return basePrice * continentMultipliers[continent] * typeMultipliers[type];
        }
        function getCityDisplayName(cityKey) {
            return cityKey.split('_').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
        }
        function getHotelDescription(type, city, country, lang = 'en') {
            const cityName = getCityDisplayName(city);
            const descriptions = {
                en: {
                    five_star: `Experience ultimate luxury and elegance in ${cityName}, ${country}. This premium hotel offers world-class service and exceptional amenities.`,
                    local_hotel: `Discover authentic local culture and hospitality in ${cityName}, ${country}. Perfect for travelers seeking genuine experiences.`,
                    secret_hotel: `An exclusive hidden gem in ${cityName}, ${country}. Enjoy privacy and personalized service in this unique retreat.`
                },
                zh: {
                    five_star: `在${country}${cityName}體驗極致奢華與優雅。這家頂級酒店提供世界級服務和卓越設施。`,
                    local_hotel: `在${country}${cityName}探索真正的當地文化與熱情好客。完美適合尋求真實體驗的旅客。`,
                    secret_hotel: `${country}${cityName}的專屬隱藏瑰寶。在這個獨特的度假勝地享受隱私和個人化服務。`
                },
                fr: {
                    five_star: `Découvrez le luxe et l'élégance ultimes à ${cityName}, ${country}. Cet hôtel premium offre un service de classe mondiale et des équipements exceptionnels.`,
                    local_hotel: `Découvrez la culture locale authentique et l'hospitalité à ${cityName}, ${country}. Parfait pour les voyageurs en quête d'expériences authentiques.`,
                    secret_hotel: `Un joyau caché exclusif à ${cityName}, ${country}. Profitez de l'intimité et du service personnalisé dans cette retraite unique.`
                },
                de: {
                    five_star: `Erleben Sie ultimativen Luxus und Eleganz in ${cityName}, ${country}. Dieses Premium-Hotel bietet Weltklasse-Service und außergewöhnliche Annehmlichkeiten.`,
                    local_hotel: `Entdecken Sie authentische lokale Kultur und Gastfreundschaft in ${cityName}, ${country}. Perfekt für Reisende, die echte Erfahrungen suchen.`,
                    secret_hotel: `Ein exklusives verstecktes Juwel in ${cityName}, ${country}. Genießen Sie Privatsphäre und persönlichen Service in diesem einzigartigen Rückzugsort.`
                },
                ja: {
                    five_star: `${country}${cityName}で究極の贅沢と優雅さを体験してください。このプレミアムホテルは世界クラスのサービスと卓越したアメニティを提供します。`,
                    local_hotel: `${country}${cityName}で本格的な地元文化とおもてなしを発見してください。真の体験を求める旅行者に最適です。`,
                    secret_hotel: `${country}${cityName}の独占的な隠れた宝石。このユニークなリトリートでプライバシーとパーソナライズされたサービスをお楽しみください。`
                },
                ko: {
                    five_star: `${country}${cityName} 에서   최고의   럭셔리와   우아함을   경험해   보세요 .  이   프리미엄   호텔은   세계적인   서비스와   탁월한   편의시설을   제공합니다 .`,
                    local_hotel: `${country}${cityName} 에서   진정한   현지   문화와   환대를   발견해   보세요 .  진짜   경험을   원하는   여행자에게   완벽한   선택입니다 .`,
                    secret_hotel: `${country}${cityName} 의   숨겨진   보석   같은   독점   리트릿 .  이   특별한   공간에서   프라이버시와   맞춤형   서비스를   즐기세요 .`
                }
            };
            const langDescriptions = descriptions[lang] || descriptions.en;
            return langDescriptions[type] || `A wonderful hotel experience in ${cityName}, ${country}.`;
        }
        function getPopularSpots(city, country, lang = 'en') {
            const spots = {
                en: [
                    "Historic City Center", "Cultural Museum", "Local Market",
                    "Art Gallery", "Traditional Restaurant", "Scenic Viewpoint",
                    "Shopping District", "Waterfront Promenade", "Ancient Temple"
                ],
                zh: [
                    "歷史城市中心", "文化博物館", "當地市場",
                    "藝術畫廊", "傳統餐廳", "風景觀景點",
                    "購物區", "海濱長廊", "古老寺廟"
                ],
                ko: [
                    " 역사적인   도심지 ",
                    " 문화   박물관 ",
                    " 현지   시장 ",
                    " 미술   갤러리 ",
                    " 전통   음식점 ",
                    " 풍경   전망대 ",
                    " 쇼핑   거리 ",
                    " 해안   산책로 ",
                    " 고대   사원 "
                ],
                fr: [
                    "Centre-ville historique", "Musée culturel", "Marché local",
                    "Galerie d'art", "Restaurant traditionnel", "Point de vue panoramique",
                    "Quartier commerçant", "Promenade du front de mer", "Temple ancien"
                ],
                de: [
                    "Historisches Stadtzentrum", "Kulturmuseum", "Lokaler Markt",
                    "Kunstgalerie", "Traditionelles Restaurant", "Aussichtspunkt",
                    "Einkaufsviertel", "Uferpromenade", "Alter Tempel"
                ],
                ja: [
                    "歴史的市街地", "文化博物館", "地元市場",
                    "アートギャラリー", "伝統的レストラン", "景色の良い展望台",
                    "ショッピング街", "ウォーターフロント遊歩道", "古い寺院"
                ]
            };
            const langSpots = spots[lang] || spots.en;
            return langSpots.slice(0, 3 + Math.floor(Math.random() * 3));
        }
        function convertToUSD(price, currency) {
            const cityData = Object.values(WORLD_DATA).find(continent =>
                Object.values(continent.cities).some(city => city.currency === currency)
            );
            if (cityData) {
                const city = Object.values(cityData.cities).find(city => city.currency === currency);
                return Math.round(price / city.rate);
            }
            return price; // Fallback
        }
        function formatPrice(price, currency) {
            return `${price.toLocaleString()} ${currency}`;
        }
        // Format price for display based on current language
        function formatPriceForDisplay(originalPrice, originalCurrency) {
            const displayCurrency = CURRENCY_DISPLAY[state.currentLang];
            if (!displayCurrency) return formatPrice(originalPrice, originalCurrency);
            // Convert from original currency to USD first
            const usdPrice = convertToUSD(originalPrice, originalCurrency);
            // Then convert to display currency
            const displayPrice = Math.round(usdPrice * displayCurrency.rate);
            return `${displayCurrency.symbol}${displayPrice.toLocaleString()}`;
        }
        // Populate filters
        function populateContinentFilter() {
            const continentFilter = document.getElementById('continentFilter');
            const currentLang = state.currentLang;
            let optionsHTML = continentFilter.querySelector('option[value=""]').outerHTML;
            Object.keys(WORLD_DATA).forEach(continentKey => {
                const continentName = TRANSLATIONS[currentLang].continents[continentKey];
                optionsHTML += `<option value="${continentKey}">${continentName}</option>`;
            });
            continentFilter.innerHTML = optionsHTML;
        }
        function populateCityFilter() {
            const cityFilter = document.getElementById('cityFilter');
            const selectedContinent = state.filter.continent;
            let optionsHTML = '<option value="" data-translate="all_cities">All Cities</option>';
            if (selectedContinent && WORLD_DATA[selectedContinent]) {
                const cities = WORLD_DATA[selectedContinent].cities;
                Object.keys(cities).forEach(cityKey => {
                    const cityName = getCityDisplayName(cityKey);
                    optionsHTML += `<option value="${cityKey}">${cityName}</option>`;
                });
            } else {
                // Show all cities if no continent selected
                Object.keys(WORLD_DATA).forEach(continentKey => {
                    const cities = WORLD_DATA[continentKey].cities;
                    Object.keys(cities).forEach(cityKey => {
                        const cityName = getCityDisplayName(cityKey);
                        optionsHTML += `<option value="${cityKey}">${cityName}</option>`;
                    });
                });
            }
            cityFilter.innerHTML = optionsHTML;
        }
        // Render popular search tags
        function renderPopularTags() {
            const tagsContainer = document.getElementById('popularTags');
            const currentLang = state.currentLang;
            const tags = TRANSLATIONS[currentLang].tags;
            const popularTags = [
                tags.luxury, tags.spa, tags.business,
                tags.family, tags.romantic, tags.beach
            ];
            tagsContainer.innerHTML = popularTags.map(tag =>
                `<button class="tag-button px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors" onclick="searchByTag('${tag}')">${tag}</button>`
            ).join('');
        }
        // Search by tag
        function searchByTag(tag) {
            document.getElementById('searchInput').value = tag;
            state.filter.query = tag;
            resetPagination();
            renderHotelCards();
        }
        // Enhanced search with smart keyword recognition
        function getFilteredHotels() {
            let filtered = [...state.hotels];
            // Apply search filter with enhanced logic
            if (state.filter.query) {
                const query = state.filter.query.toLowerCase();
                filtered = filtered.filter(hotel => {
                    // Basic text search
                    const basicMatch = hotel.name.toLowerCase().includes(query) ||
                        getCityDisplayName(hotel.city).toLowerCase().includes(query) ||
                        hotel.country.toLowerCase().includes(query) ||
                        hotel.type.toLowerCase().includes(query) ||
                        hotel.description.toLowerCase().includes(query) ||
                        hotel.amenities.some(amenity => amenity.toLowerCase().includes(query));
                    // Smart keyword matching with expanded language support
                    const businessKeywords = ['business', 'commercial', 'work', 'office', '商務', '商用', '工作', 'affaires', 'commercial', 'geschäft', 'büro', 'ビジネス', '仕事', 'negocio', 'trabajo'];
                    const familyKeywords = ['family', 'kids', 'children', 'child', '家庭', '親子', '小孩', '兒童', 'famille', 'enfants', 'familie', 'kinder', 'ファミリー', '家族', '子供', 'familia', 'niños'];
                    const luxuryKeywords = ['luxury', 'premium', 'five-star', 'deluxe', 'high-end', '奢華', '豪華', '五星', '高級', 'luxe', 'premium', 'luxus', 'fünf-sterne', 'ラグジュアリー', '高級', '五つ星', 'lujo', 'cinco estrellas'];
                    const spaKeywords = ['spa', 'wellness', 'massage', 'relax', 'health', '水療', '按摩', '放鬆', '健康', 'bien-être', 'massage', 'wellness', 'massage', 'スパ', 'マッサージ', 'リラックス', 'bienestar', 'masaje'];
                    const beachKeywords = ['beach', 'ocean', 'sea', 'coast', '海灘', '海邊', '海洋', 'plage', 'mer', 'strand', 'meer', 'ビーチ', '海', 'playa', 'mar'];
                    const romanticKeywords = ['romantic', 'honeymoon', 'couple', '浪漫', '蜜月', '情侶', 'romantique', 'lune de miel', 'romantisch', 'flitterwochen', 'ロマンチック', 'ハネムーン', 'romántico', 'luna de miel'];
                    let smartMatch = false;
                    // Business search
                    if (businessKeywords.some(keyword => query.includes(keyword))) {
                        smartMatch = hotel.amenities.some(amenity =>
                            ['Business Center', 'WiFi', 'Conference Room'].some(biz => amenity.includes(biz))
                        ) || hotel.type === 'five_star';
                    }
                    // Family search
                    if (familyKeywords.some(keyword => query.includes(keyword))) {
                        smartMatch = hotel.amenities.some(amenity =>
                            ['Pool', 'Family', 'Kids', 'Playground'].some(fam => amenity.includes(fam))
                        );
                    }
                    // Luxury search
                    if (luxuryKeywords.some(keyword => query.includes(keyword))) {
                        smartMatch = hotel.type === 'five_star' || parseFloat(hotel.rating) >= 4.5;
                    }
                    // Spa search
                    if (spaKeywords.some(keyword => query.includes(keyword))) {
                        smartMatch = hotel.amenities.some(amenity => amenity.includes('Spa'));
                    }
                    // Beach search
                    if (beachKeywords.some(keyword => query.includes(keyword))) {
                        smartMatch = hotel.amenities.some(amenity =>
                            ['Beach', 'Pool', 'Private Beach'].some(beach => amenity.includes(beach))
                        );
                    }
                    // Romantic search
                    if (romanticKeywords.some(keyword => query.includes(keyword))) {
                        smartMatch = hotel.amenities.some(amenity =>
                            ['Spa', 'Private', 'Butler Service', 'Luxury Suites'].some(romantic => amenity.includes(romantic))
                        ) || hotel.type === 'secret_hotel';
                    }
                    // Price range search (e.g., "$100-200", "100-200", "$100 to $200")
                    const priceRangeMatch = query.match(/\$?(\d+)[-\s]*(?:to|至|à|bis|から)?\s*\$?(\d+)/);
                    if (priceRangeMatch) {
                        const minPrice = parseInt(priceRangeMatch[1]);
                        const maxPrice = parseInt(priceRangeMatch[2]);
                        const hotelUSDPrice = convertToUSD(hotel.price, hotel.currency);
                        smartMatch = hotelUSDPrice >= minPrice && hotelUSDPrice <= maxPrice;
                    }
                    return basicMatch || smartMatch;
                });
            }
            // Apply continent filter
            if (state.filter.continent) {
                filtered = filtered.filter(hotel => hotel.continent === state.filter.continent);
            }
            // Apply city filter
            if (state.filter.city) {
                filtered = filtered.filter(hotel => hotel.city === state.filter.city);
            }
            // Apply type filter
            if (state.filter.type) {
                filtered = filtered.filter(hotel => hotel.type === state.filter.type);
            }
            // Apply price range filter
            if (state.filter.minPrice || state.filter.maxPrice) {
                filtered = filtered.filter(hotel => {
                    const usdPrice = convertToUSD(hotel.price, hotel.currency);
                    const min = state.filter.minPrice ? parseInt(state.filter.minPrice) : 0;
                    const max = state.filter.maxPrice ? parseInt(state.filter.maxPrice) : Infinity;
                    return usdPrice >= min && usdPrice <= max;
                });
            }
            // Apply rating filter
            if (state.filter.minRating) {
                const minRating = parseFloat(state.filter.minRating);
                filtered = filtered.filter(hotel => parseFloat(hotel.rating) >= minRating);
            }
            // Apply visited only filter
            if (document.getElementById('showVisitedOnly').checked) {
                filtered = filtered.filter(hotel => state.visitedHotels.has(hotel.id));
            }
            // Apply sorting
            filtered.sort((a, b) => {
                switch (state.filter.sort) {
                    case 'price_low':
                        const priceA = convertToUSD(a.price, a.currency);
                        const priceB = convertToUSD(b.price, b.currency);
                        return priceA - priceB;
                    case 'price_high':
                        const priceA2 = convertToUSD(a.price, a.currency);
                        const priceB2 = convertToUSD(b.price, b.currency);
                        return priceB2 - priceA2;
                    case 'rating':
                        return parseFloat(b.rating) - parseFloat(a.rating);
                    case 'popularity':
                        return b.popularity - a.popularity;
                    case 'name':
                    default:
                        return a.name.localeCompare(b.name);
                }
            });
            return filtered;
        }
        // Update statistics
        function updateStatistics() {
            const filtered = state.filteredHotels;
            document.getElementById('totalHotels').textContent = filtered.length.toLocaleString();
            if (filtered.length > 0) {
                const avgPrice = filtered.reduce((sum, hotel) =>
                    sum + convertToUSD(hotel.price, hotel.currency), 0) / filtered.length;
                document.getElementById('avgPrice').textContent = `$${Math.round(avgPrice)}`;
                const avgRating = filtered.reduce((sum, hotel) =>
                    sum + parseFloat(hotel.rating), 0) / filtered.length;
                document.getElementById('avgRating').textContent = avgRating.toFixed(1);
            } else {
                document.getElementById('avgPrice').textContent = '$0';
                document.getElementById('avgRating').textContent = '0.0';
            }
            document.getElementById('visitedCount').textContent = state.visitedHotels.size;
        }
        // Update active filters display
        function updateActiveFilters() {
            const activeFiltersContainer = document.getElementById('activeFilters');
            const filters = [];
            if (state.filter.query) filters.push(`Search: "${state.filter.query}"`);
            if (state.filter.continent) filters.push(`Continent: ${TRANSLATIONS[state.currentLang].continents[state.filter.continent]}`);
            if (state.filter.city) filters.push(`City: ${getCityDisplayName(state.filter.city)}`);
            if (state.filter.type) filters.push(`Type: ${state.filter.type.replace('_', ' ')}`);
            if (state.filter.minPrice) filters.push(`Min Price: $${state.filter.minPrice}`);
            if (state.filter.maxPrice) filters.push(`Max Price: $${state.filter.maxPrice}`);
            if (state.filter.minRating) filters.push(`Rating: ${state.filter.minRating}+`);
            if (document.getElementById('showVisitedOnly').checked) filters.push('Visited Only');
            if (filters.length > 0) {
                activeFiltersContainer.style.display = 'flex';
                const filtersHTML = filters.map(filter =>
                    `<span class="filter-chip bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">${filter}</span>`
                ).join('');
                activeFiltersContainer.innerHTML = `
                            <span class="text-sm font-medium text-gray-600 mr-2" data-translate="active_filters">Active Filters:</span>
                            ${filtersHTML}
                        `;
            } else {
                activeFiltersContainer.style.display = 'none';
            }
        }
        // Reset pagination
        function resetPagination() {
            state.displayedCount = CONFIG.ITEMS_PER_PAGE;
        }
        // Load more hotels
        function loadMoreHotels() {
            state.displayedCount += CONFIG.ITEMS_PER_PAGE;
            renderHotelCards();
        }
        // Render hotel cards
        function renderHotelCards() {
            const grid = document.getElementById('hotelGrid');
            const resultsCount = document.getElementById('resultsCount');
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            // Cache filtered results
            state.filteredHotels = getFilteredHotels();
            const filtered = state.filteredHotels;
            resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'hotel' : 'hotels'} found`;
            if (filtered.length === 0) {
                grid.innerHTML = `
                            <div class="col-span-full text-center py-12">
                                <div class="text-6xl mb-4"> 🏨 </div>
                                <h3 class="text-xl font-semibold text-gray-600 mb-2">No hotels found</h3>
                                <p class="text-gray-500">Try adjusting your search criteria</p>
                            </div>
                        `;
                if (loadMoreBtn) loadMoreBtn.style.display = 'none';
                updateActiveFilters();
                updateStatistics();
                return;
            }
            // Only render displayed items for better performance
            const displayedHotels = filtered.slice(0, state.displayedCount);
            // Build cards HTML
            const cardsHTML = displayedHotels.map(hotel => {
                const isVisited = state.visitedHotels.has(hotel.id);
                const isFavorited = state.favoriteHotels.has(hotel.id);
                const cityName = getCityDisplayName(hotel.city);
                const typeColor = getTypeColor(hotel.type);
                const typeIcon = getTypeIcon(hotel.type);
                return `
                            <div class="hotel-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer ${isVisited ? 'ring-2 ring-green-400' : ''}" onclick="showHotelDetails(${hotel.id})">
                                <div class="relative">
                                    <img src="${hotel.image}" alt="${hotel.name}" class="w-full h-48 object-cover" loading="lazy" onerror="this.src='${CONFIG.FALLBACK_IMAGE}'; this.onerror=null;">
                                    <div class="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-700">
                                         ⭐  ${hotel.rating}
                                    </div>
                                    ${isVisited ? '<div class="absolute top-4 left-4 visited-badge text-white px-2 py-1 rounded-full text-xs font-semibold">✓ Visited</div>' : ''}
                                    <button class="absolute bottom-4 right-4 heart-icon ${isFavorited ? 'favorited bg-white' : 'bg-white bg-opacity-80 hover:bg-opacity-90'} text-2xl p-2 rounded-full transition-all" onclick="event.stopPropagation(); toggleFavorite(${hotel.id})">
                                        <i class="fas fa-heart ${isFavorited ? 'text-red-500' : 'text-gray-400'}"></i>
                                    </button>
                                </div>
                                <div class="p-6">
                                    <div class="flex justify-between items-start mb-2">
                                        <h3 class="text-lg font-semibold text-gray-800 line-clamp-2">${hotel.name}</h3>
                                    </div>
                                    <div class="flex items-center space-x-2 mb-2">
                                        <span class="type-badge px-2 py-1 rounded-full text-xs ${typeColor}">
                                            <i class="${typeIcon}"></i> ${hotel.type.replace('_', ' ')}
                                        </span>
                                        <span class="text-sm text-gray-600">${cityName}, ${hotel.country}</span>
                                    </div>
                                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">${hotel.description}</p>
                                    <div class="flex flex-wrap gap-1 mb-4">
                                        ${hotel.amenities.slice(0, 3).map(amenity =>
                    `<span class="amenity-tag px-2 py-1 rounded-full text-xs">${amenity}</span>`
                ).join('')}
                                        ${hotel.amenities.length > 3 ? `<span class="text-xs text-gray-500">+${hotel.amenities.length - 3} more</span>` : ''}
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <div class="text-2xl font-bold text-blue-600">
                                            ${formatPriceForDisplay(hotel.price, hotel.currency)}
                                            <span class="text-sm font-normal text-gray-500">/${TRANSLATIONS[state.currentLang].night}</span>
                                        </div>
                                        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors" onclick="event.stopPropagation(); bookHotel(${hotel.id})" data-translate="book_now">
                                            ${TRANSLATIONS[state.currentLang].book_now}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
            }).join('');
            grid.innerHTML = cardsHTML;
            // Show/hide load more button
            if (loadMoreBtn) {
                if (filtered.length > state.displayedCount) {
                    loadMoreBtn.style.display = 'block';
                    const remaining = Math.min(CONFIG.ITEMS_PER_PAGE, filtered.length - state.displayedCount);
                    document.getElementById('loadMoreCount').textContent = ` (${remaining} more)`;
                } else {
                    loadMoreBtn.style.display = 'none';
                }
            }
            updateActiveFilters();
            updateStatistics();
        }
        // Helper functions for hotel cards
        function getTypeColor(type) {
            const colors = {
                five_star: 'bg-yellow-100 text-yellow-800',
                local_hotel: 'bg-green-100 text-green-800',
                secret_hotel: 'bg-purple-100 text-purple-800'
            };
            return colors[type] || 'bg-gray-100 text-gray-800';
        }
        function getTypeIcon(type) {
            const icons = {
                five_star: 'fas fa-crown',
                local_hotel: 'fas fa-home',
                secret_hotel: 'fas fa-eye-slash'
            };
            return icons[type] || 'fas fa-hotel';
        }

        // Show hotel details modal
        function showHotelDetails(hotelId) {
            const hotel = state.hotels.find(h => h.id === hotelId);
            if (!hotel) return;
            const cityName = getCityDisplayName(hotel.city);
            const isVisited = state.visitedHotels.has(hotel.id);
            const isFavorited = state.favoriteHotels.has(hotel.id);
            document.getElementById('modalTitle').textContent = hotel.name;
            document.getElementById('modalContent').innerHTML = `
                        <div class="space-y-6">
                            <img id="modalImage" src="${hotel.image}" alt="${hotel.name}" class="w-full h-80 object-cover rounded-xl shadow-lg" loading="lazy" onerror="this.src='${CONFIG.FALLBACK_IMAGE}'; this.onerror=null;">
                            
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Location</h3>
                                    <p class="text-gray-600">${cityName}, ${hotel.country}</p>
                                    <p class="text-sm text-gray-500">${TRANSLATIONS[state.currentLang].continents[hotel.continent]}</p>
                                </div>
                                
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-800 mb-2" data-translate="rating">${TRANSLATIONS[state.currentLang].rating}</h3>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-2xl"> ⭐ </span>
                                        <span class="text-xl font-semibold">${hotel.rating}</span>
                                        <span class="text-sm text-gray-500">(Popularity: #${hotel.popularity})</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Price</h3>
                                    <div class="text-2xl font-bold text-blue-600">
                                        ${formatPriceForDisplay(hotel.price, hotel.currency)}
                                        <span class="text-sm font-normal text-gray-500">/${TRANSLATIONS[state.currentLang].night}</span>
                                    </div>
                                    <div class="text-sm text-gray-500 mt-1">
                                        Original: ${formatPrice(hotel.price, hotel.currency)}
                                    </div>
                                </div>
                            </div>
                            <!-- Action Buttons -->
                            <div class="flex flex-wrap gap-4">
                                <label class="flex items-center space-x-3 cursor-pointer">
                                    <input type="checkbox" id="visitedCheckbox" ${isVisited ? 'checked' : ''} 
                                           class="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" 
                                           onchange="toggleVisitedHotel(${hotel.id})">
                                    <span class="text-lg font-medium text-gray-800">${TRANSLATIONS[state.currentLang].mark_visited}  🏨 </span>
                                </label>
                                
                                <button id="modalFavoriteBtn-${hotel.id}" onclick="toggleFavorite(${hotel.id})" class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${isFavorited ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}">
                                    <i class="fas fa-heart ${isFavorited ? 'text-red-500' : 'text-gray-500'}"></i>
                                    <span>${isFavorited ? TRANSLATIONS[state.currentLang].remove_from_favorites : TRANSLATIONS[state.currentLang].add_to_favorites}</span>
                                </button>
                                
                                <button onclick="shareHotel(${hotel.id})" class="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                                    <i class="fas fa-share-alt"></i>
                                    <span>${TRANSLATIONS[state.currentLang].share}</span>
                                </button>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-2" data-translate="amenities">${TRANSLATIONS[state.currentLang].amenities}</h3>
                                <div class="flex flex-wrap gap-2">
                                    ${hotel.amenities.map(amenity =>
                `<span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">${amenity}</span>`
            ).join('')}
                                </div>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-2" data-translate="description">${TRANSLATIONS[state.currentLang].description}</h3>
                                <p class="text-gray-600">${hotel.description}</p>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-2" data-translate="popular_spots">${TRANSLATIONS[state.currentLang].popular_spots}</h3>
                                <ul class="list-disc list-inside text-gray-600 space-y-1">
                                    ${hotel.popularSpots.map(spot => `<li>${spot}</li>`).join('')}
                                </ul>
                            </div>
                            <!-- Price Comparison Section -->
                            <div class="price-comparison rounded-lg p-4">
                                <h3 class="text-lg font-semibold text-gray-800 mb-3" data-translate="compare_prices">${TRANSLATIONS[state.currentLang].compare_prices}</h3>
                                
                                <!-- Nearby Hotels Comparison -->
                                <div class="mb-4">
                                    <h4 class="text-md font-medium text-gray-700 mb-2">Similar Hotels in ${cityName}</h4>
                                    <div class="space-y-2">
                                        ${getNearbyHotelsComparison(hotel).map(nearbyHotel => `
                                            <div class="flex justify-between items-center p-2 bg-white rounded-lg border">
                                                <div>
                                                    <div class="font-medium text-sm">${nearbyHotel.name}</div>
                                                    <div class="text-xs text-gray-500"> ⭐  ${nearbyHotel.rating} • ${nearbyHotel.type.replace('_', ' ')}</div>
                                                </div>
                                                <div class="text-right">
                                                    <div class="font-semibold ${nearbyHotel.price < hotel.price ? 'text-green-600' : nearbyHotel.price > hotel.price ? 'text-red-600' : 'text-gray-600'}">${formatPrice(nearbyHotel.price, nearbyHotel.currency)}</div>
                                                    <div class="text-xs text-gray-500">/${TRANSLATIONS[state.currentLang].night}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                <!-- Booking Platform Comparison -->
                                <div>
                                    <h4 class="text-md font-medium text-gray-700 mb-2">Platform Prices</h4>
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div class="text-center p-3 bg-white rounded-lg border">
                                            <div class="text-sm text-gray-600">Booking.com</div>
                                            <div class="text-lg font-semibold text-blue-600">${formatPriceForDisplay(Math.round(hotel.price * 1.1), hotel.currency)}</div>
                                            <div class="text-xs text-gray-500">${formatPrice(Math.round(hotel.price * 1.1), hotel.currency)}</div>
                                        </div>
                                        <div class="text-center p-3 bg-white rounded-lg border border-green-200 bg-green-50">
                                            <div class="text-sm text-gray-600">Expedia</div>
                                            <div class="text-lg font-semibold text-green-600">${formatPriceForDisplay(Math.round(hotel.price * 0.95), hotel.currency)}</div>
                                            <div class="text-xs text-gray-500">${formatPrice(Math.round(hotel.price * 0.95), hotel.currency)}</div>
                                            <div class="text-xs text-green-600 font-medium">Best Price!</div>
                                        </div>
                                        <div class="text-center p-3 bg-white rounded-lg border">
                                            <div class="text-sm text-gray-600">Hotels.com</div>
                                            <div class="text-lg font-semibold text-purple-600">${formatPriceForDisplay(Math.round(hotel.price * 1.05), hotel.currency)}</div>
                                            <div class="text-xs text-gray-500">${formatPrice(Math.round(hotel.price * 1.05), hotel.currency)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Book Now Button -->
                            <div class="text-center">
                                <button id="modalBookBtn-${hotel.id}" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg" onclick="bookHotel(${hotel.id})">
                                    ${TRANSLATIONS[state.currentLang].book_now}
                                </button>
                            </div>
                        </div>
                    `;
            const modal = document.getElementById('hotelModal');
            modal.classList.remove('hidden');
            // Ensure modal is properly displayed
            setTimeout(() => {
                modal.style.display = 'flex';
            }, 10);
        }
        // Toggle visited hotel status
        function toggleVisitedHotel(hotelId) {
            const wasAlreadyVisited = state.visitedHotels.has(hotelId);
            if (wasAlreadyVisited) {
                state.visitedHotels.delete(hotelId);
                showNotification('已從造訪清單中移除', 'info');
            } else {
                state.visitedHotels.add(hotelId);
                showNotification('已標記為造訪過！', 'success');
            }
            renderHotelCards();
            updateStatistics();
            localStorage.setItem('visitedHotels', JSON.stringify([...state.visitedHotels]));
        }
        // Get nearby hotels for comparison
        function getNearbyHotelsComparison(currentHotel) {
            const sameCity = state.hotels.filter(hotel =>
                hotel.city === currentHotel.city &&
                hotel.id !== currentHotel.id
            );
            // Sort by rating and return top 3
            return sameCity
                .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
                .slice(0, 3);
        }
        // Share hotel function
        function shareHotel(hotelId) {
            const hotel = state.hotels.find(h => h.id === hotelId);
            if (!hotel) return;
            const shareText = `Check out ${hotel.name} in ${getCityDisplayName(hotel.city)}, ${hotel.country}!`;
            const shareUrl = window.location.href;
            // Create share modal
            const shareModal = document.createElement('div');
            shareModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            shareModal.innerHTML = `
                        <div class="bg-white rounded-xl p-6 max-w-md w-full">
                            <h3 class="text-lg font-semibold mb-4">${TRANSLATIONS[state.currentLang].share}</h3>
                            <div class="space-y-3">
                                <button onclick="shareToInstagram('${shareText}')" class="social-share-btn w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg">
                                    <i class="fab fa-instagram text-xl"></i>
                                    <span>Instagram</span>
                                </button>
                                <button onclick="shareToLine('${shareText}', '${shareUrl}')" class="social-share-btn w-full flex items-center space-x-3 p-3 bg-green-500 text-white rounded-lg hover:shadow-lg">
                                    <i class="fab fa-line text-xl"></i>
                                    <span>LINE</span>
                                </button>
                                <button onclick="shareToFacebook('${shareUrl}')" class="social-share-btn w-full flex items-center space-x-3 p-3 bg-blue-600 text-white rounded-lg hover:shadow-lg">
                                    <i class="fab fa-facebook-f text-xl"></i>
                                    <span>Facebook</span>
                                </button>
                                <button onclick="copyToClipboard('${shareText} ${shareUrl}')" class="social-share-btn w-full flex items-center space-x-3 p-3 bg-gray-600 text-white rounded-lg hover:shadow-lg">
                                    <i class="fas fa-copy text-xl"></i>
                                    <span>Copy Link</span>
                                </button>
                            </div>
                            <button onclick="this.parentElement.parentElement.remove()" class="mt-4 w-full py-2 text-gray-600 hover:text-gray-800">
                                ${TRANSLATIONS[state.currentLang].close}
                            </button>
                        </div>
                    `;
            document.body.appendChild(shareModal);
        }
        // Social sharing functions
        function shareToInstagram(text) {
            window.open('https://www.instagram.com/', '_blank');
        }
        function shareToLine(text, url) {
            window.open('https://line.me/', '_blank');
        }
        function shareToFacebook(url) {
            window.open('https://www.facebook.com/', '_blank');
        }
        function copyToClipboard(text) {
            const linkToCopy = text || window.location.href;
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(linkToCopy).then(() => {
                    showNotification('連結已複製到剪貼簿！', 'success');
                    closeShareModal();
                }).catch(() => {
                    fallbackCopyToClipboard(linkToCopy);
                });
            } else {
                fallbackCopyToClipboard(linkToCopy);
            }
        }
        function fallbackCopyToClipboard(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showNotification('連結已複製到剪貼簿！', 'success');
            } catch (err) {
                showNotification('複製失敗，請手動複製', 'error');
            }
            document.body.removeChild(textArea);
            closeShareModal();
        }
        function closeShareModal() {
            const shareModal = document.querySelector('.fixed.inset-0.bg-black.bg-opacity-50');
            if (shareModal) {
                shareModal.remove();
            }
        }
        // Create charts
        function createCharts() {
            createContinentChart();
            createPriceChart();
            createTypeChart();
            createCityChart();
            createRatingChart();
        }
        function createContinentChart() {
            const ctx = document.getElementById('continentChart').getContext('2d');
            const currentLang = state.currentLang;
            const continentData = Object.keys(WORLD_DATA).map(continent => {
                const hotelCount = state.filteredHotels.filter(hotel => hotel.continent === continent).length;
                return {
                    continent: TRANSLATIONS[currentLang].continents[continent],
                    count: hotelCount
                };
            });
            if (state.charts.continent) {
                state.charts.continent.destroy();
            }
            state.charts.continent = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: continentData.map(d => d.continent),
                    datasets: [{
                        data: continentData.map(d => d.count),
                        backgroundColor: [
                            '#3B82F6', '#10B981', '#F59E0B',
                            '#EF4444', '#8B5CF6', '#06B6D4'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        }
        function createPriceChart() {
            const ctx = document.getElementById('priceChart').getContext('2d');
            const priceRanges = ['$0-50', '$50-100', '$100-200', '$200-500', '$500+'];
            const priceCounts = [0, 0, 0, 0, 0];
            state.filteredHotels.forEach(hotel => {
                const usdPrice = convertToUSD(hotel.price, hotel.currency);
                if (usdPrice <= 50) priceCounts[0]++;
                else if (usdPrice <= 100) priceCounts[1]++;
                else if (usdPrice <= 200) priceCounts[2]++;
                else if (usdPrice <= 500) priceCounts[3]++;
                else priceCounts[4]++;
            });
            if (state.charts.price) {
                state.charts.price.destroy();
            }
            state.charts.price = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: priceRanges,
                    datasets: [{
                        label: 'Hotels',
                        data: priceCounts,
                        backgroundColor: '#3B82F6',
                        borderColor: '#2563EB',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
        }
        function createTypeChart() {
            const ctx = document.getElementById('typeChart').getContext('2d');
            const typeData = {
                'five_star': 0,
                'local_hotel': 0,
                'secret_hotel': 0
            };
            state.filteredHotels.forEach(hotel => {
                typeData[hotel.type]++;
            });
            if (state.charts.type) {
                state.charts.type.destroy();
            }
            state.charts.type = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['5-Star Hotel', 'Local Hotel', 'Secret Hotel'],
                    datasets: [{
                        data: [typeData.five_star, typeData.local_hotel, typeData.secret_hotel],
                        backgroundColor: ['#F59E0B', '#10B981', '#8B5CF6'],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        }
        function createCityChart() {
            const ctx = document.getElementById('cityChart').getContext('2d');
            const cityData = {};
            state.filteredHotels.forEach(hotel => {
                const cityName = getCityDisplayName(hotel.city);
                cityData[cityName] = (cityData[cityName] || 0) + 1;
            });
            // Get top 10 cities
            const sortedCities = Object.entries(cityData)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 10);
            if (state.charts.city) {
                state.charts.city.destroy();
            }
            state.charts.city = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: sortedCities.map(([city]) => city),
                    datasets: [{
                        label: 'Hotels',
                        data: sortedCities.map(([, count]) => count),
                        backgroundColor: '#10B981',
                        borderColor: '#059669',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        },
                        x: {
                            ticks: {
                                maxRotation: 45
                            }
                        }
                    }
                }
            });
        }
        function createRatingChart() {
            const ctx = document.getElementById('ratingChart').getContext('2d');
            const ratingRanges = ['3.0-3.4', '3.5-3.9', '4.0-4.4', '4.5-4.9', '5.0'];
            const ratingCounts = [0, 0, 0, 0, 0];
            state.filteredHotels.forEach(hotel => {
                const rating = parseFloat(hotel.rating);
                if (rating < 3.5) ratingCounts[0]++;
                else if (rating < 4.0) ratingCounts[1]++;
                else if (rating < 4.5) ratingCounts[2]++;
                else if (rating < 5.0) ratingCounts[3]++;
                else ratingCounts[4]++;
            });
            if (state.charts.rating) {
                state.charts.rating.destroy();
            }
            state.charts.rating = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ratingRanges,
                    datasets: [{
                        label: 'Hotels',
                        data: ratingCounts,
                        borderColor: '#8B5CF6',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
        }
        // Create detailed statistics table
        function createStatsTable() {
            const tbody = document.getElementById('statsTableBody');
            const currentLang = state.currentLang;
            const continentStats = Object.keys(WORLD_DATA).map(continentKey => {
                const continent = WORLD_DATA[continentKey];
                const hotels = state.filteredHotels.filter(h => h.continent === continentKey);
                const avgPrice = hotels.length > 0 ?
                    hotels.reduce((sum, h) => sum + convertToUSD(h.price, h.currency), 0) / hotels.length : 0;
                const avgRating = hotels.length > 0 ?
                    hotels.reduce((sum, h) => sum + parseFloat(h.rating), 0) / hotels.length : 0;
                return {
                    continent: TRANSLATIONS[currentLang].continents[continentKey],
                    cities: Object.keys(continent.cities).length,
                    hotels: hotels.length,
                    avgPrice: Math.round(avgPrice),
                    avgRating: avgRating.toFixed(1)
                };
            });
            tbody.innerHTML = continentStats.map(stat => `
                        <tr class="border-b">
                            <td class="py-2">${stat.continent}</td>
                            <td class="py-2">${stat.cities}</td>
                            <td class="py-2">${stat.hotels}</td>
                            <td class="py-2">$${stat.avgPrice}</td>
                            <td class="py-2">${stat.avgRating}</td>
                        </tr>
                    `).join('');
        }
        // Show analytics modal
        function showAnalytics() {
            const modal = document.getElementById('analyticsModal');
            modal.classList.remove('hidden');
            modal.style.display = 'flex';
            // Delay chart creation to ensure modal is visible
            setTimeout(() => {
                createCharts();
                createStatsTable();
            }, 100);
        }
        // Reset all filters
        function resetAllFilters() {
            // Show loading state on reset button
            const resetBtn = document.getElementById('resetFilters');
            const originalText = resetBtn.textContent;
            resetBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>重置中...';
            resetBtn.disabled = true;
            resetBtn.classList.add('opacity-75');
            setTimeout(() => {
                state.filter = {
                    query: '',
                    continent: '',
                    city: '',
                    type: '',
                    minPrice: '',
                    maxPrice: '',
                    minRating: '',
                    sort: 'name'
                };
                // Reset form elements
                document.getElementById('searchInput').value = '';
                document.getElementById('continentFilter').value = '';
                document.getElementById('cityFilter').value = '';
                document.getElementById('typeFilter').value = '';
                document.getElementById('minPrice').value = '';
                document.getElementById('maxPrice').value = '';
                document.getElementById('ratingFilter').value = '';
                document.getElementById('sortFilter').value = 'name';
                document.getElementById('showVisitedOnly').checked = false;
                document.getElementById('clearSearch').style.display = 'none';
                populateCityFilter();
                resetPagination();
                renderHotelCards();
                // Restore button state
                resetBtn.innerHTML = originalText;
                resetBtn.disabled = false;
                resetBtn.classList.remove('opacity-75');
                // Show success notification
                showNotification('所有篩選條件已重置！', 'success');
            }, 500);
        }
        // Update language
        function updateLanguage(lang) {
            state.currentLang = lang;
            // Update all translatable elements
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
                    element.textContent = TRANSLATIONS[lang][key];
                }
            });
            // Update placeholder texts
            document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
                const key = element.getAttribute('data-translate-placeholder');
                if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
                    element.placeholder = TRANSLATIONS[lang][key];
                }
            });
            // Regenerate hotel data with new language
            state.hotels.forEach(hotel => {
                hotel.description = getHotelDescription(hotel.type, hotel.city, hotel.country, lang);
                hotel.popularSpots = getPopularSpots(hotel.city, hotel.country, lang);
            });
            // Update filters
            populateContinentFilter();
            populateCityFilter();
            // Update popular tags
            renderPopularTags();
            // Re-render hotel cards with new language
            renderHotelCards();
        }
        // Load saved data from localStorage
        function loadSavedData() {
            const savedVisited = localStorage.getItem('visitedHotels');
            if (savedVisited) {
                state.visitedHotels = new Set(JSON.parse(savedVisited));
            }
            const savedFavorites = localStorage.getItem('favoriteHotels');
            if (savedFavorites) {
                state.favoriteHotels = new Set(JSON.parse(savedFavorites));
            }
            const savedBooked = localStorage.getItem('bookedHotels');
            if (savedBooked) {
                state.bookedHotels = new Set(JSON.parse(savedBooked));
            }
        }
        // Debounce function
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
        // Show collection modal
        function showCollection() {
            const modal = document.getElementById('collectionModal');
            modal.classList.remove('hidden');
            modal.style.display = 'flex';
            showCollectionTab('favorites'); // Default to favorites tab
        }
        // Show specific collection tab
        function showCollectionTab(tabType) {
            // Update tab styles
            document.querySelectorAll('.collection-tab').forEach(tab => {
                tab.classList.remove('border-pink-500', 'text-pink-600', 'border-green-500', 'text-green-600', 'border-blue-500', 'text-blue-600');
                tab.classList.add('text-gray-600');
            });
            const activeTab = document.getElementById(`${tabType}Tab`) || document.getElementById(`${tabType === 'visited' ? 'visitedTab' : 'bookedTab'}`);
            if (activeTab) {
                activeTab.classList.remove('text-gray-600');
                if (tabType === 'favorites') {
                    activeTab.classList.add('border-pink-500', 'text-pink-600');
                } else if (tabType === 'visited') {
                    activeTab.classList.add('border-green-500', 'text-green-600');
                } else if (tabType === 'booked') {
                    activeTab.classList.add('border-blue-500', 'text-blue-600');
                }
            }
            // Update counts
            updateCollectionCounts();
            // Show content
            const content = document.getElementById('collectionContent');
            let hotels = [];
            let emptyMessage = '';
            let emptySubMessage = '';
            if (tabType === 'favorites') {
                hotels = state.hotels.filter(hotel => state.favoriteHotels.has(hotel.id));
                emptyMessage = TRANSLATIONS[state.currentLang].no_favorites;
                emptySubMessage = TRANSLATIONS[state.currentLang].add_some_favorites;
            } else if (tabType === 'visited') {
                hotels = state.hotels.filter(hotel => state.visitedHotels.has(hotel.id));
                emptyMessage = TRANSLATIONS[state.currentLang].no_visited;
                emptySubMessage = TRANSLATIONS[state.currentLang].visit_some_hotels;
            } else if (tabType === 'booked') {
                hotels = state.hotels.filter(hotel => state.bookedHotels.has(hotel.id));
                emptyMessage = TRANSLATIONS[state.currentLang].no_booked;
                emptySubMessage = TRANSLATIONS[state.currentLang].book_some_hotels;
            }
            if (hotels.length === 0) {
                content.innerHTML = `
                            <div class="text-center py-16">
                                <div class="text-6xl mb-4">
                                    ${tabType === 'favorites' ? ' 💖 ' : tabType === 'visited' ? ' ✅ ' : ' 📅 '}
                                </div>
                                <h3 class="text-xl font-semibold text-gray-600 mb-2">${emptyMessage}</h3>
                                <p class="text-gray-500">${emptySubMessage}</p>
                            </div>
                        `;
            } else {
                content.innerHTML = `
                            <div class="mb-4 flex justify-between items-center">
                                <h3 class="text-lg font-semibold">${hotels.length} ${hotels.length === 1 ? 'hotel' : 'hotels'}</h3>
                                <button onclick="exportCollection('${tabType}')" class="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                    <i class="fas fa-download"></i>
                                    <span>${TRANSLATIONS[state.currentLang].export_list}</span>
                                </button>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                ${hotels.map(hotel => renderCollectionHotelCard(hotel, tabType)).join('')}
                            </div>
                        `;
            }
        }
        // Render hotel card for collection
        function renderCollectionHotelCard(hotel, tabType) {
            const cityName = getCityDisplayName(hotel.city);
            const typeColor = getTypeColor(hotel.type);
            const typeIcon = getTypeIcon(hotel.type);
            return `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div class="relative">
                                <img src="${hotel.image}" alt="${hotel.name}" class="w-full h-32 object-cover" loading="lazy" onerror="this.src='${CONFIG.FALLBACK_IMAGE}'; this.onerror=null;">
                                <div class="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold">
                                     ⭐  ${hotel.rating}
                                </div>
                            </div>
                            <div class="p-4">
                                <h4 class="font-semibold text-gray-800 mb-1 line-clamp-1">${hotel.name}</h4>
                                <div class="flex items-center space-x-2 mb-2">
                                    <span class="type-badge px-2 py-1 rounded-full text-xs ${typeColor}">
                                        <i class="${typeIcon}"></i> ${hotel.type.replace('_', ' ')}
                                    </span>
                                </div>
                                <p class="text-sm text-gray-600 mb-2">${cityName}, ${hotel.country}</p>
                                <div class="text-lg font-bold text-blue-600 mb-3">
                                    ${formatPriceForDisplay(hotel.price, hotel.currency)}
                                    <span class="text-xs font-normal text-gray-500">/${TRANSLATIONS[state.currentLang].night}</span>
                                </div>
                                <div class="flex space-x-2">
                                    <button onclick="showHotelDetails(${hotel.id})" class="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                                        ${TRANSLATIONS[state.currentLang].view_details}
                                    </button>
                                    <button onclick="removeFromCollection(${hotel.id}, '${tabType}')" class="px-3 py-2 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200 transition-colors">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
        }
        // Remove from collection
        function removeFromCollection(hotelId, tabType) {
            if (tabType === 'favorites') {
                state.favoriteHotels.delete(hotelId);
                localStorage.setItem('favoriteHotels', JSON.stringify([...state.favoriteHotels]));
            } else if (tabType === 'visited') {
                state.visitedHotels.delete(hotelId);
                localStorage.setItem('visitedHotels', JSON.stringify([...state.visitedHotels]));
            } else if (tabType === 'booked') {
                state.bookedHotels.delete(hotelId);
                localStorage.setItem('bookedHotels', JSON.stringify([...state.bookedHotels]));
            }
            showCollectionTab(tabType); // Refresh the tab
            renderHotelCards(); // Refresh main view
            updateStatistics();
            updateCollectionCounts();
        }
        // Update collection counts
        function updateCollectionCounts() {
            document.getElementById('favoritesCount').textContent = state.favoriteHotels.size;
            document.getElementById('visitedTabCount').textContent = state.visitedHotels.size;
            document.getElementById('bookedCount').textContent = state.bookedHotels.size;
        }
        // Export collection
        function exportCollection(tabType) {
            let hotels = [];
            if (tabType === 'favorites') {
                hotels = state.hotels.filter(hotel => state.favoriteHotels.has(hotel.id));
            } else if (tabType === 'visited') {
                hotels = state.hotels.filter(hotel => state.visitedHotels.has(hotel.id));
            } else if (tabType === 'booked') {
                hotels = state.hotels.filter(hotel => state.bookedHotels.has(hotel.id));
            }
            const csvContent = [
                ['Hotel Name', 'City', 'Country', 'Type', 'Price', 'Currency', 'Rating'].join(','),
                ...hotels.map(hotel => [
                    `"${hotel.name}"`,
                    `"${getCityDisplayName(hotel.city)}"`,
                    `"${hotel.country}"`,
                    `"${hotel.type.replace('_', ' ')}"`,
                    hotel.price,
                    hotel.currency,
                    hotel.rating
                ].join(','))
            ].join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${tabType}-hotels.csv`;
            a.click();
            window.URL.revokeObjectURL(url);
        }
        // Interactive booking function
        function bookHotel(hotelId) {
            const hotel = state.hotels.find(h => h.id === hotelId);
            if (!hotel) return;
            // Find all booking buttons for this hotel
            const cardBtn = document.querySelector(`[onclick*="bookHotel(${hotelId})"]`);
            const modalBtn = document.getElementById(`modalBookBtn-${hotelId}`);
            const buttons = [cardBtn, modalBtn].filter(btn => btn);
            // Show loading state
            buttons.forEach(btn => {
                if (btn) {
                    btn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i>${TRANSLATIONS[state.currentLang].booking_processing}`;
                    btn.disabled = true;
                    btn.classList.add('opacity-75');
                }
            });
            // Simulate booking process
            setTimeout(() => {
                // Show confirmation
                buttons.forEach(btn => {
                    if (btn) {
                        btn.innerHTML = `<i class="fas fa-check mr-2"></i>${TRANSLATIONS[state.currentLang].booking_confirmed}`;
                        btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                        btn.classList.add('bg-green-600');
                    }
                });
                // Show success state after 1 second
                setTimeout(() => {
                    buttons.forEach(btn => {
                        if (btn) {
                            btn.innerHTML = TRANSLATIONS[state.currentLang].booking_success;
                            btn.disabled = false;
                            btn.classList.remove('opacity-75');
                        }
                    });
                    // Add to booked hotels
                    state.bookedHotels.add(hotelId);
                    localStorage.setItem('bookedHotels', JSON.stringify([...state.bookedHotels]));
                    updateCollectionCounts();
                    updateStatistics();
                }, 1000);
                // Show booking success notification
                showNotification(TRANSLATIONS[state.currentLang].booking_confirmed, 'success');
            }, 1500);
        }
        // Enhanced toggle favorite with immediate feedback
        function toggleFavorite(hotelId) {
            const wasAlreadyFavorited = state.favoriteHotels.has(hotelId);
            // Find all heart buttons for this hotel (card and modal)
            const cardHeartBtn = document.querySelector(`[onclick*="toggleFavorite(${hotelId})"].heart-icon`);
            const modalHeartBtn = document.getElementById(`modalFavoriteBtn-${hotelId}`);
            const heartButtons = [cardHeartBtn, modalHeartBtn].filter(btn => btn);
            if (wasAlreadyFavorited) {
                state.favoriteHotels.delete(hotelId);
                // Immediate visual feedback for all buttons
                heartButtons.forEach(btn => {
                    const heartIcon = btn.querySelector('i');
                    const textSpan = btn.querySelector('span');
                    if (btn === cardHeartBtn) {
                        // Card button styling
                        btn.classList.remove('favorited', 'bg-white');
                        btn.classList.add('bg-white', 'bg-opacity-80', 'hover:bg-opacity-90');
                        if (heartIcon) {
                            heartIcon.classList.remove('text-red-500');
                            heartIcon.classList.add('text-gray-400');
                        }
                        btn.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            btn.style.transform = 'scale(1)';
                        }, 150);
                    } else if (btn === modalHeartBtn) {
                        // Modal button styling
                        btn.classList.remove('bg-red-100', 'text-red-700');
                        btn.classList.add('bg-gray-100', 'text-gray-700');
                        if (heartIcon) {
                            heartIcon.classList.remove('text-red-500');
                            heartIcon.classList.add('text-gray-500');
                        }
                        if (textSpan) {
                            textSpan.textContent = TRANSLATIONS[state.currentLang].add_to_favorites;
                        }
                    }
                });
                showNotification(TRANSLATIONS[state.currentLang].removed_from_favorites, 'info');
            } else {
                state.favoriteHotels.add(hotelId);
                // Immediate visual feedback for all buttons
                heartButtons.forEach(btn => {
                    const heartIcon = btn.querySelector('i');
                    const textSpan = btn.querySelector('span');
                    if (btn === cardHeartBtn) {
                        // Card button styling
                        btn.classList.add('favorited');
                        btn.classList.remove('bg-opacity-80', 'hover:bg-opacity-90');
                        btn.classList.add('bg-white');
                        if (heartIcon) {
                            heartIcon.classList.remove('text-gray-400');
                            heartIcon.classList.add('text-red-500');
                        }
                        btn.style.transform = 'scale(1.2)';
                        setTimeout(() => {
                            btn.style.transform = 'scale(1.1)';
                        }, 150);
                    } else if (btn === modalHeartBtn) {
                        // Modal button styling
                        btn.classList.remove('bg-gray-100', 'text-gray-700');
                        btn.classList.add('bg-red-100', 'text-red-700');
                        if (heartIcon) {
                            heartIcon.classList.remove('text-gray-500');
                            heartIcon.classList.add('text-red-500');
                        }
                        if (textSpan) {
                            textSpan.textContent = TRANSLATIONS[state.currentLang].remove_from_favorites;
                        }
                    }
                });
                showNotification(TRANSLATIONS[state.currentLang].added_to_favorites, 'success');
            }
            // Update counts immediately
            updateCollectionCounts();
            localStorage.setItem('favoriteHotels', JSON.stringify([...state.favoriteHotels]));
            // Delay the full re-render to avoid interrupting the animation
            setTimeout(() => {
                renderHotelCards();
            }, 200);
        }
        // Show notification function
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium transform transition-all duration-300 translate-x-full ${type === 'success' ? 'bg-green-600' :
                type === 'error' ? 'bg-red-600' :
                    'bg-blue-600'
                }`;
            notification.textContent = message;
            document.body.appendChild(notification);
            // Animate in
            setTimeout(() => {
                notification.classList.remove('translate-x-full');
            }, 100);
            // Remove after 3 seconds
            setTimeout(() => {
                notification.classList.add('translate-x-full');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }
        // Search functions
        function performSearch() {
            const query = document.getElementById('searchInput').value;
            state.filter.query = query;
            resetPagination();
            renderHotelCards();
            // Show clear button if there's text
            const clearBtn = document.getElementById('clearSearch');
            if (query.trim()) {
                clearBtn.style.display = 'block';
            }
        }
        function clearSearch() {
            document.getElementById('searchInput').value = '';
            document.getElementById('clearSearch').style.display = 'none';
            state.filter.query = '';
            resetPagination();
            renderHotelCards();
        }
        // Initialize application
        function init() {
            // Load saved data
            loadSavedData();
            // Generate hotel data
            console.log('Generating hotels for 57 cities across 6 continents...');
            state.hotels = generateHotels();
            console.log(`Generated ${state.hotels.length} hotels`);
            // Populate filters
            populateContinentFilter();
            populateCityFilter();
            // Render popular tags
            renderPopularTags();
            // Initial render
            renderHotelCards();
            // Update collection counts
            updateCollectionCounts();
            // Event listeners
            document.getElementById('languageSelect').addEventListener('change', (e) => {
                updateLanguage(e.target.value);
            });
            document.getElementById('analyticsBtn').addEventListener('click', showAnalytics);
            document.getElementById('myCollectionBtn').addEventListener('click', showCollection);
            document.getElementById('resetFilters').addEventListener('click', resetAllFilters);
            const debouncedSearch = debounce(() => {
                state.filter.query = document.getElementById('searchInput').value;
                resetPagination();
                renderHotelCards();
            }, CONFIG.DEBOUNCE_DELAY);
            document.getElementById('searchInput').addEventListener('input', (e) => {
                // Show/hide clear button
                const clearBtn = document.getElementById('clearSearch');
                if (e.target.value.trim()) {
                    clearBtn.style.display = 'block';
                } else {
                    clearBtn.style.display = 'none';
                }
                debouncedSearch();
            });
            // Add Enter key support for search
            document.getElementById('searchInput').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
            document.getElementById('continentFilter').addEventListener('change', (e) => {
                state.filter.continent = e.target.value;
                state.filter.city = '';
                document.getElementById('cityFilter').value = '';
                populateCityFilter();
                resetPagination();
                renderHotelCards();
            });
            document.getElementById('cityFilter').addEventListener('change', (e) => {
                state.filter.city = e.target.value;
                resetPagination();
                renderHotelCards();
            });
            document.getElementById('typeFilter').addEventListener('change', (e) => {
                state.filter.type = e.target.value;
                resetPagination();
                renderHotelCards();
            });
            document.getElementById('minPrice').addEventListener('input', debounce(() => {
                state.filter.minPrice = document.getElementById('minPrice').value;
                resetPagination();
                renderHotelCards();
            }, CONFIG.DEBOUNCE_DELAY));
            document.getElementById('maxPrice').addEventListener('input', debounce(() => {
                state.filter.maxPrice = document.getElementById('maxPrice').value;
                resetPagination();
                renderHotelCards();
            }, CONFIG.DEBOUNCE_DELAY));
            document.getElementById('ratingFilter').addEventListener('change', (e) => {
                state.filter.minRating = e.target.value;
                resetPagination();
                renderHotelCards();
            });
            document.getElementById('sortFilter').addEventListener('change', (e) => {
                state.filter.sort = e.target.value;
                resetPagination();
                renderHotelCards();
            });
            document.getElementById('showVisitedOnly').addEventListener('change', () => {
                resetPagination();
                renderHotelCards();
            });
            // Modal event listeners
            document.getElementById('closeModal').addEventListener('click', () => {
                const modal = document.getElementById('hotelModal');
                modal.classList.add('hidden');
                modal.style.display = 'none';
            });
            document.getElementById('closeAnalytics').addEventListener('click', () => {
                const modal = document.getElementById('analyticsModal');
                modal.classList.add('hidden');
                modal.style.display = 'none';
            });
            document.getElementById('closeCollection').addEventListener('click', () => {
                const modal = document.getElementById('collectionModal');
                modal.classList.add('hidden');
                modal.style.display = 'none';
            });
            // Close modals on backdrop click
            document.getElementById('hotelModal').addEventListener('click', (e) => {
                if (e.target.id === 'hotelModal') {
                    const modal = document.getElementById('hotelModal');
                    modal.classList.add('hidden');
                    modal.style.display = 'none';
                }
            });
            document.getElementById('analyticsModal').addEventListener('click', (e) => {
                if (e.target.id === 'analyticsModal') {
                    const modal = document.getElementById('analyticsModal');
                    modal.classList.add('hidden');
                    modal.style.display = 'none';
                }
            });
            document.getElementById('collectionModal').addEventListener('click', (e) => {
                if (e.target.id === 'collectionModal') {
                    const modal = document.getElementById('collectionModal');
                    modal.classList.add('hidden');
                    modal.style.display = 'none';
                }
            });
            // Close modals on Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    const hotelModal = document.getElementById('hotelModal');
                    const analyticsModal = document.getElementById('analyticsModal');
                    const collectionModal = document.getElementById('collectionModal');
                    hotelModal.classList.add('hidden');
                    hotelModal.style.display = 'none';
                    analyticsModal.classList.add('hidden');
                    analyticsModal.style.display = 'none';
                    collectionModal.classList.add('hidden');
                    collectionModal.style.display = 'none';
                }
            });
        }
        // Make functions globally accessible
        window.showHotelDetails = showHotelDetails;
        window.toggleFavorite = toggleFavorite;
        window.bookHotel = bookHotel;
        window.loadMoreHotels = loadMoreHotels;
        window.searchByTag = searchByTag;
        window.performSearch = performSearch;
        window.clearSearch = clearSearch;
        window.showAnalytics = showAnalytics;
        window.showCollection = showCollection;
        window.showCollectionTab = showCollectionTab;
        window.removeFromCollection = removeFromCollection;
        window.exportCollection = exportCollection;
        window.resetAllFilters = resetAllFilters;
        window.toggleVisitedHotel = toggleVisitedHotel;
        window.shareHotel = shareHotel;
        window.shareToInstagram = shareToInstagram;
        window.shareToLine = shareToLine;
        window.shareToFacebook = shareToFacebook;
        window.copyToClipboard = copyToClipboard;
        // Start the application
        document.addEventListener('DOMContentLoaded', init);
    </script>
</body>
</html>

