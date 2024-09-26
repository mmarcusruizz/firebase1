<template>
  <div>
    <input v-model="usuario" placeholder="Usuario" />
    <input v-model="nombre" placeholder="Nombre" />
    <input v-model="email" placeholder="E-mail" />
    <button @click="agregarPersonaje">Ingresar</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

export default {
  setup() {
    // Crear referencias reactivas para cada campo de entrada
    const usuario = ref('');
    const nombre = ref('');
    const email = ref('');

    // Función para agregar un personaje a Firebase
    const agregarPersonaje = async () => {
      try {
        if (usuario.value && nombre.value && email.value) {
          // Asegúrate de usar los nombres de campo correctos
          await addDoc(collection(db, 'personajes'), {
            Usuario: usuario.value, // Usar "Usuarios" en lugar de "usuario"
            Nombre: nombre.value,
            Mail: email.value // Usar "Email" en lugar de "email"
          });
          
          // Limpiar los campos de entrada después de agregar
          usuario.value = '';
          nombre.value = '';
          email.value = '';
          alert('Personaje agregado exitosamente');
        } else {
          alert('Por favor, completa todos los campos.');
        }
      } catch (error) {
        console.error('Error al agregar personaje:', error);
      }
    };

    return {
      usuario,
      nombre,
      email,
      agregarPersonaje
    };
  }
};
</script>

<style scoped>
input {
  margin: 10px;
}
</style>