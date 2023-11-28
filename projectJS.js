function generateMealPlan(){

	const mealPlanWindow = window.open('', '_blank');
  	mealPlanWindow.document.write('<html><head><title>Your Meal Plan</title>');

  	mealPlanWindow.document.write('</style></head><body>');
  	mealPlanWindow.document.write('<h1>Your Meal Plan</h1>');
  	mealPlanWindow.document.write('<div class="personal-info">');
	(Personal information display)

  	mealPlanWindow.document.write('</div>');
	mealPlanWindow.document.write('<h2>Meal Plan</h2>');

  	const mealInputs = document.getElementsByClassName('meal-input');
  	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  	mealPlanWindow.document.write('<table>');
  	mealPlanWindow.document.write('<tr><th>Day</th><th>Breakfast</th><th>Snack 1</th><th>Lunch</th><th>Snack 2</th><th>Dinner</th></tr>');

  	for (let i = 0; i < days.length; i++) {
    		const day = days[i];
    		const breakfast = mealInputs[i * 5].value.trim();
    		const snack1 = mealInputs[i * 5 + 1].value.trim();
    		const lunch = mealInputs[i * 5 + 2].value.trim();
    		const snack2 = mealInputs[i * 5 + 3].value.trim();
    		const dinner = mealInputs[i * 5 + 4].value.trim();

    	mealPlanWindow.document.write(`<tr><td>${day}</td><td>${breakfast}</td><td>${Snack 1}</td><td>${lunch}</td><td>${Snack 2}</td><td>${dinner}</td></tr>`);
	
	}

  	mealPlanWindow.document.write('</table>');
  	mealPlanWindow.document.write('</body></html>');
  	mealPlanWindow.document.close();
}
