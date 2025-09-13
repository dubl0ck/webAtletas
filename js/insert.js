// js/insert.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { pruebasDisponibles } from './pruebas_map.js';

// --- CONFIG SUPABASE ---
const supabaseUrl = 'TU_SUPABASE_URL';
const supabaseKey = 'TU_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// --- ELEMENTOS ---
const loginContainer = document.getElementById('login-container');
const insertForm = document.getElementById('insert-form');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('login-error');
const modalidadSelect = document.getElementById('modalidad');
const pruebaSelect = document.getElementById('prueba');
const fechaNacimiento = document.getElementById('fechaNacimiento');
const sexoSelect = document.getElementById('sexo');
const artefactoInput = document.getElementById('artefacto');

// --- LOGIN ---
loginBtn.addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    loginError.textContent = error.message;
    return;
  }

  loginContainer.style.display = 'none';
  insertForm.style.display = 'block';
  cargarPruebas(); // cargar pruebas inicialmente
});

// --- CALCULAR CATEGORÍA ---
function calcularCategoria() {
  if (!fechaNacimiento.value) return [];
  const fecha = new Date(fechaNacimiento.value);
  const hoy = new Date();
  const edad = hoy.getFullYear() - fecha.getFullYear();
  if (edad < 10) return ["Sub10"];
  if (edad < 12) return ["Sub12"];
  if (edad < 14) return ["Sub14"];
  if (edad < 16) return ["Sub16"];
  if (edad < 18) return ["Sub18"];
  if (edad < 20) return ["Sub20"];
  if (edad < 23) return ["Sub23"];
  return ["Absoluto"];
}

// --- CARGAR PRUEBAS SEGÚN MODALIDAD Y CATEGORÍA ---
function cargarPruebas() {
  const modalidad = modalidadSelect.value;
  const categorias = calcularCategoria();
  if (!categorias.length) return;

  const valorPrevio = pruebaSelect.value; // guardar valor previo
  pruebaSelect.innerHTML = ''; // limpiar

  const pruebas = pruebasDisponibles[modalidad];
  ['carreras','vallas','lanzamientos','saltos'].forEach(tipo => {
    if(!pruebas[tipo]) return;
    for(const [prueba, info] of Object.entries(pruebas[tipo])) {
      if(!info.categorias || info.categorias.some(c => categorias.includes(c))) {
        const opt = document.createElement('option');
        opt.value = prueba;
        opt.textContent = prueba;
        pruebaSelect.appendChild(opt);
      }
    }
  });

  // Restaurar valor previo si existe
  if ([...pruebaSelect.options].some(opt => opt.value === valorPrevio)) {
    pruebaSelect.value = valorPrevio;
  } else {
    pruebaSelect.selectedIndex = 0; // default
  }

  actualizarArtefacto();
}

// --- ACTUALIZAR ARTEFACTO ---
function actualizarArtefacto() {
  const prueba = pruebaSelect.value;
  const categoria = calcularCategoria()[0];
  const sexo = sexoSelect.value;
  const modalidad = modalidadSelect.value;

  const pruebas = pruebasDisponibles[modalidad];
  if (pruebas.lanzamientos[prueba]) {
    artefactoInput.value = pruebas.lanzamientos[prueba].weights[categoria][sexo] || '';
  } else {
    artefactoInput.value = '';
  }
}

// --- EVENTOS DE CAMBIO ---
[modalidadSelect, pruebaSelect, fechaNacimiento, sexoSelect].forEach(el => {
  el.addEventListener('change', cargarPruebas);
});

// --- SUBMIT FORMULARIO ---
insertForm.addEventListener('submit', async e => {
  e.preventDefault();
  const categoria = calcularCategoria()[0];

  const { data, error } = await supabase.from('Marcas').insert([{
    nombre: document.getElementById('nombre').value,
    fechaNacimiento: fechaNacimiento.value,
    sexo: sexoSelect.value,
    modalidad: modalidadSelect.value,
    prueba: pruebaSelect.value,
    fechaMarca: document.getElementById('fechaMarca').value,
    marca: document.getElementById('marca').value,
    instalacion: document.getElementById('instalacion').value,
    artefacto: artefactoInput.value,
    categoria
  }]);

  if (error) {
    alert(error.message);
    return;
  }

  alert('Marca insertada correctamente!');
  insertForm.reset();
  artefactoInput.value = '';
  cargarPruebas();
});
