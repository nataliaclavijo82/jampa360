import * as Classes from "./classes.js"

const calendario = new Classes.Calendario()

calendario.adicionarEvento(new Classes.Evento({
    titulo: "Pôr do Sol no Jacaré",
    descricao: "Música e Magia às Margens do Rio",
    data: "Todos os dias",
    local: "Praia do Jacaré, Cabedelo – PB",
    hora: "Por volta das 17h",
    preco: "Evento gratuito",
    imagem: "../doc-imagens/eventos-jacare.jpeg"
}), "semanal")

calendario.adicionarEvento(new Classes.Evento({
    titulo: "Sabadinho Bom",
    descricao: "Sábado é dia de música",
    data: "Todos os sábados",
    local: "Praça Rio Branco, Centro Histórico",
    hora: "12h às 15h",
    preco: "Evento gratuito",
    imagem: "../doc-imagens/eventos-sabadinho.jpg"
}), "semanal")

calendario.adicionarEvento(new Classes.Evento({
    titulo: "Fest Verão Paraíba",
    descricao: "O Maior Festival de Verão do Nordeste",
    data: "Janeiro (datas específicas variam a cada ano)",
    local: "Arena Fest Verão, Praia de Ponta de Campina, Cabedelo – PB",
    hora: "Abertura dos portões às 16h",
    preco: "Ingressos disponíveis online",
    imagem: "../doc-imagens/eventos-festveraopb.webp"
}), "anual", "Janeiro")

calendario.adicionarEvento(new Classes.Evento({
    titulo: "Festival Forró Verão",
    descricao: "Verão com Forró na Orla",
    data: "Janeiro (semanas consecutivas durante o mês)",
    local: "Busto de Tamandaré, Orla da praia de Tambaú, João Pessoa",
    hora: "A partir das 20h",
    preco: "Evento gratuito e aberto ao público",
    imagem: "../doc-imagens/eventos-festivalforroverao.jpeg"
}), "anual", "Janeiro")

calendario.adicionarEvento(new Classes.Evento({
    titulo: "JPA Marathon",
    descricao: "Maratona de João Pessoa",
    data: "20 de abril de 2025",
    local: "Busto de Tamandaré, Orla da praia de Cabo Branco, João Pessoa",
    hora: "Concentração às 04h | Largadas: 04h30 e 05h20",
    preco: "Inscrições antecipadas online",
    imagem: "../doc-imagens/eventos-maratona.jpg"
}), "anual", "Abril")

calendario.adicionarEvento(new Classes.Evento({
    titulo: "Forró em João Pessoa",
    descricao: "O Som da Terra",
    data: "Junho e julho (período junino)",
    local: "Arraiais, feiras culturais e centros de convivência",
    hora: "Tarde e noite",
    preco: "Evento gratuito",
    imagem: "../doc-imagens/eventos-saojoao.jpg"
}), "anual", "Junho")

calendario.adicionarEvento(new Classes.Evento({
    titulo: "Forró em João Pessoa",
    descricao: "O Som da Terra",
    data: "Junho e julho (período junino)",
    local: "Arraiais, feiras culturais e centros de convivência",
    hora: "Tarde e noite",
    preco: "Evento gratuito",
    imagem: "../doc-imagens/eventos-saojoao.jpg"
}), "anual", "Julho")

calendario.adicionarEvento(new Classes.Evento({
    titulo: "Central Rock Festival",
    descricao: "Rock na Paraíba",
    data: "21 de setembro (evento anual)",
    local: "Localidades variáveis",
    hora: "A partir das 18h",
    preco: "Evento gratuito ou ingresso solidário",
    imagem: "../doc-imagens/eventos-centralrockfest.jpeg"
}), "anual", "Setembro")

calendario.adicionarEvento(new Classes.Evento({
    titulo: "Dia Estadual da Cultura Afro-paraibana",
    descricao: "",
    data: "23 de novembro",
    local: "Centros culturais e escolas públicas",
    hora: "Dia inteiro",
    preco: "Evento gratuito",
    imagem: "../doc-imagens/eventos-cultura-afro.jpg"
}), "anual", "Novembro")

calendario.adicionarEvento(new Classes.Evento({
    titulo: "Shows de Samba",
    descricao: "Ritmo e Resistência",
    data: "Vários momentos do ano, com destaque em novembro e dezembro",
    local: "Praças, centros culturais e bares com samba",
    hora: "A partir das 16h",
    preco: "Evento gratuito",
    imagem: "../doc-imagens/eventos-samba.jpg"
}), "anual", "Novembro")

calendario.adicionarEvento(new Classes.Evento({
    titulo: "Concertos de Natal",
    descricao: "Música e Tradição",
    data: "Dezembro",
    local: "Diversos locais",
    hora: "A partir das 19h",
    preco: "Evento gratuito",
    imagem: "../doc-imagens/eventos-samba.jpg"
}), "anual", "Dezembro")

calendario.adicionarEvento(new Classes.Evento({
    titulo: "Shows de Samba",
    descricao: "Ritmo e Resistência",
    data: "Vários momentos do ano, com destaque em novembro e dezembro",
    local: "Praças, centros culturais e bares com samba",
    hora: "A partir das 16h",
    preco: "Evento gratuito",
    imagem: "../doc-imagens/eventos-natal.jpg"
}), "anual", "Dezembro")

export {calendario}