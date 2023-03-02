import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTES_KEY = 'notesDB'

_createNotes()

export const noteService = {
  notesQuery,
  getNote,
  removeNote,
  saveNote,
  editNote,
  updateBgc,
  duplicateNote,
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY)
  if (!notes || !notes.length) {
    notes = [
      {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
          backgroundColor: '#00d',
        },
        info: {
          txt: 'Fullstack Me Baby!',
        },
      },
      {
        id: 'n102',
        type: 'NoteImg',
        isPinned: false,
        info: {
          url: 'http://some-img/me',
          title: 'Bobi and Me',
        },
        style: {
          backgroundColor: '#00d',
        },
      },
      {
        id: 'n103',
        type: 'NoteTodos',
        isPinned: false,

        info: {
          title: 'Get my stuff together',
          todos: [
            { txt: 'Driving license', doneAt: null },
            { txt: 'Coding power', doneAt: 187111111 },
          ],
        },
        style: {
          backgroundColor: '#607',
        },
      },
      {
        id: 'n1111',
        type: 'NoteImg',
        isPinned: false,
        info: {
          url: 'http://some-img/me',
          title: 'Gimme scoobydoo',
        },
        style: {
          backgroundColor: '#607',
        },
      },
    ]
    utilService.saveToStorage(NOTES_KEY, notes)
  }
}

function notesQuery(filterBy = {}) {
  return storageService.query(NOTES_KEY).then(notes => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      notes = notes.filter(note => regex.test(note.info.title))
    }
    if (filterBy.type) {
      notes = notes.filter(note => note.type === filterBy.type)
    }
    return notes
  })
}

function getNote(noteId) {
  return storageService.get(NOTES_KEY, noteId)
}

function removeNote(NoteId) {
  return storageService.remove(NOTES_KEY, NoteId)
}

function saveNote(note) {
  if (note.type === 'NoteTxt') {
    note = {
      id: utilService.makeId(),
      type: 'NoteTxt',
      isPinned: false,
      info: {
        title: note.info.title,
        txt: note.info.txt,
      },
      style: {
        backgroundColor: utilService.getRandomColor(),
      },
    }
  } else if (note.type === 'NoteTodos') {
    note = {
      id: utilService.makeId(),
      type: 'NoteTodos',
      isPinned: false,
      info: {
        label: note.info.label,
        todos: note.info.todos,
      },
      style: {
        backgroundColor: utilService.getRandomColor(),
      },
    }
  } else if (note.type === 'NoteImg') {
    note = {
      id: utilService.makeId(),
      type: note.type,
      isPinned: false,
      info: {
        url: note.info.url,
        title: note.info.title,
      },
      style: {
        backgroundColor: utilService.getRandomColor(),
      },
    }
  }
  return notesQuery().then(notes => {
    notes.push(note)
    return storageService.post(NOTES_KEY, note)
  })
}

function editNote(noteId, newNote) {
  return storageService.get(NOTES_KEY, noteId).then(note => {
    note = newNote
    return storageService.put(NOTES_KEY, note)
  })
}

function updateBgc(noteId, bgc) {
  return storageService.get(NOTES_KEY, noteId).then(note => {
    note.style.backgroundColor = bgc
    return storageService.put(NOTES_KEY, note)
  })
}

function duplicateNote(noteId) {
  return storageService.get(NOTES_KEY, noteId).then(note => {
    return storageService.post(NOTES_KEY, note)
  })
}
