/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import {useParams} from "react-router-dom"
import data from "./data"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
/*import imagenAnimal from `../images/${thisService.foto1}`*/

const phoneIcon = <FontAwesomeIcon icon={faPhone} />
const userIcon = <FontAwesomeIcon icon={faUser} />
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />



function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
      const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
      
      <img src={images['lili.png']} />




function DetallesMascota(props) {
   
    const {serviceId} = useParams()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const thisService = data.find(service => service.id === serviceId)
   
   
   
    return (
        <div class="detalles--mascota">



        <div class="campos--izquierda--derecha">


      

        <div class="campos-izquierda">

        <div class="campos">
        
        <label>Especie</label>
        <br />
        <label>Raza</label>
        <br />
        <label>Sexo</label>
        <br />
        <label>Años</label>
        <br />
        <label>Meses</label>
        <br />
        <label>Chip</label>
        <br />
        <label>Placa</label>
        <br />
        <label>Cola</label>
        <br />
        <label>Orejas</label>
        <br />
        <label>Color</label>
        <br />
        <label>Manchas</label>
        <br />
        <label>Fecha</label>
        <br />
        <label>Observaciones</label>
        <br />


        </div>


        <div class="campos-datos">


        <label>{thisService.especie}</label>
        <br />
        <label>{thisService.raza}</label>
        <br />
        <label>{thisService.sexo}</label>
        <br />
        <label>{thisService.años}</label>
        <br />
        <label>{thisService.meses}</label>
        <br />
        <label>{thisService.chip}</label>
        <br />        
        <label>{thisService.placa}</label>
        <br />    
        <label>{thisService.cola}</label>
        <br />    
        <label>{thisService.orejas}</label>
        <br />    
        <label>{thisService.color}</label>
        <br />    
        <label>{thisService.manchas}</label>
        <br />  
        <label>{thisService.fecha}</label>
        <br />    
        <label class="observaciones">{thisService.observaciones}</label>
        
        
        </div>
       
        </div>
        


        <div class="campos-derecha">

        <h1 class="detalles--mascota--nombre">{thisService.nombre}</h1>
        <br />
        <img src={images[thisService.foto1]} class="detalles--mascota--imagen"/>

        </div>

        </div>



        <h3 id="datos-de-contacto">DATOS DE CONTACTO</h3>
        <div class="datos-contacto-dueño">
        
        <div class="box_dueño_nombre">
        <p id="box_dueño-user">{userIcon}</p>
        <p id="box_dueño-nombre-1">DUEÑO</p>
        <p id="box_dueño-nombre">{thisService.nombreDueño}</p>
        </div>


        <div class="box_dueño_telefono">
        <p id="box_dueño-user">{phoneIcon}</p>
        <p id="box_dueño-nombre-1">TELEFONO</p>
        <p id="box_dueño-nombre">{thisService.telefonoDueño}</p>
        </div>
        
        <div class="box_dueño_correo">
        <p id="box_dueño-user">{mailIcon}</p>
        <p id="box_dueño-nombre-1">CORREO</p>
        <p id="box_dueño-nombre">{thisService.mailDueño}</p>
        </div>
       
        </div>
      
        </div>
    )
}

export default DetallesMascota