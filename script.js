
    const form = document.querySelector('#note-form');
    const input = document.querySelector('#note-input');
    const list = document.querySelector('#note-list');

    function addNote() {
      if (input.value.trim() === '') {
        return;
      }
      
      const note = document.createElement('li');
      note.innerHTML = `
        <span>${input.value}</span>
        <button>Delete</button>
      `;
      
      list.appendChild(note);
      input.value = '';
      
      const deleteButton = note.querySelector('button');
      deleteButton.addEventListener('click', () => {
        note.remove();
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      addNote();
    });
  