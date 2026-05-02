const modeBtn = document.querySelector('.modebutton');

function checkTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        modeBtn.textContent = "Light"; 
    } else {
        modeBtn.textContent = "Mode";
    }
}

checkTheme();

modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        modeBtn.textContent = "Light";
    } else {
        localStorage.setItem('theme', 'light');
        modeBtn.textContent = "Dark";
    }
});
