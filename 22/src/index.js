document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://swapi.dev/api/';

    async function sendRequest() {
        const userInput = document.getElementById('userInput').value;
        const requestUrl = `${apiUrl}/${userInput}`;
        const spinner = document.getElementById('spinner');
        const div = document.getElementById('response');

        try {
            spinner.style.opacity = '1'

            const response = await fetch(requestUrl);
            if (!response.ok) {
                throw new Error('Ошибка');
            }
            const data = await response.json();
            div.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;

            div.style.height = 'auto';
            div.style.height = (div.scrollHeight) + 'px';
        } catch (error) {
            console.error('Ошибка:', error);
            div.innerText = 'Произошла ошибка при выполнении запроса.';
        } finally {
            spinner.style.opacity = '0'
        }
    }

    document.getElementById('lightButton').addEventListener('click', sendRequest);
});
