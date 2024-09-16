document.addEventListener('DOMContentLoaded', function(){
    const table = document.querySelector('#table');

    const perData = [
        {
            space: true,
            colspan: 16,
            rowspan: 1,
            data: ['H', false, 'He']
        },
        {
            space: true,
            colspan: 10,
            rowspan: 2,
            data: ['Li', 'Be', false, 'B', 'C', 'N', 'O', 'F', 'Ne']
        },
        {
            space: false,
            data: ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar']
        },
        {
            space: false,
            data: ['K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'],
        },
        {
            space: false,
            data: ['Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe'],
        },
        {
            space: false,
            data: ['Cs', 'Ba', ' ', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn'],
        },
        {
            space: false,
            data: ['Fr', 'Ra', ' ', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og']
        },
    ]

    perData.forEach(item => {
        const row = document.createElement('tr');

        if(item.space){
            item.data.forEach(value => {
                const column = document.createElement('td');
                if(value){
                    column.textContent = value;
                } 
                else {
                    column.setAttribute('colspan',`${item.colspan}`)
                    column.setAttribute('rowspan',`${item.rowspan}`)
                    column.setAttribute('class','special-td')
                }
                row.appendChild(column);
            })
        }

        else {
            item.data.forEach(value => {
                const column = document.createElement('td');
                column.textContent = value;
                row.appendChild(column);
            })
        }

        table.appendChild(row);
    })


    // td background-color

    const tdColumn = document.querySelectorAll('#table tr td');
    const tdColorData = [
        { index: [0,7,8,9,16,17,35], color: '#31c2fb'},
        { index: [14,32,50,51,68,69,70,86,87,88,89], color: '#95ff00'},
        { index: [6,15,33,34,52,53,71], color: '#106b00'},
        { index: [58,76], color: '#ff00ae'},
    ]

    tdColorData.forEach(item => {
        item.index.forEach(element => {
            tdColumn[element].style = `background-color:${item.color}`
        })
    })

})