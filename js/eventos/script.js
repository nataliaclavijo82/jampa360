import { calendario } from "./database.js"
import * as Elementos from "./elementos.js"
import { atualizarSeletor, gerarEventosAnuais } from "./utilidades.js"

var indexMes = 0

for (let evento of calendario.eventosSemanais) {
    Elementos.semanario.appendChild(evento.gerarEventCard())
}

atualizarSeletor(indexMes)
gerarEventosAnuais(indexMes)

Elementos.seletor_avancar.addEventListener("click", () => {
    if (indexMes == 11) {
        indexMes = 0
        atualizarSeletor(indexMes)
        gerarEventosAnuais(indexMes)
    }
    else {
        indexMes++
        atualizarSeletor(indexMes)
        gerarEventosAnuais(indexMes)
    }
})

Elementos.seletor_voltar.addEventListener("click", () => {
    if (indexMes == 0) {
        indexMes = 11
        atualizarSeletor(indexMes)
        gerarEventosAnuais(indexMes)
    }
    else {
        indexMes--
        atualizarSeletor(indexMes)
        gerarEventosAnuais(indexMes)
    }
})