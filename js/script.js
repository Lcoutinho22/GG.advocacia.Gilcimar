// SCROLL REVEAL
        window.addEventListener('load', () => {
            const reveals = document.querySelectorAll('.reveal');
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 30;
                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();
        });

        // THEME TOGGLE
        function toggleTheme() {
            document.body.classList.toggle('light-theme');
            const icon = document.querySelector('.theme-toggle i');
            if(document.body.classList.contains('light-theme')){
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            } else {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }

        // TOGGLE FAQ
        function toggleFaq(el) {
            el.classList.toggle('active');
            const icon = el.querySelector('i');
            if(el.classList.contains('active')) {
                icon.style.transform = "rotate(180deg)";
            } else {
                icon.style.transform = "rotate(0deg)";
            }
        }

        function falarSobre(assunto) {
            const text = `Olá! Gostaria de mais informações sobre *${assunto}*.`;
            window.open(`https://wa.me/5535988035777?text=${text}`, '_blank');
        }

        function enviarFormulario() {
            const nome = document.getElementById('clientName').value;
            const fone = document.getElementById('clientPhone').value;
            const area = document.getElementById('areaSelect').value;
            const caso = document.getElementById('caseInput').value || "Prefiro explicar em áudio.";
            
            if(!nome || !fone) { 
                alert("Por favor, preencha seu Nome e Telefone."); 
                return; 
            }
            
            const text = `*Olá, Dr. Gilcimar Gomes. Gostaria de uma análise preliminar.*%0A%0A` +
                         ` *Nome:* ${nome}%0A` +
                         ` *Contato:* ${fone}%0A` +
                         ` *Área:* ${area}%0A` +
                         ` *Resumo:* ${caso}%0A%0A` +
                        `_Aguardo retorno._`;
            
            window.open(`https://wa.me/5535988035777?text=${text}`, '_blank');
        }