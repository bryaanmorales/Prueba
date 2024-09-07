Instrucciones para ejecutar el proyecto
Requisitos previos
Antes de empezar, asegúrate de tener instalados los siguientes programas en tu máquina:

1. Node.js (v12 o superior)
2. Visual Studio Code
3. Postman

Pasos para ejecutar el proyecto
1. Clona el repositorio
Clona el proyecto desde GitHub a tu máquina local usando el siguiente comando: git clone https://github.com/tu-usuario/nombre-del-repositorio.git
2. Abre el proyecto en Visual Studio Code
Abre Visual Studio Code.
En la barra de menú, selecciona File > Open Folder y selecciona la carpeta del proyecto que acabas de clonar.
3. Instala las dependencias
Abre una terminal en Visual Studio Code (Terminal > New Terminal).
Asegúrate de estar en la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:npm install
Esto instalará los paquetes necesarios como Express y body-parser.
4. Ejecuta el servidor
Una vez que las dependencias estén instaladas, inicia el servidor ejecutando el siguiente comando en la terminal: npm start
Esto levantará la API en el puerto 3000. Verás un mensaje como: API running on http://localhost:3000
5. Prueba la API usando Postman
Ahora puedes probar la API utilizando Postman. Asegúrate de que el servidor esté corriendo antes de hacer las solicitudes.

a) Crear un producto
1. En Postman, selecciona POST como método.
2. Introduce la siguiente URL: http://localhost:3000/products.
3. En la pestaña "Body", selecciona "raw" y luego "JSON".
4. Introduce un producto en formato JSON: {
  "name": "Laptop",
  "description": "High-end laptop",
  "price": 1500,
  "category": "Electronics"
}
5. Haz clic en Send y deberías recibir una respuesta con el producto creado.
b) Listar todos los productos
1. En Postman, selecciona GET como método.
2. Introduce la URL: http://localhost:3000/products.
3. Haz clic en Send y verás la lista de todos los productos.
c) Obtener un producto por ID
1. En Postman, selecciona GET.
2. Introduce la URL: http://localhost:3000/products/{id}, donde {id} es el ID del producto.
3. Haz clic en Send para obtener los detalles de un producto específico.
d) Actualizar un producto
1. En Postman, selecciona PUT.
2. Introduce la URL: http://localhost:3000/products/{id}.
3. En "Body", introduce los datos que deseas actualizar en formato JSON.
4. Haz clic en Send y recibirás el producto actualizado.
e) Eliminar un producto
1. En Postman, selecciona DELETE.
2. Introduce la URL: http://localhost:3000/products/{id}.
3. Haz clic en Send para eliminar el producto.
6. Detener el servidor
Para detener el servidor, simplemente presiona Ctrl + C en la terminal.



Link del video: https://www.loom.com/share/a2601db669254192a5bde7feea308f8e?sid=52dcbe6d-bdf9-4669-8573-f0b0090ddc82
