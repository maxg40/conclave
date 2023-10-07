const botonLogo = document.querySelector('.contenedorLogo');
const contenedorMenu = document.body;

botonLogo.onclick =() =>{
    contenedorMenu.innerHTML = `<div class="contenedorGrid">
    <div class="header">
    <button class="menuDesplegable"><img id="contacto" src="./img/contacto.png" alt="contacto"><span class="descripcionContacto"></span></button>

    <button class="menuDesplegable2 "><img id="show" src="./img/show.png" alt="shows/presentaciones"><span class="descripcionShow"></span></button>
    </div>
    <div class="main">
    <button class="contenedorLogo "><img class="logo" src="./img/conclave letra.png" alt="logo de banda conclave"> <span class="descripcionBanda"></span></button>
    </div>
    <div class="footer">
    <button class="menuDesplegable3"><img src="./img/integrantes.png" alt="integrantes"><span class="descripcionIntegrantes"></span></button>
    <button class="menuDesplegable4 "><img src="./img/temas.png" alt="temas"><span class="descripcionTemas"></span></button> 
    </div>
    </div>`;

    
    const hoverContacto = document.querySelector('.menuDesplegable');
    hoverContacto.onmouseover = () => {
        const panelContacto = document.querySelector('.descripcionContacto')
        panelContacto.innerHTML = `<p class="textoContacto"> En este sector podras encontrar redes sociales, y medios para pedir presupuestos</p>`;
        
        hoverContacto.onmousemove = (e) => {
            const descripcionContacto = document.querySelector('.textoContacto')
            const x = e.clientX;
            const y = e.clientY;
            descripcionContacto.style.left = x + 'px';
            descripcionContacto.style.top = y + 'px';
        };
    };
    hoverContacto.onmouseout = () => {
        const panelContacto = document.querySelector ('.descripcionContacto')
        panelContacto.innerHTML ='';
    }

    const hoverShow = document.querySelector('.menuDesplegable2');
    
    hoverShow.onmouseover = () => {
        const panelShow = document.querySelector('.descripcionShow')
    
        panelShow.innerHTML = `<p class="textoShow"> En este sector podras encontrar todas las fechas proximas y material de fechas anteriores</p>`
        
        hoverShow.onmousemove = (e) => {
            const descripcionShow = document.querySelector('.textoShow')
            const x = e.clientX;
            const y = e.clientY;
            descripcionShow.style.left = x + 'px';
            descripcionShow.style.top = y + 'px';
        };
    };
    hoverShow.onmouseout = () => {
        const panelShow = document.querySelector ('.descripcionShow')
        panelShow.innerHTML ='';
    }
    const hoverBanda = document.querySelector('.logo');
    hoverBanda.onmouseover = () => {
        const panelLogo = document.querySelector('.descripcionBanda')
        panelLogo.innerHTML = `<p class="textoLogo"> Les dejamos un dato del nombre de la banda. Cónclave es una reunión secreta y exclusiva donde un grupo de personas se reúne para tomar decisiones importantes, como elegir a una fecha o discutir asuntos confidenciales (temas propios jaja).</p>`;
        
        hoverBanda.onmousemove = (e) => {
            const descripcionLogo = document.querySelector('.textoLogo')
            const x = e.clientX;
            const y = e.clientY;
            descripcionLogo.style.left = x + 'px';
            descripcionLogo.style.top = y + 'px';
        };
    };
    hoverBanda.onmouseout = () => {
        const panelLogo = document.querySelector ('.descripcionBanda')
        panelLogo.innerHTML ='';
    }
    
    const hoverIntegrantes = document.querySelector('.menuDesplegable3');
    
    hoverIntegrantes.onmouseover = () => {
        const panelIntegrantes = document.querySelector('.descripcionIntegrantes')
    
        panelIntegrantes.innerHTML = `<p class="textoIntegrantes"> En este sector podras conocer un poco a los integrantes de la banda y que rol desempeñan</p>`
        
        hoverIntegrantes.onmousemove = (e) => {
            const descripcionIntegrantes = document.querySelector('.textoIntegrantes')
            const x = e.clientX;
            const y = e.clientY;
            descripcionIntegrantes.style.left = x + 'px';
            descripcionIntegrantes.style.top = y + 'px';
        };
    };
    hoverIntegrantes.onmouseout = () => {
        const panelIntegrantes = document.querySelector ('.descripcionIntegrantes')
        panelIntegrantes.innerHTML ='';
    }

    const hoverTemas = document.querySelector('.menuDesplegable4');
    
    hoverTemas.onmouseover = () => {
        const panelTemas = document.querySelector('.descripcionTemas')
    
        panelTemas.innerHTML = `<p class="textoTemas"> En este sector encontraras grabaciones de covers y demos de temas propios</p>`
        
        hoverTemas.onmousemove = (e) => {
            const descripcionTemas = document.querySelector('.textoTemas')
            const x = e.clientX;
            const y = e.clientY;
            descripcionTemas.style.left = x + 'px';
            descripcionTemas.style.top = y + 'px';
        };
    };
    hoverTemas.onmouseout = () => {
        const panelTemas = document.querySelector ('.descripcionTemas')
        panelTemas.innerHTML ='';
    }
};
