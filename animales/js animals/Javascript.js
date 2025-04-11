// document.addEventListener('DOMContentLoaded', function() {
//   // Base de datos simulada con más información para cada animal
//   const animalsData = {
//       "0258": {
//           tipoGanado: "Vacuno",
//           animal: "Vaca",
//           id: "0258",
//           sexo: "Hembra",
//           fecha: "05/02/2023",
//           peso: "450",
//           edad: "3",
//           revision: "12/01/2023"
//       },
//       "0259": {
//           tipoGanado: "Vacuno",
//           animal: "Toro",
//           id: "0259",
//           sexo: "Macho",
//           fecha: "12/03/2023",
//           peso: "780",
//           edad: "4.5",
//           revision: "15/01/2023"
//       },
//       "0345": {
//           tipoGanado: "Ovino",
//           animal: "Oveja",
//           id: "0345",
//           sexo: "Hembra",
//           fecha: "23/01/2023",
//           peso: "65",
//           edad: "2",
//           revision: "10/02/2023"
//       },
//       "0421": {
//           tipoGanado: "Porcino",
//           animal: "Cerdo",
//           id: "0421",
//           sexo: "Macho",
//           fecha: "17/04/2023",
//           peso: "120",
//           edad: "1.5",
//           revision: "05/03/2023"
//       }
//   };
  
//   // Elementos del DOM
//   const overlay = document.getElementById('overlay');
//   const viewCard = document.getElementById('viewCard');
//   const editCard = document.getElementById('editCard');
//   const deleteCard = document.getElementById('deleteCard');
//   const filtroGanado = document.getElementById('filtroGanado');
//   const tablaAnimales = document.getElementById('tablaAnimales');
//   let currentAnimalId = null;
  
//   // Filtrar la tabla por tipo de ganado
//   filtroGanado.addEventListener('change', function() {
//       const filterValue = this.value.toLowerCase();
//       const rows = tablaAnimales.querySelectorAll('tbody tr');
      
//       rows.forEach(row => {
//           const tipoGanado = row.cells[0].textContent.toLowerCase();
//           if (filterValue === '' || tipoGanado === filterValue) {
//               row.style.display = '';
//           } else {
//               row.style.display = 'none';
//           }
//       });
//   });
  
//   // Mostrar tarjeta de visualización
//   document.querySelectorAll('.view-animal').forEach(button => {
//       button.addEventListener('click', function(e) {
//           e.preventDefault();
//           const row = this.closest('tr');
//           const animalId = row.getAttribute('data-id');
          
//           if (animalsData[animalId]) {
//               const animal = animalsData[animalId];
              
//               // Llenar la tarjeta con la información
//               document.getElementById('viewTipoGanado').textContent = animal.tipoGanado;
//               document.getElementById('viewAnimal').textContent = animal.animal;
//               document.getElementById('viewID').textContent = animal.id;
//               document.getElementById('viewSexo').textContent = animal.sexo;
//               document.getElementById('viewFecha').textContent = animal.fecha;
//               document.getElementById('viewPeso').textContent = animal.peso + " kg";
//               document.getElementById('viewEdad').textContent = animal.edad + " años";
//               document.getElementById('viewRevision').textContent = animal.revision;
              
//               // Mostrar la tarjeta
//               currentAnimalId = animalId;
//               overlay.style.display = 'block';
//               viewCard.style.display = 'block';
//           }
//       });
//   });
  
//   // Mostrar tarjeta de edición
//   document.querySelectorAll('.edit-animal').forEach(button => {
//       button.addEventListener('click', function(e) {
//           e.preventDefault();
//           const row = this.closest('tr');
//           const animalId = row.getAttribute('data-id');
          
//           if (animalsData[animalId]) {
//               showEditCard(animalId);
//           }
//       });
//   });
  
//   // Botón para editar desde la tarjeta de visualización
//   document.getElementById('viewEditButton').addEventListener('click', function() {
//       if (currentAnimalId) {
//           viewCard.style.display = 'none';
//           showEditCard(currentAnimalId);
//       }
//   });
  
//   function showEditCard(animalId) {
//       const animal = animalsData[animalId];
      
//       // Convertir fecha de DD/MM/YYYY a YYYY-MM-DD para el input date
//       const convertirFecha = (fechaStr) => {
//           const partes = fechaStr.split('/');
//           return `${partes[2]}-${partes[1]}-${partes[0]}`;
//       };
      
//       // Llenar el formulario de edición
//       document.getElementById('editTipoGanado').value = animal.tipoGanado.toLowerCase();
//       document.getElementById('editAnimal').value = animal.animal;
//       document.getElementById('editID').value = animal.id;
//       document.getElementById('editSexo').value = animal.sexo;
//       document.getElementById('editFecha').value = convertirFecha(animal.fecha);
//       document.getElementById('editPeso').value = animal.peso;
//       document.getElementById('editEdad').value = animal.edad;
//       document.getElementById('editRevision').value = convertirFecha(animal.revision);
      
//       // Mostrar la tarjeta
//       currentAnimalId = animalId;
//       overlay.style.display = 'block';
//       editCard.style.display = 'block';
//   }
  
//   // Mostrar tarjeta de confirmación de eliminación
//   document.querySelectorAll('.delete-animal').forEach(button => {
//       button.addEventListener('click', function(e) {
//           e.preventDefault();
//           const row = this.closest('tr');
//           const animalId = row.getAttribute('data-id');
          
//           currentAnimalId = animalId;
//           overlay.style.display = 'block';
//           deleteCard.style.display = 'block';
//       });
//   });
  
//   // Botón para eliminar desde la tarjeta de visualización
//   document.getElementById('viewDeleteButton').addEventListener('click', function() {
//       viewCard.style.display = 'none';
//       deleteCard.style.display = 'block';
//   });
  
//   // Cerrar tarjetas
//   document.querySelectorAll('.close-card, .cancel-button').forEach(button => {
//       button.addEventListener('click', function() {
//           closeAllCards();
//       });
//   });
  
//   // Guardar cambios del formulario de edición
//   document.getElementById('editForm').addEventListener('submit', function(e) {
//       e.preventDefault();
      
//       if (currentAnimalId) {
//           // Actualizar datos en la "base de datos" simulada
//           const animal = animalsData[currentAnimalId];
//           animal.tipoGanado = document.getElementById('editTipoGanado').options[document.getElementById('editTipoGanado').selectedIndex].text;
//           animal.animal = document.getElementById('editAnimal').value;
//           animal.sexo = document.getElementById('editSexo').value;
          
//           // Convertir fecha de YYYY-MM-DD a DD/MM/YYYY
//           const formatearFecha = (fechaStr) => {
//               const fecha = new Date(fechaStr);
//               const dia = String(fecha.getDate()).padStart(2, '0');
//               const mes = String(fecha.getMonth() + 1).padStart(2, '0');
//               const año = fecha.getFullYear();
//               return `${dia}/${mes}/${año}`;
//           };
          
//           animal.fecha = formatearFecha(document.getElementById('editFecha').value);
//           animal.peso = document.getElementById('editPeso').value;
//           animal.edad = document.getElementById('editEdad').value;
//           animal.revision = formatearFecha(document.getElementById('editRevision').value);
          
//           // Actualizar la fila en la tabla
//           const row = document.querySelector(`tr[data-id="${currentAnimalId}"]`);
//           if (row) {
//               row.cells[0].textContent = animal.tipoGanado;
//               row.cells[1].textContent = animal.animal;
//               row.cells[3].textContent = animal.sexo;
//               row.cells[4].textContent = animal.fecha;
//           }
          
//           alert('Datos actualizados correctamente.');
//           closeAllCards();
//       }
//   });
  
//   // Eliminar animal
//   document.querySelector('.confirm-delete-button').addEventListener('click', function() {
//       if (currentAnimalId) {
//           // Eliminar de la "base de datos" simulada
//           delete animalsData[currentAnimalId];
          
//           // Eliminar la fila de la tabla
//           const row = document.querySelector(`tr[data-id="${currentAnimalId}"]`);
//           if (row) {
//               row.remove();
//           }
          
//           alert('Animal eliminado correctamente.');
//           closeAllCards();
//       }
//   });
  
//   // Función para cerrar todas las tarjetas
//   function closeAllCards() {
//       overlay.style.display = 'none';
//       viewCard.style.display = 'none';
//       editCard.style.display = 'none';
//       deleteCard.style.display = 'none';
//       currentAnimalId = null;
//   }
  
//   // Cerrar tarjetas si se hace clic en el overlay
//   overlay.addEventListener('click', closeAllCards);
// });

