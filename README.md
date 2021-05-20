# Cotec - Freelancer, Client Web Matching & Selling Service
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-flask-hello.git)


### Demo
https://github.com/yun-joung/react-flask-hello-Grupo2

[![Video Label](src/youtube.png)](https://youtu.be/lkcHM-1ZOJA)


- Using python, flask, PostgreSQL(backend) + reactjs, Sass, Css, Bootstrp, Html, flux (frontend)
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
- Deply at HeroKu: `$ git push heroku main`



### Back-End Manual Installation (in the case of using boilerplate, need to use Gitpod):

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)
1. Install the python packages: `$ pipenv install`
2. Install psycopg2: `pipenv install psycopg2`
3. Creat a virtual envirment for backend: `pipenv shell`
4. Start the configuration of PostgreSQL: `psql`
5. Create database: `create database example;`
6. Finish the configuration of PostgreSQL: `\q`
7. Start Backend: `pipenv run init`
8. Migrate the migrations: `$ pipenv run migrate` 
(if you can not migrate the backend, you have to delete 'migrations' folder, and try it again from `pipenv run init`)
10. Run the migrations: `$ pipenv run upgrade`
11. Run the application: `$ pipenv run start`
