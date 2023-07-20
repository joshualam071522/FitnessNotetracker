const formHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const calories = document.querySelector('#calories').value.trim();

    if (title && content && calories) {
        const response = await fetch('/api/meal', {
            method: 'POST',
            body: JSON.stringify({ title, content, calories }),
            headers: { 'Content-Type': 'application/json' },
        })

        if(response.ok) {
            console.log("successfully created new meal plan");
            location.reload();
        } else {
            alert('Error creating meal. Make sure to fill out all fields.')
        }
    }
}

const deleteButtons = document.querySelectorAll('.delete-btn');


deleteButtons.forEach(button => {
  button.addEventListener('click', async () => {
    try {
      const mealId = button.dataset.id;
      const deleteMeal = await fetch(`/api/meal/${mealId}`, { method: 'DELETE' });

      if (deleteMeal.ok) {
        // Handle successful deletion, e.g., remove the meal card from the DOM
        console.log("Successfully deleted meal!");
        location.reload();
      } else {
        // Handle error
        console.error('Error deleting the meal');
      }
    } catch (error) {
      console.error(error);
    }
  });
});

document.querySelector('#create-form').addEventListener('submit', formHandler);