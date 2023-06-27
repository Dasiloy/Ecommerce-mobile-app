export enum Screens {
  // Auth screen
  LOGIN = 'Login',
  REGISTER = 'Register',
  FORGOT_PASSWORD = 'Forgot Password',
  // TABS
  HOME_TAB = 'Home',
  EXPLORE_TAB = 'Explore',
  CART_TAB = 'Cart',
  OFFER_TAB = 'Offer',
  ACCOUNT_TAB = 'Account',
  // HOMR SCREENS
  HOME = 'Home Screen',
  HOME_OFFER = 'Home Offer',
  FAVOURITES = 'Favorites',
  NOTIFICATIONS = 'Notifications',
  SINGLE_NOTIFICATION = 'Single Notification',
  PRODUCT_DETAIL = 'Product Detail',
  REVIEWS = 'Reviews',
  CREATE_REVIEW = 'New Features',
  // ACCOUNT SCREENS
  SETTINGS = 'Settings',
  PROFILE = 'Profile',
  ORDERS = 'Orders',
  ADDRESS = 'Address',
  PAYMENTS = 'Payments',
  //CART SCREENS
  CART = 'Cart Screen',
  CART_SHIPPING_LIST = 'Shipping List',
  CART_PAYMENTS_LIST = 'Payments List',
  CART_CARD_LIST = 'Cart Card List',
  // CATEGORY SCREENS
  CATEGORIES = 'Categories',
  SEARCH_RESULTS = 'Search Results',
  CATEGORY_LIST = 'Category List',
  FILTER_PAGE = 'Filter Page',
  SORT_PAGE = 'Sort Page',
  //OFFER SCREENS
  OFFERS = 'Offers',
}

export const HIDDEN_HOME_TABS = [
  Screens.HOME_OFFER,
  Screens.FAVOURITES,
  Screens.NOTIFICATIONS,
  Screens.SINGLE_NOTIFICATION,
  Screens.PRODUCT_DETAIL,
  Screens.REVIEWS,
  Screens.CREATE_REVIEW,
];

export const HIDDEN_CART_TABS = [
  Screens.CART_CARD_LIST,
  Screens.CART_PAYMENTS_LIST,
  Screens.CART_SHIPPING_LIST,
];
