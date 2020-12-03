function copyToClipboard(txt = '') {
    if (txt != '') {
        const ta = document.createElement('textarea');
        ta.value = txt;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    }
}

function searchFunction() {
    let input = document.getElementById('input');
    let filter = input.value.toUpperCase();
    let table = document.getElementById('table');
    let tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}

function linkAndClipboard(link = '', txt = '') {
    copyToClipboard(txt);
    window.open(link);
}