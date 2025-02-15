const elastic2 = document.querySelector('#elastic2')

elastic2.addEventListener('input', (ev) => {
    const value = ev.target.value.trim()
    const elasticItems = document.querySelectorAll('.lot2')
    const searchRegExp = new RegExp(value, 'gi')

    if (value === '') {
        elasticItems.forEach((el) => {
            el.classList.remove('hide')
        })
        return
    }

    elasticItems.forEach((el) => {
        const innerCard = el.querySelector('.bottomLot2')
        const elementText = innerCard.textContent
        const isContainsSearchRequest = searchRegExp.test(elementText)
        if (!isContainsSearchRequest) {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
        }
    })
})