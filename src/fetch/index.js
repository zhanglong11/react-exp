
function get (url) {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    return fetch(url, {
        method: 'GET',
        headers: headers
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: 'Request failed.'}};
    })
}

function post (url, data) {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: 'Request failed.'}};
    })
}

function put (url, data) {
    let token = localStorage.getItem("token");
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    return fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: 'Request failed.'}};
    })
}

function handleResponse (url, response) {
    if (response.status < 500) {
        return response.json();
    } else {
        console.error(`Request failed. Url = ${url} . Message = ${response.statusText}`);
        return {error: {message: 'Request failed due to server error '}};
    }
}
function exportQrcord(url,name){
    let token = localStorage.getItem("token");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange =function(){
        if (this.readyState === 4) {
            if (this.status === 200) {
                // fra.setAttribute('src', URL.createObjectURL(this.response))
                let a = document.createElement('a');
                let url = URL.createObjectURL(this.response)
                a.href = url;
                a.download = name+'.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            } else {
                console.error('XHR failed', this);
            }
        }
    };
    xhr.responseType = 'blob';
    xhr.setRequestHeader('x-access-token', token);
    xhr.send();

}
export {get, post, put,exportQrcord}