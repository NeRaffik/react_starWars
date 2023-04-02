import {HTTP, HTTPS} from '@constants/api';

/**
 * изменяет url с HTTP на HTTPS
 * @param {String} url = url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}

/**
 * отправляет запрос fetch
 * @param {String} url - url для запроса 
 * @returns {Promise} - Promise с результатом запроса
 */
export const GetApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if(!res.ok){
            console.log('Could not fetch. ',res.status);
            return false;
        }

        return await res.json();

    } catch (error) {
        console.error('Could not fetch. ',error.message);
        return false;
    }
}

// GetApiResource(SWAPI_ROOT + SWAPI_PEOPLE+1)
//     .then(body => console.log(body))

// (async () => {
//     const body = await GetApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//     console.log(body);
// })();

/**
 * Отправляет несколко запросов Fetch из массива URL
 * @param {Array<String>} urls - массив с URL для запроса
 * @return {Promise} - Promise с результатом запросов
 */
export const MakeConcurrentRequest = async (urls) => {
    const res = await Promise.all(urls.map(res => {
		return fetch(res).then(res => res.json())
	 }))

	 return res;
};