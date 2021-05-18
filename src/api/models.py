from flask_sqlalchemy import SQLAlchemy
from flask import request
from sqlalchemy import or_

db = SQLAlchemy()
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(100), nullable=True, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)
    tipo_user = db.Column(db.String(50), nullable=False)
    photo = db.Column(db.String(100))
    servicio_registrados = db.relationship('Servicio_registrados', backref='user',lazy=True)
    servicios_prestados = db.relationship('Servicios_prestados', backref='user',lazy=True)
    comentarios = db.relationship('Comentarios', backref='user',lazy=True)
    def __repr__(self):
        return "<User %r>" % self.id
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "userName": self.userName,
            "tipo_user": self.tipo_user,
            "photo": self.photo
        }
    def add_user(_userName, _email, _password, _tipo_user, _photo):
        new_user = User(userName=_userName,  email=_email, password=_password, tipo_user=_tipo_user, photo=_photo)
        db.session.add(new_user)
        db.session.commit()
    def get_user(_id):
        return [User.serialize(User.query.filter_by(id=_id).first())]
    def get_user_by_mail(_email):
        return [User.serialize(User.query.filter_by(email=_email).first())]    
    def get_all_users():
        return [User.serialize(user) for user in User.query.all()]
    def update_password(_id,_email,_password):
        user_to_update = User.query.filter_by(id=id).first()
        user_to_update.email = _email if _email is not None else user_to_update.email
        user_to_update.password = _password if _password is not None else user_to_update.password
        db.session.commit()
        
class Servicio_registrados(db.Model):
    __tablename__ = 'servicio_registrados'
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    userName = db.Column(db.String(50))
    tipo_membresia = db.Column(db.String(50), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    subcategory = db.Column(db.String(50), nullable=False)
    tipo_cobro = db.Column(db.String(50), nullable=False)
    valor = db.Column(db.Integer, nullable=False)
    name_servicio = db.Column(db.String(50), nullable=False)
    descrip_servicio = db.Column(db.String(250), nullable=False)
    duracion = db.Column(db.String(30))
    revision = db.Column(db.String(30), nullable=False)
    proceso = db.Column(db.String(250))
    experiencia = db.Column(db.String(50), nullable=False)
    portafolio = db.Column(db.String(250), nullable=True)
    portafolioFoto = db.Column(db.String(100), nullable=True)
    merit = db.Column(db.String(250))
    email_oferente = db.Column(db.String(100))
    servicios_prestados = db.relationship('Servicios_prestados', backref='servicio_registrados',lazy=True)
    favoritos = db.relationship('Favoritos', backref='servicio_registrados',lazy=True)
    comentarios = db.relationship('Comentarios', backref='servicio_registrados',lazy=True)

    def __repr__(self):
        return "<Servicio_registrados %r>" % self.id
    def serialize(self):
        return {
            "id": self.id,
            "id_user": self.user.id,
            "userName": self.userName,
            "tipo_membresia": self.tipo_membresia,
            "category": self.category,
            "subcategory": self.subcategory,
            "tipo_cobro": self.tipo_cobro,
            "valor": self.valor, 
            "name_servicio": self.name_servicio,
            "descrip_servicio": self.descrip_servicio,
            "duracion":self.duracion,
            "revision":self.revision,
            "proceso":self.proceso,
            "experiencia": self.experiencia,
            "portafolio": self.portafolio,
            "portafolioFoto": self.portafolioFoto,
            "merit":self.merit,
            "email_oferente":self.email_oferente
        }
    def add_servicio(_id_user, userName, tipo_membresia, category, subcategory, tipo_cobro, valor, name_servicio, descrip_servicio, duracion, revision, proceso, experiencia, portafolio, portafolioFoto, merit, email_oferente):
        new_servicio = Servicio_registrados(id_user=_id_user, userName=userName, tipo_membresia=tipo_membresia, category=category, subcategory=subcategory, tipo_cobro=tipo_cobro, valor=valor, name_servicio=name_servicio, descrip_servicio=descrip_servicio, duracion=duracion, revision=revision, proceso= proceso, experiencia= experiencia, portafolio=portafolio, portafolioFoto=portafolioFoto, merit=merit, email_oferente=email_oferente)
        db.session.add(new_servicio)
        db.session.commit()
    def get_servicio(_id):
        return Servicio_registrados.serialize(Servicio_registrados.query.filter_by(id=_id).first())
    def get_all_servicios():
        servicio_registrados = Servicio_registrados.query.all()
        db.session.commit()
        return list(map(lambda x: x.serialize(), Servicio_registrados.query.all()))
    def get_servicio_id_user(id):
        servicio_user = Servicio_registrados.query.filter_by(id_user=id).all()
        return list(map(lambda x: x.serialize(), servicio_user))
    def get_servicio_by_category(_category):
        servicio_category = Servicio_registrados.query.filter_by(category=_category).all()
        return list(map(lambda x: x.serialize(), servicio_category))
    def update_servicio(id,_tipo_membresia, _subcategory, _tipo_cobro, _valor, _name_servicio, _descrip_servicio, _duracion, _revision, _proceso, _experiencia, _portafolio, _merit):
        servicio_update = Servicio_registrados.query.get(id)
        servicio_update.tipo_membresia = _tipo_membresia 
        servicio_update.subcategory = _subcategory
        servicio_update.tipo_cobro = _tipo_cobro 
        servicio_update.valor = _valor
        servicio_update.name_servicio = _name_servicio
        servicio_update.descrip_servicio = _descrip_servicio 
        servicio_update.duracion = _duracion 
        servicio_update.revision = _revision 
        servicio_update.proceso = _proceso 
        servicio_update.experiencia = _experiencia 
        servicio_update.portafolio = _portafolio 
        servicio_update.merit = _merit
        db.session.commit()
    def delete_servicio(id):
        delete=Servicio_registrados.query.filter_by(id=id).first()
        db.session.delete(delete)
        db.session.commit()
    def service_search(search):
        services = Servicio_registrados.query.filter(Servicio_registrados.name_servicio.ilike("%"+search+"%") | Servicio_registrados.subcategory.ilike("%"+search+"%")).all()
        return list(map(lambda x: x.serialize(), services))

class Servicios_prestados(db.Model):
    __tablename__ = 'servicios_prestados'
    id = db.Column(db.Integer, primary_key=True)
    id_user_compra = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    id_servicio_registrados = db.Column(db.Integer, db.ForeignKey('servicio_registrados.id'), nullable=False)
    cantidad_servicio = db.Column(db.Integer,nullable=False)
    total_valor_servicio = db.Column(db.Integer,nullable=False)
    name_servicio = db.Column(db.String(50))
    fecha_inicio = db.Column(db.DateTime)
    fecha_termino = db.Column(db.DateTime)
    comentarios = db.relationship('Comentarios', backref='servicios_prestados',lazy=True)
    
    def __repr__(self):
        return "<Servicios_prestados %r>" % self.id
    def serialize(self):
        return {
            "id": self.id,
            "id_user_compra": self.user.id,
            "id_servicio_registrados": self.servicio_registrados.id,
            "name_servicio": self.name_servicio,
            "cantidad_servicio": self.cantidad_servicio,
            "total_valor_servicio":self.total_valor_servicio,
            "fecha_inicio": self.fecha_inicio,
            "fecha_termino": self.fecha_termino
        }

    def get_servicioCompra_id_user(id):
        servicioCompra = Servicios_prestados.query.filter_by(id_user_compra=id).all()
        return list(map(lambda x: x.serialize(), servicioCompra))
    def get_Compra_id_servicio(id):
        CompraByService =Servicios_prestados.query.filter_by(id_servicio_registrados=id).all()
        return list(map(lambda x: x.serialize(), CompraByService))
    def get_all_compra():
        allCompra = Servicios_prestados.query.all()
        db.session.commit()
        return list(map(lambda x: x.serialize(), Servicios_prestados.query.all()))

class Favoritos(db.Model):
    __tablename__ = 'favoritos'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'))
    id_servicio_registrados = db.Column(db.Integer, db.ForeignKey('servicio_registrados.id'))
    name_servicio = db.Column(db.String(50))
    user= db.relationship('User', backref=db.backref('favoritos', lazy=True))
    def __repr__(self):
        return "<Favoritos %r>" % self.id
    def serialize(self):
        return {
            "id": self.id,
            "id_user": self.user.id,
            "id_servicio_registrados": self.servicio_registrados.id,
            "name_servicio": self.name_servicio
        }
    def add_favorito(self, _id_user, _id_servicio_registrados, name_servicio ):
        new_favorito = Favoritos(id_user=_id_user, id_servicio_registrados=_id_servicio_registrados, name_servicio=name_servicio)
        db.session.add(new_favorito)
        db.session.commit()
    def get_favoritos_by_user(_id_user):
        favoritos_query = Favoritos.query.filter_by(id_user=_id_user).all()
        return list(map(lambda x: x.serialize(), favoritos_query))
    def delete_favorito(id):
        delete=Favoritos.query.filter_by(id=id).first()
        db.session.delete(delete)
        db.session.commit()
  

class Comentarios(db.Model):
    __tablename__ = 'comentarios'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    id_user_compra=db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    id_servicios_prestados = db.Column(db.Integer, db.ForeignKey('servicios_prestados.id'), nullable=False)
    id_servicio_registrados = db.Column(db.Integer, db.ForeignKey('servicio_registrados.id'), nullable=False)
    text_comment = db.Column(db.String(250), nullable=True)
    evaluacion = db.Column(db.Integer, nullable=True)
    def __repr__(self):
        return "<Comentarios %r>" % self.id
    def serialize(self):
        return {
            "id": self.id,
            "id_user_compra": self.user.id,
            "id_servicios_prestados": self.servicios_prestados.id,
            "id_servicio_registrados": self.servicio_registrados.id,
            "text_comment":self.text_comment,
            "evaluacion": self.evaluacion
        }
    def get_comentarios(id):
        # comentarios_query = Comentarios.query.all()
        # comentarios_query = Comentarios.query.filter_by(id=_id_servicios_prestados).all()
        return list(map(lambda x: x.serialize(), Comentarios.query.all()))

    def get_comentario_servicioprestado(id_user, id_servicios_prestados, id_servicio_registrados):
        comment=Comentarios.query.filter_by(id_user_compra=id_user, id_servicios_prestados=id_servicios_prestados, id_servicio_registrados=id_servicio_registrados)
        if not comment: return False
        return True
  

class Document(db.Model):
    __tablename__ = 'document'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    id_servicio_registrados = db.Column(db.Integer, db.ForeignKey('servicio_registrados.id', ondelete='CASCADE'), nullable=False)
    portfolio = db.Column(db.String(100))

    def __repr__(self):
        return "<Document %r>" % self.id
    def serialize(self):
        return {
            "id": self.id,
            "id_servicio_registrados": self.servicio_registrados.id,
            "portafolio":self.portafolio
        }