Vue.component("navbar", {
  template: `<div>
          <div class="position-relative p-0">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
              <a href="" class="navbar-brand p-0">
                  <h1 class="text-primary m-0">Restaurant &nbsp;<i class="fa fa-utensils me-3"></i>Milagros</h1>
                  
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span class="fa fa-bars"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                  <div class="navbar-nav ms-auto py-0 pe-4">
                      <router-link to="/"><a class="nav-item nav-link active">Menu</a></router-link>
                      <a v-b-modal.about class="nav-item nav-link" >Nosotros</a>
                      <a v-b-modal.service class="nav-item nav-link">Servicios</a>
                      <router-link to="/eat"><a class="nav-item nav-link">Menú</a></router-link>
                      <router-link to="/booking"><a class="nav-item nav-link">Reserva</a></router-link>
                      <a href="testimonial.html"class="nav-item nav-link">Reseñas</a>
                      <router-link to="/contact"><a class="nav-item nav-link">Contacto</a></router-link>
                      <router-link to="/contact"><a class="nav-item nav-link">Contacto</a></router-link>
                  </div>
              </div>
          </nav>
      
      </div>
      <b-modal id="about" size="xl" title="Sobre Nosotros">
          <about></about>
      </b-modal>
      <b-modal id="service" size="xl" hide-footer title="Servicios">
          <service></service>
      </b-modal>
        </div>`,
});

Vue.component("foot", {
  template: `<div>
          <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
              <div class="container py-5">
                  <div class="row g-5">
                      <div class="col-lg-3 col-md-6">
                          <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                          <a class="btn btn-link" href="">About Us</a>
                          <a class="btn btn-link" href="">Contact Us</a>
                          <a class="btn btn-link" href="./booking.html">Reservation</a>
                          <a class="btn btn-link" href="">Privacy Policy</a>
                          <a class="btn btn-link" href="">Terms & Condition</a>
                          <div class="d-flex pt-2">
                              <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-twitter"></i></a>
                              <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-facebook-f"></i></a>
                              <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-youtube"></i></a>
                              <a class="btn btn-outline-light btn-social" href="https://freewebsitecode.com"><i class="fab fa-linkedin-in"></i></a>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6">
                          <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                          <p class="btn btn-link"><i class="fa fa-map-marker-alt me-3"></i><a href="https://goo.gl/maps/1zw6EhP4BWX7uchMA" target="_blank">Plaça de Milagros Consarnau i Sabaté, 33, 08902 L'Hospitalet de Llobregat, Barcelona</a></p>
                          <p class="btn btn-link"><i class="bi bi-phone me-3"></i><a href="tel:+34 632 33 53 56">+34 632 33 53 56</a></p>
                          <p class="btn btn-link"><i class="fa fa-phone-alt me-3"></i><a href="tel:+34 933 60 68 24">+34 933 60 68 24</a></p>
                          <p class="btn btn-link"><i class="fa fa-envelope me-3"></i>
                              <a href="mailto:restaurantemilagros33@gmail.com">Clic Correo</a>
                              </p>
                      </div>
                      <div class="col-lg-3 col-md-6">
                          <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                          <h5 class="text-light fw-normal">Domingo - Jueves</h5>
                          <p>11:00 - 23:59</p>
                          <h5 class="text-light fw-normal">Viernes - Sabado</h5>
                          <p>11:00 - 01:00</p>
                          <a href="" class="btn btn-primary py-2 px-4">Contact</a>
                      </div>
                       <div class="col-lg-3 col-md-6">
                          <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Ubicación</h4>
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.381433064206!2d2.127872415655295!3d41.365796905295845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4997c3f14cdcd%3A0xabea9f54cc35602c!2sRestaurante%20Milagros!5e0!3m2!1ses!2ses!4v1674404913953!5m2!1ses!2ses" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div> 
                  </div>
              </div>
              <div class="container">
                  <div class="copyright">
                      <div class="row">
                          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                              &copy; <a class="border-bottom" href="#">Restauran Milagros</a>, All Right Reserved. 
                              
                              
                              Designed By <a class="border-bottom" href="http://www.singh.cat/" target="_blank">Gurpreet Singh</a>
                          </div>
                          <div class="col-md-6 text-center text-md-end">
                              <div class="footer-menu">
                                  <a href="">Home</a>
                                  <a href="">Cookies</a>
                                  <a href="">Help</a>
                                  <a href="">FQAs</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <br>
          </div>
        </div>`,
});
Vue.component("service", {
  template: `<div>
          <div class="py-5" id="service">
                  <div class="container">
                      <div class="row g-4">
                          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                              <div class="service-item rounded pt-3">
                                  <div class="p-4">
                                      <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                      <h5>Master Chefs</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                              <div class="service-item rounded pt-3">
                                  <div class="p-4">
                                      <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                      <h5>Quality Food</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                              <div class="service-item rounded pt-3">
                                  <div class="p-4">
                                      <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                      <h5>Online Order</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                              <div class="service-item rounded pt-3">
                                  <div class="p-4">
                                      <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                                      <h5>24/7 Service</h5>
                                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>`,
});
Vue.component("team", {
  template: `<div>
                <div class="pt-5 pb-3">
                    <div class="container">
                        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 class="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                            <h1 class="mb-5">Our Master Chefs</h1>
                        </div>
                        <div class="row g-4">
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="team-item text-center rounded overflow-hidden">
                                    <div class="rounded-circle overflow-hidden m-4">
                                        <img class="img-fluid" src="img/team-1.jpeg" alt="">
                                    </div>
                                    <h5 class="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div class="d-flex justify-content-center mt-3">
                                        <a class="btn btn-square btn-primary mx-1" href="https://facebook.com/freewebsitecode"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-primary mx-1" href="https://freewebsitecode.com/"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-primary mx-1" href="https://youtube.com/freewebsitecode"><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="team-item text-center rounded overflow-hidden">
                                    <div class="rounded-circle overflow-hidden m-4">
                                        <img class="img-fluid" src="img/team-2.jpeg" alt="">
                                    </div>
                                    <h5 class="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div class="d-flex justify-content-center mt-3">
                                        <a class="btn btn-square btn-primary mx-1" href="https://facebook.com/freewebsitecode"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-primary mx-1" href="https://freewebsitecode.com/"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-primary mx-1" href="https://youtube.com/freewebsitecode"><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="team-item text-center rounded overflow-hidden">
                                    <div class="rounded-circle overflow-hidden m-4">
                                        <img class="img-fluid" src="img/team-1.jpeg" alt="">
                                    </div>
                                    <h5 class="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div class="d-flex justify-content-center mt-3">
                                        <a class="btn btn-square btn-primary mx-1" href="https://facebook.com/freewebsitecode"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-primary mx-1" href="https://freewebsitecode.com/"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-primary mx-1" href="https://youtube.com/freewebsitecode"><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div class="team-item text-center rounded overflow-hidden">
                                    <div class="rounded-circle overflow-hidden m-4">
                                        <img class="img-fluid" src="img/team-2.jpeg" alt="">
                                    </div>
                                    <h5 class="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div class="d-flex justify-content-center mt-3">
                                        <a class="btn btn-square btn-primary mx-1" href="https://facebook.com/freewebsitecode"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-primary mx-1" href="https://freewebsitecode.com/"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-primary mx-1" href="https://youtube.com/freewebsitecode"><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>`,
});
Vue.component("about", {
  template: `<div>
          <div class="py-5" id="us">
                  <div class="container">
                      <div class="row g-5 align-items-center">
                          <div class="col-lg-6">
                              <div class="row g-3">
                                  <div class="col-6 text-start">
                                      <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg">
                                  </div>
                                  <div class="col-6 text-start">
                                      <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" style="margin-top: 25%;">
                                  </div>
                                  <div class="col-6 text-end">
                                      <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg">
                                  </div>
                                  <div class="col-6 text-end">
                                      <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg">
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6">
                              <h5 class="section-title ff-secondary text-start text-primary fw-normal">Nosotros</h5>
                              <h1 class="mb-4">Bienvenidos en Restaurante<i class="fa fa-utensils text-primary me-2"></i>Milagros</h1>
                              <p class="mb-4">Milagros es un restaurante situado en el centro de barcelona. El horario, ininterrumpido, desde 11 de mañana y hasta las 12 de la noche, todos los días de la semana, lo convierte en un punto de encuentro ideal para un almuerzo, unas tapas a media tarde o bien una cena informal.</p>
                              <p class="mb-4">Soportamos un viaje a través de sobres, texturas y tradiciones. Un viaje a través de otros territorios, de otras culturas, además de la nuestra. Proponemos un formato de tapasy platillos y bajo concepto de compartir. </p>
                              <p class="mb-4">El restaurante cuenta, también, con una pequeña terraza. Las mesas están distribuidas en paralelo, con tranquilidad del interior y el caminar de la gente en el exterior. 
                              Una mesa en la barra, frente a la cocina, permite asistir, en directo, a preparación, mise en place y emplatados. </p>
                              <p class="mb-4">¡Será un placer darles la bienvenida a nuestro restaurante!</p>
                              <div class="row g-4 mb-4">
                                  <div class="col-sm-6">
                                      <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                          <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                          <div class="ps-4">
                                              <p class="mb-0">Years of</p>
                                              <h6 class="text-uppercase mb-0">Experience</h6>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-6">
                                      <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                          <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">4</h1>
                                          <div class="ps-4">
                                              <p class="mb-0">Popular</p>
                                              <h6 class="text-uppercase mb-0">Master Chefs</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                          </div>
                      </div>
                  </div>
              </div>
              <team></team>
        </div>`,
});

Vue.component("menulist", {
  data: function () {
    return {
      list: [],
      l: 0,
      type: "",
    };
  },
  async mounted() {
    await fetch(
      "http://http://localhost:8080/rest/js/backend/menulist.php?type=Ensaladas",
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((menu) => (this.list = console.log(menu)));
    // console.log(this.list);
    // console.log(this.list.producto);
  },
  template: `<div>
          <div class="py-5">
                  <div class="container">
                      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                          <h5 class="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                          <h1 class="mb-5">Most Popular Items</h1>
                      </div>
                      <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                          <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                              <li class="nav-item">
                                  <a @click="buscarMenu('Ensaladas')" class="d-flex align-items-center text-start mx-6 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                      <i class="fa fa-coffee fa-2x text-primary"></i>
                                      <div class="ps-3">
                                          <small class="text-body">Popular</small>
                                          <h6 class="mt-n1 mb-0">Breakfast</h6>
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a @click="buscarMenu('Tapas frías')" 
                                   class="d-flex align-items-center text-start mx-5 pb-3" data-bs-toggle="pill" href="#tab-2">
                                      <i class="fa fa-hamburger fa-2x text-primary"></i>
                                      <div class="ps-3">
                                          <small class="text-body">Special</small>
                                          <h6 class="mt-n1 mb-0">Launch</h6>
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a @click="buscarMenu('Tapas frías')" 
                                   class="d-flex align-items-center text-start mx-5 pb-3" data-bs-toggle="pill" href="#tab-3">
                                      <i class="fa fa-hamburger fa-2x text-primary"></i>
                                      <div class="ps-3">
                                          <small class="text-body">Special</small>
                                          <h6 class="mt-n1 mb-0">Launch</h6>
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a @click="buscarMenu('Tapas frías')" 
                                   class="d-flex align-items-center text-start mx-5 pb-3" data-bs-toggle="pill" href="#tab-4">
                                      <i class="fa fa-hamburger fa-2x text-primary"></i>
                                      <div class="ps-3">
                                          <small class="text-body">Special</small>
                                          <h6 class="mt-n1 mb-0">Launch</h6>
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a @click="buscarMenu('Tapas frías')" 
                                   class="d-flex align-items-center text-start mx-5 pb-3" data-bs-toggle="pill" href="#tab-5">
                                      <i class="fa fa-hamburger fa-2x text-primary"></i>
                                      <div class="ps-3">
                                          <small class="text-body">Special</small>
                                          <h6 class="mt-n1 mb-0">Launch</h6>
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a @click="buscarMenu('Tapas frías')" 
                                   class="d-flex align-items-center text-start mx-5 pb-3" data-bs-toggle="pill" href="#tab-6">
                                      <i class="fa fa-hamburger fa-2x text-primary"></i>
                                      <div class="ps-3">
                                          <small class="text-body">Special</small>
                                          <h6 class="mt-n1 mb-0">Launch</h6>
                                      </div>
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a @click="buscarMenu('Tapas frías')" 
                                   class="d-flex align-items-center text-start mx-5 pb-3" data-bs-toggle="pill" href="#tab-7">
                                      <i class="fa fa-hamburger fa-2x text-primary"></i>
                                      <div class="ps-3">
                                          <small class="text-body">Special</small>
                                          <h6 class="mt-n1 mb-0">Launch</h6>
                                      </div>
                                  </a>
                              </li>
                          </ul>
                          <div class="tab-content">
                              <div id="tab-1" class="tab-pane fade show p-0 active" >
                                  <div class="row g-4" v-for="l in 8" >
                                      <div class="col-lg-6" v-if="(l-1)%2 == '0'">
                                          <div class="d-flex align-items-center" >
                                              <img class="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style="width: 80px;">
                                              <div class="w-100 d-flex flex-column text-start ps-4">
                                                  <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                      <span>{{ list.producto[l-1] S}}</span>
                                                      <span class="text-primary">  Euros</span>
                                                  </h5>
                                                  <small class="fst-italic">  </small>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="row g-4"  >
                                      <div class="col-lg-6">
                                          <div class="d-flex align-items-center">
                                              <img class="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style="width: 80px;">
                                              <div class="w-100 d-flex flex-column text-start ps-4">
                                                  <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                      <span></span>
                                                      <span class="text-primary"> Euros</span>
                                                  </h5>
                                                  <small class="fst-italic">  </small>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div id="tab-2" class="tab-pane fade show p-0" >
                                  
                                  <br>
                              </div>
                              </div>
                              <div id="tab-3" class="tab-pane fade show p-0">
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>`,
  methods: {
    buscarMenu: async function (type) {
      await fetch(
        "http://localhost:8080/rest/js/backend/menulist.php?type=" + type
      )
        .then((response) => response.json())
        .then((data) => {
          this.list = console.log(data);
        });
    },
  },
});

Vue.component("testi", {
  template: `<div>
          <div class="py-5 wow fadeInUp" data-wow-delay="0.1s" id="testimonial">
                  <div class="container">
                      <div class="text-center">
                          <h5 class="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                          <h1 class="mb-5">Our Clients Say!!!</h1>
                      </div>
                      <div class="owl-carousel testimonial-carousel">
                          <div class="testimonial-item bg-transparent border rounded p-4">
                              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                              <div class="d-flex align-items-center">
                                  <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style="width: 50px; height: 50px;">
                                  <div class="ps-3">
                                      <h5 class="mb-1">Client Name</h5>
                                      <small>Profession</small>
                                  </div>
                              </div>
                          </div>
                          <div class="testimonial-item bg-transparent border rounded p-4">
                              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                              <div class="d-flex align-items-center">
                                  <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style="width: 50px; height: 50px;">
                                  <div class="ps-3">
                                      <h5 class="mb-1">Client Name</h5>
                                      <small>Profession</small>
                                  </div>
                              </div>
                          </div>
                          <div class="testimonial-item bg-transparent border rounded p-4">
                              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                              <div class="d-flex align-items-center">
                                  <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style="width: 50px; height: 50px;">
                                  <div class="ps-3">
                                      <h5 class="mb-1">Client Name</h5>
                                      <small>Profession</small>
                                  </div>
                              </div>
                          </div>
                          <div class="testimonial-item bg-transparent border rounded p-4">
                              <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
                              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                              <div class="d-flex align-items-center">
                                  <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" style="width: 50px; height: 50px;">
                                  <div class="ps-3">
                                      <h5 class="mb-1">Client Name</h5>
                                      <small>Profession</small>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>`,
});

Vue.component("reservation", {
  template: `<div>
              <div class="py-5 px-0 wow fadeInUp" data-wow-delay="0.1s" >
                  <div class="row g-0">
                      <div class="col-md-6">
                          <div class="video">
                              <button type="button" class="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                  <span></span>
                              </button>
                          </div>
                      </div>
                      <div class="col-md-6 bg-dark d-flex align-items-center">
                          <div class="p-5 wow fadeInUp" data-wow-delay="0.2s">
                              <h5 class="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                              <h1 class="text-white mb-4">Book A Table Online</h1>
                              <form>
                                  <div class="row g-3">
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input type="text" class="form-control" id="name" placeholder="Your Name">
                                              <label for="name">Your Name</label>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input type="email" class="form-control" id="email" placeholder="Your Email">
                                              <label for="email">Your Email</label>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-floating date" id="date3" data-target-input="nearest">
                                              <input type="text" class="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                              <label for="datetime">Date & Time</label>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <select class="form-select" id="select1">
                                                  <option value="1">People 1</option>
                                                  <option value="2">People 2</option>
                                                  <option value="3">People 3</option>
                                              </select>
                                              <label for="select1">No Of People</label>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="form-floating">
                                              <textarea class="form-control" placeholder="Special Request" id="message" style="height: 100px"></textarea>
                                              <label for="message">Special Request</label>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <button class="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
      
              <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                      <div class="modal-content rounded-0">
                          <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <!-- 16:9 aspect ratio -->
                              <div class="ratio ratio-16x9">
                                  <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always" allow="autoplay"></iframe>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              </div>`,
});

Vue.component("cont", {
  template: `<div>
      <div class="py-5">
      <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 class="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
              <h1 class="mb-5">Contact For Any Query</h1>
          </div>
          <div class="row g-4">
              <div class="col-12">
                  <div class="row gy-4">
                      <div class="col-md-4">
                          <h5 class="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                          <p><i class="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                      </div>
                      <div class="col-md-4">
                          <h5 class="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                          <p><i class="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                      </div>
                      <div class="col-md-4">
                          <h5 class="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                          <p><i class="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                  <iframe class="position-relative rounded w-100 h-100"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1082.5086077081824!2d2.1290600507050774!3d41.36544102865864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4997c3f14cdcd%3A0xabea9f54cc35602c!2sRestaurante%20Milagros!5e0!3m2!1ses!2ses!4v1674342231392!5m2!1ses!2ses"
                      frameborder="0" style="min-height: 350px; border:0;" allowfullscreen="" aria-hidden="false"
                      tabindex="0"></iframe>
              </div>
              <div class="col-md-6">
                  <div class="wow fadeInUp" data-wow-delay="0.2s">
                      <form>
                          <div class="row g-3">
                              <div class="col-md-6">
                                  <div class="form-floating">
                                      <input type="text" class="form-control" id="name" placeholder="Your Name">
                                      <label for="name">Your Name</label>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="form-floating">
                                      <input type="email" class="form-control" id="email" placeholder="Your Email">
                                      <label for="email">Your Email</label>
                                  </div>
                              </div>
                              <div class="col-12">
                                  <div class="form-floating">
                                      <input type="text" class="form-control" id="subject" placeholder="Subject">
                                      <label for="subject">Subject</label>
                                  </div>
                              </div>
                              <div class="col-12">
                                  <div class="form-floating">
                                      <textarea class="form-control" placeholder="Leave a message here" id="message" style="height: 150px"></textarea>
                                      <label for="message">Message</label>
                                  </div>
                              </div>
                              <div class="col-12">
                                  <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
                </div>`,
});

const home = Vue.component("home", {
  template: `<div>
            <div v-if="logon == false">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-2"></div>
                        <div class="col-lg-6 col-md-8 login-box">
                            <div class="col-lg-12 login-key"><i class="fa fa-key" aria-hidden="true"></i></div>
                            <div class="col-lg-12 login-title">ADMIN PANEL</div>
                            <div class="col-lg-12 login-form">
                                <div class="col-lg-12 login-form">
                                    <form>
                                        <div class="form-group">
                                            <label class="form-control-label">USERNAME</label>
                                            <input type="text" class="form-control" v-model="form.username">
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">PASSWORD</label>
                                            <input type="password" class="form-control" v-model="form.password">
                                        </div>

                                        <div class="col-lg-12 loginbttm">
                                            <div class="col-lg-6 login-btm login-text">
                                                <!-- Error Message -->
                                            </div>
                                            <div class="col-lg-6 login-btm login-button">
                                                <button type="submit" class="btn btn-outline-primary" @click="submitLogin();">LOGIN</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-2"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div v-else>
                <navbar></navbar>
                </div>
            </div>`,
  data: function () {
    return {
      data2: null,
      form: {
        username: "",
        password: "",
      },
      logon: false,
    };
  },
  methods: {
    async submitLogin() {
      const enviar = new FormData();
      enviar.append("username", this.form.username);
      enviar.append("password", this.form.password);

      await fetch("../js/backend/getusers.php", {
        method: "POST",
        body: enviar,
      })
        .then((response) => response.json())
        .then((data) => (this.data2 = data));

      if (this.data2[0] == "done") {
        this.logon = true;
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    },
  },
});

const booking = Vue.component("reserva", {
  mounted() {
    history.forward();
  },
  template: `<div>
          
            </div>`,
  data: function () {
    return {};
  },
});

const contact = Vue.component("contacto", {
  template: `<div>
          <div class="position-relative p-0">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
              <a href="" class="navbar-brand p-0">
                  <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>Restaurant</h1>
                  <!-- <img src="img/logo.png" alt="Logo"> -->
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span class="fa fa-bars"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                  <div class="navbar-nav ms-auto py-0 pe-4">
                      <router-link to="/"><a class="nav-item nav-link">Home</a></router-link>
                      <router-link to="/eat"><a  class="nav-item nav-link">Menu</a></router-link>
                      <router-link to="/booking"><a class="nav-item nav-link ">Booking</a></router-link>
                      <router-link to="/contact"><a class="nav-item nav-link active">Contact</a></router-link>
                  </div>
              </div>
          </nav>
          <div class="py-5 bg-dark hero-header mb-5">
              <div class="container text-center my-5 pt-5 pb-4">
                  <h1 class="display-3 text-white mb-3 animated slideInDown">Contacto </h1>
                  <nav aria-label="breadcrumb">
                      <ol class="breadcrumb justify-content-center text-uppercase">
                          <li class="breadcrumb-item">Home</li>
                          <li class="breadcrumb-item">Pages</li>
                          <li class="breadcrumb-item text-white active"">Contacto</li>
                      </ol>
                  </nav>
              </div>
          </div>
          </div>
              <cont></cont>
              <foot></foot>
              </div>`,
  data: function () {
    return {};
  },
});

const m = Vue.component("comida", {
  template: `<div>
                <navbarside></navbarside>
                <menulist></menulist>
                <foot></foot>
                </div>`,
  data: function () {
    return {};
  },
});

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/booking",
    component: booking,
  },
  {
    path: "/contact",
    component: contact,
  },
  {
    path: "/eat",
    component: m,
  },
];

const router = new VueRouter({ routes });

let app = new Vue({
  el: "#app",
  router,
  //   pinia,
  data: {},
  //   computed: {
  //     ...Pinia.mapState(userStore, ["data", "logged"]),
  //   },
});
