function goTo(page) {
  AppState.navigation.currentPage = page;
  renderApp();
}
