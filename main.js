const getS = selector => document.querySelector(selector);

getS('.btn-edit').onclick = function () {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
};

getS('.btn-save').onclick = function () {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
};

getS('.btn-style').onclick = function () {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
};

function fontSize() {
    getS('.top-block').style.fontSize = event.target.value;
};

getS('#fontFamily').onchange = function () {
    getS('.top-block').style.fontFamily = this.value;
    document.querySelector('.top-block').setAttribute('disabled', true);
};

let colors = ['red', 'green', 'yellow', 'blu', 'pink', 'black', 'white', 'gray', 'deeppink'];

getS('.btn-text-color').onclick = function () {
    getS('.colors').classList.remove('hide');
    console.log(event);
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];

        getS('.colors').children[i].onclick = function () {
            getS('.top-block').style.color = this.style.backgroundColor;
            getS('.colors').classList.add('hide');
        };
    };
};
getS('.btn-bg-color').onclick = function () {
    getS('.colors').classList.remove('hide');
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];

        getS('.colors').children[i].onclick = function () {
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;
            getS('.colors').classList.add('hide');
        };
    };
};

getS('.check-bold').onclick = function () {
    if (event.target.checked) {
        getS('.top-block').classList.add('bold');
    }
    else {
        getS('.top-block').classList.remove('bold');
    }
};
getS('.check-cursive').onclick = function () {
    if (event.target.checked) {
        getS('.top-block').classList.add('cursive');
    }
    else {
        getS('.top-block').classList.remove('cursive');
    }
};

getS('.btn-add').onclick = function () {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
    getS('.block').style.height = '470 px';
    getS('.create-table').classList.add('hide');
    getS('.create-list').classList.add('hide');
};

const list = document.forms['form-list'];

getS('.btn-create-list').onclick = function () {
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li>item ${i + 1}</li>`;
    }
    getS('.edit-area').value += '</ul>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    getS('.count').value = '';
    getS('#list').checked = false;
};

getS('#list').onclick = function () {
    getS('.create-list').classList.remove('hide');
    getS('.create-table').classList.add('hide');
}
getS('#table').onclick = function () {
    getS('.create-list').classList.add('hide');
    getS('.create-table').classList.remove('hide');
}

getS('.btn-create-table').onclick = function () {

    var ctr = getS('#ctr');
    var ctd = getS('#ctd');
    var wtd = getS('#wtd');
    var htd = getS('#htd');
    var wb = getS('#wb');
    var tob = getS('#tob');
    var cob = getS('#cob');

    var elem = document.querySelector('.edit-area');

    createTable(elem, ctr.value, ctd.value);

    function createTable(parent, cols, rows) {
        var table = document.createElement('table');
        for (let i = 0; i < rows; i++) {
            var tr = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
                var td = document.createElement('td');
                tr.appendChild(td)
                td.textContent = 'TD';
                td.style.width = `${wtd.value}px`;
                td.style.height = `${htd.value}px`;
                td.style.border = `${wb.value}px ${tob.value} ${cob.value}`;
                console.log(td.style.width);
            }
            table.appendChild(tr)
        }
        parent.appendChild(table)
    }
    getS('.edit-area').value += getS('.edit-area').innerHTML;
    ctr.value = '';
    ctd.value = '';
    wtd.value = '';
    htd.value = '';
    wb.value = '';
    tob.value = 'solid';
    cob.value = 'black';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    getS('.block').style.height = '270 px';
    getS('#table').checked = false;
}