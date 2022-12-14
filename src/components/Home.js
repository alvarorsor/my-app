import React from "react"
import imagenPerros from "../images/perros.png"
import carousel_img_2 from "../images/carousel_item2.jpg"
import carousel_img_3 from "../images/carousel_item3.jpg"
import {Link} from "react-router-dom"
import card1 from "../images/card-item-1.jpg"
import card2 from "../images/card-item-2.jpg"
import card3 from "../images/card-item-3.jpg"
// Import our custom CSS


// Import all of Bootstrap's CSS


function Home() {

    
    return (
<div class="principal">


{/* Carousel */}
<div id="demo" class="carousel slide" data-bs-ride="carousel">


   {/* Indicators/dots */}
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>
  
    {/* The slideshow/carousel */}
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={carousel_img_3} alt="Los Angeles" class="d-block w-100 carousel-item-img" />
        <div class="carousel-caption">
        <h3>AMIGOS PERDIDOS</h3>
        <p>Un portal para reencontrarnos y ayudar a encontrar un nuevo hogar</p>
         </div>
      </div>
      <div class="carousel-item">
        <img src={carousel_img_2} alt="Chicago" class="d-block w-100 carousel-item-img" />
        <div class="carousel-caption">
        <h3>REGISTRA A TU AMIGO</h3>
        <p>Sube las fotos y datos de tu mascota, te ayudaremos en la busqueda</p>
      <Link to="/RegistrarMascota" class="nav-link btn--buscar--mascota">REGISTRAR MASCOTA</Link> 
         </div>
      </div>
      <div class="carousel-item">

        <img src={imagenPerros} alt="New York" class="d-block w-100 carousel-item-img" />
        <div class="carousel-caption">
        <div class="slider-control left">
        <h3>¿ENCONTRASTE A UN AMIGO PERDIDO?</h3>
        <p>Entra a nuestros registros para saber a quien se le perdió</p>
        <Link to="/BuscarMascota" class="nav-link btn--buscar--mascota">BUSCAR MASCOTA</Link>
        </div>
         </div>
      </div>
    </div>
  
   {/* Left and right controls/icons */}
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>


  </div>{/* cierra Carousel */}


      <div class="cards-home">

      <h1>¿QUIENES SOMOS?</h1>
      <p>Somos rescatistas que queremos facilitar la búsqueda de una mascota perdida o la de los humanos de la mascota encontrada. 
      Si nada de eso funciona podrás ponerla en adopción o llenarte de amor con una de ellas.</p>
      <br/>
  <div class="row row-cols-1 row-cols-md-3 g-4 ">

  <div class="col">
    <div class="card h-100 text-bg-light">
      <img src={card1} class="card-img-top" alt="..."/>
      <div class="card-body text-success">
        <h5 class="card-title text-center">Amigos de las mascotas</h5>
        <p class="card-text">Somos un grupo de asociaciones protectoras de animales</p>
      </div>
    
    </div>
  </div>

  <div class="col">
    <div class="card h-100 text-bg-light">
      <img src={card2} class="card-img-top" alt="..."/>
      <div class="card-body text-danger">
        <h5 class="card-title text-center">Ayudando a encontrarlos</h5>
        <p class="card-text">Publica aqui tus mascotas perdidas o busca entre las que se han reportado como perdidas</p>
      </div>
     
    </div>
  </div>

  <div class="col">
    <div class="card h-100 text-bg-light">
      <img src={card3} class="card-img-top" alt="..."/>
      <div class="card-body text-primary">
        <h5 class="card-title text-center">Mascotas encontradas</h5>
        <p class="card-text">Publica aqui la mascota que encontraste o busca entre las que se han encontrado personas
        con un lindo corazón que las pusieron a salvo</p>
      </div>
      
    </div>
  </div>


</div>
  </div>

   {/*    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    
    <div class="carousel-item active">
      
      <img class="d-block w-100 carousel-item" src={imagenPerros} alt="First slide"/>
     
    <div class="carousel-caption d-none d-md-block">
    <p>Amigos perdidos</p>
    <p>Un portal para reencontrarnos y ayudar a encontrar un nuevo hogar</p>
    </div>

    </div>

    <div class="carousel-item">
     
      <img class="d-block w-100 carousel-item" src={carousel_img_2} alt="Second slide"/>

      <div class="carousel-caption d-none d-md-block">
      <p>Si perdiste a tu mascota, no te preocupes, somos muchos y vamos a ayudarte a encontrarla junto con la comunidad</p>
      <li>Si perdiste una mascota seleccioná en “Registrar una mascota” y registrala en nuestro sistema para 
      poder ayudarte a encontrarla</li>
    </div>

    </div>

    <div class="carousel-item">
     
      <img class="d-block w-100 carousel-item" src={carousel_img_3} alt="Third slide"/>

      <div class="carousel-caption d-none d-md-block">
    <p>Amigos perdidos</p>
    <p>Un portal para reencontrarnos y ayudar a encontrar un nuevo hogar</p>
    </div>

    </div>

  </div>


  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>


</div>

  
   
    


    <div class="principal--seccion--derecha">

    <h1>Home Page</h1>
        <img src={imagenPerros} />
        <p>Amigos perdidos</p>
        <p>Un portal para reencontrarnos y ayudar a encontrar un nuevo hogar</p>

        <p>Si perdiste a tu mascota, no te preocupes, somos muchos y vamos a ayudarte a encontrarla junto con la comunidad</p>
        <ul>
            <li>Seleccioná en “Registrar una mascota” y registrate creando una cuenta en el portal.</li>
            <li>Posteriormente, completá los datos de tu mascota perdida en la plantilla. Mientras mas detalles brindes, mejor. No te olvides de subir fotos en buena calidad.</li>
            <li>Publicá a tu mascota en la plataforma. ¡Miles de personas verán la publicación aquí y te ayudarán en la búsqueda!. Nosotros nos encargaremos de difundirla en nuestras redes sociales y te avisaremos ante cualquier novedad.</li>
        </ul>
    
     </div>*/}
       
       
       
 </div>
    )
}

export default Home