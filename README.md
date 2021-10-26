# Solo Casacas - React - E-commerce

![cover](./src/components/assets/Argentina.jpg)


_Este proyecto es un e-commerce desarrollado mediante React.js. El concepto es una tienda virtual de camisetas de futbol, mediante el cual podemos aplicar todos los nuevos conocimientos adquiridos en este curso._

_La pagina web se puede ver en el dominio siguiente:._

https://chief-aftermath.surge.sh/ 

_o si prefiere tambien puede clonar el repositorio y seguir los siguientes pasos para poder observar el codigo y correr el sitio desde el programa que utilice para programar, en mi caso Visual Studio Code._


# Comienzo del proyecto Create React App

_El proyecto fue creado en visual studio code, una vez que tenemos la carpeta utilizamos la terminal
y  ejecutamos el comando npm install -g create-react-app (Con esto instalamos React Js)_.

_Una vez finalizada esa instalacion creamos la aplicacion usando el comando create-react-app my-app (Donde my-app es el nombre que le querramos poner al archivo)_

# Clonar repositorio

_Una de las maneras mas faciles que tenemos para clonar el repositorio es entrar a:_

https://github.com/Arturogrottoli/Reactivo

_Alli pulsamos el boton verde "code" y descargamos el archivo zip, el mismo debe ser descomprimido en la carpeta donde hayamos creado nuestra app._

# Instalaciones necesarias

_Para poder correr este sitio con normalidad necesitamos llevar a cabo varias instalaciones, de lo contrario hay elementos que no van a poder ser visualizados, o directamente no vamos a poder tener acceso a nuestra base de datos._

### `Bootstrap`

_Encargado de dar estilos y mejorar la parte estetica del sitio, para que se vean debemos instalarlo en React escribiendo el siguiente comando en la consola:_

npm install react-bootstrap bootstrap

### `FontAwesomeIcons`

_Son los iconos que utilizamos en el footer para las redes sociales y en el carrito del Navbar, para poder acceder a ellos se debe realizar la siguiente instalaciones en consola:_



### `Firebase`

_Es la base de datos donde se encuentran todos nuestros productos, para poder instalarla necesitamos tener una cuenta de gmail. En el sitio https://firebase.google.com/ se encuentra toda la informacion para poder utilizarla mediante React._



### `npm start`

_Para poder correr el sitio debemos colocarnos en el directorio de nuestra carpeta en la terminal y ejecutar npm start, esto nos va a abrir automaticamente el navegador con la direccion_
[http://localhost:3000](http://localhost:3000).


# Gif del sitio

_El sitio queda compuesto de la siguiente manera:_

![gif](./src/components/assets/Ecommerce.gif)

# Partes del la app

_Algunas de las partes fundamentales que componen el sitio son las siguientes:_

### `App.js`

_En el se encuentran todas las rutas y las funcionaes que componen el sitio, se encarga tambien de linkearlas segun corresponda._

### `NavBar.js`

_Se encarga de dirigirnos a las diferentes partes de la App (Inicio, contacto y cart) mediante los links, tambien utiliza funciones para lograr el filtrado entre camisetas de clubes y de selecciones_

### `Inicio`

_Mediante ItemList.js se mapean todos los elemenos de la base de datos y se imprimen con sus respectivas tarjetas._

### `ItemDetail.js`

_Se visualiza los items elegidos, pero con otro formato y con mas detalles, tambien utiliza el itemCount para poder elegir la cantidad de items a seleccionar y nos da la opcion de ir al carrito luego de hacerlo._

### `Cart`

_El carrito se encuentra vacio en primer instancia junto con un formulario para llenar los datos del comprador. A medida que vamos agregando items se los va mostrando con unas tarjetas mas pequeñas, junto con el precio total final de todos los elementos que vayamos acumulando dentro del carro._
