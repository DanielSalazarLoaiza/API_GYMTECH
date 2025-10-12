const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();

//configuraciones
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

 app.use(cors({
  origin: '*', // o pon aquí tu dominio del front si quieres restringir
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
   allowedHeaders: ['Content-Type', 'Authorization']
 }));


app.get('/', (req, resp) => {
    resp.send({message: 'Welcome to GymTech SENA API'})
})

app.set('PORT', process.env.PORT || 4000);

//Routes
app.use('/api/v1/auth', require('./api/v1/routes/auth.routes')); // Auth
app.use('/api/v1/users', require('./api/v1/routes/users.routes')); // Usuarios
app.use('/api/v1/role', require('./api/v1/routes/role.routes')); // Roles
app.use('/api/v1/activities', require('./api/v1/routes/activity.routes')); // Actividades
app.use('/api/v1/musclegroups', require('./api/v1/routes/musclegroup.routes')); // Grupos Musculares
app.use('/api/v1/routines', require('./api/v1/routes/routine.routes')); // Rutinas
app.use('/api/v1/trainingcenters', require('./api/v1/routes/trainingcenter.routes')); // Centros de Formación
app.use('/api/v1/trainingprograms', require('./api/v1/routes/trainingprogram.routes')); // Programas de Formación
app.use('/api/v1/exercises', require('./api/v1/routes/exercise.routes')); // Ejercicios
app.use('/api/v1/groups', require('./api/v1/routes/group.routes')); // Grupos
app.use('/api/v1/routineusers', require('./api/v1/routes/routineuser.routes')); // Rutinas - Usuarios
app.use('/api/v1/exerciseroutines', require('./api/v1/routes/exerciseroutine.routes')); // Ejercicios - Rutinas
app.use('/api/v1/progresscontrols', require('./api/v1/routes/progresscontrol.routes')); // Controles de Progreso
app.use('/api/v1/incomerecords', require('./api/v1/routes/incomerecord.routes')); // Registros de Ingresos
app.use('/api/v1/calendars', require('./api/v1/routes/calendar.routes')); // Calendarios
app.use('/api/v1/apprenticereserves', require('./api/v1/routes/apprenticereserve.routes')); // Reservas - Aprendices
app.use('/api/v1/phrases', require('./api/v1/routes/phrase.routes')); // Frases
app.use('/api/v1/passwordResetTokens', require('./api/v1/routes/passwordResetToken.routes')); // Tokens de Restablecimiento de Contraseña

app.listen(app.get('PORT'), () => {
    console.log(`server running on port ${app.get('PORT')}`);
});