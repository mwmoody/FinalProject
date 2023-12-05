function generateMealPlan(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const goal = document.getElementById('goal').value;
  const mealPlanData = [];
  const rows = document.querySelectorAll('#mealPlanTable tbody tr');
  
  rows.forEach(row => {
    const day = row.cells[0].textContent;
    const meals = Array.from(row.cells).slice(1).map(cell => cell.textContent);
    mealPlanData.push({ day, meals });
  });
  
 const generatedPageContent = `
    <h2>${name}</h2>
    <p> ${email}</p>
    <p><strong>Goal: ${goal}</p>

    <h3>Meal Plan</h3>
    <table border="1">
      <tr>
        <th>Day</th>
        <th>Breakfast</th>
        <th>Snack</th>
        <th>Lunch</th>
        <th>Snack</th>
        <th>Dinner</th>
      </tr>
      ${generateMealRows(mealPlanData)}
    </table>
  `;

  const generatedPageWindow = window.open();
  generatedPageWindow.document.write(generatedPageContent);
}
// creates the data for each row used
function generateMealRows(mealPlanData){
  let rows = '';
  mealPlanData.forEach(dayData => {
    rows += `<tr>
      <td>${dayData.day}</td>
      <td>${dayData.meals[0]}</td>
      <td>${dayData.meals[1]}</td>
      <td>${dayData.meals[2]}</td>
      <td>${dayData.meals[3]}</td>
      <td>${dayData.meals[4]}</td>
    </tr>`;
  });
  return rows;
}

function clearForm() {
  document.getElementById('mealForm').reset();
  clearTableInput();
}

function clearTableInput() {
  const cells = document.querySelectorAll('#mealPlanTable tbody td');
  cells.forEach(cell => {
    cell.textContent = '';
  });
}
