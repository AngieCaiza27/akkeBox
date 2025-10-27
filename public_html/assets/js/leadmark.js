/*!
=========================================================
* LeadMark Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// protfolio filters
$(window).on("load", function () {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".web",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function () {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})

// Artículos Modal Functionality
$(document).ready(function () {
    // Datos de los artículos
    const articulosData = {
        clickup: {
            title: 'ClickUp: Gestión de Proyectos',
            content: `
                <div class="text-center mb-4">
                    <h4>ClickUp - La Plataforma Definitiva para Gestión de Proyectos</h4>
                </div>
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                    <iframe class="embed-responsive-item" 
                            src="https://www.youtube.com/embed/kiKLa8SOEkk?si=H9MjfJl4MyCtcHu-"
                            title="Video de ClickUp" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                </div>
                <div class="article-description">
                    <h5>¿Qué es ClickUp?</h5>
                    <p>ClickUp es una plataforma todo-en-uno de productividad que reemplaza todas las demás aplicaciones de trabajo. Es la única herramienta lo suficientemente potente para centralizar todo tu trabajo en todas las aplicaciones en un solo lugar.</p>
                    
                    <h5>Características principales:</h5>
                    <ul>
                        <li><strong>Gestión de tareas:</strong> Crea, asigna y rastrea tareas con facilidad</li>
                        <li><strong>Colaboración en tiempo real:</strong> Trabaja con tu equipo sin interrupciones</li>
                        <li><strong>Vistas múltiples:</strong> Lista, tablero, Gantt, calendario y más</li>
                        <li><strong>Automatización:</strong> Automatiza flujos de trabajo repetitivos</li>
                        <li><strong>Integraciones:</strong> Conecta con más de 1000 aplicaciones</li>
                        <li><strong>Reportes y análisis:</strong> Obtén insights sobre el rendimiento del equipo</li>
                    </ul>
                    
                    <h5>¿Por qué elegir ClickUp?</h5>
                    <p>ClickUp te permite ahorrar tiempo, reducir costos y mejorar la productividad de tu equipo al tener todas tus herramientas de trabajo en un solo lugar. Desde pequeños equipos hasta grandes empresas, ClickUp se adapta a cualquier necesidad.</p>
                </div>
            `
        },
        ia: {
            title: 'Tendencias en Inteligencia Artificial',
            content: `
                <div class="text-center mb-4">
                    <h4>El Futuro de la Inteligencia Artificial</h4>
                </div>
                <div class="article-description">
                    <p>La inteligencia artificial está transformando la forma en que trabajamos, vivimos e interactuamos con la tecnología. Desde asistentes virtuales hasta sistemas de recomendación, la IA se ha convertido en una parte integral de nuestra vida diaria.</p>
                    
                    <h5>Tendencias principales para 2025:</h5>
                    <ul>
                        <li><strong>IA Generativa:</strong> Creación de contenido, código y diseños automatizados</li>
                        <li><strong>Machine Learning Explicable:</strong> Algoritmos más transparentes y comprensibles</li>
                        <li><strong>IA Edge:</strong> Procesamiento local en dispositivos móviles y IoT</li>
                        <li><strong>Automatización Inteligente:</strong> Procesos empresariales más eficientes</li>
                        <li><strong>IA Ética:</strong> Desarrollo responsable y sesgos reducidos</li>
                    </ul>
                    
                    <h5>Impacto en los negocios:</h5>
                    <p>Las empresas que adoptan IA están viendo mejoras significativas en eficiencia, reducción de costos y nuevas oportunidades de innovación. Es crucial mantenerse actualizado con estas tendencias para mantener la competitividad en el mercado.</p>
                </div>
            `
        },
        ciberseguridad: {
            title: 'Ciberseguridad para PYMES',
            content: `
                <div class="text-center mb-4">
                    <h4>Protege tu Empresa: Guía de Ciberseguridad para PYMES</h4>
                </div>
                <div class="article-description">
                    <p>Las pequeñas y medianas empresas son objetivos frecuentes de ciberataques debido a que muchas veces no cuentan con las medidas de seguridad adecuadas. Implementar buenas prácticas de ciberseguridad es esencial para proteger tu negocio.</p>
                    
                    <h5>Amenazas más comunes:</h5>
                    <ul>
                        <li><strong>Phishing:</strong> Correos fraudulentos para robar credenciales</li>
                        <li><strong>Ransomware:</strong> Software malicioso que cifra archivos</li>
                        <li><strong>Malware:</strong> Virus y programas maliciosos</li>
                        <li><strong>Ataques de fuerza bruta:</strong> Intentos de acceso no autorizado</li>
                        <li><strong>Ingeniería social:</strong> Manipulación psicológica para obtener información</li>
                    </ul>
                    
                    <h5>Medidas de protección esenciales:</h5>
                    <ul>
                        <li>Implementar autenticación de dos factores (2FA)</li>
                        <li>Mantener software y sistemas actualizados</li>
                        <li>Realizar copias de seguridad regulares</li>
                        <li>Capacitar al personal en seguridad</li>
                        <li>Usar antivirus y firewalls actualizados</li>
                        <li>Controlar el acceso a información sensible</li>
                    </ul>
                    
                    <p>La ciberseguridad no es un gasto, es una inversión que protege el futuro de tu empresa.</p>
                </div>
            `
        },
        case: {
            title: 'Herramientas CASE',
            content: `
                <div class="text-center mb-4">
                    <h4>Herramientas CASE: Taxonomía e Integración en el Desarrollo de Software</h4>
                </div>
                <div class="article-description">
                    <h5>¿Qué son las Herramientas CASE?</h5>
                    <p>Las herramientas CASE (Computer-Aided Software Engineering) son instrumentos diseñados para apoyar diversas actividades dentro del proceso de desarrollo de software. Estas herramientas mejoran la productividad, calidad y mantenibilidad del software.</p>
                    
                    <h5>Puntos Clave:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <h6><i class="ti-layout text-primary"></i> Clasificación de Herramientas</h6>
                            <p>Se pueden clasificar según su función, rol, pasos del proceso donde se usan, o la arquitectura del entorno que las soporta.</p>
                        </div>
                        <div class="col-md-6">
                            <h6><i class="ti-link text-primary"></i> Integración</h6>
                            <p>La verdadera potencia se alcanza a través de la integración, permitiendo que distintas herramientas se comuniquen y compartan información.</p>
                        </div>
                    </div>
                    
                    <h5>Clasificación por Función:</h5>
                    <ul>
                        <li><strong>Diseño:</strong> Herramientas como Enterprise Architect o Visual Paradigm para modelar diagramas UML y diseñar arquitectura del sistema</li>
                        <li><strong>Programación:</strong> Generadores de código como Acceleo o herramientas integradas en IDEs que convierten modelos en código</li>
                        <li><strong>Pruebas:</strong> Herramientas de testing automatizado como Selenium o frameworks como JUnit para validación</li>
                        <li><strong>Análisis:</strong> Herramientas de análisis estático y dinámico para verificar calidad y cobertura de código</li>
                        <li><strong>Reingeniería:</strong> Herramientas de reingeniería inversa para modernizar sistemas heredados</li>
                    </ul>
                    
                    <h5>Casos de Uso Prácticos:</h5>
                    
                    <h6>Desarrollo de Sistema Bancario:</h6>
                    <p>Un equipo desarrolla un sistema de gestión de cuentas utilizando herramientas de seguimiento de requisitos para categorizar especificaciones y herramientas de análisis y diseño para crear representaciones de datos y funcionalidad.</p>
                    
                    <h6>Modernización de Software Heredado:</h6>
                    <p>Para modernizar un sistema antiguo, se emplean herramientas de reingeniería inversa para generar modelos gráficos desde código fuente existente, seguido de herramientas de reestructuración para crear versiones más mantenibles.</p>
                    
                    <h6>Control de Calidad:</h6>
                    <p>Los equipos de QA utilizan herramientas de análisis estático para identificar fallos y herramientas de análisis dinámico para verificar cobertura de código durante la ejecución.</p>
                    
                    <h5>Beneficios de la Integración CASE:</h5>
                    <ul>
                        <li>Comunicación mejorada entre herramientas</li>
                        <li>Intercambio automático de información</li>
                        <li>Reducción de errores por transferencia manual de datos</li>
                        <li>Mayor eficiencia en el proceso de desarrollo</li>
                        <li>Trazabilidad completa del proyecto</li>
                    </ul>
                    
                    <p class="text-muted"><em>Las herramientas CASE integradas representan el futuro del desarrollo de software eficiente y de alta calidad.</em></p>
                </div>
            `
        },
        devops: {
            title: 'DevOps: Cultura y Automatización',
            content: `
                <div class="text-center mb-4">
                    <h4>DevOps: Cultura, Automatización y Entrega Continua</h4>
                </div>
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                    <iframe class="embed-responsive-item"
                        src="https://www.youtube.com/embed/am9G4Vdc1gg?si=QwkMfRzJgjUyL5fE"
                        title="Video DevOps"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div class="article-description">
                    <h5>Introducción e historia</h5>
                    <p>El término DevOps fue acuñado en 2009 por Patrick Debois durante la primera conferencia DevOpsDays. Surgió como respuesta a la falta de colaboración entre desarrollo y operaciones bajo el modelo en cascada (Waterfall). El Manifiesto Ágil (2001) y la charla de Flickr (2009) inspiraron la integración continua entre ambos equipos. Empresas como Netflix, Amazon y Facebook fueron pioneras en su adopción.</p>
                    <h5>¿Qué es DevOps?</h5>
                    <p>Es una metodología y filosofía cultural que une Desarrollo (Dev) y Operaciones (Ops). Busca entregar software de forma rápida, segura y continua mediante automatización e integración. Promueve colaboración, comunicación y responsabilidad compartida durante todo el ciclo de vida del software.</p>
                    <h5>Principios fundamentales</h5>
                    <ul>
                        <li>Colaboración: equipos multidisciplinarios sin silos.</li>
                        <li>Automatización: en pruebas, construcción, despliegue e infraestructura.</li>
                        <li>Integración y entrega continua (CI/CD): código fusionado y desplegado frecuentemente.</li>
                        <li>Mejora continua: optimización constante basada en métricas.</li>
                        <li>Responsabilidad compartida: “Tú lo construyes, tú lo ejecutas”.</li>
                        <li>Enfoque en el cliente: retroalimentación rápida y ciclos cortos.</li>
                    </ul>
                    <h5>Metodologías relacionadas</h5>
                    <ul>
                        <li>Ágil: DevOps extiende sus principios hacia las operaciones.</li>
                        <li>Lean: busca eliminar desperdicios y mejorar el flujo.</li>
                        <li>Scrum y Kanban: frameworks ágiles para la planificación y visualización del trabajo.</li>
                        <li>IaC (Infrastructure as Code): define infraestructura con código versionado y automatizado.</li>
                    </ul>
                    <h5>Herramientas populares</h5>
                    <ul>
                        <li>Control de versiones: Git, GitHub, GitLab.</li>
                        <li>CI/CD: Jenkins, CircleCI, Travis CI.</li>
                        <li>Contenedorización: Docker, Kubernetes.</li>
                        <li>Automatización: Terraform, Ansible, Chef.</li>
                        <li>Monitoreo: Prometheus, Grafana.</li>
                    </ul>
                    <h5>Beneficios de adoptar DevOps</h5>
                    <ul>
                        <li>+30% en frecuencia de implementación.</li>
                        <li>+61% en calidad del producto.</li>
                        <li>96 veces más rápida recuperación de fallos.</li>
                        <li>22% de reducción en costos de TI.</li>
                        <li>30% más productividad en desarrollo.</li>
                        <li>Mayor colaboración, agilidad y escalabilidad.</li>
                    </ul>
                    <h5>Desafíos comunes</h5>
                    <ul>
                        <li>Complejidad técnica y falta de estandarización.</li>
                        <li>Escasez de profesionales DevOps experimentados.</li>
                        <li>Costos iniciales de implementación.</li>
                        <li>Resistencia cultural al cambio organizacional.</li>
                        <li>Curva de aprendizaje por nuevas herramientas.</li>
                    </ul>
                    <h5>Ciclo de vida DevOps</h5>
                    <ul>
                        <li>Planificación → objetivos y retroalimentación.</li>
                        <li>Desarrollo → código colaborativo (Git).</li>
                        <li>Construcción → compilación e integración (Jenkins).</li>
                        <li>Pruebas → validación automatizada.</li>
                        <li>Liberación → aprobación para producción.</li>
                        <li>Implementación → despliegue automatizado (Terraform).</li>
                        <li>Operación → mantenimiento y soporte.</li>
                        <li>Monitoreo → observabilidad y mejoras continuas.</li>
                    </ul>
                    <h5>Roles en un equipo DevOps</h5>
                    <ul>
                        <li>DevOps Engineer – integra herramientas y procesos.</li>
                        <li>SRE (Site Reliability Engineer) – garantiza fiabilidad y monitoreo.</li>
                        <li>Automation Architect – elimina tareas manuales.</li>
                        <li>Release Manager – coordina entregas.</li>
                        <li>Cloud Engineer – optimiza entornos en la nube.</li>
                        <li>Security Engineer (DevSecOps) – integra seguridad.</li>
                        <li>QA Specialist – asegura la calidad.</li>
                        <li>DevOps Evangelist – promueve la cultura DevOps.</li>
                    </ul>
                    <h5>Métricas esenciales (DORA)</h5>
                    <ul>
                        <li>Frecuencia de implementación.</li>
                        <li>Tiempo de entrega de cambios.</li>
                        <li>Tasa de fallas por cambio.</li>
                        <li>Tiempo medio de recuperación (MTTR).</li>
                    </ul>
                </div>
            `
        }
    };

    // Manejar clicks en botones "Ver más"
    $('.btn-ver-mas').on('click', function (e) {
        e.preventDefault();
        const articleType = $(this).data('article');
        const articleData = articulosData[articleType];

        if (articleData) {
            $('#modalArticuloLabel').text(articleData.title);
            $('#modalArticuloBody').html(articleData.content);
            $('#modalArticulo').modal('show');
        }
    });
});