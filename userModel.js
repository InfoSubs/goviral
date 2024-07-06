const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Definição do esquema do usuário
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Antes de salvar o usuário, criptografa a senha
userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

// Método para comparar senhas
userSchema.methods.comparePassword = async function(candidatePassword) {
    const user = this;
    return await bcrypt.compare(candidatePassword, user.password);
};

// Modelo de usuário baseado no esquema
const User = mongoose.model('User', userSchema);

module.exports = User;
