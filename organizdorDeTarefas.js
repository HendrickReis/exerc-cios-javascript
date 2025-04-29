let organizarTarefas = {
    listaTarefas: [],
    
    adicionarTarefas: function(titulo, prioridade, concluida=false) {
        const invalidate = ['alta', 'media', 'baixa']
        if (!invalidate.includes(prioridade.toLowerCase())) {
            console.log("[ERRO] Dados invalidados! tente novamente!")
            return;
        }
        
        this.listaTarefas.push({ titulo, prioridade, concluida })
    },
    
    organizarTarefas: function() {
        let listaOrganizada = {
            alta: {
                concluidas: [],
                pendentes: []
            },
            media: {
                concluidas: [],
                pendentes: []
            } ,
            baixa: {
                concluidas: [],
                pendentes: []
            }
        }
        
        this.listaTarefas.forEach((value) => {
            if (value.prioridade.toLowerCase() === 'alta') {
                if (value.concluida === true) {
                    listaOrganizada.alta.concluidas.push(value.titulo)
                } else {
                    listaOrganizada.alta.pendentes.push(value.titulo)
                }
            } else if (value.prioridade.toLowerCase() === 'media') {
                if (value.concluida === true) {
                    listaOrganizada.media.concluidas.push(value.titulo)
                } else {
                listaOrganizada.media.pendentes.push(value.titulo)
                }
            } else {
                if (value.concluida === true) {
                listaOrganizada.baixa.concluidas.push(value.titulo)
                } else {
                    listaOrganizada.baixa.pendentes.push(value.titulo)
                }
            }
        })
        
        return listaOrganizada;
    },
    
    listarTarefas() {
        return this.organizarTarefas();
    }
}

organizarTarefas.adicionarTarefas('Estudar JavaScript', 'alta', false)
organizarTarefas.adicionarTarefas('Lavar a louça', 'baixa', true)
organizarTarefas.adicionarTarefas('pagar contas', 'alta', true)
organizarTarefas.adicionarTarefas('Fazer exercícios', 'media', false)

console.log(organizarTarefas.listarTarefas())
