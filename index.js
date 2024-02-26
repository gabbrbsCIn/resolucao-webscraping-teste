let informacoesProduto = {};

// Coletando Título do Produto
const titulo = document.querySelector("#product > div > div > div.card-section > div > div.medium-8.small-12.columns > h2");
if (titulo) {
    informacoesProduto['Título'] = titulo.innerText;
} else {
    informacoesProduto['Título'] = 'Não definido'
}

// Coletando Nome Genérico 
const nomeGenerico = document.querySelector("#field_generic_name_value > span");
if (nomeGenerico) {
    informacoesProduto['Nome Genérico'] = nomeGenerico.innerText;
} else {
    informacoesProduto['Nome Genérico'] = 'Não definido'
}


// Coletando Quantidade  
const quantidade = document.querySelector("#field_quantity_value");
if (quantidade) {
    informacoesProduto['Quantidade'] = quantidade.innerText;
} else {
    informacoesProduto['Quantidade'] = 'Não definido'
}


// Coletando Marcas
const marcas = document.querySelector("#field_brands_value");
if (marcas) {
    informacoesProduto['Marcas'] = marcas.innerText.split(",");
} else {
    informacoesProduto['Marcas'] = 'Não definido'
}

// Coletando Categorias
const categorias = document.querySelector("#field_categories_value");
if (categorias) {
    informacoesProduto['Categorias'] = categorias.innerText.split(",");
} else {
    informacoesProduto['Categorias'] = 'Não definido';
}

//Coletando Ingredientes
const ingredientes = document.querySelector("#panel_ingredients_content > div:nth-child(1) > div > div");
if (ingredientes) {
    informacoesProduto['Ingredientes'] = ingredientes.innerText;
} else {
    informacoesProduto['Ingredientes'] = 'Não definido';
}


// Coletando se o produto é Vegano (Sim), Não Vegano (Não) ou Não definido
const vegano = document.querySelector("#panel_ingredients_analysis_en-vegan > li > a > h4");
const naoVegano = document.querySelector("#panel_ingredients_analysis_en-non-vegan > li > a > h4");
if (vegano) {
    informacoesProduto['Vegano'] = "Sim";

} else if (naoVegano) {
    informacoesProduto['Vegano'] = "Não";
}
else {
    informacoesProduto['Vegano'] = 'Não definido';
}

// Coletando Nutri-Score 
const nutriScore = document.querySelector("#attributes_grid > li:nth-child(1) > a > div > div > div.attr_text > h4");
if (nutriScore) {
    const nutriScoreTexto = nutriScore.innerText;
    const nutriScoreLetraFinal = nutriScoreTexto.slice(-1);
    if (nutriScoreLetraFinal === 'A' || nutriScoreLetraFinal === 'B' || nutriScoreLetraFinal === 'C' || nutriScoreLetraFinal === 'D' || nutriScoreLetraFinal === 'E') {
        informacoesProduto['Nutri-Score'] = nutriScoreLetraFinal;
    } else {
        informacoesProduto['Nutri-Score'] = nutriScoreTexto;
    }
} else {
    informacoesProduto['Nutri-Score'] = 'Não definido';
}

//Coletando NOVA
const nova = document.querySelector("#attributes_grid > li:nth-child(2) > a > div > div > div.attr_text > h4");
if (nova) {
    const novaTexto = nova.innerText;
    const novaNumFinal = novaTexto.slice(-1);
    if (novaNumFinal === '1' || novaNumFinal === '2' || novaNumFinal === '3' || novaNumFinal === '4') {
        informacoesProduto['NOVA'] = novaNumFinal;
    }
    else {
        informacoesProduto['NOVA'] = novaTexto;
    }

} else {
    informacoesProduto['NOVA'] = 'Não definido';
}

//Coletando Eco-Score
const ecoScore = document.querySelector("#attributes_grid > li:nth-child(3) > a > div > div > div.attr_text > h4");
if (ecoScore) {
    const ecoScoreTexto = ecoScore.innerText;
    const ecoScoreLetraFinal = ecoScoreTexto.slice(-1);
    if (ecoScoreLetraFinal === 'A' || ecoScoreLetraFinal === 'B' || ecoScoreLetraFinal === 'C' || ecoScoreLetraFinal === 'D' || ecoScoreLetraFinal === 'E') {
        informacoesProduto['Eco-Score'] = ecoScoreLetraFinal;
    }
    else {
        informacoesProduto['Eco-Score'] = ecoScoreTexto;
    }
} else {
    informacoesProduto['Eco-Score'] = 'Não definido';
}

console.log(informacoesProduto);
copy(informacoesProduto);