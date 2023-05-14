/* Fetch API */

// API endpoint
const apiUrl = '';

// model object
const model = {
  data: [],
  fetchData: async function() {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    this.data = jsonData;
    this.notifyObservers();
  },
  addObserver: function(observer) {
    this.observers.push(observer);
  },
  removeObserver: function(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  },
  notifyObservers: function() {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].update(this.data);
    }
  },
  observers: []
};

// view object
const view = {
  init: function() {
    this.postList = document.getElementById('post-list');
    this.loadingIndicator = document.getElementById('loading-indicator');
    this.renderLoading();
    model.addObserver(this);
  },
  renderLoading: function() {
    this.postList.innerHTML = '';
    this.loadingIndicator.style.display = 'block';
  },
  renderPosts: function(data) {
    let postListItems = '';
    for (let i = 0; i < data.length; i++) {
      postListItems += `<li><strong>${data[i].title}</strong><br>${data[i].body}</li>`;
    }
    this.postList.innerHTML = postListItems;
    this.loadingIndicator.style.display = 'none';
  },
  renderError: function() {
    this.postList.innerHTML = '<li>Failed to load posts.</li>';
    this.loadingIndicator.style.display = 'none';
  },
  update: function(data) {
    if (data.length > 0) {
      this.renderPosts(data);
    } else {
      this.renderError();
    }
  }
};

// controller object
const controller = {
  init: function() {
    model.addObserver(this);
    view.init();
    model.fetchData();
  },
  update: function(data) {
    view.update(data);
  }
};

// Initialize the controller
// controller.init();
