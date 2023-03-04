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
  toggleTodo,
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY)
  if (!notes || !notes.length) {
    notes = [
      {
        id: '333ewe',
        createdAt: 1112222,
        type: 'NoteVideo',
        isPinned: false,
        style: {
          backgroundColor: '#F5FFC9',
        },
        info: {
          url: 'https://www.youtube.com/embed/IQw-4JABPCM',
          title: 'Dynamic Components',
        },
      },
      {
        id: 'trf513',
        createdAt: 1112222,
        type: 'NoteImg',
        isPinned: false,
        info: {
          url: 'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o=',
          title: 'ChilloBoy',
        },
        style: {
          backgroundColor: '#DFFFD8',
        },
      },
      {
        id: '333ew12',
        createdAt: 1112233,
        type: 'NoteVideo',
        isPinned: false,
        style: {
          backgroundColor: '#F5FFC9',
        },
        info: {
          url: 'https://www.youtube.com/embed/xgoNSNnfvZM',
          title: 'No Panic',
        },
      },
      {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
          backgroundColor: '#F9DBBB',
        },
        info: {
          title: 'Do As I Say!!',
          txt: 'Fullstack Me Baby!',
        },
      },
      {
        id: 'n9999',
        createdAt: 1112256,
        type: 'NoteTxt',
        isPinned: true,
        style: {
          backgroundColor: '#F9DBBB',
        },
        info: {
          title: 'Passwords',
          txt: 'Gmail: gM@1l222',
        },
      },
      {
        id: 'n102',
        createdAt: 1112222,
        type: 'NoteImg',
        isPinned: false,
        info: {
          url: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
          title: 'Bobi and Me',
        },
        style: {
          backgroundColor: '#DFFFD8',
        },
      },
      {
        id: 'n103',
        createdAt: 1112222,
        type: 'NoteTodos',
        isPinned: false,

        info: {
          title: 'Get my stuff together',
          todos: [
            { txt: 'Driving license', doneAt: null },
            { txt: 'Coding power', doneAt: 187111111 },
            { txt: 'Coding power', doneAt: null },
          ],
        },
        style: {
          backgroundColor: '#B6EADA',
        },
      },
      {
        id: 'n198',
        createdAt: 1112222,
        type: 'NoteTodos',
        isPinned: false,
        info: {
          title: 'Do It All',
          todos: [
            { txt: 'feed my cat', doneAt: null },
            { txt: 'go to the zoo', doneAt: 187111111 },
            { txt: 'clean for passover', doneAt: null },
            { txt: 'clean for passover', doneAt: 187111936 },
            { txt: 'read some good stuff', doneAt: null },
            { txt: 'read some bad stuff', doneAt: 187114219 },
            { txt: 'complain about the weather', doneAt: 187112222 },
          ],
        },
        style: {
          backgroundColor: '#B6EADA',
        },
      },
      {
        id: 'n1111',
        type: 'NoteImg',
        isPinned: false,
        info: {
          url: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg',
          title: 'Gimme scoobydoo',
        },
        style: {
          backgroundColor: '#FFE7CC',
        },
      },
    ]
    utilService.saveToStorage(NOTES_KEY, notes)
  }
}

function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  var match = url.match(regExp)
  return match && match[7].length == 11 ? match[7] : false
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
        title: note.info.title,
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
  } else if (note.type === 'NoteVideo') {
    const URL = youtube_parser(note.info.url)

    note = {
      id: utilService.makeId(),
      type: note.type,
      isPinned: false,
      info: {
        url: `https://www.youtube.com/embed/${URL}`,
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

function updateBgc(noteId, color) {
  return storageService.get(NOTES_KEY, noteId).then(note => {
    note.style.backgroundColor = color
    return storageService.put(NOTES_KEY, note)
  })
}

function duplicateNote(noteId) {
  return storageService.get(NOTES_KEY, noteId).then(note => {
    return storageService.post(NOTES_KEY, note)
  })
}

function toggleTodo(noteId, currTodo) {
  return storageService.get(NOTES_KEY, noteId).then(note => {
    const todo = note.info.todos.find(todo => todo.txt === currTodo.txt)
    if (!todo.doneAt) todo.doneAt = Date.now()
    else todo.doneAt = null
    return storageService.put(NOTES_KEY, note)
  })
}
