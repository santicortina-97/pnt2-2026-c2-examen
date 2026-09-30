# PROGRAMACION DE NUEVAS TECNOLOGIAS 2
Santiago Manuel Cortina

## Instrucciones de resolución de examen

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador react.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegares, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de nodejs que ya tiene codigo base del frontend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo.

> 1. Realizar un Fork del presente repositorio
> 2. Realizar un clone de repositorio en tu cuenta de github
> 3. Instalar las dependencias
> 4. La url del backend es: https://backendairbnb-befph8eegzabfudb.eastus2-01.azurewebsites.net/ ya se encuentra desplegado en un app services en Azure. Por ahora solo existe un endpoint.
>    El backend se conecta con una base de datos Mongodb en la cual se encuentra la base de datos **sample_airbnb** con una collection llamada **listingsAndReviews**, ahí se encuentran aprox. 55.000 listados de airbnb.
> 5. Proba el endpoint que ya se encuentra desarrollado: /api/listingsAndReviews debería retornar un json con 55.000 listados de airbnb. Sin embargo te aconsejo que uses el paginado que tiene para probar (mira la definición del end-point a continuación). Sí por algun motivo no llegase a funcionar, solicita asistencia.
>    -GET /api/listings?pageSize=[pageSize]&page=[page]
> 6. Ademas este endpoint requiere autenticacion con un token de jwt, por lo cual debes registrar un usuario en el backend y obtener el token para poder hacer peticiones.
>    -POST /api/users/register
>    -POST /api/users/login

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
>
> 1. Generar un nuevo componente pagina para el listado de airbnb llamado **AirbnbList**, agregarlo el menu con un icono de casa.
> 2. Implementar un listado de airbnb en el componente **AirbnbList**. Que tenga las propiedades "name, listing_url, summary" y la foto si es que tiene. Con los primeros 100 airbnb.
    - Consumiendo la api `/api/listings?pageSize=100&page=1` 
    - Usar el localStorage para obtener el token de autenticacion
> 3. Agregar funcionalidad de favoritos y almacenarlos en el localStorage.
> 4. Implementar la paginaß detalle de cada una da las propiedades de airbnb.
> 5. Implementar el paginado en el componente **AirbnbList**.

> Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

## Intrucciones para la entrega

Si ya terminaste o si son las 10:00 asegurate de seguir los siguientes pasos para la entrega:

1. Realizar un commit a tu repo con un mensaje con tu nombre completo
2. Realizar un push a tu repositorio
3. Realizar un pull request a mi repositorio
