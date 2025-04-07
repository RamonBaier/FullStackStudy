url = 'https://effective-space-succotash-6996qvg44p673x9w-3000.app.github.dev/'

$(document).ready(() => {

    fetch(url + "tutors")
        .then((res) => { return res.json() })
        .then((tutors) => {
            console.log(tutors)

            list = ""

            for (let tutor of tutors) {
                list += `<option name="tutor" value="${tutor.id}">${tutor.name}</option>`
            }

            $("#tutor-list").html(list)

        })

    listarPets()

})

function salvar() {
    console.log('salvar clicado');
    const form = document.getElementById("form-pet");
    const formData = new FormData(form);
    pet = {}

    for (const [key, value] of formData) {
        console.log('chave', key)
        console.log('valor', value)

        pet[key] = value
    }
    fetch(url + "pets", {
        method: "POST",
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(pet)
    }).then((res) => {
        return res.json()
    })
        .then((data) => {
            console.log(data)
        })
}

function listarPets() {
    fetch(url + "pets")
        .then((res) => { return res.json() })
        .then((pets) => {
            console.log(pets)

            listPets = ""

            for (let pet of pets) {
                listPets += `<tr>
                                <td>${pet.name}</td>
                                <td>${pet.species}</td>
                                <td>${pet.age}</td>
                                <td>${pet.tutorId}</td>
                            </tr>`
            }

            $("#pet-list").html(listPets)

        })
}