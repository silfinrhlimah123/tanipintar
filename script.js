document.addEventListener('DOMContentLoaded', function() {
    const tasks = document.querySelectorAll('.task');
    const congratulations = document.getElementById('congratulations');

    tasks.forEach(task => {
        task.addEventListener('change', checkTasksCompletion);
    });

    function checkTasksCompletion() {
        const allTasksCompleted = [...tasks].every(task => task.checked);

        if (allTasksCompleted) {
            congratulations.classList.remove('hidden');
        }
    }
});
