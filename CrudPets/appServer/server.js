const fS = require("fs")

require("http")
    .createServer((req, res) => {

        rota = req.url

        if (rota = "lista-alunos") {

            page = fS.readFileSync("./lista-alunos.html")


            res.end(page)

        } else {



            idAluno = req.url.replace("/", "")

            alunos = [{ nome: "ramon" }, { nome: "pablo" }]

            page = fS.readFileSync("./index.html").toString()

            pagePronta = page.replace("nome", alunos[idAluno].nome)

            res.end(pagePronta)
            // estudar string e manipulação + array e manipulação
        }
    })
    .listen(3000, () => { console.log("servidor on na porta 3000") })