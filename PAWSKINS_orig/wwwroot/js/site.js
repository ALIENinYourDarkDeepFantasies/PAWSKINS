document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;

function mySort() {
    let nav = document.querySelector('.inventory');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function mySortDesc() {
    let nav = document.querySelector('.inventory');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

const elastic = document.querySelector('#elastic')

elastic.addEventListener('input', (ev) => {
    const value = ev.target.value.trim()
    const elasticItems = document.querySelectorAll('.lot')
    const searchRegExp = new RegExp(value, 'gi')

    if (value === '') {
        elasticItems.forEach((el) => {
            el.classList.remove('hide')
        })
        return
    }

    elasticItems.forEach((el) => {
        const innerCard = el.querySelector('.bottomLot')
        const elementText = innerCard.textContent
        const isContainsSearchRequest = searchRegExp.test(elementText)
        if (!isContainsSearchRequest) {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
        }
    })
})

