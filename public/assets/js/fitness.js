// const formHandler = async (event) => {
//     event.preventDefault();

//     const title = document.querySelector('#title').value.trim();
//     const content = document.querySelector('#content').value.trim();
//     const calories = document.querySelector('#calories').value.trim();

//     if (title && content && calories) {
//         const response = await fetch('/api/meal', {
//             method: 'POST',
//             body: JSON.stringify({ title, content, calories }),
//             headers: { 'Content-Type': 'application/json' },
//         })

//         if(response.ok) {
//             console.log("successfully created new meal plan");
//             location.reload();
//         } else {
//             alert('error creating meal')
//         }
//     }
// }

// const deleteButtons = document.querySelectorAll('.delete-btn');

// deleteButtons.forEach(button => {
//   button.addEventListener('click', async () => {
//     try {
//       const mealId = button.dataset.id;
//       const deleteMeal = await fetch(`/api/meal/${mealId}`, { method: 'DELETE' });

//       if (deleteMeal.ok) {
//         // Handle successful deletion, e.g., remove the meal card from the DOM
//         console.log("Successfully deleted meal!");
//         location.reload();
//       } else {
//         // Handle error
//         console.error('Error deleting the meal');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   });
// });

// document.querySelector('#create-form').addEventListener('submit', formHandler);

// JavaScript code for fitness.handlebars
$(document).ready(function () {
  // Function to handle adding new workout plan
  function addNewWorkout() {
    const workoutSection = $(".workout-section");
    const newWorkoutRow = `
        <div class="form-group workout-row">
          <label for="workout">Enter Workout Plan here:</label>
          <input type="text" class="form-control" id="workout" name="workout">
          <button class="btn btn-danger mt-2" onclick="removeWorkout(this)">X</button>
        </div>
      `;
    workoutSection.append(newWorkoutRow);
  }

  // Function to handle removing a workout plan
  function removeWorkout(button) {
    $(button).parent().remove();
  }

  // Event handler for adding new workout plan button
  $(".workout-section .btn-primary").on("click", function (event) {
    event.preventDefault();
    addNewWorkout();
  });

  // Event handler for removing a workout plan button
  $(".workout-section").on("click", ".btn-danger", function (event) {
    event.preventDefault();
    removeWorkout(this);
  });
});
