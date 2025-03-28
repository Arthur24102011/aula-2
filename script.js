// Função para alternar o tema
const themeToggleButton = document.getElementById('theme-toggle');

// Verificar se o tema foi salvo previamente no localStorage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    document.querySelector('header').classList.add('light-theme');
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.add('light-theme');
    });
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('light-theme');
    });
}

// Adicionar evento de clique no botão para alternar o tema
themeToggleButton.addEventListener('click', function () {
    const body = document.body;
    const header = document.querySelector('header');
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Alternar entre as classes de tema
    body.classList.toggle('light-theme');
    header.classList.toggle('light-theme');
    links.forEach(link => link.classList.toggle('light-theme'));
    sections.forEach(section => section.classList.toggle('light-theme'));

    // Salvar a preferência do usuário no localStorage
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
