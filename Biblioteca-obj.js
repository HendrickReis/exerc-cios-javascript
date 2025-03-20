let biblioteca = {
    livros: [],
    
    adicionarLivro: function(titulo, ano, genero, autor) {
        if(this.livros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase())) {
        console.log("O livro citado já existe!")
        return;
        }
        
        this.livros.push({titulo, ano, genero, autor})
        console.log("Sucesso!")
    },
    
    buscarPorGenero: function(genero) {
        let busca = this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase())
        return busca.length > 0 ? busca : "Gênero não encontrado."
    },
    
    buscarPorAutor: function(autor) {
        let busca = this.livros.filter(livro => livro.autor?.toLowerCase() === autor.toLowerCase())
        return busca.length > 0 ? busca : "Nada encontrado."
    },
    
    buscarPorLivro: function(titulo) {
      let buscaAutor = this.livros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase())
      return buscaAutor ?? "Livro não encontrado."
    },
    
    removerLivro: function(titulo) {
        let busca = this.livros.findIndex(livro => livro.titulo.toLowerCase() === titulo.toLowerCase())
        if (busca === -1) {
            throw new Error("Este livro já existe!")
            return;
        }
        this.livros.splice(busca, 1)
    },
    
    listarLivros: function() {
        return this.livros ? this.livros : "Nenhum livro na biblioteca."
    }
}

biblioteca.adicionarLivro("Smogon", 1999, "Autoajuda", "Hendrick Gautama")
biblioteca.adicionarLivro("Smogon", 1999, "Autoajuda", "Hendrick Gautama")
console.log(biblioteca.listarLivros())
biblioteca.removerLivro("smogon")
console.log(biblioteca.listarLivros())
