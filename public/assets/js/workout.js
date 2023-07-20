const formHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const time = document.querySelector('#time').value.trim();

    if (title && content && time) {
        const response = await fetch('/api/workout', {
            method: 'POST',
            body: JSON.stringify({ title, content, time }),
            headers: { 'Content-Type': 'application/json' },
        })

        if(response.ok) {
            console.log("successfully created new workout plan");
            location.reload();
        } else {
            alert('Error creating workout plan. Make sure to fill out all fields.')
        }
    }
}

const deleteButtons = document.querySelectorAll('.delete-btn');


deleteButtons.forEach(button => {
  button.addEventListener('click', async () => {
    try {
      const workoutId = button.dataset.id;
      const deleteWorkout = await fetch(`/api/workout/${workoutId}`, { method: 'DELETE' });

      if (deleteWorkout.ok) {
        console.log("Successfully deleted workout!");
        location.reload();
      } else {
        console.error('Error deleting the workout');
      }
    } catch (error) {
      console.error(error);
    }
  });
});

document.querySelector('#create-form').addEventListener('submit', formHandler);