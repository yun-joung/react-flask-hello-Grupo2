# Cotec - Freelancer, Client Web Matching & Selling Service
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-flask-hello.git)



### Demo
https://github.com/yun-joung/react-flask-hello-Grupo2

[![Video Label](src/youtube.png)](https://youtu.be/HKT3h_TUOkM)



- Using python, flask (backend) + reactjs, Sass, Css, Bootstrp, Html, flux (frontend)
- Api : Heroku-postgres or Boilerplate of 4GeeksAcademy
- Full responsive application



### Front-End Manual Installation:

- Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`



### Back-End (in the case of using HeroKu)

- No need to install 
- Change the config of .env 
---------------------------------------------------------------------------------------------------------------------------------------------------------------
DATABASE_URL=postgresql://srjlpwauyjujxc:204984f7b2523e259d4b41c6e2bc72ea4b3dc541918139f4928f94eeaf41edda@ec2-54-224-194-214.compute-1.amazonaws.com:5432/d5d1kqs05p69fv

FLASK_APP_KEY="any key works"

FLASK_APP=src/app.py

FLASK_ENV=development

UPLOAD_FOLDER = "src/static"

BASENAME=/

BACKEND_URL=https://proyecto-final-cotec2.herokuapp.com/
---------------------------------------------------------------------------------------------------------------------------------------------------------------



### Back-End Manual Installation (in the case of using boilerplate of 4GeeksAcademy, need to use Gitpod):

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure yo replace the valudes with your database information:

| Engine	| DATABASE_URL 						|
| ------------- | ----------------------------------------------------- |
| SQLite	| sqlite:////test.db	 				|
| MySQL		| mysql://username:password@localhost:port/example	|
| Postgress	| postgres://username:password@localhost:5432/example 	|

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start



## Publish your website!

This boilerplate it's 100% integrate with Herkou, just by pushing your changes to the heroku repository it will deploy: `$ git push heroku main`
