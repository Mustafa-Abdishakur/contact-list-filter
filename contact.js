
const contactList = document.querySelectorAll('li');
const headerList = document.querySelectorAll('ul');
let contactArr = [];

headerList.forEach(contact => {
    console.log(contact);

});
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
/*
*get input
 * compare input with contact list
 * display contact if input is similar
 */