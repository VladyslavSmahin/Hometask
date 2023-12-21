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

            divController.innerText = requestData.controller !== undefined ? requestData.controller : '';
            divId.innerText = requestData.id !== undefined ? requestData.id : '';


            preResponse.innerText = JSON.stringify(data, null, 2);

            responseWrapper.style.display = 'block';
        } catch (error) {
            console.error('Ошибка:', error);
            responseWrapper.style.display = 'none';
        } finally {
            spinner.style.opacity = '0';
        }
    }

    document.getElementById('lightButton').addEventListener('click', sendRequest);
});



