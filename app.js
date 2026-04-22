// ==========================================
// 1. PANEL DE CONFIGURACIÓN MODULAR (CONFIG)
// ==========================================
const CONFIG = {
    topParties: ["Buen Gobierno", "Renovación Popular", "Fuerza Popular", "Juntos por el Perú"],
    colores: {
        rango: ["#d4ac0d", "#1f77b4", "#ff7f0e", "#1b5e20", "#777777"], 
        defecto: "#777777",
        focoSecundario: "#8e44ad"
    },
    svg: {
        width: 500,
        height: 600, 
        // AUMENTAMOS EL LEFT a 80 para que los números respiren
        margin: { top: 40, right: 120, bottom: 40, left: 80 } 
    }
};

// ==========================================
// 2. DICCIONARIO DE IMÁGENES
// ==========================================
const imageAssets = {
    "Buen Gobierno": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_del_buen_gobierno.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_jorge_nieto_montesinos.jpg" },
    "Renovación Popular": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_renovacion_popular.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_rafael_bernardo_lopez_aliaga_cazorla.jpg" },
    "Fuerza Popular": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_fuerza_popular.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_keiko_sofia_fujimori_higuchi.jpg" },
    "Juntos por el Perú": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_juntos_por_el_peru.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_roberto_helbert_sanchez_palomino.jpg" },
    "OBRAS": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_civico_obras.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_ricardo_pablo_belmont_cassinelli.jpg" },
    "País para Todos": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_pais_para_todos.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_carlos_gonsalo_alvarez_loayza.jpg" },
    "Ahora Nación": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_ahora_nacion__an.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_pablo_alfonso_lopez_chau_nava.jpg" },
    "Primero la Gente": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_primero_la_gente__comunidad_ecologia_libertad_y_progreso.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_maria_soledad_perez_tello_de_rodriguez.jpg" },
    "SíCreo": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_sicreo.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_alfonso_carlos_espa_y_garcesalvear.jpg" },
    "Frente de la Esperanza 2021": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_frente_de_la_esperanza_2021.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_luis_fernando_olivera_vega.jpg" },
    "Podemos Perú": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_podemos_peru.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_jose_leon_luna_galvez.jpg" },
    "Cooperación Popular": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_politico_cooperacion_popular.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_yonhy_lescano_ancieta.jpg" },
    "APP": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_alianza_para_el_progreso.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_cesar_acuña_peralta.jpg" },
    "APRA": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_aprista_peruano.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_pitter_enrique_valderrama_peña.jpg" },
    "Somos Perú": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_democratico_somos_peru.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_george_patrick_forsyth_sommer.jpg" },
    "Patriótico del Perú": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_patriotico_del_peru.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_herbert_caller_gutierrez.jpg" },
    "Perú Primero": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_politico_peru_primero.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_mario_enrique_vizcarra_cornejo.jpg" },
    "Venceremos": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_alianza_electoral_venceremos.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_ronald_darwin_atencio_sotomayor.jpg" },
    "Un Camino Diferente": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_un_camino_diferente.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_rosario_del_pilar_fernandez_bazan.jpg" },
    "Unido Perú": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_democrata_unido_peru.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_charlie_carrasco_salazar.jpg" },
    "Perú Libre": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_politico_nacional_peru_libre.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_vladimir_roy_cerron_rojas.jpg" },
    "Partido Morado": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_morado.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_mesias_antonio_guevara_amasifuen.jpg" },
    "Unidad Nacional": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_unidad_nacional.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_roberto_enrique_chiabra_leon.jpg" },
    "Progresemos": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_progresemos.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_paul_davis_jaimes_blanco.jpg" },
    "Integridad Democrática": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_politico_integridad_democratica.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_wolfgang_mario_grozo_costa.jpg" },
    "Demócrata Verde": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_democrata_verde.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_alex_gonzales_castillo.jpg" },
    "Libertad Popular": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_libertad_popular.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_rafael_jorge_belaunde_llosa.jpg" },
    "Avanza País": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_avanza_pais__partido_de_integracion_social.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_jose_daniel_williams_zapata.jpg" },
    "Perú Acción": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_politico_peru_accion.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_francisco_ernesto_diezcanseco_távara.jpg" },
    "Fuerza y Libertad": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_fuerza_y_libertad.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_fiorella_giannina_molinelli_aristondo.jpg" },
    "Fe en el Perú": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_fe_en_el_peru.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_alvaro_gonzalo_paz_de_la_barra_freigeiro.jpg" },
    "Democrático Federal": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_democratico_federal.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_armando_joaquin_masse_fernandez.jpg" },
    "Salvemos al Perú": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_salvemos_al_peru.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_antonio_ortiz_villano.jpg" },
    "PRIN": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_partido_politico_prin.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_walter_gilmer_chirinos_purizaga.jpg" },
    "Trabajadores y Emprendedores del Perú": { "logo": "", "candidato": "" },
    "Perú Moderno": { "logo": "https://fabmonge.github.io/Voto_estrategico/fotos/partido_peru_moderno.jpg", "candidato": "https://fabmonge.github.io/Voto_estrategico/fotos/candidato_carlos_ernesto_jaico_carranza.jpg" }
};

// ==========================================
// 3. DATA BASE PRE-CALCULADA
// ==========================================
const rawData = [
    // LURÍN
    {partido:"Buen Gobierno", dist:"LURÍN", d12:12.9, d13:24.4}, {partido:"Renovación Popular", dist:"LURÍN", d12:13.9, d13:14.1}, {partido:"Fuerza Popular", dist:"LURÍN", d12:20.9, d13:20.0}, {partido:"Juntos por el Perú", dist:"LURÍN", d12:3.9, d13:4.2}, {partido:"OBRAS", dist:"LURÍN", d12:5.7, d13:10.4}, {partido:"País para Todos", dist:"LURÍN", d12:7.4, d13:5.6}, {partido:"Ahora Nación", dist:"LURÍN", d12:3.9, d13:1.8}, {partido:"Primero la Gente", dist:"LURÍN", d12:2.9, d13:0.9}, {partido:"SíCreo", dist:"LURÍN", d12:3.5, d13:1.4}, {partido:"Frente de la Esperanza 2021", dist:"LURÍN", d12:1.2, d13:0.7}, {partido:"Podemos Perú", dist:"LURÍN", d12:0.8, d13:0.7}, {partido:"Cooperación Popular", dist:"LURÍN", d12:0.4, d13:0.2}, {partido:"APP", dist:"LURÍN", d12:0.6, d13:0.5}, {partido:"APRA", dist:"LURÍN", d12:0.6, d13:0.3}, {partido:"Somos Perú", dist:"LURÍN", d12:0.5, d13:0.3}, {partido:"Patriótico del Perú", dist:"LURÍN", d12:0.6, d13:0.4}, {partido:"Perú Primero", dist:"LURÍN", d12:0.5, d13:0.3}, {partido:"Venceremos", dist:"LURÍN", d12:0.2, d13:0.3}, {partido:"Un Camino Diferente", dist:"LURÍN", d12:0.1, d13:0.1}, {partido:"Unido Perú", dist:"LURÍN", d12:0.6, d13:0.3}, {partido:"Perú Libre", dist:"LURÍN", d12:0.2, d13:0.2}, {partido:"Partido Morado", dist:"LURÍN", d12:0.4, d13:0.2}, {partido:"Unidad Nacional", dist:"LURÍN", d12:0.4, d13:0.1}, {partido:"Progresemos", dist:"LURÍN", d12:0.1, d13:0.3}, {partido:"Integridad Democrática", dist:"LURÍN", d12:0.4, d13:0.1}, {partido:"Demócrata Verde", dist:"LURÍN", d12:0.3, d13:0.3}, {partido:"Libertad Popular", dist:"LURÍN", d12:0.4, d13:0.2}, {partido:"Avanza País", dist:"LURÍN", d12:0.1, d13:0.1}, {partido:"Perú Acción", dist:"LURÍN", d12:0.1, d13:0.1}, {partido:"Fuerza y Libertad", dist:"LURÍN", d12:0.0, d13:0.0}, {partido:"Fe en el Perú", dist:"LURÍN", d12:0.1, d13:0.1}, {partido:"Democrático Federal", dist:"LURÍN", d12:0.1, d13:0.1}, {partido:"Salvemos al Perú", dist:"LURÍN", d12:0.0, d13:0.0}, {partido:"PRIN", dist:"LURÍN", d12:0.0, d13:0.1}, {partido:"Trabajadores y Emprendedores del Perú", dist:"LURÍN", d12:-0.2, d13:0.3}, {partido:"Perú Moderno", dist:"LURÍN", d12:0.0, d13:0.0},
    {partido:"Otros", dist:"LURÍN", d12:32.0, d13:26.6},

    // PACHACÁMAC
    {partido:"Buen Gobierno", dist:"PACHACÁMAC", d12:10.0, d13:30.6}, {partido:"Renovación Popular", dist:"PACHACÁMAC", d12:9.8, d13:14.4}, {partido:"Fuerza Popular", dist:"PACHACÁMAC", d12:15.8, d13:19.0}, {partido:"Juntos por el Perú", dist:"PACHACÁMAC", d12:6.1, d13:10.7}, {partido:"OBRAS", dist:"PACHACÁMAC", d12:12.8, d13:11.3}, {partido:"País para Todos", dist:"PACHACÁMAC", d12:6.8, d13:3.7}, {partido:"Ahora Nación", dist:"PACHACÁMAC", d12:5.0, d13:2.0}, {partido:"Primero la Gente", dist:"PACHACÁMAC", d12:2.8, d13:0.8}, {partido:"SíCreo", dist:"PACHACÁMAC", d12:4.2, d13:1.6}, {partido:"Frente de la Esperanza 2021", dist:"PACHACÁMAC", d12:1.5, d13:0.8}, {partido:"Podemos Perú", dist:"PACHACÁMAC", d12:1.3, d13:0.6}, {partido:"Cooperación Popular", dist:"PACHACÁMAC", d12:0.5, d13:0.2}, {partido:"APP", dist:"PACHACÁMAC", d12:0.6, d13:0.3}, {partido:"APRA", dist:"PACHACÁMAC", d12:0.3, d13:0.1}, {partido:"Somos Perú", dist:"PACHACÁMAC", d12:0.7, d13:0.4}, {partido:"Patriótico del Perú", dist:"PACHACÁMAC", d12:0.8, d13:0.6}, {partido:"Perú Primero", dist:"PACHACÁMAC", d12:0.5, d13:0.1}, {partido:"Venceremos", dist:"PACHACÁMAC", d12:0.5, d13:0.2}, {partido:"Un Camino Diferente", dist:"PACHACÁMAC", d12:0.3, d13:0.1}, {partido:"Unido Perú", dist:"PACHACÁMAC", d12:0.9, d13:0.5}, {partido:"Perú Libre", dist:"PACHACÁMAC", d12:0.4, d13:0.2}, {partido:"Partido Morado", dist:"PACHACÁMAC", d12:0.5, d13:0.2}, {partido:"Unidad Nacional", dist:"PACHACÁMAC", d12:0.2, d13:0.0}, {partido:"Progresemos", dist:"PACHACÁMAC", d12:0.4, d13:0.2}, {partido:"Integridad Democrática", dist:"PACHACÁMAC", d12:0.3, d13:0.1}, {partido:"Demócrata Verde", dist:"PACHACÁMAC", d12:0.4, d13:0.4}, {partido:"Libertad Popular", dist:"PACHACÁMAC", d12:0.2, d13:0.1}, {partido:"Avanza País", dist:"PACHACÁMAC", d12:0.1, d13:0.1}, {partido:"Perú Acción", dist:"PACHACÁMAC", d12:0.2, d13:0.1}, {partido:"Fuerza y Libertad", dist:"PACHACÁMAC", d12:0.2, d13:0.1}, {partido:"Fe en el Perú", dist:"PACHACÁMAC", d12:0.1, d13:0.2}, {partido:"Democrático Federal", dist:"PACHACÁMAC", d12:0.1, d13:0.1}, {partido:"Salvemos al Perú", dist:"PACHACÁMAC", d12:0.0, d13:0.0}, {partido:"PRIN", dist:"PACHACÁMAC", d12:0.1, d13:0.0}, {partido:"Trabajadores y Emprendedores del Perú", dist:"PACHACÁMAC", d12:0.1, d13:0.0}, {partido:"Perú Moderno", dist:"PACHACÁMAC", d12:0.1, d13:0.0},
    {partido:"Otros", dist:"PACHACÁMAC", d12:42.9, d13:25.4},

    // SAN JUAN DE MIRAFLORES
    {partido:"Buen Gobierno", dist:"SAN JUAN DE MIRAFLORES", d12:13.4, d13:28.8}, {partido:"Renovación Popular", dist:"SAN JUAN DE MIRAFLORES", d12:16.7, d13:19.6}, {partido:"Fuerza Popular", dist:"SAN JUAN DE MIRAFLORES", d12:15.6, d13:19.0}, {partido:"Juntos por el Perú", dist:"SAN JUAN DE MIRAFLORES", d12:2.2, d13:4.5}, {partido:"OBRAS", dist:"SAN JUAN DE MIRAFLORES", d12:8.3, d13:6.2}, {partido:"País para Todos", dist:"SAN JUAN DE MIRAFLORES", d12:9.0, d13:3.8}, {partido:"Ahora Nación", dist:"SAN JUAN DE MIRAFLORES", d12:5.7, d13:1.3}, {partido:"Primero la Gente", dist:"SAN JUAN DE MIRAFLORES", d12:3.7, d13:0.7}, {partido:"SíCreo", dist:"SAN JUAN DE MIRAFLORES", d12:3.8, d13:0.7}, {partido:"Frente de la Esperanza 2021", dist:"SAN JUAN DE MIRAFLORES", d12:1.4, d13:0.6}, {partido:"Podemos Perú", dist:"SAN JUAN DE MIRAFLORES", d12:0.7, d13:0.4}, {partido:"Cooperación Popular", dist:"SAN JUAN DE MIRAFLORES", d12:0.5, d13:0.1}, {partido:"APP", dist:"SAN JUAN DE MIRAFLORES", d12:0.5, d13:0.4}, {partido:"APRA", dist:"SAN JUAN DE MIRAFLORES", d12:0.6, d13:0.1}, {partido:"Somos Perú", dist:"SAN JUAN DE MIRAFLORES", d12:0.5, d13:0.1}, {partido:"Patriótico del Perú", dist:"SAN JUAN DE MIRAFLORES", d12:0.5, d13:0.2}, {partido:"Perú Primero", dist:"SAN JUAN DE MIRAFLORES", d12:0.5, d13:0.1}, {partido:"Venceremos", dist:"SAN JUAN DE MIRAFLORES", d12:0.3, d13:0.2}, {partido:"Un Camino Diferente", dist:"SAN JUAN DE MIRAFLORES", d12:0.1, d13:0.1}, {partido:"Unido Perú", dist:"SAN JUAN DE MIRAFLORES", d12:0.4, d13:0.1}, {partido:"Perú Libre", dist:"SAN JUAN DE MIRAFLORES", d12:0.2, d13:0.2}, {partido:"Partido Morado", dist:"SAN JUAN DE MIRAFLORES", d12:0.5, d13:0.1}, {partido:"Unidad Nacional", dist:"SAN JUAN DE MIRAFLORES", d12:0.5, d13:0.1}, {partido:"Progresemos", dist:"SAN JUAN DE MIRAFLORES", d12:0.3, d13:0.2}, {partido:"Integridad Democrática", dist:"SAN JUAN DE MIRAFLORES", d12:0.4, d13:0.1}, {partido:"Demócrata Verde", dist:"SAN JUAN DE MIRAFLORES", d12:0.3, d13:0.1}, {partido:"Libertad Popular", dist:"SAN JUAN DE MIRAFLORES", d12:0.2, d13:0.1}, {partido:"Avanza País", dist:"SAN JUAN DE MIRAFLORES", d12:0.2, d13:0.1}, {partido:"Perú Acción", dist:"SAN JUAN DE MIRAFLORES", d12:0.1, d13:0.1}, {partido:"Fuerza y Libertad", dist:"SAN JUAN DE MIRAFLORES", d12:0.1, d13:0.0}, {partido:"Fe en el Perú", dist:"SAN JUAN DE MIRAFLORES", d12:0.1, d13:0.0}, {partido:"Democrático Federal", dist:"SAN JUAN DE MIRAFLORES", d12:0.1, d13:0.1}, {partido:"Salvemos al Perú", dist:"SAN JUAN DE MIRAFLORES", d12:0.0, d13:0.0}, {partido:"PRIN", dist:"SAN JUAN DE MIRAFLORES", d12:0.1, d13:0.0}, {partido:"Trabajadores y Emprendedores del Perú", dist:"SAN JUAN DE MIRAFLORES", d12:0.1, d13:0.7}, {partido:"Perú Moderno", dist:"SAN JUAN DE MIRAFLORES", d12:0.1, d13:0.1},
    {partido:"Otros", dist:"SAN JUAN DE MIRAFLORES", d12:39.9, d13:17.0} 
];

// ==========================================
// 4. LÓGICA DE ESCALAS Y DROPDOWN
// ==========================================
const colorScale = d3.scaleOrdinal()
    .domain([...CONFIG.topParties, "Otros"])
    .range(CONFIG.colores.rango); 

const trigger = document.getElementById("select-trigger");
const triggerContent = document.getElementById("trigger-content");
const optionsList = document.getElementById("options-list");

const allParties = [...new Set(rawData.map(d => d.partido))].filter(p => p !== "Otros").sort();
const minorParties = allParties.filter(p => !CONFIG.topParties.includes(p));

let liBase = document.createElement("li");
liBase.className = "option-item";
liBase.innerHTML = `<span> Seleccionar organización política</span>`;
liBase.onclick = () => selectOption("Otros", `Seleccionar organización política`, null);
optionsList.appendChild(liBase);

minorParties.forEach(p => {
    let li = document.createElement("li");
    li.className = "option-item";
    let imgSrc = imageAssets[p] && imageAssets[p].logo ? imageAssets[p].logo : '';
    let imgHTML = imgSrc ? `<img src="${imgSrc}" class="option-img" />` : `<div style="width:24px;height:24px;border-radius:50%;background:#ccc;"></div>`;
    li.innerHTML = `${imgHTML} <span>${p}</span>`;
    li.onclick = () => selectOption(p, p, imgSrc);
    optionsList.appendChild(li);
});

trigger.onclick = () => optionsList.classList.toggle("open");
document.addEventListener('click', (e) => {
    if (!document.getElementById("custom-select").contains(e.target)) {
        optionsList.classList.remove("open");
    }
});

function selectOption(value, text, imgSrc) {
    let imgHTML = imgSrc ? `<img src="${imgSrc}" class="trigger-icon" />` : '';
    triggerContent.innerHTML = `${imgHTML} <span>${text}</span>`;
    optionsList.classList.remove("open");
    
    renderChart(value);
    updateLegend(value); 
}

// ==========================================
// 5. MOTOR DE FILTRADO Y RENDERIZADO D3
// ==========================================
function getProcessedData(focusParty) {
    const processed = [];
    
    rawData.forEach(d => {
        if (CONFIG.topParties.includes(d.partido)) {
            processed.push({ dist: d.dist, partido: d.partido, fecha: "12-Abr", valor: d.d12 });
            processed.push({ dist: d.dist, partido: d.partido, fecha: "13-Abr", valor: d.d13 });
        }
        else if (focusParty === "Otros" && d.partido === "Otros") {
            processed.push({ dist: d.dist, partido: d.partido, fecha: "12-Abr", valor: d.d12 });
            processed.push({ dist: d.dist, partido: d.partido, fecha: "13-Abr", valor: d.d13 });
        }
        else if (focusParty !== "Otros" && d.partido === focusParty) {
            processed.push({ dist: d.dist, partido: d.partido, fecha: "12-Abr", valor: d.d12 });
            processed.push({ dist: d.dist, partido: d.partido, fecha: "13-Abr", valor: d.d13 });
        }
    });
    
    return processed;
}

const width = CONFIG.svg.width, height = CONFIG.svg.height;
const margin = CONFIG.svg.margin;

function relaxLabels(dataArray, yScale, minSpacing = 25) {
    let positions = dataArray.map(d => ({
        partido: d.partido,
        y: yScale(d.valor),
        origY: yScale(d.valor)
    })).sort((a, b) => a.y - b.y);

    for (let iter = 0; iter < 10; iter++) {
        let relaxed = false;
        for (let i = 0; i < positions.length - 1; i++) {
            let diff = positions[i+1].y - positions[i].y;
            if (diff < minSpacing) {
                let adjust = (minSpacing - diff) / 2;
                positions[i].y -= adjust;
                positions[i+1].y += adjust;
                relaxed = true;
            }
        }
        if (!relaxed) break;
    }
    
    let dict = {};
    positions.forEach(p => dict[p.partido] = { relaxedY: p.y, origY: p.origY });
    return dict;
}

function renderChart(focusParty) {
    const container = d3.select("#dashboard");
    container.selectAll("*").remove();

    const data = getProcessedData(focusParty);
    const dataByDist = d3.group(data, d => d.dist);
    
    const maxVal = d3.max(data, d => d.valor);
    const yScale = d3.scaleLinear()
        .domain([0, maxVal + (maxVal * 0.1)])
        .range([CONFIG.svg.height - CONFIG.svg.margin.bottom, CONFIG.svg.margin.top]);

    const xScale = d3.scalePoint()
        .domain(["12-Abr", "13-Abr"])
        .range([CONFIG.svg.margin.left, CONFIG.svg.width - CONFIG.svg.margin.right]);

    const line = d3.line()
        .x(d => xScale(d.fecha))
        .y(d => yScale(d.valor));

    for (const [dist, distData] of dataByDist) {
        const panel = container.append("div").attr("class", "panel");
        panel.append("div").attr("class", "panel-title").text(dist);

        const svg = panel.append("svg")
            .attr("viewBox", `0 0 ${CONFIG.svg.width} ${CONFIG.svg.height}`);

        svg.append("g")
            .attr("transform", `translate(0,${CONFIG.svg.height - CONFIG.svg.margin.bottom})`)
            .call(d3.axisBottom(xScale))
            .call(g => g.select(".domain").attr("stroke", "#ddd"))
            .call(g => g.selectAll(".tick line").remove())
            .call(g => g.selectAll("text")
                .attr("font-size", "14px")
                .attr("fill", "#666")
                .attr("font-weight", "bold"));

        const data12 = distData.filter(d => d.fecha === "12-Abr");
        const data13 = distData.filter(d => d.fecha === "13-Abr");
        
        // Espaciado ajustado (menor espacio porque no hay imágenes)
        const safeY12 = relaxLabels(data12, yScale, 25); 
        const safeY13 = relaxLabels(data13, yScale, 45); 

        const partyGroup = d3.group(distData, d => d.partido);

        for (const [partido, pathData] of partyGroup) {
            const isFocus = partido === focusParty && focusParty !== "Otros";
            const pColor = CONFIG.topParties.includes(partido) 
                ? colorScale(partido) 
                : (partido === "Otros" ? CONFIG.colores.defecto : CONFIG.colores.focoSecundario);
            
            const pWeight = partido === "Otros" ? 2.5 : 4.5;

            const g = svg.append("g");

            g.append("path")
                .datum(pathData)
                .attr("class", "slope-line")
                .attr("d", line)
                .attr("stroke", pColor)
                .attr("stroke-width", pWeight);

            g.selectAll("circle")
                .data(pathData)
                .enter().append("circle")
                .attr("cx", d => xScale(d.fecha))
                .attr("cy", d => yScale(d.valor))
                .attr("r", isFocus ? 9 : 6)
                .attr("fill", pColor);

            pathData.forEach(d => {
                const isLeft = d.fecha === "12-Abr";
                const safeData = isLeft ? safeY12[d.partido] : safeY13[d.partido];
                
                if (Math.abs(safeData.relaxedY - safeData.origY) > 2) {
                    g.append("line")
                        .attr("class", "label-connector")
                        .attr("x1", xScale(d.fecha))
                        .attr("y1", safeData.origY)
                        .attr("x2", isLeft ? xScale(d.fecha) - 12 : xScale(d.fecha) + 12)
                        .attr("y2", safeData.relaxedY);
                }

                const textGroup = g.append("g")
                    .attr("transform", `translate(${isLeft ? xScale(d.fecha) - 16 : xScale(d.fecha) + 16}, ${safeData.relaxedY})`);

                textGroup.append("text")
                    .attr("class", "data-label")
                    .attr("fill", pColor)
                    .attr("text-anchor", isLeft ? "end" : "start")
                    .attr("y", -6)
                    .text(d.partido === "Otros" && !isLeft ? "Otros" : `${d.valor.toFixed(1)}%`);

                if (!isLeft) {
                    const partner = pathData.find(p => p.fecha !== d.fecha);
                    const diff = d.valor - partner.valor;
                    const sign = diff > 0 ? "+" : "";
                    const diffStr = `(${sign}${diff.toFixed(2)} pp)`;

                    textGroup.append("text")
                        .attr("class", "pp-label")
                        .attr("text-anchor", "start")
                        .attr("y", 12)
                        .text(diffStr);
                }
            });
        }
    }
}

// ==========================================
// NUEVA LEYENDA DINÁMICA MULTIPLE
// ==========================================
function updateLegend(focusParty) {
    const container = document.getElementById("dynamic-legend");
    container.innerHTML = "";

    // Creamos la lista de partidos a mostrar: Los fijos + el seleccionado
    let partiesToShow = [...CONFIG.topParties];
    if (focusParty !== "Otros" && !partiesToShow.includes(focusParty)) {
        partiesToShow.push(focusParty);
    }

    partiesToShow.forEach(partyName => {
        if (imageAssets[partyName]) {
            const data = imageAssets[partyName];
            const color = CONFIG.topParties.includes(partyName)
                ? colorScale(partyName)
                : CONFIG.colores.focoSecundario;

            container.innerHTML += `
                <div class="legend-card">
                    <div class="legend-photos">
                        <img src="${data.candidato}" class="legend-photo candidate-img" alt="Candidato">
                        <img src="${data.logo}" class="legend-photo party-logo" alt="Logo Partido">
                    </div>
                    <div class="legend-info">
                        <span class="legend-party-name" style="color: ${color}">${partyName}</span>
                        <div class="legend-color-indicator" style="background-color: ${color}"></div>
                    </div>
                </div>
            `;
        }
    });
}

// ==========================================
// 1. CONFIGURACIÓN: BARRAS DE PÉRDIDAS
// ==========================================
const CONFIG_LOSS = {
    colores: {
        "País para Todos": "#8e44ad",    // Morado
        "Ahora Nación": "#2980b9",       // Azul
        "SíCreo": "#e67e22",             // Naranja
        "Primero la Gente": "#16a085",   // Verde Teal
        "defecto": "#bdc3c7"             // Gris para OBRAS y Fuerza Popular
    },
    svg: {
        width: 450,
        height: 320,
        margin: { top: 40, right: 180, bottom: 20, left: 60 } // Mucho espacio a la derecha para nombres y logos
    }
};

const dataPerdidas = [
    // LURÍN
    { dist: "LURÍN", partido: "SíCreo", dif: -2.1 },
    { dist: "LURÍN", partido: "Ahora Nación", dif: -2.1 },
    { dist: "LURÍN", partido: "Primero la Gente", dif: -2.0 },
    { dist: "LURÍN", partido: "País para Todos", dif: -1.8 },
    { dist: "LURÍN", partido: "Fuerza Popular", dif: -0.9 },
    // PACHACÁMAC
    { dist: "PACHACÁMAC", partido: "País para Todos", dif: -3.1 },
    { dist: "PACHACÁMAC", partido: "Ahora Nación", dif: -3.0 },
    { dist: "PACHACÁMAC", partido: "SíCreo", dif: -2.5 },
    { dist: "PACHACÁMAC", partido: "Primero la Gente", dif: -1.9 },
    { dist: "PACHACÁMAC", partido: "OBRAS", dif: -1.5 },
    // SJM
    { dist: "SAN JUAN DE MIRAFLORES", partido: "País para Todos", dif: -5.2 },
    { dist: "SAN JUAN DE MIRAFLORES", partido: "Ahora Nación", dif: -4.4 },
    { dist: "SAN JUAN DE MIRAFLORES", partido: "SíCreo", dif: -3.1 },
    { dist: "SAN JUAN DE MIRAFLORES", partido: "Primero la Gente", dif: -3.0 },
    { dist: "SAN JUAN DE MIRAFLORES", partido: "OBRAS", dif: -2.1 }
];

// ==========================================
// 2. RENDERIZADO DEL GRÁFICO (D3.js)
// ==========================================
function renderLossChart() {
    const container = d3.select("#dashboard-perdidas");
    container.selectAll("*").remove();

    const dataByDist = d3.group(dataPerdidas, d => d.dist);
    const { width, height, margin } = CONFIG_LOSS.svg;

    // Escala X compartida: Desde el máximo negativo (-5.5) hasta 0
    const minDif = d3.min(dataPerdidas, d => d.dif);
    const xScale = d3.scaleLinear()
        .domain([Math.floor(minDif) - 0.5, 0])
        .range([margin.left, width - margin.right]);

    for (const [dist, distData] of dataByDist) {
        // Ordenar de mayor pérdida a menor
        distData.sort((a, b) => a.dif - b.dif);

        const panel = container.append("div").attr("class", "panel");
        panel.append("div").attr("class", "panel-title").text(dist);

        const svg = panel.append("svg")
            .attr("viewBox", `0 0 ${width} ${height}`);

        const yScale = d3.scaleBand()
            .domain(distData.map(d => d.partido))
            .range([margin.top, height - margin.bottom])
            .padding(0.35); // Grosor de las barras

        // Dibujar líneas de cuadrícula (eje X)
        const xTicks = xScale.ticks(5);
        svg.selectAll(".grid-line")
            .data(xTicks)
            .enter().append("line")
            .attr("class", "grid-line")
            .attr("x1", d => xScale(d))
            .attr("x2", d => xScale(d))
            .attr("y1", margin.top)
            .attr("y2", height - margin.bottom);

        // Textos del Eje X (Arriba)
        svg.selectAll(".tick-label")
            .data(xTicks)
            .enter().append("text")
            .attr("x", d => xScale(d))
            .attr("y", margin.top - 10)
            .attr("text-anchor", "middle")
            .attr("font-size", "11px")
            .attr("fill", "#888")
            .text(d => d === 0 ? "0" : `${d} pp`);

        // Dibujar el Eje Cero (Línea sólida)
        svg.append("line")
            .attr("class", "zero-axis")
            .attr("x1", xScale(0))
            .attr("x2", xScale(0))
            .attr("y1", margin.top - 20)
            .attr("y2", height - margin.bottom);

        // Dibujar las barras horizontales
        const bars = svg.selectAll(".bar-group")
            .data(distData)
            .enter().append("g");

        bars.append("rect")
            .attr("class", "bar-negative")
            .attr("y", d => yScale(d.partido))
            .attr("height", yScale.bandwidth())
            // La barra empieza en el valor negativo y va hasta el 0
            .attr("x", d => xScale(d.dif))
            .attr("width", d => xScale(0) - xScale(d.dif))
            .attr("fill", d => CONFIG_LOSS.colores[d.partido] || CONFIG_LOSS.colores.defecto);

        // Texto numérico de la pérdida (A la izquierda de la barra)
        bars.append("text")
            .attr("class", "loss-label")
            .attr("x", d => xScale(d.dif) - 8)
            .attr("y", d => yScale(d.partido) + yScale.bandwidth() / 2)
            .attr("text-anchor", "end")
            .attr("fill", d => CONFIG_LOSS.colores[d.partido] || CONFIG_LOSS.colores.defecto)
            .text(d => `${d.dif} pp`);

        // ==========================================
        // ELEMENTOS A LA DERECHA DEL EJE CERO
        // ==========================================
        
        // 1. Foto / Logo del partido
        bars.each(function(d) {
            const g = d3.select(this);
            if (imageAssets[d.partido] && imageAssets[d.partido].logo) {
                const imgSize = 24;
                g.append("image")
                    .attr("href", imageAssets[d.partido].logo)
                    .attr("class", "svg-icon")
                    .attr("width", imgSize)
                    .attr("height", imgSize)
                    // Colocado justo a la derecha de la línea cero
                    .attr("x", xScale(0) + 12)
                    .attr("y", yScale(d.partido) + (yScale.bandwidth() / 2) - (imgSize / 2));
            }
        });

        // 2. Nombre del Partido
        bars.append("text")
            .attr("class", "party-name-label")
            .attr("x", xScale(0) + 45) // Espacio para el logo
            .attr("y", d => yScale(d.partido) + yScale.bandwidth() / 2 + 1)
            .attr("text-anchor", "start")
            .text(d => d.partido);
    }
}

// Ejecutar al cargar la página
renderLossChart();



// Inicialización
renderChart("Otros");
updateLegend("Otros");

