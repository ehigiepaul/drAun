Vue.component('bottom-bar', {
  data: function () {
    return {

    }
  },
  methods: {
    Home() {
      window.location.href = "/Home.html"
    },
    Info() {
      window.location.href = "/Info.html"
    },
    Window() {
      window.location.href = "/Window.html"
    }
  },
  template: `<div class="footer container-fluid"  height="50px">
    <div id="home" class="col-md-4 text-left" v-on:click="Home"><img id="hm" src="assets/img/icons8-a_home.png" height="30px" /></div>
    <div id="tab1" class="col-md-4 text-center" v-on:click="Window"><img id="dbag" src="assets/img/icons8-doctors_bag.png" height="30px" /></div>
    <div id="tab2" class="col-md-4 text-right" v-on:click="Info"><img id="aed" src="assets/img/icons8-aed.png" height="30px" /></div>
    <div></div>
</div>`
})
Vue.component('top-bar', {
  data: function () {
    return {

    }
  },
  methods: {
  },
  template: `<nav class="navbar navbar-light navbar-expand-md flex-grow-1 navigation-clean-search row" style="padding: 5px 20px;">
  <div class="container-fluid">
  <img src="assets/img/logo%201.png" height="40px" />
  <div id="settings" class="col-md-6" style="width: 50px;">
      <img src="assets/img/icons8-settings.png" height="30px" />
    </div>
  </div>
</nav>`
})