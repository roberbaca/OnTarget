On Target es un prototipo realizado para la materia "Prototipado Rápido" dictada en la Universidad Nacional del Litoral para la carrera Tecnicatura en Diseño y Programación de Videojuegos, con la siguiente consigna:

CORE MECHANIC: explore en el prototipo a realizar una core mechanic que incluya como componente crucial, el concepto de “Rebote”. Solo se pueden utilizar 3 sprites, ni uno mas, ni uno menos. Se pueden duplicar, modificar, replicar y adaptar pero no utilizar otros nuevos.



Desarrollado en COCOS CREATOR 2.4.4 y escrito en TypeScript. 

En este prototipo utilicé las funcionalidades de Box2D y el motor de físicas que trae el engine para lograr los rebotes. Las paredes son cuerpos estáticos que no responden a la física, mientras que el objeto que se dispara (la bala) es un cuerpo dinámico, afectado por las fuerzas de la simulación (la gravedad se ajustó a cero)
