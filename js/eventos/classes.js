class Evento {
    constructor({titulo, descricao, data, local, hora, preco, imagem}) {
        this.titulo = titulo
        this.descricao = descricao
        this.data = data
        this.hora = hora
        this.local = local
        this.preco = preco
        this.imagem = imagem
    }

    gerarEventCard() {
        const template = document.getElementById("template_event-card")
        const clone = template.content.cloneNode(true)

        clone.querySelector('h2').textContent = this.titulo
        clone.querySelector('p').textContent = this.descricao

        const lista = clone.querySelectorAll('ul li')
        lista[0].innerHTML = `<i class="fas fa-calendar-alt"></i> ${this.data}`
        lista[1].innerHTML = `<i class="fas fa-clock"></i> ${this.hora}`
        lista[2].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${this.local}`
        lista[3].innerHTML = `<i class="fas fa-ticket-alt"></i> ${this.preco}`

        const img = clone.querySelector('.event-image img')
        img.src = this.imagem
        img.alt = this.titulo

        return clone
    }
}

class Calendario {
    constructor() {
        this.eventosAnuais = {
            "Janeiro": [], 
            "Fevereiro": [], 
            "Março": [], 
            "Abril": [], 
            "Maio": [], 
            "Junho": [], 
            "Julho": [], 
            "Agosto": [], 
            "Setembro": [], 
            "Outubro": [], 
            "Novembro": [], 
            "Dezembro": []
        }

        this.eventosSemanais = []
    }

    adicionarEvento(eventoObj, tipoEvento, chave_mes=null) {
        switch (tipoEvento) {
            case "anual":
                if (chave_mes) {
                    this.eventosAnuais[chave_mes].push(eventoObj)
                }
                else {
                    console.log("Mês do evento anual inválido")
                }
                break
            
            case "semanal":
                this.eventosSemanais.push(eventoObj)
                break
        }
    }

    getMeses() {
        return Object.keys(this.eventosAnuais)
    }

    getEventoAnual(chave) {
        return this.eventosAnuais[chave]
    }

    getEventosSemanais() {
        return this.eventosSemanais
    }
}

export {Evento, Calendario}