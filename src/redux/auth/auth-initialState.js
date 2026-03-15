const token = localStorage.getItem('token');

export const authInitialState = {
  user: { name: null, email: null },
  token: token || null,
  // isLoggedIn: null,
  isLoggedIn: !!localStorage.getItem('token'),
  isRefreshing: false,
};
