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
  template: `<div style="height: 50px; background: #0c426f;" class="d-flex flex-column justify-content-center">
	<div class="d-flex justify-content-around">
		<img id="hm" @click="Home" src="assets/img/icons8-a_home.png" height="30px">
		<img id="aed" @click="Window" src="assets/img/icons8-aed.png" height="30px">
		<img id="dbag" @click="Info" src="assets/img/icons8-doctors_bag.png" height="30px"> 		 
	</div>
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