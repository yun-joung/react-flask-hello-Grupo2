"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favoritos, Servicio_registrados, Servicios_prestados, Comentarios
# from flask_cors import CORS, cross_origin
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash       ## Nos permite manejar tokens por authentication (usuarios)    
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity   #from models import Person
import datetime

api = Blueprint('api', __name__)


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
        "userId": user.id,
        "email": user.email,
        "tipo_user": user.tipo_user
        }

    return jsonify(data), 200

@api.route('/register', methods=['POST'])
def register():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    tipo_user = request.json.get("tipo_user", None)
    userName = request.json.get("userName", None)


    email_query = User.query.filter_by(email=email).first()
    if email_query:
        return "This email has been already taken", 401

    user = User()
    user.email = email
    user.password = password
    user.tipo_user = tipo_user
    user.userName = userName
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
        "token": access_token
    }
  
    return jsonify(response_token), 200    

@api.route('/user', methods=["GET"])
def get_all_users():
    return jsonify({"Users": User.get_all_users()})

@api.route('/user/<int:id>', methods=["GET"])
def get_user_by_id(id):
    user = User.get_user(id)
    return jsonify({"User_Id":user})

@api.route('/servicio-registrados', methods=['POST'])
def add_servicio():
    id_user= request.json.get('id_user', None)
    tipo_membresia = request.json.get('tipo_membresia', None)
    category = request.json.get('category', None)
    subcategory = request.json.get('subcategory', None)
    tipo_cobro = request.json.get('tipo_cobro', None)
    valor = request.json.get('valor')
    name_servicio = request.json.get('name_servicio', None)
    descrip_servicio = request.json.get('descrip_servicio', None)
    duracion = request.json.get('duracion', None)
    revision = request.json.get('revision', None)
    proceso = request.json.get('proceso', None)
    experiencia = request.json.get('experiencia', None)
    portafolio = request.json.get('portafolio', None)
    merit = request.json.get('merit', None)
            
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
    if not revision:
        return jsonify({"msg":"el revision de servicio esta vacio"}), 400
    if not experiencia:
        return jsonify({"msg":"su experiencia esta vacio"}), 400 
            
    servicio_registrados = Servicio_registrados()
    servicio_registrados.id_user = id_user,
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
    servicio_registrados.merit = merit
    print(servicio_registrados)
    db.session.add(Servicio_registrados)
    db.session.commit()

    return jsonify({
        "msg": "me he guardado exitosamente"
        }), 200

@api.route('/servicio-registrados', methods=["GET"])
def get_all_servicios():
    return jsonify({"serviceRegistrado": Servicio_registrados.get_all_servicios()})

@api.route('/servicio-registrados/<int:id>', methods=["GET"])
def get_servicio_id(id):
    return jsonify({"serviceRegistrado_Id":Servicio_registrados.get_servicio(id)})

@api.route('/favoritos/<int:_id_user>', methods=["GET"])
def get_favoritos_by_user(_id_user):
    favoritos = Favoritos.get_favoritos_by_user(_id_user)
    return jsonify({"userFavoritos":favoritos})

@api.route('/favoritos', methods=["POST"])
def add_favorito():
    id_user= request.json.get("id_user", None)
    id_servicio_registrados= request.json.get("id_servicio_registrados", None)
    name_servicio= request.json.get("name_servicio", None)

    if not id_user:
        return jsonify({"msg":"user id esta vacio"}), 400
    if not id_servicio_registrados:
        return jsonify({"msg":"servicio id esta vacio"}), 400
    if not name_servicio:
        return jsonify({"msg":"el nombre de servicio esta vacio"}), 400

    favoritos = Favoritos()
    favoritos.id_user = id_user
    favoritos.id_servicio_registrados = id_servicio_registrados
    favoritos.name_servicio= name_servicio
    print(favoritos)
    db.session.add(favoritos)
    db.session.commit()

    return jsonify({"msg":"mission success"}), 200

@api.route('/passwordrecovery1', methods=['POST'])
def passwordrecovery1():
    
    email = request.json.get("email", None)
    
    email_query = User.query.filter_by(email=email).first()
    if not email_query:
        return "This email isn't in our database", 401

    user = User()
    user.email = email
    recovery_hash = generate_password_hash(email)
    user.hash = recovery_hash 
    print(user)

    response = {
        "msg": "User found and Hash generated successfully",
        "email": user.email,
        "recovery_hash": user.hash
    }
  
    return jsonify(response), 200  
