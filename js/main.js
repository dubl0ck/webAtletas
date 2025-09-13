import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://qehhrhsmlrsxqugvuida.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlaGhyaHNtbHJzeHF1Z3Z1aWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NzcyMjQsImV4cCI6MjA3MzI1MzIyNH0.HA9VzmLuCUVe35iKNJqrBGZ6rWXcu_q7GPrNJAMUytQ';
const supabase = createClient(supabaseUrl, supabaseKey);

const tbody = document.querySelector("#ranking tbody");

async function cargarRanking() {
  const { data, error } = await supabase.from('Marcas').select('*').order('marca', { ascending:true });
  if(error) { console.error(error); return; }
  tbody.innerHTML = '';
  data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.nombre}</td>
      <td>${row.fechaNacimiento}</td>
      <td>${row.sexo}</td>
      <td>${row.prueba}</td>
      <td>${row.marca}</td>
      <td>${row.categoria}</td>
      <td>${row.artefacto || ''}</td>
    `;
    tbody.appendChild(tr);
  });
}

cargarRanking();
