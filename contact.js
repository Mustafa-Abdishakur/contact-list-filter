
const contactList = document.querySelectorAll('li');
document.querySelector('input').addEventListener('input', el => {
    const input = el.target.value;
    contactList.forEach(contact => {
        let contactName = contact.innerHTML.toLowerCase();
        if (!(contactName.includes(`${input}`))) {
            contact.classList.add('disappear');
        }else{
            contact.classList.remove('disappear');
        }
    });
    
});
