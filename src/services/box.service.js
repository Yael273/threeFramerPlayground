
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'boxDB'

_createBoxes()

export const boxService = {
    query,
    getById,
    save,
    remove,
    getNewBox,
}
window.cs = boxService

async function query() {
    var boxes = await storageService.query(STORAGE_KEY)
    return boxes
}

function getById(boxId) {
    return storageService.get(STORAGE_KEY, boxId)
}

async function remove(boxId) {
    await storageService.remove(STORAGE_KEY, boxId)
}
async function save(box) {
    var savedBox
    if (box._id) {
        savedBox = await storageService.put(STORAGE_KEY, box)
    } else {
        savedBox = await storageService.post(STORAGE_KEY, box)
    }
    return savedBox
}

function getNewBox() {
    return {
        height: utilService.getRandomIntInclusive(10, 90) + 'vh',
        width: utilService.getRandomIntInclusive(10, 50) + 'vw',
        top: utilService.getRandomIntInclusive(30, 450),
        left: utilService.getRandomIntInclusive(50, 1000),
        color: utilService.randomColor()
    }
}

function _createBoxes() {
    let boxes = utilService.loadFromStorage(STORAGE_KEY)
    if (!boxes || !boxes.length) {
        boxes = [
            {
                _id: utilService.makeId(),
                height: 90 + 'vh',
                width: 50 + 'vw',
                top: '',
                left: '',
                color: utilService.randomColor()
            },
            {
                _id: utilService.makeId(),
                height: 30 + 'vh',
                width: 20 + 'vw',
                top: 30,
                left: 0,
                color: utilService.randomColor()
            },
        ]
        utilService.saveToStorage(STORAGE_KEY, boxes)
    }
}
