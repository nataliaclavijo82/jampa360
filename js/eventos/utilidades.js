import { calendario } from "./database.js"
import * as Elementos from "./elementos.js"

export function atualizarSeletor(indexMes) {
    var mes_selecionado = calendario.getMeses()[indexMes]
    Elementos.seletor.innerHTML = mes_selecionado
}

export function gerarEventosAnuais(indexMes) {
    var mes_selecionado = calendario.getMeses()[indexMes]
    var eventos_mes = calendario.getEventoAnual(mes_selecionado)

    Elementos.container_eventos.innerHTML = ""

    if (eventos_mes.length === 0) {
        const novo_elemento = document.createElement("h2")
        novo_elemento.innerHTML = "Não há eventos neste mês"
        Elementos.container_eventos.appendChild(novo_elemento)
    }
    else {
        for (let evento of eventos_mes) {
            Elementos.container_eventos.appendChild(evento.gerarEventCard())
        }
    }
}