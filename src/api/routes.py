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
    
    user = User.query.filter_by(email=email).first()
    print(user)

    if not user:
        return jsonify({"msg": "The email is not correct",
        "status": 401
        
        }), 401

    expiracion = datetime.timedelta(days=3)
    access_token = create_access_token(identity=user.email, expires_delta=expiracion)

    data = {
        "user": user.serialize(),
        "token": access_token,
        "expires": expiracion.total_seconds()*1000,
        "id": user.id,
        "email": user.email,
        "tipo_user": user.tipo_user,
        "photo": user.photo,
        "userName": user.userName
        }

    return jsonify(data), 200

@api.route('/register', methods=['POST'])
def register():
    print(request.get_json())
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    tipo_user = request.json.get("tipo_user", None)
    userName = request.json.get("userName", None)
    #photo = request.files['photo']
    print(email,password, tipo_user,  userName)

    email_query = User.query.filter_by(email=email).first()
    if email_query:
        return ({"msg":"Este correo electrónico ya ha sido registrado"}), 401
    # if photo and allowed_file(photo.filename, ALLOWED_EXTENSIONS):
    #     photo_filename = secure_filename(photo.filename)
    #     photo.save(os.path.join(current_app.config['UPLOAD_FOLDER']+"/userpic", photo_filename))
    # else:
    #     return jsonify({"msg":"Extension not allowed"}), 400

    user = User()
    user.email = email
    user.password = password
    user.tipo_user = tipo_user
    user.userName = userName
    #user.photo = photo_filename
    print(user)
    db.session.add(user)
    db.session.commit()

    expiracion = datetime.timedelta(days=3)
    access_token = create_access_token(identity=user.email, expires_delta=expiracion)

    response_token = {
        "msg": "Added successfully",
        "email": user.email,
        "userId":user.id,
        "userName": user.userName,
        "tipo_user": user.tipo_user,
        "token": access_token,
        "userName" : user.userName,
        #"photo" : user.photo
    }
  
    return jsonify(response_token), 200    

@api.route('/user', methods=["GET"])
def get_all_users():
    users = User.get_all_users()
    return jsonify(users)

@api.route('/user/<int:id>', methods=["GET"])
def get_user_by_id(id):
    user = User.get_user(id)
    return jsonify(user)

@api.route('/servicio-registrados', methods=["POST"])
def add_servicio():

    id_user= request.json.get("id_user",None)
    userName= request.json.get("userName",None)
    tipo_membresia = request.json.get("tipo_membresia",None)
    category = request.json.get('category',None)
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
    portafolioFoto = request.files['portafolioFoto']
    merit = request.json.get('merit',None)
            
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
    if portafolioFoto.filename == '': return jsonify({"msg":"no hay un imagen de servicio"}), 400 
    if portafolioFoto and allowed_file(portafolioFoto.filename, ALLOWED_EXTENSIONS):
        portafolio_filename = secure_filename(portafolioFoto.filename)
        portafolioFoto.save(os.path.join(current_app.config['UPLOAD_FOLDER']+"/serviciopic", portafolio_filename)) 
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
def update_servicio(id):
    tipo_membresia = request.form.get("tipo_membresia",None)
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

    if request.form.get("tipo_membresia") is not None:   
        if not tipo_membresia:
            return jsonify({"msg":"el tipo_membresia esta vacio"}), 400
    if request.form.get("subcategory") is not None:   
        if not subcategory:
            return jsonify({"msg":"el subcategory de servicio esta vacio"}), 400
    if request.form.get("tipo_cobro") is not None:   
        if not tipo_cobro:
            return jsonify({"msg":"tipo de cobro esta vacio"}), 400
    if request.form.get("valor") is not None:   
        if not valor:
            return jsonify({"msg":"el valor de servicio esta vacio"}), 400
    if request.form.get("name_servicio") is not None:   
        if not name_servicio:
            return jsonify({"msg":"el nombre de servicio esta vacio"}), 400
    if request.form.get("descrip_servicio") is not None:   
        if not descrip_servicio:
            return jsonify({"msg":"el descripcion de servicio esta vacio"}), 400
    if request.form.get("experiencia") is not None:  
        if not experiencia:
            return jsonify({"msg":"su experiencia esta vacio"}), 400 
    if portafolioFoto.filename == '': return jsonify({"msg":"no hay un imagen de servicio"}), 400 
    if portafolioFoto and allowed_file(portafolioFoto.filename, ALLOWED_EXTENSIONS):
        portafolio_filename = secure_filename(portafolioFoto.filename)
        portafolioFoto.save(os.path.join(current_app.config['UPLOAD_FOLDER']+"/serviciopic", portafolio_filename))
    else:
        return jsonify({"msg":"Extension not allowed"}), 400

    Servicio_registrados.update_servicio(id, tipo_membresia, subcategory, tipo_cobro, valor, name_servicio, descrip_servicio, duracion, revision, proceso, experiencia, portafolio, portafolio_filename, merit)

    return jsonify({
        "msg": "le ha actualizado exitosamente"
        }), 200

@api.route('/servicio-registrados/<int:id>', methods=["DELETE"])
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
def delete_favorito(id):
    Favoritos.delete_favorito(id)
    return jsonify({"success": True})

@api.route('/comentarios', methods=["POST"])
def addComment():  
        if request.method == 'POST':
            if not request.is_json:
                return jsonify({"msg": "El body o contenido esta vacio"}), 400

            id_servicios_prestados= request.json.get("id_servicios_prestados")
            id_servicio_registrados= request.json.get("id_servicio_registrados")
            text_comment= request.json.get("text_comment")
            evaluacion= request.json.get("evaluacion")

            if not id_servicios_prestados:
                return jsonify({"msg":"id_servicios_prestados esta vacio"}), 400
            if not id_servicio_registrados:
                return jsonify({"msg":"id_servicio_registrados esta vacio"}), 400
            if not text_comment:
                return jsonify({"msg":"el texto del comentario esta vacio"}), 400
            if not evaluacion:
                return jsonify({"msg":"la evaluacion esta vacia"}), 400

            comentarios = Comentarios()
            comentarios.id_servicios_prestados = request.json.get("id_servicios_prestados", None)
            comentarios.id_servicio_registrados = request.json.get("id_servicio_registrados", None)
            comentarios.text_comment= request.json.get("text_comment", None)
            comentarios.evaluacion= request.json.get("evaluacion", None)

            db.session.add(comentarios)
            db.session.commit()
            return jsonify({"Respuesta":"OK"}), 200    

@api.route('/comentarios', methods=["GET"])
def listComments ():  
    return jsonify({"Comentarios": Comentarios.get_all_comentarios(id)})
      
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
    total_valor_servicio = request.json.get("total_valor_servicio", None)
    fecha_inicio = time.strftime("%c")

    servicios_prestados = Servicios_prestados()
    servicios_prestados.id_user_compra =  id_user_compra
    servicios_prestados.id_servicio_registrados =  id_servicio_registrados
    servicios_prestados.cantidad_servicio =  cantidad_servicio
    servicios_prestados.total_valor_servicio =  total_valor_servicio
    servicios_prestados.fecha_inicio =  fecha_inicio

    print(servicios_prestados)
    db.session.add(servicios_prestados)
    db.session.commit()
  
    response = {
        "msg": "Compra registrada correctamente",
    }
  
    return jsonify(response), 200

@api.route('/buyservice/user/<int:id>', methods=["GET"])
def get_servicioCompra_id_user(id):
    return jsonify(Servicios_prestados.get_servicioCompra_id_user(id))

@api.route('/upload/<filetype>/<filename>/', methods=["GET"])
def file(filetype, filename):
    if filetype == "photo" :
        return send_from_directory(current_app.config['UPLOAD_FOLDER']+"/userpic", filename)
    if filetype == "portafolioFoto" :
        return send_from_directory(current_app.config['UPLOAD_FOLDER']+"/serviciopic", filename)

    return jsonify({"msg":"file no found"}), 404