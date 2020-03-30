const readline = require('readline-sync')
const robots = {
        text: require('./robots/text.js')
}
async function start() {
        const content = {}
        content.searchTerm = askAndReturnSearchTerm()
        content.prefix = askAndReturnPrefix()
        await   robots.text(content)
        function askAndReturnSearchTerm() {
                return readline.question('Type a Wikipedia search term: ')
        }
function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'choose one option: ') // devolve os indices
    const selectedPrefixText = prefixes[selectedPrefixIndex] // retorna o texto do índice escolhido
    return selectedPrefixText // vai retornar o valor do texto e injetar na propriedade content.prefix
        }
  console.log(content)
}

start()