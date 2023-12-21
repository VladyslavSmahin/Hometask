/*
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
        } catch (error) {
            console.error('Ошибка:', error);
            div.innerText = 'Произошла ошибка при выполнении запроса.';
        } finally {
            spinner.style.opacity = '0'
        }
    }

    document.getElementById('lightButton').addEventListener('click', sendRequest);
});
*/

document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://swapi.dev/api/';

    async function sendRequest() {
        const userInput = document.getElementById('userInput').value;
        const requestUrl = `${apiUrl}/${userInput}`;
        const spinner = document.getElementById('spinner');
        const divController = document.getElementById('Controller');
        const divId = document.getElementById('ID');
        const responseWrapper = document.getElementById('responseWrapper');
        const preResponse = document.getElementById('response');

        try {
            spinner.style.opacity = '1';

            const userInputArray = userInput.split('/');
            const requestData = {
                controller: userInputArray[0],
                id: userInputArray[1]
            };

            const response = await fetch(requestUrl);
            if (!response.ok) {
                throw new Error('Ошибка');
            }
            const data = await response.json();

            if (requestData.controller !== undefined) {
                divController.innerText = `${requestData.controller}`;
            }

            if (requestData.id !== undefined) {
                divId.innerText = `${requestData.id}`;
            }

            preResponse.innerText = JSON.stringify(data, null, 2);

            responseWrapper.style.display = 'block'; // Показываем блок с данными
        } catch (error) {
            console.error('Ошибка:', error);
            responseWrapper.style.display = 'none'; // Скрываем блок с данными в случае ошибки
        } finally {
            spinner.style.opacity = '0';
        }
    }

    document.getElementById('lightButton').addEventListener('click', sendRequest);
});



