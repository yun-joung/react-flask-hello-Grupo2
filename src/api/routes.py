"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, send_from_directory, current_app
from api.models import db, User, Favoritos, Servicio_registrados, Servicios_prestados, Comentarios, Document
# from flask_cors import CORS, cross_origin
from api.utils import generate_sitemap, APIException, allowed_file
from werkzeug.security import generate_password_hash, check_password_hash       ## Nos permite manejar tokens por authentication (usuarios)    
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity   #from models import Person
import datetime
import time
import os
from werkzeug.utils import secure_filename


api = Blueprint('api', __name__)
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}


@api.route('/hash', methods=['POST', 'GET'])
def handle_hash():
    
    expiracion = datetime.timedelta(days=3)
    access_token = create_access_token(identity='mortega@4geeks.co', expires_delta=expiracion)
    response_token = {
        "users": "Manu",
        "token": access_token
    }

    return jsonify(response_token), 200

@api.route('/login', methods=['POST'])
def login():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email:
        return jsonify({"msg":"Email required"}), 400

    if not password:
        return jsonify({"msg":"Password required"}), 400

    #email check
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "The email is not correct",
        "status": 401
        }), 401

    # #password check
    # if not check_password_hash(user.password, password):
    #     return jsonify({"msg": "The password is not correct",
    #     "status": 401
    #     }), 401

    expiracion = datetime.timedelta(days=3)
    access_token = create_access_token(identity=user.email, expires_delta=expiracion)

    data = {
        "user": user.serialize(),
        "token": access_token,
        "expires": expiracion.total_seconds()*1000,
        "id": user.id,
        "email": user.email,
        "tipo_user": user.tipo_user,
        "userName": user.userName
        }

    return jsonify(data), 200

@api.route('/admin-login', methods=['POST'])
def adminLogin():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email:
        return jsonify({"msg":"Email required"}), 400

    if not password:
        return jsonify({"msg":"Password required"}), 400

    if email == 'admin@cotec.cl' and password == 'Cotec1234':
        expiracion = datetime.timedelta(days=3)
        token = create_access_token(identity=email, expires_delta=expiracion)
        data = {
            "access_token" : token,
            "user": {
                "email": email
            }
        }
        return jsonify(data), 200
    else: 
        return jsonify({ "msg" : "admin ruta"}), 401

@api.route('/register', methods=['POST'])
def register():
    print(request.get_json())
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    tipo_user = request.json.get("tipo_user", None)
    userName = request.json.get("userName", None)
    #photo = request.files['photo']

    email_query = User.query.filter_by(email=email).first()
    if email_query:
        return ({"msg":"Este correo electrónico ya ha sido registrado"}), 401
    userName_query = User.query.filter_by(userName=userName).first()
    if userName_query:
        return ({"msg":"Este userName ya ha sido registrado"}), 401
    # if photo and allowed_file(photo.filename, ALLOWED_EXTENSIONS):
    #     photo_filename = secure_filename(photo.filename)
    #     photo.save(os.path.join(current_app.config['UPLOAD_FOLDER']+"/userpic", photo_filename))
    # else:
    #     return jsonify({"msg":"Extension not allowed"}), 400

    user = User()
    user.email = email
    user.password = generate_password_hash(password)
    user.tipo_user = tipo_user
    user.userName = userName
    #user.photo = photo_filename
    print(user)
    db.session.add(user)
    db.session.commit()
    if user:
        expiracion = datetime.timedelta(days=3)
        access_token = create_access_token(identity=user.email, expires_delta=expiracion)

        response_token = {
            "msg": "Added successfully",
            "email": user.email,
            "userId":user.id,
            "userName": user.userName,
            "tipo_user": user.tipo_user,
            "token": access_token,
            "userName" : user.userName
            #"photo" : user.photo
        }
        return jsonify(response_token), 200    
    else:
        return jsonify({"msg": "register failed"}), 401

@api.route('/user', methods=["GET"])
def get_all_users():
    users = User.get_all_users()
    return jsonify(users)

@api.route('/user/<int:id>', methods=["GET"])
def get_user_by_id(id):
    user = User.get_user(id)
    return jsonify(user)

@api.route('/servicio-registrados', methods=["POST"])
@jwt_required()
def add_servicio():
    id_user= request.form.get("id_user",None)
    userName= request.form.get("userName",None)
    tipo_membresia = request.form.get("tipo_membresia",None)
    category = request.form.get('category',None)
    subcategory = request.form.get('subcategory',None)
    tipo_cobro = request.form.get('tipo_cobro',None)
    valor = request.form.get('valor',None)
    name_servicio = request.form.get('name_servicio',None)
    descrip_servicio = request.form.get('descrip_servicio',None)
    duracion = request.form.get('duracion',None)
    revision = request.form.get('revision',None)
    proceso = request.form.get('proceso',None)
    experiencia = request.form.get('experiencia',None)
    portafolio = request.form.get('portafolio',None)
    portafolioFoto = request.files['portafolioFoto']
    merit = request.form.get('merit',None)
    email_oferente = request.form.get('email',None)
            
    if not tipo_membresia:
        return jsonify({"msg":"el tipo_membresia esta vacio"}), 400
    if not category:
        return jsonify({"msg":"el category de servicio esta vacio"}), 400
    if not subcategory:
        return jsonify({"msg":"el subcategory de servicio esta vacio"}), 400
    if not tipo_cobro:
        return jsonify({"msg":"tipo de cobro esta vacio"}), 400
    if not valor:
        return jsonify({"msg":"el valor de servicio esta vacio"}), 400
    if not name_servicio:
        return jsonify({"msg":"el nombre de servicio esta vacio"}), 400
    if not descrip_servicio:
        return jsonify({"msg":"el descripcion de servicio esta vacio"}), 400
    if not experiencia:
        return jsonify({"msg":"su experiencia esta vacio"}), 400
    if portafolioFoto and allowed_file(portafolioFoto.filename, ALLOWED_EXTENSIONS):
        portafolio_filename = secure_filename(portafolioFoto.filename)
        portafolioFoto.save(os.path.join( current_app.config['UPLOAD_FOLDER']+"/serviciopic/", portafolio_filename))
    else:
        return jsonify({"msg":"Extension not allowed"}), 400
            
    servicio_registrados = Servicio_registrados()
    servicio_registrados.id_user = id_user,
    servicio_registrados.userName = userName,
    servicio_registrados.tipo_membresia = tipo_membresia,
    servicio_registrados.category = category,
    servicio_registrados.subcategory = subcategory,
    servicio_registrados.tipo_cobro = tipo_cobro,
    servicio_registrados.valor = valor,
    servicio_registrados.name_servicio = name_servicio,
    servicio_registrados.descrip_servicio = descrip_servicio,
    servicio_registrados.duracion = duracion,
    servicio_registrados.revision = revision,
    servicio_registrados.proceso = proceso,
    servicio_registrados.experiencia = experiencia,
    servicio_registrados.portafolio = portafolio,
    servicio_registrados.portafolioFoto = portafolio_filename,
    servicio_registrados.merit = merit
    servicio_registrados.email_oferente = email_oferente

    print(servicio_registrados)
    db.session.add(servicio_registrados)
    db.session.commit()

    return jsonify({
        "msg": "me he guardado exitosamente"
        }), 200

@api.route('/servicio-registrados', methods=["GET"])
def get_all_servicios():
    services = Servicio_registrados.get_all_servicios()
    return jsonify(services)
    
@api.route('/servicio-registrados/<int:id>', methods=["GET"])
def get_servicio_id(id):
    return jsonify(Servicio_registrados.get_servicio(id))

@api.route('/servicio-registrados/user/<int:id>', methods=["GET"])
def get_servicio_id_user(id):
    return jsonify(Servicio_registrados.get_servicio_id_user(id))

@api.route('/servicio-registrados/<int:id>', methods=["PUT"])
@jwt_required()
def update_servicio(id):
    tipo_membresia = request.json.get("tipo_membresia",None)
    subcategory = request.json.get('subcategory',None)
    tipo_cobro = request.json.get('tipo_cobro',None)
    valor = request.json.get('valor',None)
    name_servicio = request.json.get('name_servicio',None)
    descrip_servicio = request.json.get('descrip_servicio',None)
    duracion = request.json.get('duracion',None)
    revision = request.json.get('revision',None)
    proceso = request.json.get('proceso',None)
    experiencia = request.json.get('experiencia',None)
    portafolio = request.json.get('portafolio',None)
    #portafolioFoto = request.files['portafolioFoto']
    merit = request.json.get('merit',None)

    if not request.is_json:
        return jsonify({"msg": "El body o contenido esta vacio"}), 400 


    # if portafolioFoto.filename == '': return jsonify({"msg":"no hay un imagen de servicio"}), 400 
    # if portafolioFoto and allowed_file(portafolioFoto.filename, ALLOWED_EXTENSIONS):
    #     portafolio_filename = secure_filename(portafolioFoto.filename)
    #     portafolioFoto.save(os.path.join( current_app.config['UPLOAD_FOLDER']+"/serviciopic", portafolio_filename))
    # else:
    #     return jsonify({"msg":"Extension not allowed"}), 400

    Servicio_registrados.update_servicio(id, tipo_membresia, subcategory, tipo_cobro, valor, name_servicio, descrip_servicio, duracion, revision, proceso, experiencia, portafolio, merit)

    return jsonify({
        "msg": "le ha actualizado exitosamente"
        }), 200

@api.route('/servicio-registrados/<int:id>', methods=["DELETE"])
@jwt_required()
def  delete_servicio(id):
    Servicio_registrados.delete_servicio(id)
    return jsonify({"servicio eliminado": True})

@api.route('/servicio-registrados/category/<category>', methods=["GET"])
def get_servicio_by_category(category):
    return jsonify(Servicio_registrados.get_servicio_by_category(category))

@api.route('/search/<search>', methods=["GET"])
def service_search(search):
    return jsonify(Servicio_registrados.service_search(search))

@api.route('/favoritos', methods=["POST"])
@jwt_required()
def add_favorito():
    if request.method == 'POST':
        id_user= request.json.get("id_user")
        id_servicio_registrados= request.json.get("id_servicio_registrados")
        name_servicio= request.json.get("name_servicio")

        if not id_user:
            return jsonify({"msg":"user id esta vacio"}), 400
        if not id_servicio_registrados:
            return jsonify({"msg":"servicio id esta vacio"}), 400
        if not name_servicio:
            return jsonify({"msg":"el nombre de servicio esta vacio"}), 400

        favoritos = Favoritos()
        favoritos.id_user = request.json.get("id_user", None)
        favoritos.id_servicio_registrados = request.json.get("id_servicio_registrados", None)
        favoritos.name_servicio= request.json.get("name_servicio", None)

        db.session.add(favoritos)
        db.session.commit()
        return jsonify({"msg":"mission success"}), 200
    
   
@api.route('/favoritos/<int:_id_user>', methods=["GET"])
def get_favoritos_by_user(_id_user):
    favoritos = Favoritos.get_favoritos_by_user(_id_user)
    return jsonify(favoritos)

@api.route('/favoritos/<int:id>', methods=["DELETE"])
@jwt_required()
def delete_favorito(id):
    Favoritos.delete_favorito(id)
    return jsonify({"success": True})

@api.route('/comentarios', methods=["POST"])
@jwt_required()
def addComment():  
        if request.method == 'POST':
            if not request.is_json:
                return jsonify({"msg": "El body o contenido esta vacio"}), 400

            #id_user= request.json.get("id_user")
            id_user_compra= request.json.get("id_user")
            id_servicios_prestados= request.json.get("id_servicios_prestados")
            id_servicio_registrados= request.json.get("id_servicio_registrados")
            text_comment= request.json.get("text_comment")
            evaluacion= request.json.get("evaluacion")

            if not id_user_compra:
                return jsonify({"msg":"id_user_compra esta vacio"}), 400
            if not id_servicios_prestados:
                return jsonify({"msg":"id_servicios_prestados esta vacio"}), 400
            if not id_servicio_registrados:
                return jsonify({"msg":"id_servicio_registrados esta vacio"}), 400
            if not text_comment:
                return jsonify({"msg":"el texto del comentario esta vacio"}), 400
            if not evaluacion:
                return jsonify({"msg":"la evaluacion esta vacia"}), 400
            
            comment = Comentarios.get_comentario_servicioprestado(id_user_compra, id_servicios_prestados, id_servicio_registrados)
            # if comment:return jsonify({"msg":"Usted ya ha calificado este servicio"}), 200  
            # print(comment)

            comentarios = Comentarios()
            comentarios.id_user_compra = request.json.get("id_user", None)
            comentarios.id_servicios_prestados = request.json.get("id_servicios_prestados", None)
            comentarios.id_servicio_registrados = request.json.get("id_servicio_registrados", None)
            comentarios.text_comment= request.json.get("text_comment", None)
            comentarios.evaluacion= request.json.get("evaluacion", None)
        
            db.session.add(comentarios)
            db.session.commit()
            print (comentarios)
            return jsonify({"Respuesta":"OK"}), 200    

@api.route('/comentarios/<int:id>', methods=["GET"])
def listComments (id):  
    comentario = Comentarios.get_comentarios(id)
    return jsonify(comentario)
      
@api.route('/passwordrecovery1', methods=['PUT'])
def passwordrecovery1():
    
    email = request.json.get("email", None)
    
    email_query = User.query.filter_by(email=email).first()
    if not email_query:
        return "This email isn't in our database", 401

    recovery_hash = generate_password_hash(email)
    hash = recovery_hash[-7:]
    user = User.query.filter_by(email=email).first()
    user.password = hash
    db.session.commit()
    print(user)

    response = {
        "msg": "User found and Hash generated successfully",
        "email": user.email,
        "recovery_hash": user.password
    }
  
    return jsonify(response), 200  

@api.route('/buyservice', methods=['POST'])
def buyservice():

    id_user_compra = request.json.get("id_user_compra", None)
    id_servicio_registrados = request.json.get("id_servicio_registrados", None)
    cantidad_servicio = request.json.get("cantidad_servicio", None)
    name_servicio  = request.json.get("name_servicio", None)
    fecha_inicio = time.strftime("%c")
    total_valor_servicio = request.json.get("total_valor_servicio", None)
    email_oferente = request.json.get("email", None)

    servicios_prestados = Servicios_prestados()
    servicios_prestados.id_user_compra =  id_user_compra
    servicios_prestados.id_servicio_registrados =  id_servicio_registrados
    servicios_prestados.cantidad_servicio =  cantidad_servicio
    servicios_prestados.total_valor_servicio =  total_valor_servicio
    servicios_prestados.fecha_inicio =  fecha_inicio
    servicios_prestados.name_servicio =  name_servicio
    servicios_prestados.email_oferente =  email_oferente

    print(email_oferente)

    print(servicios_prestados)
    db.session.add(servicios_prestados)
    db.session.commit()
  
    response = {
        "msg": "Compra registrada correctamente",
        "email_oferente": email_oferente,
        "fecha": servicios_prestados.fecha_inicio
    }
  
    return jsonify(response), 200

@api.route('/buyservice/user/<int:id>', methods=["GET"])
def get_servicioCompra_id_user(id):
    return jsonify(Servicios_prestados.get_servicioCompra_id_user(id))

@api.route('/buyservice/service/<int:id>', methods=["GET"])
def get_Compra_id_servicio(id):
    return jsonify(Servicios_prestados.get_Compra_id_servicio(id))

@api.route('/buyservice', methods=["GET"])
def get_all_compra():
    compras = Servicios_prestados.get_all_compra()
    return jsonify(compras)