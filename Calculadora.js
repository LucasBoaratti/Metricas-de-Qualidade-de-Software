// 1 - Complexidade Ciclomática: O código é curto, então não é muito complexo (Métrica de código)
// 2 - Tempo de resposta: 1.5 segundo (Métrica de desempenho) - Ver imagem
// 3 - Complexidade de Nível de Função: O código possui duas entradas de números e apenas uma saída, além de ter uma interface simples de entender (Métrica de Código)
// 4 - Código duplicado: Ao exibir o resultado, o código se duplica para exibir o conteúdo na tela (Métrica de Manutenibilidade)
// 5 - Tratamento de erros: O código evita a divisão por zero, melhorando a confiabilidade (Métrica de Confiabilidade)
// 6 - Clareza nas respostas: O código possui mensagens claras e um layout simples, facilitando para novos usuários (Métrica de Usabilidade)

function calculadora() {
    const n1 = Number(document.getElementById("numero1").value);
    const n2 = Number(document.getElementById("numero2").value);
    const opcoes = document.getElementById("opcoes").value;

    if (opcoes === "soma") {
        const soma = n1 + n2;

        document.getElementById("resultado").textContent = `O resultado de ${n1} + ${n2} é: ${soma}`;
    }
    else if (opcoes === "subtracao") {
        const subtracao = n1 - n2;

        document.getElementById("resultado").textContent = `O resultado de ${n1} - ${n2} é: ${subtracao}`;
    }
    else if (opcoes === "multiplicacao") {
        const multiplicacao = n1 * n2;

        document.getElementById("resultado").textContent = `O resultado de ${n1} * ${n2} é: ${multiplicacao}`;
    }
    else if (opcoes === "divisao") {
        if (n2 === 0) {
            document.getElementById("resultado").textContent = `Não existe divisão por zero!`;
        }
        else {
            const divisao = n1 / n2;

            document.getElementById("resultado").textContent = `O resultado de ${n1} / ${n2} é: ${divisao.toFixed(2)}`;
        }
    }
    else {
        document.getElementById("resultado").textContent = `Escolha ao menos uma opção!`;
    }
}

calculadora();