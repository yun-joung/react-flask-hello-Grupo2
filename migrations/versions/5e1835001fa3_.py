"""empty message

<<<<<<< HEAD:migrations/versions/53f822b25adc_.py
Revision ID: 53f822b25adc
Revises: 
Create Date: 2021-04-09 15:24:25.327619
=======
Revision ID: fdda41654706
Revises: 
Create Date: 2021-04-09 14:13:36.466104
>>>>>>> 11f7161e688825f6d080106a8f8f53c936a9933a:migrations/versions/5e1835001fa3_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<< HEAD:migrations/versions/53f822b25adc_.py
revision = '53f822b25adc'
=======
revision = 'fdda41654706'
>>>>>>> 11f7161e688825f6d080106a8f8f53c936a9933a:migrations/versions/5e1835001fa3_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userName', sa.String(length=100), nullable=True),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('password', sa.String(length=100), nullable=False),
    sa.Column('tipo_user', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('userName')
    )
    op.create_table('servicio_registrados',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=False),
    sa.Column('userName', sa.String(length=50), nullable=True),
    sa.Column('tipo_membresia', sa.String(length=50), nullable=False),
    sa.Column('category', sa.String(length=50), nullable=False),
    sa.Column('subcategory', sa.String(length=50), nullable=False),
    sa.Column('tipo_cobro', sa.String(length=50), nullable=False),
    sa.Column('valor', sa.Integer(), nullable=False),
    sa.Column('name_servicio', sa.String(length=50), nullable=False),
    sa.Column('descrip_servicio', sa.String(length=250), nullable=False),
    sa.Column('duracion', sa.String(length=30), nullable=True),
    sa.Column('revision', sa.String(length=30), nullable=True),
    sa.Column('proceso', sa.String(length=250), nullable=True),
    sa.Column('experiencia', sa.String(length=50), nullable=False),
    sa.Column('portafolio', sa.String(length=250), nullable=True),
    sa.Column('merit', sa.String(length=250), nullable=True),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favoritos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.Column('id_servicio_registrados', sa.Integer(), nullable=True),
    sa.Column('name_servicio', sa.String(length=50), nullable=True),
    sa.ForeignKeyConstraint(['id_servicio_registrados'], ['servicio_registrados.id'], ),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('servicios_prestados',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user_compra', sa.Integer(), nullable=False),
    sa.Column('id_servicio_registrados', sa.Integer(), nullable=False),
    sa.Column('cantidad_servicio', sa.Integer(), nullable=False),
    sa.Column('total_valor_servicio', sa.Integer(), nullable=False),
    sa.Column('fecha_inicio', sa.DateTime(), nullable=True),
    sa.Column('fecha_termino', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['id_servicio_registrados'], ['servicio_registrados.id'], ),
    sa.ForeignKeyConstraint(['id_user_compra'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comentarios',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_servicios_prestados', sa.Integer(), nullable=False),
    sa.Column('id_servicio_registrados', sa.Integer(), nullable=False),
    sa.Column('text_comment', sa.String(length=250), nullable=True),
    sa.Column('evaluacion', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_servicio_registrados'], ['servicio_registrados.id'], ),
    sa.ForeignKeyConstraint(['id_servicios_prestados'], ['servicios_prestados.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comentarios')
    op.drop_table('servicios_prestados')
    op.drop_table('favoritos')
    op.drop_table('servicio_registrados')
    op.drop_table('user')
    # ### end Alembic commands ###
