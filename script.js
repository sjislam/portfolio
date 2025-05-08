document.getElementById('year').textContent = new Date().getFullYear();

function openModal(modalType) {
    document.getElementById(`${modalType}-modal`).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalType) {
    document.getElementById(`${modalType}-modal`).classList.remove('active');
    document.body.style.overflow = '';
}

const modals = document.querySelectorAll('.modal-backdrop');
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const originalSubmit = form.onsubmit;
    
    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value;
        
        setTimeout(function() {
            closeModal('contact');
        }, 500);
    });
});