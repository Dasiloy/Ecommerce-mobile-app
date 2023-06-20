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
  SHIPPING_LIST = 'Shipping List',
  PAYMENTS_LIST = 'Payments List',
  SINGLE_PAYMENT_LIST = 'Single Payment List',
  CART_SUCCESS = 'Cart Success',

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
