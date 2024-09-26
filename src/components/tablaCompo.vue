<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>E-mail</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="personaje in personajes" :key="personaje.id">
          <td>{{ personaje.Usuario }}</td>
          <td>{{ personaje.Nombre }}</td>
          <td>{{ personaje.Mail }}</td>
          <td><button @click="eliminar(personaje.id)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <h3>una vez ingresados los nuevos personajes debe refrescar la pagina para visualizar los cambios</h3>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.js';

export default {
  setup() {
    const personajes = ref([]);

    const obtenerPersonajes = async () => {
      const querySnapshot = await getDocs(collection(db, 'personajes'));
      personajes.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    };

    const eliminar = async (id) => {
      await deleteDoc(doc(db, 'personajes', id));
      // Actualiza la lista después de eliminar
      obtenerPersonajes();
    };

    onMounted(() => {
      obtenerPersonajes();
    });

    return {
      personajes,
      eliminar
    };
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
}

th, td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
  color: #333;
  font-weight: bold;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #c0392b;
}

h3 {
  color: #2c64dd;
  text-align: center;
  margin-top: 20px;
}


</style>