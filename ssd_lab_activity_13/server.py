from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from flask_login import (LoginManager, login_manager, login_user, logout_user, login_required, UserMixin)

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
app.config['SECRET_KEY'] = 'secretkey'

db = SQLAlchemy(app)
login_manager = LoginManager()

login_manager.init_app(app)

class User(UserMixin, db.Model):
    id = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    
with app.app_context():
    db.create_all()
    
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

if "_main" == __name__:
    app.run(host="127.0.0.1", port="5000", debug=True)

