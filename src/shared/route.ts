const APP_ROUTES = {
  PUBLIC: {
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up"
  },
  PRIVATE: {
    HOME: "/dashboard",
    PRODUCTS: "/products",
    PRODUCT_NEW: "/products/create",
    PRODUCT_EDIT: "/products/:productId/edit",
    PRODUCT_DETAILS: "/products/:productId/details"
  },
  UNAUTHORIZED: "/"
};

const API_ROUTES = {
  PUBLIC: {
    SIGN_IN: "/sellers/sessions",
    SIGN_UP: "/sellers"
  },
  PRIVATE: {
    HOME: "/",
    // Sellers
    PROFILE_SELLER: "/sellers/me",
    SIGN_OUT: "/sign-out",
    UPDATE_SELLER: "/sellers", 

    //Products
    ALL_PRODUCTS_SELLER: "/products/me",
    PRODUCTS: "/products", // POST GET
    PRODUCTS_BY_ID: "/products/:productId",   // GET PUT
    PRODUCTS_EDIT_STATUS: "/products/:productId/:statusId",

    //Metrics
    METRICS_SOLD: "/sellers/metrics/products/sold",
    METRICS_AVAILABLE: "/sellers/metrics/products/available",
    METRICS_VIEW_MONTH: "/sellers/metrics/views",
    METRIC_VIEW_DAYS: "/sellers/metrics/views/days",
    METRIC_VIEW_WEEK: "/products/:productId/metrics/views",
    
    //Others
    PRODUCTS_VIEWS: "/products/:productId/views",
    CATEGORIES: "/categories",
    ATTACHMENTS: "/attachments",
  } as const
};

export {APP_ROUTES,API_ROUTES}

