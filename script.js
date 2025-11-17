// Dados das perguntas
const questions = [
    {
        id: 1,
        title: "1. O Churrasco da Firma",
        scenario: "É sua vez de organizar o churrasco de fim de ano. Você:",
        options: [
            {
                text: "Cria a planilha de custos, faz 3 cotações de carne, exige o CNPJ do açougue e prepara um 'Termo de Referência' para o tipo de pão de alho.",
                letter: "a"
            },
            {
                text: "Vai pessoalmente de manhã comprar o carvão, checa se a churrasqueira está limpa, confere o botijão de gás e fica responsável pela grelha.",
                letter: "b"
            },
            {
                text: "Garante que terá opção vegetariana/vegana, verifica se o local tem acessibilidade e se preocupa se todos foram convidados e podem pagar.",
                letter: "c"
            },
            {
                text: "Cria o grupo no WhatsApp, faz a figurinha oficial do evento, seleciona a playlist perfeita e fica circulando para garantir que todos estejam se divertindo.",
                letter: "d"
            }
        ]
    },
    
             {
    id: 2,
    title: "2. O Apocalipse de Fim de Mês na Contabilidade",
    scenario: "É dia 25, fim do mês. A mesa do chefe está empilhada de processos para pagar e o telefone não para de tocar. Ele grita: 'SOCORRO! A fila de empenho e liquidação está gigante e o pessoal do Bolsa Aluguel está ligando!' Qual é a sua reação imediata?",
    options: [
        {
            text: "'Calma! Deixa comigo. Eu pego essa pilha e vou conferir um por um. Se tiver um contrato com a vírgula errada ou um empenho sem a reserva de ata correta, eu vou achar. Nada passa por mim sem estar 100% legal!'",
            letter: "a"
        },
        {
            text: "'Me dá essa pilha! Senta aí e cronometra. Eu vou liquidar tudo isso em duas horas. Pode vir empenho, pode vir contrato, eu sou a 'linha de produção'. Meu negócio é fazer a fila andar e limpar essa mesa!'",
            letter: "b"
        },
        {
            text: "'Pelo amor de Deus, me dá só os processos do Bolsa Aluguel e daquela ONG. É inadmissível eles não receberem em dia por causa da nossa bagunça. O resto pode esperar, mas o social é prioridade!'",
            letter: "c"
        },
        {
            text: "'Chefe, o problema não é a pilha, é o telefone. Deixa eu atender. Eu ligo pro secretário de Obras e resolvo aquele contrato 'enroscado', acalmo o fornecedor da Saúde e desenrolo essa confusão. Isso não é trabalho, é diplomacia.'",
            letter: "d"
        }
    ]
}, 
    {
        id: 3,
        title: "3. Crise no Condomínio",
        scenario: "O elevador principal quebra na sexta-feira à noite. Você:",
        options: [
            {
                text: "Imediatamente pede ao síndico a ata da última assembleia, o contrato de manutenção e exige a abertura de 3 cotações emergenciais para o conserto.",
                letter: "a"
            },
            {
                text: "Desce na casa de máquinas, identifica que a peça Y queimou, liga para um conhecido que mexe com isso e tenta resolver antes da meia-noite.",
                letter: "b"
            },
            {
                text: "Organiza um mutirão de ajuda para a Dona Zilda do 8º andar e para a mãe com carrinho de bebê do 5º, garantindo que eles tenham ajuda para subir.",
                letter: "c"
            },
            {
                text: "Cria um 'Comunicado Oficial' no grupo, acalma os vizinhos revoltados e marca uma reunião com café no salão de festas para 'alinhar expectativas'.",
                letter: "d"
            }
        ]
    },
    {
        id: 4,
        title: "4. Planejando as Férias do Grupo",
        scenario: "Vocês decidiram viajar juntos. Qual seu papel?",
        options: [
            {
                text: "O Tesoureiro. Envia a planilha detalhada de custos (passagem, hotel, comida) e o cronograma dia a dia, com prazo para pagamento do 'sinal'.",
                letter: "a"
            },
            {
                text: "O Logístico. É quem aluga o carro, traça a rota no mapa, verifica as condições da estrada e se encarrega da mala de ferramentas (e do kit de primeiros socorros).",
                letter: "b"
            },
            {
                text: "O 'Cuidador'. É quem pesquisa restaurantes que agradam a todos, atividades para as crianças e garante que o ritmo da viagem seja bom para os mais velhos.",
                letter: "c"
            },
            {
                text: "O Relações Públicas. É quem cria o grupo 'Férias 2026!', faz a reserva no AirBnb, e fica 'hypando' a viagem por 6 meses com memes e fotos.",
                letter: "d"
            }
        ]
    },
    
    {
    id: 5,
    title: "5. Seu Papel em The Office",
    scenario: "Se você trabalhasse na Dunder Mifflin, você seria:",
    options: [
        {
            text: "A <a href='https://pt.wikipedia.org/wiki/Angela_Martin' target='_blank'>Angela Martin</a>. Focada nos números, nas regras do 'Comitê de Festas' e em garantir que todos sigam os protocolos (mesmo que você não siga).",
            letter: "a"
        },
        {
            text: "O <a href='https://pt.wikipedia.org/wiki/Dwight_Schrute' target='_blank'>Dwight Schrute</a>. Focado na segurança do prédio, na eficiência dos processos e em 'fazer o trabalho duro' (mesmo que seja plantar beterraba).",
            letter: "b"
        },
        {
            text: "A <a href='https://pt.wikipedia.org/wiki/Pam_Beesly' target='_blank'>Pam Beesly</a>. A pessoa que ouve os problemas de todos, tenta ajudar o Michael a ser uma pessoa melhor e cuida do bem-estar da recepção.",
            letter: "c"
        },
        {
            text: "O <a href='https://pt.wikipedia.org/wiki/Jim_Halpert' target='_blank'>Jim Halpert</a>. O cara que mantém o moral da equipe (com pegadinhas), articula as vendas e sabe conversar com todo mundo para fazer a coisa andar.",
            letter: "d"
        }
    ]
},            
                
    {
        id: 6,
        title: "6. Trabalho em Grupo da Faculdade",
        scenario: "Na divisão de tarefas, você:",
        options: [
            {
                text: "Lê as normas ABNT, controla quem fez o quê, formata o documento final e calcula a nota que cada um merece com base no esforço.",
                letter: "a"
            },
            {
                text: "Vira a noite fazendo a pesquisa 'pesada', monta os protótipos, resolve a parte prática e garante que o trabalho 'funciona'.",
                letter: "b"
            },
            {
                text: "Tenta incluir o colega que ninguém gosta, se preocupa se o tema é socialmente relevante e oferece ajuda a quem está atrasado.",
                letter: "c"
            },
            {
                text: "Se oferece para apresentar. Você sabe que seu carisma vai vender a ideia, mesmo que o conteúdo tenha sido feito 30 minutos antes.",
                letter: "d"
            }
        ]
    },
    {
        id: 7,
        title: "7. Reação ao Trânsito Caótico",
        scenario: "Preso num engarrafamento gigante, você pensa:",
        options: [
            {
                text: "'Qual o impacto econômico disso? Quantas horas/homem estão sendo perdidas? Onde está o parecer jurídico sobre o rodízio?'",
                letter: "a"
            },
            {
                text: "'Claramente o problema é de engenharia. Essa faixa é muito estreita, o semáforo é dessincronizado e o asfalto é péssimo.'",
                letter: "b"
            },
            {
                text: "'E a ambulância que precisa passar? E os pais que não vão chegar a tempo de buscar os filhos na creche? Isso é um problema de saúde pública.'",
                letter: "c"
            },
            {
                text: "'A rádio não está informando direito, o app de trânsito está atrasado e ninguém da prefeitura apareceu para dar uma satisfação. Falta comunicação!'",
                letter: "d"
            }
        ]
    },
    {
        id: 8,
        title: "8. O que mais te irrita numa Fila de Banco?",
        scenario: "O que mais te irrita numa fila de banco?",
        options: [
            {
                text: "A burocracia. O gerente pedir 3 cópias autenticadas de um documento que o próprio banco emitiu e demorar 45 minutos para 'analisar o sistema'.",
                letter: "a"
            },
            {
                text: "A logística. A fila estar mal organizada, o totem de senha estar quebrado e só 2 dos 8 guichês estarem funcionando em horário de pico.",
                letter: "b"
            },
            {
                text: "A desumanidade. O caixa de atendimento preferencial estar fechado e uma senhora grávida estar em pé na fila normal há 30 minutos.",
                letter: "c"
            },
            {
                text: "A comunicação. A falta de música ambiente, o sistema de som da senha estar mudo e o gerente não dar uma satisfação sobre a demora.",
                letter: "d"
            }
        ]
    },
    {
        id: 9,
        title: "9. Seu Papel em Stranger Things",
        scenario: "Se você estivesse em Hawkins, você seria:",
        options: [
            {
                text: "O Dr. Brenner (ou o Dr. Owens). Focado nos protocolos, nos relatórios, no orçamento do laboratório e em manter tudo sob 'controle' científico.",
                letter: "a"
            },
            {
                text: "O Chefe Hopper. O cara da ação, que entra no Mundo Invertido, dá soco em monstro e fiscaliza a cidade (mesmo que seja só para tomar café e donuts).",
                letter: "b"
            },
            {
                text: "A Joyce Byers. Focada 100% no bem-estar das crianças e da família, disposta a fazer tudo pela saúde e segurança deles.",
                letter: "c"
            },
            {
                text: "O Murray Bauman. O cara que conecta as pontas, entende a conspiração, usa o rádio e sabe articular com todos (até em russo) para divulgar a verdade.",
                letter: "d"
            }
        ]
    },
    {
        id: 10,
        title: "10. Escolha um Superpoder",
        scenario: "Qual poder seria mais útil na prefeitura?",
        options: [
            {
                text: "Super-inteligência (Lex Luthor): Para analisar todas as variáveis, criar o plano perfeito, controlar o orçamento e decorar todas as leis.",
                letter: "a"
            },
            {
                text: "Super-força e resistência (Hulk/Luke Cage): Para consertar qualquer buraco, construir uma ponte em 10 minutos e aguentar a pressão.",
                letter: "b"
            },
            {
                text: "Telepatia e Empatia (Professor X): Para entender o que a população realmente precisa (sem formulários), cuidar da saúde mental de todos e promover a inclusão.",
                letter: "c"
            },
            {
                text: "Onipresença (Flash/Dr. Manhattan): Para estar em todas as reuniões, eventos, coletivas de imprensa e vistorias de obra ao mesmo tempo.",
                letter: "d"
            }
        ]
    }
];

// Estado do formulário
let currentQuestion = 0;
const answers = new Array(questions.length).fill(null);

// Elementos do DOM
const form = document.getElementById('assessmentForm');
const progressBar = document.getElementById('progress');
const progressPercent = document.getElementById('progressPercent');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const resultsContainer = document.getElementById('resultsContainer');
const loading = document.getElementById('loading');

// Inicializar
totalQuestionsEl.textContent = questions.length;

// Função para renderizar a pergunta atual
function renderQuestion() {
    const question = questions[currentQuestion];
    
    // Atualizar barra de progresso
    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressPercent.textContent = `${Math.round(progressPercentage)}%`;
    
    // Atualizar número da pergunta atual
    currentQuestionEl.textContent = currentQuestion + 1;
    
    // Construir HTML da pergunta
    let questionHTML = `
        <div class="question-container">
            <h2 class="question-title">${question.title}</h2>
            <div class="question-scenario">${question.scenario}</div>
            <div class="options-container">
    `;
    
    question.options.forEach((option, index) => {
        const isSelected = answers[currentQuestion] === index;
        questionHTML += `
            <div class="option ${isSelected ? 'selected' : ''}" data-index="${index}">
                <input type="radio" name="question-${question.id}" id="option-${question.id}-${index}" 
                       value="${index}" ${isSelected ? 'checked' : ''}>
                <div class="option-text">
                    <span class="option-letter">${option.letter.toUpperCase()}</span>
                    ${option.text}
                </div>
            </div>
        `;
    });
    
    questionHTML += `</div></div>`;
    
    form.innerHTML = questionHTML;
    
    // Adicionar event listeners às opções
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            const optionIndex = parseInt(this.getAttribute('data-index'));
            answers[currentQuestion] = optionIndex;
            
            // Remover seleção de todas as opções
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Adicionar seleção à opção clicada
            this.classList.add('selected');
            
            // Marcar o radio button
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            
            // Habilitar o botão próximo
            updateNavigationButtons();
        });
    });
    
    // Atualizar botões de navegação
    updateNavigationButtons();
}

// Função para atualizar os botões de navegação
function updateNavigationButtons() {
    // Botão anterior
    if (currentQuestion === 0) {
        prevBtn.classList.add('btn-hidden');
    } else {
        prevBtn.classList.remove('btn-hidden');
    }
    
    // Botão próximo
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = 'Ver Resultados';
        nextBtn.classList.add('btn-success');
    } else {
        nextBtn.textContent = 'Próxima';
        nextBtn.classList.remove('btn-success');
    }
    
    // Desabilitar próximo se nenhuma opção foi selecionada
    if (answers[currentQuestion] === null) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

// Função para determinar o perfil com base nas respostas
function determineProfile(answers) {
    // Contar quantas respostas A, B, C e D
    const counts = { a: 0, b: 0, c: 0, d: 0 };
    
    answers.forEach((answerIndex, questionIndex) => {
        const question = questions[questionIndex];
        const selectedOption = question.options[answerIndex];
        counts[selectedOption.letter]++;
    });
    
    // Calcular totais
    const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
    
    // Determinar combinações dominantes
    const maxCount = Math.max(...Object.values(counts));
    const dominantLetters = Object.keys(counts).filter(letter => counts[letter] === maxCount);
    
    // Verificar se é perfil puro (mais de 7 respostas em uma letra)
    if (maxCount >= 8) {
        const pureLetter = dominantLetters[0];
        return getPureProfile(pureLetter, counts);
    }
    
    // Verificar combinações específicas
    if (dominantLetters.includes('a') && dominantLetters.includes('b') && counts.a + counts.b >= 7) {
        return getProfile1(counts);
    } else if (dominantLetters.includes('a') && dominantLetters.includes('c') && counts.a + counts.c >= 7) {
        return getProfile2(counts);
    } else if (dominantLetters.includes('a') && dominantLetters.includes('d') && counts.a + counts.d >= 7) {
        return getProfile3(counts);
    } else if (dominantLetters.includes('b') && dominantLetters.includes('c') && counts.b + counts.c >= 7) {
        return getProfile4(counts);
    } else if (dominantLetters.includes('b') && dominantLetters.includes('d') && counts.b + counts.d >= 7) {
        return getProfile5(counts);
    } else if (dominantLetters.includes('c') && dominantLetters.includes('d') && counts.c + counts.d >= 7) {
        return getProfile6(counts);
    } else if (counts.a + counts.b + counts.d >= 8) {
        return getProfile7(counts);
    } else if (counts.a + counts.c + counts.d >= 8) {
        return getProfile8(counts);
    } else if (isBalanced(counts)) {
        return getProfile10(counts);
    } else {
        // Perfil misto genérico baseado na combinação mais forte
        return getGenericMixedProfile(counts, dominantLetters);
    }
}

// Funções auxiliares para cada perfil
function getPureProfile(letter, counts) {
    const profiles = {
        a: {
            type: "a",
            name: "9. O Sheldon Cooper da Contabilidade",
            subtitle: "O Advogado-Auditor Puro",
            analysis: "Você marcou (A) em quase tudo. Você leu todas as perguntas e achou três inconsistências legais nelas. Seu sonho é encontrar um erro de R$ 0,01 numa licitação de R$ 10 milhões. Planilhas são sua paixão e a Lei 14.133/2021 é seu 'Contrato de Colega de Quarto'.",
            diagnosis: "O Guardião da Planilha. Você é a razão pela qual o cafézinho da repartição precisa de três orçamentos. Bazinga.",
            recommendation: "Procuradoria Geral (Defendendo a legalidade de tudo)\nControladoria Geral (Auditando todo o resto)\nFinanças (Contando cada centavo)"
        },
        b: {
            type: "b", 
            name: "O Executor Pragmático Puro",
            subtitle: "O Mestre da Ação",
            analysis: "Você é pura ação! Não tem tempo para burocracia quando há coisas para serem feitas. Você vê um problema e já está com as ferramentas na mão.",
            diagnosis: "O Resolvedor de Problemas. Enquanto outros discutem, você já está consertando.",
            recommendation: "Serviços e Obras\nTransportes\nMeio Ambiente Prático"
        },
        c: {
            type: "c",
            name: "O Humanitário Puro", 
            subtitle: "O Coração da Gestão",
            analysis: "Sua prioridade absoluta são as pessoas. Você acredita que a gestão pública existe para servir e cuidar da população.",
            diagnosis: "O Defensor dos Direitos. Você transforma estatísticas em histórias reais.",
            recommendation: "Saúde\nAssistência Social\nDireitos Humanos"
        },
        d: {
            type: "d",
            name: "O Articulador Puro",
            subtitle: "O Conector de Pessoas", 
            analysis: "Você vive para conectar, comunicar e construir pontes. Sua habilidade é fazer as coisas andarem através das relações.",
            diagnosis: "O Tecelão de Redes. Você sabe que nenhuma grande obra acontece sem uma grande conversa.",
            recommendation: "Comunicação\nGoverno\nRelações Institucionais"
        }
    };
    return profiles[letter];
}

function getProfile1(counts) {
    return {
        type: "ab",
        name: "1. O Arquiteto da Matrix",
        subtitle: "O Capataz Perfeccionista",
        analysis: "Você acredita que uma obra (B) só pode começar se o contrato estiver impecável e o código-fonte (A) for perfeito. Você é a pessoa que mede o buraco (B) e depois verifica se a medida está de acordo com a NBR 9050 (A). Você ama a logística, mas odeia 'anomalias' no orçamento.",
        diagnosis: "O Mestre de Obras da Planilha. Você tem um capacete, mas ele fica guardado num arquivo com etiqueta, pois sua verdadeira ferramenta é o teclado.",
        recommendation: "Planejamento e Gestão (Perfeito para planejar obras com orçamento)\nServiços e Obras (Na área de gestão de contratos e medições)\nCompras e Licitações (Especificamente para licitar materiais de construção)"
    };
}

function getProfile2(counts) {
    return {
        type: "ac",
        name: "2. A Hermione da Repartição", 
        subtitle: "O Fiscal da Empatia",
        analysis: "Você quer salvar o mundo (C), mas está convencido de que a melhor forma de fazer isso é seguindo o manual à risca (A). Você organiza a fila do posto de saúde (C) usando regras de compliance (A) e fica genuinamente frustrado quando as pessoas não leem os regulamentos.",
        diagnosis: "A Burocrata do Bem. Você tem um coração de ouro, mas ele está protegido por 10 capítulos de regras e 5 anexos. 'É Le-vi-Ô-sa, não Levio-SÁ!'",
        recommendation: "Saúde (Na área de Administração Hospitalar ou Controle de Vagas)\nAssistência Social (Gerenciando os cadastros e benefícios)\nControladoria Geral (Auditando os programas sociais)"
    };
}

function getProfile3(counts) {
    return {
        type: "ad",
        name: "3. O Saul Goodman do Diário Oficial",
        subtitle: "O Burocrata Pop", 
        analysis: "Você adora o processo (A), mas faz questão de apresentar os resultados numa coletiva de imprensa com show pirotécnico (D). Você gasta 3 meses elaborando um decreto (A) e 6 meses planejando o vídeo de lançamento desse decreto (D). Você sabe a lei (A) e sabe como 'vender' a lei (D).",
        diagnosis: "O Mestre de Cerimônias da Licitação. Você transforma a leitura de uma ata em um evento imperdível. 'Better call...'",
        recommendation: "Casa Civil (Onde as regras e a articulação política se encontram)\nGoverno (O equilíbrio perfeito entre processo e imagem)\nTecnologia e Inovação (Criando processos (A) e vendendo-os como startup (D))"
    };
}

function getProfile4(counts) {
    return {
        type: "bc",
        name: "4. O Bob, o Construtor Social",
        subtitle: "O Síndico do Bairro",
        analysis: "Você vê um problema social (C) e, em vez de criar um comitê, você pega sua caixa de ferramentas e vai lá consertar (B). Você não faz reunião, você faz mutirão. Você conserta o parquinho da praça (B) para as crianças (C).",
        diagnosis: "O Operário Humanitário. Você acha que 'discurso' é o nome de uma ferramenta que você ainda não comprou. 'Podemos ajudar? Sim, podemos!'",
        recommendation: "Habitação (Construindo (B) moradia digna (C))\nMeio Ambiente (Cuidando (C) das praças e rios (B))\nAssistência Social (Liderando ações práticas e emergenciais)"
    };
}

function getProfile5(counts) {
    return {
        type: "bd",
        name: "5. O Luciano Huck do Asfalto",
        subtitle: "O Influencer da Obra", 
        analysis: "Você não apenas supervisiona a obra (B), você faz uma live de capacete anunciando a 'revolução' que aquele tapa-buraco vai causar (D). Você organiza o campeonato de futsal (D) e vai pessoalmente pintar a quadra (B).",
        diagnosis: "O Capataz Carismático. Você consegue convencer as pessoas de que assistir tinta secar é um entretenimento de primeira e uma transformação de vida.",
        recommendation: "Esporte e Lazer (Organizando o evento (D) e cuidando da estrutura (B))\nComunicação (Divulgando as obras e serviços de forma popular)\nServiços e Obras (Como o 'Rosto' da secretaria, lidando com o público)"
    };
}

function getProfile6(counts) {
    return {
        type: "cd",
        name: "6. A Leslie Knope Brasileira", 
        subtitle: "O Embaixador da Causa",
        analysis: "Você ama a causa (C) e ama mais ainda falar sobre a causa num microfone (D). Seu sonho é organizar um 'Baile da Diversidade' (C) com cobertura completa da mídia (D). Você cuida das pessoas (C) e garante que todo mundo saiba disso em um PowerPoint colorido (D).",
        diagnosis: "A Humanista de Palco. Você abraça uma árvore e já pede para alguém tirar a foto para o Instagram da secretaria.",
        recommendation: "Cultura (Eventos com propósito social)\nSec. da Mulher e Diversidade (A voz das campanhas)\nSec. da Promoção da Igualdade Racial (Articulação e promoção de eventos)"
    };
}

function getProfile7(counts) {
    return {
        type: "abd",
        name: "7. O Tony Stark da Prefeitura",
        subtitle: "O Engenheiro de Estado", 
        analysis: "Você é o pacote completo da infraestrutura. Você aprova o orçamento (A), constrói a armadura (B) e faz a coletiva de imprensa dizendo 'Eu sou o Homem de Ferro' (D). Você planeja, executa e corta a fita na inauguração.",
        diagnosis: "O Planejador-Executor-Apresentador. O 'Gênio, Bilionário, Playboy, Filantropo' da gestão.",
        recommendation: "Planejamento e Gestão (Visão global dos grandes projetos)\nGabinete (Como braço direito para tocar as obras prioritárias)\nServiços e Obras (O Secretário titular perfeito)"
    };
}

function getProfile8(counts) {
    return {
        type: "acd", 
        name: "8. O Dumbledore da Defesa Civil",
        subtitle: "O Gestor da Crise Social",
        analysis: "Quando dá uma enchente, você é a pessoa certa. Você organiza os abrigos (C), controla o estoque de doações (A) e vai na rádio acalmar a população com um discurso inspirador (D). Você une a empatia, o controle e a comunicação.",
        diagnosis: "O Burocrata de Coração Mole e Fala Firme. 'A ajuda será dada a todos que a pedirem.'",
        recommendation: "Saúde (Gerenciando crises epidêmicas)\nAssistência Social (Coordenação de emergências)\nComunicação (Porta-voz oficial em crises sociais)"
    };
}

function getProfile10(counts) {
    return {
        type: "balanced",
        name: "10. O Alfred da Prefeitura", 
        subtitle: "O Coringa 'Severino'",
        analysis: "Você respondeu um pouco de tudo. Você sabe fazer a planilha de custos da mansão (A), sabe consertar o Batmóvel (B), sabe dar apoio moral ao 'Patrão Bruce' (C) e ainda atende o telefone (D). Você não é especialista, mas resolve tudo.",
        diagnosis: "O Gestor Multitarefa. O 'resolve-problema' oficial. Você é quem sabe onde está o clips e, ao mesmo tempo, como destravar a grande obra.",
        recommendation: "Gabinete do Prefeito (Onde se apaga incêndio de todo tipo)\nSecretaria de Governo (Onde se articula com todas as outras áreas)\nAdministração (Cuidando do funcionamento interno da máquina)"
    };
}

function getGenericMixedProfile(counts, dominantLetters) {
    const combination = dominantLetters.join('');
    return {
        type: combination,
        name: `Perfil ${combination.toUpperCase()}`,
        subtitle: "Combinação Única de Habilidades",
        analysis: "Você possui uma combinação interessante de características que te torna versátil e adaptável. Sua força está na capacidade de enxergar os problemas por diferentes perspectivas.",
        diagnosis: "O Generalista Especializado. Você não se encaixa em uma caixa, mas sabe usar todas as caixas quando necessário.",
        recommendation: "Gabinete\nCoordenação de Projetos\nAssessorias Estratégicas"
    };
}

function isBalanced(counts) {
    const values = Object.values(counts);
    const max = Math.max(...values);
    const min = Math.min(...values);
    return (max - min) <= 2; // Diferença máxima de 2 entre as contagens
}

// Função para formatar as secretarias como lista enumerada
function formatSecretariasAsList(recommendation) {
    // Dividir por quebras de linha
    const items = recommendation.split('\n').map(item => item.trim()).filter(item => item.length > 0);
    
    // Criar a lista HTML
    let listHTML = '<ol style="margin: 10px 0; padding-left: 20px;">';
    items.forEach(item => {
        listHTML += `<li style="margin-bottom: 8px; line-height: 1.4;">${item}</li>`;
    });
    listHTML += '</ol>';
    
    return listHTML;
}

// Função para mostrar os resultados
function showResults() {
    // Mostrar loading
    form.style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
    loading.style.display = 'block';
    
    // Simular processamento
    setTimeout(() => {
        loading.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        // Determinar o perfil
        const profile = determineProfile(answers);
        
        // Formatar as secretarias como lista enumerada
        const secretariasHTML = formatSecretariasAsList(profile.recommendation);
        
        let resultsHTML = `
            <h2 class="result-title">📊 Seu Perfil de Gestor</h2>
            
            <div class="profile-card ${profile.type}">
                <div class="profile-name">${profile.name}</div>
                <div class="profile-subtitle">${profile.subtitle}</div>
                <div class="profile-analysis">
                    <strong>Análise:</strong> ${profile.analysis}
                </div>
                <div class="profile-diagnosis">
                    <strong>Diagnóstico:</strong> ${profile.diagnosis}
                </div>
                <div class="profile-recommendation">
                    <strong>Áreas de Atuação Recomendadas:</strong>
                    ${secretariasHTML}
                </div>
            </div>
            
            <div class="profile-card">
                <div class="profile-name">🎯 Como Potencializar seu Perfil</div>
                <div class="profile-analysis">
                    <p><strong>Dica Profissional:</strong> Use sua combinação única de habilidades para mediar entre diferentes setores e promover soluções integradas.</p>
                    <p><strong>Desenvolvimento:</strong> Continue desenvolvendo todas as áreas, mas identifique onde você pode se especializar ainda mais.</p>
                    <p><strong>Networking:</strong> Conecte-se com profissionais de diferentes perfis para criar equipes complementares.</p>
                </div>
            </div>
        `;
        
        resultsHTML += `
            <button class="btn restart-btn" id="restartBtn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
                Fazer Teste Novamente
            </button>
        `;
        
        resultsContainer.innerHTML = resultsHTML;
        
        // Adicionar event listener ao botão de reiniciar
        document.getElementById('restartBtn').addEventListener('click', function() {
            // Reiniciar o estado
            currentQuestion = 0;
            answers.fill(null);
            
            // Mostrar o formulário novamente
            form.style.display = 'block';
            document.querySelector('.navigation').style.display = 'flex';
            document.querySelector('.progress-container').style.display = 'flex';
            resultsContainer.style.display = 'none';
            
            // Renderizar a primeira pergunta
            renderQuestion();
        });
    }, 2000);
}

// Event listeners para navegação
prevBtn.addEventListener('click', function() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
});

nextBtn.addEventListener('click', function() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showResults();
    }
});

// Inicializar o formulário
renderQuestion();