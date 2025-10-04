'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "phrases",
      [
        {
          name: "El dolor es temporal, el orgullo es para siempre.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No se trata de ser el mejor, se trata de ser mejor que ayer.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo único imposible es aquello que no intentas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca te rindas. La victoria puede estar más cerca de lo que crees.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu cuerpo puede soportar casi cualquier cosa. Es tu mente la que tienes que convencer.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La fuerza no viene de lo que puedes hacer, viene de superar lo que pensaste que no podías.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoy es el primer día del resto de tu vida. Haz que cuente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La motivación te impulsa a empezar, pero es el hábito lo que te mantiene en marcha.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada repetición es una oportunidad para mejorar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No pares cuando estés cansado, para cuando hayas terminado.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si no te desafía, no te cambia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo con pasión o no lo hagas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo único que está entre tú y tu meta es la voluntad de intentarlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Un entrenamiento duro nunca se olvida.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te compares con otros. Compite contra ti mismo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu único límite es lo que tú crees que puedes lograr.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Un cuerpo en movimiento sigue moviéndose.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La mente es el músculo más importante.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo hoy. No dejes para mañana lo que puedes hacer ahora.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu esfuerzo de hoy define tu éxito de mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo por tu salud, hazlo por ti.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los grandes resultados requieren tiempo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada día es una nueva oportunidad para ser mejor.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El cuerpo logra lo que la mente cree.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nada sucede hasta que tú te mueves.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tienes el poder de decidir lo que quieres lograr.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz más de lo que te hace feliz.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El límite está en tu mente, no en tu cuerpo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cuando sientas que vas a rendirte, piensa en por qué empezaste.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Todo lo que quieres está al otro lado del miedo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Las excusas no queman calorías.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada día cuenta, cada repetición suma.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La única manera de hacer un gran trabajo es amar lo que haces.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El sudor de hoy es el éxito de mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La perseverancia convierte lo imposible en posible.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La diferencia entre ganar y perder está en la disciplina.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si no te esfuerzas, no avanzarás.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te limites a soñar, hazlo realidad.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El camino hacia el éxito está lleno de desafíos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz que tus sueños trabajen tan duro como tú.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El entrenamiento es la clave para desbloquear tu mejor versión.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Esfuerzo + Consistencia = Éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito empieza con un solo paso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No esperes que los resultados lleguen si no haces nada por ellos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La mente siempre vence al cuerpo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La disciplina es el puente entre metas y logros.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sé más fuerte que tu excusa.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Todo es posible si lo deseas con suficiente fuerza.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La única forma de fallar es dejar de intentarlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Alcanza lo que creías inalcanzable.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No es lo que haces hoy, sino cómo lo haces.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Empieza donde estás, usa lo que tienes, haz lo que puedas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo nunca es en vano.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Aprovecha cada día para avanzar un paso más.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La motivación te impulsa, la disciplina te mantiene.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No se trata de ser perfecto, se trata de ser mejor que ayer.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La verdadera motivación es interna, no externa.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu esfuerzo define tu éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Las grandes cosas no se logran de la noche a la mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La competencia no es con otros, es contigo mismo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo por tu futuro, no por tu pasado.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada repetición te acerca a tus objetivos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada día es una nueva oportunidad para mejorar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La diferencia entre lo que eres ahora y lo que quieres ser está en el trabajo que pongas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No es fácil, pero te prometo que vale la pena.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que hoy parece difícil, mañana será más fácil.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La disciplina te hace libre.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La verdadera motivación viene de la pasión por lo que haces.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo de hoy crea el éxito de mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te limites, los límites solo están en tu mente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No se trata de cuántas veces caes, sino de cuántas te levantas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La vida no es esperar a que pase la tormenta, es aprender a bailar bajo la lluvia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La salud no lo es todo, pero sin ella, todo lo demás pierde valor.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Esfuérzate por progresar, no por la perfección.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Todo lo que valga la pena siempre tendrá su precio.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El único fracaso es no intentarlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La clave del éxito es empezar antes de estar listo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La constancia es la clave para superar cualquier desafío.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz lo que puedas, con lo que tengas, donde estés.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu límite es solo un obstáculo mental.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La acción es la clave para alcanzar cualquier meta.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca sabrás lo que puedes lograr hasta que lo intentes.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Al final del esfuerzo, viene la recompensa.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No importa cuántas veces caigas, sino cuántas veces te levantes.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Un paso a la vez es un paso hacia adelante.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Las metas sin acción son solo sueños.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El único modo de hacer un gran trabajo es amar lo que haces.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sigue adelante. El esfuerzo siempre tiene su recompensa.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La disciplina es el camino hacia el éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu futuro comienza con lo que haces hoy.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No hay atajos, solo trabajo duro y consistencia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El sudor de hoy es el éxito de mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada esfuerzo cuenta, cada día cuenta.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si no luchas por lo que quieres, no llores por lo que pierdes.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz hoy lo que otros no quieren hacer, haz mañana lo que otros no pueden hacer.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Es más fácil dejarlo para mañana, pero el éxito se construye hoy.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te concentres en el dolor, enfócate en la meta.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito es la suma de pequeños esfuerzos, día tras día.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca subestimes el poder de la perseverancia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cree en ti mismo y serás imparable.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si no te desafías a ti mismo, no crecerás.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu esfuerzo hoy es tu victoria mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El entrenamiento de hoy es la base de tu éxito futuro.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz lo que puedas con lo que tengas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Las grandes cosas no vienen de la zona de confort.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito no es para los que piensan en rendirse.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La única manera de predecir el futuro es crearlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No se trata de ser el mejor, sino de ser mejor que antes.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los límites solo existen en tu mente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu esfuerzo define tu destino.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoy puede ser el día en el que cambies tu vida.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito comienza con la decisión de intentarlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada paso cuenta hacia tus metas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No dejes que el miedo te detenga.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu mejor versión está al alcance de tu esfuerzo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito es el resultado de la perseverancia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si te caes siete veces, levántate ocho.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El único entrenamiento que fallas es el que no haces.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu fuerza está en tu mente, no solo en tus músculos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca es tarde para comenzar a trabajar en ti mismo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que haces hoy tiene un impacto en tu futuro.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El único fracaso es rendirse antes de tiempo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada día es una nueva oportunidad para mejorar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo con ganas o no lo hagas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te rindas, el éxito podría estar a la vuelta de la esquina.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El dolor que sientes hoy será la fuerza que sentirás mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tú decides lo que eres capaz de hacer.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sin sacrificio no hay éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sigue adelante, el progreso es la clave.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si no desafías tus límites, nunca sabrás hasta dónde puedes llegar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Es la persistencia la que te llevará a tus metas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No se trata de ser perfecto, se trata de ser mejor cada día.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz que tus esfuerzos cuenten.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tú eres más fuerte de lo que crees.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te detengas hasta sentirte orgulloso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada repetición te acerca a tu objetivo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No importa cuánto te cueste, lo importante es no rendirse.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Las victorias más grandes vienen después de los mayores esfuerzos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito es la combinación de disciplina y motivación.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo de hoy crea los logros de mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu esfuerzo no se pierde, siempre tiene su recompensa.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La clave del éxito está en hacer lo que otros no están dispuestos a hacer.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El cambio comienza con el primer paso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si no puedes volar, corre. Si no puedes correr, camina. Si no puedes caminar, gatea. Pero hazlo siempre hacia adelante.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No puedes cambiar lo que no enfrentas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La acción es la clave para lograr tus sueños.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No busques excusas, busca resultados.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Un día de entrenamiento te acerca un día más a tu meta.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cuando creas que no puedes más, recuerda por qué comenzaste.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Solo los que se atreven a fallar pueden lograr grandes cosas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada segundo que inviertes en entrenar es un segundo invertido en tu futuro.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si el plan no funciona, cambia el plan, pero nunca la meta.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cree en ti mismo y todo será posible.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El que persevera alcanza.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No se trata de cuánto haces, sino de cómo lo haces.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si no te desafías, no crecerás.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Es fácil rendirse, pero no lo hagas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada pequeño paso cuenta, cada esfuerzo suma.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La consistencia es la clave del éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo aunque no tengas ganas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Todo el progreso comienza con un solo paso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Las grandes victorias no son para los que esperan, son para los que luchan.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los límites están hechos para ser superados.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Solo se vive una vez, así que haz que cuente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La fuerza no viene de lo que puedes hacer, viene de lo que pensaste que no podías hacer.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Un pequeño progreso es mejor que ningún progreso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo que pones hoy definirá tu mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada entrenamiento es una oportunidad para mejorar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tus resultados dependen de tus esfuerzos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La verdadera fuerza no está en los músculos, sino en la voluntad de no rendirse.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La victoria no es para los que nunca caen, sino para los que siempre se levantan.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Todo lo que necesitas está dentro de ti, solo tienes que desbloquearlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca subestimes el poder de una mente decidida.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si quieres resultados diferentes, tienes que hacer cosas diferentes.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los grandes logros requieren grandes sacrificios.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo único que te detiene es tu mente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cualquier cosa que valga la pena toma tiempo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca es demasiado tarde para comenzar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada día es una oportunidad para ser mejor.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo hoy y no lo pongas para mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El dolor es temporal, el orgullo es para siempre.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si no lo intentas, nunca sabrás lo que puedes lograr.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que hoy parece imposible, mañana será solo un recuerdo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo constante se convierte en progreso constante.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz que tus sueños trabajen tan duro como tú.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El trabajo duro siempre trae resultados.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No pares cuando estés cansado, para cuando hayas terminado.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca te detengas hasta que estés orgulloso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cualquier meta es alcanzable con dedicación y esfuerzo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu mente es más fuerte que tus músculos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito es el resultado de la disciplina diaria.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No importa el ritmo, lo importante es no detenerse.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoy es un buen día para empezar a mejorar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Recuerda por qué empezaste cuando quieras rendirte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Solo los que se atreven a fracasar pueden lograr el éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No se trata de lo que has logrado, sino de lo que sigues haciendo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tú eres la única persona que puede detenerte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca te arrepientas de trabajar duro.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los resultados no mienten, el trabajo sí.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada gota de sudor te acerca más a tus metas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo único que se interpone entre tú y el éxito es tu excusa.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Para lograr algo que nunca has logrado, necesitas hacer algo que nunca has hecho.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que hoy parece difícil, mañana será fácil.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo no porque sea fácil, sino porque será valioso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los desafíos hacen que el éxito valga la pena.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu esfuerzo es la base de tu éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te detengas cuando llegues a la cima, sigue escalando.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El primer paso hacia el éxito es creer que puedes lograrlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo constante siempre paga, no te rindas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cualquiera puede rendirse, pero tú eliges seguir adelante.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los grandes logros requieren grandes sacrificios.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada sacrificio hoy será una victoria mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoy es un buen día para dar lo mejor de ti.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Las metas no son sueños, son logros por alcanzar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si no te desafías, no crecerás.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No es el tamaño del esfuerzo, es el tamaño de tu corazón.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada vez que luchas por algo que quieres, te haces más fuerte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No es sobre tener tiempo, es sobre hacer tiempo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La motivación te hace comenzar, pero el hábito te hace continuar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito es la suma de pequeños esfuerzos repetidos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No tienes que ser grande para empezar, pero tienes que empezar para ser grande.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La diferencia entre los que lo logran y los que no, es que los que lo logran nunca se rinden.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca digas que no puedes, siempre hay una forma.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No dejes que tus excusas definan lo que eres capaz de hacer.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La clave del éxito está en la persistencia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz que lo imposible se vuelva posible.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Las excusas no queman calorías.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu cuerpo es el único lugar donde vivirás, cuídalo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoy es el día para empezar a alcanzar tus sueños.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los resultados no vienen de lo que dices, sino de lo que haces.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No puedes alcanzar tus sueños si no te esfuerzas por ellos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No hay límites, solo desafíos a superar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te preocupes por los demás, concéntrate en tu progreso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo importante no es lo que hagas, sino cómo lo hagas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No esperes a que las oportunidades lleguen, crea las tuyas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito se construye con cada pequeño esfuerzo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada día es una oportunidad para superarte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La victoria no es para los que nunca caen, sino para los que siempre se levantan.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La motivación es lo que te hace empezar, pero es la disciplina lo que te mantiene en marcha.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si quieres ser más, tienes que dar más.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te conformes, lucha por lo que realmente quieres.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te preocupes por lo que otros piensan, tú eres el único que puede alcanzar tus sueños.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El primer paso hacia el éxito es levantarte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La única forma de fallar es dejar de intentarlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que hoy te cuesta, mañana te será más fácil.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada esfuerzo cuenta, no importa cuán pequeño sea.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoy es el día perfecto para cambiar tu vida.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo es el camino hacia el éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nada puede detener a alguien que ha tomado la decisión de triunfar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La diferencia entre los que tienen éxito y los que no es la perseverancia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cree en ti mismo, todo lo demás caerá en su lugar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La mente es el músculo más importante.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo hoy, no lo pospongas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu potencial es infinito, solo tienes que descubrirlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los límites están hechos para ser superados.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada día es una oportunidad para ser mejor que ayer.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que haces hoy tiene el poder de cambiar tu mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito no es cuestión de suerte, es cuestión de esfuerzo y persistencia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca subestimes lo que puedes lograr con un poco de esfuerzo diario.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que lograste ayer no importa, lo que importa es lo que logras hoy.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El progreso no es lineal, pero siempre es progreso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No se trata de ser perfecto, se trata de ser constante.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La vida no es esperar a que pase la tormenta, es aprender a bailar bajo la lluvia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada vez que sientas que te vas a rendir, piensa en por qué empezaste.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No importa cuántas veces caigas, lo importante es cuántas veces te levantes.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El sudor de hoy es el éxito de mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El único fracaso es no intentarlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nada te detendrá si tienes la mentalidad correcta.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La disciplina es el puente entre las metas y los logros.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No pares hasta estar orgulloso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada entrenamiento es una victoria sobre la pereza.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El verdadero cambio comienza desde dentro.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo de hoy es el éxito de mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada pequeño paso es un paso hacia el éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tienes el poder de cambiar tu historia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los sacrificios de hoy traerán los resultados de mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La clave del éxito es la acción continua.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El trabajo duro siempre da sus frutos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te detengas hasta que estés orgulloso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La actitud positiva es la base de cualquier éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La acción trae resultados.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que siembras hoy lo cosechas mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Todo lo que necesitas está dentro de ti.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No sueñes con el éxito, trabaja por él.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si quieres resultados, tienes que poner el esfuerzo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La fuerza no viene de lo que haces, viene de lo que superas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu esfuerzo es la base de tus logros.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los sueños no tienen fecha de vencimiento, sigue trabajando para alcanzarlos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No importa lo que logres, siempre puedes mejorar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada día es una oportunidad para empezar de nuevo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca dejes de trabajar en ti mismo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Las excusas no cambian nada, pero el trabajo duro lo cambia todo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu única competencia eres tú mismo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo hoy, porque mañana podría ser tarde.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La diferencia entre lo que eres y lo que quieres ser está en el esfuerzo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El futuro pertenece a quienes se preparan hoy.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La mentalidad positiva convierte los obstáculos en oportunidades.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo no porque sea fácil, sino porque es valioso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te conformes, siempre puedes más.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El sacrificio de hoy es la recompensa de mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La vida te da lo que te atreves a pedir.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz lo que puedas, con lo que tengas, donde estés.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo imposible solo tarda un poco más.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te preocupes por el tiempo, ocúpate de dar lo mejor de ti.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los sueños no funcionan a menos que tú trabajes por ellos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los grandes cambios empiezan con pequeños pasos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La diferencia entre el éxito y el fracaso es la perseverancia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nada que valga la pena es fácil.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo ahora, lo que puedas, con lo que tengas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca es demasiado tarde para empezar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que no te desafía, no te cambia.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La disciplina es el camino hacia el éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo de hoy te da el éxito de mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La única forma de llegar es seguir avanzando.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tú controlas tu ritmo, tú controlas tu destino.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No es un mal día, es un buen día para superarte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sigue empujando, incluso cuando no tengas ganas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Una mente fuerte crea un cuerpo fuerte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La incomodidad es el precio del crecimiento.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No necesitas suerte, necesitas disciplina.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sudar hoy es sonreír mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada segundo que inviertes en ti, te devuelve el doble.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo no se negocia, se entrega.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La constancia vence al talento cuando el talento no trabaja duro.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrena duro, vive fuerte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El gimnasio es el campo de batalla, tú eres el guerrero.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El dolor pasa, el orgullo dura para siempre.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz que tus metas sean más fuertes que tus excusas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los límites no son reales, solo mentales.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada gota de sudor es un paso más hacia tu meta.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Eres capaz de mucho más de lo que imaginas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No pares hasta que tu cuerpo y tu mente estén alineados.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El cuerpo logra lo que la mente cree.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El compromiso vence a la motivación.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No esperes el momento perfecto, hazlo perfecto.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sé el cambio que quieres ver en ti.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Un mal día entrenando es mejor que un buen día sin hacerlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La disciplina siempre gana a largo plazo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrena como si tu vida dependiera de ello.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu objetivo no se logra solo, necesita tu acción.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Suda hoy o sufre mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada repetición es una inversión en ti.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito empieza con una decisión: no rendirse.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los grandes logros no vienen sin sacrificio.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sé más fuerte que tus excusas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que construyas en el gimnasio se refleja en la vida.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cuando quieras rendirte, recuerda por qué empezaste.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si te duele, significa que estás cambiando.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La incomodidad es donde empieza la transformación.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz que cada día cuente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No hay progreso sin esfuerzo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tú no te rindes, tú te reinventas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los campeones entrenan, los perdedores se quejan.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No eres débil, solo estás empezando.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada paso, por pequeño que sea, te acerca a la meta.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Las ganas no se enseñan, se entrenan.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El sudor limpia el alma.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cuando entrenas tu cuerpo, entrenas tu mente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El trabajo duro vence al talento cuando el talento no se esfuerza.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu cuerpo escucha todo lo que piensa tu mente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El camino difícil siempre vale más la pena.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No importa cuán lento vayas, nunca te detengas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La transformación comienza con una decisión firme.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cansado es solo una excusa.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu futuro yo te lo agradecerá.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Un día sin entrenar es un día sin avanzar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tus hábitos definen tu éxito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca serás el mismo después de un gran esfuerzo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoy entrenas, mañana brillas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El gimnasio no es castigo, es una recompensa.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si puedes pensarlo, puedes hacerlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La acción es el único camino real al cambio.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No es el cuerpo el que falla, es la mente la que se rinde primero.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La constancia es la clave de los resultados duraderos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No sueñes con resultados, trabaja por ellos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nada que valga la pena se consigue sin trabajo duro.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cree en tu capacidad de mejorar, día a día.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El compromiso personal es el músculo más fuerte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Levántate con determinación, acuéstate con satisfacción.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrenar es el arte de superarte a ti mismo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tú defines tu esfuerzo, tú defines tu destino.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No le temas al fracaso, témele a no intentarlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrena con propósito, vive con pasión.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cuanto más difícil el reto, mayor la recompensa.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El gimnasio no solo cambia tu cuerpo, cambia tu actitud.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te compares, supérate.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu mayor proyecto eres tú mismo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que duele hoy te hará más fuerte mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No se trata de tener tiempo, se trata de hacer tiempo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo con fuerza, hazlo con corazón.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La consistencia es el músculo que más cuesta desarrollar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu cuerpo se adapta a lo que le exiges.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada día que entrenas, te transformas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No hay excusas, solo prioridades.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Donde otros ven límites, tú ves oportunidades.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "En el sudor está la victoria.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Las repeticiones no solo construyen músculo, construyen carácter.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tú no te detienes, tú avanzas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El cambio empieza en tu mente y se refleja en tu cuerpo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El gimnasio no es un lugar, es una mentalidad.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La voluntad mueve montañas… y también pesas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu éxito está en tu rutina.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrena fuerte, vive sin límites.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No pares hasta que lo logres. Luego, sigue.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sufrir durante una hora es mejor que arrepentirse todo el día.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu progreso es tuyo, no lo compares con el de nadie.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No hay excusa que supere la sensación de haberlo logrado.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No lo pienses tanto, solo hazlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No estás solo, estás compitiendo contigo mismo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mientras tú descansas, otros entrenan. Tú decides.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El confort es el enemigo del progreso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sé tu motivación diaria.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo único que está entre tú y tus metas eres tú mismo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada día que entrenas, estás un paso más cerca.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No eres débil por empezar desde cero. Eres valiente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si no lo haces por ti, ¿entonces por quién?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Solo tú sabes cuánto puedes dar. ¡Da el máximo!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz de la disciplina tu mejor hábito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu cuerpo escucha lo que tu mente le dice.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No se trata de tener fuerza, sino de usarla con propósito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los grandes resultados requieren grandes sacrificios.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El gimnasio es donde empieza el cambio.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No es magia, es trabajo constante.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Todo progreso comienza con una decisión valiente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada entrenamiento es una victoria personal.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tú defines tu nivel, tú elevas tus estándares.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca te arrepentirás de haber entrenado.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No estás aquí para rendirte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Recuerda: cada gota de sudor es un paso adelante.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No esperes resultados distintos si haces siempre lo mismo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Transforma tu dolor en poder.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo difícil hoy para que sea fácil mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La única competencia es contra tu yo de ayer.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El cuerpo alcanza lo que la mente cree.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu determinación es más fuerte que tus excusas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El éxito se construye con trabajo silencioso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nadie dijo que sería fácil, pero sí que valdría la pena.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que haces hoy marca la diferencia mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada entrenamiento suma.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si estás buscando una señal para seguir, aquí está.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cuando pienses en rendirte, recuerda la meta.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El entrenamiento es un privilegio, no un castigo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que hagas ahora, tu cuerpo lo recordará.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Estás a un entrenamiento de sentirte mejor.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "En el gimnasio te haces fuerte, en la vida lo demuestras.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu compromiso define tu progreso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sigue. Aún no has llegado a tu mejor versión.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca sabrás de lo que eres capaz hasta que lo intentes.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La meta no es ser perfecto, es no rendirse.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Convierte tu disciplina en tu estilo de vida.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cree en ti, incluso cuando nadie más lo haga.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tú decides si hoy será un día más o un día de avance.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No pares hasta verte reflejado en tus objetivos.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo por ti, por tu salud, por tu mente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El cuerpo cambia, pero la mentalidad lo transforma.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrena duro, vive pleno.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No estás cansado, solo estás más cerca del cambio.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La pereza es el mayor peso que puedes cargar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada día que entrenas es una inversión en ti mismo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El gimnasio no solo es físico, es mental.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El primer paso ya te diferencia del resto.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Todo logro empieza con la decisión de intentarlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrena como si tu vida dependiera de ello. Porque depende.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz del dolor tu motor, no tu obstáculo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu esfuerzo inspira más de lo que crees.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Donde otros ven dolor, tú ves crecimiento.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo es el único camino hacia el respeto propio.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo que haces cuando nadie te ve es lo que te construye.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El sudor es el reflejo del compromiso.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No importa cuánto te demores, lo importante es que no pares.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si tienes tiempo para quejarte, tienes tiempo para entrenar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Convierte el 'no puedo' en 'lo logré'.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "La diferencia está en no rendirse cuando todo se pone difícil.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo por la persona en la que te estás convirtiendo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El cambio no viene de afuera, viene desde adentro.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Una hora de dolor vale más que una vida de arrepentimiento.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu actitud es tan importante como tu fuerza.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No pierdas el foco, ni siquiera cuando duela.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Quien tiene un porqué, encuentra el cómo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El compromiso no se rompe. Se honra.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sigue levantándote, incluso cuando el cuerpo quiera rendirse.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo se entrena. La constancia se construye.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tú puedes soportar más de lo que crees.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sé terco con tus metas y flexible con tu camino.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si hoy es duro, mañana será gloria.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El cuerpo mejora cuando la mente deja de poner límites.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Solo los que persisten llegan a la meta.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu proceso es único, tu progreso también.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz del entrenamiento tu escape, no tu castigo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si estás buscando resultados rápidos, estás en el lugar equivocado.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te detengas hasta que el cambio sea visible.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No se trata de fuerza, se trata de determinación.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrena hasta que te reconozcas en el espejo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los músculos crecen donde la disciplina vive.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada sesión cuenta, cada gota de sudor también.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrena como si fueras el ejemplo para otros.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nadie se arrepiente de dar su máximo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Eres más fuerte de lo que piensas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El esfuerzo diario te hace imparable.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nunca es demasiado tarde para empezar a cuidarte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo difícil ahora para que la vida sea más fácil después.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No te detengas, el cansancio es solo temporal.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Es hoy, es ahora. No hay mejor momento para comenzar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No naciste para rendirte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Haz del gimnasio tu segundo hogar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Levántate, respira, y sigue adelante.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada gota de sudor construye una mejor versión de ti.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tú eliges: excusas o resultados.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Si no luchas por lo que quieres, no llores por lo que pierdes.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu cuerpo te habla, escúchalo con acción.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hazlo con miedo, hazlo cansado, pero hazlo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrena hoy por la salud que quieres mañana.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cambia el ‘ojalá’ por ‘estoy trabajando en ello’.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu cuerpo es tu responsabilidad. Cuídalo.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Persiste hasta que valga la pena.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Los objetivos no se alcanzan con palabras, sino con acción.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cada entrenamiento es un ladrillo más en tu fortaleza.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No pares. Aún no has terminado.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoy es un buen día para sudar por tus metas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lo estás haciendo mejor de lo que crees.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No es cuestión de suerte, es cuestión de hábito.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Empieza fuerte, termina más fuerte.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "El progreso es silencioso, pero los resultados hablarán por ti.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrena para ser fuerte, mental y físicamente.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "No importa dónde empiezas, importa que no pares.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tu cuerpo refleja tus hábitos, no tus excusas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entrenar no es una opción, es una forma de vida.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phrases', null, {});
  }
};
